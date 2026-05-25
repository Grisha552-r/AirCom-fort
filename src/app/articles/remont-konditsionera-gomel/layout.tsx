import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Ремонт кондиционера в Гомеле — цены 2026, диагностика бесплатно',
  description: 'Ремонт кондиционеров в Гомеле: не охлаждает, течёт, не включается. Диагностика бесплатно при ремонте. Выезд в день заказа. Гарантия на работы 6 месяцев.',
  keywords: ['ремонт кондиционера Гомель', 'ремонт кондиционера цена Гомель', 'мастер кондиционер Гомель', 'не работает кондиционер Гомель', 'сервис кондиционеров Гомель'],
  alternates: { canonical: 'https://aircom-fort.by/articles/remont-konditsionera-gomel' },
  openGraph: {
    title: 'Ремонт кондиционера в Гомеле — диагностика бесплатно',
    description: 'Не охлаждает, течёт, не включается. Выезд мастера в день заказа.',
    url: 'https://aircom-fort.by/articles/remont-konditsionera-gomel',
    locale: 'ru_BY',
    type: 'article',
  },
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Ремонт кондиционера в Гомеле — цены 2026, диагностика бесплатно',
  datePublished: '2026-05-01',
  dateModified: '2026-05-25',
  author: { '@type': 'Organization', name: 'AirComfort', url: 'https://aircom-fort.by' },
  publisher: { '@type': 'Organization', name: 'AirComfort', url: 'https://aircom-fort.by' },
  url: 'https://aircom-fort.by/articles/remont-konditsionera-gomel',
  inLanguage: 'ru',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      {children}
    </>
  );
}
