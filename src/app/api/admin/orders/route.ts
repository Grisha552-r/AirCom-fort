import { NextResponse } from 'next/server';
import { isAuthorized } from '@/app/api/admin/_auth';
import { supabaseAdmin } from '@/lib/supabase';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function fromDb(row: any) {
  return {
    id: row.id,
    createdAt: row.created_at,
    customerName: row.customer_name,
    customerPhone: row.customer_phone,
    customerEmail: row.customer_email,
    address: row.address,
    comment: row.comment,
    items: row.items,
    total: row.total,
    status: row.status,
  };
}

export async function GET() {
  if (!await isAuthorized()) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  const { data, error } = await supabaseAdmin
    .from('orders')
    .select('*')
    .order('created_at', { ascending: false });
  if (error) return NextResponse.json([]);
  return NextResponse.json((data ?? []).map(fromDb));
}

export async function POST(req: Request) {
  if (!await isAuthorized()) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  try {
    const o = await req.json();
    const { error } = await supabaseAdmin.from('orders').insert({
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
    });
    if (error) throw new Error(error.message);
    return NextResponse.json({ ok: true });
  } catch (e) {
    return NextResponse.json({ ok: false, error: String(e) }, { status: 500 });
  }
}
