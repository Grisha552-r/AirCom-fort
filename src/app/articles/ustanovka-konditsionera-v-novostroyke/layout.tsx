import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Установка кондиционера в новостройке — цены и особенности 2026 | Гомель',
  description: 'Как установить кондиционер в новостройке в Гомеле: когда делать отверстие, согласование, цены. Монтаж до и после отделки. Под ключ от 1 290 р.',
  keywords: ['установка кондиционера в новостройке', 'монтаж кондиционера новостройка Гомель', 'кондиционер в новостройку Гомель', 'установка сплит в новострое', 'кондиционер до отделки Гомель'],
  alternates: { canonical: 'https://aircom-fort.by/articles/ustanovka-konditsionera-v-novostroyke' },
  openGraph: {
    title: 'Установка кондиционера в новостройке — цены и особенности 2026',
    description: 'Когда делать отверстие под кондиционер, как согласовать установку в новостройке Гомеля.',
    url: 'https://aircom-fort.by/articles/ustanovka-konditsionera-v-novostroyke',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Установка кондиционера в новостройке — цены и особенности 2026',
    description: 'Когда делать отверстие под кондиционер, как согласовать установку в новостройке Гомеля.',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Установка кондиционера в новостройке — цены и особенности 2026',
    description: 'Как установить кондиционер в новостройке: когда делать, как согласовать, сколько стоит.',
    datePublished: '2026-05-01',
    dateModified: '2026-05-26',
    author: { '@type': 'Organization', name: 'AirComfort', url: 'https://aircom-fort.by' },
    publisher: { '@type': 'Organization', name: 'AirComfort', url: 'https://aircom-fort.by' },
    mainEntityOfPage: 'https://aircom-fort.by/articles/ustanovka-konditsionera-v-novostroyke',
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Когда лучше устанавливать кондиционер в новостройке — до отделки или после?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Идеально — до чистовой отделки: кабели и медные трубки укладываются в штробы, внешний вид потом скрывается под отделкой. Если ремонт уже сделан — устанавливаем в короб или открытым способом. Оба варианта работают нормально.',
        },
      },
      {
        '@type': 'Question',
        name: 'Нужно ли согласование для установки кондиционера в новостройке?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'В большинстве новостроек Гомеля достаточно стандартного договора. Нужно согласование только если дом сдан с уже установленными фасадными кронштейнами или управляющая компания предъявляет требования к размещению внешних блоков.',
        },
      },
      {
        '@type': 'Question',
        name: 'Сколько стоит установка кондиционера в новостройке в Гомеле?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Стоимость монтажа в новостройке — от 290 р. (стандартный монтаж до 3 м трассы). Полный комплект под ключ — кондиционер + монтаж + материалы — от 1 290 р. При укладке трасс в штробы добавляется стоимость штробления: от 50 р. за 1 м.',
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
