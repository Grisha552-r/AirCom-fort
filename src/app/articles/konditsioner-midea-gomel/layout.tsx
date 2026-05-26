import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Кондиционеры Midea в Гомеле — цены 2026, установка | AirComfort',
  description: 'Купить кондиционер Midea в Гомеле с установкой под ключ. Инверторные модели от 890 р. Доставка, монтаж, гарантия. Сравнение серий Midea.',
  keywords: ['кондиционер Midea Гомель', 'купить Midea Гомель', 'Midea кондиционер цена Гомель', 'установка кондиционера Midea Гомель', 'Midea инверторный Гомель'],
  alternates: { canonical: 'https://aircom-fort.by/articles/konditsioner-midea-gomel' },
  openGraph: {
    title: 'Кондиционеры Midea в Гомеле — цены и установка 2026',
    description: 'Кондиционеры Midea в Гомеле от 890 р. с установкой под ключ. Инверторные и обычные модели.',
    url: 'https://aircom-fort.by/articles/konditsioner-midea-gomel',
    type: 'article',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Кондиционеры Midea в Гомеле — цены 2026, установка',
    description: 'Кондиционеры Midea в Гомеле: модели, цены, установка под ключ.',
    datePublished: '2026-05-01',
    dateModified: '2026-05-26',
    author: { '@type': 'Organization', name: 'AirComfort', url: 'https://aircom-fort.by' },
    publisher: { '@type': 'Organization', name: 'AirComfort', url: 'https://aircom-fort.by' },
    mainEntityOfPage: 'https://aircom-fort.by/articles/konditsioner-midea-gomel',
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Midea — надёжный бренд?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Midea — крупнейший в мире производитель климатической техники (Китай), выпускает оборудование под брендами Electrolux, AEG и др. Хорошее соотношение цены и надёжности. Гарантия 2–3 года.',
        },
      },
      {
        '@type': 'Question',
        name: 'Сколько стоит кондиционер Midea в Гомеле?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Кондиционер Midea в Гомеле стоит от 590 р. (on/off) и от 890 р. (инверторный). Установка под ключ — от 290 р. дополнительно.',
        },
      },
      {
        '@type': 'Question',
        name: 'Есть ли у Midea инверторные кондиционеры?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Да, большинство современных Midea — инверторные. Серии: Midea Mission (бюджет), Midea Xtreme Save (энергоэффективность A+++), Midea All Easy Pro (Wi-Fi управление).',
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
