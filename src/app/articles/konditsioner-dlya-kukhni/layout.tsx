import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Кондиционер для кухни — какой выбрать и особенности установки',
  description: 'Кухня требует +20–30% мощности из-за плиты — как считать? Требования к монтажу, лучшие модели. Установка кондиционера на кухне в Гомеле от 1 290 р.',
  keywords: [
    'кондиционер для кухни',
    'кондиционер на кухню',
    'кондиционер на кухню Гомель',
    'установка кондиционера на кухне',
    'выбрать кондиционер для кухни',
    'кондиционер для кухни с плитой',
  ],
  alternates: { canonical: 'https://aircom-fort.by/articles/konditsioner-dlya-kukhni' },
  openGraph: {
    title: 'Кондиционер для кухни — как выбрать и установить',
    description: 'Советы по выбору кондиционера для кухни с учётом плиты, пара и запахов. Особенности монтажа.',
    url: 'https://aircom-fort.by/articles/konditsioner-dlya-kukhni',
    locale: 'ru_BY',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Кондиционер для кухни — как выбрать и установить',
    description: 'Советы по выбору кондиционера для кухни с учётом плиты, пара и запахов. Особенности монтажа.',
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Какую мощность кондиционера выбрать для кухни?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Для кухни рассчитывайте мощность с запасом 30–40% от стандартного: добавьте 0,5–1 кВт за плиту и духовку. Для кухни 10–12 м² — 9 000 BTU, для 15–18 м² — 12 000 BTU.',
      },
    },
    {
      '@type': 'Question',
      name: 'Можно ли установить кондиционер над кухонной плитой?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Нет. Кондиционер нельзя устанавливать над плитой — жир и пар забьют фильтры и теплообменник. Оптимальное место — стена напротив плиты или боковая стена, не менее 2 м от источника тепла.',
      },
    },
    {
      '@type': 'Question',
      name: 'Как часто нужно чистить кондиционер на кухне?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Кондиционер на кухне загрязняется в 2–3 раза быстрее, чем в обычной комнате из-за жира и пара. Чистку фильтров рекомендуется делать раз в месяц, полное ТО — каждые 6–12 месяцев.',
      },
    },
  ],
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Кондиционер для кухни: какой выбрать и особенности установки',
  datePublished: '2026-05-27',
  dateModified: '2026-05-27',
  author: { '@type': 'Organization', name: 'AirComfort', url: 'https://aircom-fort.by' },
  publisher: { '@type': 'Organization', name: 'AirComfort', url: 'https://aircom-fort.by' },
  url: 'https://aircom-fort.by/articles/konditsioner-dlya-kukhni',
  inLanguage: 'ru',
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
