import React from 'react';
import type { Metadata, Viewport } from 'next';
import { Plus_Jakarta_Sans, Fraunces } from 'next/font/google';
import '../styles/tailwind.css';
import JsonLd from '@/components/JsonLd';
import YandexMetrica from '@/components/YandexMetrica';

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin', 'cyrillic-ext'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-plus-jakarta-sans',
  display: 'swap',
});

const fraunces = Fraunces({
  subsets: ['latin'],
  weight: ['400', '600', '700', '900'],
  variable: '--font-fraunces',
  display: 'swap',
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#b91c1c',
};

const MONTHS_RU = ['Январе','Феврале','Марте','Апреле','Мае','Июне','Июле','Августе','Сентябре','Октябре','Ноябре','Декабре'];
const currentMonth = MONTHS_RU[new Date().getMonth()];

export const metadata: Metadata = {
  metadataBase: new URL('https://aircom-fort.by'),
  title: {
    default: `Купить кондиционер в Гомеле от 1 290 р. с установкой — AirComfort`,
    template: '%s | AirComfort',
  },
  description: 'Купить кондиционер в Гомеле с установкой от 1 290 р. Electrolux, Ballu, Haier, LG — 300+ моделей. Монтаж от 400 р., выезд в день заказа, гарантия 1 год.',
  keywords: [
    'установка кондиционеров Гомель',
    'продажа кондиционеров Гомель',
    'купить кондиционер Гомель',
    'кондиционер с установкой Гомель',
    'кондиционер под ключ Гомель',
    'кондиционер Гомель цена',
    'сплит система Гомель',
    'установка кондиционера Гомель',
    'монтаж кондиционера Гомель',
    'обслуживание кондиционера Гомель',
    'чистка кондиционера Гомель',
    'демонтаж кондиционера Гомель',
    'ремонт кондиционера Гомель',
    'заправка кондиционера Гомель',
    'климатическое оборудование Гомель',
    'кондиционер недорого Гомель',
    'кондиционер Electrolux Гомель',
    'купить Electrolux Гомель',
    'сплит система Electrolux',
    'кондиционер Ballu Гомель',
    'купить Ballu Гомель',
    'сплит система Ballu',
    'кондиционер Haier Гомель',
    'купить Haier Гомель',
    'сплит система Haier',
    'кондиционер LG Гомель',
    'купить LG Гомель',
    'сплит система LG',
    'кондиционер Mitsudai Гомель',
    'купить Mitsudai Гомель',
    'кондиционер King Home Гомель',
    'купить King Home Гомель',
    'сплит система King Home',
    'мобильный кондиционер купить',
    'переносной кондиционер Гомель',
    'мобильный кондиционер без монтажа',
    'кондиционер инверторный Гомель',
    'инверторная сплит система купить',
    'настенный кондиционер купить',
    'настенный кондиционер Гомель',
    'кондиционер 7000 BTU',
    'кондиционер 9000 BTU',
    'кондиционер 12000 BTU',
    'кондиционер 18000 BTU',
    'кондиционер 24000 BTU',
    'кондиционер на 20 м2',
    'кондиционер на 25 м2',
    'кондиционер на 35 м2',
    'кондиционер на 50 м2',
    'кондиционер на 70 м2',
    'кондиционер для квартиры Гомель',
    'кондиционер для дома Гомель',
    'кондиционер для офиса Гомель',
    'установка кондиционера цена Гомель',
    'монтаж сплит системы Гомель',
    'установка сплит системы под ключ',
    'кондиционер с wifi Гомель',
    'тихий кондиционер купить',
    'энергосберегающий кондиционер',
    'кондиционер класс А Гомель',
    'AirComfort Гомель кондиционеры',
    'кондиционеры в наличии Гомель',
    'официальный дилер кондиционеров Гомель',
    'гарантия на кондиционер Гомель',
    'кондиционер Гомельская область',
    'купить кондиционер Беларусь',
  ],
  authors: [{ name: 'AirComfort' }],
  creator: 'AirComfort',
  publisher: 'AirComfort',
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  openGraph: {
    type: 'website',
    locale: 'ru_BY',
    url: 'https://aircom-fort.by',
    siteName: 'AirComfort',
    title: `Кондиционеры в Гомеле от 1 290 р. с установкой — AirComfort`,
    description: 'Купить кондиционер в Гомеле с установкой под ключ от 1 290 р. 300+ моделей: Electrolux, Ballu, Haier, LG. Монтаж от 400 р., выезд в день заказа.',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'AirComfort — Кондиционеры в Гомеле от 1 290 р.' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: `Кондиционеры в Гомеле от 1 290 р. с установкой — AirComfort`,
    description: 'Electrolux, Ballu, Haier, LG — 300+ моделей. Монтаж от 400 р., выезд в день заказа, гарантия 1 год.',
    images: ['/opengraph-image'],
  },
  alternates: {
    canonical: 'https://aircom-fort.by',
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '48x48', type: 'image/x-icon' },
      { url: '/icon', sizes: '192x192', type: 'image/png' },
    ],
    apple: [{ url: '/apple-icon', sizes: '180x180', type: 'image/png' }],
    shortcut: '/favicon.ico',
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru" className={`${plusJakartaSans.variable} ${fraunces.variable}`}>
      <body className={plusJakartaSans.className}>
        <JsonLd />
        <YandexMetrica />
        {children}
      </body>
    </html>
  );
}