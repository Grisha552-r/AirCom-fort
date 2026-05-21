'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import ProductCard from '@/components/ProductCard';
import Icon from '@/components/ui/AppIcon';
import type { Product } from '@/lib/store';

interface SaleSectionProps {
  onCartOpen?: () => void;
}

export default function SaleSection({ onCartOpen }: SaleSectionProps) {
  const [items, setItems] = useState<Product[]>([]);

  useEffect(() => {
    fetch('/api/products')
      .then(r => r.json())
      .then((all: Product[]) => {
        setItems(all.filter(p => p.discount && p.discount > 0));
      });
  }, []);

  if (items.length === 0) return null;

  return (
    <section className="py-10 bg-gradient-to-b from-crimson-50 to-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-crimson-700 flex items-center justify-center shrink-0 shadow-sm">
              <Icon name="TagIcon" size={20} className="text-white" />
            </div>
            <div>
              <h2 className="text-xl md:text-2xl font-bold text-foreground leading-none">Акции и скидки</h2>
              <p className="text-muted-foreground text-sm mt-0.5">Специальные цены на выбранные модели</p>
            </div>
          </div>
          <Link
            href="/products/split-systems"
            className="hidden sm:flex items-center gap-1.5 text-sm font-medium text-crimson-700 hover:text-crimson-800 transition-colors"
          >
            Весь каталог
            <Icon name="ArrowRightIcon" size={15} />
          </Link>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
          {items.map(p => (
            <ProductCard key={p.id} product={p} onCartAdd={onCartOpen} />
          ))}
        </div>
      </div>
    </section>
  );
}
