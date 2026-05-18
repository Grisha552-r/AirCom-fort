const fs = require('fs');
const path = require('path');

const storePath = path.join(__dirname, 'src/lib/store.ts');
let nextId = 2256996;

const USD_TO_BYN = 3.5;

const IMG_GREEN = 'https://climate-montazh.by/wp-content/uploads/2022/07/klimat-montazh-kondi-29.webp';
const IMG_AERONIK = IMG_GREEN;
const IMG_JAX = IMG_GREEN;

function usd(price) { return Math.round(price * USD_TO_BYN); }

// BTU code in model number → specs
const btuSpecsGreen = {
  '07': { btu: '7 000',  cold: '2.1', heat: '2.3' },
  '09': { btu: '9 000',  cold: '2.6', heat: '2.9' },
  '12': { btu: '12 000', cold: '3.5', heat: '3.8' },
  '18': { btu: '18 000', cold: '4.6', heat: '5.2' },
  '24': { btu: '24 000', cold: '6.2', heat: '6.5' },
  '30': { btu: '30 000', cold: '8.5', heat: '8.9' },
  '36': { btu: '36 000', cold: '9.4', heat: '9.9' },
};

function makeSplit({ name, slug, price, image, description, btuCode, energyClass, wifi, inverter, inStock, brand, categoryId, refrigerant }) {
  const b = btuSpecsGreen[btuCode];
  const id = `p${nextId++}`;
  const chars = {
    'Базовая мощность кондиционера (охлаждение),BTU': b.btu,
    'Мощность охлаждения, кВт': b.cold,
    'Мощность обогрева, кВт': b.heat,
    'Класс энергоэффективности': energyClass,
    'Хладагент': refrigerant || 'R32',
    'Тип управления': inverter ? 'Инвертор' : 'Не инверторное',
    'Wi-Fi управление': wifi ? 'Да' : 'Нет',
  };
  const charsStr = JSON.stringify(chars).replace(/"/g, '\\"');
  const descEsc = (description||'').replace(/"/g, '\\"').replace(/\n/g, ' ');
  const nameEsc = name.replace(/"/g, '\\"');
  const inStockVal = inStock !== false ? 'true' : 'false';
  const brandTag = brand.toLowerCase().replace(/\s/g, '');
  return `  { id: "${id}", name: "${nameEsc}", slug: "${slug}", categoryId: "${categoryId}", price: ${price}, originalPrice: ${Math.round(price * 1.1)}, description: "${descEsc}", images: ["${image}"], characteristics: JSON.parse("${charsStr}"), brand: "${brand}", tags: ["${brandTag}"${inverter?', "inverter"':', "on-off"'}], inStock: ${inStockVal}, rating: 4.4, reviewCount: 0 },`;
}

const products = [];

// ─── GREEN AIR GREEN ───────────────────────────────────────────────────────────

const genesisDesc = 'Инверторный кондиционер серии Green GENESIS R32. Компрессор GREE, рабочая температура -15...+48°C / -15...+24°C, класс А++/А+. Blue Fin покрытие теплообменника, поддержание +8°C, Wi-Fi (опция). Фреон R32.';
[
  { btu: '07', model: 'GRI-07IGK2', price: usd(500), stock: true  },
  { btu: '09', model: 'GRI-09IGK2', price: usd(540), stock: false },
  { btu: '12', model: 'GRI-12IGK2', price: usd(580), stock: false },
  { btu: '18', model: 'GRI-18IGK2', price: usd(850), stock: false },
  { btu: '24', model: 'GRI-24IGK2', price: usd(990), stock: false },
].forEach(({btu, model, price, stock}) => {
  products.push(makeSplit({ name: `Кондиционер Green GENESIS Inverter R32 ${model} комплект`, slug: `green-genesis-${model.toLowerCase()}`, price, image: IMG_GREEN, description: genesisDesc, btuCode: btu, energyClass: 'A++', wifi: true, inverter: true, inStock: stock, brand: 'Green', categoryId: 'split-green' }));
});

const hitDesc = 'Кондиционер серии Green HIT R410A (ON/OFF). Компрессор GREE, рабочая температура +18...+43°C / -15...+24°C. Энергоэффективность A/A. Blue Fin покрытие. Хладагент R410A.';
[
  { btu: '07', model: 'GRI-07HH2', price: usd(400),  stock: true  },
  { btu: '09', model: 'GRI-09HH2', price: usd(450),  stock: true  },
  { btu: '12', model: 'GRI-12HH2', price: usd(550),  stock: true  },
  { btu: '18', model: 'GRI-18HH2', price: usd(770),  stock: true  },
  { btu: '24', model: 'GRI-24HH2', price: usd(970),  stock: true  },
  { btu: '30', model: 'GRI-30HH2', price: usd(1380), stock: false },
  { btu: '36', model: 'GRI-36HM2', price: usd(1600), stock: false },
].forEach(({btu, model, price, stock}) => {
  products.push(makeSplit({ name: `Кондиционер Green HIT On-Off R410A ${model} комплект`, slug: `green-hit-${model.toLowerCase()}`, price, image: IMG_GREEN, description: hitDesc, btuCode: btu, energyClass: 'A', wifi: false, inverter: false, inStock: stock, brand: 'Green', categoryId: 'split-green', refrigerant: 'R410A' }));
});

const triumphInvDesc = 'Инверторный кондиционер серии Green TRIUMPH INVERTER R32. Компрессор RECHI/GMCC/SANYO, рабочая температура 0...+50°C / -15...+30°C, энергоэффективность A/A. 24-часовой таймер, авторестарт. Wi-Fi (TCL модуль, опция). Фреон R32.';
[
  { btu: '07', model: 'TSI-07HRIY2', price: usd(390), stock: true },
  { btu: '09', model: 'TSI-09HRIY2', price: usd(420), stock: true },
  { btu: '12', model: 'TSI-12HRIY2', price: usd(460), stock: true },
  { btu: '18', model: 'TSI-18HRIY2', price: usd(740), stock: true },
  { btu: '24', model: 'TSI-24HRIY2', price: usd(920), stock: true },
].forEach(({btu, model, price, stock}) => {
  products.push(makeSplit({ name: `Кондиционер Green TRIUMPH Inverter R32 ${model} комплект`, slug: `green-triumph-inv-${model.toLowerCase()}`, price, image: IMG_GREEN, description: triumphInvDesc, btuCode: btu, energyClass: 'A', wifi: true, inverter: true, inStock: stock, brand: 'Green', categoryId: 'split-green' }));
});

const triumphStdDesc = 'Кондиционер серии Green TRIUMPH STANDARD R32 (ON/OFF). Компрессор GMCC/RECHI/HIGHLY, рабочая температура 15...+43°C / -7...+24°C. 24-часовой таймер, авторестарт, самодиагностика. Фреон R32.';
[
  { btu: '07', model: 'TSI-07HRSY2', price: usd(325), stock: true },
  { btu: '09', model: 'TSI-09HRSY2', price: usd(350), stock: true },
  { btu: '12', model: 'TSI-12HRSY2', price: usd(420), stock: true },
  { btu: '18', model: 'TSI-18HRSY2', price: usd(610), stock: true },
  { btu: '24', model: 'TSI-24HRSY2', price: usd(750), stock: true },
].forEach(({btu, model, price, stock}) => {
  products.push(makeSplit({ name: `Кондиционер Green TRIUMPH Standard On-Off R32 ${model} комплект`, slug: `green-triumph-std-${model.toLowerCase()}`, price, image: IMG_GREEN, description: triumphStdDesc, btuCode: btu, energyClass: 'A', wifi: false, inverter: false, inStock: stock, brand: 'Green', categoryId: 'split-green' }));
});

const ic3Desc = 'Инверторный кондиционер серии Green IC3 R32. Компрессоры GREE/GMCC/HIGHLY, рабочая температура -15...+48°C / -15...+24°C. Класс А+/А+, поддержание +8°C, Wi-Fi (GREE модуль, опция). Фреон R32.';
[
  { btu: '07', model: 'GRI-07IC3', price: usd(410), stock: true  },
  { btu: '09', model: 'GRI-09IC3', price: usd(430), stock: false },
  { btu: '12', model: 'GRI-12IC3', price: usd(490), stock: true  },
  { btu: '18', model: 'GRI-18IC3', price: usd(700), stock: false },
  { btu: '24', model: 'GRI-24IC3', price: usd(850), stock: true  },
].forEach(({btu, model, price, stock}) => {
  products.push(makeSplit({ name: `Кондиционер Green IC3 Inverter R32 ${model} комплект`, slug: `green-ic3-${model.toLowerCase()}`, price, image: IMG_GREEN, description: ic3Desc, btuCode: btu, energyClass: 'A+', wifi: true, inverter: true, inStock: stock, brand: 'Green', categoryId: 'split-green' }));
});

const ig2Desc = 'Инверторный кондиционер серии Green IG2 R32. Компрессор GREE, рабочая температура -15...+48°C / -15...+24°C. Класс А++/А+. Blue Fin, поддержание +8°C, Wi-Fi (GREE модуль, опция). Фреон R32.';
[
  { btu: '07', model: 'GRI-07IG2', price: usd(470) },
  { btu: '09', model: 'GRI-09IG2', price: usd(510) },
  { btu: '12', model: 'GRI-12IG2', price: usd(580) },
  { btu: '18', model: 'GRI-18IG2', price: usd(800) },
  { btu: '24', model: 'GRI-24IG2', price: usd(990) },
].forEach(({btu, model, price}) => {
  products.push(makeSplit({ name: `Кондиционер Green IG2 Inverter R32 ${model} комплект`, slug: `green-ig2-${model.toLowerCase()}`, price, image: IMG_GREEN, description: ig2Desc, btuCode: btu, energyClass: 'A++', wifi: true, inverter: true, inStock: false, brand: 'Green', categoryId: 'split-green' }));
});

// ─── AERONIK ──────────────────────────────────────────────────────────────────

const superionDesc = 'Инверторный кондиционер серии Aeronik Superionizer R32. Функция ионизации воздуха. Обогрев в усиленном режиме при низких температурах. Wi-Fi управление. Фреон R32.';
[
  { btu: '07', model: 'ASI-07IM',  price: usd(460),  stock: true },
  { btu: '18', model: 'ASI-18IM',  price: usd(900),  stock: true },
  { btu: '24', model: 'ASI-24IM',  price: usd(1100), stock: true },
].forEach(({btu, model, price, stock}) => {
  products.push(makeSplit({ name: `Кондиционер Aeronik Superionizer Inverter R32 ${model} комплект`, slug: `aeronik-superionizer-${model.toLowerCase()}`, price, image: IMG_AERONIK, description: superionDesc, btuCode: btu, energyClass: 'A++', wifi: true, inverter: true, inStock: stock, brand: 'Aeronik', categoryId: 'split-aeronik' }));
});

const antivirusDesc = 'Инверторный кондиционер серии Aeronik ANTIVIRUS R32. Встроенный UV-фильтр для уничтожения вирусов и бактерий. Ионизация воздуха. Wi-Fi управление. Фреон R32.';
[
  { btu: '09', model: 'ASI-09IU3', price: usd(500),  stock: true },
  { btu: '12', model: 'ASI-12IU3', price: usd(565),  stock: true },
  { btu: '18', model: 'ASI-18IU3', price: usd(770),  stock: true },
  { btu: '24', model: 'ASI-24IU3', price: usd(950),  stock: true },
].forEach(({btu, model, price, stock}) => {
  products.push(makeSplit({ name: `Кондиционер Aeronik ANTIVIRUS Inverter R32 ${model} комплект`, slug: `aeronik-antivirus-${model.toLowerCase()}`, price, image: IMG_AERONIK, description: antivirusDesc, btuCode: btu, energyClass: 'A++', wifi: true, inverter: true, inStock: stock, brand: 'Aeronik', categoryId: 'split-aeronik' }));
});

const legendDesc = 'Инверторный кондиционер серии Aeronik LEGEND R32. Премиальная серия с расширенным функционалом. Wi-Fi управление, тихая работа, обогрев при низких температурах. Антибактериальный фильтр. Фреон R32.';
[
  { btu: '07', model: 'ASI-07ILK4', price: usd(580),  stock: true },
  { btu: '09', model: 'ASI-09ILK4', price: usd(600),  stock: true },
  { btu: '12', model: 'ASI-12ILK4', price: usd(660),  stock: true },
  { btu: '18', model: 'ASI-18ILK4', price: usd(950),  stock: true },
  { btu: '24', model: 'ASI-24ILK4', price: usd(1220), stock: true },
].forEach(({btu, model, price, stock}) => {
  products.push(makeSplit({ name: `Кондиционер Aeronik LEGEND Inverter R32 ${model} комплект`, slug: `aeronik-legend-${model.toLowerCase()}`, price, image: IMG_AERONIK, description: legendDesc, btuCode: btu, energyClass: 'A++', wifi: true, inverter: true, inStock: stock, brand: 'Aeronik', categoryId: 'split-aeronik' }));
});

// ─── JAX ──────────────────────────────────────────────────────────────────────

const jaxDesc = 'Инверторный кондиционер серии JAX MURRAY R32. Компрессор GREE. Wi-Fi управление. Тихая работа, обогрев при низких температурах. Антибактериальный фильтр. Авторестарт. Фреон R32.';
[
  { btu: '07', model: 'ACY-07HE/R32', price: usd(550),  stock: true },
  { btu: '09', model: 'ACY-09HE/R32', price: usd(580),  stock: true },
  { btu: '12', model: 'ACY-12HE/R32', price: usd(650),  stock: true },
  { btu: '18', model: 'ACY-18HE/R32', price: usd(970),  stock: true },
  { btu: '24', model: 'ACY-24HE/R32', price: usd(1190), stock: true },
].forEach(({btu, model, price, stock}) => {
  const safeModel = model.replace(/\//g, '-');
  products.push(makeSplit({ name: `Кондиционер JAX MURRAY Inverter R32 ${model} комплект`, slug: `jax-murray-${safeModel.toLowerCase()}`, price, image: IMG_JAX, description: jaxDesc, btuCode: btu, energyClass: 'A++', wifi: true, inverter: true, inStock: stock, brand: 'JAX', categoryId: 'split-jax' }));
});

// ─── Write to store.ts ────────────────────────────────────────────────────────
console.log(`Prepared ${products.length} products (IDs p2256996 to p${nextId - 1})`);

let content = fs.readFileSync(storePath, 'utf8');
const insertMarker = '];\n\nexport const INITIAL_ORDERS';
const insertIdx = content.indexOf(insertMarker);
if (insertIdx === -1) { console.error('Insertion marker not found!'); process.exit(1); }

const newEntries = products.map(l => '\n' + l).join('');
content = content.slice(0, insertIdx) + newEntries + '\n' + content.slice(insertIdx);
fs.writeFileSync(storePath, content, 'utf8');
console.log('Done! Green, Aeronik, JAX products added to store.ts');
