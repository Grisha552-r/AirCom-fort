'use client';
import React, { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CartDrawer from '@/components/CartDrawer';
import ProductGallery from '@/app/product-detail/components/ProductGallery';
import ProductInfo from '@/app/product-detail/components/ProductInfo';
import ProductTabs from '@/app/product-detail/components/ProductTabs';
import SimilarProducts from '@/app/product-detail/components/SimilarProducts';
import Icon from '@/components/ui/AppIcon';
import Link from 'next/link';
import { CATEGORIES } from '@/lib/categories';
import type { Product } from '@/lib/store';

const BTU_TO_AREA: Record<string, string> = {
  '5 000': '15', '6 000': '18', '7 000': '20', '7 500': '22',
  '8 000': '22', '9 000': '25', '10 000': '28', '11 000': '30',
  '12 000': '35', '13 000': '38', '14 000': '40', '16 000': '45',
  '18 000': '50', '19 100': '55', '21 000': '60', '22 000': '62',
  '24 000': '70', '26 000': '75', '27 000': '80', '28 000': '82',
  '30 000': '90', '32 000': '95', '36 000': '100', '42 000': '120',
  '48 000': '140', '55 000': '160', '60 000': '180',
};

function getSeriesKey(name: string): string {
  return name.replace(/-(?:05|07|09|11|12|13|14|16|18|19|21|22|24|26|27|28|30|32|36|42|48|55|60)(?=[A-Z])/g, '-##');
}

function getBtuNum(p: Product): number {
  const v = (p.characteristics?.['Базовая мощность кондиционера (охлаждение),BTU'] || '').replace(/\s/g, '');
  return parseInt(v) || 99999;
}

function getBtuLabel(p: Product): string {
  return (p.characteristics?.['Базовая мощность кондиционера (охлаждение),BTU'] || '').trim();
}

function ProductDetailContent() {
  const searchParams = useSearchParams();
  const id = searchParams?.get('id');
  const [cartOpen, setCartOpen] = useState(false);
  const [baseProduct, setBaseProduct] = useState<Product | null>(null);
  const [selected, setSelected] = useState<Product | null>(null);
  const [variants, setVariants] = useState<Product[]>([]);
  const [similar, setSimilar] = useState<Product[]>([]);

  useEffect(() => {
    fetch('/api/products')
      .then(r => r.json())
      .then((all: Product[]) => {
        const found = all.find(p => p.id === id) || all[0];
        setBaseProduct(found);
        setSelected(found);

        const seriesKey = getSeriesKey(found.name);
        const v = all
          .filter(p =>
            p.brand === found.brand &&
            p.categoryId === found.categoryId &&
            getSeriesKey(p.name) === seriesKey
          )
          .sort((a, b) => getBtuNum(a) - getBtuNum(b));

        setVariants(v.length > 1 ? v : []);
        const variantIds = new Set(v.map(x => x.id));
        setSimilar(
          all
            .filter(p => p.categoryId === found.categoryId && p.id !== found.id && !variantIds.has(p.id))
            .slice(0, 5)
        );

        document.title = `${found.name} — купить в Гомеле | AirComfort`;
        const desc = document.querySelector('meta[name="description"]');
        if (desc) desc.setAttribute('content', `Купить ${found.name} в Гомеле по цене ${found.price.toLocaleString('ru-RU')} р. Со склада AirComfort. Официальная гарантия. Самовывоз.`);

        const cat = CATEGORIES.find(c => c.id === found.categoryId);
        const pCat = cat?.parentId ? CATEGORIES.find(c => c.id === cat.parentId) : null;
        const crumbs: { name: string; url: string }[] = [
          { name: 'Главная', url: 'https://aircom-fort.by' },
          { name: 'Каталог', url: 'https://aircom-fort.by/products' },
        ];
        if (pCat) crumbs.push({ name: pCat.name, url: `https://aircom-fort.by/products/${pCat.slug}` });
        if (cat) crumbs.push({ name: cat.name, url: `https://aircom-fort.by/products/${cat.slug}` });
        crumbs.push({ name: found.name, url: `https://aircom-fort.by/product-detail?id=${found.id}` });

        const ldJson = {
          '@context': 'https://schema.org',
          '@graph': [
            {
              '@type': 'Product',
              name: found.name,
              brand: { '@type': 'Brand', name: found.brand },
              image: found.images?.length ? [found.images[0]] : undefined,
              offers: {
                '@type': 'Offer',
                price: found.price,
                priceCurrency: 'BYN',
                availability: 'https://schema.org/InStock',
                url: `https://aircom-fort.by/product-detail?id=${found.id}`,
                seller: { '@type': 'Organization', name: 'AirComfort', url: 'https://aircom-fort.by' },
              },
            },
            {
              '@type': 'BreadcrumbList',
              itemListElement: crumbs.map((item, i) => ({
                '@type': 'ListItem',
                position: i + 1,
                name: item.name,
                item: item.url,
              })),
            },
          ],
        };
        const existing = document.getElementById('product-jsonld');
        if (existing) existing.remove();
        const s = document.createElement('script');
        s.id = 'product-jsonld';
        s.type = 'application/ld+json';
        s.text = JSON.stringify(ldJson);
        document.head.appendChild(s);
      });
  }, [id]);

  const product = selected;
  const category = CATEGORIES.find(c => c.id === product?.categoryId);
  const parentCat = category?.parentId ? CATEGORIES.find(c => c.id === category.parentId) : null;

  return (
    <div className="min-h-screen bg-background">
      <Header onCartOpen={() => setCartOpen(true)} />
      <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} />
      <main className="max-w-7xl mx-auto px-4 py-6">

        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-6 flex-wrap">
          <Link href="/" className="hover:text-crimson-700 transition-colors">Главная</Link>
          <Icon name="ChevronRightIcon" size={14} />
          <Link href="/products" className="hover:text-crimson-700 transition-colors">Каталог</Link>
          {parentCat && (
            <>
              <Icon name="ChevronRightIcon" size={14} />
              <Link href={`/products/${parentCat.slug}`} className="hover:text-crimson-700 transition-colors">{parentCat.name}</Link>
            </>
          )}
          {category && (
            <>
              <Icon name="ChevronRightIcon" size={14} />
              <Link href={`/products/${category.slug}`} className="hover:text-crimson-700 transition-colors">{category.name}</Link>
            </>
          )}
          <Icon name="ChevronRightIcon" size={14} />
          <span className="text-foreground font-medium line-clamp-1">{baseProduct?.name}</span>
        </nav>

        {product ? (
          <>
            {/* BTU variant selector */}
            {variants.length > 1 && (
              <div className="bg-white rounded-2xl border border-border p-4 mb-6">
                <p className="text-sm font-semibold text-foreground mb-3">Выберите мощность:</p>
                <div className="flex flex-wrap gap-2">
                  {variants.map(v => {
                    const btu = getBtuLabel(v);
                    const area = BTU_TO_AREA[btu];
                    return (
                      <button
                        key={v.id}
                        onClick={() => setSelected(v)}
                        className={`flex flex-col items-center px-4 py-2.5 rounded-xl border text-sm font-semibold transition-all duration-200 min-w-[90px] ${
                          selected?.id === v.id
                            ? 'bg-crimson-700 text-white border-crimson-700 shadow-crimson'
                            : 'border-border hover:border-crimson-400 hover:bg-crimson-50 text-foreground'
                        }`}
                      >
                        <span>{btu || '—'} BTU</span>
                        {area && (
                          <span className={`text-[11px] font-normal mt-0.5 ${selected?.id === v.id ? 'text-crimson-100' : 'text-muted-foreground'}`}>
                            до {area} м²
                          </span>
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
              <ProductGallery images={product.images} productName={product.name} />
              <ProductInfo product={product} onCartOpen={() => setCartOpen(true)} />
            </div>
            <ProductTabs product={product} />
            {similar.length > 0 && (
              <SimilarProducts products={similar} onCartOpen={() => setCartOpen(true)} />
            )}
          </>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
            <div className="aspect-square bg-zinc-100 rounded-2xl animate-pulse" />
            <div className="space-y-4">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="h-8 bg-zinc-100 rounded-xl animate-pulse" />
              ))}
            </div>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}

export default function ProductDetailPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><div className="text-muted-foreground">Загрузка...</div></div>}>
      <ProductDetailContent />
    </Suspense>
  );
}
