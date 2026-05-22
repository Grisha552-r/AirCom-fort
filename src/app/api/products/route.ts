import { NextResponse } from 'next/server';
import { getSupabase } from '@/lib/supabase';

function isBlock(name: string): boolean {
  return /^(Блок\s+(внутренний|наружный)|Внутренний\s+блок|Внешний\s+блок|Панель\s)/i.test(name);
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function fromDb(row: any) {
  const chars = row.characteristics ?? {};
  return {
    id: row.id,
    name: row.name,
    slug: row.slug,
    categoryId: isBlock(row.name) ? 'blocks' : row.category_id,
    price: row.price,
    originalPrice: chars._originalPrice ?? undefined,
    discount: chars._discount ?? undefined,
    rating: row.rating,
    reviewCount: row.review_count,
    images: row.images,
    description: row.description,
    characteristics: chars,
    inStock: row.in_stock,
    isNew: row.is_new,
    isFeatured: row.is_featured,
    brand: row.brand,
    tags: row.tags,
  };
}

export async function GET() {
  const { data, error } = await getSupabase().from('products').select('*');
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json((data ?? []).map(fromDb), {
    headers: { 'Cache-Control': 'public, max-age=60' },
  });
}
