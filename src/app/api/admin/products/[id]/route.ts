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

export async function PUT(req: Request, { params }: { params: Promise<{ id: string }> }) {
  if (!await isAuthorized()) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  try {
    const { id } = await params;
    const update = await req.json();
    const products = read();
    const updated = products.map((p: { id: string }) => p.id === id ? { ...p, ...update } : p);
    write(updated);
    return NextResponse.json({ ok: true });
  } catch (e) {
    return NextResponse.json({ ok: false, error: String(e) }, { status: 500 });
  }
}

export async function DELETE(_: Request, { params }: { params: Promise<{ id: string }> }) {
  if (!await isAuthorized()) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  try {
    const { id } = await params;
    const products = read();
    const updated = products.filter((p: { id: string }) => p.id !== id);
    write(updated);
    return NextResponse.json({ ok: true });
  } catch (e) {
    return NextResponse.json({ ok: false, error: String(e) }, { status: 500 });
  }
}
