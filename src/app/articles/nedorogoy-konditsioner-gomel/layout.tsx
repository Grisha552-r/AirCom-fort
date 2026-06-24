import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Недорогой кондиционер в Гомеле — купить от 690 р. с установкой | AirComfort',
  description: 'Бюджетные кондиционеры в Гомеле от 690 р., с установкой от 1 090 р. Ballu, Mitsudai, Electrolux. Монтаж в день заказа.',
  keywords: ['недорогой кондиционер Гомель', 'бюджетный кондиционер Гомель', 'дешёвый кондиционер Гомель', 'кондиционер от 1000 рублей Гомель', 'купить кондиционер недорого Гомель'],
  alternates: { canonical: 'https://aircom-fort.by/articles/nedorogoy-konditsioner-gomel' },
  openGraph: {
    title: 'Недорогой кондиционер в Гомеле — от 690 р. с установкой',
    description: 'Бюджетные кондиционеры в Гомеле с установкой под ключ от 1 090 р. Ballu, Mitsudai, Electrolux.',
    url: 'https://aircom-fort.by/articles/nedorogoy-konditsioner-gomel',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Недорогой кондиционер в Гомеле — от 690 р. с установкой',
    description: 'Бюджетные кондиционеры в Гомеле с установкой под ключ от 1 090 р. Ballu, Mitsudai, Electrolux.',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Недорогой кондиционер в Гомеле — купить от 690 р. с установкой',
    description: 'Бюджетные кондиционеры в Гомеле: лучшие модели по цене и надёжности.',
    datePublished: '2026-05-01',
    dateModified: '2026-05-26',
    author: { '@type': 'Organization', name: 'AirComfort', url: 'https://aircom-fort.by' },
    publisher: { '@type': 'Organization', name: 'AirComfort', url: 'https://aircom-fort.by' },
    mainEntityOfPage: 'https://aircom-fort.by/articles/nedorogoy-konditsioner-gomel',
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Какой самый дешёвый кондиционер с установкой в Гомеле?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Самый бюджетный вариант — Mitsudai 9000 BTU (690 р.) + стандартный монтаж (400 р.) = от 1 090 р. под ключ для комнаты до 25 кв.м. Это надёжный on/off кондиционер с гарантией 1 год.',
        },
      },
      {
        '@type': 'Question',
        name: 'Стоит ли брать самый дешёвый кондиционер?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Бюджетный on/off кондиционер подойдёт, если вы используете его 1–3 месяца в году. При более частом использовании инверторный кондиционер (на 15–20% дороже) окупится за 2–3 сезона за счёт экономии на электроэнергии.',
        },
      },
      {
        '@type': 'Question',
        name: 'Есть ли надёжные дешёвые кондиционеры?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Да. Ballu BSW и Mitsudai — проверенные бюджетные бренды. Ballu производится в Китае с контролем качества по международным стандартам, широкая сервисная сеть. Mitsudai — надёжная бюджетная марка с хорошей репутацией на рынке СНГ.',
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
