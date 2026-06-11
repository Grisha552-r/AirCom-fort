import { cache } from 'react';
import type { Metadata } from 'next';
import { getSupabaseAdmin } from '@/lib/supabase';

const BASE = 'https://aircom-fort.by';

const CATEGORY_META: Record<string, { title: string; description: string }> = {
  'split-systems': {
    title: 'Сплит-системы в Гомеле — купить с установкой',
    description: 'Купить сплит-систему в Гомеле: Electrolux, Ballu, Haier, LG, Mitsudai. Инверторные кондиционеры в наличии. Монтаж от 400 р., официальная гарантия.',
  },
  'split-electrolux': {
    title: 'Кондиционеры Electrolux в Гомеле — купить с установкой',
    description: 'Кондиционеры Electrolux в Гомеле: инверторные модели 9000–24000 BTU. Официальный дилер. Установка под ключ от 400 р., гарантия 2–3 года.',
  },
  'split-ballu': {
    title: 'Кондиционеры Ballu в Гомеле — купить с установкой',
    description: 'Кондиционеры Ballu в Гомеле: инверторные и on/off модели. Надёжное оборудование, официальная гарантия. Монтаж под ключ от 400 р.',
  },
  'split-haier': {
    title: 'Кондиционеры Haier в Гомеле — купить с установкой',
    description: 'Кондиционеры Haier в Гомеле: настенные сплит-системы с Wi-Fi, инвертором. Гарантия производителя. Установка под ключ от 400 р.',
  },
  'split-lg': {
    title: 'Кондиционеры LG в Гомеле — купить с установкой',
    description: 'Кондиционеры LG в Гомеле: инверторные сплит-системы с Wi-Fi, тихие модели для спальни. Официальная гарантия LG. Монтаж от 400 р.',
  },
  'split-mitsudai': {
    title: 'Кондиционеры Mitsudai в Гомеле — купить с установкой',
    description: 'Кондиционеры Mitsudai в Гомеле по доступным ценам. Надёжные модели для квартиры и офиса. Монтаж под ключ от 400 р., гарантия 1 год.',
  },
  'split-kinghome': {
    title: 'Кондиционеры King Home в Гомеле — купить с установкой',
    description: 'Кондиционеры King Home Luna Matt в Гомеле: Wi-Fi, инвертор, R32. Мощность 9000–24000 BTU. Класс А++. Монтаж от 400 р., гарантия 74 месяца.',
  },
  mobile: {
    title: 'Мобильные кондиционеры в Гомеле — без монтажа',
    description: 'Мобильные кондиционеры в Гомеле без сверления и монтажа. Для аренды и дачи. Готов к работе за 5 минут. Быстрая доставка по Гомелю.',
  },
};

// React cache deduplicates this across generateMetadata + layout render
const fetchProduct = cache(async (id: string) => {
  try {
    const { data } = await getSupabaseAdmin()
      .from('products')
      .select('id, name, description, price, images, brand, in_stock, category_id, rating, review_count, characteristics')
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

const CAT_BREADCRUMB_NAME: Record<string, string> = {
  'split-systems': 'Сплит-системы',
  'split-electrolux': 'Кондиционеры Electrolux',
  'split-ballu': 'Кондиционеры Ballu',
  'split-haier': 'Кондиционеры Haier',
  'split-lg': 'Кондиционеры LG',
  'split-mitsudai': 'Кондиционеры Mitsudai',
  'split-kinghome': 'Кондиционеры King Home',
  'mobile': 'Мобильные кондиционеры',
};

export default async function ProductLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  // BreadcrumbList for category pages
  if (CATEGORY_META[id]) {
    const catName = CAT_BREADCRUMB_NAME[id] || id;
    const breadcrumb = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Главная', item: `${BASE}/` },
        { '@type': 'ListItem', position: 2, name: 'Каталог', item: `${BASE}/products` },
        { '@type': 'ListItem', position: 3, name: catName, item: `${BASE}/products/${id}` },
      ],
    };
    return (
      <>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
        {children}
      </>
    );
  }

  // Inject server-side JSON-LD for individual product pages
  {
    const product = await fetchProduct(id);
    if (product && product.price > 0) {
      const priceValidUntil = new Date(Date.now() + 90 * 24 * 60 * 60 * 1000).toISOString().split('T')[0];
      const originalPrice = product.characteristics?._originalPrice;
      const catName = CAT_BREADCRUMB_NAME[product.category_id] || product.category_id || 'Каталог';

      const breadcrumb = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Главная', item: `${BASE}/` },
          { '@type': 'ListItem', position: 2, name: 'Каталог', item: `${BASE}/products` },
          { '@type': 'ListItem', position: 3, name: catName, item: `${BASE}/products/${product.category_id}` },
          { '@type': 'ListItem', position: 4, name: product.name, item: `${BASE}/products/${id}` },
        ],
      };

      const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'Product',
        name: product.name,
        sku: id,
        mpn: product.slug || id,
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
          priceValidUntil,
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
          shippingDetails: {
            '@type': 'OfferShippingDetails',
            shippingRate: {
              '@type': 'MonetaryAmount',
              value: '0',
              currency: 'BYN',
            },
            shippingDestination: {
              '@type': 'DefinedRegion',
              addressCountry: 'BY',
              addressRegion: 'Гомельская область',
            },
            deliveryTime: {
              '@type': 'ShippingDeliveryTime',
              handlingTime: { '@type': 'QuantitativeValue', minValue: 0, maxValue: 1, unitCode: 'DAY' },
              transitTime: { '@type': 'QuantitativeValue', minValue: 0, maxValue: 2, unitCode: 'DAY' },
            },
          },
          hasMerchantReturnPolicy: {
            '@type': 'MerchantReturnPolicy',
            applicableCountry: 'BY',
            returnPolicyCategory: 'https://schema.org/MerchantReturnFiniteReturnWindow',
            merchantReturnDays: 14,
            returnMethod: 'https://schema.org/ReturnInStore',
            returnFees: 'https://schema.org/FreeReturn',
          },
          ...(originalPrice
            ? {
                priceSpecification: [
                  {
                    '@type': 'UnitPriceSpecification',
                    priceType: 'https://schema.org/ListPrice',
                    price: originalPrice,
                    priceCurrency: 'BYN',
                  },
                  {
                    '@type': 'UnitPriceSpecification',
                    priceType: 'https://schema.org/SalePrice',
                    price: product.price,
                    priceCurrency: 'BYN',
                  },
                ],
              }
            : {}),
        },
      };
      return (
        <>
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
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
