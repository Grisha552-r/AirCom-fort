#!/usr/bin/env node
// Run once to import products and orders into Supabase:
// node scripts/seed.mjs

import { createClient } from '@supabase/supabase-js';
import { readFileSync } from 'fs';

const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!url || !serviceKey) {
  console.error('Set NEXT_PUBLIC_SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY in .env');
  process.exit(1);
}

const db = createClient(url, serviceKey);

function isBlock(name) {
  return /^(Блок\s+(внутренний|наружный)|Внутренний\s+блок|Внешний\s+блок|Панель\s)/i.test(name);
}

// --- Products ---
const products = JSON.parse(readFileSync('./src/data/products.json', 'utf-8'));
const productRows = products.filter(Boolean).map(p => ({
  id: p.id,
  name: p.name,
  slug: p.slug,
  category_id: isBlock(p.name) ? 'blocks' : p.categoryId,
  price: p.price,
  rating: p.rating,
  review_count: p.reviewCount,
  images: p.images,
  description: p.description,
  characteristics: p.characteristics,
  in_stock: p.inStock,
  is_new: p.isNew,
  is_featured: p.isFeatured,
  brand: p.brand,
  tags: p.tags,
}));

console.log(`Importing ${productRows.length} products...`);
const BATCH = 50;
for (let i = 0; i < productRows.length; i += BATCH) {
  const batch = productRows.slice(i, i + BATCH);
  const { error } = await db.from('products').upsert(batch, { onConflict: 'id' });
  if (error) {
    console.error(`Batch ${i}-${i + BATCH} error:`, error.message);
  } else {
    process.stdout.write(`\r  ${Math.min(i + BATCH, productRows.length)}/${productRows.length}`);
  }
}
console.log('\nProducts done.');

// --- Orders ---
let orders = [];
try { orders = JSON.parse(readFileSync('./src/data/orders.json', 'utf-8')); } catch {}
if (orders.length > 0) {
  console.log(`Importing ${orders.length} orders...`);
  const orderRows = orders.map(o => ({
    id: o.id,
    created_at: o.createdAt,
    customer_name: o.customerName,
    customer_phone: o.customerPhone,
    customer_email: o.customerEmail || null,
    address: o.address || null,
    comment: o.comment || null,
    items: o.items,
    total: o.total,
    status: o.status || 'new',
  }));
  const { error } = await db.from('orders').upsert(orderRows, { onConflict: 'id' });
  if (error) console.error('Orders error:', error.message);
  else console.log('Orders done.');
}

// --- Admin password ---
const adminPwd = process.env.ADMIN_PASSWORD;
if (adminPwd) {
  const { error } = await db.from('settings').upsert({ key: 'admin_password', value: adminPwd }, { onConflict: 'key' });
  if (error) console.error('Settings error:', error.message);
  else console.log(`Admin password set to: ${adminPwd}`);
}

console.log('\nAll done! Your Supabase database is ready.');
