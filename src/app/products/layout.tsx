import type { Metadata } from 'next';

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Главная', item: 'https://aircom-fort.by/' },
    { '@type': 'ListItem', position: 2, name: 'Каталог кондиционеров', item: 'https://aircom-fort.by/products' },
  ],
};

const productListJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Каталог кондиционеров AirComfort в Гомеле',
  url: 'https://aircom-fort.by/products',
  numberOfItems: 300,
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Кондиционеры Electrolux', url: 'https://aircom-fort.by/products/split-electrolux' },
    { '@type': 'ListItem', position: 2, name: 'Кондиционеры Ballu', url: 'https://aircom-fort.by/products/split-ballu' },
    { '@type': 'ListItem', position: 3, name: 'Кондиционеры Haier', url: 'https://aircom-fort.by/products/split-haier' },
    { '@type': 'ListItem', position: 4, name: 'Кондиционеры LG', url: 'https://aircom-fort.by/products/split-lg' },
    { '@type': 'ListItem', position: 5, name: 'Кондиционеры Mitsudai', url: 'https://aircom-fort.by/products/split-mitsudai' },
    { '@type': 'ListItem', position: 6, name: 'Мобильные кондиционеры', url: 'https://aircom-fort.by/products/mobile' },
  ],
};

export const metadata: Metadata = {
  title: 'Купить кондиционер в Гомеле — каталог, цены 2026',
  description: 'Купить кондиционер в Гомеле: Electrolux, Ballu, Haier, LG, Mitsudai. Сплит-системы и мобильные модели. Официальная гарантия, монтаж от 400 р.',
  alternates: { canonical: 'https://aircom-fort.by/products' },
  openGraph: {
    title: 'Каталог кондиционеров в Гомеле',
    description: 'Сплит-системы и мобильные кондиционеры со склада в Гомеле. Лучшие цены.',
    url: 'https://aircom-fort.by/products',
  },
};

export default function ProductsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productListJsonLd) }}
      />
      {children}
    </>
  );
}
