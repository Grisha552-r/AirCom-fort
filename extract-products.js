/**
 * Extract products from all price list Excel files and add to store.ts
 * Only adds products that don't already exist (by model code check)
 */
const XLSX = require('xlsx');
const fs = require('fs');
const path = require('path');

const DESKTOP = 'C:/Users/veron/OneDrive/Desktop';
const STORE_PATH = 'src/lib/store.ts';

// Read existing store content
const storeContent = fs.readFileSync(STORE_PATH, 'utf8');

// Build set of normalized model codes already in store
function normModel(m) {
  return String(m).replace(/[\s\/\\()\-_\.]/g, '').toUpperCase();
}
const existingModels = new Set();
// Extract all model-like strings from the store
const modelRegex = /[A-Z][A-Z0-9]{2,}[\/\-][A-Z0-9\/\-_\.]+/g;
let match;
while ((match = modelRegex.exec(storeContent)) !== null) {
  existingModels.add(normModel(match[0]));
}
// Also add full product name normalized for broader matching
storeContent.split('\n').forEach(line => {
  const nm = line.match(/name:\s*"([^"]+)"/);
  if (nm) {
    // Extract all uppercase word sequences
    const words = nm[1].split(/\s+/);
    words.forEach(w => {
      if (w.length > 4 && w.match(/^[A-Z0-9\/\-_]+$/) && !w.match(/^[А-Я]+$/)) {
        existingModels.add(normModel(w));
      }
    });
  }
});

console.log('Existing model codes:', existingModels.size);

// Check if a model is already in store
function modelExists(model) {
  const n = normModel(model);
  if (existingModels.has(n)) return true;
  // Also check substring (for models with suffixes)
  for (const em of existingModels) {
    if (em.startsWith(n) || n.startsWith(em)) {
      if (Math.abs(em.length - n.length) < 5) return true;
    }
  }
  return false;
}

// ID counter
let nextId = 2257234;
function newId() { return 'p' + (nextId++); }

// Random helpers
function randRating() { return (4.0 + Math.random() * 0.9).toFixed(1); }
function randReviews() { return Math.floor(Math.random() * 60) + 5; }

// Slug generator
function toSlug(brand, model) {
  return (brand + '-' + model).toLowerCase()
    .replace(/[\/\\()\s\.,]/g, '-')
    .replace(/[^a-z0-9\-]/g, '')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');
}

// Generic placeholder image
const PLACEHOLDER = 'https://rkcdn.ru/products/d04e8c84-44aa-11ed-b732-005056013a69/src.jpg';

// Brand image map (first image from existing products)
const BRAND_IMAGES = {
  'Ballu': 'https://rkcdn.ru/products/de39f5a6-44a3-11ed-b732-005056013a69/src.jpg',
  'Electrolux': 'https://rkcdn.ru/products/898b032d-6126-11ee-b737-005056941658/src.jpg',
  'SHUFT': 'https://rkcdn.ru/products/6afe9f6c-8736-11f0-b8e0-00505601218a/src.jpg',
  'Royal Thermo': 'https://rkcdn.ru/products/76194a34-22a6-11ef-b8d8-00505601218a/src.jpg',
  'TOSHIBA': 'https://rkcdn.ru/products/2bea3835-99bf-11ee-b8d6-00505601218a/src.jpg',
  'GREE': 'https://climate-montazh.by/wp-content/uploads/2024/03/gree-airy-white-montazh-v-interere-2023-600x600.jpg',
  'Haier': 'https://climate-montazh.by/wp-content/uploads/2022/07/klimat-montazh-kondi-57.webp',
  'Royal Clima': 'https://royal-clima.com.ru/image/cache/catalog/product-img/RC-PD22HN/2022_RC_Pandora_001-500x500.png',
  'LG': 'https://climate-montazh.by/wp-content/uploads/2022/07/klimat-montazh-kondi-1-2-3-600x600.jpg',
  'Hitachi': 'https://images.breez.ru/catalog/hitachi/shiratama/shiratama-01.png',
  'Green': 'https://climate-montazh.by/wp-content/uploads/2022/07/klimat-montazh-kondi-29.webp',
  'JAX': 'https://climate-montazh.by/wp-content/uploads/2022/07/klimat-montazh-kondi-29.webp',
  'Aeronik': 'https://climate-montazh.by/wp-content/uploads/2022/07/klimat-montazh-kondi-29.webp',
  'Ecoclima': PLACEHOLDER,
  'NeoClima': PLACEHOLDER,
  'Zanussi': PLACEHOLDER,
  'Loriot': PLACEHOLDER,
  'Panasonic': PLACEHOLDER,
  'Funai': PLACEHOLDER,
  'Mitsudai': PLACEHOLDER,
  'Legion': PLACEHOLDER,
  'Yuetu': PLACEHOLDER,
  'IGC': PLACEHOLDER,
  'MILD': PLACEHOLDER,
  'Vicool': PLACEHOLDER,
  'Energolux': PLACEHOLDER,
  'FeRRUM': PLACEHOLDER,
  'Kalashnikov': PLACEHOLDER,
  'Coolberg': PLACEHOLDER,
};

// Brand to categoryId map
const BRAND_CATEGORY = {
  'Ballu': 'split-ballu',
  'Electrolux': 'split-electrolux',
  'SHUFT': 'split-shuft',
  'Royal Thermo': 'split-royal',
  'TOSHIBA': 'split-toshiba',
  'GREE': 'split-gree',
  'Haier': 'split-haier',
  'Royal Clima': 'split-royal-clima',
  'LG': 'split-lg',
  'Hitachi': 'split-hitachi',
  'Green': 'split-green',
  'JAX': 'split-jax',
  'Aeronik': 'split-aeronik',
  'Ecoclima': 'split-ecoclima',
  'NeoClima': 'split-neoclima',
  'Zanussi': 'split-zanussi',
  'Loriot': 'split-loriot',
  'Panasonic': 'split-panasonic',
  'Funai': 'split-systems',
  'Mitsudai': 'split-systems',
  'Legion': 'split-systems',
  'Yuetu': 'split-systems',
  'IGC': 'split-systems',
  'MILD': 'split-systems',
  'Vicool': 'split-systems',
  'Energolux': 'split-systems',
  'FeRRUM': 'split-systems',
  'Kalashnikov': 'split-systems',
  'Coolberg': 'split-systems',
};

// Make product object
function makeProduct(brand, model, seriesName, price, coldKw, hotKw, dims) {
  if (!price || price <= 0) return null;
  const image = BRAND_IMAGES[brand] || PLACEHOLDER;
  const categoryId = BRAND_CATEGORY[brand] || 'split-systems';
  const slug = toSlug(brand, model);
  const coldStr = coldKw ? String(coldKw).replace(/[^\d\.,\(\)\-~]+/g, '').trim() : '';
  const hotStr = hotKw ? String(hotKw).replace(/[^\d\.,\(\)\-~]+/g, '').trim() : '';

  // Determine BTU from model number
  let btu = '';
  const btuMatch = model.match(/[-\/](\d{2})(?:[A-Z\/\-]|$)/);
  if (btuMatch) {
    const n = parseInt(btuMatch[1]);
    if (n >= 7 && n <= 60) btu = n * 1000 + ' BTU';
  }

  const desc = `Инверторная сплит-система ${brand}${seriesName ? ' ' + seriesName : ''} ${model}. ${coldStr ? 'Мощность охлаждения: ' + coldStr + ' кВт.' : ''} ${hotStr ? 'Мощность обогрева: ' + hotStr + ' кВт.' : ''} Хладагент R32, официальная гарантия.`.trim().replace(/\s+/g, ' ');

  const chars = {};
  if (coldStr) chars['Мощность охлаждения, кВт'] = coldStr;
  if (hotStr) chars['Мощность обогрева, кВт'] = hotStr;
  if (dims) chars['Размеры внутреннего блока, мм'] = String(dims);
  if (btu) chars['BTU'] = btu;
  chars['Хладагент'] = 'R32';
  chars['Тип'] = 'Инверторный';

  const priceRounded = Math.round(price);

  return `  { id: "${newId()}", name: "Сплит-система ${brand} ${model} комплект", slug: "${slug}", categoryId: "${categoryId}", price: ${priceRounded}, rating: ${randRating()}, reviewCount: ${randReviews()}, images: ["${image}"], description: "${desc.replace(/"/g, '\\"')}", characteristics: ${JSON.stringify(chars)}, inStock: true, brand: "${brand}", tags: ["кондиционер", "${brand}", "сплит-система"] }`;
}

const newProducts = [];
let skipped = 0;

// ============================================================
// FILE 1: Русклимат-М (Electrolux, Ballu, Shuft, Royal Thermo)
// ============================================================
const rusklimate = XLSX.readFile(DESKTOP + '/Прайс кондиционеры Русклимат-М 2026 (1).xlsx');

// --- Electrolux split (sheet "3. Сплит-системы Electrolux") ---
// cols: 1=НС-код, 2=MODEL, 3=cold kW, 4=hot kW, 5=inner dims, 10=Розница BYN
{
  const ws = rusklimate.Sheets['3. Сплит-системы Electrolux'];
  const data = XLSX.utils.sheet_to_json(ws, {header: 1, defval: ''});
  let currentSeries = '';
  data.forEach(row => {
    // Series name row
    if (row[2] && typeof row[2] === 'string' && row[2].length > 20 && !row[10]) {
      currentSeries = row[2].split('\n')[0].trim().substring(0, 50);
    }
    const model = String(row[2] || '').trim();
    const price = parseFloat(row[10]);
    if (!model.match(/^EACS/) && !model.match(/^EACV/) && !model.match(/^EACF/)) return;
    if (!price || price < 100) return;
    if (modelExists(model)) { skipped++; return; }
    const p = makeProduct('Electrolux', model, currentSeries, price, row[3], row[4], row[5]);
    if (p) newProducts.push(p);
  });
}

// --- Ballu split (sheet "6. Сплит-системы Ballu") ---
// cols: 1=НС-код, 2=MODEL, 3=cold kW, 4=hot kW, 7=inner dims, 12=Розница BYN
{
  const ws = rusklimate.Sheets['6. Сплит-системы Ballu'];
  const data = XLSX.utils.sheet_to_json(ws, {header: 1, defval: ''});
  let currentSeries = '';
  data.forEach(row => {
    if (row[2] && typeof row[2] === 'string' && row[2].length > 20 && !row[12]) {
      currentSeries = row[2].split('\n')[0].trim().substring(0, 50);
    }
    const model = String(row[2] || '').trim();
    const price = parseFloat(row[12]);
    if (!model.match(/^BS[A-Z]/)) return;
    if (!price || price < 100) return;
    if (modelExists(model)) { skipped++; return; }
    const p = makeProduct('Ballu', model, currentSeries, price, row[3], row[4], row[7]);
    if (p) newProducts.push(p);
  });
}

// --- Shuft split (sheet "10. Сплит-системы Shuft") ---
// cols: 2=НС-код, 3=MODEL, 4=cold kW, 5=hot kW, 6=inner dims, 12=РРЦ BYN
{
  const ws = rusklimate.Sheets['10. Сплит-системы Shuft'];
  const data = XLSX.utils.sheet_to_json(ws, {header: 1, defval: ''});
  let currentSeries = '';
  data.forEach(row => {
    if (row[3] && typeof row[3] === 'string' && row[3].length > 10 && !String(row[3]).match(/^SFT/)) {
      currentSeries = row[3].split('\n')[0].trim().substring(0, 50);
    }
    const model = String(row[3] || '').trim();
    const price = parseFloat(row[12]);
    if (!model.match(/^SFT/)) return;
    if (!price || price < 100) return;
    if (modelExists(model)) { skipped++; return; }
    const p = makeProduct('SHUFT', model, currentSeries, price, row[4], row[5], row[6]);
    if (p) newProducts.push(p);
  });
}

// --- Royal Thermo split (sheet "13. Сплит-системы Royal Thermo") ---
// cols: 2=НС-код, 3=MODEL, 4=cold kW, 5=hot kW, 6=inner dims, 11=Розница BYN
{
  const ws = rusklimate.Sheets['13. Сплит-системы Royal Thermo'];
  const data = XLSX.utils.sheet_to_json(ws, {header: 1, defval: ''});
  let currentSeries = '';
  data.forEach(row => {
    if (row[3] && typeof row[3] === 'string' && row[3].length > 15 && !String(row[3]).match(/^RT/)) {
      currentSeries = row[3].split('\n')[0].trim().substring(0, 50);
    }
    const model = String(row[3] || '').trim();
    const price = parseFloat(row[11]);
    if (!model.match(/^RT[A-Z]/)) return;
    if (!price || price < 100) return;
    if (modelExists(model)) { skipped++; return; }
    const p = makeProduct('Royal Thermo', model, currentSeries, price, row[4], row[5], row[6]);
    if (p) newProducts.push(p);
  });
}

// ============================================================
// FILE 2: Haier (sheet "Бытовые 2026")
// cols: 5=MODEL, 6=cold/hot kW, 9=РРЦ BYN
// ============================================================
{
  const wb = XLSX.readFile(DESKTOP + '/прайс HAIER ЭйрКул 2025 (1).xlsx');
  const ws = wb.Sheets['Бытовые 2026'];
  const data = XLSX.utils.sheet_to_json(ws, {header: 1, defval: ''});
  let currentSeries = '';
  data.forEach(row => {
    const modelCell = String(row[5] || '').trim();
    const price = parseFloat(row[9]);
    // Take only first model code from cells that have multiple (separated by newline or /)
    const model = modelCell.split(/[\n\/]/)[0].trim().replace(/\s+.*/, '').trim();
    if (!model.match(/^[A-Z]{2}[0-9]/)) return;
    if (!price || price < 100) return;
    if (modelExists(model)) { skipped++; return; }
    const kwStr = String(row[6] || '');
    const kwParts = kwStr.split('/');
    const p = makeProduct('Haier', model, currentSeries, price, kwParts[0], kwParts[1], '');
    if (p) newProducts.push(p);
  });
}

// ============================================================
// FILE 3: InterPride (Royal Clima, LG, Hitachi, Funai, Ecoclima, Mitsudai, Legion, Yuetu)
// ============================================================
const interpride = XLSX.readFile(DESKTOP + '/Прайс ООО _ИнтерПрайд Климат_ INTERPRIDE.BY.xlsx');

// --- Royal Clima ---
// cols: 0=MODEL, 2=cold/hot kW, 3=energy class, 8=РРЦ BYN
{
  const ws = interpride.Sheets['ROYAL CLIMA '];
  const data = XLSX.utils.sheet_to_json(ws, {header: 1, defval: ''});
  data.forEach(row => {
    const model = String(row[0] || '').trim().split(/[\n\s]/)[0];
    const price = parseFloat(row[8]);
    if (!model.match(/^RC[A-Z\-]/)) return;
    if (!price || price < 100) return;
    if (modelExists(model)) { skipped++; return; }
    const kwStr = String(row[2] || '');
    const kwParts = kwStr.split('/');
    const p = makeProduct('Royal Clima', model, '', price, kwParts[0], kwParts[1], row[5]);
    if (p) newProducts.push(p);
  });
}

// --- LG ---
// cols: 2=MODEL, 3=cold kW, 4=hot kW, 13=РРЦ BYN
{
  const ws = interpride.Sheets['LG'];
  const data = XLSX.utils.sheet_to_json(ws, {header: 1, defval: ''});
  data.forEach(row => {
    const model = String(row[2] || '').trim();
    const price = parseFloat(row[13]);
    if (!model.match(/^[A-Z]{1,2}[0-9]{2}[A-Z]/)) return;
    if (!price || price < 100) return;
    if (modelExists(model)) { skipped++; return; }
    const p = makeProduct('LG', model, '', price, row[3], row[4], '');
    if (p) newProducts.push(p);
  });
}

// --- Hitachi ---
// cols: 0=MODEL, 2=cold kW, 3=hot kW, 9=РРЦ BYN
{
  const ws = interpride.Sheets['HITACHI'];
  const data = XLSX.utils.sheet_to_json(ws, {header: 1, defval: ''});
  data.forEach(row => {
    // Only "внутренний блок" rows have complete data
    if (row[1] !== 'внутренний блок' && !String(row[0]).match(/^RAK-/)) return;
    const model = String(row[0] || '').trim();
    const price = parseFloat(row[9]);
    if (!model.match(/^RAK-/)) return;
    if (!price || price < 100) return;
    if (modelExists(model)) { skipped++; return; }
    const p = makeProduct('Hitachi', model, 'SHIRATAMA', price, row[2], row[3], row[6]);
    if (p) newProducts.push(p);
  });
}

// --- Funai ---
// cols: 0=MODEL, 1=cold kW, 2=hot kW, 8=РРЦ BYN
{
  const ws = interpride.Sheets['FUNAI'];
  const data = XLSX.utils.sheet_to_json(ws, {header: 1, defval: ''});
  let currentSeries = '';
  data.forEach(row => {
    if (row[0] && typeof row[0] === 'string' && row[0].length > 20 && !row[8]) {
      currentSeries = row[0].split('\n')[0].trim().substring(0, 50);
    }
    const model = String(row[0] || '').trim().split(/\s/)[0];
    const price = parseFloat(row[8]);
    if (!model.match(/^R[A-Z]{3}-/)) return;
    if (!price || price < 100) return;
    if (modelExists(model)) { skipped++; return; }
    const p = makeProduct('Funai', model, currentSeries, price, row[1], row[2], row[6]);
    if (p) newProducts.push(p);
  });
}

// --- Ecoclima ---
// cols: 0=MODEL (inner/outer combined), 1=cold kW, 2=hot kW, 7=РРЦ BYN (first price)
{
  const ws = interpride.Sheets['ECOCLIMA'];
  const data = XLSX.utils.sheet_to_json(ws, {header: 1, defval: ''});
  data.forEach(row => {
    const modelCell = String(row[0] || '').trim();
    // Model format: ECW-СH07/AA-4R1/EC-CH07/A-4R1 → take indoor part
    const model = modelCell.split('/')[0].trim();
    const price = parseFloat(row[7]);
    if (!model.match(/^ECW?-/)) return;
    if (!price || price < 100) return;
    if (modelExists(modelCell)) { skipped++; return; }
    const p = makeProduct('Ecoclima', model, '', price, row[1], row[2], row[3]);
    if (p) newProducts.push(p);
  });
}

// --- Mitsudai ---
// cols: 0=MODEL, 2=cold kW, 3=hot kW, 10=РРЦ BYN
{
  const ws = interpride.Sheets['MITSUDAI'];
  const data = XLSX.utils.sheet_to_json(ws, {header: 1, defval: ''});
  let currentSeries = '';
  data.forEach(row => {
    const model = String(row[0] || '').trim();
    const price = parseFloat(row[10]);
    if (!model.match(/^MDI-/)) return;
    if (!price || price < 100) return;
    if (modelExists(model)) { skipped++; return; }
    const p = makeProduct('Mitsudai', model, '', price, row[2], row[3], row[6]);
    if (p) newProducts.push(p);
  });
}

// --- Legion ---
// cols: 0=series, 2=blank, 3=cold kW, 4=hot kW... actually different
// Let me check: ["LE-MN07RH","","",2.05,2.2,"270/305/355/390/430","A/A","698×255×190","6,5/8,5",771,540,180]
// col 0=model, col 3=cold kW, col 4=hot kW, col 9=РРЦ BYN
{
  const ws = interpride.Sheets['LEGION '];
  const data = XLSX.utils.sheet_to_json(ws, {header: 1, defval: ''});
  let currentSeries = '';
  data.forEach(row => {
    const model = String(row[0] || '').trim();
    const price = parseFloat(row[9]);
    if (!model.match(/^LE-/)) return;
    if (!price || price < 100) return;
    if (modelExists(model)) { skipped++; return; }
    const p = makeProduct('Legion', model, '', price, row[3], row[4], row[7]);
    if (p) newProducts.push(p);
  });
}

// --- Yuetu ---
// Different structure: vertical table, models in row 1-5 col 9, prices in col 10
{
  const ws = interpride.Sheets['YUETU'];
  const data = XLSX.utils.sheet_to_json(ws, {header: 1, defval: ''});
  // Find rows where col 9 has model and col 10 has price
  data.forEach(row => {
    const modelCell = String(row[9] || '').trim();
    const price = parseFloat(row[10]);
    if (!modelCell.match(/^Yuetu/)) return;
    if (!price || price < 100) return;
    const model = modelCell.replace(/^Yuetu\s+/, '');
    if (modelExists(model)) { skipped++; return; }
    const p = makeProduct('Yuetu', model, '', price, '', '', '');
    if (p) newProducts.push(p);
  });
}

// ============================================================
// FILE 4: GREE (sheet "СПЛИТ-СИСТЕМЫ")
// cols: 0=MODEL, 12=РРЦ BYN
// ============================================================
{
  const desktopFiles = fs.readdirSync(DESKTOP);
  const greeFile = desktopFiles.find(f => f.includes('GREE'));
  const wb = XLSX.readFile(DESKTOP + '/' + greeFile);
  const ws = wb.Sheets['СПЛИТ-СИСТЕМЫ'];
  const data = XLSX.utils.sheet_to_json(ws, {header: 1, defval: ''});
  let currentSeries = '';
  data.forEach(row => {
    if (row[0] && typeof row[0] === 'string' && row[0].length > 20 && !row[12]) {
      currentSeries = row[0].split('\n')[0].trim().substring(0, 60);
    }
    const model = String(row[0] || '').trim().split(/\s+/)[0];
    const price = parseFloat(row[12]);
    if (!model.match(/^GWH[0-9]/)) return;
    if (!price || price < 100) return;
    if (modelExists(model)) { skipped++; return; }
    const p = makeProduct('GREE', model, currentSeries, price, row[1], row[2], row[7]);
    if (p) newProducts.push(p);
  });
}

// ============================================================
// FILE 5: Green / JAX / Aeronik
// cols: 0=MODEL, 1=cold kW, 2=hot kW, 10=Розница $ → ×3.35 BYN
// ============================================================
{
  const wb = XLSX.readFile(DESKTOP + '/Прайс-лист на кондиционеры Green, Aeronik (4).xlsx');
  const USD_RATE = 3.35;

  // Green
  {
    const ws = wb.Sheets['GREEN  AIRGREEN'];
    const data = XLSX.utils.sheet_to_json(ws, {header: 1, defval: ''});
    let currentSeries = '';
    data.forEach(row => {
      const model = String(row[0] || '').trim().split(/\s+/)[0];
      const priceUSD = parseFloat(row[10]);
      if (!model.match(/^GRI-|^TSI-/)) return;
      if (!priceUSD || priceUSD < 50) return;
      const price = Math.round(priceUSD * USD_RATE);
      if (modelExists(model)) { skipped++; return; }
      const p = makeProduct('Green', model, currentSeries, price, row[1], row[2], row[5]);
      if (p) newProducts.push(p);
    });
  }

  // JAX
  {
    const ws = wb.Sheets['JAX (GREE,HAIER,MIDEA)'];
    const data = XLSX.utils.sheet_to_json(ws, {header: 1, defval: ''});
    data.forEach(row => {
      const model = String(row[0] || '').trim().split(/\s+/)[0];
      const priceUSD = parseFloat(row[10]);
      if (!model.match(/^AC[MIYA]/)) return;
      if (!priceUSD || priceUSD < 50) return;
      const price = Math.round(priceUSD * USD_RATE);
      if (modelExists(model)) { skipped++; return; }
      const p = makeProduct('JAX', model, '', price, row[1], row[2], row[5]);
      if (p) newProducts.push(p);
    });
  }

  // Aeronik
  {
    const ws = wb.Sheets['AERONIK'];
    const data = XLSX.utils.sheet_to_json(ws, {header: 1, defval: ''});
    data.forEach(row => {
      const model = String(row[0] || '').trim().split(/[\s\/]/)[0];
      const priceUSD = parseFloat(row[10]);
      if (!model.match(/^ASI-/)) return;
      if (!priceUSD || priceUSD < 50) return;
      const price = Math.round(priceUSD * USD_RATE);
      if (modelExists(model)) { skipped++; return; }
      const p = makeProduct('Aeronik', model, '', price, row[1], row[2], row[5]);
      if (p) newProducts.push(p);
    });
  }
}

// ============================================================
// FILE 6: Климат24бел (IGC, MILD, Vicool, Energolux, FeRRUM, Kalashnikov, Coolberg, Toshiba)
// Common structure: col 2=MODEL, col 4=cold kW, col 5=hot kW, col 8=РРЦ BYN
// ============================================================
{
  const wb = XLSX.readFile(DESKTOP + '/Прайс Климат24бел (1).xlsx');

  const klimat24Brands = [
    { sheet: 'IGC',        brand: 'IGC',        modelPat: /^[A-Z]{3}-[0-9]{2}/ },
    { sheet: 'MILD',       brand: 'MILD',       modelPat: /^ML[A-Z]-/ },
    { sheet: 'Vicool',     brand: 'Vicool',     modelPat: /^VC[A-Z]-/ },
    { sheet: 'ENERGOLUX',  brand: 'Energolux',  modelPat: /^SA[SU][0-9]/ },
    { sheet: 'FeRRUM ',    brand: 'FeRRUM',     modelPat: /^FI[SU][0-9]/ },
    { sheet: 'KALASHNIKOV',brand: 'Kalashnikov',modelPat: /^KVA[CS]-/ },
    { sheet: 'СOOLBERG',   brand: 'Coolberg',   modelPat: /^CS-/ },
    { sheet: 'TOSHIBA',    brand: 'TOSHIBA',    modelPat: /^RAS-B/ },
  ];

  klimat24Brands.forEach(({ sheet, brand, modelPat }) => {
    const ws = wb.Sheets[sheet];
    if (!ws) return;
    const data = XLSX.utils.sheet_to_json(ws, {header: 1, defval: ''});
    let currentSeries = '';
    data.forEach(row => {
      // For COOLBERG, model is in col 1
      const modelRaw = sheet === 'СOOLBERG'
        ? String(row[1] || '').trim().split(/[\/\s]/)[0]
        : String(row[2] || '').trim().split(/[\/]/)[0].trim();
      const model = modelRaw;

      // Price is in col 8 for most, but check col 8
      const price = parseFloat(row[8]);

      if (!model.match(modelPat)) return;
      if (!price || price < 100) return;
      if (modelExists(model)) { skipped++; return; }
      const p = makeProduct(brand, model, '', price, row[4], row[5], row[6]);
      if (p) newProducts.push(p);
    });
  });
}

// ============================================================
// FILE 7: БризБелМ (NeoClima, Zanussi, Loriot) - dealer prices, ~+25% for retail
// ============================================================
{
  const wb = XLSX.readFile(DESKTOP + '/Прайс БризБелМ.xlsx');
  const MARKUP = 1.25;

  const brizSheets = [
    { sheet: 'NeoClima Кондиционеры', brand: 'NeoClima', modelPat: /^(Сплит-система|NS\/NU-)/ },
    { sheet: 'Zanussi Кондиц.',       brand: 'Zanussi',  modelPat: /^(Сплит-система|Мобильный)/ },
    { sheet: 'Loriot Кондиционеры',   brand: 'Loriot',   modelPat: /^Сплит-система/ },
  ];

  brizSheets.forEach(({ sheet, brand, modelPat }) => {
    const ws = wb.Sheets[sheet];
    if (!ws) return;
    const data = XLSX.utils.sheet_to_json(ws, {header: 1, defval: ''});
    data.forEach(row => {
      const nameCell = String(row[0] || '').trim();
      if (!nameCell.match(modelPat)) return;
      // Extract model code from name
      const modelMatch = nameCell.match(/\b([A-Z][A-Z0-9\/\-_]+(?:\/[A-Z0-9\/\-]+)?)\s*$/);
      if (!modelMatch) return;
      const model = modelMatch[1];

      // col 4 = dealer BYN 1, add markup
      const dealerPrice = parseFloat(row[4]);
      if (!dealerPrice || dealerPrice < 100) return;
      const price = Math.round(dealerPrice * MARKUP);

      if (modelExists(model)) { skipped++; return; }
      const kwStr = String(row[7] || '').split('/');
      const p = makeProduct(brand, model, '', price, kwStr[0], kwStr[1], '');
      if (p) newProducts.push(p);
    });
  });
}

// ============================================================
// Summary
// ============================================================
console.log(`\nNew products found: ${newProducts.length}`);
console.log(`Skipped (already exist): ${skipped}`);

if (newProducts.length === 0) {
  console.log('Nothing to add!');
  process.exit(0);
}

// Append to store.ts
// Find the closing ]; of INITIAL_PRODUCTS
const insertPoint = storeContent.lastIndexOf('];');
if (insertPoint === -1) {
  console.error('Could not find ];\nin store.ts!');
  process.exit(1);
}

const newContent =
  storeContent.substring(0, insertPoint) +
  newProducts.join(',\n') + ',\n' +
  storeContent.substring(insertPoint);

fs.writeFileSync(STORE_PATH, newContent);
console.log(`\nAdded ${newProducts.length} new products to store.ts`);
console.log('Next ID will be: p' + nextId);

// Show sample
console.log('\nSample of added products:');
newProducts.slice(0, 3).forEach(p => console.log(p.substring(0, 120) + '...'));
