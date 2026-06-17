import type { Metadata } from 'next';
import React from 'react';

const BASE = 'https://aircom-fort.by';

export const metadata: Metadata = {
  title: 'О компании — кондиционеры в Гомеле с установкой',
  description: 'AirComfort — продажа и установка кондиционеров в Гомеле. Electrolux, Ballu, Haier, LG, Mitsudai. Монтаж под ключ от 400 р., гарантия на работы 1 год. Официальный дилер.',
  keywords: [
    'о компании AirComfort',
    'кондиционеры Гомель установка',
    'монтаж кондиционера Гомель цена',
    'обслуживание кондиционера Гомель',
    'чистка кондиционера Гомель',
    'установка сплит системы под ключ',
    'официальный дилер кондиционеров Гомель',
    'как выбрать кондиционер для квартиры',
    'кондиционер для квартиры Гомель',
    'гарантия на кондиционер Гомель',
  ],
  robots: { index: true, follow: true },
  alternates: { canonical: `${BASE}/about` },
  openGraph: {
    title: 'О компании — кондиционеры в Гомеле',
    description: 'Продажа и установка кондиционеров в Гомеле. Electrolux, Ballu, Haier, LG, Mitsudai. Монтаж от 400 р., гарантия 1 год.',
    url: `${BASE}/about`,
    locale: 'ru_BY',
    type: 'website',
  },
};

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Главная', item: 'https://aircom-fort.by/' },
    { '@type': 'ListItem', position: 2, name: 'О компании', item: 'https://aircom-fort.by/about' },
  ],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Какой кондиционер выбрать для комнаты 20 м²?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Для комнаты площадью 20 м² подойдёт кондиционер мощностью 7 000–9 000 BTU (2–2,5 кВт). Это оптимальный вариант для небольшой спальни или кабинета. Рекомендуем модели Electrolux EACS-07 или Ballu BSUI-09HN8.',
      },
    },
    {
      '@type': 'Question',
      name: 'Сколько стоит установка кондиционера в Гомеле?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Стоимость стандартной установки кондиционера под ключ начинается от 400 р. Цена включает монтаж обоих блоков, прокладку трассы до 3 метров, вакуумирование и запуск. Дополнительный метр трассы — 50 р.',
      },
    },
    {
      '@type': 'Question',
      name: 'Есть ли гарантия на кондиционер и установку?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Да. На оборудование действует официальная гарантия производителя (1–3 года). На выполненный монтаж мы даём собственную гарантию 1 год. Если что-то пойдёт не так — устраним бесплатно.',
      },
    },
    {
      '@type': 'Question',
      name: 'Как часто нужно обслуживать кондиционер?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Рекомендуем профилактическое обслуживание 1 раз в год — обычно весной перед началом сезона. При интенсивной эксплуатации (офисы, магазины) — 2 раза в год. Регулярная чистка продлевает срок службы и сохраняет эффективность.',
      },
    },
    {
      '@type': 'Question',
      name: 'Работаете ли вы в Гомельской области?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Продажа кондиционеров — по всей Беларуси с доставкой. Установку и сервисное обслуживание выполняем в Гомеле и Гомельской области. Для уточнения зоны выезда звоните по телефону +375 29 105-06-94.',
      },
    },
  ],
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {children}
    </>
  );
}
