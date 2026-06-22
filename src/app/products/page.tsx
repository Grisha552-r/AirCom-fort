import { getAllProducts } from '@/lib/getProducts';
import ProductsListView from './ProductsListView';

export default async function ProductsPage({
  searchParams,
}: {
  searchParams: Promise<{ search?: string; category?: string }>;
}) {
  const sp = await searchParams;
  const allProducts = await getAllProducts();

  return (
    <ProductsListView
      initialProducts={allProducts}
      initialSearch={sp.search || ''}
      initialCategory={sp.category || ''}
    />
  );
}
