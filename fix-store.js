const fs = require('fs');
const path = require('path');

const storeFile = path.join(__dirname, 'src/lib/store.ts');
const content = fs.readFileSync(storeFile, 'utf-8');
const lines = content.split('\n');

// Extract every line that is a product entry
const productLines = lines.filter(l => /^\s*\{ id: "p\d+",/.test(l));
console.log('Found product lines:', productLines.length);

// Parse each product line as a JS expression
// Replace JSON.parse("...") calls to eval-friendly form and eval
const products = [];
for (const line of productLines) {
  const trimmed = line.trim().replace(/,\s*$/, ''); // remove trailing comma
  try {
    const p = eval('(' + trimmed + ')');
    products.push(p);
  } catch(e) {
    console.error('Failed to parse product line:', line.substring(0, 80), '→', e.message);
  }
}
console.log('Parsed products:', products.length);

// Write JSON file
const outDir = path.join(__dirname, 'src/data');
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(path.join(outDir, 'products.json'), JSON.stringify(products));
console.log('Written src/data/products.json');

// Fix store.ts: rebuild it with proper structure
// Keep everything up to and including Product/Order/Review interfaces,
// then write a clean INITIAL_PRODUCTS array, followed by INITIAL_ORDERS/REVIEWS
const headerEnd = content.indexOf('export const INITIAL_PRODUCTS');
if (headerEnd === -1) { console.error('Could not find INITIAL_PRODUCTS in store.ts'); process.exit(1); }

const header = content.slice(0, headerEnd);

// Build product lines for store.ts
const productEntries = products.map(p => {
  // Re-stringify characteristics as plain object (not JSON.parse)
  const clone = { ...p };
  return '  ' + JSON.stringify(clone).replace(/"([a-zA-Z_][a-zA-Z0-9_]*)"\s*:/g, '$1:');
});

const newStore = header +
  'export const INITIAL_PRODUCTS: Product[] = [\n' +
  productEntries.join(',\n') + '\n' +
  '];\n\n' +
  'export const INITIAL_ORDERS: Order[] = [];\n' +
  'export const INITIAL_REVIEWS: Review[] = [];\n';

fs.writeFileSync(storeFile, newStore);
console.log('Fixed store.ts with', products.length, 'products');
