const fs = require('fs');
const path = require('path');

const storeContent = fs.readFileSync(path.join(__dirname, 'src/lib/store.ts'), 'utf-8');

const marker = 'export const INITIAL_PRODUCTS: Product[] = [';
const start = storeContent.indexOf(marker);
if (start === -1) { console.error('INITIAL_PRODUCTS not found'); process.exit(1); }

const arrayStart = start + marker.length - 1; // the '[' at the end of the marker

let depth = 0;
let i = arrayStart;
while (i < storeContent.length) {
  if (storeContent[i] === '[') depth++;
  else if (storeContent[i] === ']') {
    depth--;
    if (depth === 0) break;
  }
  i++;
}

const arrayText = storeContent.slice(arrayStart, i + 1);

// Evaluate the JS object literal array
let products;
try {
  products = eval('(' + arrayText + ')');
} catch(e) {
  console.error('Eval failed:', e.message);
  process.exit(1);
}

const outDir = path.join(__dirname, 'src/data');
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

fs.writeFileSync(path.join(outDir, 'products.json'), JSON.stringify(products));
console.log(`Written ${products.length} products to src/data/products.json`);
