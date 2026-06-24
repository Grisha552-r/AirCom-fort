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
        review: [
          { '@type': 'Review', author: { '@type': 'Person', name: 'Андрей К.' }, datePublished: '2026-03-15', reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5', worstRating: '1' }, reviewBody: 'Заказали Electrolux на гостиную 25 м². Приехали в оговорённое время, сделали всё аккуратно — трасса спрятана в кабель-канал, дырку в стене зашпаклевали. Кондиционер работает тихо, жена довольна. Рекомендую.' },
          { '@type': 'Review', author: { '@type': 'Person', name: 'Марина Л.' }, datePublished: '2026-04-10', reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5', worstRating: '1' }, reviewBody: 'Долго выбирала между Ballu и Haier. Менеджер объяснил разницу по-человечески, без давления. Взяла Ballu инвертор. Монтаж сделали за 3 часа, всё чисто. Цена за установку фиксированная — никаких сюрпризов.' },
          { '@type': 'Review', author: { '@type': 'Person', name: 'Сергей В.' }, datePublished: '2026-05-03', reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5', worstRating: '1' }, reviewBody: 'Брали два кондиционера — в спальню и детскую. Сделали скидку за комплект. Мастера работали слаженно, управились за полдня. Наружные блоки повесили на кронштейны так, что с улицы почти не видно.' },
          { '@type': 'Review', author: { '@type': 'Person', name: 'Ольга Р.' }, datePublished: '2026-04-22', reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5', worstRating: '1' }, reviewBody: 'Покупала мобильный кондиционер — квартира съёмная, сверлить нельзя. Привезли быстро, помогли разобраться с подключением по телефону. Летом спасает, в следующем году, наверное, переедем и возьмём сплит здесь же.' },
          { '@type': 'Review', author: { '@type': 'Person', name: 'Дмитрий Ш.' }, datePublished: '2026-05-14', reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5', worstRating: '1' }, reviewBody: 'Установили LG с Wi-Fi. Теперь включаю кондиционер с телефона по дороге домой — прихожу в прохладную квартиру. Монтаж профессиональный, мастер объяснил как пользоваться приложением. Всё работает отлично.' },
          { '@type': 'Review', author: { '@type': 'Person', name: 'Наталья М.' }, datePublished: '2026-03-28', reviewRating: { '@type': 'Rating', ratingValue: '4', bestRating: '5', worstRating: '1' }, reviewBody: 'Заказали обслуживание старого кондиционера другой фирмы. Почистили, заправили фреон — стал работать как новый. Цена разумная, мастер пунктуальный. Теперь будем обслуживаться здесь каждый год.' },
          { '@type': 'Review', author: { '@type': 'Person', name: 'Игорь Т.' }, datePublished: '2026-04-05', reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5', worstRating: '1' }, reviewBody: 'Переехали в новую квартиру и сразу обратились в AirComfort. Посоветовали Mitsudai — хорошее соотношение цены и качества. Прошёл сезон, никаких нареканий. Работает тихо, охлаждает быстро.' },
          { '@type': 'Review', author: { '@type': 'Person', name: 'Екатерина Б.' }, datePublished: '2026-05-19', reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5', worstRating: '1' }, reviewBody: 'Ставили кондиционер через балкон — трасса длинная, 7 метров. Думала, будет проблема, но мастера справились без вопросов. Смонтировали красиво, все стыки герметичны. Очень довольна результатом.' },
          { '@type': 'Review', author: { '@type': 'Person', name: 'Роман П.' }, datePublished: '2026-02-18', reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5', worstRating: '1' }, reviewBody: 'Брал кондиционер для работы в режиме обогрева зимой. Менеджер сразу предупредил, какая модель выдержит мороз, а какая нет. Взял с зимним комплектом — работает даже при -15. Грамотные специалисты.' },
        ],
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
