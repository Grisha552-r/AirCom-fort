import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Кондиционеры в Гомеле — купить с установкой от 1 290 р. | AirComfort',
  description: 'Купить кондиционер в Гомеле с установкой под ключ от 1 290 р. ✓ 300+ моделей Electrolux, Ballu, Haier, LG ✓ Монтаж от 400 р. ✓ Выезд в день заказа ✓ Гарантия 1 год. ☎ +375 29 105-06-94.',
  keywords: [
    'кондиционеры Гомель',
    'купить кондиционер Гомель',
    'кондиционер с установкой Гомель',
    'кондиционер Гомель цена',
    'сплит система Гомель',
    'установка кондиционера Гомель',
    'кондиционер под ключ Гомель',
    'кондиционер недорого Гомель',
    'кондиционер для квартиры Гомель',
    'кондиционер для офиса Гомель',
    'Electrolux Гомель',
    'Ballu Гомель',
    'Haier Гомель',
    'LG кондиционер Гомель',
  ],
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
