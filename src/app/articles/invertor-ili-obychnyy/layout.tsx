import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Инверторный или обычный кондиционер — что лучше выбрать?',
  description: 'Инвертор экономит до 40% электроэнергии — стоит ли переплаты? Сравниваем по цене, шуму и ресурсу. Советы мастеров AirComfort для квартиры в Гомеле.',
  keywords: ['инверторный кондиционер', 'инвертор или обычный кондиционер', 'кондиционер инвертор экономия'],
  alternates: { canonical: 'https://aircom-fort.by/articles/invertor-ili-obychnyy' },
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Инверторный или обычный кондиционер — что лучше выбрать?',
  datePublished: '2026-05-01',
  dateModified: '2026-05-25',
  author: { '@type': 'Organization', name: 'AirComfort', url: 'https://aircom-fort.by' },
  publisher: { '@type': 'Organization', name: 'AirComfort', url: 'https://aircom-fort.by' },
  url: 'https://aircom-fort.by/articles/invertor-ili-obychnyy',
  inLanguage: 'ru',
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Чем отличается инверторный кондиционер от обычного?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Обычный кондиционер (On/Off) включает и выключает компрессор на полную мощность. Инверторный плавно меняет скорость компрессора, поддерживая точную температуру без скачков. Инвертор тише, долговечнее и экономит 30–40% электроэнергии.',
      },
    },
    {
      '@type': 'Question',
      name: 'Окупается ли инверторный кондиционер?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Да. При ежедневном использовании разница в стоимости между инверторным и обычным кондиционером окупается за 2–3 сезона за счёт экономии на электроэнергии. Чем дольше работает кондиционер, тем быстрее окупается переплата за инвертор.',
      },
    },
    {
      '@type': 'Question',
      name: 'Какой кондиционер выбрать для квартиры: инвертор или обычный?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Для ежедневного использования в квартире рекомендуем инверторный кондиционер — он тише, экономичнее и дольше служит. Обычный On/Off оправдан только при редком использовании (дача, офис с сезонной работой) или при строго ограниченном бюджете.',
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
