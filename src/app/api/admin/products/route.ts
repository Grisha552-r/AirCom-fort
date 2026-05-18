import { NextResponse } from 'next/server';
import { isAuthorized } from '@/app/api/admin/_auth';
import fs from 'fs';
import path from 'path';

const FILE = path.join(process.cwd(), 'src/data/products.json');

function read() {
  return JSON.parse(fs.readFileSync(FILE, 'utf-8'));
}

function write(data: unknown) {
  fs.writeFileSync(FILE, JSON.stringify(data));
}

export async function GET() {
  if (!await isAuthorized()) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  try {
    return NextResponse.json(read());
  } catch {
    return NextResponse.json([]);
  }
}

export async function POST(req: Request) {
  if (!await isAuthorized()) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  try {
    const product = await req.json();
    const products = read();
    products.push(product);
    write(products);
    return NextResponse.json({ ok: true });
  } catch (e) {
    return NextResponse.json({ ok: false, error: String(e) }, { status: 500 });
  }
}
