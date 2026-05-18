const fs = require('fs');
const path = require('path');

const storePath = path.join(__dirname, 'src/lib/store.ts');
let nextId = 2257045;

const IMG_PROCOOL    = 'https://climate-montazh.by/wp-content/uploads/2022/07/klimat-montazh-kondi-2-1-300x300.jpg';
const IMG_ECOSMART   = 'https://climate-montazh.by/wp-content/uploads/2022/07/klimat-montazh-kondi-1-2-300x300.jpg';
const IMG_GALLERY    = 'https://climate-montazh.by/wp-content/uploads/2022/05/ArtCool-Gallery-2021.jpg';
const IMG_MIRROR     = 'https://climate-montazh.by/wp-content/uploads/2025/03/iclim_lg_ac09bk-300x300.webp';
const IMG_OBJET      = 'https://climate-montazh.by/wp-content/uploads/2024/10/ab09bk_4-300x225.jpg';
const IMG_HITACHI    = 'https://rkcdn.ru/products/d04e8c84-44aa-11ed-b732-005056013a69/src.jpg';
const IMG_ECOCLIMA   = 'https://rkcdn.ru/products/d04e8c84-44aa-11ed-b732-005056013a69/src.jpg';

function esc(s) { return s.replace(/"/g, '\\"').replace(/\n/g, ' '); }

function makeProduct({ name, slug, categoryId, brand, tags, price, image, description, cold, heat, btu, energyClass, refrigerant, wifi, inverter }) {
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
  return `  { id: "${id}", name: "${nameE}", slug: "${slug}", categoryId: "${categoryId}", price: ${price}, originalPrice: ${Math.round(price * 1.1)}, description: "${descE}", images: ["${image}"], characteristics: JSON.parse("${charsStr}"), brand: "${brand}", tags: ${JSON.stringify(tags)}, inStock: true, rating: 4.7, reviewCount: 0 },`;
}

const products = [];

// ─── LG Descriptions ─────────────────────────────────────────────────────────

const DESC_DELUXE_PRO = 'Инверторная сплит-система серии LG DELUXE PRO 2025 года. Класс А++, ультрафиолетовая очистка воздуха LG UVNano, ионизатор Plasmaster Ionizer Plus, встроенный Wi-Fi, инверторный компрессор Dual Inverter с 10-летней гарантией, автоочистка, Jet Cool (охлаждение за 5 минут), 19 дБ, покрытие Gold Fin. Фреон R32.';
const DESC_OBJET_GREEN = 'Инверторная сплит-система серии LG ARTCOOL Objet Green. Нестандартный зелёный цвет, кондиционер как полноправный элемент интерьера. Инверторный компрессор Dual Inverter, Jet Cool, Active Energy Control, Wi-Fi управление. Класс А++. Фреон R32.';
const DESC_OBJET_BEIGE = 'Инверторная сплит-система серии LG ARTCOOL Objet Nature Beige. Нестандартный бежевый цвет, кондиционер как полноправный элемент интерьера. Инверторный компрессор Dual Inverter, Jet Cool, Active Energy Control, Wi-Fi управление. Класс А++. Фреон R32.';
const DESC_PROCOOL = 'Инверторная сплит-система серии LG PROCOOL 2023 года. Ультрафиолетовая очистка воздуха LG UVNano, ионизатор Plasmaster Ionizer Plus, встроенный Wi-Fi, голосовое управление. Инверторный компрессор Dual Inverter с 10-летней гарантией, самоочистка, Jet Cool, 19 дБ, покрытие Gold Fin. Класс А++. Фреон R32.';
const DESC_MIRROR = 'Инверторная сплит-система серии LG ARTCOOL Mirror 2023 года. Минималистичный дизайн, прозрачная панель. Comfort Air, умная самодиагностика, скрытый дисплей мониторинга электропотребления. Инверторный компрессор Dual Inverter с 10-летней гарантией, от 21 дБ, покрытие Gold Fin. Класс А++. Фреон R32.';
const DESC_ECOSMART = 'Инверторная сплит-система серии LG ECO Smart. Класс А++, UVNano, ионизатор Plasmaster Ionizer Plus, антиаллергенный фильтр, 10-летняя гарантия на компрессор, встроенный Wi-Fi, голосовое управление, автоочистка, 3D воздушный поток, от 19 дБ. Фреон R32.';
const DESC_EVO_MAX = 'Инверторная сплит-система серии LG EVO MAX. Класс А++, Wi-Fi управление, голосовое управление через Яндекс Алису. Трёхсторонний воздушный поток, инверторный компрессор Dual Inverter с 10-летней гарантией, ионизатор Plasmaster Ionizer Plus, от 20 дБ. Фреон R32.';
const DESC_HIGH_INV = 'Мощная инверторная сплит-система LG HIGH INVERTER (8 кВт охлаждение). Класс А++, Wi-Fi управление. Инверторный компрессор с 10-летней гарантией по технологии DUAL Inverter, Jet Cool, 3D воздушный поток, антибактериальный и плазменный фильтры, 26 дБ. Сертификат БелГИСС. Фреон R32.';
const DESC_LOOK_SMART = 'Инверторная сплит-система серии LG LOOK SMART 2025 года. Класс А++, Wi-Fi и голосовое управление через Яндекс Алису. Новый пульт с трёхсторонним воздушным потоком, инверторный компрессор Dual Inverter с 10-летней гарантией, ионизатор Plasmaster Ionizer Plus, от 20 дБ. Фреон R32.';
const DESC_GALLERY_SP = 'Инверторная сплит-система серии LG ARTCOOL GALLERY SPECIAL 2025 года. Full HD LCD дисплей с трансляцией фото и видео со смартфона, встроенные динамики. Wi-Fi управление, голосовое управление. Класс А++, ионизатор Plasmaster Ionizer Plus, от 20 дБ. Фреон R32.';
const DESC_GALLERY_PR = 'Премиальная инверторная сплит-система серии LG ARTCOOL GALLERY PREMIUM 2025 года. Full HD LCD дисплей с трансляцией контента, встроенные динамики. Wi-Fi управление, голосовое управление. Класс А++, ионизатор Plasmaster Ionizer Plus, от 20 дБ. Фреон R32.';
const DESC_STD_PLUS = 'Настенная сплит-система серии LG Standard Plus. Надёжная бюджетная on/off модель с базовым функционалом для небольших помещений. Фреон R410A.';
const DESC_STD_PLUS_S = 'Настенная сплит-система серии LG Standard Plus S (производство Южная Корея). Надёжная бюджетная on/off модель. Фреон R410A.';

// ─── LG DELUXE PRO ────────────────────────────────────────────────────────────
[
  { model: 'H09S1D', price: 3209, cold: '2.5', heat: '3.2', btu: '9 000' },
  { model: 'H12S1D', price: 3388, cold: '3.5', heat: '4.0', btu: '12 000' },
  { model: 'H18S1D', price: 4386, cold: '5.0', heat: '5.8', btu: '18 000' },
  { model: 'H24S1D', price: 5278, cold: '6.6', heat: '7.5', btu: '24 000' },
].forEach(({ model, price, cold, heat, btu }) => {
  products.push(makeProduct({
    name: `Сплит-система инверторного типа LG DELUXE PRO ${model} комплект`,
    slug: `lg-deluxe-pro-${model.toLowerCase()}`,
    categoryId: 'split-lg', brand: 'LG', tags: ['lg', 'inverter', 'deluxe-pro'],
    price, image: IMG_ECOSMART, description: DESC_DELUXE_PRO,
    cold, heat, btu, energyClass: 'A++', refrigerant: 'R32', wifi: 'Встроенный', inverter: true,
  }));
});

// ─── LG ARTCOOL Objet Green ───────────────────────────────────────────────────
[
  { model: 'AG09BK', price: 5670, cold: '2.5', heat: '3.3', btu: '9 000' },
  { model: 'AG12BK', price: 6095, cold: '3.5', heat: '4.0', btu: '12 000' },
].forEach(({ model, price, cold, heat, btu }) => {
  products.push(makeProduct({
    name: `Сплит-система инверторного типа LG ARTCOOL Objet Green ${model} комплект`,
    slug: `lg-artcool-objet-green-${model.toLowerCase()}`,
    categoryId: 'split-lg', brand: 'LG', tags: ['lg', 'inverter', 'artcool'],
    price, image: IMG_OBJET, description: DESC_OBJET_GREEN,
    cold, heat, btu, energyClass: 'A++', refrigerant: 'R32', wifi: 'Встроенный', inverter: true,
  }));
});

// ─── LG ARTCOOL Objet Nature Beige ───────────────────────────────────────────
[
  { model: 'AB09BK', price: 5670, cold: '2.5', heat: '3.3', btu: '9 000' },
  { model: 'AB12BK', price: 6095, cold: '3.5', heat: '4.0', btu: '12 000' },
].forEach(({ model, price, cold, heat, btu }) => {
  products.push(makeProduct({
    name: `Сплит-система инверторного типа LG ARTCOOL Objet Nature Beige ${model} комплект`,
    slug: `lg-artcool-objet-nature-beige-${model.toLowerCase()}`,
    categoryId: 'split-lg', brand: 'LG', tags: ['lg', 'inverter', 'artcool'],
    price, image: IMG_OBJET, description: DESC_OBJET_BEIGE,
    cold, heat, btu, energyClass: 'A++', refrigerant: 'R32', wifi: 'Встроенный', inverter: true,
  }));
});

// ─── LG PROCOOL ──────────────────────────────────────────────────────────────
[
  { model: 'B07TS', price: 3504, cold: '2.1', heat: '2.5', btu: '7 000' },
  { model: 'B09TS', price: 3630, cold: '2.7', heat: '2.9', btu: '9 000' },
  { model: 'B12TS', price: 4015, cold: '3.5', heat: '3.5', btu: '12 000' },
  { model: 'B18TS', price: 5329, cold: '5.3', heat: '5.4', btu: '18 000' },
  { model: 'B24TS', price: 6388, cold: '6.5', heat: '6.5', btu: '24 000' },
].forEach(({ model, price, cold, heat, btu }) => {
  products.push(makeProduct({
    name: `Сплит-система инверторного типа LG PROCOOL ${model} комплект`,
    slug: `lg-procool-${model.toLowerCase()}`,
    categoryId: 'split-lg', brand: 'LG', tags: ['lg', 'inverter', 'procool'],
    price, image: IMG_PROCOOL, description: DESC_PROCOOL,
    cold, heat, btu, energyClass: 'A++', refrigerant: 'R32', wifi: 'Встроенный', inverter: true,
  }));
});

// ─── LG ARTCOOL Mirror ───────────────────────────────────────────────────────
[
  { model: 'AC09BK', price: 4745, cold: '2.5', heat: '3.5', btu: '9 000' },
  { model: 'AC12BK', price: 4928, cold: '3.5', heat: '4.0', btu: '12 000' },
  { model: 'AC18BK', price: 5429, cold: '5.0', heat: '5.8', btu: '18 000' },
  { model: 'AC24BK', price: 6207, cold: '6.6', heat: '7.5', btu: '24 000' },
].forEach(({ model, price, cold, heat, btu }) => {
  products.push(makeProduct({
    name: `Сплит-система инверторного типа LG ARTCOOL Mirror ${model} комплект`,
    slug: `lg-artcool-mirror-${model.toLowerCase()}`,
    categoryId: 'split-lg', brand: 'LG', tags: ['lg', 'inverter', 'artcool'],
    price, image: IMG_MIRROR, description: DESC_MIRROR,
    cold, heat, btu, energyClass: 'A++', refrigerant: 'R32', wifi: 'Встроенный', inverter: true,
  }));
});

// ─── LG ECO Smart ────────────────────────────────────────────────────────────
[
  { model: 'PC07SQR', price: 2520, cold: '2.1', heat: '2.6', btu: '7 000' },
  { model: 'PC09SQR', price: 2568, cold: '2.5', heat: '3.2', btu: '9 000' },
  { model: 'PC12SQ',  price: 2976, cold: '3.5', heat: '4.0', btu: '12 000' },
  { model: 'PC18SQ',  price: 4560, cold: '5.0', heat: '5.8', btu: '18 000' },
  { model: 'PC24SQ',  price: 5640, cold: '6.6', heat: '7.5', btu: '24 000' },
].forEach(({ model, price, cold, heat, btu }) => {
  products.push(makeProduct({
    name: `Сплит-система инверторного типа LG ECO Smart ${model} комплект`,
    slug: `lg-eco-smart-${model.toLowerCase()}`,
    categoryId: 'split-lg', brand: 'LG', tags: ['lg', 'inverter', 'eco-smart'],
    price, image: IMG_ECOSMART, description: DESC_ECOSMART,
    cold, heat, btu, energyClass: 'A++', refrigerant: 'R32', wifi: 'Встроенный', inverter: true,
  }));
});

// ─── LG EVO MAX ──────────────────────────────────────────────────────────────
[
  { model: 'DC07RH', price: 2728, cold: '2.1', heat: '2.6', btu: '7 000' },
  { model: 'DC09RH', price: 2766, cold: '2.5', heat: '3.2', btu: '9 000' },
  { model: 'DC12RH', price: 3031, cold: '3.5', heat: '4.0', btu: '12 000' },
  { model: 'DC18RH', price: 4281, cold: '5.0', heat: '5.8', btu: '18 000' },
  { model: 'DC24RH', price: 5342, cold: '6.6', heat: '7.5', btu: '24 000' },
].forEach(({ model, price, cold, heat, btu }) => {
  products.push(makeProduct({
    name: `Сплит-система инверторного типа LG EVO MAX ${model} комплект`,
    slug: `lg-evo-max-${model.toLowerCase()}`,
    categoryId: 'split-lg', brand: 'LG', tags: ['lg', 'inverter', 'evo-max'],
    price, image: IMG_ECOSMART, description: DESC_EVO_MAX,
    cold, heat, btu, energyClass: 'A++', refrigerant: 'R32', wifi: 'Встроенный', inverter: true,
  }));
});

// ─── LG HIGH INVERTER ────────────────────────────────────────────────────────
products.push(makeProduct({
  name: 'Сплит-система инверторного типа LG HIGH INVERTER UJ30/UU30W комплект',
  slug: 'lg-high-inverter-uj30-uu30w',
  categoryId: 'split-lg', brand: 'LG', tags: ['lg', 'inverter', 'high-inverter'],
  price: 15844, image: IMG_PROCOOL, description: DESC_HIGH_INV,
  cold: '8.0', heat: '9.0', btu: '28 000', energyClass: 'A++', refrigerant: 'R32', wifi: 'Встроенный', inverter: true,
}));

// ─── LG LOOK SMART ───────────────────────────────────────────────────────────
[
  { model: 'LS07GQ', price: 2009, cold: '2.1', heat: '2.6', btu: '7 000' },
  { model: 'LS09GQ', price: 2051, cold: '2.5', heat: '3.2', btu: '9 000' },
  { model: 'LS12GQ', price: 2243, cold: '3.5', heat: '4.0', btu: '12 000' },
  { model: 'LS18GQ', price: 3441, cold: '5.0', heat: '5.8', btu: '18 000' },
  { model: 'LS24GQ', price: 4240, cold: '6.6', heat: '7.5', btu: '24 000' },
].forEach(({ model, price, cold, heat, btu }) => {
  products.push(makeProduct({
    name: `Сплит-система инверторного типа LG LOOK SMART ${model} комплект`,
    slug: `lg-look-smart-${model.toLowerCase()}`,
    categoryId: 'split-lg', brand: 'LG', tags: ['lg', 'inverter', 'look-smart'],
    price, image: IMG_ECOSMART, description: DESC_LOOK_SMART,
    cold, heat, btu, energyClass: 'A++', refrigerant: 'R32', wifi: 'Встроенный', inverter: true,
  }));
});

// ─── LG ARTCOOL GALLERY SPECIAL ──────────────────────────────────────────────
[
  { model: 'A09GA1', price: 6979, cold: '2.6', heat: '3.3', btu: '9 000' },
  { model: 'A12GA1', price: 7362, cold: '3.7', heat: '4.0', btu: '12 000' },
].forEach(({ model, price, cold, heat, btu }) => {
  products.push(makeProduct({
    name: `Сплит-система инверторного типа LG ARTCOOL GALLERY SPECIAL ${model} комплект`,
    slug: `lg-artcool-gallery-special-${model.toLowerCase()}`,
    categoryId: 'split-lg', brand: 'LG', tags: ['lg', 'inverter', 'artcool', 'gallery'],
    price, image: IMG_GALLERY, description: DESC_GALLERY_SP,
    cold, heat, btu, energyClass: 'A++', refrigerant: 'R32', wifi: 'Встроенный', inverter: true,
  }));
});

// ─── LG ARTCOOL GALLERY PREMIUM ──────────────────────────────────────────────
[
  { model: 'A09GA2', price: 9061, cold: '2.6', heat: '3.3', btu: '9 000' },
  { model: 'A12GA2', price: 9544, cold: '3.7', heat: '4.0', btu: '12 000' },
].forEach(({ model, price, cold, heat, btu }) => {
  products.push(makeProduct({
    name: `Сплит-система инверторного типа LG ARTCOOL GALLERY PREMIUM ${model} комплект`,
    slug: `lg-artcool-gallery-premium-${model.toLowerCase()}`,
    categoryId: 'split-lg', brand: 'LG', tags: ['lg', 'inverter', 'artcool', 'gallery'],
    price, image: IMG_GALLERY, description: DESC_GALLERY_PR,
    cold, heat, btu, energyClass: 'A++', refrigerant: 'R32', wifi: 'Встроенный', inverter: true,
  }));
});

// ─── LG Standard Plus (on/off) ───────────────────────────────────────────────
[
  { model: 'PM05SP', price: 1424, cold: '1.5', heat: '1.6', btu: '5 000' },
  { model: 'PM07SP', price: 1495, cold: '2.1', heat: '2.3', btu: '7 000' },
  { model: 'PM09SP', price: 1531, cold: '2.7', heat: '3.2', btu: '9 000' },
  { model: 'PM12SP', price: 1674, cold: '3.5', heat: '3.8', btu: '12 000' },
  { model: 'PM15SP', price: 1781, cold: '4.2', heat: '5.4', btu: '15 000' },
  { model: 'PM18SP', price: 1958, cold: '5.0', heat: '5.8', btu: '18 000' },
  { model: 'PM24SP', price: 2208, cold: '6.6', heat: '7.5', btu: '24 000' },
].forEach(({ model, price, cold, heat, btu }) => {
  products.push(makeProduct({
    name: `Сплит-система LG Standard Plus ${model} комплект`,
    slug: `lg-standard-plus-${model.toLowerCase()}`,
    categoryId: 'split-lg', brand: 'LG', tags: ['lg', 'on-off', 'standard'],
    price, image: IMG_ECOSMART, description: DESC_STD_PLUS,
    cold, heat, btu, energyClass: 'A', refrigerant: 'R410A', wifi: 'Нет', inverter: false,
  }));
});

// ─── LG Standard Plus S (on/off, Южная Корея) ────────────────────────────────
[
  { model: 'MJ05PC', price: 1623, cold: '1.5', heat: '1.7', btu: '5 000' },
  { model: 'MJ07PC', price: 1754, cold: '2.1', heat: '2.3', btu: '7 000' },
  { model: 'MJ09PC', price: 1796, cold: '2.6', heat: '3.2', btu: '9 000' },
  { model: 'MJ12PC', price: 1873, cold: '3.5', heat: '4.0', btu: '12 000' },
  { model: 'MJ15PC', price: 1912, cold: '4.2', heat: '5.4', btu: '15 000' },
  { model: 'MJ18PC', price: 2111, cold: '5.0', heat: '5.8', btu: '18 000' },
  { model: 'MJ24PC', price: 2324, cold: '7.0', heat: '7.5', btu: '24 000' },
].forEach(({ model, price, cold, heat, btu }) => {
  products.push(makeProduct({
    name: `Сплит-система LG Standard Plus S ${model} комплект`,
    slug: `lg-standard-plus-s-${model.toLowerCase()}`,
    categoryId: 'split-lg', brand: 'LG', tags: ['lg', 'on-off', 'standard'],
    price, image: IMG_ECOSMART, description: DESC_STD_PLUS_S,
    cold, heat, btu, energyClass: 'A', refrigerant: 'R410A', wifi: 'Нет', inverter: false,
  }));
});

// ─── HITACHI Descriptions ────────────────────────────────────────────────────

const DESC_SHIRATAMA = 'Инверторная сплит-система серии Hitachi SHIRATAMA. Класс А++ по SEER и SCOP. Инверторный компрессор, покрытие теплообменника Nano Titanium Wasabi. Тихая и высокоэффективная работа. Фреон R32.';
const DESC_XCOMFORT  = 'Инверторная сплит-система серии Hitachi X-COMFORT. Класс А++ по SEER. Инверторный компрессор, надёжная и тихая работа. Фреон R32.';

// ─── HITACHI SHIRATAMA ───────────────────────────────────────────────────────
[
  { inner: 'RAK-DJ18RHAE', outer: 'RAC-DJ18WHAE', price: 3791, cold: '2.0', heat: '2.5', btu: '7 000' },
  { inner: 'RAK-DJ25RHAE', outer: 'RAC-DJ25WHAE', price: 3924, cold: '2.5', heat: '3.4', btu: '9 000' },
  { inner: 'RAK-DJ35RHAE', outer: 'RAC-DJ35WHAE', price: 4124, cold: '3.5', heat: '4.2', btu: '12 000' },
  { inner: 'RAK-DJ50RHAE', outer: 'RAC-DJ50WHAE', price: 6121, cold: '5.0', heat: '6.0', btu: '18 000' },
].forEach(({ inner, outer, price, cold, heat, btu }) => {
  const model = `${inner}/${outer}`;
  const safeModel = model.replace(/\//g, '-').toLowerCase();
  products.push(makeProduct({
    name: `Сплит-система инверторного типа Hitachi SHIRATAMA ${model} комплект`,
    slug: `hitachi-shiratama-${safeModel}`,
    categoryId: 'split-hitachi', brand: 'Hitachi', tags: ['hitachi', 'inverter', 'shiratama'],
    price, image: IMG_HITACHI, description: DESC_SHIRATAMA,
    cold, heat, btu, energyClass: 'A++', refrigerant: 'R32', wifi: 'Нет', inverter: true,
  }));
});

// ─── HITACHI X-COMFORT ───────────────────────────────────────────────────────
[
  { inner: 'RAK-18REF', outer: 'RAC-18WEF', price: 3457, cold: '2.0', heat: '2.5', btu: '7 000' },
  { inner: 'RAK-25REF', outer: 'RAC-25WEF', price: 3591, cold: '2.5', heat: '3.4', btu: '9 000' },
  { inner: 'RAK-35REF', outer: 'RAC-35WEF', price: 3857, cold: '3.5', heat: '4.2', btu: '12 000' },
  { inner: 'RAK-50REF', outer: 'RAC-50WEF', price: 5788, cold: '5.0', heat: '6.0', btu: '18 000' },
].forEach(({ inner, outer, price, cold, heat, btu }) => {
  const model = `${inner}/${outer}`;
  const safeModel = model.replace(/\//g, '-').toLowerCase();
  products.push(makeProduct({
    name: `Сплит-система инверторного типа Hitachi X-COMFORT ${model} комплект`,
    slug: `hitachi-x-comfort-${safeModel}`,
    categoryId: 'split-hitachi', brand: 'Hitachi', tags: ['hitachi', 'inverter', 'x-comfort'],
    price, image: IMG_HITACHI, description: DESC_XCOMFORT,
    cold, heat, btu, energyClass: 'A++', refrigerant: 'R32', wifi: 'Нет', inverter: true,
  }));
});

// ─── ECOCLIMA Descriptions ───────────────────────────────────────────────────

const DESC_NOVA_INV = 'Инверторная сплит-система серии Ecoclima NOVA LINE INVERTER (R410A). Встроенный Wi-Fi (приложение Tuya Smart / Smart Life), 4D обдув (электропривод вертикальных и горизонтальных жалюзи), самоочистка внутреннего блока, режим Эко, iFeel, матовый корпус. Класс А (EER). Гарантия 2 года. Завод Changhong.';
const DESC_NOVA_INV_SLV = 'Инверторная сплит-система серии Ecoclima NOVA LINE INVERTER Silver (R410A). Корпус серебристого цвета. Встроенный Wi-Fi (приложение Tuya Smart / Smart Life), 4D обдув, самоочистка, режим Эко, iFeel. Класс А (EER). Гарантия 2 года. Завод Changhong.';
const DESC_FROST_OFF = 'Сплит-система серии Ecoclima FROST LINE ON-OFF. Класс А (EER). Надёжная и доступная модель без инвертора. Фреон R410A.';

// ─── ECOCLIMA NOVA LINE INVERTER ─────────────────────────────────────────────
[
  { model: 'ECW/I-СН07/AA-4R1/EC/I-CH07/A-4R1', slug: 'ecoclima-nova-line-inv-ch07', price: 1303, cold: '2.1', heat: '2.2', btu: '7 000', desc: DESC_NOVA_INV },
  { model: 'ECW/I-СН09/AA-4R1/EC/I-CH09/A-4R1', slug: 'ecoclima-nova-line-inv-ch09', price: 1463, cold: '2.6', heat: '2.7', btu: '9 000', desc: DESC_NOVA_INV },
  { model: 'ECW/I-СН12/AA-4R1/EC/I-CH12/A-4R1', slug: 'ecoclima-nova-line-inv-ch12', price: 1714, cold: '3.5', heat: '3.6', btu: '12 000', desc: DESC_NOVA_INV },
  { model: 'ECW/I-СН09/AAS-4R1/EC/I-CH09/A-4R1 (серебро)', slug: 'ecoclima-nova-line-inv-ch09-silver', price: 1653, cold: '2.6', heat: '2.7', btu: '9 000', desc: DESC_NOVA_INV_SLV },
].forEach(({ model, slug, price, cold, heat, btu, desc }) => {
  products.push(makeProduct({
    name: `Сплит-система инверторного типа Ecoclima NOVA LINE INVERTER ${model} комплект`,
    slug,
    categoryId: 'split-ecoclima', brand: 'Ecoclima', tags: ['ecoclima', 'inverter', 'nova-line'],
    price, image: IMG_ECOCLIMA, description: desc,
    cold, heat, btu, energyClass: 'A', refrigerant: 'R410A', wifi: 'Встроенный', inverter: true,
  }));
});

// ─── ECOCLIMA FROST LINE ON-OFF ───────────────────────────────────────────────
products.push(makeProduct({
  name: 'Сплит-система Ecoclima FROST LINE ON-OFF ECW-AX12/FB-4R1 комплект',
  slug: 'ecoclima-frost-line-off-ecw-ax12-fb-4r1',
  categoryId: 'split-ecoclima', brand: 'Ecoclima', tags: ['ecoclima', 'on-off', 'frost-line'],
  price: 1347, image: IMG_ECOCLIMA, description: DESC_FROST_OFF,
  cold: '3.5', heat: '3.6', btu: '12 000', energyClass: 'A', refrigerant: 'R410A', wifi: 'Нет', inverter: false,
}));

// ─── Write to store.ts ────────────────────────────────────────────────────────
console.log(`Prepared ${products.length} products (IDs p2257045 to p${nextId - 1})`);

let content = fs.readFileSync(storePath, 'utf8');
const insertMarker = '];\n\nexport const INITIAL_ORDERS';
const insertIdx = content.indexOf(insertMarker);
if (insertIdx === -1) { console.error('Insertion marker not found!'); process.exit(1); }

const newEntries = products.map(l => '\n' + l).join('');
content = content.slice(0, insertIdx) + newEntries + '\n' + content.slice(insertIdx);
fs.writeFileSync(storePath, content, 'utf8');
console.log('Done! LG, Hitachi, Ecoclima products added to store.ts');
