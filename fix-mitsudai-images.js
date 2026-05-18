const fs = require('fs');
const path = require('path');

const dataFile = path.join(__dirname, 'src/data/products.json');
const products = JSON.parse(fs.readFileSync(dataFile, 'utf-8'));

// Real images from interpride.by
const MDI_IMAGES = [
  'https://interpride.by/wp-content/uploads/2023/04/inv2-600x600-2-1.png',
  'https://interpride.by/wp-content/uploads/2023/04/inv-600x600-1.png',
  'https://interpride.by/wp-content/uploads/2023/04/risunok1-600x600-1.png',
];
const MD_IMAGES = [
  'https://interpride.by/wp-content/uploads/2023/03/classic-split-system-sento-2022-02.png',
  'https://interpride.by/wp-content/uploads/2023/03/risunok1-600x600-1.png',
  'https://interpride.by/wp-content/uploads/2023/03/cover.webp',
];

// Series descriptions
function getSeriesInfo(article) {
  const isMDI = article.startsWith('MDI-');
  const isSNE = article.includes('SNE');
  if (isMDI && isSNE) return { series: 'SENTO Inverter Energy', seriesRu: 'SENTO DC-Inverter (серия Energy)', images: MDI_IMAGES };
  if (isMDI && !isSNE) return { series: 'SENTO Inverter', seriesRu: 'SENTO DC-Inverter', images: MDI_IMAGES };
  if (!isMDI && isSNE) return { series: 'SENTO Energy', seriesRu: 'SENTO On/Off (серия Energy)', images: MD_IMAGES };
  return { series: 'SENTO Classic', seriesRu: 'SENTO Classic On/Off', images: MD_IMAGES };
}

function btuFromArticle(article) {
  if (article.includes('07')) return '7 000';
  if (article.includes('09')) return '9 000';
  if (article.includes('12')) return '12 000';
  if (article.includes('18')) return '18 000';
  if (article.includes('24')) return '24 000';
  return '';
}

let updated = 0;
for (const p of products) {
  if (p.brand !== 'Mitsudai') continue;

  // Get article from product id: p-mdi-sne07ai → MDI-SNE07AI
  const article = p.id.replace('p-', '').replace(/-/g, '').toUpperCase()
    .replace('MDI', 'MDI-').replace('MDISNE', 'MDI-SNE').replace('MDISNC', 'MDI-SNC')
    .replace('MDSNE', 'MD-SNE').replace('MDSNC', 'MD-SNC');

  // Better: extract from name
  const nameMatch = p.name.match(/Mitsudai ([\w\-]+) комплект/);
  if (!nameMatch) continue;
  const art = nameMatch[1];

  const info = getSeriesInfo(art);
  const btu = btuFromArticle(art);
  const isMDI = art.startsWith('MDI-');

  p.images = info.images;

  const cooling = p.characteristics['Мощность охлаждения, кВт'];
  const heating = p.characteristics['Мощность обогрева, кВт'];
  const area = p.characteristics['Эффективен для помещ. площадью'];

  p.description = `Инверторная сплит-система Mitsudai ${info.seriesRu} ${art}. Мощность охлаждения: ${cooling} кВт, обогрева: ${heating} кВт. ${btu ? btu+' BTU, ' : ''}${area ? 'рассчитана '+area+'. ' : ''}Класс энергоэффективности А/А. Хладагент R32. Официальная гарантия.`;
  p.characteristics['Серия'] = info.seriesRu;
  p.characteristics['Хладагент'] = 'R32';
  if (isMDI) p.characteristics['Инверторная технология'] = 'Да';

  updated++;
}

fs.writeFileSync(dataFile, JSON.stringify(products));
console.log('Updated', updated, 'Mitsudai products with real images');
