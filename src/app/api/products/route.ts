import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

function isBlock(name: string): boolean {
  return /^(Блок\s+(внутренний|наружный)|Внутренний\s+блок|Внешний\s+блок|Панель\s)/i.test(name);
}

export async function GET() {
  const filePath = path.join(process.cwd(), 'src/data/products.json');
  const raw = fs.readFileSync(filePath, 'utf-8');
  const INITIAL_PRODUCTS = JSON.parse(raw);
  const products = INITIAL_PRODUCTS.filter(Boolean).map((p: { name: string; categoryId: string }) =>
    isBlock(p.name) ? { ...p, categoryId: 'blocks' } : p
  );
  return NextResponse.json(products, {
    headers: { 'Cache-Control': 'public, max-age=60' },
  });
}
