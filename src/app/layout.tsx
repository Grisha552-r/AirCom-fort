import React from 'react';
import type { Metadata, Viewport } from 'next';
import { Plus_Jakarta_Sans, Fraunces } from 'next/font/google';
import '../styles/tailwind.css';
import JsonLd from '@/components/JsonLd';
import YandexMetrica from '@/components/YandexMetrica';
import GoogleAnalytics from '@/components/GoogleAnalytics';
import FloatingCTA from '@/components/FloatingCTA';
import FloatingButtons from '@/components/FloatingButtons';

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
    default: `Кондиционер в Гомеле с установкой от 1 290 р. — AirComfort`,
    template: '%s | AirComfort',
  },
  description: 'Купить кондиционер в Гомеле с установкой от 1 290 р. Electrolux, Ballu, Haier, LG — 300+ моделей. Монтаж от 400 р., выезд в день заказа, гарантия 1 год.',
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
    url: 'https://aircom-fort.by/',
    siteName: 'AirComfort',
    title: `Кондиционеры в Гомеле от 1 290 р. с установкой — AirComfort`,
    description: 'Купить кондиционер в Гомеле с установкой под ключ от 1 290 р. 300+ моделей: Electrolux, Ballu, Haier, LG. Монтаж от 400 р., выезд в день заказа.',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'AirComfort — Кондиционеры в Гомеле от 1 290 р.' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: `Кондиционеры в Гомеле от 1 290 р. с установкой — AirComfort`,
    description: 'Electrolux, Ballu, Haier, LG — 300+ моделей. Монтаж от 400 р., выезд в день заказа, гарантия 1 год.',
    images: [{ url: '/opengraph-image', alt: 'AirComfort — Кондиционеры в Гомеле от 1 290 р.' }],
  },
  alternates: {
    canonical: 'https://aircom-fort.by/',
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
        <GoogleAnalytics />
        {children}
        <FloatingCTA />
        <FloatingButtons />
      </body>
    </html>
  );
}