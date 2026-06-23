import { getAllProducts } from '@/lib/getProducts';
import ProductsListView from './ProductsListView';

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Главная', item: 'https://aircom-fort.by/' },
    { '@type': 'ListItem', position: 2, name: 'Каталог кондиционеров', item: 'https://aircom-fort.by/products' },
  ],
};

const productListJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Каталог кондиционеров AirComfort в Гомеле',
  url: 'https://aircom-fort.by/products',
  numberOfItems: 300,
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Кондиционеры Electrolux', url: 'https://aircom-fort.by/products/split-electrolux' },
    { '@type': 'ListItem', position: 2, name: 'Кондиционеры Ballu', url: 'https://aircom-fort.by/products/split-ballu' },
    { '@type': 'ListItem', position: 3, name: 'Кондиционеры Haier', url: 'https://aircom-fort.by/products/split-haier' },
    { '@type': 'ListItem', position: 4, name: 'Кондиционеры LG', url: 'https://aircom-fort.by/products/split-lg' },
    { '@type': 'ListItem', position: 5, name: 'Кондиционеры Mitsudai', url: 'https://aircom-fort.by/products/split-mitsudai' },
    { '@type': 'ListItem', position: 6, name: 'Мобильные кондиционеры', url: 'https://aircom-fort.by/products/mobile' },
  ],
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Как выбрать мощность кондиционера?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ориентируйтесь на площадь помещения: для 20 м² — 7 000–9 000 BTU, для 35 м² — 12 000 BTU, для 50 м² — 18 000 BTU. Если потолки выше 2,7 м или помещение с большими окнами — берите модель с запасом мощности.',
      },
    },
    {
      '@type': 'Question',
      name: 'Что входит в стандартный монтаж?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'В монтаж от 400 р. входит: крепление внутреннего и наружного блоков, прокладка медной трассы до 3 м, электрокабель, вакуумирование системы и пусконаладка. Дополнительный метр трассы — 25 р.',
      },
    },
    {
      '@type': 'Question',
      name: 'Сколько времени занимает установка?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Стандартная установка одного кондиционера — 2–4 часа. Если трасса длинная или монтаж через балкон — до 5–6 часов. Мастера приезжают в оговорённое время в день заказа или на следующий день.',
      },
    },
    {
      '@type': 'Question',
      name: 'Какая гарантия на кондиционер?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Electrolux и LG — 3 года, Ballu и Haier — 2 года, Mitsudai и King Home — 1 год, Vicool — 7 лет. На монтажные работы — отдельная гарантия 1 год. Гарантийный ремонт выполняем бесплатно с выездом мастера.',
      },
    },
    {
      '@type': 'Question',
      name: 'Можно ли купить кондиционер без установки?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Да, продаём кондиционеры без монтажа. Самовывоз — по адресу, уточняйте по телефону. Доставка по Гомелю — договаривайтесь при заказе. Но рекомендуем установку: неправильный монтаж снимает гарантию производителя.',
      },
    },
  ],
};

export default async function ProductsPage({
  searchParams,
}: {
  searchParams: Promise<{ search?: string; category?: string }>;
}) {
  const sp = await searchParams;
  const allProducts = await getAllProducts();

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productListJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <ProductsListView
        initialProducts={allProducts}
        initialSearch={sp.search || ''}
        initialCategory={sp.category || ''}
      />
    </>
  );
}
