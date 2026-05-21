import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Установка кондиционера в Гомеле — монтаж сплит-системы под ключ',
  description: 'Установка кондиционера в Гомеле под ключ от 400 р. Монтаж сплит-системы за 1 день, гарантия 1 год. Выезд мастера бесплатно. Фирмы по установке кондиционеров — AirComfort.',
  keywords: [
    'установка кондиционера Гомель',
    'монтаж кондиционера Гомель',
    'кондиционер с установкой Гомель',
    'фирмы по установке кондиционеров Гомель',
    'установить кондиционер Гомель',
    'монтаж сплит системы Гомель',
    'кондиционеры с установкой цена Гомель',
  ],
  alternates: { canonical: 'https://aircom-fort.by/articles/ustanovka-konditsionera-v-gomele' },
  openGraph: {
    title: 'Установка кондиционера в Гомеле — монтаж под ключ',
    description: 'Монтаж сплит-системы в Гомеле от 400 р. Выезд мастера в день заказа, гарантия 1 год.',
    url: 'https://aircom-fort.by/articles/ustanovka-konditsionera-v-gomele',
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
      name: 'Сколько стоит установка кондиционера в Гомеле?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Стандартный монтаж сплит-системы в AirComfort — от 400 р. за помещение до 30 м². В цену включена трасса 5 м, медные трубки, кабель, крепёж и пусконаладка.',
      },
    },
    {
      '@type': 'Question',
      name: 'Какие фирмы делают установку кондиционеров в Гомеле?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'AirComfort — сертифицированная компания по продаже и монтажу кондиционеров в Гомеле. Работаем с 2018 года, гарантия на монтаж 1 год.',
      },
    },
    {
      '@type': 'Question',
      name: 'Можно ли купить кондиционер с установкой в один день?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Да. При наличии модели на складе мастер может приехать в день заказа или на следующий день. Установка занимает 2–4 часа.',
      },
    },
    {
      '@type': 'Question',
      name: 'Что входит в монтаж кондиционера под ключ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Под ключ — это крепление обоих блоков, прокладка медной трассы (5 м), электрокабель, дренаж, вакуумирование и пуско-наладка. Всё включено в цену.',
      },
    },
  ],
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {children}
    </>
  );
}
