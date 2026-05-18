'use client';
import React, { useRef } from 'react';
import Icon from '@/components/ui/AppIcon';
import ProductCard from '@/components/ProductCard';
import type { Product } from '@/lib/store';

interface SimilarProductsProps {
  products: Product[];
  onCartOpen?: () => void;
}

export default function SimilarProducts({ products, onCartOpen }: SimilarProductsProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: 'left' | 'right') => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: dir === 'right' ? 280 : -280, behavior: 'smooth' });
    }
  };

  return (
    <section>
      <div className="flex items-center justify-between mb-5">
        <h2 className="text-xl font-bold text-foreground">Похожие товары</h2>
        <div className="flex items-center gap-2">
          <button onClick={() => scroll('left')} className="w-9 h-9 rounded-full border border-border flex items-center justify-center hover:border-crimson-400 hover:bg-crimson-50 transition-colors">
            <Icon name="ChevronLeftIcon" size={16} />
          </button>
          <button onClick={() => scroll('right')} className="w-9 h-9 rounded-full border border-border flex items-center justify-center hover:border-crimson-400 hover:bg-crimson-50 transition-colors">
            <Icon name="ChevronRightIcon" size={16} />
          </button>
        </div>
      </div>
      <div ref={scrollRef} className="flex gap-4 overflow-x-auto scrollbar-hide pb-2">
        {products.map(product => (
          <div key={product.id} className="shrink-0 w-52 md:w-60">
            <ProductCard product={product} onCartAdd={onCartOpen} />
          </div>
        ))}
      </div>
    </section>
  );
}