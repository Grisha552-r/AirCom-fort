import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Кондиционер для гостиной — какой выбрать в 2026 году | AirComfort Гомель',
  description: 'Как выбрать кондиционер для гостиной: мощность, бренды, цены в Гомеле. Рекомендации по площади, шуму и расходу электроэнергии. Установка под ключ.',
  keywords: ['кондиционер для гостиной', 'кондиционер для зала', 'кондиционер для большой комнаты', 'сплит система для гостиной Гомель', 'кондиционер 35 кв м Гомель'],
  alternates: { canonical: 'https://aircom-fort.by/articles/konditsioner-dlya-gostinoy' },
  openGraph: {
    title: 'Кондиционер для гостиной — какой выбрать в 2026 году',
    description: 'Как выбрать кондиционер для гостиной: мощность, бренды, цены. Установка в Гомеле под ключ.',
    url: 'https://aircom-fort.by/articles/konditsioner-dlya-gostinoy',
    type: 'article',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Кондиционер для гостиной — какой выбрать в 2026 году',
    description: 'Как выбрать кондиционер для гостиной: мощность, бренды, цены в Гомеле.',
    datePublished: '2026-05-01',
    dateModified: '2026-05-26',
    author: { '@type': 'Organization', name: 'AirComfort', url: 'https://aircom-fort.by' },
    publisher: { '@type': 'Organization', name: 'AirComfort', url: 'https://aircom-fort.by' },
    mainEntityOfPage: 'https://aircom-fort.by/articles/konditsioner-dlya-gostinoy',
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Какая мощность кондиционера нужна для гостиной 30 кв.м?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Для гостиной 30 кв.м нужен кондиционер мощностью 3,5 кВт (12 BTU). Если комната угловая или с большими окнами на юг — возьмите 4–5 кВт (14–18 BTU).',
        },
      },
      {
        '@type': 'Question',
        name: 'Какой кондиционер лучше для гостиной — инверторный или обычный?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Для гостиной рекомендуем инверторный: он тише, экономичнее и точнее поддерживает температуру. В большой комнате, где кондиционер работает часто, экономия на электроэнергии окупает разницу в цене за 2–3 сезона.',
        },
      },
      {
        '@type': 'Question',
        name: 'Сколько стоит установка кондиционера в гостиной в Гомеле?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Установка сплит-системы в гостиной в Гомеле стоит от 290 р. (стандартный монтаж). Полный комплект — кондиционер + монтаж + материалы — от 1 290 р.',
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
