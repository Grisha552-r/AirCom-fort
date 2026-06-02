import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Тихий кондиционер для спальни 2026 — ТОП бесшумных моделей',
  description: 'Какой кондиционер для спальни: шум до 26 дБ, ночной режим, инвертор. ТОП бесшумных моделей 2026: Electrolux, Ballu, Haier в Гомеле.',
  keywords: [
    'тихий кондиционер для спальни',
    'бесшумный кондиционер Гомель',
    'кондиционер для спальни 2026',
    'кондиционер с низким уровнем шума',
    'кондиционер ночной режим',
    'бесшумный кондиционер купить Гомель',
    'тихий кондиционер инвертор',
  ],
  alternates: { canonical: 'https://aircom-fort.by/articles/tikhiy-konditsioner-dlya-spalni' },
  openGraph: {
    title: 'Тихий кондиционер для спальни 2026 — ТОП бесшумных моделей',
    description: 'Уровень шума до 19 дБ. ТОП моделей с ночным режимом для спальни в Гомеле.',
    url: 'https://aircom-fort.by/articles/tikhiy-konditsioner-dlya-spalni',
    locale: 'ru_BY',
    type: 'article',
  },
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Тихий кондиционер для спальни 2026 — ТОП бесшумных моделей',
  datePublished: '2026-05-26',
  dateModified: '2026-05-26',
  author: { '@type': 'Organization', name: 'AirComfort', url: 'https://aircom-fort.by' },
  publisher: { '@type': 'Organization', name: 'AirComfort', url: 'https://aircom-fort.by' },
  url: 'https://aircom-fort.by/articles/tikhiy-konditsioner-dlya-spalni',
  inLanguage: 'ru',
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Какой уровень шума кондиционера считается тихим?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Для спальни оптимален уровень шума внутреннего блока до 26 дБ. Это тише шёпота (30 дБ). Лучшие инверторные модели работают от 19–22 дБ — как лёгкий шелест листьев. В ночном режиме шум снижается ещё на 2–3 дБ.',
      },
    },
    {
      '@type': 'Question',
      name: 'Какой бренд кондиционера самый тихий?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Самые тихие инверторные модели в 2026 году: Electrolux серии Nordic (21 дБ), Ballu серии Platinum Evolution (19 дБ), Haier серии Pearl (22 дБ). Все три доступны в Гомеле в AirComfort с установкой под ключ.',
      },
    },
    {
      '@type': 'Question',
      name: 'Можно ли спать с включённым кондиционером?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Да, если включить режим "Сон" или "Night". Кондиционер поднимает температуру на 1°C каждые 30 минут и снижает скорость вентилятора до минимума. Оптимальная температура для сна — 24–26°C. Поток воздуха не должен быть направлен на спящего.',
      },
    },
    {
      '@type': 'Question',
      name: 'Кондиционер шумит ночью — что делать?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Посторонний шум ночью может быть признаком загрязнённых фильтров, слабого крепления корпуса или нехватки фреона. Очистите фильтры (промойте водой). Если шум не исчез — вызовите мастера, это решается за один визит.',
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
