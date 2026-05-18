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

export async function PUT(req: Request, { params }: { params: Promise<{ id: string }> }) {
  if (!await isAuthorized()) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  try {
    const { id } = await params;
    const { status } = await req.json();
    const orders = read();
    const updated = orders.map((o: { id: string }) => o.id === id ? { ...o, status } : o);
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
    const orders = read();
    const updated = orders.filter((o: { id: string }) => o.id !== id);
    write(updated);
    return NextResponse.json({ ok: true });
  } catch (e) {
    return NextResponse.json({ ok: false, error: String(e) }, { status: 500 });
  }
}
