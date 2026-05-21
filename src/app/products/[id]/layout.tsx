import { cache } from 'react';
import type { Metadata } from 'next';
import { getSupabaseAdmin } from '@/lib/supabase';

const BASE = 'https://aircom-fort.by';

const CATEGORY_META: Record<string, { title: string; description: string }> = {
  'split-systems': {
    title: 'Сплит-системы в Гомеле — купить кондиционер с установкой от 400 р.',
    description: 'Купить сплит-систему в Гомеле: Electrolux, Ballu, Haier, LG, Mitsudai. Широкий выбор инверторных кондиционеров. Монтаж под ключ от 400 р., официальная гарантия.',
  },
  'split-electrolux': {
    title: 'Кондиционеры Electrolux в Гомеле — купить инверторную сплит-систему',
    description: 'Кондиционеры Electrolux в Гомеле: инверторные модели 9000–24000 BTU. Официальный дилер, лучшие цены. Установка под ключ от 400 р., гарантия производителя 2–3 года.',
  },
  'split-ballu': {
    title: 'Кондиционеры Ballu в Гомеле — инверторные и on/off сплит-системы',
    description: 'Кондиционеры Ballu в Гомеле по выгодным ценам: инверторные и on/off модели. Надёжное оборудование, гарантия, монтаж под ключ. Установка от 400 р.',
  },
  'split-haier': {
    title: 'Кондиционеры Haier в Гомеле — купить с официальной гарантией',
    description: 'Кондиционеры Haier в Гомеле: полный ассортимент настенных сплит-систем. Гарантия производителя. Профессиональная установка под ключ от 400 р. Гомель и область.',
  },
  'split-lg': {
    title: 'Кондиционеры LG в Гомеле — сплит-системы с Wi-Fi и без',
    description: 'Кондиционеры LG в Гомеле: инверторные сплит-системы с Wi-Fi, тихие модели для спальни. Официальная гарантия LG. Установка и обслуживание под ключ от 400 р.',
  },
  'split-mitsudai': {
    title: 'Кондиционеры Mitsudai в Гомеле — недорогие сплит-системы',
    description: 'Кондиционеры Mitsudai в Гомеле по доступным ценам. Надёжные модели для квартиры и офиса. Установка под ключ от 400 р. Гарантия 1 год от AirComfort.',
  },
  mobile: {
    title: 'Мобильные кондиционеры в Гомеле — без сверления, готов к работе за 5 минут',
    description: 'Мобильные кондиционеры в Гомеле: переносные модели без монтажа и сверления. Идеально для аренды. Быстрая доставка. Консультация по подбору бесплатно.',
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
    title: 'Купить кондиционер в Гомеле',
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
          price: String(product.price),
          priceCurrency: 'BYN',
          priceValidUntil: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
          availability: product.in_stock
            ? 'https://schema.org/InStock'
            : 'https://schema.org/OutOfStock',
          itemCondition: 'https://schema.org/NewCondition',
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
