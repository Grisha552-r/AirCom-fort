import type { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Статьи о кондиционерах — как выбрать, установить и обслуживать',
  description: 'Статьи о кондиционерах: как выбрать, инвертор или обычный, правила использования, чистка и обслуживание. Советы от экспертов AirComfort в Гомеле.',
  keywords: [
    'как выбрать кондиционер',
    'инверторный кондиционер плюсы',
    'обслуживание кондиционера',
    'чистка кондиционера',
    'мобильный или сплит система',
    'установка кондиционера цена',
    'кондиционер для квартиры советы',
    'кондиционер Гомель',
  ],
  alternates: { canonical: 'https://aircom-fort.by/articles' },
};

export default function ArticlesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
