import { unstable_cache } from 'next/cache';
import { getSupabase } from '@/lib/supabase';
import type { Product } from '@/lib/store';

function isBlock(name: string): boolean {
  return /^(Блок\s+(внутренний|наружный)|Внутренний\s+блок|Внешний\s+блок|Панель\s)/i.test(name);
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function fromDbRow(row: any): Product {
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

async function fetchAllProducts(): Promise<Product[]> {
  const delays = [0, 150, 400, 800];
  let lastError: unknown;
  for (const delay of delays) {
    if (delay) await new Promise(r => setTimeout(r, delay));
    try {
      const { data, error } = await getSupabase().from('products').select('*');
      if (error) { lastError = error; continue; }
      if (!data) { lastError = new Error('No data returned'); continue; }
      return data.map(fromDbRow);
    } catch (err) {
      lastError = err;
    }
  }
  // Throw instead of returning [] so unstable_cache does not cache a false
  // "no products" result for the full revalidate window after a transient failure.
  throw lastError instanceof Error ? lastError : new Error('Failed to fetch products');
}

export const getAllProducts = unstable_cache(fetchAllProducts, ['all-products'], {
  revalidate: 300,
  tags: ['products'],
});
