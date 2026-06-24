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
  twitter: {
    card: 'summary_large_image',
    title: 'Установка кондиционера в Гомеле',
    description: 'Монтаж, обслуживание и демонтаж кондиционеров в Гомеле. Рассчитайте стоимость онлайн.',
  },
};

const howToJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'Как проходит установка кондиционера в Гомеле',
  description: 'Монтаж сплит-системы выполняется по ГОСТ, все расходники включены в стоимость.',
  totalTime: 'PT3H',
  estimatedCost: { '@type': 'MonetaryAmount', currency: 'BYN', value: '400' },
  step: [
    {
      '@type': 'HowToStep',
      position: 1,
      name: 'Замер и разметка',
      text: 'Мастер определяет оптимальное место установки внутреннего блока, размечает трассу и бурит отверстие в стене.',
    },
    {
      '@type': 'HowToStep',
      position: 2,
      name: 'Монтаж внутреннего блока',
      text: 'Крепим пластину, навешиваем внутренний блок, подключаем трубки и электрокабель. Прокладываем трассу.',
    },
    {
      '@type': 'HowToStep',
      position: 3,
      name: 'Монтаж наружного блока',
      text: 'Устанавливаем кронштейны на стену, монтируем наружный блок, подключаем трубки и кабель снаружи.',
    },
    {
      '@type': 'HowToStep',
      position: 4,
      name: 'Пуско-наладка',
      text: 'Вакуумируем систему, проверяем герметичность, запускаем кондиционер и тестируем все режимы работы.',
    },
  ],
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
      name: 'Что входит в стоимость установки кондиционера?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'В стандартную стоимость от 400 р. входит: крепление внутреннего и наружного блоков, медная трасса до 3 м с изоляцией, электрокабель, сливной шланг, вакуумирование системы и пусконаладочные работы. Доплата — за трассу длиннее 3 м (50 р./м) и монтаж через балкон (50 р.).',
      },
    },
    {
      '@type': 'Question',
      name: 'Как заказать установку кондиционера на этой странице?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Выберите услугу и параметры в калькуляторе выше — он сразу покажет итоговую цену. Добавьте в корзину или позвоните по телефону +375 29 105-06-94, мы согласуем удобное время выезда мастера.',
      },
    },
    {
      '@type': 'Question',
      name: 'Можно ли заказать установку кондиционера в день обращения?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Да, при заявке в рабочее время (с 9:00 до 18:00, пн–сб) часто выезжаем в день обращения, в остальных случаях — на следующий день.',
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToJsonLd) }}
      />
      {children}
    </>
  );
}
