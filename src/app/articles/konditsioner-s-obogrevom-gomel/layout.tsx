import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Кондиционер с обогревом в Гомеле — цены 2026, установка | AirComfort',
  description: 'Кондиционер как обогреватель в Гомеле: в 2–3 раза экономичнее электрообогревателя. Инверторные модели работают при −20°C. Цены с монтажом от 1 290 р.',
  keywords: ['кондиционер с обогревом Гомель', 'кондиционер обогрев зима Гомель', 'тепловой насос Гомель', 'кондиционер для обогрева квартиры', 'инверторный кондиционер обогрев'],
  alternates: { canonical: 'https://aircom-fort.by/articles/konditsioner-s-obogrevom-gomel' },
  openGraph: {
    title: 'Кондиционер с обогревом в Гомеле — цены и установка 2026',
    description: 'Кондиционер вместо обогревателя — в 2–3 раза экономичнее. Работает при −20°C. Установка в Гомеле.',
    url: 'https://aircom-fort.by/articles/konditsioner-s-obogrevom-gomel',
    type: 'article',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Кондиционер с обогревом в Гомеле — цены 2026, установка',
    description: 'Кондиционер как обогреватель в Гомеле: экономичнее электрообогревателя в 2–3 раза.',
    datePublished: '2026-05-01',
    dateModified: '2026-05-26',
    author: { '@type': 'Organization', name: 'AirComfort', url: 'https://aircom-fort.by' },
    publisher: { '@type': 'Organization', name: 'AirComfort', url: 'https://aircom-fort.by' },
    mainEntityOfPage: 'https://aircom-fort.by/articles/konditsioner-s-obogrevom-gomel',
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'До какой температуры кондиционер может работать на обогрев?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Обычные сплит-системы работают на обогрев до −15°C. Инверторные модели с функцией «зимний комплект» — до −20°C и ниже. Специальные серии (Electrolux Nordic, Ballu Platinum, Haier Aurora) работают до −25°C и −30°C.',
        },
      },
      {
        '@type': 'Question',
        name: 'Насколько кондиционер экономичнее электрического обогревателя?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Кондиционер потребляет в 2,5–3,5 раза меньше электроэнергии, чем обогреватель аналогичной мощности. Это объясняется принципом работы теплового насоса: кондиционер не генерирует тепло, а переносит его с улицы в помещение. COP (коэффициент эффективности) инверторного кондиционера — 3,5–5,0.',
        },
      },
      {
        '@type': 'Question',
        name: 'Какой кондиционер лучше для обогрева зимой в Гомеле?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Для Гомеля с морозами до −25°C рекомендуем: Electrolux EACS-I Nordic (до −25°C), Ballu Platinum Evolution (до −25°C) или Haier AS12NS4ERA с функцией Flash Start. Эти модели работают эффективно при сильных морозах.',
        },
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      {children}
    </>
  );
}
