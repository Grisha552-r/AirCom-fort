import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Кондиционер для дачи — какой выбрать, цены 2026 | AirComfort Гомель',
  description: 'Как выбрать кондиционер для дачи: мобильный или сплит, без сверления. Мобильные от 890 р. Установка без согласований. Гомель и область.',
  keywords: ['кондиционер для дачи', 'мобильный кондиционер для дачи', 'кондиционер без сверления', 'кондиционер для дачи Гомель', 'напольный кондиционер Гомель'],
  alternates: { canonical: 'https://aircom-fort.by/articles/konditsioner-dlya-dachi' },
  openGraph: {
    title: 'Кондиционер для дачи — какой выбрать в 2026 году',
    description: 'Мобильный или сплит для дачи — что выгоднее. Бюджетные модели без сверления стен.',
    url: 'https://aircom-fort.by/articles/konditsioner-dlya-dachi',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Кондиционер для дачи — какой выбрать в 2026 году',
    description: 'Мобильный или сплит для дачи — что выгоднее. Бюджетные модели без сверления стен.',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Кондиционер для дачи — какой выбрать, цены 2026',
    description: 'Как выбрать кондиционер для дачи: мобильный или сплит, без сверления.',
    datePublished: '2026-05-01',
    dateModified: '2026-05-26',
    author: { '@type': 'Organization', name: 'AirComfort', url: 'https://aircom-fort.by' },
    publisher: { '@type': 'Organization', name: 'AirComfort', url: 'https://aircom-fort.by' },
    mainEntityOfPage: 'https://aircom-fort.by/articles/konditsioner-dlya-dachi',
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Можно ли поставить кондиционер на даче без сверления стен?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Да. Мобильный (напольный) кондиционер не требует установки: просто выведите гибкий воздуховод в форточку или небольшое отверстие в окне. Отверстие диаметром 15 см можно сделать без капитального ремонта.',
        },
      },
      {
        '@type': 'Question',
        name: 'Что лучше для дачи — мобильный кондиционер или сплит?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Мобильный: без сверления и согласований, от 890 р. Минус — громче на 8–10 дБ и на 30% менее эффективен. Сплит: тише, экономичнее, но требует монтажа и небольшого отверстия в стене. Для постоянного летнего проживания — сплит выгоднее.',
        },
      },
      {
        '@type': 'Question',
        name: 'Сколько стоит кондиционер для дачи в Гомеле?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Мобильный кондиционер для дачи в Гомеле — от 890 р. Бюджетный сплит с установкой — от 1 290 р. под ключ (кондиционер + монтаж + материалы).',
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
