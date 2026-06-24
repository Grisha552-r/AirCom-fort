import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Коды ошибок кондиционеров — расшифровка Electrolux, Ballu, Haier, LG, Gree',
  description: 'Расшифровка кодов ошибок кондиционеров: E1, E2, E5, H6, CH05 и другие для Electrolux, Ballu, Haier, LG, Gree. Что можно сделать самому, а когда звонить мастеру.',
  keywords: [
    'коды ошибок кондиционера',
    'кондиционер ошибка E1',
    'кондиционер ошибка Гомель',
    'расшифровка кода ошибки кондиционер',
    'ремонт кондиционера по коду ошибки Гомель',
  ],
  alternates: { canonical: 'https://aircom-fort.by/articles/kody-oshibok-konditsionerov-gomel' },
  openGraph: {
    title: 'Коды ошибок кондиционеров — расшифровка по брендам',
    description: 'E1, E2, E5, H6, CH05 и другие коды для Electrolux, Ballu, Haier, LG, Gree — что значат и что делать.',
    url: 'https://aircom-fort.by/articles/kody-oshibok-konditsionerov-gomel',
    locale: 'ru_BY',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Коды ошибок кондиционеров — расшифровка по брендам',
    description: 'E1, E2, E5, H6, CH05 и другие коды для Electrolux, Ballu, Haier, LG, Gree — что значат и что делать.',
  },
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Коды ошибок кондиционеров: расшифровка по брендам',
  datePublished: '2026-06-23',
  dateModified: '2026-06-23',
  author: { '@type': 'Organization', name: 'AirComfort', url: 'https://aircom-fort.by' },
  publisher: { '@type': 'Organization', name: 'AirComfort', url: 'https://aircom-fort.by' },
  url: 'https://aircom-fort.by/articles/kody-oshibok-konditsionerov-gomel',
  inLanguage: 'ru',
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Что означает код ошибки E1 на кондиционере?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Код зависит от бренда. У Electrolux и Gree E1 чаще всего означает срабатывание защиты по высокому давлению в холодильном контуре (грязный наружный блок или избыток хладагента). У Ballu E1 — ошибка датчика температуры внутреннего воздуха. У Haier E1 — повышенное давление в компрессоре.',
      },
    },
    {
      '@type': 'Question',
      name: 'Можно ли самому устранить ошибку на кондиционере?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Часть ошибок снимается простой чисткой фильтра, проверкой обдува наружного блока или перезапуском устройства на 5–10 минут. Ошибки про давление в контуре, утечку хладагента, неисправность датчиков и платы управления требуют диагностики мастером со специальным оборудованием.',
      },
    },
    {
      '@type': 'Question',
      name: 'Коды ошибок одинаковы у всех моделей одного бренда?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Нет, расшифровка может отличаться между сериями и поколениями платы управления даже у одного производителя. Указанные значения — самые частые по сервисной документации, но для точного диагноза по конкретной модели лучше уточнить у мастера.',
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
