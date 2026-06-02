import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Сплит-система в Гомеле — купить и установить от 1 290 р.',
  description: 'Купить сплит-систему в Гомеле от 1 290 р. с установкой. Все ведущие бренды. Монтаж в день заказа, гарантия 1 год на монтаж.',
  keywords: [
    'сплит система Гомель',
    'купить сплит систему Гомель',
    'сплит система цена Гомель',
    'сплит система с установкой Гомель',
    'монтаж сплит системы Гомель',
    'установка сплит системы Гомель',
    'сплит система под ключ Гомель',
    'сплит кондиционер Гомель',
  ],
  alternates: { canonical: 'https://aircom-fort.by/articles/split-sistema-gomel' },
  openGraph: {
    title: 'Сплит-система в Гомеле — купить и установить от 1 290 р.',
    description: 'Все ведущие бренды в наличии. Монтаж под ключ в день заказа.',
    url: 'https://aircom-fort.by/articles/split-sistema-gomel',
    locale: 'ru_BY',
    type: 'article',
  },
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Сплит-система в Гомеле — купить и установить от 1 290 р.',
  datePublished: '2026-05-26',
  dateModified: '2026-05-26',
  author: { '@type': 'Organization', name: 'AirComfort', url: 'https://aircom-fort.by' },
  publisher: { '@type': 'Organization', name: 'AirComfort', url: 'https://aircom-fort.by' },
  url: 'https://aircom-fort.by/articles/split-sistema-gomel',
  inLanguage: 'ru',
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Сколько стоит сплит-система с установкой в Гомеле?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Сплит-система с установкой в Гомеле — от 1 290 р. под ключ. Это включает кондиционер 9 000 BTU (для помещения 25 м²) плюс стандартный монтаж: крепление блоков, трасса до 3 м, вакуумирование, запуск. Для 35 м² — от 1 490 р.',
      },
    },
    {
      '@type': 'Question',
      name: 'Какая сплит-система лучше для квартиры в Гомеле?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Для квартиры в Гомеле рекомендуем инверторные сплит-системы Electrolux EACS-I, Ballu BSAGI или Haier NS-серии. Инвертор потребляет на 30–40% меньше электроэнергии, работает тише и поддерживает температуру точнее. Мощность выбирайте из расчёта 1 кВт на 10 м² помещения.',
      },
    },
    {
      '@type': 'Question',
      name: 'Сколько времени занимает установка сплит-системы?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Стандартная установка сплит-системы в Гомеле занимает 2–4 часа. Это включает: разметку, бурение отверстия, монтаж внутреннего и наружного блоков, прокладку медной трассы, вакуумирование и пуско-наладку. Выезд мастера — в день заказа.',
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
