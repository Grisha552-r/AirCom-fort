import type { Metadata } from 'next';

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Главная', item: 'https://aircom-fort.by/' },
    { '@type': 'ListItem', position: 2, name: 'Каталог кондиционеров', item: 'https://aircom-fort.by/products' },
  ],
};

export const metadata: Metadata = {
  title: 'Купить кондиционер в Гомеле — каталог, цены 2026',
  description: 'Купить кондиционер в Гомеле: Electrolux, Ballu, Haier, LG, Mitsudai. Сплит-системы и мобильные модели. Официальная гарантия, монтаж от 400 р.',
  keywords: [
    'купить кондиционер Гомель',
    'кондиционер с установкой Гомель',
    'сплит система Гомель',
    'кондиционер цена Гомель',
    'кондиционер Electrolux Гомель',
    'кондиционер Ballu Гомель',
    'кондиционер Haier Гомель',
    'кондиционер LG Гомель',
    'мобильный кондиционер Гомель',
    'инверторный кондиционер купить',
    'каталог кондиционеров',
  ],
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
      {children}
    </>
  );
}
