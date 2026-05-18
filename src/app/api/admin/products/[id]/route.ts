import { NextResponse } from 'next/server';
import { isAuthorized } from '@/app/api/admin/_auth';
import { supabaseAdmin } from '@/lib/supabase';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function toDb(p: any) {
  return {
    name: p.name,
    slug: p.slug,
    category_id: p.categoryId,
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
  };
}

export async function PUT(req: Request, { params }: { params: Promise<{ id: string }> }) {
  if (!await isAuthorized()) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  try {
    const { id } = await params;
    const update = await req.json();
    const { error } = await supabaseAdmin.from('products').update(toDb(update)).eq('id', id);
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
    const { error } = await supabaseAdmin.from('products').delete().eq('id', id);
    if (error) throw new Error(error.message);
    return NextResponse.json({ ok: true });
  } catch (e) {
    return NextResponse.json({ ok: false, error: String(e) }, { status: 500 });
  }
}
