'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import ProductCard from '@/components/ProductCard';
import type { Product } from '@/lib/store';

interface PopularProductsProps {
  onCartOpen?: () => void;
}

const TABS = [
  { id: 'all', label: 'Все' },
  { id: 'under500', label: 'до 500 р.' },
  { id: '500-1500', label: '500–1500 р.' },
  { id: 'over1500', label: 'от 1500 р.' },
  { id: 'discounted', label: 'Скидки' },
];

export default function PopularProducts({ onCartOpen }: PopularProductsProps) {
  const [activeTab, setActiveTab] = useState('all');
  const [allProducts, setAllProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch('/api/products').then(r => r.json()).then(setAllProducts);
  }, []);

  const filtered = allProducts
    .filter(p => {
      if (activeTab === 'all') return true;
      if (activeTab === 'under500') return p.price < 500;
      if (activeTab === '500-1500') return p.price >= 500 && p.price <= 1500;
      if (activeTab === 'over1500') return p.price > 1500;
      if (activeTab === 'discounted') return !!p.discount;
      return true;
    })
    .sort((a, b) => a.price - b.price);

  return (
    <section className="py-10 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
          <div>
            <h2 className="text-2xl font-bold text-foreground">Популярные товары</h2>
            <p className="text-sm text-muted-foreground mt-0.5">Самые востребованные позиции</p>
          </div>
          <Link href="/products" className="text-sm font-medium text-crimson-700 hover:text-crimson-800 flex items-center gap-1">
            Смотреть все →
          </Link>
        </div>

        <div className="flex gap-2 overflow-x-auto scrollbar-hide pb-1 mb-6">
          {TABS.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`shrink-0 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                activeTab === tab.id
                  ? 'bg-crimson-700 text-white shadow-crimson'
                  : 'bg-zinc-100 text-muted-foreground hover:bg-zinc-200'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {allProducts.length === 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-4">
            {[...Array(10)].map((_, i) => (
              <div key={i} className="h-64 bg-zinc-100 rounded-2xl animate-pulse" />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-4">
            {filtered.slice(0, 10).map(product => (
              <ProductCard key={product.id} product={product} onCartAdd={onCartOpen} />
            ))}
          </div>
        )}

        {allProducts.length > 0 && filtered.length === 0 && (
          <div className="text-center py-16 text-muted-foreground">
            <p className="text-lg font-medium">Товары не найдены</p>
            <p className="text-sm mt-1">Попробуйте другой фильтр</p>
          </div>
        )}
      </div>
    </section>
  );
}
