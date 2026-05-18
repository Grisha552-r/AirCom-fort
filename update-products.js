const fs = require('fs');
const path = require('path');

const dataFile = path.join(__dirname, 'src/data/products.json');
let products = JSON.parse(fs.readFileSync(dataFile, 'utf-8'));

// 1. Remove GREE and Green products
const before = products.length;
products = products.filter(p => p.brand !== 'GREE' && p.brand !== 'Green');
console.log(`Removed ${before - products.length} products (GREE + Green). Remaining: ${products.length}`);

// 2. Add Mitsudai products
// Series descriptions:
// MDI-SNE = newer inverter "Energy" (нов. серия, более эффективная)
// MDI-SNC = newer inverter "Classic"
// MD-SNE = inverter "Energy" (стандарт)
// MD-SNC = inverter "Classic"

const IMAGE = 'https://interpride.by/upload/iblock/mitsudai-split.jpg';
// Use climate-montazh placeholder since interpride image URL is unknown
const IMG_MITSUDAI = 'https://climate-montazh.by/wp-content/uploads/2024/01/konditsioner-ballu-bsagi-igreen-pro-dc-inverter.500x500.jpeg';

function btu(code) {
  if (code.includes('07')) return '7 000';
  if (code.includes('09')) return '9 000';
  if (code.includes('12')) return '12 000';
  if (code.includes('18')) return '18 000';
  if (code.includes('24')) return '24 000';
  return '';
}

function area(code) {
  if (code.includes('07')) return 'до 20 м²';
  if (code.includes('09')) return 'до 25 м²';
  if (code.includes('12')) return 'до 35 м²';
  if (code.includes('18')) return 'до 50 м²';
  if (code.includes('24')) return 'до 70 м²';
  return '';
}

function slugify(s) {
  return s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
}

const mitsudaiData = [
  // MDI-SNE series (новая, повышенная энергоэффективность)
  { article: 'MDI-SNE07AI', cooling: '2,20', heating: '2,30', noise: '23/26/31/34/37', dims: '698×255×190', weight: '6,5', price: 1165 },
  { article: 'MDI-SNE09AI', cooling: '2,65', heating: '2,78', noise: '23/26/31/34/37', dims: '698×255×190', weight: '6,5', price: 1254 },
  { article: 'MDI-SNE12AI', cooling: '3,52', heating: '3,66', noise: '24/27/32/36/39', dims: '777×250×201', weight: '7,5', price: 1475 },
  // MDI-SNC series (новая, классическая)
  { article: 'MDI-SNC07AI', cooling: '2,10', heating: '2,30', noise: '24/27/32/35/38', dims: '698×255×190', weight: '6,5', price: 1146 },
  { article: 'MDI-SNC09AI', cooling: '2,55', heating: '2,72', noise: '24/27/32/35/38', dims: '698×255×190', weight: '6,5', price: 1235 },
  { article: 'MDI-SNC12AI', cooling: '3,40', heating: '3,54', noise: '26/28/33/37/39', dims: '777×250×201', weight: '7,5', price: 1456 },
  // MD-SNE series
  { article: 'MD-SNE07AI', cooling: '2,15', heating: '2,25', noise: '24/27/29/33/34', dims: '698×255×190', weight: '6,5', price: 854 },
  { article: 'MD-SNE09AI', cooling: '2,65', heating: '2,70', noise: '24/27/29/33/35', dims: '698×255×190', weight: '6,5', price: 929 },
  { article: 'MD-SNE12AI', cooling: '3,45', heating: '3,65', noise: '27/30/33/36/38', dims: '777×250×201', weight: '7,2', price: 1278 },
  { article: 'MD-SNE18AI', cooling: '5,10', heating: '5,25', noise: '32/34/38/40/43', dims: '910×294×206', weight: '10,0', price: 2120 },
  { article: 'MD-SNE24AI', cooling: '7,05', heating: '7,20', noise: '33/37/38/41/43', dims: '910×294×206', weight: '10,0', price: 2731 },
  // MD-SNC series
  { article: 'MD-SNC07AI', cooling: '2,05', heating: '2,20', noise: '24/27/29/33/34', dims: '698×255×190', weight: '6,5', price: 835 },
  { article: 'MD-SNC09AI', cooling: '2,65', heating: '2,70', noise: '24/27/29/33/35', dims: '698×255×190', weight: '6,5', price: 910 },
  { article: 'MD-SNC12AI', cooling: '3,45', heating: '3,65', noise: '27/30/33/36/38', dims: '777×250×201', weight: '7,2', price: 1259 },
  { article: 'MD-SNC18AI', cooling: '5,00', heating: '5,15', noise: '32/34/38/40/43', dims: '910×294×206', weight: '10,0', price: 2088 },
  { article: 'MD-SNC24AI', cooling: '6,80', heating: '6,90', noise: '33/37/38/41/43', dims: '910×294×206', weight: '10,0', price: 2699 },
];

const mitsudaiProducts = mitsudaiData.map(d => {
  const series = d.article.includes('MDI-') ?
    (d.article.includes('SNE') ? 'Mitsudai MDI-SNE Inverter' : 'Mitsudai MDI-SNC Inverter') :
    (d.article.includes('SNE') ? 'Mitsudai MD-SNE Inverter' : 'Mitsudai MD-SNC Inverter');

  const btuVal = btu(d.article);
  const areaVal = area(d.article);

  return {
    id: 'p-' + d.article.toLowerCase().replace(/[^a-z0-9]/g, '-'),
    name: `Сплит-система инверторного типа Mitsudai ${d.article} комплект`,
    slug: slugify('mitsudai-' + d.article),
    categoryId: 'split-mitsudai',
    price: d.price,
    rating: 4.5,
    reviewCount: 0,
    images: ['https://climate-montazh.by/wp-content/uploads/2024/01/konditsioner-ballu-bsagi-igreen-pro-dc-inverter.500x500.jpeg'],
    description: `Инверторная сплит-система ${series} ${d.article}. Мощность охлаждения: ${d.cooling} кВт. Мощность обогрева: ${d.heating} кВт. Класс энергоэффективности А/А. Официальная гарантия.`,
    characteristics: {
      'Базовая мощность кондиционера (охлаждение),BTU': btuVal + ' BTU',
      'Мощность охлаждения, кВт': d.cooling,
      'Мощность обогрева, кВт': d.heating,
      'Уровень шума внутр. блока, дБ': d.noise,
      'Класс энергоэффективности': 'А/А',
      'Размеры внутреннего блока, мм': d.dims,
      'Масса нетто, кг': d.weight,
      'Хладагент': 'R32',
      'Тип управления': 'Инвертор',
      'Эффективен для помещ. площадью': areaVal,
    },
    inStock: true,
    isNew: true,
    isFeatured: false,
    brand: 'Mitsudai',
    tags: ['mitsudai', 'inverter', 'сплит-система'],
  };
});

products.push(...mitsudaiProducts);
console.log(`Added ${mitsudaiProducts.length} Mitsudai products. Total: ${products.length}`);

// Save
fs.writeFileSync(dataFile, JSON.stringify(products));
console.log('Saved products.json');

// Print brand stats
const brands = {};
products.forEach(p => { brands[p.brand] = (brands[p.brand]||0)+1; });
console.log('Brands:', JSON.stringify(brands, null, 2));
