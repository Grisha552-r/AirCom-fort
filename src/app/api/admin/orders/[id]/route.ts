import { NextResponse } from 'next/server';
import { isAuthorized } from '@/app/api/admin/_auth';
import { getSupabaseAdmin } from '@/lib/supabase';

export async function PUT(req: Request, { params }: { params: Promise<{ id: string }> }) {
  if (!await isAuthorized()) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  try {
    const { id } = await params;
    const { status } = await req.json();
    const { error } = await getSupabaseAdmin().from('orders').update({ status }).eq('id', id);
    if (error) throw new Error(error.message);
    return NextResponse.json({ ok: true });
  } catch (e) {
    return NextResponse.json({ ok: false, error: String(e) }, { status: 500 });
  }
}

export async function DELETE(_: Request, { params }: { params: Promise<{ id: string }> }) {
  if (!await isAuthorized()) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  try {
    const { id } = await params;
    const { error } = await getSupabaseAdmin().from('orders').delete().eq('id', id);
    if (error) throw new Error(error.message);
    return NextResponse.json({ ok: true });
  } catch (e) {
    return NextResponse.json({ ok: false, error: String(e) }, { status: 500 });
  }
}
