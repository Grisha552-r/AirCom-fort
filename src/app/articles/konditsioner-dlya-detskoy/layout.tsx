import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Кондиционер для детской комнаты — выбор 2026',
  description: 'Кондиционер для детской: шум до 20 дБ, антибактериальный фильтр, без сквозняков. ТОП безопасных моделей с установкой в Гомеле от 1 290 р. под ключ.',
  alternates: { canonical: 'https://aircom-fort.by/articles/konditsioner-dlya-detskoy' },
  openGraph: {
    title: 'Кондиционер для детской комнаты — как выбрать безопасный',
    description: 'Тихий, с фильтрацией воздуха, без сквозняков — что важно при выборе кондиционера для детской.',
    url: 'https://aircom-fort.by/articles/konditsioner-dlya-detskoy',
    locale: 'ru_BY',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Кондиционер для детской комнаты — как выбрать безопасный',
    description: 'Тихий, с фильтрацией воздуха, без сквозняков — что важно при выборе кондиционера для детской.',
  },
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Кондиционер для детской комнаты — как выбрать безопасный в 2026',
  datePublished: '2026-05-26',
  dateModified: '2026-05-26',
  author: { '@type': 'Organization', name: 'AirComfort', url: 'https://aircom-fort.by' },
  publisher: { '@type': 'Organization', name: 'AirComfort', url: 'https://aircom-fort.by' },
  url: 'https://aircom-fort.by/articles/konditsioner-dlya-detskoy',
  inLanguage: 'ru',
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Можно ли включать кондиционер в детской комнате?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Да, можно и нужно — при соблюдении правил: температуру не ниже 22–24°C, поток воздуха направлен не на ребёнка, кондиционер чистый (фильтры меняются/промываются). Педиатры рекомендуют поддерживать в детской 22–24°C днём и 20–22°C ночью.',
      },
    },
    {
      '@type': 'Question',
      name: 'Какой уровень шума кондиционера безопасен для сна ребёнка?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Для детской оптимален кондиционер с уровнем шума внутреннего блока до 24 дБ. Ребёнок до 3 лет особенно чувствителен к звукам: громкий кондиционер нарушает фазы сна. Инверторные модели в ночном режиме работают от 19–22 дБ — это тише, чем шелест листьев.',
      },
    },
    {
      '@type': 'Question',
      name: 'Нужен ли кондиционер с очисткой воздуха в детской?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Рекомендуем. Кондиционеры с HEPA- или угольным фильтром задерживают пыль, пыльцу, бактерии. Особенно важно для детей с аллергией или астмой. Haier с функцией Self-clean автоматически сушит теплообменник, предотвращая рост плесени.',
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
