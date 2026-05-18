// Script to replace 41 fake products with real product data
// Keeps prices unchanged, updates names/images/descriptions/specs

const fs = require('fs');
const filePath = 'C:/Users/veron/sga-site/sga/src/lib/store.ts';
let content = fs.readFileSync(filePath, 'utf8');
const lines = content.split('\n');

function makeChars(spec) {
  const json = JSON.stringify(spec);
  const escaped = json.replace(/"/g, '\\"');
  return `JSON.parse("${escaped}")`;
}

function makeLine(p) {
  const chars = makeChars(p.characteristics);
  const images = JSON.stringify(p.images);
  const tags = JSON.stringify(p.tags);
  const originalPrice = p.originalPrice ? `, originalPrice: ${p.originalPrice}` : '';
  return `  { id: "${p.id}", name: "${p.name}", slug: "${p.slug}", categoryId: "${p.categoryId}", price: ${p.price}${originalPrice}, description: "${p.description}", images: ${images}, characteristics: ${chars}, brand: "${p.brand}", tags: ${tags}, inStock: ${p.inStock}, rating: ${p.rating}, reviewCount: ${p.reviewCount} },`;
}

// Image URLs (real, from climate-montazh.by)
const IMG = {
  panasonicTZ: 'https://climate-montazh.by/wp-content/uploads/2025/06/izobrazhenie_viber_2025-06-04_16-35-54-682.jpg',
  panasonicZ:  'https://climate-montazh.by/wp-content/uploads/2025/06/panasonic_design_cs_z20zkewcu_z20zke.png',
  panasonicYK: 'https://climate-montazh.by/wp-content/uploads/2025/06/56918_big.jpg',
  neoclimHAP1: 'https://climate-montazh.by/wp-content/uploads/2024/04/hap4-1000x1000-1.webp',
  neoclimHAP2: 'https://climate-montazh.by/wp-content/uploads/2024/04/hap1-1000x1000-1.webp',
  neoclimHAP3: 'https://climate-montazh.by/wp-content/uploads/2024/04/hap2-1000x1000-1.webp',
  neoclimHAL1: 'https://climate-montazh.by/wp-content/uploads/2024/04/neoclima-plasma-inv-hal-fwi-02_u0zp-sd.jpg',
  neoclimHAL2: 'https://climate-montazh.by/wp-content/uploads/2024/04/neoclima-plasma-inv-hal-fwi_kh09-xx.jpg',
  zanussiHB:   'https://climate-montazh.by/wp-content/uploads/2020/06/zacs_07_hb_n1_in_barocco_2.jpeg',
  zanussiHPF1: 'https://climate-montazh.by/wp-content/uploads/2023/06/101706_split-sistema-zanussi-barocco-zacs-24-.png',
  zanussiINV1: 'https://climate-montazh.by/wp-content/uploads/2023/06/35273_split-sistema-invertornogo.jpg',
  zanussiINV2: 'https://climate-montazh.by/wp-content/uploads/2023/06/35271_split-sistema-invertornogo.jpg',
  loriotSky:   'https://climate-montazh.by/wp-content/uploads/2023/06/60970.970-300x214.jpg',
  loriotNeon1: 'https://climate-montazh.by/wp-content/uploads/2023/06/lorta111.800x600w.jpg',
  loriotNeon2: 'https://climate-montazh.by/wp-content/uploads/2023/06/loriot_neon_series_01.png',
  loriotIN1:   'https://climate-montazh.by/wp-content/uploads/2023/06/97103_split-sistema-loriot-lac-in-07ta.png',
  loriotIN2:   'https://climate-montazh.by/wp-content/uploads/2023/06/97104_split-sistema-loriot-lac-in-07ta.png',
  loriotAQI:   'https://climate-montazh.by/wp-content/uploads/2024/04/loriot_skyline-front-300x188.jpg',
};

const products = [
  // ==================== PANASONIC ====================
  {
    id: 'p2257193', price: 1855, originalPrice: 2041, inStock: true, rating: 4.7, reviewCount: 0,
    name: 'Сплит-система инверторного типа Panasonic Compact Inverter CS-TZ25ZKEW/CU-TZ25ZKE комплект',
    slug: 'panasonic-compact-cs-tz25zkew-cu-tz25zke',
    categoryId: 'split-panasonic', brand: 'Panasonic', tags: ['panasonic','inverter','compact'],
    images: [IMG.panasonicTZ],
    description: 'Инверторная сплит-система серии Panasonic Compact Inverter CS-TZ. Класс А++. Компактный ультратонкий дизайн, инверторный компрессор, нейтрализатор запахов Nanoe-X, датчик Econavi, автоочистка теплообменника. Работа на обогрев при -15°С. Фреон R32.',
    characteristics: {
      'Базовая мощность кондиционера (охлаждение),BTU': '9 000',
      'Мощность охлаждения, кВт': '2.5',
      'Мощность обогрева, кВт': '3.4',
      'Класс энергоэффективности': 'A++',
      'Хладагент': 'R32',
      'Тип управления': 'Инвертор',
      'Wi-Fi управление': 'Опция',
      'Рабочая температура обогрева': '-15...+24 °С',
      'Уровень шума внутр. блока': '19-37 дБ',
    }
  },
  {
    id: 'p2257194', price: 2090, originalPrice: 2299, inStock: true, rating: 4.7, reviewCount: 0,
    name: 'Сплит-система инверторного типа Panasonic Compact Inverter CS-TZ35ZKEW/CU-TZ35ZKE комплект',
    slug: 'panasonic-compact-cs-tz35zkew-cu-tz35zke',
    categoryId: 'split-panasonic', brand: 'Panasonic', tags: ['panasonic','inverter','compact'],
    images: [IMG.panasonicTZ],
    description: 'Инверторная сплит-система серии Panasonic Compact Inverter CS-TZ. Класс А++. Инверторный компрессор, нейтрализатор запахов Nanoe-X, датчик Econavi. Бесшумная работа от 19 дБ. Обогрев при -15°С. Фреон R32.',
    characteristics: {
      'Базовая мощность кондиционера (охлаждение),BTU': '12 000',
      'Мощность охлаждения, кВт': '3.5',
      'Мощность обогрева, кВт': '4.0',
      'Класс энергоэффективности': 'A++',
      'Хладагент': 'R32',
      'Тип управления': 'Инвертор',
      'Wi-Fi управление': 'Опция',
      'Рабочая температура обогрева': '-15...+24 °С',
      'Уровень шума внутр. блока': '19-37 дБ',
    }
  },
  {
    id: 'p2257195', price: 2940, originalPrice: 3234, inStock: true, rating: 4.7, reviewCount: 0,
    name: 'Сплит-система инверторного типа Panasonic Compact Inverter CS-TZ50ZKEW/CU-TZ50ZKE комплект',
    slug: 'panasonic-compact-cs-tz50zkew-cu-tz50zke',
    categoryId: 'split-panasonic', brand: 'Panasonic', tags: ['panasonic','inverter','compact'],
    images: [IMG.panasonicTZ],
    description: 'Инверторная сплит-система серии Panasonic Compact Inverter CS-TZ. Класс А++. Мощность охлаждения 5 кВт для помещений до 50 м2. Технология Nanoe-X, датчик Econavi, автоочистка теплообменника. Обогрев при -15°С. Фреон R32.',
    characteristics: {
      'Базовая мощность кондиционера (охлаждение),BTU': '18 000',
      'Мощность охлаждения, кВт': '5.0',
      'Мощность обогрева, кВт': '6.0',
      'Класс энергоэффективности': 'A++',
      'Хладагент': 'R32',
      'Тип управления': 'Инвертор',
      'Wi-Fi управление': 'Опция',
      'Рабочая температура обогрева': '-15...+24 °С',
      'Уровень шума внутр. блока': '19-40 дБ',
    }
  },
  {
    id: 'p2257196', price: 3490, originalPrice: 3839, inStock: true, rating: 4.7, reviewCount: 0,
    name: 'Сплит-система инверторного типа Panasonic Compact Inverter CS-TZ60ZKEW/CU-TZ60ZKE комплект',
    slug: 'panasonic-compact-cs-tz60zkew-cu-tz60zke',
    categoryId: 'split-panasonic', brand: 'Panasonic', tags: ['panasonic','inverter','compact'],
    images: [IMG.panasonicTZ],
    description: 'Инверторная сплит-система серии Panasonic Compact Inverter CS-TZ. Класс А++. Мощность охлаждения 6 кВт для помещений до 65 м2. Nanoe-X, Econavi, автоочистка. Обогрев при -15°С. Фреон R32.',
    characteristics: {
      'Базовая мощность кондиционера (охлаждение),BTU': '22 000',
      'Мощность охлаждения, кВт': '6.0',
      'Мощность обогрева, кВт': '7.0',
      'Класс энергоэффективности': 'A++',
      'Хладагент': 'R32',
      'Тип управления': 'Инвертор',
      'Wi-Fi управление': 'Опция',
      'Рабочая температура обогрева': '-15...+24 °С',
      'Уровень шума внутр. блока': '21-41 дБ',
    }
  },
  {
    id: 'p2257197', price: 3980, originalPrice: 4378, inStock: true, rating: 4.7, reviewCount: 0,
    name: 'Сплит-система инверторного типа Panasonic Compact Inverter CS-TZ71ZKEW/CU-TZ71ZKE комплект',
    slug: 'panasonic-compact-cs-tz71zkew-cu-tz71zke',
    categoryId: 'split-panasonic', brand: 'Panasonic', tags: ['panasonic','inverter','compact'],
    images: [IMG.panasonicTZ],
    description: 'Инверторная сплит-система серии Panasonic Compact Inverter CS-TZ. Класс А++. Мощность охлаждения 7.1 кВт для больших помещений до 75 м2. Nanoe-X, Econavi, автоочистка теплообменника. Обогрев при -15°С. Фреон R32.',
    characteristics: {
      'Базовая мощность кондиционера (охлаждение),BTU': '24 000',
      'Мощность охлаждения, кВт': '7.1',
      'Мощность обогрева, кВт': '8.0',
      'Класс энергоэффективности': 'A++',
      'Хладагент': 'R32',
      'Тип управления': 'Инвертор',
      'Wi-Fi управление': 'Опция',
      'Рабочая температура обогрева': '-15...+24 °С',
      'Уровень шума внутр. блока': '22-42 дБ',
    }
  },
  {
    id: 'p2257198', price: 2490, originalPrice: 2739, inStock: true, rating: 4.7, reviewCount: 0,
    name: 'Сплит-система инверторного типа Panasonic Design Inverter CS-Z20ZKEW/CU-Z20ZKE комплект',
    slug: 'panasonic-design-cs-z20zkew-cu-z20zke',
    categoryId: 'split-panasonic', brand: 'Panasonic', tags: ['panasonic','inverter','design'],
    images: [IMG.panasonicZ],
    description: 'Инверторная сплит-система премиум-класса Panasonic Design Inverter CS-Z. Класс А+++. Ультратонкий корпус 29 мм, встроенный Wi-Fi, Nanoe-X Mark 2, датчик Econavi. Работа в режиме обогрева при -20°С. Фреон R32.',
    characteristics: {
      'Базовая мощность кондиционера (охлаждение),BTU': '7 000',
      'Мощность охлаждения, кВт': '2.0',
      'Мощность обогрева, кВт': '2.5',
      'Класс энергоэффективности': 'A+++',
      'Хладагент': 'R32',
      'Тип управления': 'Инвертор',
      'Wi-Fi управление': 'Встроенный',
      'Рабочая температура обогрева': '-20...+24 °С',
      'Уровень шума внутр. блока': '19-36 дБ',
    }
  },
  {
    id: 'p2257199', price: 2690, originalPrice: 2959, inStock: true, rating: 4.7, reviewCount: 0,
    name: 'Сплит-система инверторного типа Panasonic Design Inverter CS-Z25ZKEW/CU-Z25ZKE комплект',
    slug: 'panasonic-design-cs-z25zkew-cu-z25zke',
    categoryId: 'split-panasonic', brand: 'Panasonic', tags: ['panasonic','inverter','design'],
    images: [IMG.panasonicZ],
    description: 'Инверторная сплит-система премиум-класса Panasonic Design Inverter CS-Z. Класс А+++. Ультратонкий корпус 29 мм, встроенный Wi-Fi, Nanoe-X Mark 2, самоочистка внутреннего блока. Обогрев при -20°С. Фреон R32.',
    characteristics: {
      'Базовая мощность кондиционера (охлаждение),BTU': '9 000',
      'Мощность охлаждения, кВт': '2.5',
      'Мощность обогрева, кВт': '3.2',
      'Класс энергоэффективности': 'A+++',
      'Хладагент': 'R32',
      'Тип управления': 'Инвертор',
      'Wi-Fi управление': 'Встроенный',
      'Рабочая температура обогрева': '-20...+24 °С',
      'Уровень шума внутр. блока': '19-36 дБ',
    }
  },
  {
    id: 'p2257200', price: 2990, originalPrice: 3289, inStock: true, rating: 4.7, reviewCount: 0,
    name: 'Сплит-система инверторного типа Panasonic Design Inverter CS-Z35ZKEW/CU-Z35ZKE комплект',
    slug: 'panasonic-design-cs-z35zkew-cu-z35zke',
    categoryId: 'split-panasonic', brand: 'Panasonic', tags: ['panasonic','inverter','design'],
    images: [IMG.panasonicZ],
    description: 'Инверторная сплит-система премиум-класса Panasonic Design Inverter CS-Z. Класс А+++. Встроенный Wi-Fi, Nanoe-X Mark 2, многоступенчатая фильтрация. Работа на обогрев при -20°С. Фреон R32.',
    characteristics: {
      'Базовая мощность кондиционера (охлаждение),BTU': '12 000',
      'Мощность охлаждения, кВт': '3.5',
      'Мощность обогрева, кВт': '4.0',
      'Класс энергоэффективности': 'A+++',
      'Хладагент': 'R32',
      'Тип управления': 'Инвертор',
      'Wi-Fi управление': 'Встроенный',
      'Рабочая температура обогрева': '-20...+24 °С',
      'Уровень шума внутр. блока': '19-38 дБ',
    }
  },
  {
    id: 'p2257201', price: 3990, originalPrice: 4389, inStock: true, rating: 4.7, reviewCount: 0,
    name: 'Сплит-система инверторного типа Panasonic Design Inverter CS-Z50ZKEW/CU-Z50ZKE комплект',
    slug: 'panasonic-design-cs-z50zkew-cu-z50zke',
    categoryId: 'split-panasonic', brand: 'Panasonic', tags: ['panasonic','inverter','design'],
    images: [IMG.panasonicZ],
    description: 'Инверторная сплит-система премиум-класса Panasonic Design Inverter CS-Z. Класс А++. Ультратонкий дизайн, встроенный Wi-Fi, Nanoe-X Mark 2, датчик Econavi. Обогрев при -20°С. Фреон R32.',
    characteristics: {
      'Базовая мощность кондиционера (охлаждение),BTU': '18 000',
      'Мощность охлаждения, кВт': '5.0',
      'Мощность обогрева, кВт': '5.8',
      'Класс энергоэффективности': 'A++',
      'Хладагент': 'R32',
      'Тип управления': 'Инвертор',
      'Wi-Fi управление': 'Встроенный',
      'Рабочая температура обогрева': '-20...+24 °С',
      'Уровень шума внутр. блока': '20-40 дБ',
    }
  },
  {
    id: 'p2257202', price: 5280, originalPrice: 5808, inStock: true, rating: 4.7, reviewCount: 0,
    name: 'Сплит-система инверторного типа Panasonic Design Inverter CS-Z71ZKEW/CU-Z71ZKE комплект',
    slug: 'panasonic-design-cs-z71zkew-cu-z71zke',
    categoryId: 'split-panasonic', brand: 'Panasonic', tags: ['panasonic','inverter','design'],
    images: [IMG.panasonicZ],
    description: 'Флагманская инверторная сплит-система Panasonic Design Inverter CS-Z. Класс А++. 7.1 кВт охлаждения для просторных помещений до 75 м2. Встроенный Wi-Fi, Nanoe-X Mark 2. Обогрев при -20°С. Фреон R32.',
    characteristics: {
      'Базовая мощность кондиционера (охлаждение),BTU': '24 000',
      'Мощность охлаждения, кВт': '7.1',
      'Мощность обогрева, кВт': '7.8',
      'Класс энергоэффективности': 'A++',
      'Хладагент': 'R32',
      'Тип управления': 'Инвертор',
      'Wi-Fi управление': 'Встроенный',
      'Рабочая температура обогрева': '-20...+24 °С',
      'Уровень шума внутр. блока': '22-42 дБ',
    }
  },
  {
    id: 'p2257203', price: 1490, originalPrice: 1639, inStock: true, rating: 4.7, reviewCount: 0,
    name: 'Сплит-система инверторного типа Panasonic Professional Inverter CS-Z25YKEA/CU-Z25YKEA комплект',
    slug: 'panasonic-professional-cs-z25ykea-cu-z25ykea',
    categoryId: 'split-panasonic', brand: 'Panasonic', tags: ['panasonic','inverter','professional'],
    images: [IMG.panasonicYK],
    description: 'Инверторная сплит-система серии Panasonic Professional CS-Z YKEA. Класс А++. Встроенный Wi-Fi, Nanoe-X, защита от коррозии, надёжная эксплуатация в условиях Беларуси. Обогрев при -20°С. Фреон R32.',
    characteristics: {
      'Базовая мощность кондиционера (охлаждение),BTU': '9 000',
      'Мощность охлаждения, кВт': '2.5',
      'Мощность обогрева, кВт': '3.2',
      'Класс энергоэффективности': 'A++',
      'Хладагент': 'R32',
      'Тип управления': 'Инвертор',
      'Wi-Fi управление': 'Встроенный',
      'Рабочая температура обогрева': '-20...+24 °С',
      'Уровень шума внутр. блока': '19-40 дБ',
    }
  },
  {
    id: 'p2257204', price: 1680, originalPrice: 1848, inStock: true, rating: 4.7, reviewCount: 0,
    name: 'Сплит-система инверторного типа Panasonic Professional Inverter CS-Z35YKEA/CU-Z35YKEA комплект',
    slug: 'panasonic-professional-cs-z35ykea-cu-z35ykea',
    categoryId: 'split-panasonic', brand: 'Panasonic', tags: ['panasonic','inverter','professional'],
    images: [IMG.panasonicYK],
    description: 'Инверторная сплит-система серии Panasonic Professional CS-Z YKEA. Класс А++. Встроенный Wi-Fi, Nanoe-X, 3D-поток воздуха, защитное покрытие внешнего блока. Обогрев при -20°С. Фреон R32.',
    characteristics: {
      'Базовая мощность кондиционера (охлаждение),BTU': '12 000',
      'Мощность охлаждения, кВт': '3.5',
      'Мощность обогрева, кВт': '4.2',
      'Класс энергоэффективности': 'A++',
      'Хладагент': 'R32',
      'Тип управления': 'Инвертор',
      'Wi-Fi управление': 'Встроенный',
      'Рабочая температура обогрева': '-20...+24 °С',
      'Уровень шума внутр. блока': '19-40 дБ',
    }
  },
  {
    id: 'p2257205', price: 2390, originalPrice: 2629, inStock: true, rating: 4.7, reviewCount: 0,
    name: 'Сплит-система инверторного типа Panasonic Professional Inverter CS-Z42YKEA/CU-Z42YKEA комплект',
    slug: 'panasonic-professional-cs-z42ykea-cu-z42ykea',
    categoryId: 'split-panasonic', brand: 'Panasonic', tags: ['panasonic','inverter','professional'],
    images: [IMG.panasonicYK],
    description: 'Инверторная сплит-система серии Panasonic Professional CS-Z YKEA. Класс А++. 4.2 кВт охлаждения, встроенный Wi-Fi, Nanoe-X, антикоррозийное покрытие. Обогрев при -20°С. Фреон R32.',
    characteristics: {
      'Базовая мощность кондиционера (охлаждение),BTU': '14 000',
      'Мощность охлаждения, кВт': '4.2',
      'Мощность обогрева, кВт': '5.3',
      'Класс энергоэффективности': 'A++',
      'Хладагент': 'R32',
      'Тип управления': 'Инвертор',
      'Wi-Fi управление': 'Встроенный',
      'Рабочая температура обогрева': '-20...+24 °С',
      'Уровень шума внутр. блока': '20-42 дБ',
    }
  },
  {
    id: 'p2257206', price: 3090, originalPrice: 3399, inStock: true, rating: 4.7, reviewCount: 0,
    name: 'Сплит-система инверторного типа Panasonic Professional Inverter CS-Z50YKEA/CU-Z50YKEA комплект',
    slug: 'panasonic-professional-cs-z50ykea-cu-z50ykea',
    categoryId: 'split-panasonic', brand: 'Panasonic', tags: ['panasonic','inverter','professional'],
    images: [IMG.panasonicYK],
    description: 'Инверторная сплит-система серии Panasonic Professional CS-Z YKEA. Класс А++. Мощность 5.0 кВт, встроенный Wi-Fi, Nanoe-X, датчик Econavi. Надёжная работа для Беларуси. Обогрев при -20°С. Фреон R32.',
    characteristics: {
      'Базовая мощность кондиционера (охлаждение),BTU': '18 000',
      'Мощность охлаждения, кВт': '5.0',
      'Мощность обогрева, кВт': '6.0',
      'Класс энергоэффективности': 'A++',
      'Хладагент': 'R32',
      'Тип управления': 'Инвертор',
      'Wi-Fi управление': 'Встроенный',
      'Рабочая температура обогрева': '-20...+24 °С',
      'Уровень шума внутр. блока': '21-42 дБ',
    }
  },

  // ==================== NEOCLIMA ====================
  {
    id: 'p2257207', price: 760, originalPrice: 836, inStock: true, rating: 4.7, reviewCount: 0,
    name: 'Сплит-система NeoClima HAP NS/NU-HAP07T комплект',
    slug: 'neoclima-hap-ns-nu-hap07t',
    categoryId: 'split-neoclima', brand: 'NeoClima', tags: ['neoclima','on-off','hap'],
    images: [IMG.neoclimHAP1, IMG.neoclimHAP2],
    description: 'Сплит-система NeoClima серии HAP. Класс А. On/off модель для помещений до 20 м2. Ионизация воздуха, функция I Feel, режимы Turbo и ECO, ночной режим Sleep, самодиагностика, автоперезапуск. Хладагент R410A.',
    characteristics: {
      'Базовая мощность кондиционера (охлаждение),BTU': '7 000',
      'Мощность охлаждения, кВт': '2.05',
      'Мощность обогрева, кВт': '2.3',
      'Площадь помещения': '20 м²',
      'Класс энергоэффективности': 'A',
      'Хладагент': 'R410A',
      'Тип управления': 'On/Off',
      'Wi-Fi управление': 'Нет',
      'Уровень шума внутр. блока': '27-38 дБ',
      'EER/COP': '3.21/3.61',
    }
  },
  {
    id: 'p2257208', price: 840, originalPrice: 924, inStock: true, rating: 4.7, reviewCount: 0,
    name: 'Сплит-система NeoClima HAP NS/NU-HAP09T комплект',
    slug: 'neoclima-hap-ns-nu-hap09t',
    categoryId: 'split-neoclima', brand: 'NeoClima', tags: ['neoclima','on-off','hap'],
    images: [IMG.neoclimHAP1, IMG.neoclimHAP2, IMG.neoclimHAP3],
    description: 'Сплит-система NeoClima серии HAP. Класс А. On/off модель для помещений до 25 м2. Ионизация воздуха, функция I Feel, 4D-регулировка обдува, Turbo и ECO, ночной режим Sleep, самодиагностика, автоперезапуск. Хладагент R410A.',
    characteristics: {
      'Базовая мощность кондиционера (охлаждение),BTU': '9 000',
      'Мощность охлаждения, кВт': '2.64',
      'Мощность обогрева, кВт': '2.8',
      'Площадь помещения': '25 м²',
      'Класс энергоэффективности': 'A',
      'Хладагент': 'R410A',
      'Тип управления': 'On/Off',
      'Wi-Fi управление': 'Нет',
      'Уровень шума внутр. блока': '27-38 дБ',
      'EER/COP': '3.21/3.61',
    }
  },
  {
    id: 'p2257209', price: 1040, originalPrice: 1144, inStock: true, rating: 4.7, reviewCount: 0,
    name: 'Сплит-система NeoClima HAP NS/NU-HAP12T комплект',
    slug: 'neoclima-hap-ns-nu-hap12t',
    categoryId: 'split-neoclima', brand: 'NeoClima', tags: ['neoclima','on-off','hap'],
    images: [IMG.neoclimHAP1, IMG.neoclimHAP2],
    description: 'Сплит-система NeoClima серии HAP. Класс А. On/off модель для помещений до 35 м2. Ионизация воздуха, функция I Feel, 4D-регулировка обдува, двойной фильтр, Turbo и ECO. Хладагент R410A.',
    characteristics: {
      'Базовая мощность кондиционера (охлаждение),BTU': '12 000',
      'Мощность охлаждения, кВт': '3.52',
      'Мощность обогрева, кВт': '3.81',
      'Площадь помещения': '35 м²',
      'Класс энергоэффективности': 'A',
      'Хладагент': 'R410A',
      'Тип управления': 'On/Off',
      'Wi-Fi управление': 'Нет',
      'Уровень шума внутр. блока': '27-41 дБ',
      'EER/COP': '3.20/3.55',
    }
  },
  {
    id: 'p2257210', price: 1490, originalPrice: 1639, inStock: true, rating: 4.7, reviewCount: 0,
    name: 'Сплит-система NeoClima HAP NS/NU-HAP18T комплект',
    slug: 'neoclima-hap-ns-nu-hap18t',
    categoryId: 'split-neoclima', brand: 'NeoClima', tags: ['neoclima','on-off','hap'],
    images: [IMG.neoclimHAP1, IMG.neoclimHAP2],
    description: 'Сплит-система NeoClima серии HAP. Класс А. On/off модель для помещений до 50 м2. Ионизация воздуха, функция I Feel, 4D-регулировка обдува. Хладагент R410A.',
    characteristics: {
      'Базовая мощность кондиционера (охлаждение),BTU': '18 000',
      'Мощность охлаждения, кВт': '5.15',
      'Мощность обогрева, кВт': '5.50',
      'Площадь помещения': '50 м²',
      'Класс энергоэффективности': 'A',
      'Хладагент': 'R410A',
      'Тип управления': 'On/Off',
      'Wi-Fi управление': 'Нет',
      'Уровень шума внутр. блока': '30-43 дБ',
      'EER/COP': '3.10/3.41',
    }
  },
  {
    id: 'p2257211', price: 2140, originalPrice: 2354, inStock: true, rating: 4.7, reviewCount: 0,
    name: 'Сплит-система NeoClima HAP NS/NU-HAP24T комплект',
    slug: 'neoclima-hap-ns-nu-hap24t',
    categoryId: 'split-neoclima', brand: 'NeoClima', tags: ['neoclima','on-off','hap'],
    images: [IMG.neoclimHAP1, IMG.neoclimHAP2],
    description: 'Сплит-система NeoClima серии HAP. Класс А. On/off модель для просторных помещений до 70 м2. Ионизация воздуха, функция I Feel, двойной фильтр. Хладагент R410A.',
    characteristics: {
      'Базовая мощность кондиционера (охлаждение),BTU': '24 000',
      'Мощность охлаждения, кВт': '7.03',
      'Мощность обогрева, кВт': '7.62',
      'Площадь помещения': '70 м²',
      'Класс энергоэффективности': 'A',
      'Хладагент': 'R410A',
      'Тип управления': 'On/Off',
      'Wi-Fi управление': 'Нет',
      'Уровень шума внутр. блока': '30-45 дБ',
      'EER/COP': '3.05/3.35',
    }
  },
  {
    id: 'p2257212', price: 940, originalPrice: 1034, inStock: true, rating: 4.7, reviewCount: 0,
    name: 'Сплит-система инверторного типа NeoClima Plasma Inverter NS/NU-HAL07FWI комплект',
    slug: 'neoclima-hal-inv-ns-nu-hal07fwi',
    categoryId: 'split-neoclima', brand: 'NeoClima', tags: ['neoclima','inverter','hal'],
    images: [IMG.neoclimHAL1, IMG.neoclimHAL2],
    description: 'Инверторная сплит-система NeoClima Plasma Inverter HAL. Класс А. Японский компрессор, плазменная ионизация воздуха, встроенный Wi-Fi, режим Smart Defrost. Работа в режиме обогрева при -15°С. Хладагент R410A.',
    characteristics: {
      'Базовая мощность кондиционера (охлаждение),BTU': '7 000',
      'Мощность охлаждения, кВт': '2.05',
      'Мощность обогрева, кВт': '2.3',
      'Площадь помещения': '20 м²',
      'Класс энергоэффективности': 'A',
      'Хладагент': 'R410A',
      'Тип управления': 'Инвертор',
      'Wi-Fi управление': 'Встроенный',
      'Рабочая температура обогрева': '-15...+30 °С',
      'Уровень шума внутр. блока': '24-38 дБ',
    }
  },
  {
    id: 'p2257213', price: 1060, originalPrice: 1166, inStock: true, rating: 4.7, reviewCount: 0,
    name: 'Сплит-система инверторного типа NeoClima Plasma Inverter NS/NU-HAL09FWI комплект',
    slug: 'neoclima-hal-inv-ns-nu-hal09fwi',
    categoryId: 'split-neoclima', brand: 'NeoClima', tags: ['neoclima','inverter','hal'],
    images: [IMG.neoclimHAL1, IMG.neoclimHAL2],
    description: 'Инверторная сплит-система NeoClima Plasma Inverter HAL. Класс А. Японский компрессор Rechi/Toshiba, плазменная ионизация, встроенный Wi-Fi (SmartLife). Бесшумная работа от 24 дБ. Обогрев при -15°С. Хладагент R410A.',
    characteristics: {
      'Базовая мощность кондиционера (охлаждение),BTU': '9 000',
      'Мощность охлаждения, кВт': '2.64',
      'Мощность обогрева, кВт': '2.78',
      'Площадь помещения': '25 м²',
      'Класс энергоэффективности': 'A',
      'Хладагент': 'R410A',
      'Тип управления': 'Инвертор',
      'Wi-Fi управление': 'Встроенный',
      'Рабочая температура обогрева': '-15...+30 °С',
      'Уровень шума внутр. блока': '24-38 дБ',
      'EER/COP': '3.21/3.61',
    }
  },
  {
    id: 'p2257214', price: 1290, originalPrice: 1419, inStock: true, rating: 4.7, reviewCount: 0,
    name: 'Сплит-система инверторного типа NeoClima Plasma Inverter NS/NU-HAL12FWI комплект',
    slug: 'neoclima-hal-inv-ns-nu-hal12fwi',
    categoryId: 'split-neoclima', brand: 'NeoClima', tags: ['neoclima','inverter','hal'],
    images: [IMG.neoclimHAL1, IMG.neoclimHAL2],
    description: 'Инверторная сплит-система NeoClima Plasma Inverter HAL. Класс А. Инверторный компрессор, плазменная ионизация, встроенный Wi-Fi. Обогрев помещений до 35 м2 при -15°С. Хладагент R410A.',
    characteristics: {
      'Базовая мощность кондиционера (охлаждение),BTU': '12 000',
      'Мощность охлаждения, кВт': '3.52',
      'Мощность обогрева, кВт': '3.81',
      'Площадь помещения': '35 м²',
      'Класс энергоэффективности': 'A',
      'Хладагент': 'R410A',
      'Тип управления': 'Инвертор',
      'Wi-Fi управление': 'Встроенный',
      'Рабочая температура обогрева': '-15...+30 °С',
      'Уровень шума внутр. блока': '24-41 дБ',
    }
  },
  {
    id: 'p2257215', price: 1840, originalPrice: 2024, inStock: true, rating: 4.7, reviewCount: 0,
    name: 'Сплит-система инверторного типа NeoClima Plasma Inverter NS/NU-HAL18FWI комплект',
    slug: 'neoclima-hal-inv-ns-nu-hal18fwi',
    categoryId: 'split-neoclima', brand: 'NeoClima', tags: ['neoclima','inverter','hal'],
    images: [IMG.neoclimHAL1, IMG.neoclimHAL2],
    description: 'Инверторная сплит-система NeoClima Plasma Inverter HAL. Класс А. Мощность охлаждения 5.15 кВт для помещений до 50 м2. Плазменная ионизация, встроенный Wi-Fi, обогрев при -15°С. Хладагент R410A.',
    characteristics: {
      'Базовая мощность кондиционера (охлаждение),BTU': '18 000',
      'Мощность охлаждения, кВт': '5.15',
      'Мощность обогрева, кВт': '5.50',
      'Площадь помещения': '50 м²',
      'Класс энергоэффективности': 'A',
      'Хладагент': 'R410A',
      'Тип управления': 'Инвертор',
      'Wi-Fi управление': 'Встроенный',
      'Рабочая температура обогрева': '-15...+30 °С',
      'Уровень шума внутр. блока': '26-43 дБ',
    }
  },
  {
    id: 'p2257216', price: 2540, originalPrice: 2794, inStock: true, rating: 4.7, reviewCount: 0,
    name: 'Сплит-система инверторного типа NeoClima Plasma Inverter NS/NU-HAL24FWI комплект',
    slug: 'neoclima-hal-inv-ns-nu-hal24fwi',
    categoryId: 'split-neoclima', brand: 'NeoClima', tags: ['neoclima','inverter','hal'],
    images: [IMG.neoclimHAL1, IMG.neoclimHAL2],
    description: 'Инверторная сплит-система NeoClima Plasma Inverter HAL. Класс А. Мощность охлаждения 7 кВт для больших помещений до 70 м2. Плазменная ионизация, встроенный Wi-Fi. Обогрев при -15°С. Хладагент R410A.',
    characteristics: {
      'Базовая мощность кондиционера (охлаждение),BTU': '24 000',
      'Мощность охлаждения, кВт': '7.03',
      'Мощность обогрева, кВт': '7.62',
      'Площадь помещения': '70 м²',
      'Класс энергоэффективности': 'A',
      'Хладагент': 'R410A',
      'Тип управления': 'Инвертор',
      'Wi-Fi управление': 'Встроенный',
      'Рабочая температура обогрева': '-15...+30 °С',
      'Уровень шума внутр. блока': '28-45 дБ',
    }
  },

  // ==================== ZANUSSI ====================
  {
    id: 'p2257217', price: 780, originalPrice: 858, inStock: true, rating: 4.7, reviewCount: 0,
    name: 'Сплит-система Zanussi Barocco ZACS-07 HB/A22/N1 комплект',
    slug: 'zanussi-barocco-zacs-07-hb-a22-n1',
    categoryId: 'split-zanussi', brand: 'Zanussi', tags: ['zanussi','on-off','barocco'],
    images: [IMG.zanussiHB],
    description: 'Сплит-система Zanussi серии Barocco ZACS HB. Класс А. Классический итальянский дизайн, надёжная on/off технология. Автоматические жалюзи, ночной режим Sleep, режим Turbo, самодиагностика, таймер 24 ч. Хладагент R410A.',
    characteristics: {
      'Базовая мощность кондиционера (охлаждение),BTU': '7 000',
      'Мощность охлаждения, кВт': '2.05',
      'Мощность обогрева, кВт': '2.27',
      'Площадь помещения': '20 м²',
      'Класс энергоэффективности': 'A',
      'Хладагент': 'R410A',
      'Тип управления': 'On/Off',
      'Wi-Fi управление': 'Нет',
      'Уровень шума внутр. блока': '24 дБ',
      'Уровень шума внешн. блока': '48 дБ',
    }
  },
  {
    id: 'p2257218', price: 860, originalPrice: 946, inStock: true, rating: 4.7, reviewCount: 0,
    name: 'Сплит-система Zanussi Barocco ZACS-09 HB/A22/N1 комплект',
    slug: 'zanussi-barocco-zacs-09-hb-a22-n1',
    categoryId: 'split-zanussi', brand: 'Zanussi', tags: ['zanussi','on-off','barocco'],
    images: [IMG.zanussiHB],
    description: 'Сплит-система Zanussi серии Barocco ZACS HB. Класс А. Итальянский дизайн, on/off технология для помещений до 25 м2. Автожалюзи, Turbo, Sleep, самодиагностика, горячий старт, антизамерзание. Хладагент R410A.',
    characteristics: {
      'Базовая мощность кондиционера (охлаждение),BTU': '9 000',
      'Мощность охлаждения, кВт': '2.6',
      'Мощность обогрева, кВт': '2.8',
      'Площадь помещения': '25 м²',
      'Класс энергоэффективности': 'A',
      'Хладагент': 'R410A',
      'Тип управления': 'On/Off',
      'Wi-Fi управление': 'Нет',
      'Уровень шума внутр. блока': '24 дБ',
      'Уровень шума внешн. блока': '48 дБ',
    }
  },
  {
    id: 'p2257219', price: 1080, originalPrice: 1188, inStock: true, rating: 4.7, reviewCount: 0,
    name: 'Сплит-система Zanussi Barocco ZACS-12 HB/A22/N1 комплект',
    slug: 'zanussi-barocco-zacs-12-hb-a22-n1',
    categoryId: 'split-zanussi', brand: 'Zanussi', tags: ['zanussi','on-off','barocco'],
    images: [IMG.zanussiHB],
    description: 'Сплит-система Zanussi серии Barocco ZACS HB. Класс А. Итальянский дизайн, on/off технология для помещений до 35 м2. Автожалюзи, турбо-охлаждение, Sleep, самодиагностика. Хладагент R410A.',
    characteristics: {
      'Базовая мощность кондиционера (охлаждение),BTU': '12 000',
      'Мощность охлаждения, кВт': '3.52',
      'Мощность обогрева, кВт': '3.81',
      'Площадь помещения': '35 м²',
      'Класс энергоэффективности': 'A',
      'Хладагент': 'R410A',
      'Тип управления': 'On/Off',
      'Wi-Fi управление': 'Нет',
      'Уровень шума внутр. блока': '25 дБ',
      'Уровень шума внешн. блока': '50 дБ',
    }
  },
  {
    id: 'p2257220', price: 1540, originalPrice: 1694, inStock: true, rating: 4.7, reviewCount: 0,
    name: 'Сплит-система Zanussi HPF ZACS-18 HPF/A17/N1 комплект',
    slug: 'zanussi-hpf-zacs-18-hpf-a17-n1',
    categoryId: 'split-zanussi', brand: 'Zanussi', tags: ['zanussi','on-off','hpf'],
    images: [IMG.zanussiHPF1],
    description: 'Сплит-система Zanussi серии HPF (Heat Pump Function). Класс А. On/off для помещений до 50 м2. Усиленная функция обогрева, турбо-охлаждение, Sleep, самодиагностика, таймер. Хладагент R410A.',
    characteristics: {
      'Базовая мощность кондиционера (охлаждение),BTU': '18 000',
      'Мощность охлаждения, кВт': '5.0',
      'Мощность обогрева, кВт': '5.5',
      'Площадь помещения': '50 м²',
      'Класс энергоэффективности': 'A',
      'Хладагент': 'R410A',
      'Тип управления': 'On/Off',
      'Wi-Fi управление': 'Нет',
      'Уровень шума внутр. блока': '28 дБ',
      'Уровень шума внешн. блока': '53 дБ',
    }
  },
  {
    id: 'p2257221', price: 2210, originalPrice: 2431, inStock: true, rating: 4.7, reviewCount: 0,
    name: 'Сплит-система Zanussi HPF ZACS-24 HPF/A17/N1 комплект',
    slug: 'zanussi-hpf-zacs-24-hpf-a17-n1',
    categoryId: 'split-zanussi', brand: 'Zanussi', tags: ['zanussi','on-off','hpf'],
    images: [IMG.zanussiHPF1],
    description: 'Мощная сплит-система Zanussi серии HPF для больших помещений до 70 м2. Класс А. Усиленная функция обогрева, on/off технология. Турбо, Sleep, самодиагностика. Хладагент R410A.',
    characteristics: {
      'Базовая мощность кондиционера (охлаждение),BTU': '24 000',
      'Мощность охлаждения, кВт': '7.0',
      'Мощность обогрева, кВт': '7.5',
      'Площадь помещения': '70 м²',
      'Класс энергоэффективности': 'A',
      'Хладагент': 'R410A',
      'Тип управления': 'On/Off',
      'Wi-Fi управление': 'Нет',
      'Уровень шума внутр. блока': '30 дБ',
      'Уровень шума внешн. блока': '56 дБ',
    }
  },
  {
    id: 'p2257222', price: 970, originalPrice: 1067, inStock: true, rating: 4.7, reviewCount: 0,
    name: 'Сплит-система инверторного типа Zanussi ZACS/I-07 HPF/A17/N1 комплект',
    slug: 'zanussi-inv-zacs-i-07-hpf-a17-n1',
    categoryId: 'split-zanussi', brand: 'Zanussi', tags: ['zanussi','inverter','hpf'],
    images: [IMG.zanussiINV1, IMG.zanussiINV2],
    description: 'Инверторная сплит-система Zanussi ZACS/I HPF. Класс А. Инверторный компрессор, функция Heat Pump (усиленный обогрев), ночной режим, Turbo, самоочистка, таймер. Работа при -15°С. Хладагент R410A.',
    characteristics: {
      'Базовая мощность кондиционера (охлаждение),BTU': '7 000',
      'Мощность охлаждения, кВт': '2.05',
      'Мощность обогрева, кВт': '2.5',
      'Площадь помещения': '20 м²',
      'Класс энергоэффективности': 'A',
      'Хладагент': 'R410A',
      'Тип управления': 'Инвертор',
      'Wi-Fi управление': 'Нет',
      'Рабочая температура обогрева': '-15...+24 °С',
      'Уровень шума внутр. блока': '21 дБ',
    }
  },
  {
    id: 'p2257223', price: 1100, originalPrice: 1210, inStock: true, rating: 4.7, reviewCount: 0,
    name: 'Сплит-система инверторного типа Zanussi ZACS/I-09 HPF/A17/N1 комплект',
    slug: 'zanussi-inv-zacs-i-09-hpf-a17-n1',
    categoryId: 'split-zanussi', brand: 'Zanussi', tags: ['zanussi','inverter','hpf'],
    images: [IMG.zanussiINV1, IMG.zanussiINV2],
    description: 'Инверторная сплит-система Zanussi ZACS/I HPF. Класс А. Инверторный компрессор, усиленная функция обогрева HPF, ночной режим, Turbo, самоочистка, самодиагностика. Работа на обогрев при -15°С. Хладагент R410A.',
    characteristics: {
      'Базовая мощность кондиционера (охлаждение),BTU': '9 000',
      'Мощность охлаждения, кВт': '3.4',
      'Мощность обогрева, кВт': '3.5',
      'Площадь помещения': '25 м²',
      'Класс энергоэффективности': 'A',
      'Хладагент': 'R410A',
      'Тип управления': 'Инвертор',
      'Wi-Fi управление': 'Нет',
      'Рабочая температура обогрева': '-15...+24 °С',
      'Уровень шума внутр. блока': '21 дБ',
    }
  },
  {
    id: 'p2257224', price: 1380, originalPrice: 1518, inStock: true, rating: 4.7, reviewCount: 0,
    name: 'Сплит-система инверторного типа Zanussi ZACS/I-12 HPF/A17/N1 комплект',
    slug: 'zanussi-inv-zacs-i-12-hpf-a17-n1',
    categoryId: 'split-zanussi', brand: 'Zanussi', tags: ['zanussi','inverter','hpf'],
    images: [IMG.zanussiINV1, IMG.zanussiINV2],
    description: 'Инверторная сплит-система Zanussi ZACS/I HPF. Класс А. Инверторный компрессор, функция HPF, турбо-режим. Тихая работа от 21 дБ. Обогрев при -15°С. Хладагент R410A.',
    characteristics: {
      'Базовая мощность кондиционера (охлаждение),BTU': '12 000',
      'Мощность охлаждения, кВт': '4.1',
      'Мощность обогрева, кВт': '4.5',
      'Площадь помещения': '35 м²',
      'Класс энергоэффективности': 'A',
      'Хладагент': 'R410A',
      'Тип управления': 'Инвертор',
      'Wi-Fi управление': 'Нет',
      'Рабочая температура обогрева': '-15...+24 °С',
      'Уровень шума внутр. блока': '21 дБ',
    }
  },
  {
    id: 'p2257225', price: 1950, originalPrice: 2145, inStock: true, rating: 4.7, reviewCount: 0,
    name: 'Сплит-система инверторного типа Zanussi ZACS/I-18 HPF/A17/N1 комплект',
    slug: 'zanussi-inv-zacs-i-18-hpf-a17-n1',
    categoryId: 'split-zanussi', brand: 'Zanussi', tags: ['zanussi','inverter','hpf'],
    images: [IMG.zanussiINV1, IMG.zanussiINV2],
    description: 'Инверторная сплит-система Zanussi ZACS/I HPF. Класс А. Мощность охлаждения 5.5 кВт для помещений до 50 м2. Инверторный компрессор, HPF. Обогрев при -15°С. Хладагент R410A.',
    characteristics: {
      'Базовая мощность кондиционера (охлаждение),BTU': '18 000',
      'Мощность охлаждения, кВт': '5.5',
      'Мощность обогрева, кВт': '6.0',
      'Площадь помещения': '50 м²',
      'Класс энергоэффективности': 'A',
      'Хладагент': 'R410A',
      'Тип управления': 'Инвертор',
      'Wi-Fi управление': 'Нет',
      'Рабочая температура обогрева': '-15...+24 °С',
      'Уровень шума внутр. блока': '22 дБ',
    }
  },
  {
    id: 'p2257226', price: 2700, originalPrice: 2970, inStock: true, rating: 4.7, reviewCount: 0,
    name: 'Сплит-система инверторного типа Zanussi ZACS/I-24 HPF/A17/N1 комплект',
    slug: 'zanussi-inv-zacs-i-24-hpf-a17-n1',
    categoryId: 'split-zanussi', brand: 'Zanussi', tags: ['zanussi','inverter','hpf'],
    images: [IMG.zanussiINV1, IMG.zanussiINV2],
    description: 'Инверторная сплит-система Zanussi ZACS/I HPF. Класс А. Мощность охлаждения 7 кВт для больших помещений до 70 м2. Инверторный компрессор, HPF. Обогрев при -15°С. Хладагент R410A.',
    characteristics: {
      'Базовая мощность кондиционера (охлаждение),BTU': '24 000',
      'Мощность охлаждения, кВт': '7.0',
      'Мощность обогрева, кВт': '7.8',
      'Площадь помещения': '70 м²',
      'Класс энергоэффективности': 'A',
      'Хладагент': 'R410A',
      'Тип управления': 'Инвертор',
      'Wi-Fi управление': 'Нет',
      'Рабочая температура обогрева': '-15...+24 °С',
      'Уровень шума внутр. блока': '24 дБ',
    }
  },

  // ==================== LORIOT ====================
  {
    id: 'p2257227', price: 790, originalPrice: 869, inStock: true, rating: 4.7, reviewCount: 0,
    name: 'Сплит-система Loriot Sky LAC-07AS комплект',
    slug: 'loriot-sky-lac-07as',
    categoryId: 'split-loriot', brand: 'Loriot', tags: ['loriot','on-off','sky'],
    images: [IMG.loriotSky],
    description: 'Сплит-система Loriot серии Sky LAC-AS. Класс А. Бюджетная on/off модель для помещений до 20 м2. Таймер 24 ч, автоперезапуск, режимы охлаждения, обогрева, осушения, вентиляции. Хладагент R410A.',
    characteristics: {
      'Базовая мощность кондиционера (охлаждение),BTU': '7 000',
      'Мощность охлаждения, кВт': '2.0',
      'Мощность обогрева, кВт': '2.2',
      'Площадь помещения': '20 м²',
      'Класс энергоэффективности': 'A',
      'Хладагент': 'R410A',
      'Тип управления': 'On/Off',
      'Wi-Fi управление': 'Нет',
      'Уровень шума внутр. блока': '34-40 дБ',
    }
  },
  {
    id: 'p2257228', price: 970, originalPrice: 1067, inStock: true, rating: 4.7, reviewCount: 0,
    name: 'Сплит-система Loriot Sky LAC-09AS комплект',
    slug: 'loriot-sky-lac-09as',
    categoryId: 'split-loriot', brand: 'Loriot', tags: ['loriot','on-off','sky'],
    images: [IMG.loriotSky],
    description: 'Сплит-система Loriot серии Sky LAC-AS. Класс А. Надёжная on/off модель для помещений до 25 м2. Таймер 24 ч, автоперезапуск, охлаждение, обогрев, осушение, вентиляция. Хладагент R410A.',
    characteristics: {
      'Базовая мощность кондиционера (охлаждение),BTU': '9 000',
      'Мощность охлаждения, кВт': '2.64',
      'Мощность обогрева, кВт': '2.8',
      'Площадь помещения': '25 м²',
      'Класс энергоэффективности': 'A',
      'Хладагент': 'R410A',
      'Тип управления': 'On/Off',
      'Wi-Fi управление': 'Нет',
      'Уровень шума внутр. блока': '34-40 дБ',
    }
  },
  {
    id: 'p2257229', price: 1390, originalPrice: 1529, inStock: true, rating: 4.7, reviewCount: 0,
    name: 'Сплит-система Loriot Neon LAC-07TA комплект',
    slug: 'loriot-neon-lac-07ta',
    categoryId: 'split-loriot', brand: 'Loriot', tags: ['loriot','on-off','neon'],
    images: [IMG.loriotNeon1, IMG.loriotNeon2],
    description: 'Сплит-система Loriot серии Neon LAC-TA. Класс А. Стильный дизайн, on/off технология. Ионизация воздуха, Turbo, ECO, I Feel, 3-ступенчатый фильтр (фотокаталитический, угольный, катехиновый), защита от скачков напряжения (от 185В). Хладагент R410A.',
    characteristics: {
      'Базовая мощность кондиционера (охлаждение),BTU': '7 000',
      'Мощность охлаждения, кВт': '2.0',
      'Мощность обогрева, кВт': '2.2',
      'Площадь помещения': '20 м²',
      'Класс энергоэффективности': 'A',
      'Хладагент': 'R410A',
      'Тип управления': 'On/Off',
      'Wi-Fi управление': 'Нет',
      'Уровень шума внутр. блока': '22-34 дБ',
      'Рабочая температура обогрева': '-7...+24 °С',
    }
  },
  {
    id: 'p2257230', price: 2010, originalPrice: 2211, inStock: true, rating: 4.7, reviewCount: 0,
    name: 'Сплит-система Loriot Neon LAC-09TA комплект',
    slug: 'loriot-neon-lac-09ta',
    categoryId: 'split-loriot', brand: 'Loriot', tags: ['loriot','on-off','neon'],
    images: [IMG.loriotNeon1, IMG.loriotNeon2],
    description: 'Сплит-система Loriot серии Neon LAC-TA. Класс А. Ионизация воздуха, функция I Feel, Turbo, ECO, 4D-управление потоком воздуха, 3-ступенчатый фильтр. Стабилизатор напряжения (от 185В). Хладагент R410A.',
    characteristics: {
      'Базовая мощность кондиционера (охлаждение),BTU': '9 000',
      'Мощность охлаждения, кВт': '2.64',
      'Мощность обогрева, кВт': '2.8',
      'Площадь помещения': '25 м²',
      'Класс энергоэффективности': 'A',
      'Хладагент': 'R410A',
      'Тип управления': 'On/Off',
      'Wi-Fi управление': 'Нет',
      'Уровень шума внутр. блока': '22-34 дБ',
      'Рабочая температура обогрева': '-7...+24 °С',
    }
  },
  {
    id: 'p2257231', price: 980, originalPrice: 1078, inStock: true, rating: 4.7, reviewCount: 0,
    name: 'Сплит-система инверторного типа Loriot LAC IN-07TA комплект',
    slug: 'loriot-inv-lac-in-07ta',
    categoryId: 'split-loriot', brand: 'Loriot', tags: ['loriot','inverter'],
    images: [IMG.loriotIN1, IMG.loriotIN2],
    description: 'Инверторная сплит-система Loriot LAC IN-TA. Класс А. Инверторный компрессор, ионизация воздуха, датчик движения, функция I Feel, Turbo, ночной режим, самодиагностика, автоперезапуск. Хладагент R410A.',
    characteristics: {
      'Базовая мощность кондиционера (охлаждение),BTU': '7 000',
      'Мощность охлаждения, кВт': '2.0',
      'Мощность обогрева, кВт': '2.2',
      'Площадь помещения': '20 м²',
      'Класс энергоэффективности': 'A',
      'Хладагент': 'R410A',
      'Тип управления': 'Инвертор',
      'Wi-Fi управление': 'Нет',
      'Уровень шума внутр. блока': '22-34 дБ',
    }
  },
  {
    id: 'p2257232', price: 1180, originalPrice: 1298, inStock: true, rating: 4.7, reviewCount: 0,
    name: 'Сплит-система инверторного типа Loriot LAC IN-09TA комплект',
    slug: 'loriot-inv-lac-in-09ta',
    categoryId: 'split-loriot', brand: 'Loriot', tags: ['loriot','inverter'],
    images: [IMG.loriotIN1, IMG.loriotIN2],
    description: 'Инверторная сплит-система Loriot LAC IN-TA. Класс А. Инверторный компрессор для помещений до 25 м2. Ионизация воздуха, датчик движения, Turbo, ночной режим. Хладагент R410A.',
    characteristics: {
      'Базовая мощность кондиционера (охлаждение),BTU': '9 000',
      'Мощность охлаждения, кВт': '2.64',
      'Мощность обогрева, кВт': '2.8',
      'Площадь помещения': '25 м²',
      'Класс энергоэффективности': 'A',
      'Хладагент': 'R410A',
      'Тип управления': 'Инвертор',
      'Wi-Fi управление': 'Нет',
      'Уровень шума внутр. блока': '22-34 дБ',
    }
  },
  {
    id: 'p2257233', price: 1690, originalPrice: 1859, inStock: true, rating: 4.7, reviewCount: 0,
    name: 'Сплит-система инверторного типа Loriot AQI LAC-18AQI комплект',
    slug: 'loriot-aqi-lac-18aqi',
    categoryId: 'split-loriot', brand: 'Loriot', tags: ['loriot','inverter','aqi'],
    images: [IMG.loriotAQI],
    description: 'Инверторная сплит-система Loriot серии AQI Skyline. Класс А. Инверторный компрессор, встроенный датчик качества воздуха (AQI), ионизация, Wi-Fi управление, экономичный режим. Мощность охлаждения 5 кВт для помещений до 50 м2. Хладагент R32.',
    characteristics: {
      'Базовая мощность кондиционера (охлаждение),BTU': '18 000',
      'Мощность охлаждения, кВт': '5.0',
      'Мощность обогрева, кВт': '5.5',
      'Площадь помещения': '50 м²',
      'Класс энергоэффективности': 'A',
      'Хладагент': 'R32',
      'Тип управления': 'Инвертор',
      'Wi-Fi управление': 'Встроенный',
      'Датчик качества воздуха': 'AQI',
      'Уровень шума внутр. блока': '22-40 дБ',
    }
  },
];

// Build a map from ID to new line content
const updates = new Map();
for (const p of products) {
  updates.set(p.id, makeLine(p));
}

let updatedCount = 0;
for (let i = 0; i < lines.length; i++) {
  for (const [id, newLine] of updates.entries()) {
    if (lines[i].includes(`"${id}"`)) {
      lines[i] = newLine;
      updates.delete(id);
      updatedCount++;
      break;
    }
  }
}

if (updates.size > 0) {
  console.log('WARNING: Could not find lines for IDs:', [...updates.keys()].join(', '));
}

fs.writeFileSync(filePath, lines.join('\n'), 'utf8');
console.log(`Successfully updated ${updatedCount} products.`);
