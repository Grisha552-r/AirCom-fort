export default function JsonLd() {
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'LocalBusiness',
        '@id': 'https://aircom-fort.by/#business',
        name: 'AirComfort',
        description: 'Продажа кондиционеров в Гомеле. Electrolux, Ballu, Haier, LG, Mitsudai. Установка, обслуживание, демонтаж.',
        url: 'https://aircom-fort.by',
        telephone: '+375291050694',
        email: 'aircomfortbel@gmail.com',
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
        areaServed: {
          '@type': 'City',
          name: 'Гомель',
        },
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
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Кондиционеры и климатическая техника',
        },
      },
      {
        '@type': 'WebSite',
        '@id': 'https://aircom-fort.by/#website',
        url: 'https://aircom-fort.by',
        name: 'AirComfort',
        description: 'Купить кондиционер в Гомеле',
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
