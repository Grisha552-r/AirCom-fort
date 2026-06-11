import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Установка кондиционера в Гомеле — монтаж под ключ, цены',
  description: 'Кондиционер с установкой в Гомеле под ключ. Монтаж сплит-систем от 400 р., обслуживание и чистка, демонтаж. Гарантия 1 год. Рассчитайте стоимость онлайн.',
  keywords: [
    'установка кондиционера Гомель',
    'кондиционер с установкой Гомель',
    'монтаж кондиционера Гомель',
    'кондиционер под ключ Гомель',
    'монтаж сплит системы Гомель',
    'установка сплит системы под ключ',
    'установка кондиционера под ключ Гомель',
    'фирмы по установке кондиционеров Гомель',
    'установить кондиционер Гомель',
    'сколько стоит установка кондиционера Гомель',
    'стоимость установки кондиционера Гомель',
    'цена монтажа кондиционера',
    'монтаж кассетного кондиционера',
    'кондиционеры с установкой Гомель',
    'климатические системы под ключ Гомель',
    'обслуживание кондиционера Гомель',
    'чистка кондиционера Гомель',
    'демонтаж кондиционера',
    'заправка фреоном кондиционера Гомель',
  ],
  alternates: { canonical: 'https://aircom-fort.by/services' },
  openGraph: {
    title: 'Установка кондиционера в Гомеле',
    description: 'Монтаж, обслуживание и демонтаж кондиционеров в Гомеле. Рассчитайте стоимость онлайн.',
    url: 'https://aircom-fort.by/services',
    locale: 'ru_BY',
    type: 'website',
  },
};

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Главная', item: 'https://aircom-fort.by/' },
    { '@type': 'ListItem', position: 2, name: 'Услуги', item: 'https://aircom-fort.by/services' },
  ],
};

const serviceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Услуги по установке кондиционеров в Гомеле',
  itemListElement: [
    {
      '@type': 'Service',
      position: 1,
      name: 'Установка кондиционера',
      description: 'Монтаж сплит-системы под ключ в Гомеле. Трасса 5 м, все расходники включены.',
      provider: { '@type': 'LocalBusiness', name: 'AirComfort', url: 'https://aircom-fort.by' },
      areaServed: { '@type': 'City', name: 'Гомель' },
      offers: {
        '@type': 'Offer',
        priceCurrency: 'BYN',
        price: '400',
        priceSpecification: { '@type': 'PriceSpecification', minPrice: 400, priceCurrency: 'BYN' },
      },
    },
    {
      '@type': 'Service',
      position: 2,
      name: 'Обслуживание кондиционера',
      description: 'Чистка и техническое обслуживание кондиционера в Гомеле. Промывка теплообменника, дозаправка фреоном.',
      provider: { '@type': 'LocalBusiness', name: 'AirComfort', url: 'https://aircom-fort.by' },
      areaServed: { '@type': 'City', name: 'Гомель' },
      offers: {
        '@type': 'Offer',
        priceCurrency: 'BYN',
        price: '60',
        priceSpecification: { '@type': 'PriceSpecification', minPrice: 60, priceCurrency: 'BYN' },
      },
    },
    {
      '@type': 'Service',
      position: 3,
      name: 'Демонтаж кондиционера',
      description: 'Демонтаж сплит-системы в Гомеле с сохранением фреона.',
      provider: { '@type': 'LocalBusiness', name: 'AirComfort', url: 'https://aircom-fort.by' },
      areaServed: { '@type': 'City', name: 'Гомель' },
    },
  ],
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      {children}
    </>
  );
}
