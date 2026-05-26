import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Кондиционеры Gree в Гомеле — цены 2026, установка | AirComfort',
  description: 'Купить кондиционер Gree в Гомеле с установкой под ключ. Gree — №1 производитель кондиционеров в мире. Инверторные модели от 990 р. Монтаж в день заказа.',
  keywords: ['кондиционер Gree Гомель', 'купить Gree Гомель', 'Gree кондиционер цена Гомель', 'установка кондиционера Gree Гомель', 'Gree Bora Гомель'],
  alternates: { canonical: 'https://aircom-fort.by/articles/konditsioner-gree-gomel' },
  openGraph: {
    title: 'Кондиционеры Gree в Гомеле — цены и установка 2026',
    description: 'Gree — №1 производитель кондиционеров в мире. Купить с установкой в Гомеле от 990 р.',
    url: 'https://aircom-fort.by/articles/konditsioner-gree-gomel',
    type: 'article',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Кондиционеры Gree в Гомеле — цены 2026, установка',
    description: 'Кондиционеры Gree в Гомеле: модели, цены, установка под ключ.',
    datePublished: '2026-05-01',
    dateModified: '2026-05-26',
    author: { '@type': 'Organization', name: 'AirComfort', url: 'https://aircom-fort.by' },
    publisher: { '@type': 'Organization', name: 'AirComfort', url: 'https://aircom-fort.by' },
    mainEntityOfPage: 'https://aircom-fort.by/articles/konditsioner-gree-gomel',
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Gree — надёжный бренд кондиционеров?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Gree — крупнейший в мире производитель кондиционеров (Китай), выпускает более 60 миллионов единиц в год. Производит OEM-оборудование для Daikin и других мировых брендов. Высокое качество при разумной цене.',
        },
      },
      {
        '@type': 'Question',
        name: 'Сколько стоит кондиционер Gree в Гомеле?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Кондиционер Gree в Гомеле стоит от 690 р. (Bora On/Off) и от 990 р. (Amber инверторный). Установка под ключ — от 290 р. дополнительно.',
        },
      },
      {
        '@type': 'Question',
        name: 'Чем Gree отличается от Midea и Haier?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Gree специализируется исключительно на климатической технике, тогда как Midea и Haier — диверсифицированные холдинги. Это позволяет Gree концентрировать ресурсы на R&D в области кондиционирования. Gree производит оборудование для Daikin по OEM-контракту.',
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
