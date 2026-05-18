const fs = require('fs');
const path = require('path');

const storePath = path.join(__dirname, 'src/lib/store.ts');
let nextId = 2257193;

const IMG_PANASONIC = 'https://rkcdn.ru/products/d04e8c84-44aa-11ed-b732-005056013a69/src.jpg';
const IMG_NEOCLIMA  = 'https://rkcdn.ru/products/d04e8c84-44aa-11ed-b732-005056013a69/src.jpg';
const IMG_ZANUSSI   = 'https://rkcdn.ru/products/d04e8c84-44aa-11ed-b732-005056013a69/src.jpg';
const IMG_LORIOT    = 'https://rkcdn.ru/products/d04e8c84-44aa-11ed-b732-005056013a69/src.jpg';

function esc(s) { return s.replace(/"/g, '\\"').replace(/\n/g, ' '); }

function makeProduct({ name, slug, categoryId, brand, tags, price, image, description, cold, heat, btu, energyClass, refrigerant, wifi, inverter, inStock }) {
  const id = `p${nextId++}`;
  const chars = {
    'Базовая мощность кондиционера (охлаждение),BTU': btu,
    'Мощность охлаждения, кВт': cold,
    'Мощность обогрева, кВт': heat,
    'Класс энергоэффективности': energyClass,
    'Хладагент': refrigerant,
    'Тип управления': inverter ? 'Инвертор' : 'On/Off',
    'Wi-Fi управление': wifi,
  };
  const charsStr = JSON.stringify(chars).replace(/"/g, '\\"');
  const nameE = esc(name);
  const descE = esc(description);
  const stock = inStock !== false;
  return `  { id: "${id}", name: "${nameE}", slug: "${slug}", categoryId: "${categoryId}", price: ${price}, originalPrice: ${Math.round(price * 1.1)}, description: "${descE}", images: ["${image}"], characteristics: JSON.parse("${charsStr}"), brand: "${brand}", tags: ${JSON.stringify(tags)}, inStock: ${stock}, rating: 4.7, reviewCount: 0 },`;
}

const products = [];

// ─── PANASONIC Descriptions ──────────────────────────────────────────────────
const DESC_TZ = 'Инверторная сплит-система серии Panasonic ETHEREA SLIM CS-TZ. Класс А++. Инверторный компрессор, нейтрализатор запахов Nanoe-X, сенсор Econavi, автоочистка теплообменника, работа в режиме обогрева при −15°С. Wi-Fi через адаптор (опция). Фреон R32.';
const DESC_Z  = 'Инверторная сплит-система серии Panasonic ETHEREA CS-Z. Ультратонкий корпус (29 мм), класс А+++. Встроенный Wi-Fi, нейтрализатор запахов Nanoe-X, сенсор Econavi, многоступенчатая фильтрация воздуха. Фреон R32.';
const DESC_BE = 'Сплит-система серии Panasonic CS-BE. Класс А. Надёжная японская технология в доступном ценовом сегменте, автоперезапуск, таймер, режим Quiet. Фреон R32.';

// ─── PANASONIC CS-TZ (Etherea Slim, inverter) ─────────────────────────────────
[
  { inner: 'CS-TZ25TKEW', outer: 'CU-TZ25TKE', price: 1855, cold: '2.5', heat: '3.4', btu: '9 000',  cls: 'A++' },
  { inner: 'CS-TZ35TKEW', outer: 'CU-TZ35TKE', price: 2090, cold: '3.5', heat: '4.0', btu: '12 000', cls: 'A++' },
  { inner: 'CS-TZ50TKEW', outer: 'CU-TZ50TKE', price: 2940, cold: '5.0', heat: '5.4', btu: '18 000', cls: 'A++' },
  { inner: 'CS-TZ60TKEW', outer: 'CU-TZ60TKE', price: 3490, cold: '6.0', heat: '6.6', btu: '22 000', cls: 'A++' },
  { inner: 'CS-TZ71TKEW', outer: 'CU-TZ71TKE', price: 3980, cold: '7.1', heat: '8.0', btu: '24 000', cls: 'A++' },
].forEach(({ inner, outer, price, cold, heat, btu, cls }) => {
  const model = `${inner}/${outer}`;
  const safeModel = model.replace(/\//g, '-').toLowerCase();
  products.push(makeProduct({
    name: `Сплит-система инверторного типа Panasonic ETHEREA SLIM ${model} комплект`,
    slug: `panasonic-etherea-slim-${safeModel}`,
    categoryId: 'split-panasonic', brand: 'Panasonic', tags: ['panasonic', 'inverter', 'etherea-slim'],
    price, image: IMG_PANASONIC, description: DESC_TZ,
    cold, heat, btu, energyClass: cls, refrigerant: 'R32', wifi: 'Опция', inverter: true,
  }));
});

// ─── PANASONIC CS-Z (Etherea, inverter) ──────────────────────────────────────
[
  { inner: 'CS-Z20XKEW', outer: 'CU-Z20XKE', price: 2490, cold: '2.0', heat: '2.5', btu: '7 000',  cls: 'A+++' },
  { inner: 'CS-Z25XKEW', outer: 'CU-Z25XKE', price: 2690, cold: '2.5', heat: '3.2', btu: '9 000',  cls: 'A+++' },
  { inner: 'CS-Z35XKEW', outer: 'CU-Z35XKE', price: 2990, cold: '3.5', heat: '4.0', btu: '12 000', cls: 'A+++' },
  { inner: 'CS-Z50XKEW', outer: 'CU-Z50XKE', price: 3990, cold: '5.0', heat: '5.8', btu: '18 000', cls: 'A++' },
  { inner: 'CS-Z71XKEW', outer: 'CU-Z71XKE', price: 5280, cold: '7.1', heat: '7.8', btu: '24 000', cls: 'A++' },
].forEach(({ inner, outer, price, cold, heat, btu, cls }) => {
  const model = `${inner}/${outer}`;
  const safeModel = model.replace(/\//g, '-').toLowerCase();
  products.push(makeProduct({
    name: `Сплит-система инверторного типа Panasonic ETHEREA ${model} комплект`,
    slug: `panasonic-etherea-${safeModel}`,
    categoryId: 'split-panasonic', brand: 'Panasonic', tags: ['panasonic', 'inverter', 'etherea'],
    price, image: IMG_PANASONIC, description: DESC_Z,
    cold, heat, btu, energyClass: cls, refrigerant: 'R32', wifi: 'Встроенный', inverter: true,
  }));
});

// ─── PANASONIC CS-BE (basic, on/off) ─────────────────────────────────────────
[
  { inner: 'CS-BE09TKE', outer: 'CU-BE09TKE', price: 1490, cold: '2.5', heat: '2.8', btu: '9 000',  cls: 'A' },
  { inner: 'CS-BE12TKE', outer: 'CU-BE12TKE', price: 1680, cold: '3.5', heat: '3.8', btu: '12 000', cls: 'A' },
  { inner: 'CS-BE18TKE', outer: 'CU-BE18TKE', price: 2390, cold: '5.0', heat: '5.3', btu: '18 000', cls: 'A' },
  { inner: 'CS-BE24TKE', outer: 'CU-BE24TKE', price: 3090, cold: '7.0', heat: '7.5', btu: '24 000', cls: 'A' },
].forEach(({ inner, outer, price, cold, heat, btu, cls }) => {
  const model = `${inner}/${outer}`;
  const safeModel = model.replace(/\//g, '-').toLowerCase();
  products.push(makeProduct({
    name: `Сплит-система Panasonic ${model} комплект`,
    slug: `panasonic-be-${safeModel}`,
    categoryId: 'split-panasonic', brand: 'Panasonic', tags: ['panasonic', 'on-off'],
    price, image: IMG_PANASONIC, description: DESC_BE,
    cold, heat, btu, energyClass: cls, refrigerant: 'R32', wifi: 'Нет', inverter: false,
  }));
});

// ─── NEOCLIMA Descriptions ───────────────────────────────────────────────────
const DESC_NEO_HAX = 'Сплит-система NeoClima серии HAX. Класс А. Бюджетная on/off модель для небольших помещений. Таймер, автоперезапуск, режимы охлаждения, обогрева и вентиляции. Фреон R32.';
const DESC_NEO_INV = 'Инверторная сплит-система NeoClima серии AHX Inverter. Класс А++. Плавная регулировка мощности, низкий уровень шума, режим работы при −15°С, встроенный Wi-Fi (приложение Smart Life). Фреон R32.';

// ─── NEOCLIMA HAX on/off ─────────────────────────────────────────────────────
[
  { m: 'NS-07HAX1/NU-07HAX1', price: 760,  cold: '2.0', heat: '2.2', btu: '7 000'  },
  { m: 'NS-09HAX1/NU-09HAX1', price: 840,  cold: '2.5', heat: '2.8', btu: '9 000'  },
  { m: 'NS-12HAX1/NU-12HAX1', price: 1040, cold: '3.5', heat: '3.8', btu: '12 000' },
  { m: 'NS-18HAX1/NU-18HAX1', price: 1490, cold: '5.0', heat: '5.3', btu: '18 000' },
  { m: 'NS-24HAX1/NU-24HAX1', price: 2140, cold: '7.0', heat: '7.5', btu: '24 000' },
].forEach(({ m, price, cold, heat, btu }) => {
  const safeM = m.replace(/\//g, '-').toLowerCase();
  products.push(makeProduct({
    name: `Сплит-система NeoClima HAX ${m} комплект`,
    slug: `neoclima-hax-${safeM}`,
    categoryId: 'split-neoclima', brand: 'NeoClima', tags: ['neoclima', 'on-off'],
    price, image: IMG_NEOCLIMA, description: DESC_NEO_HAX,
    cold, heat, btu, energyClass: 'A', refrigerant: 'R32', wifi: 'Нет', inverter: false,
  }));
});

// ─── NEOCLIMA AHX Inverter ───────────────────────────────────────────────────
[
  { m: 'NS-07AHX2/NU-07AHX2', price: 940,  cold: '2.0', heat: '2.3', btu: '7 000'  },
  { m: 'NS-09AHX2/NU-09AHX2', price: 1060, cold: '2.5', heat: '3.0', btu: '9 000'  },
  { m: 'NS-12AHX2/NU-12AHX2', price: 1290, cold: '3.5', heat: '3.9', btu: '12 000' },
  { m: 'NS-18AHX2/NU-18AHX2', price: 1840, cold: '5.0', heat: '5.5', btu: '18 000' },
  { m: 'NS-24AHX2/NU-24AHX2', price: 2540, cold: '7.0', heat: '7.6', btu: '24 000' },
].forEach(({ m, price, cold, heat, btu }) => {
  const safeM = m.replace(/\//g, '-').toLowerCase();
  products.push(makeProduct({
    name: `Сплит-система инверторного типа NeoClima AHX INVERTER ${m} комплект`,
    slug: `neoclima-ahx-inv-${safeM}`,
    categoryId: 'split-neoclima', brand: 'NeoClima', tags: ['neoclima', 'inverter'],
    price, image: IMG_NEOCLIMA, description: DESC_NEO_INV,
    cold, heat, btu, energyClass: 'A++', refrigerant: 'R32', wifi: 'Встроенный', inverter: true,
  }));
});

// ─── ZANUSSI Descriptions ─────────────────────────────────────────────────────
const DESC_ZACS = 'Сплит-система серии Zanussi ZACS. Класс А. Надёжная бюджетная on/off модель. Таймер, автоперезапуск, режим Turbo Cool, самодиагностика. Фреон R410A.';
const DESC_ZACI = 'Инверторная сплит-система серии Zanussi ZACI. Класс А. Инверторный компрессор, экономичная работа, тихий режим от 23 дБ, режим обогрева до −7°С. Фреон R410A.';

// ─── ZANUSSI ZACS on/off ──────────────────────────────────────────────────────
[
  { m: 'ZACS-07 HSF/A22/N1', slug: 'zanussi-zacs-07-hsf-a22-n1', price: 780,  cold: '2.05', heat: '2.27', btu: '7 000'  },
  { m: 'ZACS-09 HSF/A22/N1', slug: 'zanussi-zacs-09-hsf-a22-n1', price: 860,  cold: '2.5',  heat: '2.75', btu: '9 000'  },
  { m: 'ZACS-12 HSF/A22/N1', slug: 'zanussi-zacs-12-hsf-a22-n1', price: 1080, cold: '3.5',  heat: '3.8',  btu: '12 000' },
  { m: 'ZACS-18 HSF/A22/N1', slug: 'zanussi-zacs-18-hsf-a22-n1', price: 1540, cold: '5.0',  heat: '5.5',  btu: '18 000' },
  { m: 'ZACS-24 HSF/A22/N1', slug: 'zanussi-zacs-24-hsf-a22-n1', price: 2210, cold: '7.0',  heat: '7.5',  btu: '24 000' },
].forEach(({ m, slug, price, cold, heat, btu }) => {
  products.push(makeProduct({
    name: `Сплит-система Zanussi ${m} комплект`,
    slug,
    categoryId: 'split-zanussi', brand: 'Zanussi', tags: ['zanussi', 'on-off'],
    price, image: IMG_ZANUSSI, description: DESC_ZACS,
    cold, heat, btu, energyClass: 'A', refrigerant: 'R410A', wifi: 'Нет', inverter: false,
  }));
});

// ─── ZANUSSI ZACI inverter ─────────────────────────────────────────────────────
[
  { m: 'ZACI-07 HSF/N1', slug: 'zanussi-zaci-07-hsf-n1', price: 970,  cold: '2.05', heat: '2.35', btu: '7 000'  },
  { m: 'ZACI-09 HSF/N1', slug: 'zanussi-zaci-09-hsf-n1', price: 1100, cold: '2.5',  heat: '2.9',  btu: '9 000'  },
  { m: 'ZACI-12 HSF/N1', slug: 'zanussi-zaci-12-hsf-n1', price: 1380, cold: '3.5',  heat: '3.9',  btu: '12 000' },
  { m: 'ZACI-18 HSF/N1', slug: 'zanussi-zaci-18-hsf-n1', price: 1950, cold: '5.0',  heat: '5.5',  btu: '18 000' },
  { m: 'ZACI-24 HSF/N1', slug: 'zanussi-zaci-24-hsf-n1', price: 2700, cold: '7.0',  heat: '7.5',  btu: '24 000' },
].forEach(({ m, slug, price, cold, heat, btu }) => {
  products.push(makeProduct({
    name: `Сплит-система инверторного типа Zanussi ${m} комплект`,
    slug,
    categoryId: 'split-zanussi', brand: 'Zanussi', tags: ['zanussi', 'inverter'],
    price, image: IMG_ZANUSSI, description: DESC_ZACI,
    cold, heat, btu, energyClass: 'A', refrigerant: 'R410A', wifi: 'Нет', inverter: true,
  }));
});

// ─── LORIOT Descriptions ───────────────────────────────────────────────────────
const DESC_LOR_OFF = 'Сплит-система Loriot серии LT. Класс А. Бюджетная on/off модель для экономичного охлаждения и обогрева. Таймер, автоперезапуск. Фреон R32.';
const DESC_LOR_INV = 'Инверторная сплит-система Loriot серии LTi. Класс А. Инверторный компрессор, плавная регулировка мощности, тихий режим. Фреон R32.';

// ─── LORIOT LT on/off ──────────────────────────────────────────────────────────
[
  { m: 'LT-09',  price: 790,  cold: '2.5', heat: '2.8', btu: '9 000'  },
  { m: 'LT-12',  price: 970,  cold: '3.5', heat: '3.8', btu: '12 000' },
  { m: 'LT-18',  price: 1390, cold: '5.0', heat: '5.3', btu: '18 000' },
  { m: 'LT-24',  price: 2010, cold: '7.0', heat: '7.5', btu: '24 000' },
].forEach(({ m, price, cold, heat, btu }) => {
  products.push(makeProduct({
    name: `Сплит-система Loriot ${m} комплект`,
    slug: `loriot-${m.toLowerCase()}`,
    categoryId: 'split-loriot', brand: 'Loriot', tags: ['loriot', 'on-off'],
    price, image: IMG_LORIOT, description: DESC_LOR_OFF,
    cold, heat, btu, energyClass: 'A', refrigerant: 'R32', wifi: 'Нет', inverter: false,
  }));
});

// ─── LORIOT LTi inverter ──────────────────────────────────────────────────────
[
  { m: 'LTi-09', price: 980,  cold: '2.5', heat: '2.9', btu: '9 000'  },
  { m: 'LTi-12', price: 1180, cold: '3.5', heat: '3.9', btu: '12 000' },
  { m: 'LTi-18', price: 1690, cold: '5.0', heat: '5.5', btu: '18 000' },
].forEach(({ m, price, cold, heat, btu }) => {
  products.push(makeProduct({
    name: `Сплит-система инверторного типа Loriot ${m} комплект`,
    slug: `loriot-inv-${m.toLowerCase()}`,
    categoryId: 'split-loriot', brand: 'Loriot', tags: ['loriot', 'inverter'],
    price, image: IMG_LORIOT, description: DESC_LOR_INV,
    cold, heat, btu, energyClass: 'A', refrigerant: 'R32', wifi: 'Нет', inverter: true,
  }));
});

// ─── Write to store.ts ────────────────────────────────────────────────────────
console.log(`Prepared ${products.length} products (IDs p2257193 to p${nextId - 1})`);

let content = fs.readFileSync(storePath, 'utf8');
const insertMarker = '];\n\nexport const INITIAL_ORDERS';
const insertIdx = content.indexOf(insertMarker);
if (insertIdx === -1) { console.error('Insertion marker not found!'); process.exit(1); }

const newEntries = products.map(l => '\n' + l).join('');
content = content.slice(0, insertIdx) + newEntries + '\n' + content.slice(insertIdx);
fs.writeFileSync(storePath, content, 'utf8');
console.log('Done! NeoClima, Zanussi, Loriot, Panasonic products added to store.ts');
