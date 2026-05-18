const fs = require('fs');
const path = require('path');

const storePath = path.join(__dirname, 'src/lib/store.ts');
let content = fs.readFileSync(storePath, 'utf8');

const insertMarker = '];\n\nexport const INITIAL_ORDERS';
const insertIdx = content.indexOf(insertMarker);
if (insertIdx === -1) { console.error('Marker not found!'); process.exit(1); }

const desc = {
  airy: 'Основные преимущества сплит-системы GREE AIRY INVERTER: работа на обогрев до -30°С; класс энергоэффективности A+++; встроенный Wi-Fi модуль; теплый старт; покрытие теплообменника Blue Fin; система самодиагностики и очистки; автоматическое управление жалюзи; УФ стерилизация; генератор Cold Plasma; семискоростной вентилятор; интеллектуальная разморозка. Функции: ночной режим, авторестарт, таймер, турбо режим, запуск при низком напряжении.',
  bora: 'Кондиционер GREE BORA: энергосберегающий режим снижает потребление без ущерба комфорту. Автоматическая самоочистка и самодиагностика поддерживают чистоту внутреннего блока. Стильный компактный дизайн. Функции: беспроводной пульт ДУ, интеллектуальная разморозка, автоматический режим, функция I Feel, ночной режим, система самоочистки, авторестарт, таймер, турбо режим.',
  boraInv: 'Кондиционер GREE BORA Inverter: работа на обогрев до -15°С, встроенный Wi-Fi для управления со смартфона, авторестарт и самоочистка, турбо режим, функция Cold Plasma для здорового воздуха. Многоскоростной вентилятор, функция I Feel, компактный дизайн, мягкий запуск, интеллектуальная разморозка. Хладагент R32, высокие показатели SCOP и SEER.',
  pular: 'Кондиционер GREE PULAR: надёжный бытовой кондиционер с компактным дизайном. Беспроводной пульт ДУ, интеллектуальная разморозка, автоматический режим, функция I Feel, ночной режим, система самоочистки, авторестарт, таймер.',
  pularInv: 'Сплит-система GREE Pular Inverter: матовый дизайн Soft Touch, семискоростной вентилятор (уровень шума до 21 дБ в ночном режиме), технология очистки воздуха Cold Plasma. Управление вертикальным и горизонтальным потоком создаёт 3D-воздухораспределение. Покрытие теплообменников Anti-Mildew предотвращает плесень. Поддержание температуры +8°С. Wi-Fi управление. Хладагент R32, класс A++. Функция I Feel, моющиеся фильтры.',
  pularArc: 'Сплит-система GREE Pular Inverter Arctic: DC-инверторный преобразователь для плавного управления мощностью компрессора. Хладагент R32, класс энергоэффективности A++. Функция I Feel. Автоматическое покачивание вертикальных и горизонтальных жалюзи. Съёмная моющаяся панель. Механический фильтр задерживает пыль и шерсть животных.',
  lyra: 'Кондиционер GREE LYRA Inverter — стильное украшение современного интерьера. Хладагент R32, класс A++/A+. Диапазон рабочих температур от -25°С до +50°С. Автоматическое покачивание горизонтальных и вертикальных жалюзи. Управление по Wi-Fi. Возможность подключения проводного и центрального пульта управления. Ионизатор Cold Plasma.',
  soyal: 'Сплит-система GREE SOYAL Inverter — премиальная серия с уникальным дизайном. Управление по Wi-Fi. Интегрированный датчик присутствия для 4 режимов воздухораспределения: прямой обдув, отклоняющийся поток, опоясывающий поток, режим энергосбережения. Хладагент R32. Поставка под заказ.',
  gtech: 'Кондиционер GREE G-TECH DC Inverter — высокотехнологичная серия с передовыми инверторными технологиями. Класс энергоэффективности A++. Хладагент R32. Работа при низких температурах. Wi-Fi управление. Функция I Feel, система самоочистки, интеллектуальная разморозка. Поставка под заказ.',
  lomo: 'Кондиционер GREE LOMO Inverter Arctic: хладагент R32 (на 8% эффективнее R410A). Класс A++. Широкий диапазон рабочих температур: охлаждение от -15°С до +54°С, обогрев до -22°С. Управление через Wi-Fi. Авторестарт, турбо режим, самодиагностика. Функция I Feel, фильтр Cold Plasma.',
};

const imgs = {
  airyW:   ['https://climate-montazh.by/wp-content/uploads/2024/03/gree-airy-white-montazh-v-minske.png','https://climate-montazh.by/wp-content/uploads/2024/03/gree-airy-white-v-minske.png','https://climate-montazh.by/wp-content/uploads/2024/03/gree-airy-white-kupit.png'],
  airyB:   ['https://climate-montazh.by/wp-content/uploads/2024/03/gwh12avcxd.png','https://climate-montazh.by/wp-content/uploads/2024/03/gree-airy-belyy.png'],
  airyCH:  ['https://climate-montazh.by/wp-content/uploads/2024/03/gree-airy-white-montazh-v-minske.png','https://climate-montazh.by/wp-content/uploads/2024/03/gree-airy-white-kupit.png'],
  bora:    ['https://climate-montazh.by/wp-content/uploads/2023/02/151260.970.webp','https://climate-montazh.by/wp-content/uploads/2023/02/151261.970.webp','https://climate-montazh.by/wp-content/uploads/2023/02/151263.970.webp','https://climate-montazh.by/wp-content/uploads/2023/02/151262.970.webp'],
  boraInv: ['https://climate-montazh.by/wp-content/uploads/2022/07/151260.970.webp','https://climate-montazh.by/wp-content/uploads/2022/07/151261.970.webp','https://climate-montazh.by/wp-content/uploads/2022/07/klimat-montazh-kondi-44.webp'],
  pularInv:['https://climate-montazh.by/wp-content/uploads/2023/04/24agd-k6dna4a201-1.jpeg','https://climate-montazh.by/wp-content/uploads/2023/04/44873-800x480-1.jpeg','https://climate-montazh.by/wp-content/uploads/2023/04/24agd-k6dna4a202-1.jpg'],
  pularArcW:['https://climate-montazh.by/wp-content/uploads/2025/02/4b0d3e17-e85f-11ef-aa4c-000c2958ad06_4b0d3e19-e85f-11ef-aa4c-000c2958ad06.jpeg'],
  pularArcS:['https://climate-montazh.by/wp-content/uploads/2025/02/6694623b-bdf7-11ef-aa1e-000c2958ad06_6694623d-bdf7-11ef-aa1e-000c2958ad06-600x317.jpeg'],
  lyraW:   ['https://climate-montazh.by/wp-content/uploads/2025/02/gree_gwh09acc_k6dna1fwhite-600x263.png','https://climate-montazh.by/wp-content/uploads/2025/02/gree_gwh09acc_k6dna1fwhite1-600x480.png','https://climate-montazh.by/wp-content/uploads/2025/02/res_f15024e26bac3a4f8f53fc38808bc371.jpg'],
  lyraB:   ['https://climate-montazh.by/wp-content/uploads/2025/02/70247111-7d1f-11ed-aa24-005056872b66_2365bb61-7d21-11ed-aa24-005056872b66.jpeg','https://climate-montazh.by/wp-content/uploads/2025/02/gree_gwh09acc_k6dna1fwhite1.png'],
  soyal:   ['https://climate-montazh.by/wp-content/uploads/2025/02/0f32cafd-4323-11ee-ab21-005056872b66_0f32cb01-4323-11ee-ab21-005056872b66-500x500-1.jpeg','https://climate-montazh.by/wp-content/uploads/2025/02/0f32cafd-4323-11ee-ab21-005056872b66_0f32cb00-4323-11ee-ab21-005056872b66-500x500-1.jpeg'],
  lomo:    ['https://climate-montazh.by/wp-content/uploads/2022/07/klimat-montazh-kondi-53.webp','https://climate-montazh.by/wp-content/uploads/2022/07/klimat-montazh-kondi-54.webp'],
};

const btuMap = {
  '07': { btu: '7 000',  kw: '2.1',  hkw: '2.3'  },
  '09': { btu: '9 000',  kw: '2.7',  hkw: '2.9'  },
  '12': { btu: '12 000', kw: '3.5',  hkw: '3.8'  },
  '18': { btu: '18 000', kw: '5.3',  hkw: '5.7'  },
  '24': { btu: '24 000', kw: '7.1',  hkw: '7.5'  },
  '28': { btu: '28 000', kw: '8.2',  hkw: '8.5'  },
  '36': { btu: '36 000', kw: '10.5', hkw: '11.0' },
};

let nextId = 2256830;

function makeGREE({ name, slug, price, images, description, btuCode, modelCode, seriesName, energyClass, wifi, inverter, inStock, rating, reviews }) {
  const btu = btuMap[btuCode];
  const chars = {
    'Базовая мощность кондиционера (охлаждение),BTU': btu.btu,
    'Вид установки (крепления)': 'Настенная',
    'Вид управления': wifi ? 'Дистанционное по Wi-Fi' : 'Дистанционное беспроводное',
    'Гарантийный срок': '3 года',
    'Инверторная технология': inverter ? 'Да' : 'Нет',
    'Класс энергоэффективности': energyClass,
    'Макс. производительность охлаждения': btu.kw + ' кВт',
    'Макс. производительность обогрева': btu.hkw + ' кВт',
    'Серия': seriesName,
    'Страна производства': 'КНР',
    'Хладагент': 'R32',
    'Wi-Fi модуль': wifi ? 'Встроенный' : 'Нет',
    'Модель': modelCode,
  };
  const charsJson = JSON.stringify(chars);
  const imgsJson = JSON.stringify(images);
  const d = description.replace(/"/g, '\\"');
  const id = `p${nextId++}`;
  return `  { id: "${id}", name: "${name}", slug: "${slug}", categoryId: "split-gree", price: ${price}, rating: ${rating}, reviewCount: ${reviews}, images: ${imgsJson}, description: "${d}", characteristics: ${charsJson}, inStock: ${inStock !== false}, isNew: false, isFeatured: false, brand: "GREE", tags: ["gree", "inverter"] },`;
}

function slug(s) { return s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, ''); }

const lines = [];

// AIRY WHITE
const airyModels = [
  { c:'09', m:'GWH09AVCXB-K6DNA1B', pw:3592, pb:3715, r:4.6, rv:18 },
  { c:'12', m:'GWH12AVCXD-K6DNA1A', pw:3769, pb:3952, r:4.7, rv:24 },
  { c:'18', m:'GWH18AVDXE-K6DNA1A', pw:5525, pb:5611, r:4.5, rv:12 },
  { c:'24', m:'GWH24AVEXF-K6DNA1A', pw:6580, pb:6779, r:4.6, rv:8  },
];
for (const p of airyModels) {
  lines.push(makeGREE({ name:`Кондиционер GREE AIRY Inverter R32 GWH-${p.c}BTU (белый) комплект`, slug:`gree-airy-${slug(p.m)}-white`, price:p.pw, images:imgs.airyW, description:desc.airy, btuCode:p.c, modelCode:p.m, seriesName:'AIRY Inverter R32', energyClass:'A+++', wifi:true, inverter:true, rating:p.r, reviews:p.rv }));
  lines.push(makeGREE({ name:`Кондиционер GREE AIRY Inverter R32 GWH-${p.c}BTU (чёрный) комплект`, slug:`gree-airy-${slug(p.m)}-black`, price:p.pb, images:imgs.airyB, description:desc.airy, btuCode:p.c, modelCode:p.m, seriesName:'AIRY Inverter R32', energyClass:'A+++', wifi:true, inverter:true, rating:p.r, reviews:Math.max(5,p.rv-4) }));
  lines.push(makeGREE({ name:`Кондиционер GREE AIRY Inverter R32 GWH-${p.c}BTU (шампань) комплект`, slug:`gree-airy-${slug(p.m)}-champagne`, price:p.pb, images:imgs.airyCH, description:desc.airy, btuCode:p.c, modelCode:p.m, seriesName:'AIRY Inverter R32', energyClass:'A+++', wifi:true, inverter:true, rating:p.r, reviews:Math.max(5,p.rv-6) }));
}

// BORA
const boraModels = [
  { c:'07', m:'GWH07AAAXA-K3NNA2A', p:1373, r:4.3, rv:15 },
  { c:'09', m:'GWH09AAAXA-K3NNA2A', p:1497, r:4.4, rv:22 },
  { c:'12', m:'GWH12AABXB-K3NNA2B', p:2105, r:4.5, rv:31 },
  { c:'18', m:'GWH18AACXD-K3NNA2B', p:3796, r:4.3, rv:18 },
  { c:'24', m:'GWH24AADXE-K3NNA2A', p:4701, r:4.4, rv:11 },
  { c:'28', m:'GWH28AAEXF-K3NNA2A', p:5918, r:4.2, rv:6  },
  { c:'36', m:'GWH36QE-K3NNB4A',    p:7102, r:4.3, rv:4  },
];
for (const p of boraModels) {
  lines.push(makeGREE({ name:`Кондиционер GREE BORA GWH-${p.c}BTU комплект`, slug:`gree-bora-${slug(p.m)}`, price:p.p, images:imgs.bora, description:desc.bora, btuCode:p.c, modelCode:p.m, seriesName:'BORA', energyClass:'A', wifi:false, inverter:false, rating:p.r, reviews:p.rv }));
}

// PULAR
const pularModels = [
  { c:'07', m:'GWH07AGAXA-K3NNA1A', p:1389, r:4.3, rv:9  },
  { c:'09', m:'GWH09AGAXA-K3NNA1A', p:1535, r:4.4, rv:14 },
  { c:'12', m:'GWH12AGBXB-K3NNA1B', p:2089, r:4.5, rv:19 },
  { c:'18', m:'GWH18AGCXD-K3NNA1B', p:3796, r:4.3, rv:10 },
  { c:'24', m:'GWH24AADXE-K3NNA1A', p:4701, r:4.4, rv:7  },
];
for (const p of pularModels) {
  lines.push(makeGREE({ name:`Кондиционер GREE PULAR GWH-${p.c}BTU комплект`, slug:`gree-pular-${slug(p.m)}`, price:p.p, images:imgs.bora, description:desc.pular, btuCode:p.c, modelCode:p.m, seriesName:'PULAR', energyClass:'A', wifi:false, inverter:false, rating:p.r, reviews:p.rv }));
}

// BORA INVERTER
const boraInvModels = [
  { c:'07', m:'GWH07AAAXA-K6DNA2C', p:2132, r:4.5, rv:12 },
  { c:'09', m:'GWH09AAAXA-K6DNA2C', p:2240, r:4.6, rv:19 },
  { c:'12', m:'GWH12AABXB-K6DNA2C', p:2488, r:4.7, rv:26 },
  { c:'18', m:'GWH18AAD-K6DNA2E',   p:4195, r:4.5, rv:14 },
  { c:'24', m:'GWH24AADXE-K6DNA2A', p:5783, r:4.4, rv:8  },
];
for (const p of boraInvModels) {
  lines.push(makeGREE({ name:`Кондиционер GREE BORA Inverter R32 GWH-${p.c}BTU комплект`, slug:`gree-bora-inverter-${slug(p.m)}`, price:p.p, images:imgs.boraInv, description:desc.boraInv, btuCode:p.c, modelCode:p.m, seriesName:'BORA Inverter R32', energyClass:'A++', wifi:true, inverter:true, rating:p.r, reviews:p.rv }));
}

// PULAR INVERTER
const pularInvModels = [
  { c:'09', m:'GWH09AGAXA-K6DNA4C', p:2208, r:4.5, rv:16 },
  { c:'12', m:'GWH12AGBXB-K6DNA4C', p:2488, r:4.6, rv:22 },
  { c:'18', m:'GWH18AGD-K6DNA4D',   p:4195, r:4.4, rv:12 },
  { c:'24', m:'GWH24AGDXE-K6DNA4C', p:5783, r:4.5, rv:7  },
];
for (const p of pularInvModels) {
  lines.push(makeGREE({ name:`Кондиционер GREE PULAR Inverter R32 GWH-${p.c}BTU комплект`, slug:`gree-pular-inverter-${slug(p.m)}`, price:p.p, images:imgs.pularInv, description:desc.pularInv, btuCode:p.c, modelCode:p.m, seriesName:'PULAR Inverter R32', energyClass:'A++', wifi:true, inverter:true, rating:p.r, reviews:p.rv }));
}

// PULAR ARCTIC
const pularArcModels = [
  { c:'09', m:'GWH09AGCXB-K6DNA4F', pw:2897, ps:3075, pbk:3015, r:4.6, rv:14 },
  { c:'12', m:'GWH12AGC-K6DNA4F',   pw:3021, ps:3198, pbk:3145, r:4.7, rv:18 },
  { c:'18', m:'GWH18AGDXD-K6DNA4E', pw:4706, ps:4954, pbk:4857, r:4.5, rv:10 },
  { c:'24', m:'GWH24AGEXF-K6DNA4A', pw:6117, ps:6440, pbk:6316, r:4.6, rv:6  },
];
for (const p of pularArcModels) {
  lines.push(makeGREE({ name:`Кондиционер GREE PULAR Inverter Arctic GWH-${p.c}BTU (белый) комплект`,  slug:`gree-pular-arctic-${slug(p.m)}-white`,  price:p.pw,  images:imgs.pularArcW, description:desc.pularArc, btuCode:p.c, modelCode:p.m, seriesName:'PULAR Inverter Arctic', energyClass:'A++', wifi:true, inverter:true, rating:p.r, reviews:p.rv }));
  lines.push(makeGREE({ name:`Кондиционер GREE PULAR Inverter Arctic GWH-${p.c}BTU (серебро) комплект`, slug:`gree-pular-arctic-${slug(p.m)}-silver`, price:p.ps,  images:imgs.pularArcS, description:desc.pularArc, btuCode:p.c, modelCode:p.m, seriesName:'PULAR Inverter Arctic', energyClass:'A++', wifi:true, inverter:true, rating:p.r, reviews:Math.max(5,p.rv-3) }));
  lines.push(makeGREE({ name:`Кондиционер GREE PULAR Inverter Arctic GWH-${p.c}BTU (чёрный) комплект`, slug:`gree-pular-arctic-${slug(p.m)}-black`,  price:p.pbk, images:imgs.pularArcS, description:desc.pularArc, btuCode:p.c, modelCode:p.m, seriesName:'PULAR Inverter Arctic', energyClass:'A++', wifi:true, inverter:true, rating:p.r, reviews:Math.max(5,p.rv-5) }));
}

// LYRA
const lyraModels = [
  { c:'09', m:'GWH09ACC-K6DNA1F', pw:3091, pch:3193, pbk:3161, r:4.7, rv:22 },
  { c:'12', m:'GWH12ACC-K6DNA1F', pw:3220, pch:3295, pbk:3274, r:4.8, rv:28 },
  { c:'18', m:'GWH18ACD-K6DNA1I', pw:4986, pch:5218, pbk:5218, r:4.6, rv:15 },
  { c:'24', m:'GWH24ACE-K6DNA1I', pw:6472, pch:6521, pbk:6521, r:4.7, rv:9  },
];
for (const p of lyraModels) {
  lines.push(makeGREE({ name:`Кондиционер GREE LYRA Inverter R32 GWH-${p.c}BTU (белый) комплект`,  slug:`gree-lyra-${slug(p.m)}-white`,    price:p.pw,  images:imgs.lyraW, description:desc.lyra, btuCode:p.c, modelCode:p.m, seriesName:'LYRA Inverter R32', energyClass:'A++', wifi:true, inverter:true, rating:p.r, reviews:p.rv }));
  lines.push(makeGREE({ name:`Кондиционер GREE LYRA Inverter R32 GWH-${p.c}BTU (шампань) комплект`, slug:`gree-lyra-${slug(p.m)}-champagne`, price:p.pch, images:imgs.lyraW, description:desc.lyra, btuCode:p.c, modelCode:p.m, seriesName:'LYRA Inverter R32', energyClass:'A++', wifi:true, inverter:true, rating:p.r, reviews:Math.max(5,p.rv-5) }));
  lines.push(makeGREE({ name:`Кондиционер GREE LYRA Inverter R32 GWH-${p.c}BTU (чёрный) комплект`,  slug:`gree-lyra-${slug(p.m)}-black`,    price:p.pbk, images:imgs.lyraB, description:desc.lyra, btuCode:p.c, modelCode:p.m, seriesName:'LYRA Inverter R32', energyClass:'A++', wifi:true, inverter:true, rating:p.r, reviews:Math.max(5,p.rv-7) }));
}

// G-TECH (order-only)
const gtechModels = [
  { c:'09', m:'GWH09AECXB-K6DNA1A', p:4060, r:4.8, rv:4 },
  { c:'12', m:'GWH12AECXD-K6DNA1A', p:4243, r:4.8, rv:3 },
];
for (const p of gtechModels) {
  lines.push(makeGREE({ name:`Кондиционер GREE G-TECH DC Inverter GWH-${p.c}BTU комплект`, slug:`gree-gtech-inverter-${slug(p.m)}`, price:p.p, images:imgs.lyraW, description:desc.gtech, btuCode:p.c, modelCode:p.m, seriesName:'G-TECH Inverter R32', energyClass:'A++', wifi:true, inverter:true, inStock:false, rating:p.r, reviews:p.rv }));
}

// SOYAL (order-only)
const soyalModels = [
  { c:'09', m:'GWH09AKCXD-K6DNA1A', p:5234, r:4.8, rv:7 },
  { c:'12', m:'GWH12AKCXD-K6DNA1A', p:5315, r:4.9, rv:5 },
  { c:'18', m:'GWH18AAEXF-K3NNA2A', p:6402, r:4.7, rv:3 },
];
for (const p of soyalModels) {
  lines.push(makeGREE({ name:`Кондиционер GREE SOYAL Inverter R32 GWH-${p.c}BTU комплект`, slug:`gree-soyal-inverter-${slug(p.m)}`, price:p.p, images:imgs.soyal, description:desc.soyal, btuCode:p.c, modelCode:p.m, seriesName:'SOYAL Inverter R32', energyClass:'A++', wifi:true, inverter:true, inStock:false, rating:p.r, reviews:p.rv }));
}

// LOMO ARCTIC
const lomoModels = [
  { c:'09', m:'GWH09QCXB-K6DNC2F', p:2580, r:4.5, rv:11 },
  { c:'18', m:'GWH18QDXD-K6DNC2I', p:4473, r:4.4, rv:7  },
  { c:'24', m:'GWH24QEXF-K6DNC2I', p:5656, r:4.5, rv:4  },
];
for (const p of lomoModels) {
  lines.push(makeGREE({ name:`Кондиционер GREE LOMO Inverter Arctic GWH-${p.c}BTU комплект`, slug:`gree-lomo-arctic-${slug(p.m)}`, price:p.p, images:imgs.lomo, description:desc.lomo, btuCode:p.c, modelCode:p.m, seriesName:'LOMO Inverter Arctic', energyClass:'A++', wifi:true, inverter:true, rating:p.r, reviews:p.rv }));
}

console.log(`Prepared ${lines.length} GREE products (IDs p2256830 to p${nextId - 1})`);

const newEntries = lines.map(l => '\n' + l).join('');
content = content.slice(0, insertIdx) + newEntries + '\n' + content.slice(insertIdx);
fs.writeFileSync(storePath, content, 'utf8');
console.log('Done! GREE products added to store.ts');
