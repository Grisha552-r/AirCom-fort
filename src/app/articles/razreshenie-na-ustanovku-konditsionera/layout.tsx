import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Разрешение на установку кондиционера в Гомеле — нужно ли согласование',
  description: 'Нужно ли разрешение на установку кондиционера в Гомеле? Разбираем: когда требуется согласование, куда обращаться и что грозит за нарушение.',
  keywords: [
    'разрешение на установку кондиционера Гомель',
    'согласование установки кондиционера',
    'нужно ли разрешение на кондиционер',
    'установка кондиционера на фасаде разрешение',
    'установка кондиционера многоквартирный дом Гомель',
  ],
  alternates: { canonical: 'https://aircom-fort.by/articles/razreshenie-na-ustanovku-konditsionera' },
  openGraph: {
    title: 'Разрешение на установку кондиционера в Гомеле',
    description: 'Когда нужно согласование, куда обращаться и чем грозит самовольная установка.',
    url: 'https://aircom-fort.by/articles/razreshenie-na-ustanovku-konditsionera',
    locale: 'ru_BY',
    type: 'article',
  },
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Разрешение на установку кондиционера в Гомеле — нужно ли согласование',
  datePublished: '2026-05-01',
  dateModified: '2026-05-25',
  author: { '@type': 'Organization', name: 'AirComfort', url: 'https://aircom-fort.by' },
  publisher: { '@type': 'Organization', name: 'AirComfort', url: 'https://aircom-fort.by' },
  url: 'https://aircom-fort.by/articles/razreshenie-na-ustanovku-konditsionera',
  inLanguage: 'ru',
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Нужно ли разрешение на установку кондиционера в Гомеле?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'В многоквартирном доме обычно требуется согласие управляющей компании или ТСЖ, если наружный блок размещается на фасаде. В частном доме специального разрешения не нужно.',
      },
    },
    {
      '@type': 'Question',
      name: 'Куда обращаться за согласованием установки кондиционера?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'В управляющую компанию (ЖКХ) по месту жительства. Они выдают технические условия на размещение оборудования на фасаде. В ряде случаев может потребоваться согласие соседей.',
      },
    },
    {
      '@type': 'Question',
      name: 'Что грозит за самовольную установку кондиционера на фасаде?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Административный штраф и предписание демонтировать оборудование. Размер штрафа зависит от конкретного нарушения. Лучше оформить согласование до монтажа.',
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
