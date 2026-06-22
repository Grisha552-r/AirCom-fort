import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Кондиционеры в Гомеле — каталог, цены 2026',
  description: 'Купить кондиционер в Гомеле с установкой от 1 290 р. 300+ моделей: Electrolux, Ballu, Haier, LG. Монтаж от 400 р., выезд в день заказа, гарантия 1 год.',
  alternates: { canonical: 'https://aircom-fort.by/konditsionery-gomel' },
  openGraph: {
    type: 'website',
    locale: 'ru_BY',
    url: 'https://aircom-fort.by/konditsionery-gomel',
    siteName: 'AirComfort',
    title: 'Кондиционеры в Гомеле — купить с установкой от 1 290 р.',
    description: 'AirComfort — продажа и установка кондиционеров в Гомеле. 300+ моделей, монтаж от 400 р., выезд в день заказа.',
    images: [{ url: '/opengraph-image', width: 1200, height: 630 }],
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Сколько стоит кондиционер с установкой в Гомеле?',
      acceptedAnswer: { '@type': 'Answer', text: 'Стоимость кондиционера с установкой в Гомеле «под ключ» — от 1 290 р. Это включает: кондиционер Mitsudai 9000 BTU (890 р.) + стандартный монтаж до 3 м трассы (400 р.). Electrolux с установкой — от 1 490 р., Ballu — от 1 290 р., Haier — от 1 350 р., LG — от 1 690 р.' },
    },
    {
      '@type': 'Question',
      name: 'Как быстро приедет мастер для установки кондиционера в Гомеле?',
      acceptedAnswer: { '@type': 'Answer', text: 'Мастер приедет в день заказа или на следующий день. Работаем понедельник–суббота с 9:00 до 18:00. Монтаж занимает 2–4 часа в зависимости от сложности.' },
    },
    {
      '@type': 'Question',
      name: 'Какой кондиционер выбрать для комнаты 20 м² в Гомеле?',
      acceptedAnswer: { '@type': 'Answer', text: 'Для комнаты 20 м² подойдёт кондиционер мощностью 9 000 BTU (2,6 кВт). Рекомендуем: Ballu BSAGI-09 (инвертор, тихий, от 1 290 р. с установкой) или Electrolux EACS-09 (надёжный, бесшумный, от 1 490 р. с установкой).' },
    },
    {
      '@type': 'Question',
      name: 'Выезжаете ли в районы Гомеля и область?',
      acceptedAnswer: { '@type': 'Answer', text: 'Да, работаем по всему Гомелю: Советский, Центральный, Железнодорожный, Новобелицкий и Октябрьский районы. Также выезжаем в Гомельскую область: Жлобин, Мозырь, Речица, Светлогорск и другие.' },
    },
    {
      '@type': 'Question',
      name: 'Нужно ли разрешение для установки кондиционера в квартире?',
      acceptedAnswer: { '@type': 'Answer', text: 'В большинстве случаев разрешение от ЖЭУ не требуется — если наружный блок крепится на стену вашей квартиры без изменения фасада. Для жилых домов в Гомеле достаточно стандартного договора найма/собственности.' },
    },
    {
      '@type': 'Question',
      name: 'Какую гарантию даёте на кондиционер и монтаж?',
      acceptedAnswer: { '@type': 'Answer', text: 'Гарантия на кондиционер — 1–3 года в зависимости от бренда (Electrolux и LG — 3 года, Ballu и Haier — 2 года). Гарантия на монтажные работы — 1 год.' },
    },
  ],
};

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': 'https://aircom-fort.by/#business',
  name: 'AirComfort',
  description: 'Продажа и установка кондиционеров в Гомеле. Electrolux, Ballu, Haier, LG, Mitsudai. Монтаж от 400 р.',
  url: 'https://aircom-fort.by',
  telephone: '+375291050694',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Гомель',
    addressCountry: 'BY',
  },
  geo: { '@type': 'GeoCoordinates', latitude: '52.4345', longitude: '30.9754' },
  openingHoursSpecification: [
    { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'], opens: '09:00', closes: '18:00' },
  ],
  priceRange: 'от 1 290 р.',
  areaServed: { '@type': 'City', name: 'Гомель' },
};

export default function KonditsioneryGomelLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      {children}
    </>
  );
}
