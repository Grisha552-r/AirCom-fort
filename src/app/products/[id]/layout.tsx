import { cache } from 'react';
import type { Metadata } from 'next';
import { getSupabaseAdmin } from '@/lib/supabase';

const BASE = 'https://aircom-fort.by';

const CATEGORY_META: Record<string, { title: string; description: string }> = {
  'split-systems': {
    title: 'Сплит-системы в Гомеле — купить кондиционер с установкой',
    description: 'Сплит-системы всех брендов в Гомеле. Продажа и установка под ключ. Официальная гарантия. Монтаж от 400 р.',
  },
  'split-electrolux': {
    title: 'Кондиционеры Electrolux в Гомеле — купить с установкой',
    description: 'Кондиционеры Electrolux в Гомеле по выгодным ценам. Официальный дилер. Установка под ключ, гарантия производителя.',
  },
  'split-ballu': {
    title: 'Кондиционеры Ballu в Гомеле — купить с установкой',
    description: 'Кондиционеры Ballu в Гомеле: инверторные и on/off модели. Продажа и монтаж под ключ. Гарантия.',
  },
  'split-haier': {
    title: 'Кондиционеры Haier в Гомеле — купить с установкой',
    description: 'Кондиционеры Haier в Гомеле. Широкий выбор моделей. Установка под ключ, официальная гарантия производителя.',
  },
  'split-lg': {
    title: 'Кондиционеры LG в Гомеле — купить с установкой',
    description: 'Кондиционеры LG в Гомеле. Инверторные сплит-системы с Wi-Fi и без. Продажа и профессиональный монтаж.',
  },
  'split-mitsudai': {
    title: 'Кондиционеры Mitsudai в Гомеле — купить с установкой',
    description: 'Кондиционеры Mitsudai в Гомеле. Доступная цена, надёжное качество. Установка под ключ от AirComfort.',
  },
  mobile: {
    title: 'Мобильные кондиционеры в Гомеле — без сверления и монтажа',
    description: 'Мобильные кондиционеры в Гомеле. Не требуют установки и монтажа. Быстрая доставка по Гомелю и области.',
  },
};

// React cache deduplicates this across generateMetadata + layout render
const fetchProduct = cache(async (id: string) => {
  try {
    const { data } = await getSupabaseAdmin()
      .from('products')
      .select('id, name, description, price, images, brand, in_stock, category_id, rating, review_count')
      .eq('id', id)
      .single();
    return data;
  } catch {
    return null;
  }
});

export async function generateMetadata(
  { params }: { params: Promise<{ id: string }> }
): Promise<Metadata> {
  const { id } = await params;

  const cat = CATEGORY_META[id];
  if (cat) {
    return {
      title: cat.title,
      description: cat.description,
      robots: { index: true, follow: true },
      alternates: { canonical: `${BASE}/products/${id}` },
      openGraph: {
        title: cat.title,
        description: cat.description,
        url: `${BASE}/products/${id}`,
        locale: 'ru_BY',
        type: 'website',
      },
    };
  }

  const product = await fetchProduct(id);
  if (product) {
    const title = `${product.name} — купить в Гомеле, цена ${product.price} р.`;
    const descBase = product.description
      ? product.description.replace(/<[^>]+>/g, '').slice(0, 100)
      : `${product.brand || ''} кондиционер в Гомеле`;
    const description = `${product.name}. Цена ${product.price} р. ${descBase}. Установка под ключ, гарантия.`;

    return {
      title,
      description: description.slice(0, 160),
      robots: { index: true, follow: true },
      alternates: { canonical: `${BASE}/products/${id}` },
      openGraph: {
        title,
        description: description.slice(0, 160),
        url: `${BASE}/products/${id}`,
        locale: 'ru_BY',
        type: 'website',
        images: product.images?.[0] ? [{ url: product.images[0], width: 800, height: 600, alt: product.name }] : undefined,
      },
    };
  }

  return {
    title: 'Купить кондиционер в Гомеле — AirComfort',
    description: 'Купить кондиционер в Гомеле с доставкой и установкой. Официальная гарантия. Монтаж под ключ от 400 р.',
    robots: { index: true, follow: true },
  };
}

export default async function ProductLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  // Inject server-side JSON-LD for individual product pages (not categories)
  if (!CATEGORY_META[id]) {
    const product = await fetchProduct(id);
    if (product) {
      const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'Product',
        name: product.name,
        description: product.description?.replace(/<[^>]+>/g, '').slice(0, 200),
        image: Array.isArray(product.images) ? product.images.slice(0, 5) : [],
        brand: { '@type': 'Brand', name: product.brand || 'AirComfort' },
        ...(product.rating && product.review_count && product.review_count > 0
          ? {
              aggregateRating: {
                '@type': 'AggregateRating',
                ratingValue: product.rating,
                reviewCount: product.review_count,
                bestRating: 5,
                worstRating: 1,
              },
            }
          : {}),
        offers: {
          '@type': 'Offer',
          price: product.price,
          priceCurrency: 'BYN',
          availability: product.in_stock
            ? 'https://schema.org/InStock'
            : 'https://schema.org/OutOfStock',
          url: `${BASE}/products/${id}`,
          seller: {
            '@type': 'Organization',
            name: 'AirComfort',
            url: BASE,
          },
        },
      };
      return (
        <>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          />
          {children}
        </>
      );
    }
  }

  return <>{children}</>;
}
