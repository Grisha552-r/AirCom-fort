import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Купить кондиционер в Гомеле — каталог, цены 2026',
  description: 'Купить кондиционер в Гомеле: Electrolux, Ballu, Haier, LG, Mitsudai. Сплит-системы и мобильные модели. Официальная гарантия, монтаж от 400 р.',
  alternates: { canonical: 'https://aircom-fort.by/products' },
  openGraph: {
    title: 'Каталог кондиционеров в Гомеле',
    description: 'Сплит-системы и мобильные кондиционеры со склада в Гомеле. Лучшие цены.',
    url: 'https://aircom-fort.by/products',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Каталог кондиционеров в Гомеле',
    description: 'Сплит-системы и мобильные кондиционеры со склада в Гомеле. Лучшие цены.',
  },
};

export default function ProductsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
