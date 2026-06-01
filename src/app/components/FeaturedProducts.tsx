'use client';
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';
import ProductCard from '@/components/ProductCard';
import type { Product } from '@/lib/store';

interface FeaturedProductsProps {
  onCartOpen?: () => void;
}

export default function FeaturedProducts({ onCartOpen }: FeaturedProductsProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [featured, setFeatured] = useState<Product[]>([]);

  useEffect(() => {
    fetch('/api/products')
      .then(r => r.json())
      .then((all: Product[]) => {
        const picks: Product[] = [];
        // Mitsudai On/Off 07 and 09 first (MD- series, not MDI-)
        const mitsudai07 = all.find(p => p.brand === 'Mitsudai' && /MD-SNC07/.test(p.name));
        const mitsudai09 = all.find(p => p.brand === 'Mitsudai' && /MD-SNC09/.test(p.name));
        if (mitsudai07) picks.push(mitsudai07);
        if (mitsudai09) picks.push(mitsudai09);
        // Then Electrolux (in stock, sorted by price asc)
        const electrolux = all.filter(p => p.brand === 'Electrolux' && p.inStock).sort((a, b) => a.price - b.price);
        picks.push(...electrolux.slice(0, 4));
        // Then Ballu (in stock, sorted by price asc)
        const ballu = all.filter(p => p.brand === 'Ballu' && p.inStock).sort((a, b) => a.price - b.price);
        picks.push(...ballu.slice(0, 4));
        setFeatured(picks);
      });
  }, []);

  const scroll = (dir: 'left' | 'right') => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: dir === 'right' ? 300 : -300, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-10 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-bold text-foreground">Рекомендуем</h2>
            <p className="text-sm text-muted-foreground mt-0.5">Лучшие товары по выгодным ценам</p>
          </div>
          <div className="flex items-center gap-2">
            <button onClick={() => scroll('left')} className="w-9 h-9 rounded-full border border-border flex items-center justify-center hover:border-crimson-400 hover:bg-crimson-50 transition-colors">
              <Icon name="ChevronLeftIcon" size={16} />
            </button>
            <button onClick={() => scroll('right')} className="w-9 h-9 rounded-full border border-border flex items-center justify-center hover:border-crimson-400 hover:bg-crimson-50 transition-colors">
              <Icon name="ChevronRightIcon" size={16} />
            </button>
            <Link href="/products" className="text-sm font-medium text-crimson-700 hover:text-crimson-800 flex items-center gap-1 ml-2">
              Все товары <Icon name="ArrowRightIcon" size={14} />
            </Link>
          </div>
        </div>

        <div ref={scrollRef} className="flex gap-3 overflow-x-auto scrollbar-hide pb-2 scroll-smooth snap-x snap-mandatory">
          {featured.length === 0 ? (
            <div className="flex gap-3">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="shrink-0 w-[44vw] sm:w-52 md:w-60 h-72 bg-zinc-100 rounded-2xl animate-pulse snap-start" />
              ))}
            </div>
          ) : (
            featured.map(product => (
              <div key={product.id} className="shrink-0 w-[44vw] sm:w-52 md:w-60 snap-start">
                <ProductCard product={product} onCartAdd={onCartOpen} />
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
}
