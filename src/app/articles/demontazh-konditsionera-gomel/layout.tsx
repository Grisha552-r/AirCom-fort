import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Демонтаж кондиционера в Гомеле — цена от 100 р., выезд в день',
  description: 'Демонтаж кондиционера в Гомеле от 100 р. Снятие при замене, переносе или ремонте. Выезд мастера в день заказа, аккуратный монтаж без повреждений стен.',
  keywords: [
    'демонтаж кондиционера Гомель',
    'снятие кондиционера Гомель',
    'перенос кондиционера Гомель',
    'демонтаж сплит системы Гомель',
    'снять кондиционер Гомель цена',
    'стоимость демонтажа кондиционера',
    'демонтаж наружного блока Гомель',
  ],
  alternates: { canonical: 'https://aircom-fort.by/articles/demontazh-konditsionera-gomel' },
  openGraph: {
    title: 'Демонтаж кондиционера в Гомеле — от 100 р.',
    description: 'Снятие кондиционера при переносе, замене или ремонте. Выезд в день заказа.',
    url: 'https://aircom-fort.by/articles/demontazh-konditsionera-gomel',
    locale: 'ru_BY',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Демонтаж кондиционера в Гомеле — от 100 р.',
    description: 'Снятие кондиционера при переносе, замене или ремонте. Выезд в день заказа.',
  },
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Демонтаж кондиционера в Гомеле — цена от 100 р., выезд в день',
  datePublished: '2026-05-26',
  dateModified: '2026-05-26',
  author: { '@type': 'Organization', name: 'AirComfort', url: 'https://aircom-fort.by' },
  publisher: { '@type': 'Organization', name: 'AirComfort', url: 'https://aircom-fort.by' },
  url: 'https://aircom-fort.by/articles/demontazh-konditsionera-gomel',
  inLanguage: 'ru',
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Сколько стоит демонтаж кондиционера в Гомеле?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Стоимость демонтажа сплит-системы в Гомеле — от 100 р. за внутренний и наружный блок. При замене на новый кондиционер демонтаж обычно включён в стоимость установки.',
      },
    },
    {
      '@type': 'Question',
      name: 'Можно ли демонтировать кондиционер самому?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Самостоятельный демонтаж возможен только для мобильного кондиционера — он не требует специнструмента. Сплит-систему снимать самому опасно: при неправильном стравливании фреона можно получить травму, а без вакуумирования потеряете хладагент и испортите компрессор.',
      },
    },
    {
      '@type': 'Question',
      name: 'Сохраняется ли фреон при демонтаже?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Да. Профессиональный мастер перед демонтажем закачивает фреон из системы во внешний блок. Это позволяет сохранить хладагент для повторного использования при переустановке.',
      },
    },
    {
      '@type': 'Question',
      name: 'Сколько времени занимает демонтаж кондиционера?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Демонтаж стандартной сплит-системы занимает 1–2 часа. Если кондиционер установлен в труднодоступном месте или нужно снять несколько блоков — до 3–4 часов.',
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
