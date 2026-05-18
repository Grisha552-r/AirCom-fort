const fs = require('fs');
const path = require('path');

const storePath = path.join(__dirname, 'src/lib/store.ts');
let nextId = 2257109;

const IMG = 'https://rkcdn.ru/products/d04e8c84-44aa-11ed-b732-005056013a69/src.jpg';

function esc(s) { return s.replace(/"/g, '\\"').replace(/\n/g, ' '); }

function makeProduct({ name, slug, price, description, cold, heat, btu, energyClass, wifi, inverter, inStock }) {
  const id = `p${nextId++}`;
  const chars = {
    'Базовая мощность кондиционера (охлаждение),BTU': btu,
    'Мощность охлаждения, кВт': cold,
    'Мощность обогрева, кВт': heat,
    'Класс энергоэффективности': energyClass,
    'Хладагент': 'R32',
    'Тип управления': inverter ? 'Инвертор' : 'On/Off',
    'Wi-Fi управление': wifi,
  };
  const charsStr = JSON.stringify(chars).replace(/"/g, '\\"');
  const nameE = esc(name);
  const descE = esc(description);
  const stock = inStock !== false;
  return `  { id: "${id}", name: "${nameE}", slug: "${slug}", categoryId: "split-royal-clima", price: ${price}, originalPrice: ${Math.round(price * 1.1)}, description: "${descE}", images: ["${IMG}"], characteristics: JSON.parse("${charsStr}"), brand: "Royal Clima", tags: ["royal-clima", ${inverter ? '"inverter"' : '"on-off"'}], inStock: ${stock}, rating: 4.7, reviewCount: 0 },`;
}

const products = [];

// ─── Descriptions ─────────────────────────────────────────────────────────────
const D = {
  RF:    'Инверторная сплит-система серии Royal Clima ROYAL FRESH с функцией приточной вентиляции. Постоянный приток свежего воздуха с улицы без открытия окон. Класс А++/А+++. Wi-Fi управление. Фреон R32.',
  RFS:   'Инверторная сплит-система серии Royal Clima ROYAL FRESH STANDARD с приточной вентиляцией. Класс А++/А+++. Wi-Fi. Фреон R32.',
  RSN:   'Инверторная сплит-система серии Royal Clima ROYAL SUPREMO NERO FULL DC EU. Чёрный корпус, высокий класс А++/А+++. Wi-Fi управление. Фреон R32.',
  RSB:   'Инверторная сплит-система серии Royal Clima ROYAL SUPREMO BLANCO FULL DC EU. Белый матовый корпус, класс А++/А+++. Wi-Fi управление. Фреон R32.',
  RNC:   'Инверторная сплит-система серии Royal Clima RENAISSANCE DC EU INVERTER 2024. Класс А++/А+. Фреон R32.',
  RND_I: 'Инверторная сплит-система серии Royal Clima RENAISSANCE INVERTER 2024. Класс А++/А+. Фреон R32.',
  AN_I:  'Инверторная сплит-система серии Royal Clima ATTICA NERO Inverter. Элегантный дизайн, класс А. Фреон R32.',
  GR:    'Инверторная сплит-система серии Royal Clima GRIDA DC EU. Класс А++/А+. Фреон R32.',
  PFD:   'Инверторная сплит-система серии Royal Clima PERFETTO DC EU NEW Wi-Fi. Класс А++/А+. Встроенный Wi-Fi, голосовое управление через Яндекс Алису. Фреон R32.',
  FCE:   'Инверторная сплит-система серии Royal Clima FELICITA INVERTER 2026 NEW Wi-Fi. Класс А. Встроенный Wi-Fi, голосовое управление. Фреон R32.',
  FC_I:  'Инверторная сплит-система серии Royal Clima FELICITA INVERTER Wi-Fi. Класс А (малые мощности) / А++ (большие). Встроенный Wi-Fi, голосовое управление. Фреон R32.',
  TWC:   'Инверторная сплит-система серии Royal Clima TRIUMPH Inverter 2024. Класс А. Фреон R32.',
  TWL_I: 'Инверторная сплит-система серии Royal Clima TRIUMPH LITE INVERTER NEW Wi-Fi. Класс А. Встроенный Wi-Fi, голосовое управление через Яндекс Алису. Фреон R32.',
  GL_I:  'Инверторная сплит-система серии Royal Clima GLORIA Inverter Wi-Fi. Класс А. Встроенный Wi-Fi, голосовое управление через Яндекс Алису. Фреон R32.',
  OME:   'Инверторная сплит-система серии Royal Clima OPTIMUM 2.0 Inverter NEW Wi-Fi. Класс А. Встроенный Wi-Fi, голосовое управление через Яндекс Алису. Фреон R32.',
  AR:    'Инверторная сплит-система серии Royal Clima ARIA DC Inverter NEW Wi-Fi. Класс А. Встроенный Wi-Fi, голосовое управление. Фреон R32.',
  RND_O: 'Сплит-система on/off серии Royal Clima RENAISSANCE NEW Wi-Fi. Класс А. Встроенный Wi-Fi. Фреон R32.',
  AN_O:  'Сплит-система on/off серии Royal Clima ATTICA NERO. Стильный дизайн, класс А. Фреон R32.',
  PDC:   'Сплит-система on/off серии Royal Clima PANDORA NEW Wi-Fi. Класс А. Встроенный Wi-Fi, голосовое управление через Яндекс Алису. Фреон R32.',
  FC_O:  'Сплит-система on/off серии Royal Clima FELICITA NEW Wi-Fi. Класс А. Встроенный Wi-Fi, голосовое управление. Фреон R32.',
  GL_O:  'Сплит-система on/off серии Royal Clima GLORIA UPGRADE. Класс А. Фреон R32.',
  TWL_O: 'Сплит-система on/off серии Royal Clima TRIUMPH LITE NEW Wi-Fi. Класс А. Встроенный Wi-Fi, голосовое управление через Яндекс Алису. Фреон R32.',
  NB:    'Сплит-система on/off серии Royal Clima NOBILE NEW. Класс А. Надёжная бюджетная модель. Фреон R32.',
  GDB:   'Мощная сплит-система on/off серии Royal Clima GRANDE NEW. Класс А. Мощность от 8.5 до 10.5 кВт. Фреон R32.',
};

// ─── ROYAL FRESH ─────────────────────────────────────────────────────────────
[
  { m: 'RCI-RF30HN', price: 2923, cold: '2.9', heat: '3.1', btu: '10 000', cls: 'A+++' },
  { m: 'RCI-RF40HN', price: 3127, cold: '3.9', heat: '4.1', btu: '14 000', cls: 'A+++' },
].forEach(({ m, price, cold, heat, btu, cls }) => {
  products.push(makeProduct({ name: `Сплит-система инверторного типа Royal Clima ROYAL FRESH ${m} комплект`, slug: `royal-clima-royal-fresh-${m.toLowerCase()}`, price, description: D.RF, cold, heat, btu, energyClass: cls, wifi: 'Встроенный', inverter: true }));
});

// ─── ROYAL FRESH STANDARD ────────────────────────────────────────────────────
[
  { m: 'RCI-RFS28HN', price: 2634, cold: '2.75', heat: '2.95', btu: '9 000', cls: 'A+++' },
  { m: 'RCI-RFS35HN', price: 2977, cold: '3.6',  heat: '3.8',  btu: '12 000', cls: 'A+++' },
].forEach(({ m, price, cold, heat, btu, cls }) => {
  products.push(makeProduct({ name: `Сплит-система инверторного типа Royal Clima ROYAL FRESH STANDARD ${m} комплект`, slug: `royal-clima-royal-fresh-standard-${m.toLowerCase()}`, price, description: D.RFS, cold, heat, btu, energyClass: cls, wifi: 'Встроенный', inverter: true }));
});

// ─── ROYAL SUPREMO NERO ──────────────────────────────────────────────────────
[
  { m: 'RCI-RSN30HN', price: 2404, cold: '2.8', heat: '3.63', btu: '9 000',  cls: 'A++' },
  { m: 'RCI-RSN40HN', price: 2684, cold: '3.7', heat: '3.95', btu: '14 000', cls: 'A++' },
  { m: 'RCI-RSN55HN', price: 4236, cold: '5.5', heat: '5.65', btu: '18 000', cls: 'A++' },
  { m: 'RCI-RSN75HN', price: 5001, cold: '7.3', heat: '7.5',  btu: '24 000', cls: 'A++' },
].forEach(({ m, price, cold, heat, btu, cls }) => {
  products.push(makeProduct({ name: `Сплит-система инверторного типа Royal Clima ROYAL SUPREMO NERO ${m} комплект`, slug: `royal-clima-supremo-nero-${m.toLowerCase()}`, price, description: D.RSN, cold, heat, btu, energyClass: cls, wifi: 'Встроенный', inverter: true }));
});

// ─── ROYAL SUPREMO BLANCO ────────────────────────────────────────────────────
[
  { m: 'RCI-RSB30HN', price: 2367, cold: '2.8', heat: '3.63', btu: '9 000',  cls: 'A++' },
  { m: 'RCI-RSB40HN', price: 2673, cold: '3.7', heat: '3.95', btu: '14 000', cls: 'A++' },
  { m: 'RCI-RSB55HN', price: 4217, cold: '5.5', heat: '5.65', btu: '18 000', cls: 'A++' },
  { m: 'RCI-RSB75HN', price: 4996, cold: '7.3', heat: '7.5',  btu: '24 000', cls: 'A++' },
].forEach(({ m, price, cold, heat, btu, cls }) => {
  products.push(makeProduct({ name: `Сплит-система инверторного типа Royal Clima ROYAL SUPREMO BLANCO ${m} комплект`, slug: `royal-clima-supremo-blanco-${m.toLowerCase()}`, price, description: D.RSB, cold, heat, btu, energyClass: cls, wifi: 'Встроенный', inverter: true }));
});

// ─── RENAISSANCE DC EU Inverter 2024 ─────────────────────────────────────────
products.push(makeProduct({ name: 'Сплит-система инверторного типа Royal Clima RENAISSANCE DC EU RCI-RNC35HN комплект', slug: 'royal-clima-renaissance-dc-rci-rnc35hn', price: 2042, description: D.RNC, cold: '3.45', heat: '3.85', btu: '12 000', energyClass: 'A++', wifi: 'Нет', inverter: true, inStock: false }));

// ─── RENAISSANCE INVERTER 2024 ───────────────────────────────────────────────
[
  { m: 'RCI-RND24HN', price: 1716, cold: '2.47', heat: '2.55', btu: '9 000'  },
  { m: 'RCI-RND30HN', price: 1818, cold: '2.9',  heat: '3.2',  btu: '9 000'  },
].forEach(({ m, price, cold, heat, btu }) => {
  products.push(makeProduct({ name: `Сплит-система инверторного типа Royal Clima RENAISSANCE INVERTER ${m} комплект`, slug: `royal-clima-renaissance-inv-${m.toLowerCase()}`, price, description: D.RND_I, cold, heat, btu, energyClass: 'A++', wifi: 'Нет', inverter: true }));
});

// ─── ATTICA NERO Inverter ────────────────────────────────────────────────────
products.push(makeProduct({ name: 'Сплит-система инверторного типа Royal Clima ATTICA NERO RCI-AN55HN комплект', slug: 'royal-clima-attica-nero-inv-rci-an55hn', price: 2855, description: D.AN_I, cold: '5.32', heat: '5.3', btu: '18 000', energyClass: 'A', wifi: 'Нет', inverter: true }));

// ─── GRIDA DC EU Inverter ────────────────────────────────────────────────────
[
  { m: 'RCI-GR22HN',  price: 1467, cold: '2.2', heat: '2.4', btu: '7 000'  },
  { m: 'RCI-GRC28HN', price: 1668, cold: '2.5', heat: '2.8', btu: '9 000'  },
  { m: 'RCI-GRC35HN', price: 1914, cold: '3.2', heat: '3.4', btu: '12 000' },
  { m: 'RCI-GR50HN',  price: 2726, cold: '4.6', heat: '5.2', btu: '18 000' },
  { m: 'RCI-GR65HN',  price: 3697, cold: '6.2', heat: '6.5', btu: '22 000' },
].forEach(({ m, price, cold, heat, btu }) => {
  products.push(makeProduct({ name: `Сплит-система инверторного типа Royal Clima GRIDA DC EU ${m} комплект`, slug: `royal-clima-grida-${m.toLowerCase()}`, price, description: D.GR, cold, heat, btu, energyClass: 'A++', wifi: 'Нет', inverter: true }));
});

// ─── PERFETTO DC EU Inverter NEW Wi-Fi ───────────────────────────────────────
[
  { m: 'RCI-PFD24HN', price: 1646, cold: '2.4', heat: '2.65', btu: '9 000'  },
  { m: 'RCI-PFD30HN', price: 1750, cold: '2.8', heat: '2.96', btu: '9 000'  },
  { m: 'RCI-PFD40HN', price: 1979, cold: '3.8', heat: '3.95', btu: '14 000' },
  { m: 'RCI-PFD55HN', price: 3293, cold: '5.4', heat: '5.41', btu: '18 000' },
  { m: 'RCI-PFD75HN', price: 3782, cold: '7.2', heat: '7.35', btu: '24 000' },
].forEach(({ m, price, cold, heat, btu }) => {
  products.push(makeProduct({ name: `Сплит-система инверторного типа Royal Clima PERFETTO DC EU ${m} комплект`, slug: `royal-clima-perfetto-${m.toLowerCase()}`, price, description: D.PFD, cold, heat, btu, energyClass: 'A++', wifi: 'Встроенный', inverter: true }));
});

// ─── FELICITA Inverter 2026 NEW Wi-Fi ────────────────────────────────────────
[
  { m: 'RCI-FCE24HN', price: 1611, cold: '2.65', heat: '2.9',  btu: '9 000'  },
  { m: 'RCI-FCE30HN', price: 1754, cold: '3.0',  heat: '3.45', btu: '9 000'  },
  { m: 'RCI-FCE35HN', price: 2019, cold: '3.6',  heat: '3.8',  btu: '12 000' },
].forEach(({ m, price, cold, heat, btu }) => {
  products.push(makeProduct({ name: `Сплит-система инверторного типа Royal Clima FELICITA INVERTER 2026 ${m} комплект`, slug: `royal-clima-felicita-2026-${m.toLowerCase()}`, price, description: D.FCE, cold, heat, btu, energyClass: 'A', wifi: 'Встроенный', inverter: true }));
});

// ─── FELICITA Inverter NEW Wi-Fi ─────────────────────────────────────────────
[
  { m: 'RCI-FC22HN', price: 1597, cold: '2.35', heat: '2.55', btu: '7 000',  cls: 'A' },
  { m: 'RCI-FC28HN', price: 1740, cold: '2.65', heat: '2.98', btu: '9 000',  cls: 'A' },
  { m: 'RCI-FC35HN', price: 2006, cold: '3.65', heat: '3.77', btu: '12 000', cls: 'A' },
  { m: 'RCI-FC55HN', price: 3403, cold: '5.65', heat: '6.1',  btu: '18 000', cls: 'A++', stock: false },
  { m: 'RCI-FC75HN', price: 4201, cold: '7.65', heat: '7.9',  btu: '24 000', cls: 'A++' },
].forEach(({ m, price, cold, heat, btu, cls, stock }) => {
  products.push(makeProduct({ name: `Сплит-система инверторного типа Royal Clima FELICITA INVERTER ${m} комплект`, slug: `royal-clima-felicita-inv-${m.toLowerCase()}`, price, description: D.FC_I, cold, heat, btu, energyClass: cls, wifi: 'Встроенный', inverter: true, inStock: stock !== false }));
});

// ─── TRIUMPH Inverter ────────────────────────────────────────────────────────
products.push(makeProduct({ name: 'Сплит-система инверторного типа Royal Clima TRIUMPH INVERTER RCI-TWC28HN комплект', slug: 'royal-clima-triumph-inv-rci-twc28hn', price: 1526, description: D.TWC, cold: '2.85', heat: '3.0', btu: '9 000', energyClass: 'A', wifi: 'Нет', inverter: true }));

// ─── TRIUMPH LITE Inverter NEW ───────────────────────────────────────────────
[
  { m: 'RCI-TWL22HN', price: 1489, cold: '2.3',  heat: '2.5', btu: '7 000'  },
  { m: 'RCI-TWL28HN', price: 1657, cold: '2.85', heat: '3.0', btu: '9 000'  },
  { m: 'RCI-TWL35HN', price: 1956, cold: '3.6',  heat: '3.7', btu: '12 000' },
].forEach(({ m, price, cold, heat, btu }) => {
  products.push(makeProduct({ name: `Сплит-система инверторного типа Royal Clima TRIUMPH LITE INVERTER ${m} комплект`, slug: `royal-clima-triumph-lite-inv-${m.toLowerCase()}`, price, description: D.TWL_I, cold, heat, btu, energyClass: 'A', wifi: 'Встроенный', inverter: true }));
});

// ─── GLORIA Inverter ─────────────────────────────────────────────────────────
[
  { m: 'RCI-GL22HN', price: 1480, cold: '2.18', heat: '2.42', btu: '7 000',  stock: true  },
  { m: 'RCI-GL28HN', price: 1629, cold: '2.65', heat: '2.8',  btu: '9 000',  stock: true  },
  { m: 'RCI-GL35HN', price: 1899, cold: '3.47', heat: '3.6',  btu: '12 000', stock: true  },
  { m: 'RCI-GL55HN', price: 3264, cold: '5.32', heat: '5.3',  btu: '18 000', stock: false },
  { m: 'RCI-GL70HN', price: 4028, cold: '6.9',  heat: '7.04', btu: '24 000', stock: true  },
].forEach(({ m, price, cold, heat, btu, stock }) => {
  products.push(makeProduct({ name: `Сплит-система инверторного типа Royal Clima GLORIA INVERTER ${m} комплект`, slug: `royal-clima-gloria-inv-${m.toLowerCase()}`, price, description: D.GL_I, cold, heat, btu, energyClass: 'A', wifi: 'Встроенный', inverter: true, inStock: stock }));
});

// ─── OPTIMUM 2.0 Inverter NEW ────────────────────────────────────────────────
[
  { m: 'RCI-OME22HN', price: 1371, cold: '2.2',  heat: '2.3',  btu: '7 000'  },
  { m: 'RCI-OME28HN', price: 1523, cold: '2.65', heat: '2.78', btu: '9 000'  },
  { m: 'RCI-OME35HN', price: 1823, cold: '3.52', heat: '3.66', btu: '12 000' },
].forEach(({ m, price, cold, heat, btu }) => {
  products.push(makeProduct({ name: `Сплит-система инверторного типа Royal Clima OPTIMUM 2.0 ${m} комплект`, slug: `royal-clima-optimum-${m.toLowerCase()}`, price, description: D.OME, cold, heat, btu, energyClass: 'A', wifi: 'Встроенный', inverter: true }));
});

// ─── ARIA DC Inverter NEW ────────────────────────────────────────────────────
[
  { m: 'RCI-AR22HN', price: 999,  cold: '2.12', heat: '2.35', btu: '7 000'  },
  { m: 'RCI-AR28HN', price: 1190, cold: '2.65', heat: '2.8',  btu: '9 000'  },
  { m: 'RCI-AR35HN', price: 1390, cold: '3.52', heat: '3.66', btu: '12 000' },
].forEach(({ m, price, cold, heat, btu }) => {
  products.push(makeProduct({ name: `Сплит-система инверторного типа Royal Clima ARIA DC INVERTER ${m} комплект`, slug: `royal-clima-aria-${m.toLowerCase()}`, price, description: D.AR, cold, heat, btu, energyClass: 'A', wifi: 'Встроенный', inverter: true }));
});

// ─── RENAISSANCE NEW Wi-Fi (on/off) ──────────────────────────────────────────
[
  { m: 'RC-RND22HN', price: 1104, cold: '2.16', heat: '2.3',  btu: '7 000'  },
  { m: 'RC-RND28HN', price: 1179, cold: '2.83', heat: '2.9',  btu: '9 000'  },
  { m: 'RC-RND35HN', price: 1623, cold: '3.65', heat: '3.75', btu: '12 000' },
  { m: 'RC-RND55HN', price: 2709, cold: '5.35', heat: '5.5',  btu: '18 000' },
  { m: 'RC-RND70HN', price: 3423, cold: '7.05', heat: '7.2',  btu: '24 000' },
].forEach(({ m, price, cold, heat, btu }) => {
  products.push(makeProduct({ name: `Сплит-система Royal Clima RENAISSANCE Wi-Fi ${m} комплект`, slug: `royal-clima-renaissance-wifi-${m.toLowerCase()}`, price, description: D.RND_O, cold, heat, btu, energyClass: 'A', wifi: 'Встроенный', inverter: false }));
});

// ─── ATTICA NERO (on/off) ────────────────────────────────────────────────────
[
  { m: 'RC-AN22HN', price: 1234, cold: '2.17', heat: '2.35', btu: '7 000',  stock: true  },
  { m: 'RC-AN28HN', price: 1366, cold: '2.73', heat: '2.92', btu: '9 000',  stock: true  },
  { m: 'RC-AN35HN', price: 1772, cold: '3.64', heat: '3.77', btu: '12 000', stock: true  },
  { m: 'RC-AN55HN', price: 2805, cold: '5.37', heat: '5.53', btu: '18 000', stock: false },
  { m: 'RC-AN70HN', price: 3041, cold: '7.24', heat: '7.42', btu: '24 000', stock: true  },
].forEach(({ m, price, cold, heat, btu, stock }) => {
  products.push(makeProduct({ name: `Сплит-система Royal Clima ATTICA NERO ${m} комплект`, slug: `royal-clima-attica-nero-${m.toLowerCase()}`, price, description: D.AN_O, cold, heat, btu, energyClass: 'A', wifi: 'Нет', inverter: false, inStock: stock }));
});

// ─── PANDORA NEW Wi-Fi (on/off) ──────────────────────────────────────────────
[
  { m: 'RC-PDC22HN',  price: 1045, cold: '2.2',   heat: '2.38', btu: '7 000'  },
  { m: 'RC-PDC28HN',  price: 1142, cold: '2.8',   heat: '2.95', btu: '9 000'  },
  { m: 'RC-PDC35HN',  price: 1549, cold: '3.67',  heat: '3.8',  btu: '12 000' },
  { m: 'RC-PDC55HN',  price: 2547, cold: '5.4',   heat: '5.5',  btu: '18 000' },
  { m: 'RC-PDC70HN',  price: 3133, cold: '7.25',  heat: '7.6',  btu: '24 000' },
  { m: 'RC-PDC105HN', price: 4957, cold: '10.55', heat: '10.7', btu: '36 000' },
].forEach(({ m, price, cold, heat, btu }) => {
  products.push(makeProduct({ name: `Сплит-система Royal Clima PANDORA Wi-Fi ${m} комплект`, slug: `royal-clima-pandora-${m.toLowerCase()}`, price, description: D.PDC, cold, heat, btu, energyClass: 'A', wifi: 'Встроенный', inverter: false }));
});

// ─── FELICITA NEW Wi-Fi (on/off) ─────────────────────────────────────────────
[
  { m: 'RC-FC22HN', price: 1136, cold: '2.4',  heat: '2.5',  btu: '7 000'  },
  { m: 'RC-FC28HN', price: 1226, cold: '2.7',  heat: '2.8',  btu: '9 000'  },
  { m: 'RC-FC35HN', price: 1673, cold: '3.6',  heat: '3.7',  btu: '12 000' },
  { m: 'RC-FC55HN', price: 2796, cold: '5.35', heat: '5.65', btu: '18 000' },
  { m: 'RC-FC70HN', price: 3534, cold: '7.15', heat: '7.35', btu: '24 000' },
].forEach(({ m, price, cold, heat, btu }) => {
  products.push(makeProduct({ name: `Сплит-система Royal Clima FELICITA Wi-Fi ${m} комплект`, slug: `royal-clima-felicita-${m.toLowerCase()}`, price, description: D.FC_O, cold, heat, btu, energyClass: 'A', wifi: 'Встроенный', inverter: false }));
});

// ─── GLORIA UPGRADE (on/off) ─────────────────────────────────────────────────
[
  { m: 'RC-GL22HN',  price: 987,  cold: '2.17', heat: '2.35', btu: '7 000',  stock: true  },
  { m: 'RC-GL28HN',  price: 1079, cold: '2.73', heat: '2.92', btu: '9 000',  stock: true  },
  { m: 'RC-GL35HN',  price: 1417, cold: '3.64', heat: '3.77', btu: '12 000', stock: true  },
  { m: 'RC-GL55HN',  price: 2336, cold: '5.37', heat: '5.53', btu: '18 000', stock: false },
  { m: 'RC-GLC70HN', price: 2892, cold: '7.24', heat: '7.42', btu: '24 000', stock: true  },
  { m: 'RC-GL90HN',  price: 3558, cold: '8.8',  heat: '8.94', btu: '30 000', stock: false },
].forEach(({ m, price, cold, heat, btu, stock }) => {
  products.push(makeProduct({ name: `Сплит-система Royal Clima GLORIA UPGRADE ${m} комплект`, slug: `royal-clima-gloria-${m.toLowerCase()}`, price, description: D.GL_O, cold, heat, btu, energyClass: 'A', wifi: 'Нет', inverter: false, inStock: stock }));
});

// ─── TRIUMPH LITE NEW (on/off) ───────────────────────────────────────────────
[
  { m: 'RC-TWL22HN', price: 1060, cold: '2.37', heat: '2.48', btu: '7 000'  },
  { m: 'RC-TWL28HN', price: 1149, cold: '2.65', heat: '2.7',  btu: '9 000'  },
  { m: 'RC-TWL35HN', price: 1564, cold: '3.55', heat: '3.7',  btu: '12 000' },
  { m: 'RC-TWL55HN', price: 2619, cold: '5.3',  heat: '5.6',  btu: '18 000' },
  { m: 'RC-TWL70HN', price: 3312, cold: '7.1',  heat: '7.2',  btu: '24 000' },
].forEach(({ m, price, cold, heat, btu }) => {
  products.push(makeProduct({ name: `Сплит-система Royal Clima TRIUMPH LITE ${m} комплект`, slug: `royal-clima-triumph-lite-${m.toLowerCase()}`, price, description: D.TWL_O, cold, heat, btu, energyClass: 'A', wifi: 'Встроенный', inverter: false }));
});

// ─── NOBILE NEW (on/off) ─────────────────────────────────────────────────────
products.push(makeProduct({ name: 'Сплит-система Royal Clima NOBILE NEW RC-NB35HN комплект', slug: 'royal-clima-nobile-rc-nb35hn', price: 1565, description: D.NB, cold: '3.3', heat: '3.3', btu: '12 000', energyClass: 'A', wifi: 'Нет', inverter: false }));

// ─── GRANDE NEW (on/off) ─────────────────────────────────────────────────────
[
  { m: 'RC-GDB90HN',  price: 4182, cold: '8.5',  heat: '8.5',  btu: '30 000' },
  { m: 'RC-GDB105HN', price: 5233, cold: '10.3', heat: '11.3', btu: '36 000' },
].forEach(({ m, price, cold, heat, btu }) => {
  products.push(makeProduct({ name: `Сплит-система Royal Clima GRANDE NEW ${m} комплект`, slug: `royal-clima-grande-${m.toLowerCase()}`, price, description: D.GDB, cold, heat, btu, energyClass: 'A', wifi: 'Нет', inverter: false }));
});

// ─── Write to store.ts ────────────────────────────────────────────────────────
console.log(`Prepared ${products.length} Royal Clima products (IDs p2257109 to p${nextId - 1})`);

let content = fs.readFileSync(storePath, 'utf8');
const insertMarker = '];\n\nexport const INITIAL_ORDERS';
const insertIdx = content.indexOf(insertMarker);
if (insertIdx === -1) { console.error('Insertion marker not found!'); process.exit(1); }

const newEntries = products.map(l => '\n' + l).join('');
content = content.slice(0, insertIdx) + newEntries + '\n' + content.slice(insertIdx);
fs.writeFileSync(storePath, content, 'utf8');
console.log('Done! Royal Clima (Interpride) products added to store.ts');
