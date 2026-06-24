import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Кондиционеры Vicool в Гомеле — цены 2026, официальный дилер',
  description: 'Кондиционеры Vicool VIERA и PRO Light в Гомеле. Инверторные модели на заводе TCL, хладагент R32, Wi-Fi. Монтаж в день заказа, гарантия 3-5 лет.',
  keywords: [
    'кондиционер Vicool Гомель',
    'Vicool купить Гомель',
    'кондиционер Vicool цена Гомель',
    'Vicool установка Гомель',
    'купить Vicool с установкой Гомель',
    'Vicool VIERA Гомель',
    'Vicool PRO Light Гомель',
  ],
  alternates: { canonical: 'https://aircom-fort.by/articles/konditsioner-vicool-gomel' },
  openGraph: {
    title: 'Кондиционеры Vicool в Гомеле — купить с установкой',
    description: 'Кондиционеры Vicool VIERA и PRO Light в Гомеле. Установка в день заказа, гарантия 3-5 лет.',
    url: 'https://aircom-fort.by/articles/konditsioner-vicool-gomel',
    locale: 'ru_BY',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Кондиционеры Vicool в Гомеле — купить с установкой',
    description: 'Кондиционеры Vicool VIERA и PRO Light в Гомеле. Установка в день заказа, гарантия 3-5 лет.',
  },
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Кондиционеры Vicool в Гомеле — купить с установкой',
  datePublished: '2026-06-24',
  dateModified: '2026-06-24',
  author: { '@type': 'Organization', name: 'AirComfort', url: 'https://aircom-fort.by' },
  publisher: { '@type': 'Organization', name: 'AirComfort', url: 'https://aircom-fort.by' },
  url: 'https://aircom-fort.by/articles/konditsioner-vicool-gomel',
  inLanguage: 'ru',
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Сколько стоит кондиционер Vicool с установкой в Гомеле?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Кондиционер Vicool с установкой в Гомеле — от 2 149 р. Это стоимость модели VIERA VCI-DC09VI (инвертор, 9 000 BTU) плюс стандартный монтаж под ключ от 400 р. Для помещения 35 м² — от 2 299 р. за модель на 12 000 BTU.',
      },
    },
    {
      '@type': 'Question',
      name: 'Vicool VIERA или PRO Light — что выбрать?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'VIERA — основная инверторная линейка с классом энергоэффективности A++/A+ и встроенным Wi-Fi, гарантия 36 месяцев. PRO Light — более тихая серия (от 19 дБ) с классом A+++ и расширенной фильтрацией воздуха, гарантия 60 месяцев. Для спальни и детской лучше подойдёт PRO Light благодаря низкому уровню шума.',
      },
    },
    {
      '@type': 'Question',
      name: 'Какая гарантия на кондиционеры Vicool?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Гарантия производителя на серию VIERA — 36 месяцев (3 года), на серию PRO Light — 60 месяцев (5 лет). На монтажные работы — дополнительно 1 год гарантии от AirComfort.',
      },
    },
  ],
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      {children}
    </>
  );
}
