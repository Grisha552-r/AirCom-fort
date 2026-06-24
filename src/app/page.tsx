import { getAllProducts } from '@/lib/getProducts';
import HomePageClient from './HomePageClient';

export default async function HomePage() {
  const allProducts = await getAllProducts();
  // PopularProducts only filters by price/discount — description and the full
  // characteristics object aren't used and just bloat the page for every visitor.
  const lightProducts = allProducts.map(p => ({ ...p, description: '', characteristics: {} }));

  return <HomePageClient initialProducts={lightProducts} />;
}
