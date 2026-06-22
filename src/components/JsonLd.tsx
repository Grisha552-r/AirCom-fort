export default function JsonLd() {
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': ['LocalBusiness', 'Store'],
        '@id': 'https://aircom-fort.by/#business',
        name: 'AirComfort',
        description: 'Продажа и установка кондиционеров в Гомеле. Electrolux, Ballu, Haier, LG, Mitsudai, King Home. Монтаж под ключ от 400 р., гарантия 1 год.',
        url: 'https://aircom-fort.by',
        telephone: '+375291050694',
        email: 'aircomfortbel@gmail.com',
        image: 'https://aircom-fort.by/opengraph-image',
        logo: 'https://aircom-fort.by/assets/images/aircomfort-logo.svg',
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'ул. 2-я Витебская, 30, офис №1-14/1',
          addressLocality: 'Гомель',
          postalCode: '246015',
          addressCountry: 'BY',
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: 52.4345,
          longitude: 30.9754,
        },
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: '4.9',
          reviewCount: '9',
          bestRating: '5',
          worstRating: '1',
        },
        openingHoursSpecification: [
          {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
            opens: '09:00',
            closes: '18:00',
          },
        ],
        priceRange: '$$',
        currenciesAccepted: 'BYN',
        paymentAccepted: 'Cash, Credit Card',
        areaServed: [
          { '@type': 'City', name: 'Гомель' },
          { '@type': 'City', name: 'Жлобин' },
          { '@type': 'City', name: 'Мозырь' },
          { '@type': 'City', name: 'Речица' },
          { '@type': 'City', name: 'Светлогорск' },
          { '@type': 'AdministrativeArea', name: 'Гомельская область' },
        ],
        contactPoint: {
          '@type': 'ContactPoint',
          telephone: '+375291050694',
          contactType: 'customer service',
          availableLanguage: 'Russian',
          hoursAvailable: {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
            opens: '09:00',
            closes: '18:00',
          },
        },
        sameAs: ['https://t.me/AirComforto'],
        makesOffer: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Установка кондиционера',
              description: 'Монтаж настенной сплит-системы под ключ в Гомеле. Трасса 3 м, расходники, вакуумирование, пуско-наладка, гарантия 1 год.',
            },
            price: '400',
            priceCurrency: 'BYN',
            eligibleRegion: { '@type': 'City', name: 'Гомель' },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Техническое обслуживание кондиционера',
              description: 'Чистка фильтров и теплообменника, проверка давления фреона, дезинфекция. Продлевает срок службы.',
            },
            price: '100',
            priceCurrency: 'BYN',
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Демонтаж кондиционера',
              description: 'Снятие внутреннего и наружного блоков. Аккуратно, без повреждения отделки.',
            },
            price: '100',
            priceCurrency: 'BYN',
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Заправка кондиционера фреоном',
              description: 'Дозаправка и полная заправка фреоном R32 и R410A с предварительной диагностикой.',
            },
            price: '60',
            priceCurrency: 'BYN',
          },
        ],
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Кондиционеры и климатическая техника',
          itemListElement: [
            { '@type': 'OfferCatalog', name: 'Сплит-системы', description: 'Electrolux, Ballu, Haier, LG, Mitsudai, King Home — инверторные и On/Off' },
            { '@type': 'OfferCatalog', name: 'Мобильные кондиционеры', description: 'Без сверления и монтажа, готов к работе сразу' },
            { '@type': 'OfferCatalog', name: 'Услуги по кондиционированию', description: 'Монтаж, обслуживание, демонтаж, заправка фреоном' },
          ],
        },
      },
      {
        '@type': 'WebSite',
        '@id': 'https://aircom-fort.by/#website',
        url: 'https://aircom-fort.by',
        name: 'AirComfort — Кондиционеры в Гомеле',
        description: 'Купить кондиционер в Гомеле с установкой от 1 290 р. Electrolux, Ballu, Haier, LG, Mitsudai.',
        publisher: { '@id': 'https://aircom-fort.by/#business' },
        potentialAction: {
          '@type': 'SearchAction',
          target: 'https://aircom-fort.by/products?search={search_term_string}',
          'query-input': 'required name=search_term_string',
        },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
