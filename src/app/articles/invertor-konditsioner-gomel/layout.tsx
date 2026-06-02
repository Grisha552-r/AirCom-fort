import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Инверторный кондиционер в Гомеле — купить с установкой, цены 2026',
  description: 'Инверторный кондиционер в Гомеле от 1 290 р. с установкой под ключ. Electrolux, Ballu, Haier, LG. Экономия до 40% электроэнергии, монтаж в день заказа.',
  keywords: [
    'инверторный кондиционер Гомель',
    'инвертор кондиционер купить Гомель',
    'инверторный кондиционер цена Гомель',
    'купить инверторный кондиционер',
    'кондиционер инвертор Гомель',
    'сплит система инвертор Гомель',
    'инверторный кондиционер с установкой Гомель',
  ],
  alternates: { canonical: 'https://aircom-fort.by/articles/invertor-konditsioner-gomel' },
  openGraph: {
    title: 'Инверторный кондиционер в Гомеле — купить с установкой от 1 290 р.',
    description: 'Инвертор или обычный? Объясняем разницу и предлагаем лучшие инверторные модели в Гомеле с установкой.',
    url: 'https://aircom-fort.by/articles/invertor-konditsioner-gomel',
    locale: 'ru_BY',
    type: 'article',
  },
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Инверторный кондиционер в Гомеле — купить с установкой, цены 2026',
  datePublished: '2026-05-26',
  dateModified: '2026-05-26',
  author: { '@type': 'Organization', name: 'AirComfort', url: 'https://aircom-fort.by' },
  publisher: { '@type': 'Organization', name: 'AirComfort', url: 'https://aircom-fort.by' },
  url: 'https://aircom-fort.by/articles/invertor-konditsioner-gomel',
  inLanguage: 'ru',
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Сколько стоит инверторный кондиционер с установкой в Гомеле?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Инверторный кондиционер с установкой в Гомеле — от 1 290 р. Это стоимость Ballu BSAGI-09 или Mitsudai MD-SNE09AI (инвертор, 9 000 BTU) + монтаж под ключ. Инверторные модели Electrolux EACS-I — от 1 690 р. с установкой.',
      },
    },
    {
      '@type': 'Question',
      name: 'Инвертор действительно экономит электроэнергию?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Да. При ежедневном использовании (8+ часов в день) инверторный кондиционер потребляет на 30–40% меньше электроэнергии, чем On/Off модель той же мощности. За сезон (4 месяца) экономия составит 80–150 р. За 5 лет — 400–750 р., что полностью перекрывает разницу в цене покупки.',
      },
    },
    {
      '@type': 'Question',
      name: 'Все ли современные кондиционеры инверторные?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Нет. На рынке продаются как инверторные, так и On/Off модели. On/Off дешевле при покупке на 100–300 р., но дороже в эксплуатации. Обратите внимание на маркировку: у Electrolux инверторные серии обозначаются "EACS-I" (буква I), у Ballu — "BSAGI", "BSDI", "BSEI".',
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
