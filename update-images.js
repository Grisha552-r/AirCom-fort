const fs = require('fs');
const path = require('path');

const STORE_PATH = path.join(__dirname, 'src', 'lib', 'store.ts');
const PLACEHOLDER = 'https://rkcdn.ru/products/d04e8c84-44aa-11ed-b732-005056013a69/src.jpg';

const imageUpdates = {
  // Hitachi SHIRATAMA
  "p2257096": "https://images.breez.ru/catalog/hitachi/shiratama/shiratama-01.png",
  "p2257097": "https://images.breez.ru/catalog/hitachi/shiratama/shiratama-01.png",
  "p2257098": "https://images.breez.ru/catalog/hitachi/shiratama/shiratama-01.png",
  "p2257099": "https://images.breez.ru/catalog/hitachi/shiratama/shiratama-01.png",
  // Hitachi X-COMFORT
  "p2257100": "https://images.breez.ru/catalog/hitachi/x-comfort/x-comfort-01.png",
  "p2257101": "https://images.breez.ru/catalog/hitachi/x-comfort/x-comfort-01.png",
  "p2257102": "https://images.breez.ru/catalog/hitachi/x-comfort/x-comfort-01.png",
  "p2257103": "https://images.breez.ru/catalog/hitachi/x-comfort/x-comfort-01.png",
  // Ecoclima NOVA LINE INVERTER
  "p2257104": "https://klimatproff.ru/pictures/product/big/74719_big.jpg",
  "p2257105": "https://klimatproff.ru/pictures/product/big/74719_big.jpg",
  "p2257106": "https://cyber-climat.ru/wp-content/uploads/2025/03/nova-line-inverter-b.jpg",
  "p2257107": "https://klimatproff.ru/pictures/product/big/74719_big.jpg",
  // Ecoclima FROST LINE
  "p2257108": "https://cyber-climat.ru/wp-content/uploads/2025/03/nova-line-inverter-b.jpg",
  // Royal Clima ROYAL FRESH
  "p2257109": "https://royal-clima.com.ru/image/cache/catalog/111/231/w09ab9z4iekan2r90y3mczpin6snwatp-500x500.jpg",
  "p2257110": "https://royal-clima.com.ru/image/cache/catalog/111/231/w09ab9z4iekan2r90y3mczpin6snwatp-500x500.jpg",
  // Royal Clima ROYAL FRESH STANDARD
  "p2257111": "https://royal-clima.com.ru/image/cache/catalog/product-img/RCI-RFS28HN/2023_RC_Fresh_Standart_004-1-500x500.png",
  "p2257112": "https://royal-clima.com.ru/image/cache/catalog/product-img/RCI-RFS28HN/2023_RC_Fresh_Standart_004-1-500x500.png",
  // Royal Clima SUPREMO NERO
  "p2257113": "https://royal-clima.com.ru/image/cache/catalog/product-img/ROYAL_CLIMA/rci-rsn75hn/rci-rsn75hn-500x500.png",
  "p2257114": "https://royal-clima.com.ru/image/cache/catalog/product-img/ROYAL_CLIMA/rci-rsn75hn/rci-rsn75hn-500x500.png",
  "p2257115": "https://royal-clima.com.ru/image/cache/catalog/product-img/ROYAL_CLIMA/rci-rsn75hn/rci-rsn75hn-500x500.png",
  "p2257116": "https://royal-clima.com.ru/image/cache/catalog/product-img/ROYAL_CLIMA/rci-rsn75hn/rci-rsn75hn-500x500.png",
  // Royal Clima SUPREMO BLANCO
  "p2257117": "https://royal-clima.com.ru/image/cache/catalog/product-img/ROYAL_CLIMA/rci-rsb30hn/rci-rsb30hn-800x800.png",
  "p2257118": "https://royal-clima.com.ru/image/cache/catalog/product-img/ROYAL_CLIMA/rci-rsb30hn/rci-rsb30hn-800x800.png",
  "p2257119": "https://royal-clima.com.ru/image/cache/catalog/product-img/ROYAL_CLIMA/rci-rsb30hn/rci-rsb30hn-800x800.png",
  "p2257120": "https://royal-clima.com.ru/image/cache/catalog/product-img/ROYAL_CLIMA/rci-rsb30hn/rci-rsb30hn-800x800.png",
  // Royal Clima RENAISSANCE DC EU (inverter)
  "p2257121": "https://royal-clima.com.ru/image/cache/catalog/product-img/RC-RNS22HN/2021_RC_Renaissance_001-500x500.png",
  // Royal Clima RENAISSANCE INVERTER
  "p2257122": "https://royal-clima.com.ru/image/cache/catalog/product-img/RC-RNS22HN/2021_RC_Renaissance_001-500x500.png",
  "p2257123": "https://royal-clima.com.ru/image/cache/catalog/product-img/RC-RNS22HN/2021_RC_Renaissance_001-500x500.png",
  // Royal Clima ATTICA NERO inverter
  "p2257124": "https://royal-clima.com.ru/image/cache/catalog/product-img/RC-AN22HN/2022_RC_ATTICA_Nero_Ionizer_front-500x500.png",
  // Royal Clima GRIDA DC EU
  "p2257125": "https://royal-clima.com.ru/image/cache/catalog/product-img/RC-GR22HN/RC_GRIDA-Front-500x500.png",
  "p2257126": "https://royal-clima.com.ru/image/cache/catalog/product-img/RC-GR22HN/RC_GRIDA-Front-500x500.png",
  "p2257127": "https://royal-clima.com.ru/image/cache/catalog/product-img/RC-GR22HN/RC_GRIDA-Front-500x500.png",
  "p2257128": "https://royal-clima.com.ru/image/cache/catalog/product-img/RC-GR22HN/RC_GRIDA-Front-500x500.png",
  "p2257129": "https://royal-clima.com.ru/image/cache/catalog/product-img/RC-GR22HN/RC_GRIDA-Front-500x500.png",
  // Royal Clima PERFETTO DC EU
  "p2257130": "https://royal-clima.com.ru/image/cache/catalog/product-img/RCI-PFC24HN/2022_RC_PERFETTO_inv_34-2_grey-500x500.png",
  "p2257131": "https://royal-clima.com.ru/image/cache/catalog/product-img/RCI-PFC24HN/2022_RC_PERFETTO_inv_34-2_grey-500x500.png",
  "p2257132": "https://royal-clima.com.ru/image/cache/catalog/product-img/RCI-PFC24HN/2022_RC_PERFETTO_inv_34-2_grey-500x500.png",
  "p2257133": "https://royal-clima.com.ru/image/cache/catalog/product-img/RCI-PFC24HN/2022_RC_PERFETTO_inv_34-2_grey-500x500.png",
  "p2257134": "https://royal-clima.com.ru/image/cache/catalog/product-img/RCI-PFC24HN/2022_RC_PERFETTO_inv_34-2_grey-500x500.png",
  // Royal Clima FELICITA INVERTER 2026
  "p2257135": "https://royal.com.ru/upload/iblock/d05/ncdld7ts4endy5r13451w4omi86e9fj2.jpg",
  "p2257136": "https://royal.com.ru/upload/iblock/d05/ncdld7ts4endy5r13451w4omi86e9fj2.jpg",
  "p2257137": "https://royal.com.ru/upload/iblock/d05/ncdld7ts4endy5r13451w4omi86e9fj2.jpg",
  // Royal Clima FELICITA INVERTER
  "p2257138": "https://royal.com.ru/upload/iblock/d05/ncdld7ts4endy5r13451w4omi86e9fj2.jpg",
  "p2257139": "https://royal.com.ru/upload/iblock/d05/ncdld7ts4endy5r13451w4omi86e9fj2.jpg",
  "p2257140": "https://royal.com.ru/upload/iblock/d05/ncdld7ts4endy5r13451w4omi86e9fj2.jpg",
  "p2257141": "https://royal.com.ru/upload/iblock/d05/ncdld7ts4endy5r13451w4omi86e9fj2.jpg",
  "p2257142": "https://royal.com.ru/upload/iblock/d05/ncdld7ts4endy5r13451w4omi86e9fj2.jpg",
  // Royal Clima TRIUMPH INVERTER
  "p2257143": "https://royal-clima.com.ru/image/cache/catalog/product-img/RCI-TWN22HN/Render_Triumph_Inverter_Royal_Clima_001-500x500.png",
  // Royal Clima TRIUMPH LITE INVERTER
  "p2257144": "https://royal.com.ru/upload/resize_cache/iblock/79b/450_450_1/h9grdrjyou812ot1lrnmi2ji45ue6vyc.jpg",
  "p2257145": "https://royal.com.ru/upload/resize_cache/iblock/79b/450_450_1/h9grdrjyou812ot1lrnmi2ji45ue6vyc.jpg",
  "p2257146": "https://royal.com.ru/upload/resize_cache/iblock/79b/450_450_1/h9grdrjyou812ot1lrnmi2ji45ue6vyc.jpg",
  // Royal Clima GLORIA INVERTER
  "p2257147": "https://royal-clima.com.ru/image/cache/catalog/product-img/RCI-GL22HN/_Render_Gloria_Inverter_Royal_Clima_001-500x500.png",
  "p2257148": "https://royal-clima.com.ru/image/cache/catalog/product-img/RCI-GL22HN/_Render_Gloria_Inverter_Royal_Clima_001-500x500.png",
  "p2257149": "https://royal-clima.com.ru/image/cache/catalog/product-img/RCI-GL22HN/_Render_Gloria_Inverter_Royal_Clima_001-500x500.png",
  "p2257150": "https://royal-clima.com.ru/image/cache/catalog/product-img/RCI-GL22HN/_Render_Gloria_Inverter_Royal_Clima_001-500x500.png",
  "p2257151": "https://royal-clima.com.ru/image/cache/catalog/product-img/RCI-GL22HN/_Render_Gloria_Inverter_Royal_Clima_001-500x500.png",
  // Royal Clima OPTIMUM 2.0
  "p2257152": "https://royal-clima.com.ru/image/cache/catalog/product-img/ROYAL_CLIMA/rci-om22hn/rci-om22hn-800x800.png",
  "p2257153": "https://royal-clima.com.ru/image/cache/catalog/product-img/ROYAL_CLIMA/rci-om22hn/rci-om22hn-800x800.png",
  "p2257154": "https://royal-clima.com.ru/image/cache/catalog/product-img/ROYAL_CLIMA/rci-om22hn/rci-om22hn-800x800.png",
  // Royal Clima ARIA DC INVERTER
  "p2257155": "https://royal-clima.com.ru/image/cache/catalog/product-img/RCI-AR22HN/2024_RC_ARIA_inv_2-500x500.png",
  "p2257156": "https://royal-clima.com.ru/image/cache/catalog/product-img/RCI-AR22HN/2024_RC_ARIA_inv_2-500x500.png",
  "p2257157": "https://royal-clima.com.ru/image/cache/catalog/product-img/RCI-AR22HN/2024_RC_ARIA_inv_2-500x500.png",
  // Royal Clima RENAISSANCE Wi-Fi (on/off)
  "p2257158": "https://royal-clima.com.ru/image/cache/catalog/product-img/RC-RNS22HN/2021_RC_Renaissance_001-500x500.png",
  "p2257159": "https://royal-clima.com.ru/image/cache/catalog/product-img/RC-RNS22HN/2021_RC_Renaissance_001-500x500.png",
  "p2257160": "https://royal-clima.com.ru/image/cache/catalog/product-img/RC-RNS22HN/2021_RC_Renaissance_001-500x500.png",
  "p2257161": "https://royal-clima.com.ru/image/cache/catalog/product-img/RC-RNS22HN/2021_RC_Renaissance_001-500x500.png",
  "p2257162": "https://royal-clima.com.ru/image/cache/catalog/product-img/RC-RNS22HN/2021_RC_Renaissance_001-500x500.png",
  // Royal Clima ATTICA NERO (on/off)
  "p2257163": "https://royal-clima.com.ru/image/cache/catalog/product-img/RC-AN22HN/2022_RC_ATTICA_Nero_Ionizer_front-500x500.png",
  "p2257164": "https://royal-clima.com.ru/image/cache/catalog/product-img/RC-AN22HN/2022_RC_ATTICA_Nero_Ionizer_front-500x500.png",
  "p2257165": "https://royal-clima.com.ru/image/cache/catalog/product-img/RC-AN22HN/2022_RC_ATTICA_Nero_Ionizer_front-500x500.png",
  "p2257166": "https://royal-clima.com.ru/image/cache/catalog/product-img/RC-AN22HN/2022_RC_ATTICA_Nero_Ionizer_front-500x500.png",
  "p2257167": "https://royal-clima.com.ru/image/cache/catalog/product-img/RC-AN22HN/2022_RC_ATTICA_Nero_Ionizer_front-500x500.png",
  // Royal Clima PANDORA Wi-Fi
  "p2257168": "https://royal-clima.com.ru/image/cache/catalog/product-img/RC-PD22HN/2022_RC_Pandora_001-500x500.png",
  "p2257169": "https://royal-clima.com.ru/image/cache/catalog/product-img/RC-PD22HN/2022_RC_Pandora_001-500x500.png",
  "p2257170": "https://royal-clima.com.ru/image/cache/catalog/product-img/RC-PD22HN/2022_RC_Pandora_001-500x500.png",
  "p2257171": "https://royal-clima.com.ru/image/cache/catalog/product-img/RC-PD22HN/2022_RC_Pandora_001-500x500.png",
  "p2257172": "https://royal-clima.com.ru/image/cache/catalog/product-img/RC-PD22HN/2022_RC_Pandora_001-500x500.png",
  "p2257173": "https://royal-clima.com.ru/image/cache/catalog/product-img/RC-PD22HN/2022_RC_Pandora_001-500x500.png",
  // Royal Clima FELICITA Wi-Fi (on/off)
  "p2257174": "https://royal.com.ru/upload/iblock/d05/ncdld7ts4endy5r13451w4omi86e9fj2.jpg",
  "p2257175": "https://royal.com.ru/upload/iblock/d05/ncdld7ts4endy5r13451w4omi86e9fj2.jpg",
  "p2257176": "https://royal.com.ru/upload/iblock/d05/ncdld7ts4endy5r13451w4omi86e9fj2.jpg",
  "p2257177": "https://royal.com.ru/upload/iblock/d05/ncdld7ts4endy5r13451w4omi86e9fj2.jpg",
  "p2257178": "https://royal.com.ru/upload/iblock/d05/ncdld7ts4endy5r13451w4omi86e9fj2.jpg",
  // Royal Clima GLORIA UPGRADE
  "p2257179": "https://royal-clima.com.ru/image/cache/catalog/prajs2021/split-sistemy/gloria/render_gloria_royal_clima_002-500x500.png",
  "p2257180": "https://royal-clima.com.ru/image/cache/catalog/prajs2021/split-sistemy/gloria/render_gloria_royal_clima_002-500x500.png",
  "p2257181": "https://royal-clima.com.ru/image/cache/catalog/prajs2021/split-sistemy/gloria/render_gloria_royal_clima_002-500x500.png",
  "p2257182": "https://royal-clima.com.ru/image/cache/catalog/prajs2021/split-sistemy/gloria/render_gloria_royal_clima_002-500x500.png",
  "p2257183": "https://royal-clima.com.ru/image/cache/catalog/prajs2021/split-sistemy/gloria/render_gloria_royal_clima_002-500x500.png",
  "p2257184": "https://royal-clima.com.ru/image/cache/catalog/prajs2021/split-sistemy/gloria/render_gloria_royal_clima_002-500x500.png",
  // Royal Clima TRIUMPH LITE (on/off)
  "p2257185": "https://royal.com.ru/upload/resize_cache/iblock/79b/450_450_1/h9grdrjyou812ot1lrnmi2ji45ue6vyc.jpg",
  "p2257186": "https://royal.com.ru/upload/resize_cache/iblock/79b/450_450_1/h9grdrjyou812ot1lrnmi2ji45ue6vyc.jpg",
  "p2257187": "https://royal.com.ru/upload/resize_cache/iblock/79b/450_450_1/h9grdrjyou812ot1lrnmi2ji45ue6vyc.jpg",
  "p2257188": "https://royal.com.ru/upload/resize_cache/iblock/79b/450_450_1/h9grdrjyou812ot1lrnmi2ji45ue6vyc.jpg",
  "p2257189": "https://royal.com.ru/upload/resize_cache/iblock/79b/450_450_1/h9grdrjyou812ot1lrnmi2ji45ue6vyc.jpg",
  // Royal Clima NOBILE NEW
  "p2257190": "https://royal-clima.com.ru/image/cache/catalog/product-img/RC-NB22HN/2024_RC_Nobile_4_1-500x500.png",
  // Royal Clima GRANDE NEW
  "p2257191": "https://royal-clima.com.ru/image/cache/catalog/product-img/RC-GDB105HN/Grande_front-800x800.png",
  "p2257192": "https://royal-clima.com.ru/image/cache/catalog/product-img/RC-GDB105HN/Grande_front-800x800.png",
  // Electrolux inner block
  "p689416": "https://climat21veka.ru/upload/iblock/a9e/a9e5eb2f5e3682fc6ddc994125f7c924.jpg",
};

const content = fs.readFileSync(STORE_PATH, 'utf8');
const lines = content.split('\n');

let updatedCount = 0;
const notFound = [];

const newLines = lines.map(line => {
  // Find product ID on this line
  const idMatch = line.match(/id:\s*"(p\d+)"/);
  if (!idMatch) return line;

  const id = idMatch[1];
  if (!imageUpdates[id]) return line;

  // Only update if the line still has the placeholder
  if (!line.includes(PLACEHOLDER)) {
    console.log(`  ${id}: already updated (no placeholder found)`);
    return line;
  }

  const newLine = line.replace(
    `"${PLACEHOLDER}"`,
    `"${imageUpdates[id]}"`
  );

  if (newLine !== line) {
    updatedCount++;
    console.log(`  Updated ${id}`);
  }

  return newLine;
});

// Check which IDs were not found
for (const id of Object.keys(imageUpdates)) {
  const found = lines.some(line => line.includes(`id: "${id}"`));
  if (!found) notFound.push(id);
}

fs.writeFileSync(STORE_PATH, newLines.join('\n'), 'utf8');
console.log(`\nSuccessfully updated ${updatedCount} products.`);
if (notFound.length > 0) {
  console.log(`NOT FOUND in file: ${notFound.join(', ')}`);
}
