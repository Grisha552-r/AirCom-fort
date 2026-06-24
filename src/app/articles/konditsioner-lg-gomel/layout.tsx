import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Кондиционеры LG в Гомеле — Dual Inverter, ArtCool, ThinQ',
  description: 'Официальный дилер LG в Гомеле. Кондиционеры LG ArtCool, S-серия — самые тихие в своём классе, ThinQ управление. Монтаж в день заказа, гарантия 3 года.',
  keywords: [
    'кондиционер LG Гомель',
    'LG купить Гомель',
    'кондиционер LG цена Гомель',
    'LG ArtCool Гомель',
    'купить LG с установкой',
    'сплит система LG Гомель',
    'кондиционер LG инвертор Гомель',
  ],
  alternates: { canonical: 'https://aircom-fort.by/articles/konditsioner-lg-gomel' },
  openGraph: {
    title: 'Кондиционеры LG в Гомеле — купить с установкой от 1 690 р.',
    description: 'Официальный дилер LG в Гомеле. Тихие модели 21 дБ, гарантия 3 года, монтаж в день заказа.',
    url: 'https://aircom-fort.by/articles/konditsioner-lg-gomel',
    locale: 'ru_BY',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Кондиционеры LG в Гомеле — купить с установкой от 1 690 р.',
    description: 'Официальный дилер LG в Гомеле. Тихие модели 21 дБ, гарантия 3 года, монтаж в день заказа.',
  },
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Кондиционеры LG в Гомеле — купить с установкой от 1 690 р.',
  datePublished: '2026-05-26',
  dateModified: '2026-05-26',
  author: { '@type': 'Organization', name: 'AirComfort', url: 'https://aircom-fort.by' },
  publisher: { '@type': 'Organization', name: 'AirComfort', url: 'https://aircom-fort.by' },
  url: 'https://aircom-fort.by/articles/konditsioner-lg-gomel',
  inLanguage: 'ru',
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Сколько стоит кондиционер LG с установкой в Гомеле?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Кондиционер LG с установкой в Гомеле — от 1 690 р. Это стоимость модели LG S09EQ (9 000 BTU, инвертор, 21 дБ) плюс стандартный монтаж под ключ. LG ArtCool Mirror с установкой — от 2 200 р.',
      },
    },
    {
      '@type': 'Question',
      name: 'Какая гарантия на кондиционеры LG?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Официальная гарантия на кондиционеры LG — 3 года (на компрессор — 5 лет). Это одна из лучших гарантий в отрасли. AirComfort является авторизованным дилером LG. На монтажные работы — дополнительно 1 год.',
      },
    },
    {
      '@type': 'Question',
      name: 'Чем LG ArtCool отличается от стандартной серии?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'LG ArtCool — премиальная дизайнерская серия с зеркальной панелью. Технические характеристики аналогичны S-серии: инвертор, 21 дБ, ThinQ управление. Основное отличие — эстетика. ArtCool Mirror вписывается в любой интерьер и служит украшением комнаты.',
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
