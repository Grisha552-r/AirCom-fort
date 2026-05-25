import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Подготовка кондиционера к зиме — что делать осенью',
  description: 'Как подготовить кондиционер к зиме в Беларуси. Пошаговое руководство: чистка, консервация, когда выключать и что проверить осенью.',
  keywords: ['подготовка кондиционера к зиме', 'кондиционер на зиму', 'консервация кондиционера', 'кондиционер осень Беларусь', 'уход за кондиционером'],
  alternates: { canonical: 'https://aircom-fort.by/articles/podgotovka-k-zime' },
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Подготовка кондиционера к зиме — что делать осенью',
  datePublished: '2026-05-01',
  dateModified: '2026-05-25',
  author: { '@type': 'Organization', name: 'AirComfort', url: 'https://aircom-fort.by' },
  publisher: { '@type': 'Organization', name: 'AirComfort', url: 'https://aircom-fort.by' },
  url: 'https://aircom-fort.by/articles/podgotovka-k-zime',
  inLanguage: 'ru',
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Нужно ли готовить кондиционер к зиме?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Да. Перед зимой нужно: почистить фильтры внутреннего блока, промыть теплообменник (или вызвать мастера), закрыть наружный блок от снега и льда (если не планируете использовать в режиме обогрева). Это продлит срок службы техники.',
      },
    },
    {
      '@type': 'Question',
      name: 'При какой температуре нельзя включать кондиционер зимой?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Стандартные кондиционеры нельзя использовать при температуре ниже −5°C. Кондиционеры с зимним комплектом работают до −15°C, специальные морозостойкие серии — до −25°C. Проверьте характеристики вашей модели.',
      },
    },
    {
      '@type': 'Question',
      name: 'Когда нужно выключить кондиционер на зиму?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Выключайте кондиционер на режиме охлаждения когда температура на улице опускается ниже +5°C стабильно. Если используете в режиме обогрева — ориентируйтесь на нижний допустимый порог температуры для вашей модели.',
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
