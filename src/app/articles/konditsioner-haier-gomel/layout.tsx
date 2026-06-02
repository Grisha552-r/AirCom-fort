import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Кондиционеры Haier в Гомеле — Wi-Fi, инвертор, официальный дилер',
  description: 'Официальный дилер Haier в Гомеле. Кондиционеры Haier с Wi-Fi, инвертором, Smart управлением. Все модели в наличии. Монтаж в день заказа, гарантия 2 года.',
  keywords: [
    'кондиционер Haier Гомель',
    'Haier купить Гомель',
    'кондиционер Haier цена Гомель',
    'Haier установка Гомель',
    'купить Haier с установкой',
    'Haier Wi-Fi кондиционер Гомель',
    'сплит система Haier Гомель',
  ],
  alternates: { canonical: 'https://aircom-fort.by/articles/konditsioner-haier-gomel' },
  openGraph: {
    title: 'Кондиционеры Haier в Гомеле — купить с установкой от 1 350 р.',
    description: 'Официальный дилер Haier в Гомеле. Wi-Fi в базовой комплектации, инвертор, монтаж в день заказа.',
    url: 'https://aircom-fort.by/articles/konditsioner-haier-gomel',
    locale: 'ru_BY',
    type: 'article',
  },
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Кондиционеры Haier в Гомеле — купить с установкой от 1 350 р.',
  datePublished: '2026-05-26',
  dateModified: '2026-05-26',
  author: { '@type': 'Organization', name: 'AirComfort', url: 'https://aircom-fort.by' },
  publisher: { '@type': 'Organization', name: 'AirComfort', url: 'https://aircom-fort.by' },
  url: 'https://aircom-fort.by/articles/konditsioner-haier-gomel',
  inLanguage: 'ru',
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Сколько стоит кондиционер Haier с установкой в Гомеле?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Кондиционер Haier с установкой в Гомеле — от 1 350 р. Это стоимость модели AS09NS4ERA (9 000 BTU, инвертор) плюс монтаж под ключ. Для комнаты 35 м² кондиционер Haier AS12NS4ERA — от 1 590 р. с установкой.',
      },
    },
    {
      '@type': 'Question',
      name: 'Есть ли Wi-Fi в кондиционерах Haier?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Большинство инверторных моделей Haier оснащены встроенным Wi-Fi модулем без доплаты. Управление через приложение hOn (iOS и Android) — дистанционное включение, расписание, мониторинг. Это отличает Haier от конкурентов, где Wi-Fi часто идёт как платная опция.',
      },
    },
    {
      '@type': 'Question',
      name: 'Какая гарантия на кондиционеры Haier?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Официальная гарантия производителя на кондиционеры Haier — 2 года. AirComfort является авторизованным дилером. На монтажные работы — дополнительно 1 год от AirComfort.',
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
