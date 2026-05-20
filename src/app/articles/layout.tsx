import type { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Статьи о кондиционерах — как выбрать, установить и обслуживать',
  description: 'Полезные статьи и советы о кондиционерах: как выбрать сплит-систему, инвертор или обычный, правила использования, чистка и обслуживание. От экспертов AirComfort Гомель.',
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
