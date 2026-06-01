import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Кондиционеры Mitsudai в Гомеле — купить с установкой от 1 254 р.',
  description: 'Кондиционеры Mitsudai в Гомеле: бюджетные сплит-системы с установкой от 1 254 р. Серии SNE, надёжный компрессор, монтаж в день заказа. AirComfort — официальный дилер.',
  keywords: [
    'кондиционер Mitsudai Гомель',
    'Mitsudai купить Гомель',
    'кондиционер Митсудай',
    'сплит система Mitsudai',
    'Mitsudai DCH Гомель',
    'бюджетный кондиционер Гомель',
    'кондиционер недорого Гомель',
  ],
  alternates: { canonical: 'https://aircom-fort.by/articles/konditsioner-mitsudai-gomel' },
  openGraph: {
    title: 'Кондиционеры Mitsudai в Гомеле — купить с установкой от 990 р.',
    description: 'Бюджетные сплит-системы Mitsudai с установкой в Гомеле. Монтаж в день заказа, гарантия 1 год.',
    url: 'https://aircom-fort.by/articles/konditsioner-mitsudai-gomel',
    locale: 'ru_BY',
    type: 'article',
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Сколько стоит кондиционер Mitsudai с установкой в Гомеле?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Кондиционер Mitsudai с монтажом под ключ в Гомеле — от 1 254 р. (7 000 BTU). В цену входит сплит-система, доставка, монтаж трассы до 3 м, пуско-наладка и гарантия 1 год.',
      },
    },
    {
      '@type': 'Question',
      name: 'Где производятся кондиционеры Mitsudai?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Кондиционеры Mitsudai производятся в Китае на заводах, аккредитованных для выпуска климатической техники. Качество соответствует международным стандартам, техника сертифицирована для продажи в Беларуси.',
      },
    },
    {
      '@type': 'Question',
      name: 'Надёжны ли кондиционеры Mitsudai?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Mitsudai — достаточно надёжная техника в своём ценовом сегменте. Подходит для спальни, небольшой комнаты или летнего использования. При регулярном использовании круглый год лучше рассмотреть инверторные бренды.',
      },
    },
  ],
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Кондиционеры Mitsudai в Гомеле — купить с установкой',
  datePublished: '2026-05-27',
  dateModified: '2026-05-27',
  author: { '@type': 'Organization', name: 'AirComfort', url: 'https://aircom-fort.by' },
  publisher: { '@type': 'Organization', name: 'AirComfort', url: 'https://aircom-fort.by' },
  url: 'https://aircom-fort.by/articles/konditsioner-mitsudai-gomel',
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
