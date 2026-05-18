import { NextResponse } from 'next/server';
import { isAuthorized } from '@/app/api/admin/_auth';
import fs from 'fs';
import path from 'path';

const FILE = path.join(process.cwd(), 'src/data/orders.json');

function read() {
  try {
    return JSON.parse(fs.readFileSync(FILE, 'utf-8'));
  } catch {
    return [];
  }
}

function write(data: unknown) {
  fs.writeFileSync(FILE, JSON.stringify(data));
}

export async function GET() {
  if (!await isAuthorized()) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  return NextResponse.json(read());
}

export async function POST(req: Request) {
  if (!await isAuthorized()) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  try {
    const order = await req.json();
    const orders = read();
    orders.unshift(order);
    write(orders);
    return NextResponse.json({ ok: true });
  } catch (e) {
    return NextResponse.json({ ok: false, error: String(e) }, { status: 500 });
  }
}
