import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Заправка кондиционера в Гомеле — цена 2026, выезд в день заказа',
  description: 'Заправка кондиционера в Гомеле от 60 р. Фреон R32, R410A, R22. Выезд мастера в день заказа. Диагностика бесплатно при заправке. Гарантия 1 год.',
  keywords: ['заправка кондиционера Гомель', 'заправка кондиционера цена Гомель', 'заправить кондиционер Гомель', 'фреон кондиционер Гомель', 'дозаправка кондиционера Гомель'],
  alternates: { canonical: 'https://aircom-fort.by/articles/zapravka-konditsionera-gomel' },
  openGraph: {
    title: 'Заправка кондиционера в Гомеле — от 60 р.',
    description: 'Выезд мастера в день заказа. Фреон R32, R410A, R22. Диагностика бесплатно.',
    url: 'https://aircom-fort.by/articles/zapravka-konditsionera-gomel',
    locale: 'ru_BY',
    type: 'article',
  },
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Заправка кондиционера в Гомеле — цены 2026, выезд в день заказа',
  datePublished: '2026-05-01',
  dateModified: '2026-05-25',
  author: { '@type': 'Organization', name: 'AirComfort', url: 'https://aircom-fort.by' },
  publisher: { '@type': 'Organization', name: 'AirComfort', url: 'https://aircom-fort.by' },
  url: 'https://aircom-fort.by/articles/zapravka-konditsionera-gomel',
  inLanguage: 'ru',
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Сколько стоит заправка кондиционера в Гомеле?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Заправка кондиционера в Гомеле — от 60 р. Цена зависит от типа фреона и количества. R32 и R410A — самые распространённые. Диагностика и проверка давления — бесплатно при заказе заправки. Выезд мастера в день обращения.',
      },
    },
    {
      '@type': 'Question',
      name: 'Как понять, что кондиционер нуждается в заправке фреоном?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Признаки нехватки фреона: кондиционер включается, но охлаждает значительно хуже обычного; на трубках или испарителе появляется иней или лёд; компрессор работает без остановки; из кондиционера слышен шипящий звук. При этих симптомах вызывайте мастера.',
      },
    },
    {
      '@type': 'Question',
      name: 'Почему нужна заправка, если кондиционер не течёт?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Фреон может вытекать через микротрещины в трубках, через соединения или через некачественный вентиль наружного блока — визуально это незаметно. Нормальная убыль фреона при исправном оборудовании — практически нулевая. Если заправка нужна каждый год, значит есть утечка — нужно найти и устранить.',
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
