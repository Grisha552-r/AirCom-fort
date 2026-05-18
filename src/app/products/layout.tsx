import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Купить кондиционер в Гомеле — каталог сплит-систем, цены 2025',
  description: 'Купить кондиционер в Гомеле с установкой или без. Сплит-системы и мобильные кондиционеры: Electrolux, Ballu, Haier, LG, Mitsudai. Официальная гарантия, монтаж от 400 р.',
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
    title: 'Каталог кондиционеров — AirComfort Гомель',
    description: 'Сплит-системы и мобильные кондиционеры со склада в Гомеле. Лучшие цены.',
    url: 'https://aircom-fort.by/products',
  },
};

export default function ProductsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
