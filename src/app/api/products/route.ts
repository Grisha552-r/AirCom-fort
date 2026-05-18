import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

function isBlock(name: string): boolean {
  return /^(Блок\s+(внутренний|наружный)|Внутренний\s+блок|Внешний\s+блок|Панель\s)/i.test(name);
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function fromDb(row: any) {
  return {
    id: row.id,
    name: row.name,
    slug: row.slug,
    categoryId: isBlock(row.name) ? 'blocks' : row.category_id,
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

export async function GET() {
  const { data, error } = await supabase.from('products').select('*');
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json((data ?? []).map(fromDb), {
    headers: { 'Cache-Control': 'public, max-age=60' },
  });
}
