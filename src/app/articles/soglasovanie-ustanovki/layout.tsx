import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Согласование установки кондиционера в Беларуси — документы и разрешения',
  description: 'Как согласовать установку кондиционера в Беларуси. Когда нужно разрешение, какие документы собрать, штрафы за самовольную установку на фасад.',
  keywords: ['согласование установки кондиционера', 'разрешение на кондиционер Беларусь', 'документы для установки кондиционера', 'кондиционер на фасад разрешение', 'штраф за кондиционер'],
  alternates: { canonical: 'https://aircom-fort.by/articles/soglasovanie-ustanovki' },
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Согласование установки кондиционера в Беларуси — документы и разрешения',
  datePublished: '2026-05-01',
  dateModified: '2026-05-25',
  author: { '@type': 'Organization', name: 'AirComfort', url: 'https://aircom-fort.by' },
  publisher: { '@type': 'Organization', name: 'AirComfort', url: 'https://aircom-fort.by' },
  url: 'https://aircom-fort.by/articles/soglasovanie-ustanovki',
  inLanguage: 'ru',
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Нужно ли разрешение на установку кондиционера в Беларуси?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Да, если кондиционер устанавливается на фасаде многоквартирного дома. Нужно согласование с ЖЭС или управляющей организацией. В частном доме разрешение не требуется.',
      },
    },
    {
      '@type': 'Question',
      name: 'Какой штраф за установку кондиционера без разрешения?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'За самовольную установку кондиционера на фасаде многоквартирного дома предусмотрен штраф. Также обязывают демонтировать оборудование за свой счёт. Точные суммы штрафов уточняйте в актуальном законодательстве РБ.',
      },
    },
    {
      '@type': 'Question',
      name: 'Куда обращаться для согласования установки кондиционера?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Для согласования установки кондиционера в многоквартирном доме нужно обратиться в ЖЭС (жилищно-эксплуатационную службу) или товарищество собственников с заявлением и схемой размещения блока.',
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
