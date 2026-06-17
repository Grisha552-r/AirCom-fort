import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Ремонт кондиционеров в Гомеле — диагностика бесплатно, выезд в день',
  description: 'Ремонт кондиционеров в Гомеле: не охлаждает, течёт, не включается, шумит. Диагностика бесплатно при ремонте. Выезд в день заказа. Гарантия 6 мес.',
  alternates: { canonical: 'https://aircom-fort.by/articles/remont-konditsionera-gomel' },
  openGraph: {
    title: 'Ремонт кондиционеров в Гомеле — диагностика бесплатно',
    description: 'Не охлаждает, течёт, не включается. Выезд мастера в день заказа. Гарантия 6 месяцев.',
    url: 'https://aircom-fort.by/articles/remont-konditsionera-gomel',
    locale: 'ru_BY',
    type: 'website',
  },
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Ремонт кондиционера в Гомеле — цены 2026, диагностика бесплатно',
  datePublished: '2026-05-01',
  dateModified: '2026-05-25',
  author: { '@type': 'Organization', name: 'AirComfort', url: 'https://aircom-fort.by' },
  publisher: { '@type': 'Organization', name: 'AirComfort', url: 'https://aircom-fort.by' },
  url: 'https://aircom-fort.by/articles/remont-konditsionera-gomel',
  inLanguage: 'ru',
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Сколько стоит ремонт кондиционера в Гомеле?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Стоимость ремонта зависит от неисправности. Заправка фреоном — от 60 р. Замена платы управления — от 150 р. Замена компрессора — от 400 р. Диагностика бесплатна при заказе ремонта. Выезд мастера в день заказа.',
      },
    },
    {
      '@type': 'Question',
      name: 'Почему кондиционер не охлаждает, хотя работает?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Кондиционер работает, но не охлаждает — чаще всего из-за нехватки фреона (утечка), загрязнённых фильтров или ледяной корки на испарителе. Начните с чистки фильтров (промойте водой и высушите). Если не помогло — нужна диагностика и, вероятно, дозаправка фреоном.',
      },
    },
    {
      '@type': 'Question',
      name: 'Можно ли отремонтировать кондиционер самому?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Почистить фильтры — можно. Всё остальное (дозаправка фреоном, замена деталей, устранение утечек) — только мастер. Работа с хладагентом требует специального оборудования и допуска. Самостоятельная попытка обычно приводит к потере фреона и дополнительным расходам.',
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
