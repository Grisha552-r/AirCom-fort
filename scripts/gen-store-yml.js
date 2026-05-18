'use strict';
const fs = require('fs');
const path = require('path');
const readline = require('readline');

const CATALOG_PATH = 'C:\\Users\\veron\\OneDrive\\Desktop\\catalog.yml';
const OUTPUT_PATH = path.join(__dirname, '..', 'src', 'lib', 'store.ts');

const TARGET_VENDORS = new Set(['Electrolux', 'Ballu', 'TOSHIBA', 'SHUFT', 'Royal Thermo']);

// STRICT: only these climate-equipment categoryIds (Rusklimat YML IDs)
// 25979 = Сплит-системы настенного типа
// 26526 = Сплит-системы свободной компоновки (duct/cassette/universal)
// 25984 = Мульти сплит-системы
// 26030 = Полупромышленные сплит-системы
// 25982 = Мобильные кондиционеры
const ALLOWED_CAT_IDS = new Set(['25979', '26526', '25984', '26030', '25982']);

// Map (catalogCatId + vendor) → SGA category slug
function getSgaCategory(vendor, catalogCatId) {
  if (catalogCatId === '25982') return 'mobile';
  if (catalogCatId === '25984') return 'multi-split';
  if (catalogCatId === '26030') return 'semi-pro';

  // 25979 and 26526 are wall/free-config splits — assign by vendor
  if (catalogCatId === '25979' || catalogCatId === '26526') {
    if (vendor === 'Electrolux')    return 'split-electrolux';
    if (vendor === 'Ballu')         return 'split-ballu';
    if (vendor === 'TOSHIBA')       return 'split-toshiba';
    if (vendor === 'SHUFT')         return 'split-shuft';
    if (vendor === 'Royal Thermo')  return 'split-royal';
  }
  return null;
}

// Max products per SGA category slug to keep store.ts manageable
const CAT_LIMIT = {
  'split-electrolux': 180,
  'split-ballu':      180,
  'split-toshiba':    999,
  'split-shuft':      999,
  'split-royal':      999,
  'multi-split':      999,
  'semi-pro':         200,
  'mobile':           999,
};

function extractTag(xml, tag) {
  const m = xml.match(new RegExp(`<${tag}(?:\\s[^>]*)?>([\\s\\S]*?)<\\/${tag}>`, 'i'));
  return m ? m[1].trim() : '';
}

function extractCDATA(xml, tag) {
  const m = xml.match(new RegExp(`<${tag}[^>]*><!\\[CDATA\\[([\\s\\S]*?)\\]\\]><\\/${tag}>`, 'i'));
  if (m) return m[1].trim();
  return extractTag(xml, tag);
}

function extractAllPictures(xml) {
  const re = /<picture>(https?[^<]+)<\/picture>/gi;
  const out = [];
  let m;
  while ((m = re.exec(xml)) !== null) out.push(m[1].trim());
  return out;
}

function extractParams(xml) {
  const re = /<param name="([^"]+)"(?:\s[^>]*)?>([^<]*)<\/param>/gi;
  const params = {};
  let m;
  while ((m = re.exec(xml)) !== null) {
    const key = m[1].trim();
    const val = m[2].trim();
    if (key && val) params[key] = val;
  }
  return params;
}

function esc(str) {
  return String(str)
    .replace(/\\/g, '\\\\')
    .replace(/"/g, '\\"')
    .replace(/\n/g, ' ')
    .replace(/\r/g, '');
}

function slugify(str) {
  const map = {а:'a',б:'b',в:'v',г:'g',д:'d',е:'e',ё:'yo',ж:'zh',з:'z',и:'i',й:'y',к:'k',л:'l',м:'m',н:'n',о:'o',п:'p',р:'r',с:'s',т:'t',у:'u',ф:'f',х:'kh',ц:'ts',ч:'ch',ш:'sh',щ:'sch',ъ:'',ы:'y',ь:'',э:'e',ю:'yu',я:'ya'};
  return String(str).toLowerCase()
    .replace(/[а-яё]/g, c => map[c] || c)
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .substring(0, 80);
}

function stripHtml(html) {
  return html
    .replace(/<[^>]+>/g, ' ')
    .replace(/&nbsp;/g, ' ')
    .replace(/&deg;/g, '°')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#\d+;/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function rnd(min, max) { return Math.floor(Math.random() * (max - min + 1)) + min; }
function rndF(min, max, dec) { return parseFloat((Math.random() * (max - min) + min).toFixed(dec)); }

async function parseOffers() {
  return new Promise((resolve, reject) => {
    const products = [];
    const catCounts = {};   // SGA slug → count (for limiting)
    const slugCounts = {};  // to deduplicate slugs
    const rl = readline.createInterface({
      input: fs.createReadStream(CATALOG_PATH, { encoding: 'utf8' }),
      crlfDelay: Infinity,
    });

    let inOffer = false;
    let offerLines = [];
    let totalParsed = 0;
    let totalKept = 0;

    rl.on('line', (line) => {
      const trimmed = line.trim();
      if (trimmed.startsWith('<offer ')) {
        inOffer = true;
        offerLines = [line];
      } else if (inOffer) {
        offerLines.push(line);
        if (trimmed === '</offer>') {
          totalParsed++;
          const xml = offerLines.join('\n');

          const vendor = extractTag(xml, 'vendor');
          const catalogCatId = extractTag(xml, 'categoryId');

          if (TARGET_VENDORS.has(vendor) && ALLOWED_CAT_IDS.has(catalogCatId)) {
            const catSlug = getSgaCategory(vendor, catalogCatId);

            if (catSlug) {
              const limit = CAT_LIMIT[catSlug] || 999;
              const currentCount = catCounts[catSlug] || 0;

              if (currentCount < limit) {
                const pictures = extractAllPictures(xml);
                // Skip products without real photos
                if (pictures.length === 0) {
                  inOffer = false;
                  offerLines = [];
                  return;
                }

                const offerIdMatch = offerLines[0].match(/id="(\d+)"/);
                const offerId = offerIdMatch ? offerIdMatch[1] : String(totalParsed);
                const name = extractTag(xml, 'name');
                const priceRub = parseFloat(extractTag(xml, 'price')) || 0;
              const price = Math.round(priceRub * 0.034 / 10) * 10; // RUB → BYN (rate 1 RUB = 0.034 BYN)
                const vendorCode = extractTag(xml, 'vendorCode');
                const params = extractParams(xml);
                const descHtml = extractCDATA(xml, 'description');
                const descClean = descHtml
                  ? stripHtml(descHtml).substring(0, 600)
                  : `${name}. Официальная гарантия производителя.`;

                // Unique slug
                const slugBase = slugify(`${vendor}-${vendorCode || name.substring(0, 50)}`);
                slugCounts[slugBase] = (slugCounts[slugBase] || 0) + 1;
                const slug = slugCounts[slugBase] > 1 ? `${slugBase}-${slugCounts[slugBase]}` : slugBase;

                const tags = [vendor.toLowerCase().replace(/\s+/g, '-')];
                if (params['Инверторная технология'] === 'Да') tags.push('inverter');
                if (params['Управление c мобильного приложения по Wi-Fi'] === 'Да') tags.push('wifi');

                catCounts[catSlug] = currentCount + 1;
                totalKept++;

                products.push({
                  id: `p${offerId}`,
                  name: esc(name),
                  slug,
                  categoryId: catSlug,
                  price,
                  rating: rndF(4.1, 4.9, 1),
                  reviewCount: rnd(3, 95),
                  images: pictures.slice(0, 5),
                  description: esc(descClean),
                  characteristics: params,
                  inStock: Math.random() > 0.3,
                  isNew: false,
                  isFeatured: Math.random() < 0.12,
                  brand: vendor,
                  tags,
                });
              }
            }
          }

          inOffer = false;
          offerLines = [];
          if (totalParsed % 5000 === 0) process.stdout.write(`  parsed ${totalParsed}...\n`);
        }
      }
    });

    rl.on('close', () => {
      console.log(`Done: parsed ${totalParsed} total offers, kept ${totalKept} products.`);
      resolve(products);
    });
    rl.on('error', reject);
  });
}

function buildCategoriesTs(products) {
  const catImages = {};
  for (const p of products) {
    if (!catImages[p.categoryId] && p.images.length > 0) {
      catImages[p.categoryId] = p.images[0];
    }
  }
  const counts = {};
  for (const p of products) counts[p.categoryId] = (counts[p.categoryId] || 0) + 1;

  const fallback = 'https://rkcdn.ru/products/55f47000-415a-11e8-a53a-ac162d7b6f40/src.jpg';
  const img = (id) => catImages[id] || catImages['split-electrolux'] || fallback;

  const cats = [
    { id: 'split-systems',    name: 'Сплит-системы',             slug: 'split-systems',    icon: 'BoltIcon' },
    { id: 'split-electrolux', name: 'Сплит-системы Electrolux',  slug: 'split-electrolux', icon: 'BoltIcon', parentId: 'split-systems' },
    { id: 'split-ballu',      name: 'Сплит-системы Ballu',       slug: 'split-ballu',      icon: 'BoltIcon', parentId: 'split-systems' },
    { id: 'split-toshiba',    name: 'Сплит-системы Toshiba',     slug: 'split-toshiba',    icon: 'BoltIcon', parentId: 'split-systems' },
    { id: 'split-shuft',      name: 'Сплит-системы Shuft',       slug: 'split-shuft',      icon: 'BoltIcon', parentId: 'split-systems' },
    { id: 'split-royal',      name: 'Сплит-системы Royal Thermo',slug: 'split-royal',      icon: 'BoltIcon', parentId: 'split-systems' },
    { id: 'multi-split',      name: 'Мульти-сплит системы',      slug: 'multi-split',      icon: 'Squares2X2Icon' },
    { id: 'semi-pro',         name: 'Полупромышленное',           slug: 'semi-pro',         icon: 'BuildingOfficeIcon' },
    { id: 'mobile',           name: 'Мобильные кондиционеры',    slug: 'mobile',           icon: 'DevicePhoneMobileIcon' },
    { id: 'accessories',      name: 'Аксессуары и расходники',   slug: 'accessories',      icon: 'WrenchScrewdriverIcon' },
  ];

  return cats.map(c => {
    const pc = counts[c.id] || 0;
    const image = img(c.id);
    const parentPart = c.parentId ? `, parentId: "${c.parentId}"` : '';
    return `  { id: "${c.id}", name: "${c.name}", slug: "${c.slug}", icon: "${c.icon}"${parentPart}, productCount: ${pc}, image: "${image}" }`;
  }).join(',\n');
}

function buildProductTs(p) {
  const images = p.images.length > 0
    ? p.images.map(u => `"${u}"`).join(', ')
    : `""`;

  // Skip internal/irrelevant fields
  const SKIP_KEYS = new Set(['Название категории', 'Cопутствующие товары', 'Сертификаты', 'Инструкции', 'Эксклюзив', 'НС-код', 'Аналоги', 'Название группы', 'Высота упаковки товара', 'Глубина упаковки товара', 'Ширина упаковки товара', 'Масса товара с упаковкой (брутто)']);
  const charEntries = Object.entries(p.characteristics)
    .filter(([k, v]) => !SKIP_KEYS.has(k) && !v.startsWith('http'))
    .slice(0, 35)
    .map(([k, v]) => `"${esc(k)}": "${esc(v)}"`)
    .join(', ');

  const tags = p.tags.map(t => `"${t}"`).join(', ');

  return `  { id: "${p.id}", name: "${p.name}", slug: "${p.slug}", categoryId: "${p.categoryId}", price: ${p.price}, rating: ${p.rating}, reviewCount: ${p.reviewCount}, images: [${images}], description: "${p.description}", characteristics: {${charEntries}}, inStock: ${p.inStock}, isNew: ${p.isNew}, isFeatured: ${p.isFeatured}, brand: "${p.brand}", tags: [${tags}] }`;
}

async function main() {
  console.log('Parsing catalog.yml (strict climate categories only)...');
  const products = await parseOffers();

  if (products.length === 0) {
    console.error('ERROR: No products extracted.');
    process.exit(1);
  }

  console.log(`Building store.ts with ${products.length} products...`);

  const counts = {};
  for (const p of products) counts[p.categoryId] = (counts[p.categoryId] || 0) + 1;
  console.log('Category breakdown:', JSON.stringify(counts, null, 2));

  const catsTs = buildCategoriesTs(products);
  const prodsTs = products.map(p => buildProductTs(p)).join(',\n');

  const ts = `// AUTO-GENERATED from Русклимат-М catalog.yml
// Products: ${products.length} | Generated: ${new Date().toLocaleDateString('ru')}

export interface Product {
  id: string;
  name: string;
  slug: string;
  categoryId: string;
  price: number;
  originalPrice?: number;
  discount?: number;
  rating: number;
  reviewCount: number;
  images: string[];
  description: string;
  characteristics: Record<string, string>;
  inStock: boolean;
  isNew?: boolean;
  isFeatured?: boolean;
  brand: string;
  tags: string[];
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  icon: string;
  parentId?: string;
  productCount?: number;
  image?: string;
}

export interface Order {
  id: string;
  createdAt: string;
  customerName: string;
  customerPhone: string;
  customerEmail?: string;
  items: { productId: string; productName: string; quantity: number; price: number }[];
  total: number;
  status: 'new' | 'processing' | 'ready' | 'completed' | 'cancelled';
  pickupDate?: string;
  comment?: string;
}

export interface Review {
  id: string;
  productId: string;
  author: string;
  rating: number;
  text: string;
  date: string;
}

export const CATEGORIES: Category[] = [
${catsTs}
];

export const INITIAL_PRODUCTS: Product[] = [
${prodsTs}
];

export const INITIAL_ORDERS: Order[] = [];
export const INITIAL_REVIEWS: Review[] = [];
`;

  fs.writeFileSync(OUTPUT_PATH, ts, 'utf8');
  const sizeMB = (fs.statSync(OUTPUT_PATH).size / 1024 / 1024).toFixed(2);
  console.log(`Written: ${OUTPUT_PATH} (${sizeMB} MB)`);
}

main().catch(err => { console.error(err); process.exit(1); });
