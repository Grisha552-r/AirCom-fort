const fs = require('fs');
const path = require('path');

const storePath = path.join(__dirname, 'src/lib/store.ts');
let nextId = 2256895;

const IMG_JADE = 'https://climate-montazh.by/wp-content/uploads/2022/07/klimat-montazh-kondi-57.webp';
const IMG_FLEXIS = 'https://climate-montazh.by/wp-content/uploads/2025/06/61617.800x0.jpg';
const IMG_CORAL = 'https://climate-montazh.by/wp-content/uploads/2023/04/8sviu5b8go4wacb8h2lmuz63zzz3otqk.jpg';
const IMG_QUANTUM = 'https://climate-montazh.by/wp-content/uploads/2025/08/asemiqocy9w33jw5j2o9dwhfrn72u0rs.jpg';
const IMG_SPIRIT = IMG_CORAL;
const IMG_TUNDRA = IMG_QUANTUM;
const IMG_STELLAR = IMG_JADE;
const IMG_FLEXIS_ONOFF = IMG_FLEXIS;

// BTU code → {btu, coldKw, heatKw}
const btuMap = {
  '07': { btu: '7 000',  coldKw: '2.1',  heatKw: '2.2'  },
  '09': { btu: '9 000',  coldKw: '2.6',  heatKw: '2.9'  },
  '12': { btu: '12 000', coldKw: '3.4',  heatKw: '3.5'  },
  '18': { btu: '18 000', coldKw: '5.0',  heatKw: '5.4'  },
  '24': { btu: '24 000', coldKw: '6.8',  heatKw: '7.1'  },
  '33': { btu: '33 000', coldKw: '9.7',  heatKw: '10.1' },
  // AS-size codes → BTU
  'AS20': { btu: '7 000',  coldKw: '2.05', heatKw: '2.1'  },
  'AS25': { btu: '9 000',  coldKw: '2.6',  heatKw: '2.9'  },
  'AS35': { btu: '12 000', coldKw: '3.5',  heatKw: '4.2'  },
  'AS50': { btu: '18 000', coldKw: '5.0',  heatKw: '5.2'  },
  'AS70': { btu: '24 000', coldKw: '6.8',  heatKw: '7.0'  },
  'AS100':{ btu: '36 000', coldKw: '9.0',  heatKw: '9.5'  },
};

function makeProduct({ name, slug, price, image, description, btuKey, energyClass, wifi, inverter, inStock, heating, refrigerant }) {
  const b = btuMap[btuKey];
  const id = `p${nextId++}`;
  const chars = {
    'Базовая мощность кондиционера (охлаждение),BTU': b.btu,
    'Мощность охлаждения, кВт': b.coldKw,
    'Мощность обогрева, кВт': b.heatKw,
    'Класс энергоэффективности': energyClass,
    'Хладагент': refrigerant || 'R32',
    'Тип управления': inverter ? 'Инвертор' : 'Не инверторное',
    'Wi-Fi управление': wifi ? 'Да' : 'Нет',
    'Работа в режиме обогрева при температуре до': heating || '-20°C',
  };
  const charsStr = JSON.stringify(chars).replace(/"/g, '\\"');
  const descEscaped = (description||'').replace(/"/g, '\\"').replace(/\n/g, ' ');
  const nameEscaped = name.replace(/"/g, '\\"');
  const inStockVal = inStock !== false ? 'true' : 'false';
  return `  { id: "${id}", name: "${nameEscaped}", slug: "${slug}", categoryId: "split-haier", price: ${price}, originalPrice: ${Math.round(price * 1.1)}, description: "${descEscaped}", images: ["${image}"], characteristics: JSON.parse("${charsStr}"), brand: "Haier", tags: ["haier", ${inverter ? '"inverter"' : '"on-off"'}], inStock: ${inStockVal}, rating: 4.5, reviews: 0 },`;
}

const products = [];

// ─── JADE 2024 ────────────────────────────────────────────────────────────────
const jadeDesc = 'Инверторный кондиционер серии JADE 2024. Оснащён системой IFD Фильтр (проф. очистка воздуха), датчиком Ecosensor, стерилизацией до 56°С. Wi-Fi управление через приложение evo, обогрев до -25°C, самоочистка испарителя Self clean, 4-х цветный дисплей с индикацией загрязнённости воздуха, 3D Airflow.';
[
  { as: 'AS25', model: 'AS25S2SJ2FA', price: 5470 },
  { as: 'AS35', model: 'AS35S2SJ2FA', price: 6180 },
  { as: 'AS50', model: 'AS50S2SJ2FA', price: 7030 },
].forEach(({as, model, price}) => {
  products.push(makeProduct({ name: `Кондиционер Haier JADE 2024 Inverter R32 ${model} комплект`, slug: `haier-jade-2024-${model.toLowerCase()}`, price, image: IMG_JADE, description: jadeDesc, btuKey: as, energyClass: as==='AS50'?'A++':'A+++', wifi: true, inverter: true, inStock: true, heating: '-25°C' }));
});

// ─── JADE SM 2025 ─────────────────────────────────────────────────────────────
const jadeSMDesc = 'Инверторный кондиционер серии JADE SM 2025. Технология Super Match. Wi-Fi, IFD Фильтр, Ecosensor, стерилизация 56°C Steri Clean, обогрев до -25°C, подогрев поддона, 3D Airflow, самоочистка Self Clean, скрытый дисплей с индикацией качества воздуха, поддержка YCJ-A002 и гостиничных карт.';
[
  { as: 'AS25', model: 'AS25S2SJ3FA', price: 5550 },
  { as: 'AS35', model: 'AS35S2SJ3FA', price: 6260 },
  { as: 'AS50', model: 'AS50S2SJ3FA', price: 7240 },
].forEach(({as, model, price}) => {
  products.push(makeProduct({ name: `Кондиционер Haier JADE SM 2025 Inverter R32 ${model} комплект`, slug: `haier-jade-sm-2025-${model.toLowerCase()}`, price, image: IMG_JADE, description: jadeSMDesc, btuKey: as, energyClass: as==='AS50'?'A++':'A+++', wifi: true, inverter: true, inStock: true, heating: '-25°C' }));
});

// ─── FLEXIS 2024 ──────────────────────────────────────────────────────────────
const flexisDesc = 'Инверторный кондиционер серии FLEXIS 2024. Технология Super Match, матовый пластик, Wi-Fi управление evo, UV-лампа LED, Nano-Aqua ионизатор, самоочистка Self Clean, стерилизация 56°C Steri Clean, обогрев до -20°C с подогревом поддона, Ag+ антибактериальное покрытие.';
[
  { as: 'AS25', model: 'AS25S2SF2FA', price: 3360 },
  { as: 'AS35', model: 'AS35S2SF2FA', price: 3830 },
  { as: 'AS50', model: 'AS50S2SF2FA', price: 5610 },
  { as: 'AS70', model: 'AS70S2SF2FA', price: 7110 },
].forEach(({as, model, price}) => {
  products.push(makeProduct({ name: `Кондиционер Haier FLEXIS 2024 Inverter R32 ${model} комплект`, slug: `haier-flexis-2024-${model.toLowerCase()}`, price, image: IMG_FLEXIS, description: flexisDesc, btuKey: as, energyClass: as==='AS25'?'A+++':(as==='AS35'?'A+++':'A++'), wifi: true, inverter: true, inStock: true, heating: '-20°C' }));
});

// ─── FLEXIS SM 2025 ───────────────────────────────────────────────────────────
const flexisSMDesc = 'Инверторный кондиционер серии FLEXIS SM 2025. Технология Super Match, матовый пластик, Wi-Fi управление evo, UV-лампа LED, Nano-Aqua ионизатор, самоочистка Self Clean, стерилизация 56°C Steri Clean, обогрев до -20°C, 3D Airflow, скрытый дисплей, Ag+ антибактериальное покрытие.';
[
  { as: 'AS25', model: 'AS25S2SF3FA', price: 3360 },
  { as: 'AS35', model: 'AS35S2SF3FA', price: 3830 },
  { as: 'AS50', model: 'AS50S2SF3FA', price: 5610 },
  { as: 'AS70', model: 'AS70S2SF3FA', price: 7110 },
].forEach(({as, model, price}) => {
  products.push(makeProduct({ name: `Кондиционер Haier FLEXIS SM 2025 Inverter R32 ${model} комплект`, slug: `haier-flexis-sm-2025-${model.toLowerCase()}`, price, image: IMG_FLEXIS, description: flexisSMDesc, btuKey: as, energyClass: as==='AS25'?'A+++':(as==='AS35'?'A+++':'A++'), wifi: true, inverter: true, inStock: true, heating: '-20°C' }));
});

// ─── Flexis On-Off 2024 ───────────────────────────────────────────────────────
const flexisOnOffDesc = 'Кондиционер On-Off серии Flexis On-Off 2024. Wi-Fi управление evo, UV-лампа LED, Nano-Aqua ионизатор, 3D Airflow, фильтр 3в1, скрытый дисплей, 24-часовой таймер, пульт HJ2 с поддержкой IFEEL.';
[
  { hsu: '07', model: 'HSU-07HFF103/R3', price: 1700 },
  { hsu: '09', model: 'HSU-09HFF103/R3', price: 1810 },
  { hsu: '12', model: 'HSU-12HFF103/R3', price: 2130 },
].forEach(({hsu, model, price}) => {
  products.push(makeProduct({ name: `Кондиционер Haier Flexis On-Off 2024 ${model} комплект`, slug: `haier-flexis-onoff-2024-${model.replace('/','').toLowerCase()}`, price, image: IMG_FLEXIS_ONOFF, description: flexisOnOffDesc, btuKey: hsu, energyClass: 'A', wifi: true, inverter: false, inStock: true, heating: '-5°C' }));
});

// ─── Flexis On-Off 2025 ───────────────────────────────────────────────────────
const flexisOnOff25Desc = 'Кондиционер On-Off серии Flexis On-Off 2025. Wi-Fi управление evo, UV-лампа LED, Nano-Aqua ионизатор, 3D Airflow, фильтр 3в1, скрытый дисплей, 24-часовой таймер, пульт HJ2 с поддержкой IFEEL, поддержка YCJ-A002.';
[
  { hsu: '07', model: 'HSU-07HFF203/R3', price: 1700 },
  { hsu: '09', model: 'HSU-09HFF203/R3', price: 1810 },
  { hsu: '12', model: 'HSU-12HFF203/R3', price: 2130 },
  { hsu: '18', model: 'HSU-18HFF103/R3', price: 3100 },
  { hsu: '24', model: 'HSU-24HFF103/R3', price: 4680 },
].forEach(({hsu, model, price}) => {
  products.push(makeProduct({ name: `Кондиционер Haier Flexis On-Off 2025 ${model} комплект`, slug: `haier-flexis-onoff-2025-${model.replace('/','').toLowerCase()}`, price, image: IMG_FLEXIS_ONOFF, description: flexisOnOff25Desc, btuKey: hsu, energyClass: 'A', wifi: true, inverter: false, inStock: true, heating: '-5°C' }));
});

// ─── Stellar HP ───────────────────────────────────────────────────────────────
const stellarDesc = 'Инверторный кондиционер серии Stellar HP. Высокоэффективный обогрев до -20°C. Wi-Fi управление через приложение evo, пульт HJ2 с поддержкой IFEEL, Ag+ антибактериальное покрытие теплообменника, 24-часовой таймер, авторестарт, самодиагностика.';
[
  { as: 'AS20', model: 'AS20SHP1HRA-W', price: 2250, color: 'белый' },
  { as: 'AS20', model: 'AS20SHP1HRA-S', price: 2450, color: 'серебристый' },
  { as: 'AS25', model: 'AS25SHP1HRA-W', price: 2360, color: 'белый' },
  { as: 'AS25', model: 'AS25SHP1HRA-S', price: 2570, color: 'серебристый' },
  { as: 'AS35', model: 'AS35SHP1HRA-W', price: 2680, color: 'белый' },
  { as: 'AS35', model: 'AS35SHP1HRA-S', price: 2860, color: 'серебристый' },
  { as: 'AS50', model: 'AS50SHP1HRA-W', price: 3830, color: 'белый' },
  { as: 'AS50', model: 'AS50SHP1HRA-S', price: 4030, color: 'серебристый' },
  { as: 'AS70', model: 'AS70SHP1HRA-W', price: 4840, color: 'белый' },
  { as: 'AS70', model: 'AS70SHP1HRA-S', price: 5050, color: 'серебристый' },
].forEach(({as, model, price, color}) => {
  products.push(makeProduct({ name: `Кондиционер Haier Stellar HP Inverter R32 ${model} (${color}) комплект`, slug: `haier-stellar-hp-${model.toLowerCase()}`, price, image: IMG_STELLAR, description: stellarDesc, btuKey: as, energyClass: 'A++', wifi: true, inverter: true, inStock: true, heating: '-20°C' }));
});

// ─── CORAL DC ─────────────────────────────────────────────────────────────────
const coralDCDesc = 'Инверторный кондиционер серии CORAL DC. Wi-Fi управление evo, самоочистка испарителя, антибактериальное покрытие Ag+, спиральное распределение воздуха до 12 м, 3D Airflow, 24-часовой таймер. Модели AS25, AS35, AS50 сняты с производства.';
[
  { as: 'AS20',  model: 'AS20HPL2HRA',   price: 1650, inStock: true  },
  { as: 'AS25',  model: 'AS25HPL2HRA',   price: 1770, inStock: false },
  { as: 'AS35',  model: 'AS35HPL2HRA',   price: 2030, inStock: false },
  { as: 'AS50',  model: 'AS50HPL2HRA',   price: 3130, inStock: false },
  { as: 'AS70',  model: 'AS70HPL2HRA',   price: 4060, inStock: true  },
  { as: 'AS100', model: 'AS100HPL1HRA',  price: 7320, inStock: true  },
].forEach(({as, model, price, inStock}) => {
  products.push(makeProduct({ name: `Кондиционер Haier CORAL DC Inverter R32 ${model} комплект`, slug: `haier-coral-dc-${model.toLowerCase()}`, price, image: IMG_CORAL, description: coralDCDesc, btuKey: as, energyClass: 'A', wifi: true, inverter: true, inStock, heating: '-15°C' }));
});

// ─── CORAL On-Off ─────────────────────────────────────────────────────────────
const coralOnOffDesc = 'Кондиционер On-Off серии CORAL. Снят с производства, реализуются остатки. Бюджетная серия с базовыми функциями. Фреон R32.';
[
  { hsu: '07', model: 'HSU-07HPL303/R3', price: 1100 },
  { hsu: '09', model: 'HSU-09HPL303/R3', price: 1220 },
  { hsu: '12', model: 'HSU-12HPL303/R3', price: 1540 },
  { hsu: '18', model: 'HSU-18HPL303/R3', price: 2520 },
  { hsu: '24', model: 'HSU-24HPL303/R3', price: 3280 },
  { hsu: '33', model: 'HSU-33HPL03/R3',  price: 5290 },
].forEach(({hsu, model, price}) => {
  products.push(makeProduct({ name: `Кондиционер Haier CORAL On-Off ${model} комплект`, slug: `haier-coral-onoff-${model.replace('/','').toLowerCase()}`, price, image: IMG_CORAL, description: coralOnOffDesc, btuKey: hsu, energyClass: 'A', wifi: false, inverter: false, inStock: false, heating: '-5°C' }));
});

// ─── Spirit DC ────────────────────────────────────────────────────────────────
const spiritDCDesc = 'Инверторный кондиционер серии Spirit DC. Компактный дизайн, Wi-Fi управление через приложение evo, антибактериальная защита, спиральное распределение воздуха, 24-часовой таймер, авторестарт, самодиагностика. Фреон R32.';
[
  { as: 'AS20', model: 'AS20HSL1HRA', price: 1650 },
  { as: 'AS25', model: 'AS25HSL1HRA', price: 1770 },
  { as: 'AS35', model: 'AS35HSL1HRA', price: 2030 },
  { as: 'AS50', model: 'AS50HSL1HRA', price: 3130 },
  { as: 'AS70', model: 'AS70HSL1HRA', price: 4060 },
].forEach(({as, model, price}) => {
  products.push(makeProduct({ name: `Кондиционер Haier Spirit DC Inverter R32 ${model} комплект`, slug: `haier-spirit-dc-${model.toLowerCase()}`, price, image: IMG_SPIRIT, description: spiritDCDesc, btuKey: as, energyClass: 'A', wifi: true, inverter: true, inStock: true, heating: '-15°C' }));
});

// ─── Spirit On-Off ────────────────────────────────────────────────────────────
const spiritOnOffDesc = 'Кондиционер On-Off серии Spirit. Wi-Fi управление evo, UV-лампа LED, Nano-Aqua ионизатор, 3D Airflow, 24-часовой таймер, пульт HJ2 с поддержкой IFEEL. Фреон R32.';
[
  { hsu: '07', model: 'HSU-07HSL103/R3', price: 1100, inStock: true  },
  { hsu: '09', model: 'HSU-09HSL103/R3', price: 1220, inStock: true  },
  { hsu: '12', model: 'HSU-12HSL103/R3', price: 1540, inStock: true  },
  { hsu: '18', model: 'HSU-18HSL103/R3', price: 2520, inStock: true  },
  { hsu: '24', model: 'HSU-24HSL103/R3', price: 3280, inStock: true  },
].forEach(({hsu, model, price, inStock}) => {
  products.push(makeProduct({ name: `Кондиционер Haier Spirit On-Off ${model} комплект`, slug: `haier-spirit-onoff-${model.replace('/','').toLowerCase()}`, price, image: IMG_SPIRIT, description: spiritOnOffDesc, btuKey: hsu, energyClass: 'A', wifi: true, inverter: false, inStock, heating: '-5°C' }));
});

// ─── Tundra AS (DC) ───────────────────────────────────────────────────────────
const tundraDesc = 'Кондиционер серии Tundra. Снят с производства, реализуются остатки. Классическая серия для жилых и офисных помещений. Фреон R32.';
[
  { as: 'AS25', model: 'AS09TT5HRA',  price: 1650 },
  { as: 'AS35', model: 'AS12TT5HRA',  price: 1900 },
  { as: 'AS50', model: 'AS18TT5HRA',  price: 2900 },
  { as: 'AS70', model: 'AS24TT5HRA',  price: 3780 },
].forEach(({as, model, price}) => {
  products.push(makeProduct({ name: `Кондиционер Haier Tundra Inverter R32 ${model} комплект`, slug: `haier-tundra-${model.toLowerCase()}`, price, image: IMG_TUNDRA, description: tundraDesc, btuKey: as, energyClass: 'A', wifi: false, inverter: true, inStock: false, heating: '-15°C' }));
});

// ─── Tundra On-Off ─────────────────────────────────────────────────────────────
const tundraOnOffDesc = 'Кондиционер On-Off серии Tundra. Бюджетная серия для жилых и офисных помещений. 24-часовой таймер, авторестарт, самодиагностика. Фреон R32.';
[
  { hsu: '07', model: 'HSU-07HTT03/R3',  price: 1020 },
  { hsu: '09', model: 'HSU-09HTT103/R3', price: 1120 },
  { hsu: '12', model: 'HSU-12HTT03/R3',  price: 1480 },
  { hsu: '18', model: 'HSU-18HTT03/R3',  price: 2320 },
  { hsu: '24', model: 'HSU-24HTT103/R3', price: 3220 },
].forEach(({hsu, model, price}) => {
  products.push(makeProduct({ name: `Кондиционер Haier Tundra On-Off ${model} комплект`, slug: `haier-tundra-onoff-${model.replace('/','').toLowerCase()}`, price, image: IMG_TUNDRA, description: tundraOnOffDesc, btuKey: hsu, energyClass: 'D', wifi: false, inverter: false, inStock: true, heating: '-5°C' }));
});

// ─── QUANTUM DC ───────────────────────────────────────────────────────────────
const quantumDesc = 'Инверторный кондиционер серии QUANTUM DC. Компактный дизайн (700 мм в ширину) для установки над дверными проёмами. Трёхуровневая фильтрация (противоаллергенная, противовирусная, антибактериальная). Wi-Fi управление через приложение EVO, голосовые ассистенты Алиса и Салют.';
[
  { as: 'AS20', model: 'AS20HQJ1HRA-W', price: 1540, color: 'белый'  },
  { as: 'AS20', model: 'AS20HQJ1HRA-B', price: 1600, color: 'чёрный' },
  { as: 'AS25', model: 'AS25HQJ1HRA-W', price: 1680, color: 'белый'  },
  { as: 'AS25', model: 'AS25HQJ1HRA-B', price: 1730, color: 'чёрный' },
  { as: 'AS35', model: 'AS35HQJ1HRA-W', price: 1900, color: 'белый'  },
  { as: 'AS35', model: 'AS35HQJ1HRA-B', price: 1940, color: 'чёрный' },
  { as: 'AS50', model: 'AS50HQJ1HRA-W', price: 2940, color: 'белый'  },
  { as: 'AS50', model: 'AS50HQJ1HRA-B', price: 3000, color: 'чёрный' },
  { as: 'AS70', model: 'AS70HQJ1HRA-W', price: 3710, color: 'белый'  },
  { as: 'AS70', model: 'AS70HQJ1HRA-B', price: 3800, color: 'чёрный' },
].forEach(({as, model, price, color}) => {
  products.push(makeProduct({ name: `Кондиционер Haier QUANTUM DC Inverter R32 ${model} (${color}) комплект`, slug: `haier-quantum-dc-${model.toLowerCase()}`, price, image: IMG_QUANTUM, description: quantumDesc, btuKey: as, energyClass: 'A', wifi: true, inverter: true, inStock: true, heating: '-15°C' }));
});

// ─── QUANTUM On-Off ───────────────────────────────────────────────────────────
const quantumOnOffDesc = 'Кондиционер On-Off серии QUANTUM. Компактный корпус (700 мм), трёхуровневая фильтрация (противоаллергенная, противовирусная, антибактериальная). Wi-Fi управление через приложение EVO. Фреон R32.';
[
  { hsu: '07', model: 'HSU-07HQJ103/R3-W', price: 1020, color: 'белый'  },
  { hsu: '07', model: 'HSU-07HQJ103/R3-B', price: 1090, color: 'чёрный' },
  { hsu: '09', model: 'HSU-09HQJ103/R3-W', price: 1120, color: 'белый'  },
  { hsu: '09', model: 'HSU-09HQJ103/R3-B', price: 1190, color: 'чёрный' },
  { hsu: '12', model: 'HSU-12HQJ103/R3-W', price: 1480, color: 'белый'  },
  { hsu: '12', model: 'HSU-12HQJ103/R3-B', price: 1550, color: 'чёрный' },
  { hsu: '18', model: 'HSU-18HQJ103/R3-W', price: 2320, color: 'белый'  },
  { hsu: '18', model: 'HSU-18HQJ103/R3-B', price: 2420, color: 'чёрный' },
  { hsu: '24', model: 'HSU-24HQJ103/R3-W', price: 3220, color: 'белый'  },
  { hsu: '24', model: 'HSU-24HQJ103/R3-B', price: 3280, color: 'чёрный' },
].forEach(({hsu, model, price, color}) => {
  products.push(makeProduct({ name: `Кондиционер Haier QUANTUM On-Off ${model} (${color}) комплект`, slug: `haier-quantum-onoff-${model.replace('/','').toLowerCase()}`, price, image: IMG_QUANTUM, description: quantumOnOffDesc, btuKey: hsu, energyClass: 'D', wifi: true, inverter: false, inStock: true, heating: '-5°C' }));
});

// ─── Write to store.ts ────────────────────────────────────────────────────────
console.log(`Prepared ${products.length} Haier products (IDs p2256895 to p${nextId - 1})`);

let content = fs.readFileSync(storePath, 'utf8');
const insertMarker = '];\n\nexport const INITIAL_ORDERS';
const insertIdx = content.indexOf(insertMarker);
if (insertIdx === -1) { console.error('Insertion marker not found!'); process.exit(1); }

const newEntries = products.map(l => '\n' + l).join('');
content = content.slice(0, insertIdx) + newEntries + '\n' + content.slice(insertIdx);
fs.writeFileSync(storePath, content, 'utf8');
console.log('Done! Haier products added to store.ts');
