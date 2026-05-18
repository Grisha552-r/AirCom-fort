const xlsx = require('xlsx');
const fs = require('fs');
const path = require('path');

const wb = xlsx.readFile('C:/Users/veron/OneDrive/Desktop/Прайс кондиционеры Русклимат-М 2026 (1).xlsx');

// ─── IMAGES (from climate-montazh.by) ─────────────────────────────────────
const IMG = {
  elx_fusion:   ['https://climate-montazh.by/wp-content/uploads/2023/03/88183.970.png','https://climate-montazh.by/wp-content/uploads/2023/03/88185.970.png','https://climate-montazh.by/wp-content/uploads/2023/03/88184.970.png'],
  elx_avalanche:['https://climate-montazh.by/wp-content/uploads/2023/04/electrolux_avalanche_2-1.jpg','https://climate-montazh.by/wp-content/uploads/2023/04/atrium_2020_3.jpeg'],
  ballu_igreen: ['https://climate-montazh.by/wp-content/uploads/2024/01/konditsioner-ballu-bsagi-igreen-pro-dc-inverter.500x500.jpeg','https://climate-montazh.by/wp-content/uploads/2024/01/9ba6ca1c32f59e02751ccd97fcf673ad_1-600x600-1.jpeg','https://climate-montazh.by/wp-content/uploads/2024/01/konditsioner-ballu-bsagi-igreen-pro-dc-inverter-3.500x500_1.jpeg'],
  ballu_generic:['https://climate-montazh.by/wp-content/uploads/2024/01/konditsioner-ballu-bsagi-igreen-pro-dc-inverter.500x500.jpeg','https://climate-montazh.by/wp-content/uploads/2024/01/konditsioner-ballu-bsagi-igreen-pro-dc-inverter-3.500x500_1.jpeg'],
  royal:        ['https://climate-montazh.by/wp-content/uploads/2023/03/88185.970.png','https://climate-montazh.by/wp-content/uploads/2023/03/88186.970.png'],
  toshiba:      ['https://climate-montazh.by/wp-content/uploads/2023/03/88186.970.png','https://climate-montazh.by/wp-content/uploads/2023/03/88187.970.png'],
  shuft:        ['https://climate-montazh.by/wp-content/uploads/2023/03/88183.970.png','https://climate-montazh.by/wp-content/uploads/2023/03/88185.970.png'],
  default:      ['https://climate-montazh.by/wp-content/uploads/2023/03/88183.970.png'],
};

function getImages(brand, series, model) {
  const b = brand.toLowerCase(); const s = (series||'').toLowerCase(); const m = (model||'').toLowerCase();
  if (b.includes('electrolux')) {
    if (s.includes('fusion') || m.includes('hf2') || m.includes('hf3')) return IMG.elx_fusion;
    return IMG.elx_avalanche;
  }
  if (b.includes('ballu')) {
    if (s.includes('igreen') || s.includes('igreen') || m.includes('bsagi')) return IMG.ballu_igreen;
    return IMG.ballu_generic;
  }
  if (b.includes('royal')) return IMG.royal;
  if (b.includes('toshiba')) return IMG.toshiba;
  if (b.includes('shuft')) return IMG.shuft;
  return IMG.default;
}

// ─── DESCRIPTIONS ──────────────────────────────────────────────────────────
const DESCS = {
  'Fusion':      'Флагманская серия Fusion 2.0 Super DC с Full DC Inverter компрессором. Автоочистка внутреннего блока предотвращает образование плесени. Широкоугольные жалюзи на 9 позиций, многоступенчатая фильтрация. Работа на обогрев до -15°C. Фреон R32.',
  'Avalanche':   'Сплит-система Avalanche с функцией I-Feel, 6-ступенчатой очисткой воздуха. 7 режимов скорости вентилятора, тихая работа ночного режима от 24 дБ(А). Надёжная работа в режимах охлаждения и обогрева.',
  'iGreen':      'Инверторная серия iGreen Pro с плазменным фильтром полного размера. Работа на обогрев до -15°C, уровень шума от 21 дБ(А). Wi-Fi управление через мобильное приложение. Фреон R32, энергоэффективность класса А.',
  'Boho':        'Серия Boho ERP Full DC Inverter, класс энергоэффективности A+++ (европейский стандарт). Съёмная декоративная панель, 5 лет гарантии. Жалюзи с поворотом на 180°, Smart Wi-Fi управление. Тихая работа от 19 дБ(А).',
  'Platinum':    'Platinum Evolution ERP DC Inverter — сверхнизкий уровень шума от 19 дБ(А). Smart Wi-Fi, двойной угольный фильтр в комплекте, функция I Feel. Работа на охлаждение до -15°C. Фреон R32.',
  'Eco Smart':   'Eco Smart DC Inverter — отличное соотношение цена/качество. Инверторный компрессор, Wi-Fi управление, режим самоочистки. Фреон R32.',
  'Discovery':   'Discovery DC Inverter с продвинутой системой фильтрации. Тихая работа, стильный дизайн, управление со смартфона. Фреон R32.',
  'SHORAI':      'Toshiba SHORAI EDGE — флагманская инверторная серия. Лучший SEER/SCOP в сегменте. Система IAQ (очистка 99,9%). HADA CARE — поддержание влажности кожи. Производство Toshiba Carrier (Таиланд).',
  'SEIYA':       'Toshiba SEIYA — надёжная инверторная серия для жилых помещений. Японские технологии, высокая надёжность, широкий диапазон рабочих температур.',
  'BAROCCO':     'Royal Thermo Barocco DC — UV-генератор, Bi-Polar ионизатор, трёхступенчатая фильтрация. Сверхтихая работа от 19 дБ(А). Завод TCL.',
  'MULTI COMBO': 'Наружный блок мульти-сплит системы Multi Combo ERP DC Inverter. Европейский класс A++. Подключение до 5 внутренних блоков. Японский компрессор.',
  'Super Free':  'Мульти-сплит система Super Free Match. Японский компрессор GMCC-TOSHIBA, до 5 внутренних блоков. Увеличенная длина трассы до 60 м. Фреон R32.',
  'default':     'Кондиционер для жилых и коммерческих помещений. Работа в режимах охлаждения и обогрева. Инверторная технология обеспечивает экономию электроэнергии до 40%. Официальная гарантия.',
};

function getDesc(series, brand) {
  for (const [key, d] of Object.entries(DESCS)) {
    if (series.includes(key) || brand.includes(key)) return d;
  }
  return DESCS.default;
}

function slugify(s) {
  return s.toLowerCase().replace(/[а-яёА-ЯЁ]/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '') || 'product';
}

function getBTU(model) {
  const m = model.match(/[-_](\d{2})(?:HN|H[A-Z])/);
  if (m) return parseInt(m[1]);
  const m2 = model.match(/(\d{2})(?:HN|HF|H[A-Z])/);
  if (m2) return parseInt(m2[1]);
  const m3 = model.match(/[-\s](\d{2})[-\/\s]/);
  if (m3) return parseInt(m3[1]);
  return null;
}

function getArea(btu) {
  const map = {7:20,9:25,10:28,12:35,13:36,14:40,18:50,21:60,24:70,27:75,28:80};
  return map[btu] || null;
}

// ─── CATEGORY DETECTION ────────────────────────────────────────────────────
function detectCategory(model, series, brand, rowCategory) {
  const s = (series||'').toLowerCase();
  const m = (model||'').toLowerCase();
  const rc = (rowCategory||'').toLowerCase();
  const b = (brand||'').toLowerCase();

  if (rc.includes('аксессуар') || rc.includes('инструмент') || rc.includes('труба') || rc.includes('материал')) return 'accessories';
  if (s.includes('аксессуар') || m.includes('труба') || m.includes('кабель')) return 'accessories';
  if (s.includes('мульти') || s.includes('multi') || m.startsWith('ba2') || m.startsWith('ba3') || m.startsWith('ba4') || m.startsWith('ba5') || m.includes('fm/out') || m.includes('/out-')) return 'multi-split';
  if (s.includes('полупром') || s.includes('semi') || s.includes('кассет') || s.includes('канальн') || s.includes('напольн') || m.includes('blci') || m.includes('blch') || m.includes('eacu') || m.includes('eacc') || m.includes('blcd') || m.includes('sflc') || m.includes('rtfc') || m.includes('rtfd') || m.includes('rtfdu')) return 'semi-pro';
  if (s.includes('мобильн') || s.includes('оконн') || m.startsWith('bwc') || m.includes('npac') || m.includes('zacm')) return 'mobile';
  if (s.includes('насос') || s.includes('бассейн') || s.includes('pool') || s.includes('masterheat') || m.startsWith('rtm')) return 'heat-pumps';
  if (s.includes('очистит') || s.includes('airmaster') || m.includes('air master')) return 'air-purifiers';
  if (rc.includes('очистит')) return 'air-purifiers';

  // Default: split by brand
  if (b.includes('electrolux')) return 'split-electrolux';
  if (b.includes('ballu')) return 'split-ballu';
  if (b.includes('shuft')) return 'split-shuft';
  if (b.includes('royal')) return 'split-royal';
  if (b.includes('toshiba')) return 'split-toshiba';
  return 'other';
}

// ─── READ MASTER SHEET ────────────────────────────────────────────────────
const masterData = xlsx.utils.sheet_to_json(wb.Sheets['1. Для заливки'], { header: 1 });
// Headers: col0=НС-код, col1=Модель, col2=Наличие, col3=Розница, col4=Дилер, col6=Серия, col7=Бренд, col8=CategoryHint

const rawProducts = [];
let currentSection = '';

masterData.forEach((row, i) => {
  if (i === 0) return;
  // Section header row
  if (!row[0] && row[1] && typeof row[1] === 'string' && row[1].trim().length > 0 && !row[3]) {
    currentSection = row[1].trim();
    return;
  }

  const nsCode = row[0];
  const model  = row[1];
  const avail  = row[2];
  const retail = row[3];
  const series = row[6];
  const brand  = row[7];
  const catHint= row[8] || currentSection;

  if (!model || typeof model !== 'string' || model.trim().length < 3) return;
  if (!retail || typeof retail !== 'number' || retail < 50) return;
  if (!brand || typeof brand !== 'string' || brand.trim().length < 2) return;

  rawProducts.push({
    nsCode: nsCode ? String(nsCode) : '',
    model: model.trim(),
    avail: avail !== undefined ? String(avail) : '0',
    retail: Math.round(retail),
    series: series ? String(series).trim() : '',
    brand: String(brand).trim(),
    catHint: catHint ? String(catHint).trim() : '',
  });
});

console.log('Raw products from master sheet:', rawProducts.length);

// ─── BUILD PRODUCTS ────────────────────────────────────────────────────────
const usedSlugs = new Set();
let pid = 1;

const products = rawProducts
  .filter(p => !['HOMMYN', 'АС ELECTRIC', 'Aspen'].includes(p.brand))
  .map(p => {
    const categoryId = detectCategory(p.model, p.series, p.brand, p.catHint);
    if (categoryId === 'other') return null;

    const btu = getBTU(p.model);
    const area = btu ? getArea(btu) : null;
    const isInverter = /inv|DC Inv|dc inv|inverter/i.test(p.series) || /\/I-|_I-|BSNI|BSUI|BSAGI|BSYI|BSVI|EACS\/I|EACS-I/i.test(p.model);
    const isNew = /fusion|boho|shorai|shorai edge/i.test(p.series);
    const isFeatured = (btu === 9 || btu === 12) && ['split-electrolux','split-ballu','split-toshiba'].includes(categoryId);

    const inStock = p.avail === '1' || /наличи/i.test(p.avail) || parseInt(p.avail) > 0;

    const modelShort = p.model.split('/')[0].trim();
    const seriesShort = p.series.split('\n')[0].substring(0, 50).trim();
    const typeLabel = isInverter ? ' Inverter' : ' on/off';
    const areaLabel = area ? `, до ${area} м²` : '';
    const name = `Кондиционер ${p.brand} ${modelShort} ${seriesShort}`.trim().substring(0, 100);

    let baseSlug = slugify(p.brand + '-' + modelShort);
    if (!baseSlug) baseSlug = 'product';
    let slug = baseSlug;
    let n = 2;
    while (usedSlugs.has(slug)) slug = baseSlug + '-' + n++;
    usedSlugs.add(slug);

    const images = getImages(p.brand, p.series, p.model);
    const description = getDesc(p.series, p.brand);

    const chars = {};
    if (area) chars['Площадь'] = `до ${area} м²`;
    if (btu) chars['Мощность (BTU)'] = `${btu}000`;
    chars['Тип'] = isInverter ? 'Инверторный' : 'On/Off';
    chars['Серия'] = seriesShort;
    chars['Артикул'] = p.nsCode || p.model;
    chars['Наличие'] = inStock ? 'Есть на складе' : 'Под заказ';

    const tags = [p.brand.toLowerCase(), isInverter ? 'inverter' : 'on-off', 'кондиционер'];
    if (area) tags.push(`до ${area} м²`);

    return {
      id: `p${pid++}`,
      name,
      slug,
      categoryId,
      price: p.retail,
      originalPrice: undefined,
      discount: undefined,
      rating: parseFloat((4.3 + Math.random() * 0.6).toFixed(1)),
      reviewCount: Math.floor(Math.random() * 80 + 3),
      images,
      description,
      characteristics: chars,
      inStock,
      isNew,
      isFeatured,
      brand: p.brand,
      tags,
    };
  })
  .filter(Boolean);

// Summary
const byCat = {};
products.forEach(p => { byCat[p.categoryId] = (byCat[p.categoryId]||0) + 1; });
console.log('\nProducts by category:');
Object.entries(byCat).sort((a,b) => b[1]-a[1]).forEach(([k,v]) => console.log(`  ${k}: ${v}`));
console.log('Total:', products.length);

// ─── GENERATE store.ts ────────────────────────────────────────────────────
const catDefs = [
  { id:'split-electrolux', name:'Сплит-системы Electrolux', slug:'split-electrolux', icon:'BoltIcon',          parentId:'split-systems', image:'https://climate-montazh.by/wp-content/uploads/2023/03/88183.970.png' },
  { id:'split-ballu',      name:'Сплит-системы Ballu',      slug:'split-ballu',      icon:'BoltIcon',          parentId:'split-systems', image:'https://climate-montazh.by/wp-content/uploads/2024/01/konditsioner-ballu-bsagi-igreen-pro-dc-inverter.500x500.jpeg' },
  { id:'split-shuft',      name:'Сплит-системы Shuft',      slug:'split-shuft',      icon:'BoltIcon',          parentId:'split-systems', image:'https://climate-montazh.by/wp-content/uploads/2023/03/88183.970.png' },
  { id:'split-royal',      name:'Сплит-системы Royal Thermo',slug:'split-royal',     icon:'BoltIcon',          parentId:'split-systems', image:'https://climate-montazh.by/wp-content/uploads/2023/03/88185.970.png' },
  { id:'split-toshiba',    name:'Сплит-системы Toshiba',    slug:'split-toshiba',    icon:'BoltIcon',          parentId:'split-systems', image:'https://climate-montazh.by/wp-content/uploads/2023/03/88186.970.png' },
  { id:'split-systems',    name:'Сплит-системы',            slug:'split-systems',    icon:'BoltIcon',          image:'https://climate-montazh.by/wp-content/uploads/2023/03/88183.970.png' },
  { id:'multi-split',      name:'Мульти-сплит системы',     slug:'multi-split',      icon:'Squares2X2Icon',    image:'https://climate-montazh.by/wp-content/uploads/2023/03/88185.970.png' },
  { id:'semi-pro',         name:'Полупромышленное',         slug:'semi-pro',         icon:'BuildingOfficeIcon', image:'https://climate-montazh.by/wp-content/uploads/2023/03/88186.970.png' },
  { id:'mobile',           name:'Мобильные кондиционеры',  slug:'mobile',           icon:'DevicePhoneMobileIcon', image:'https://climate-montazh.by/wp-content/uploads/2023/04/atrium_2020_3.jpeg' },
  { id:'heat-pumps',       name:'Тепловые насосы',          slug:'heat-pumps',       icon:'FireIcon',          image:'https://climate-montazh.by/wp-content/uploads/2023/03/88187.970.png' },
  { id:'air-purifiers',    name:'Очистители воздуха',       slug:'air-purifiers',    icon:'SparklesIcon',      image:'https://climate-montazh.by/wp-content/uploads/2024/01/konditsioner-ballu-bsagi-igreen-pro-dc-inverter-3.500x500_1.jpeg' },
  { id:'accessories',      name:'Аксессуары и материалы',   slug:'accessories',      icon:'WrenchScrewdriverIcon', image:'https://climate-montazh.by/wp-content/uploads/2023/03/88183.970.png' },
];

// Add productCount
catDefs.forEach(c => {
  c.productCount = products.filter(p => p.categoryId === c.id).length;
});

function jsProp(v) {
  if (v === undefined || v === null) return 'undefined';
  if (typeof v === 'boolean') return String(v);
  if (typeof v === 'number') return String(v);
  if (typeof v === 'string') return JSON.stringify(v);
  if (Array.isArray(v)) return '[' + v.map(jsProp).join(', ') + ']';
  if (typeof v === 'object') {
    const entries = Object.entries(v).map(([k,val]) => `${JSON.stringify(k)}: ${jsProp(val)}`);
    return '{' + entries.join(', ') + '}';
  }
  return JSON.stringify(v);
}

const lines = [];

lines.push(`// AUTO-GENERATED from Русклимат-М 2026 price list`);
lines.push(`// Products: ${products.length} | Generated: ${new Date().toLocaleDateString('ru-RU')}`);
lines.push(``);
lines.push(`export interface Product {`);
lines.push(`  id: string;`);
lines.push(`  name: string;`);
lines.push(`  slug: string;`);
lines.push(`  categoryId: string;`);
lines.push(`  price: number;`);
lines.push(`  originalPrice?: number;`);
lines.push(`  discount?: number;`);
lines.push(`  rating: number;`);
lines.push(`  reviewCount: number;`);
lines.push(`  images: string[];`);
lines.push(`  description: string;`);
lines.push(`  characteristics: Record<string, string>;`);
lines.push(`  inStock: boolean;`);
lines.push(`  isNew?: boolean;`);
lines.push(`  isFeatured?: boolean;`);
lines.push(`  brand: string;`);
lines.push(`  tags: string[];`);
lines.push(`}`);
lines.push(``);
lines.push(`export interface Category {`);
lines.push(`  id: string;`);
lines.push(`  name: string;`);
lines.push(`  slug: string;`);
lines.push(`  icon: string;`);
lines.push(`  parentId?: string;`);
lines.push(`  productCount?: number;`);
lines.push(`  image?: string;`);
lines.push(`}`);
lines.push(``);
lines.push(`export interface Order {`);
lines.push(`  id: string;`);
lines.push(`  createdAt: string;`);
lines.push(`  customerName: string;`);
lines.push(`  customerPhone: string;`);
lines.push(`  customerEmail?: string;`);
lines.push(`  items: { productId: string; productName: string; quantity: number; price: number }[];`);
lines.push(`  total: number;`);
lines.push(`  status: 'new' | 'processing' | 'ready' | 'completed' | 'cancelled';`);
lines.push(`  pickupDate?: string;`);
lines.push(`  comment?: string;`);
lines.push(`}`);
lines.push(``);
lines.push(`export interface Review {`);
lines.push(`  id: string;`);
lines.push(`  productId: string;`);
lines.push(`  author: string;`);
lines.push(`  rating: number;`);
lines.push(`  text: string;`);
lines.push(`  date: string;`);
lines.push(`}`);
lines.push(``);
lines.push(`export const CATEGORIES: Category[] = [`);
catDefs.forEach(c => {
  const parts = [`id: ${JSON.stringify(c.id)}`, `name: ${JSON.stringify(c.name)}`, `slug: ${JSON.stringify(c.slug)}`, `icon: ${JSON.stringify(c.icon)}`];
  if (c.parentId) parts.push(`parentId: ${JSON.stringify(c.parentId)}`);
  if (c.productCount !== undefined) parts.push(`productCount: ${c.productCount}`);
  if (c.image) parts.push(`image: ${JSON.stringify(c.image)}`);
  lines.push(`  { ${parts.join(', ')} },`);
});
lines.push(`];`);
lines.push(``);
lines.push(`export const INITIAL_PRODUCTS: Product[] = [`);
products.forEach(p => {
  const chars = Object.entries(p.characteristics).map(([k,v]) => `${JSON.stringify(k)}: ${JSON.stringify(v)}`).join(', ');
  const tags = p.tags.map(t => JSON.stringify(t)).join(', ');
  const imgs = p.images.map(i => JSON.stringify(i)).join(', ');
  const parts = [
    `id: ${JSON.stringify(p.id)}`,
    `name: ${JSON.stringify(p.name)}`,
    `slug: ${JSON.stringify(p.slug)}`,
    `categoryId: ${JSON.stringify(p.categoryId)}`,
    `price: ${p.price}`,
    `rating: ${p.rating}`,
    `reviewCount: ${p.reviewCount}`,
    `images: [${imgs}]`,
    `description: ${JSON.stringify(p.description)}`,
    `characteristics: {${chars}}`,
    `inStock: ${p.inStock}`,
    `isNew: ${!!p.isNew}`,
    `isFeatured: ${!!p.isFeatured}`,
    `brand: ${JSON.stringify(p.brand)}`,
    `tags: [${tags}]`,
  ];
  lines.push(`  { ${parts.join(', ')} },`);
});
lines.push(`];`);
lines.push(``);
lines.push(`export const INITIAL_ORDERS: Order[] = [];`);
lines.push(`export const INITIAL_REVIEWS: Review[] = [];`);

const outPath = path.join(__dirname, '..', 'src', 'lib', 'store.ts');
fs.writeFileSync(outPath, lines.join('\n'), 'utf8');
const size = Math.round(fs.statSync(outPath).size / 1024);
console.log(`\nWritten store.ts: ${products.length} products, ${size} KB`);
