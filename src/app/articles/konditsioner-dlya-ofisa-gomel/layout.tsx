import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Кондиционер для офиса в Гомеле — выбор, цены и установка',
  description: 'Как выбрать кондиционер для офиса в Гомеле: площадь, тип системы, мощность. Установка офисных кондиционеров от 400 р. Кассетные и настенные сплиты, мультисплиты.',
  keywords: [
    'кондиционер для офиса Гомель',
    'установка кондиционера в офисе Гомель',
    'офисный кондиционер Гомель',
    'кассетный кондиционер для офиса',
    'мультисплит офис Гомель',
    'кондиционер для помещения Гомель',
    'климат-контроль офис Гомель',
  ],
  alternates: { canonical: 'https://aircom-fort.by/articles/konditsioner-dlya-ofisa-gomel' },
  openGraph: {
    title: 'Кондиционер для офиса в Гомеле — выбор и установка',
    description: 'Какой кондиционер выбрать для офиса: площадь, тип системы, бренды. Монтаж от 400 р.',
    url: 'https://aircom-fort.by/articles/konditsioner-dlya-ofisa-gomel',
    locale: 'ru_BY',
    type: 'article',
  },
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Кондиционер для офиса в Гомеле — как выбрать и сколько стоит установка',
  datePublished: '2026-05-26',
  dateModified: '2026-05-26',
  author: { '@type': 'Organization', name: 'AirComfort', url: 'https://aircom-fort.by' },
  publisher: { '@type': 'Organization', name: 'AirComfort', url: 'https://aircom-fort.by' },
  url: 'https://aircom-fort.by/articles/konditsioner-dlya-ofisa-gomel',
  inLanguage: 'ru',
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Какой кондиционер выбрать для офиса 30 кв м?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Для офиса 30 кв м подойдёт настенный инверторный кондиционер мощностью 12 000 BTU (3,5 кВт). Учитывайте число сотрудников и оргтехнику — они дают дополнительное тепло. При 5+ рабочих местах выбирайте модель с запасом 20%.',
      },
    },
    {
      '@type': 'Question',
      name: 'Что лучше для большого офиса — кассетный или настенный кондиционер?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Для офиса более 40 кв м с подвесными потолками — кассетный кондиционер: он равномерно распределяет воздух по 4 направлениям и не занимает место на стенах. Для небольших офисов настенный сплит дешевле в монтаже и обслуживании.',
      },
    },
    {
      '@type': 'Question',
      name: 'Сколько стоит установка кондиционера в офисе в Гомеле?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Монтаж настенного кондиционера в офисе — от 400 р. Кассетного — от 600 р. Мультисплит-системы (один наружный блок + 2–5 внутренних) — от 1 200 р. Цена зависит от сложности монтажа и длины трассы.',
      },
    },
    {
      '@type': 'Question',
      name: 'Нужно ли согласование для установки кондиционера в офисе?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Если офис в арендованном помещении — нужно согласие арендодателя. При размещении наружного блока на фасаде здания — согласование с управляющей компанией. В собственном офисном помещении дополнительных разрешений не требуется.',
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
