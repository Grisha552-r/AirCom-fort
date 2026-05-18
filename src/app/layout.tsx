import React from 'react';
import type { Metadata, Viewport } from 'next';
import { Plus_Jakarta_Sans, Fraunces } from 'next/font/google';
import '../styles/tailwind.css';
import JsonLd from '@/components/JsonLd';

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
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

export const metadata: Metadata = {
  metadataBase: new URL('https://aircom-fort.by'),
  title: {
    default: 'Установка и продажа кондиционеров в Гомеле — AirComfort',
    template: '%s — AirComfort',
  },
  description: 'Установка и продажа кондиционеров в Гомеле и области — AirComfort. Electrolux, Ballu, Haier, LG, Mitsudai. Монтаж под ключ от 400 р., гарантия 1 год.',
  keywords: [
    'установка кондиционеров Гомель',
    'продажа кондиционеров Гомель',
    'купить кондиционер Гомель',
    'кондиционер с установкой Гомель',
    'кондиционер под ключ Гомель',
    'кондиционер Гомель цена',
    'сплит система Гомель',
    'установка кондиционера Гомель',
    'кондиционер Electrolux Гомель',
    'кондиционер Ballu Гомель',
    'кондиционер Haier Гомель',
    'кондиционер LG Гомель',
    'кондиционер Mitsudai',
    'мобильный кондиционер купить',
    'кондиционер инвертор Гомель',
    'сплит система инвертор купить',
    'монтаж кондиционера Гомель',
    'обслуживание кондиционера Гомель',
    'климатическое оборудование Гомель',
    'кондиционер недорого Гомель',
    'кондиционер 9000 BTU',
    'кондиционер 12000 BTU',
    'настенный кондиционер купить',
    'AirComfort Гомель',
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
    title: 'Установка и продажа кондиционеров в Гомеле — AirComfort',
    description: 'Установка и продажа кондиционеров в Гомеле и области. Electrolux, Ballu, Haier, LG, Mitsudai. Монтаж под ключ от 400 р., гарантия 1 год.',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'AirComfort — Кондиционеры в Гомеле' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Купить кондиционер в Гомеле — AirComfort',
    description: 'Electrolux, Ballu, Haier, LG, Mitsudai. Установка и обслуживание кондиционеров в Гомеле.',
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
        {children}
      </body>
    </html>
  );
}