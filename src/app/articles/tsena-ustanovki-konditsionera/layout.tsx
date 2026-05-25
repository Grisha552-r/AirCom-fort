import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Сколько стоит установка кондиционера в Гомеле в 2026 году — цены на монтаж',
  description: 'Актуальные цены на установку кондиционера в Гомеле в 2026 году. Монтаж от 400 р. Что входит в стоимость, скрытые доплаты, сравнение вариантов.',
  keywords: ['установка кондиционера цена Гомель', 'сколько стоит установка кондиционера', 'монтаж кондиционера цена', 'стоимость установки кондиционера Гомель 2026'],
  alternates: { canonical: 'https://aircom-fort.by/articles/tsena-ustanovki-konditsionera' },
  openGraph: {
    title: 'Сколько стоит установка кондиционера в Гомеле — цены 2026',
    description: 'Монтаж от 400 р. Разбираем из чего складывается цена и как не переплатить.',
    url: 'https://aircom-fort.by/articles/tsena-ustanovki-konditsionera',
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
      name: 'Сколько стоит стандартная установка кондиционера в Гомеле?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Стандартный монтаж кондиционера в AirComfort: до 30 м² — 400 р., до 50 м² — 500 р., до 70 м² — 550 р. В стоимость включена трасса 5 м, медные трубки, кабель и всё крепление.',
      },
    },
    {
      '@type': 'Question',
      name: 'Что входит в стоимость установки кондиционера?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'В базовую цену монтажа входит: прокладка трассы длиной 5 м, медные трубки, электрокабель, крепление внутреннего и наружного блоков, вакуумирование системы, пусконаладочные работы и проверка. Доплата за каждый доп. метр трассы — 50 р.',
      },
    },
    {
      '@type': 'Question',
      name: 'Сколько стоит установка кондиционера через балкон?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Монтаж через балкон или лоджию добавляет к стоимости 50 р. Это связано со сложностью прокладки трассы. Итоговая цена: от 450 р. за комнату до 30 м².',
      },
    },
    {
      '@type': 'Question',
      name: 'Сколько времени занимает установка кондиционера?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Стандартная установка кондиционера занимает 2–4 часа. После монтажа мастер проводит пуско-наладку и объясняет правила эксплуатации. Сложные случаи (несколько комнат, высотные работы) могут занять до 6–8 часов.',
      },
    },
  ],
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Сколько стоит установка кондиционера в Гомеле в 2026 году',
  datePublished: '2026-05-01',
  dateModified: '2026-05-25',
  author: { '@type': 'Organization', name: 'AirComfort', url: 'https://aircom-fort.by' },
  publisher: { '@type': 'Organization', name: 'AirComfort', url: 'https://aircom-fort.by' },
  url: 'https://aircom-fort.by/articles/tsena-ustanovki-konditsionera',
  inLanguage: 'ru',
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
