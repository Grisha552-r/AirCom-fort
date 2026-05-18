const fs = require('fs');
const path = require('path');

const storePath = path.join(__dirname, 'src/lib/store.ts');
let nextId = 2256978;

const IMG_SHORAI_WHITE = 'https://rkcdn.ru/products/01a87a5f-beb9-11ee-b8d6-00505601218a/src.jpg';
const IMG_SHORAI_BLACK = 'https://climate-montazh.by/wp-content/uploads/2025/05/ras-b10g3kvsgb-e-ras-10j2avsg-e1-1-700x700-1.jpg';
const IMG_SEIYA2 = 'https://climate-montazh.by/wp-content/uploads/2022/07/klimat-montazh-kondi-8.webp';

const shoraiWhiteDesc = 'Инверторный кондиционер серии Toshiba SHORAI EDGE White. Лучший в своём сегменте по энергоэффективности SEER/SCOP, класс А+++. Функция HADA CARE поддерживает естественную влажность кожи. Режим +8°C. Wi-Fi модуль (HDN/WFN-02-01) в комплекте или опционально. Матовый корпус, японский стиль. Фреон R32.';
const shoraiBlackDesc = 'Инверторный кондиционер серии Toshiba SHORAI EDGE Black. Строгий минималистичный дизайн в чёрном цвете, японский компрессор. Энергоэффективность класса А+++. Функция HADA CARE, режим +8°C. Wi-Fi (опция). Фреон R32.';
const seiya2Desc = 'Инверторный кондиционер серии Toshiba SEIYA 2 (E2KVG). "Тихая ночь" — бесшумный внутренний блок от 19 дБ(А). Класс А++. UV-лампа для обеззараживания воздуха, жалюзи с управлением с пульта, режим +8°C. Единственная модель на 5 000 BTU в сегменте. Фреон R32.';

// BTU → { btu, cold, heat }
const btuMap = {
  'B05': { btu: '5 000',  cold: '1.6', heat: '2.1' },
  'B07': { btu: '7 000',  cold: '2.0', heat: '2.5' },
  'B10': { btu: '9 000',  cold: '2.5', heat: '3.2' },
  'B13': { btu: '12 000', cold: '3.5', heat: '4.2' },
  'B16': { btu: '16 000', cold: '4.6', heat: '5.5' },
  'B18': { btu: '18 000', cold: '5.0', heat: '6.0' },
  'B22': { btu: '22 000', cold: '6.1', heat: '7.0' },
  'B24': { btu: '24 000', cold: '6.8', heat: '7.3' },
  // SEIYA 2 has different specs for some sizes
  'B13s2': { btu: '12 000', cold: '3.3', heat: '3.6' },
  'B16s2': { btu: '16 000', cold: '4.2', heat: '5.0' },
  'B18s2': { btu: '18 000', cold: '5.0', heat: '5.4' },
};

function makeProduct({ name, slug, price, image, description, btuKey, energyClass }) {
  const b = btuMap[btuKey];
  const id = `p${nextId++}`;
  const chars = {
    'Базовая мощность кондиционера (охлаждение),BTU': b.btu,
    'Мощность охлаждения, кВт': b.cold,
    'Мощность обогрева, кВт': b.heat,
    'Класс энергоэффективности': energyClass,
    'Хладагент': 'R32',
    'Тип управления': 'Инвертор',
    'Wi-Fi управление': 'Опция',
  };
  const charsStr = JSON.stringify(chars).replace(/"/g, '\\"');
  const descEscaped = description.replace(/"/g, '\\"').replace(/\n/g, ' ');
  const nameEscaped = name.replace(/"/g, '\\"');
  return `  { id: "${id}", name: "${nameEscaped}", slug: "${slug}", categoryId: "split-toshiba", price: ${price}, originalPrice: ${Math.round(price * 1.1)}, description: "${descEscaped}", images: ["${image}"], characteristics: JSON.parse("${charsStr}"), brand: "Toshiba", tags: ["toshiba", "inverter"], inStock: true, rating: 4.7, reviewCount: 0 },`;
}

const products = [];

// ─── SHORAI EDGE White ────────────────────────────────────────────────────────
[
  { btu: 'B07', model: 'RAS-B07G3KVSG-E/RAS-07J2AVSG-E1', price: 4980, cls: 'A+++' },
  { btu: 'B10', model: 'RAS-B10G3KVSG-E/RAS-10J2AVSG-E1', price: 5340, cls: 'A+++' },
  { btu: 'B13', model: 'RAS-B13G3KVSG-E/RAS-13J2AVSG-E1', price: 5860, cls: 'A+++' },
  { btu: 'B16', model: 'RAS-B16G3KVSG-E/RAS-16J2AVSG-E1', price: 6664, cls: 'A++' },
  { btu: 'B18', model: 'RAS-B18G3KVSG-E/RAS-18J2AVSG-E1', price: 7670, cls: 'A++' },
  { btu: 'B22', model: 'RAS-B22G3KVSG-E/RAS-22J2AVSG-E1', price: 8430, cls: 'A++' },
].forEach(({btu, model, price, cls}) => {
  const safeModel = model.replace(/\//g, '-');
  products.push(makeProduct({
    name: `Сплит-система инверторного типа Toshiba SHORAI EDGE White ${model} комплект`,
    slug: `toshiba-shorai-edge-white-${safeModel.toLowerCase()}`,
    price, image: IMG_SHORAI_WHITE, description: shoraiWhiteDesc, btuKey: btu, energyClass: cls
  }));
});

// ─── SHORAI EDGE Black ────────────────────────────────────────────────────────
[
  { btu: 'B10', model: 'RAS-B10G3KVSGB-E/RAS-10J2AVSG-E1', price: 5340, cls: 'A+++' },
  { btu: 'B13', model: 'RAS-B13G3KVSGB-E/RAS-13J2AVSG-E1', price: 5860, cls: 'A+++' },
  { btu: 'B16', model: 'RAS-B16G3KVSGB-E/RAS-16J2AVSG-E1', price: 6664, cls: 'A++' },
  { btu: 'B18', model: 'RAS-B18G3KVSGB-E/RAS-18J2AVSG-E1', price: 7670, cls: 'A++' },
  { btu: 'B22', model: 'RAS-B22G3KVSGB-E/RAS-22J2AVSG-E1', price: 8430, cls: 'A++' },
].forEach(({btu, model, price, cls}) => {
  const safeModel = model.replace(/\//g, '-');
  products.push(makeProduct({
    name: `Сплит-система инверторного типа Toshiba SHORAI EDGE Black ${model} комплект`,
    slug: `toshiba-shorai-edge-black-${safeModel.toLowerCase()}`,
    price, image: IMG_SHORAI_BLACK, description: shoraiBlackDesc, btuKey: btu, energyClass: cls
  }));
});

// ─── SEIYA 2 (E2KVG) ─────────────────────────────────────────────────────────
[
  { btu: 'B05',   model: 'RAS-B05E2KVG-E/RAS-05E2AVG-EE',  price: 3800 },
  { btu: 'B07',   model: 'RAS-B07E2KVG-E/RAS-07E2AVG-E',   price: 3690 },
  { btu: 'B10',   model: 'RAS-B10E2KVG-E/RAS-10E2AVG-E',   price: 3815 },
  { btu: 'B13s2', model: 'RAS-B13E2KVG-E/RAS-13E2AVG-EE',  price: 4095 },
  { btu: 'B16s2', model: 'RAS-B16E2KVG-E/RAS-16E2AVG-EE',  price: 4722 },
  { btu: 'B18s2', model: 'RAS-18E2KVG-E/RAS-18E2AVG-EE',   price: 6020 },
  { btu: 'B24',   model: 'RAS-24E2KVG-E/RAS-24E2AVG-EE',   price: 6825 },
].forEach(({btu, model, price}) => {
  const safeModel = model.replace(/\//g, '-');
  products.push(makeProduct({
    name: `Сплит-система инверторного типа Toshiba SEIYA 2 ${model} комплект`,
    slug: `toshiba-seiya-2-${safeModel.toLowerCase()}`,
    price, image: IMG_SEIYA2, description: seiya2Desc, btuKey: btu, energyClass: 'A++'
  }));
});

// ─── Write to store.ts ────────────────────────────────────────────────────────
console.log(`Prepared ${products.length} Toshiba products (IDs p2256978 to p${nextId - 1})`);

let content = fs.readFileSync(storePath, 'utf8');
const insertMarker = '];\n\nexport const INITIAL_ORDERS';
const insertIdx = content.indexOf(insertMarker);
if (insertIdx === -1) { console.error('Insertion marker not found!'); process.exit(1); }

const newEntries = products.map(l => '\n' + l).join('');
content = content.slice(0, insertIdx) + newEntries + '\n' + content.slice(insertIdx);
fs.writeFileSync(storePath, content, 'utf8');
console.log('Done! Toshiba products added to store.ts');
