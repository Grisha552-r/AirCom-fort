import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Монтаж кассетного кондиционера — стоимость установки в Гомеле',
  description: 'Стоимость монтажа кассетного кондиционера в Гомеле. Особенности установки в потолок, цены на работу, отличия от настенного сплита. AirComfort.',
  keywords: [
    'монтаж кассетного кондиционера',
    'стоимость монтажа кассетного кондиционера',
    'установка кассетного кондиционера Гомель',
    'кассетный кондиционер цена установка',
    'кассетный кондиционер монтаж цена',
  ],
  alternates: { canonical: 'https://aircom-fort.by/articles/montazh-kassetnogo-konditsionera' },
  openGraph: {
    title: 'Монтаж кассетного кондиционера в Гомеле — стоимость',
    description: 'Цены на установку кассетного кондиционера в потолок. Особенности монтажа и что влияет на стоимость.',
    url: 'https://aircom-fort.by/articles/montazh-kassetnogo-konditsionera',
    locale: 'ru_BY',
    type: 'article',
  },
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Монтаж кассетного кондиционера — стоимость установки в Гомеле',
  datePublished: '2026-05-01',
  dateModified: '2026-05-25',
  author: { '@type': 'Organization', name: 'AirComfort', url: 'https://aircom-fort.by' },
  publisher: { '@type': 'Organization', name: 'AirComfort', url: 'https://aircom-fort.by' },
  url: 'https://aircom-fort.by/articles/montazh-kassetnogo-konditsionera',
  inLanguage: 'ru',
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Сколько стоит монтаж кассетного кондиционера?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Монтаж кассетного кондиционера стоит от 600–800 р. за одну единицу в зависимости от мощности и условий установки. Это дороже настенного сплита из-за сложности монтажа в потолок.',
      },
    },
    {
      '@type': 'Question',
      name: 'Чем кассетный кондиционер отличается от настенного?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Кассетный кондиционер монтируется в подвесной потолок и распределяет воздух равномерно по четырём направлениям. Он не занимает место на стене и незаметен в интерьере. Настенный сплит проще в монтаже и дешевле.',
      },
    },
    {
      '@type': 'Question',
      name: 'Где используется кассетный кондиционер?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'В офисах, магазинах, ресторанах и других коммерческих помещениях с подвесными потолками. Для квартир подходит реже — только при наличии подвесного потолка.',
      },
    },
  ],
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {children}
    </>
  );
}
