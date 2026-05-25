import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Как выбрать кондиционер для квартиры — советы и рейтинг брендов',
  description: 'Как выбрать кондиционер для квартиры или дома: мощность по площади, инвертор или обычный, рейтинг брендов. Экспертные советы от AirComfort Гомель.',
  keywords: ['как выбрать кондиционер', 'выбор кондиционера для квартиры', 'мощность кондиционера', 'какой кондиционер лучше'],
  alternates: { canonical: 'https://aircom-fort.by/articles/kak-vybrat-konditsioner' },
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Как выбрать кондиционер для квартиры — советы и рейтинг брендов',
  datePublished: '2026-05-01',
  dateModified: '2026-05-25',
  author: { '@type': 'Organization', name: 'AirComfort', url: 'https://aircom-fort.by' },
  publisher: { '@type': 'Organization', name: 'AirComfort', url: 'https://aircom-fort.by' },
  url: 'https://aircom-fort.by/articles/kak-vybrat-konditsioner',
  inLanguage: 'ru',
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Как рассчитать мощность кондиционера для комнаты?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Базовое правило: 1 кВт мощности на каждые 10 м² при стандартной высоте потолков 2,7–3 м. Для комнаты 20 м² — кондиционер 2 кВт (7 000 BTU), для 30 м² — 3 кВт (12 000 BTU). Если окна выходят на юг или потолки выше 3 м — добавьте 15–20% к мощности.',
      },
    },
    {
      '@type': 'Question',
      name: 'Что лучше: инверторный или обычный кондиционер?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Инверторный кондиционер экономит 30–40% электроэнергии, работает тише и точнее поддерживает температуру. При постоянном использовании он окупается за 2–3 сезона. Обычный On/Off дешевле, но расходует больше электричества и имеет больший износ компрессора.',
      },
    },
    {
      '@type': 'Question',
      name: 'При какой температуре на улице работает кондиционер на обогрев?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Стандартные кондиционеры работают на обогрев до −5°C. Модели серий Arctic, Freeze, Winter работают до −15°C и −25°C. Для белорусской зимы рекомендуем выбирать кондиционер с расширенным температурным диапазоном.',
      },
    },
    {
      '@type': 'Question',
      name: 'Сколько стоит установка кондиционера в Гомеле?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Установка кондиционера в AirComfort: монтаж до 30 м² — 400 р., до 50 м² — 500 р., до 70 м² — 550 р. Каждый дополнительный метр трассы — +50 р., через балкон — +50 р. Звоните: +375 29 105-06-94.',
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
