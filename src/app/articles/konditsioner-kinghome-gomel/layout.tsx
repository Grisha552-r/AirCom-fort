import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Кондиционеры King Home в Гомеле — цены 2026, установка | AirComfort',
  description: 'Купить кондиционер King Home в Гомеле с установкой под ключ. Инверторные модели от 990 р. Официальный дилер. Монтаж в день заказа, гарантия 2 года.',
  keywords: ['кондиционер King Home Гомель', 'купить King Home Гомель', 'King Home кондиционер цена', 'установка King Home Гомель', 'King Home сплит система Гомель'],
  alternates: { canonical: 'https://aircom-fort.by/articles/konditsioner-kinghome-gomel' },
  openGraph: {
    title: 'Кондиционеры King Home в Гомеле — цены и установка 2026',
    description: 'King Home в Гомеле от 990 р. с установкой. Инверторные и on/off модели.',
    url: 'https://aircom-fort.by/articles/konditsioner-kinghome-gomel',
    type: 'article',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Кондиционеры King Home в Гомеле — цены 2026, установка',
    description: 'Кондиционеры King Home в Гомеле: модели, цены, установка под ключ.',
    datePublished: '2026-05-01',
    dateModified: '2026-05-26',
    author: { '@type': 'Organization', name: 'AirComfort', url: 'https://aircom-fort.by' },
    publisher: { '@type': 'Organization', name: 'AirComfort', url: 'https://aircom-fort.by' },
    mainEntityOfPage: 'https://aircom-fort.by/articles/konditsioner-kinghome-gomel',
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'King Home — надёжный бренд?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'King Home — корейско-китайский бренд климатической техники. Производится на современных заводах с соблюдением международных стандартов качества. Хорошее соотношение цены и надёжности, гарантия 2 года.',
        },
      },
      {
        '@type': 'Question',
        name: 'Сколько стоит кондиционер King Home в Гомеле?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Кондиционер King Home в Гомеле стоит от 690 р. (on/off 9000 BTU) и от 990 р. (инверторный). Установка под ключ — от 290 р. дополнительно.',
        },
      },
      {
        '@type': 'Question',
        name: 'King Home или Ballu — что лучше выбрать?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Оба бренда примерно одинаковые по цене. Ballu — более известный бренд с широкой сервисной сетью. King Home — хорошая альтернатива, если важна цена. Принципиальной разницы в надёжности нет — оба производятся в Китае по аналогичным стандартам.',
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
