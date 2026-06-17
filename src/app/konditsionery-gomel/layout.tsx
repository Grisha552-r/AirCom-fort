import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Кондиционеры в Гомеле — каталог, цены 2026',
  description: 'Купить кондиционер в Гомеле с установкой от 1 290 р. 300+ моделей: Electrolux, Ballu, Haier, LG. Монтаж от 400 р., выезд в день заказа, гарантия 1 год.',
  alternates: { canonical: 'https://aircom-fort.by/konditsionery-gomel' },
  openGraph: {
    type: 'website',
    locale: 'ru_BY',
    url: 'https://aircom-fort.by/konditsionery-gomel',
    siteName: 'AirComfort',
    title: 'Кондиционеры в Гомеле — купить с установкой от 1 290 р.',
    description: 'AirComfort — продажа и установка кондиционеров в Гомеле. 300+ моделей, монтаж от 400 р., выезд в день заказа.',
    images: [{ url: '/opengraph-image', width: 1200, height: 630 }],
  },
};

export default function KonditsioneryGomelLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
