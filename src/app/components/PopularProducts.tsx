'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import ProductCard from '@/components/ProductCard';
import Icon from '@/components/ui/AppIcon';
import type { Product } from '@/lib/store';

interface PopularProductsProps {
  onCartOpen?: () => void;
}

const BRANDS = [
  { id: 'all',       label: 'Все',       slug: 'split-systems' },
  { id: 'Electrolux',label: 'Electrolux',slug: 'split-electrolux' },
  { id: 'Ballu',     label: 'Ballu',     slug: 'split-ballu' },
  { id: 'Haier',     label: 'Haier',     slug: 'split-haier' },
  { id: 'LG',        label: 'LG',        slug: 'split-lg' },
  { id: 'Mitsudai',  label: 'Mitsudai',  slug: 'split-mitsudai' },
  { id: 'King Home', label: 'King Home', slug: 'split-kinghome' },
];

export default function PopularProducts({ onCartOpen }: PopularProductsProps) {
  const [activeTab, setActiveTab] = useState('all');
  const [allProducts, setAllProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch('/api/products').then(r => r.json()).then(setAllProducts);
  }, []);

  const filtered = allProducts
    .filter(p => activeTab === 'all' || p.brand === activeTab)
    .sort((a, b) => a.price - b.price)
    .slice(0, 10);

  const activeBrand = BRANDS.find(b => b.id === activeTab);

  // Count per brand
  const counts: Record<string, number> = { all: allProducts.length };
  for (const p of allProducts) {
    counts[p.brand] = (counts[p.brand] || 0) + 1;
  }

  return (
    <section className="py-14 bg-zinc-50">
      <div className="max-w-7xl mx-auto px-4">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.15em] text-muted-foreground mb-2">
              Каталог
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground leading-tight">
              {activeTab === 'all'
                ? 'Все кондиционеры'
                : `Кондиционеры ${activeTab}`}
            </h2>
            <p className="text-sm text-muted-foreground mt-1">
              {counts[activeTab] || 0} моделей в наличии · Гомель
            </p>
          </div>
          {activeBrand && activeTab !== 'all' && (
            <Link
              href={`/products/${activeBrand.slug}`}
              className="flex items-center gap-1.5 text-sm font-semibold text-crimson-700 hover:text-crimson-800 transition-colors self-start sm:self-auto"
            >
              Смотреть все {activeTab} <Icon name="ArrowRightIcon" size={14} />
            </Link>
          )}
          {activeTab === 'all' && (
            <Link
              href="/products"
              className="flex items-center gap-1.5 text-sm font-semibold text-crimson-700 hover:text-crimson-800 transition-colors self-start sm:self-auto"
            >
              Весь каталог <Icon name="ArrowRightIcon" size={14} />
            </Link>
          )}
        </div>

        {/* Brand tabs */}
        <div className="flex gap-2 overflow-x-auto scrollbar-hide pb-1 mb-6 -mx-4 px-4">
          {BRANDS.map(brand => {
            const count = brand.id === 'all' ? allProducts.length : (counts[brand.id] || 0);
            const isActive = activeTab === brand.id;
            return (
              <button
                key={brand.id}
                onClick={() => setActiveTab(brand.id)}
                className={`shrink-0 flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-200 border ${
                  isActive
                    ? 'bg-crimson-700 text-white border-crimson-700 shadow-sm'
                    : 'bg-white text-foreground border-border hover:border-crimson-300 hover:text-crimson-700'
                }`}
              >
                {brand.label}
                {allProducts.length > 0 && (
                  <span className={`text-[11px] font-normal ${isActive ? 'text-crimson-200' : 'text-muted-foreground'}`}>
                    {count}
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* Products grid */}
        {allProducts.length === 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-4">
            {[...Array(10)].map((_, i) => (
              <div key={i} className="h-64 bg-zinc-200 rounded-2xl animate-pulse" />
            ))}
          </div>
        ) : filtered.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-4">
            {filtered.map(product => (
              <ProductCard key={product.id} product={product} onCartAdd={onCartOpen} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 text-muted-foreground">
            <p className="text-lg font-medium">Товары не найдены</p>
            <p className="text-sm mt-1">Выберите другой бренд</p>
          </div>
        )}

        {/* See all button */}
        {filtered.length > 0 && (
          <div className="text-center mt-8">
            <Link
              href={activeBrand && activeTab !== 'all' ? `/products/${activeBrand.slug}` : '/products'}
              className="inline-flex items-center gap-2 border border-border bg-white hover:border-crimson-400 hover:text-crimson-700 text-foreground font-semibold px-8 py-3 rounded-xl transition-all duration-200 text-sm"
            >
              Смотреть все {activeTab === 'all' ? 'кондиционеры' : activeTab}
              <Icon name="ArrowRightIcon" size={16} />
            </Link>
          </div>
        )}

      </div>
    </section>
  );
}
