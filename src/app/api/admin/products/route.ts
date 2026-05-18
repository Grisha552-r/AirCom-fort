import { NextResponse } from 'next/server';
import { isAuthorized } from '@/app/api/admin/_auth';
import { supabaseAdmin } from '@/lib/supabase';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function fromDb(row: any) {
  return {
    id: row.id,
    name: row.name,
    slug: row.slug,
    categoryId: row.category_id,
    price: row.price,
    rating: row.rating,
    reviewCount: row.review_count,
    images: row.images,
    description: row.description,
    characteristics: row.characteristics,
    inStock: row.in_stock,
    isNew: row.is_new,
    isFeatured: row.is_featured,
    brand: row.brand,
    tags: row.tags,
  };
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function toDb(p: any) {
  return {
    id: p.id,
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

export async function GET() {
  if (!await isAuthorized()) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  const { data, error } = await supabaseAdmin.from('products').select('*');
  if (error) return NextResponse.json([]);
  return NextResponse.json((data ?? []).map(fromDb));
}

export async function POST(req: Request) {
  if (!await isAuthorized()) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  try {
    const product = await req.json();
    const { error } = await supabaseAdmin.from('products').insert(toDb(product));
    if (error) throw new Error(error.message);
    return NextResponse.json({ ok: true });
  } catch (e) {
    return NextResponse.json({ ok: false, error: String(e) }, { status: 500 });
  }
}
