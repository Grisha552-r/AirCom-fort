import { getAllProducts } from '@/lib/getProducts';
import HomePageClient from './HomePageClient';

const homeReviewsSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': 'https://aircom-fort.by/#business',
  name: 'AirComfort',
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '9',
    bestRating: '5',
    worstRating: '1',
  },
  review: [
    { '@type': 'Review', author: { '@type': 'Person', name: 'Андрей К.' }, datePublished: '2026-03-15', reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' }, reviewBody: 'Заказали Electrolux на гостиную 25 м². Приехали в оговорённое время, сделали всё аккуратно — трасса спрятана в кабель-канал, дырку в стене зашпаклевали. Кондиционер работает тихо, жена довольна. Рекомендую.' },
    { '@type': 'Review', author: { '@type': 'Person', name: 'Марина Л.' }, datePublished: '2026-04-10', reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' }, reviewBody: 'Долго выбирала между Ballu и Haier. Менеджер объяснил разницу по-человечески, без давления. Взяла Ballu инвертор. Монтаж сделали за 3 часа, всё чисто. Цена за установку фиксированная — никаких сюрпризов.' },
    { '@type': 'Review', author: { '@type': 'Person', name: 'Сергей В.' }, datePublished: '2026-05-03', reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' }, reviewBody: 'Брали два кондиционера — в спальню и детскую. Сделали скидку за комплект. Мастера работали слаженно, управились за полдня. Наружные блоки повесили на кронштейны так, что с улицы почти не видно.' },
    { '@type': 'Review', author: { '@type': 'Person', name: 'Ольга Р.' }, datePublished: '2026-04-22', reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' }, reviewBody: 'Покупала мобильный кондиционер — квартира съёмная, сверлить нельзя. Привезли быстро, помогли разобраться с подключением по телефону. Летом спасает, в следующем году, наверное, переедем и возьмём сплит здесь же.' },
    { '@type': 'Review', author: { '@type': 'Person', name: 'Дмитрий Ш.' }, datePublished: '2026-05-14', reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' }, reviewBody: 'Установили LG с Wi-Fi. Теперь включаю кондиционер с телефона по дороге домой — прихожу в прохладную квартиру. Монтаж профессиональный, мастер объяснил как пользоваться приложением. Всё работает отлично.' },
    { '@type': 'Review', author: { '@type': 'Person', name: 'Наталья М.' }, datePublished: '2026-03-28', reviewRating: { '@type': 'Rating', ratingValue: '4', bestRating: '5' }, reviewBody: 'Заказали обслуживание старого кондиционера другой фирмы. Почистили, заправили фреон — стал работать как новый. Цена разумная, мастер пунктуальный. Теперь будем обслуживаться здесь каждый год.' },
    { '@type': 'Review', author: { '@type': 'Person', name: 'Игорь Т.' }, datePublished: '2026-04-05', reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' }, reviewBody: 'Переехали в новую квартиру и сразу обратились в AirComfort. Посоветовали Mitsudai — хорошее соотношение цены и качества. Прошёл сезон, никаких нареканий. Работает тихо, охлаждает быстро.' },
    { '@type': 'Review', author: { '@type': 'Person', name: 'Екатерина Б.' }, datePublished: '2026-05-19', reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' }, reviewBody: 'Ставили кондиционер через балкон — трасса длинная, 7 метров. Думала, будет проблема, но мастера справились без вопросов. Смонтировали красиво, все стыки герметичны. Очень довольна результатом.' },
    { '@type': 'Review', author: { '@type': 'Person', name: 'Роман П.' }, datePublished: '2026-02-18', reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' }, reviewBody: 'Брал кондиционер для работы в режиме обогрева зимой. Менеджер сразу предупредил, какая модель выдержит мороз, а какая нет. Взял с зимним комплектом — работает даже при -15. Грамотные специалисты.' },
  ],
};

const homeFaqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Сколько стоит установка кондиционера в Гомеле?',
      acceptedAnswer: { '@type': 'Answer', text: 'Установка кондиционера в Гомеле от 400 р. Цена под ключ — кондиционер + монтаж. Electrolux от 1 290 р., Ballu от 1 090 р. Выезд мастера бесплатно.' },
    },
    {
      '@type': 'Question',
      name: 'Как быстро установят кондиционер?',
      acceptedAnswer: { '@type': 'Answer', text: 'Выезд мастера и установка кондиционера — в день заказа или на следующий день. Монтаж занимает 2–4 часа.' },
    },
    {
      '@type': 'Question',
      name: 'Какая гарантия на кондиционер?',
      acceptedAnswer: { '@type': 'Answer', text: 'Гарантия на кондиционер — 1 год, на монтажные работы — 1 год. Обслуживание и ремонт по гарантии бесплатно.' },
    },
    {
      '@type': 'Question',
      name: 'Выезжаете ли в область?',
      acceptedAnswer: { '@type': 'Answer', text: 'Да, работаем в Гомеле и Гомельской области. Выезд в район — по договорённости. Звоните: +375 29 105-06-94.' },
    },
    {
      '@type': 'Question',
      name: 'Какие кондиционеры есть в наличии?',
      acceptedAnswer: { '@type': 'Answer', text: 'В наличии более 300 моделей: Electrolux, Ballu, Haier, LG, Mitsudai, King Home. Сплит-системы, мобильные, инверторные. Цены от 890 р.' },
    },
  ],
};

export default async function HomePage() {
  const allProducts = await getAllProducts();
  // PopularProducts only filters by price/discount — description and the full
  // characteristics object aren't used and just bloat the page for every visitor.
  const lightProducts = allProducts.map(p => ({ ...p, description: '', characteristics: {} }));

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(homeReviewsSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(homeFaqSchema) }} />
      <HomePageClient initialProducts={lightProducts} />
    </>
  );
}
