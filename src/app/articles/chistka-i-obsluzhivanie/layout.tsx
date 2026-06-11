import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Чистка кондиционера в Гомеле — когда нужна и сколько стоит',
  description: 'Чистка кондиционера в Гомеле от 100 р. Признаки загрязнения, как часто нужно, что сделать самому. Профессиональная промывка — выезд мастера в день заказа.',
  keywords: ['чистка кондиционера Гомель', 'обслуживание кондиционера Гомель', 'промывка кондиционера', 'когда чистить кондиционер'],
  alternates: { canonical: 'https://aircom-fort.by/articles/chistka-i-obsluzhivanie' },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Как часто нужно чистить кондиционер?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Фильтры внутреннего блока нужно чистить каждые 2–4 недели в период активного использования. Профессиональную чистку теплообменника и дренажа — 1 раз в год перед сезоном. Это продлевает срок службы кондиционера и сохраняет его эффективность.',
      },
    },
    {
      '@type': 'Question',
      name: 'Что будет, если не чистить кондиционер?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Загрязнённый кондиционер теряет 30–40% мощности, начинает распространять неприятный запах, потребляет больше электроэнергии и быстрее выходит из строя. Забитый дренаж приводит к протечкам и образованию плесени.',
      },
    },
    {
      '@type': 'Question',
      name: 'Сколько стоит чистка кондиционера в Гомеле?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Стоимость профессиональной чистки кондиционера в AirComfort уточняйте по телефону +375 29 105-06-94. В услугу входит промывка теплообменника, чистка дренажной системы, дезинфекция внутреннего блока и проверка работы.',
      },
    },
    {
      '@type': 'Question',
      name: 'Как понять, что кондиционер нужно почистить?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Признаки загрязнения: неприятный или затхлый запах при работе, снижение холодопроизводительности, протечка конденсата, посторонний шум или вибрация. Если наблюдается хотя бы один признак — пора вызвать мастера.',
      },
    },
  ],
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Чистка и обслуживание кондиционера: когда, как и почему это важно',
  datePublished: '2026-05-01',
  dateModified: '2026-05-25',
  author: { '@type': 'Organization', name: 'AirComfort', url: 'https://aircom-fort.by' },
  publisher: { '@type': 'Organization', name: 'AirComfort', url: 'https://aircom-fort.by' },
  url: 'https://aircom-fort.by/articles/chistka-i-obsluzhivanie',
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
