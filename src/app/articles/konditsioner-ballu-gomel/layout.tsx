import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Кондиционеры Ballu в Гомеле — купить с установкой от 1 290 р.',
  description: 'Официальный дилер Ballu в Гомеле. BSAGI, BSDI, Platinum — инверторные и On/Off модели. Монтаж в день заказа, гарантия 2 года.',
  keywords: [
    'кондиционер Ballu Гомель',
    'Ballu купить Гомель',
    'кондиционер Ballu цена Гомель',
    'Ballu установка Гомель',
    'купить Ballu с установкой Гомель',
    'Ballu инвертор Гомель',
    'сплит система Ballu Гомель',
  ],
  alternates: { canonical: 'https://aircom-fort.by/articles/konditsioner-ballu-gomel' },
  openGraph: {
    title: 'Кондиционеры Ballu в Гомеле — купить с установкой от 1 290 р.',
    description: 'Официальный дилер Ballu в Гомеле. Установка в день заказа, гарантия 2 года.',
    url: 'https://aircom-fort.by/articles/konditsioner-ballu-gomel',
    locale: 'ru_BY',
    type: 'article',
  },
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Кондиционеры Ballu в Гомеле — купить с установкой от 1 290 р.',
  datePublished: '2026-05-26',
  dateModified: '2026-05-26',
  author: { '@type': 'Organization', name: 'AirComfort', url: 'https://aircom-fort.by' },
  publisher: { '@type': 'Organization', name: 'AirComfort', url: 'https://aircom-fort.by' },
  url: 'https://aircom-fort.by/articles/konditsioner-ballu-gomel',
  inLanguage: 'ru',
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Сколько стоит кондиционер Ballu с установкой в Гомеле?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Кондиционер Ballu с установкой в Гомеле — от 1 290 р. Это стоимость модели BSAGI-09HN8 (инвертор, 9 000 BTU) плюс стандартный монтаж под ключ. Для комнаты 35 м² — от 1 590 р. за модель на 12 000 BTU.',
      },
    },
    {
      '@type': 'Question',
      name: 'Ballu инвертор или On/Off — что выбрать?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Инверторные серии Ballu (BSAGI, BSDI, BSEI, Platinum) экономят 30–40% электроэнергии и работают тише. On/Off серии (BSW, BSWH) дешевле при покупке на 100–200 р., но расходуют больше электричества. Для ежедневного использования — инвертор, для дачи или редкого применения — On/Off.',
      },
    },
    {
      '@type': 'Question',
      name: 'Какая гарантия на кондиционеры Ballu?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Официальная гарантия на кондиционеры Ballu — 2 года. AirComfort является авторизованным дилером, поэтому гарантия предоставляется напрямую от производителя. На монтажные работы — дополнительно 1 год гарантии от AirComfort.',
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
