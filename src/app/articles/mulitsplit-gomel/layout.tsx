import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Мультисплит система в Гомеле — цены 2026, установка | AirComfort',
  description: 'Мультисплит система в Гомеле: один внешний блок — несколько комнат. Цены, бренды, монтаж. Выгоднее ли мультисплит нескольких обычных кондиционеров?',
  keywords: ['мультисплит Гомель', 'мульти сплит система Гомель', 'кондиционер на несколько комнат Гомель', 'мультизональный кондиционер Гомель', 'установка мультисплит Гомель'],
  alternates: { canonical: 'https://aircom-fort.by/articles/mulitsplit-gomel' },
  openGraph: {
    title: 'Мультисплит система в Гомеле — цены и установка 2026',
    description: 'Один внешний блок — несколько комнат. Цены на мультисплит системы в Гомеле.',
    url: 'https://aircom-fort.by/articles/mulitsplit-gomel',
    type: 'article',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Мультисплит система в Гомеле — цены 2026, установка',
    description: 'Мультисплит система: один внешний блок — несколько комнат. Цены и монтаж в Гомеле.',
    datePublished: '2026-05-01',
    dateModified: '2026-05-26',
    author: { '@type': 'Organization', name: 'AirComfort', url: 'https://aircom-fort.by' },
    publisher: { '@type': 'Organization', name: 'AirComfort', url: 'https://aircom-fort.by' },
    mainEntityOfPage: 'https://aircom-fort.by/articles/mulitsplit-gomel',
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Что такое мультисплит система?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Мультисплит — это система кондиционирования, где один внешний блок подключён к нескольким внутренним блокам (2–5 комнат). Каждая комната управляется независимо. Внешний блок устанавливается один, что экономит место на фасаде.',
        },
      },
      {
        '@type': 'Question',
        name: 'Мультисплит дешевле или дороже нескольких обычных кондиционеров?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'По цене оборудования мультисплит обычно дешевле 2–3 отдельных кондиционеров. Но монтаж сложнее и дороже — нужно тянуть трубопроводы в каждую комнату. В итоге суммарная стоимость примерно одинакова, зато мультисплит занимает меньше места снаружи.',
        },
      },
      {
        '@type': 'Question',
        name: 'Сколько стоит мультисплит система в Гомеле?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Мультисплит на 2 комнаты в Гомеле стоит от 2 500 р. под ключ (оборудование + монтаж + материалы). На 3 комнаты — от 3 500 р.',
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
