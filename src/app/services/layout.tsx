import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Установка кондиционера в Гомеле — монтаж, цены',
  description: 'Кондиционер с установкой в Гомеле под ключ. Монтаж сплит-систем от 400 р., обслуживание и чистка, демонтаж. Гарантия 1 год. Рассчитайте стоимость онлайн.',
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
        price: '100',
        priceSpecification: { '@type': 'PriceSpecification', minPrice: 100, priceCurrency: 'BYN' },
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

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Сколько по времени занимает установка кондиционера?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Стандартный монтаж сплит-системы занимает 2–4 часа: замер и разметка, монтаж внутреннего и наружного блоков, прокладка трассы, вакуумирование и пусконаладочные работы. При увеличенной длине трассы или сложном маршруте (через балкон) — больше.',
      },
    },
    {
      '@type': 'Question',
      name: 'Нужно ли согласование для установки кондиционера в Гомеле?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'В Беларуси порядок регулируется Постановлением Совета Министров № 384: установка наружного блока на фасад многоквартирного дома обычно требует согласования с местными органами власти, на частный дом — как правило нет. Подробный порядок — в статье «Согласование установки кондиционера».',
      },
    },
    {
      '@type': 'Question',
      name: 'Что входит в стоимость установки кондиционера?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'В стандартную стоимость от 400 р. входит: крепление внутреннего и наружного блоков, медная трасса до 3 м с изоляцией, электрокабель, сливной шланг, вакуумирование системы и пусконаладочные работы. Доплата — за трассу длиннее 3 м (50 р./м) и монтаж через балкон (50 р.).',
      },
    },
    {
      '@type': 'Question',
      name: 'Какая гарантия на установку кондиционера?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Гарантия на монтажные работы AirComfort — 1 год. Если неисправность возникла по вине монтажа, устраняем бесплатно. Отдельно действует гарантия производителя на сам кондиционер.',
      },
    },
    {
      '@type': 'Question',
      name: 'В каких населённых пунктах выполняете установку?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Устанавливаем кондиционеры в Гомеле и Гомельской области: Жлобин, Мозырь, Речица, Светлогорск, Калинковичи, Рогачёв, Петриков, Житковичи, Хойники, Лоев. Для уточнения выезда в конкретный район — звоните.',
      },
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      {children}
    </>
  );
}
