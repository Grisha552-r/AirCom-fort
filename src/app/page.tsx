import { getAllProducts } from '@/lib/getProducts';
import HomePageClient from './HomePageClient';

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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(homeFaqSchema) }} />
      <HomePageClient initialProducts={lightProducts} />
    </>
  );
}
