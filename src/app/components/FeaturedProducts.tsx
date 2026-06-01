'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';
import { useCart } from '@/lib/useStore';
import type { Product } from '@/lib/store';

interface FeaturedProductsProps {
  onCartOpen?: () => void;
}

function getBtu(p: Product): string {
  const v = p.characteristics?.['Базовая мощность кондиционера (охлаждение),BTU'] || '';
  return v.trim();
}

function getArea(btu: string): string {
  const map: Record<string, string> = {
    '7 000': '20', '7 500': '22', '9 000': '25', '10 000': '28',
    '12 000': '35', '14 000': '40', '18 000': '50', '24 000': '70',
  };
  return map[btu] || '';
}

function HeroCard({ product, onCartOpen, badge }: { product: Product; onCartOpen?: () => void; badge?: string }) {
  const { addToCart } = useCart();
  const btu = getBtu(product);
  const area = getArea(btu);
  const totalPrice = product.price + 400;

  const handleAdd = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart({ productId: product.id, productName: product.name, price: product.price, quantity: 1, image: product.images?.[0] || '' });
    onCartOpen?.();
  };

  return (
    <Link href={`/products/${product.id}`} className="group block">
      <div className="bg-white rounded-2xl overflow-hidden flex flex-col h-full transition-all duration-300 [@media(hover:hover)]:group-hover:shadow-2xl [@media(hover:hover)]:group-hover:-translate-y-1">
        {/* Image area */}
        <div className="relative bg-zinc-50 aspect-[4/3] overflow-hidden">
          <AppImage
            src={product.images?.[0] || ''}
            alt={product.name}
            fill
            className="object-contain p-4 [@media(hover:hover)]:group-hover:scale-105 transition-transform duration-500"
            sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 33vw"
          />
          {badge && (
            <span className="absolute top-3 left-3 bg-crimson-700 text-white text-[11px] font-bold px-2.5 py-1 rounded-lg tracking-wide">
              {badge}
            </span>
          )}
          {product.discount && (
            <span className="absolute top-3 right-3 bg-emerald-500 text-white text-[11px] font-bold px-2.5 py-1 rounded-lg">
              −{product.discount}%
            </span>
          )}
        </div>

        {/* Info */}
        <div className="p-4 flex flex-col flex-1">
          <p className="text-xs font-semibold text-crimson-600 mb-1">{product.brand}</p>
          <p className="font-bold text-foreground text-sm leading-snug line-clamp-2 mb-3 flex-1">
            {product.name}
          </p>

          {/* Specs row */}
          {(btu || area) && (
            <div className="flex gap-2 mb-3">
              {btu && (
                <span className="text-[11px] bg-zinc-100 text-zinc-600 font-medium px-2 py-0.5 rounded-md">
                  {btu} BTU
                </span>
              )}
              {area && (
                <span className="text-[11px] bg-zinc-100 text-zinc-600 font-medium px-2 py-0.5 rounded-md">
                  до {area} м²
                </span>
              )}
            </div>
          )}

          {/* Price breakdown */}
          <div className="bg-zinc-50 border border-border rounded-xl p-3 mb-3 space-y-1.5">
            <div className="flex justify-between text-xs text-muted-foreground">
              <span>Кондиционер</span>
              <span>{product.price.toLocaleString('ru-RU')} р.</span>
            </div>
            <div className="flex justify-between text-xs text-muted-foreground">
              <span>Монтаж</span>
              <span>400 р.</span>
            </div>
            <div className="flex justify-between font-bold text-sm border-t border-border pt-1.5 mt-1.5">
              <span className="text-foreground">Под ключ</span>
              <span className="text-crimson-700 text-base">{totalPrice.toLocaleString('ru-RU')} р.</span>
            </div>
          </div>

          <button
            onClick={handleAdd}
            className="w-full bg-crimson-700 hover:bg-crimson-800 active:scale-[0.98] text-white py-2.5 rounded-xl font-semibold text-sm transition-all flex items-center justify-center gap-2"
          >
            <Icon name="ShoppingCartIcon" size={16} />
            В корзину
          </button>
        </div>
      </div>
    </Link>
  );
}

export default function FeaturedProducts({ onCartOpen }: FeaturedProductsProps) {
  const [featured, setFeatured] = useState<Product[]>([]);

  useEffect(() => {
    fetch('/api/products')
      .then(r => r.json())
      .then((all: Product[]) => {
        const picks: Product[] = [];
        const mitsudai = all.find(p => p.brand === 'Mitsudai' && /MD-SNC09|MD-SNE09/.test(p.name));
        if (mitsudai) picks.push(mitsudai);
        const ballu = all.filter(p => p.brand === 'Ballu' && p.inStock).sort((a, b) => a.price - b.price);
        if (ballu[0]) picks.push(ballu[0]);
        const electrolux = all.filter(p => p.brand === 'Electrolux' && p.inStock).sort((a, b) => a.price - b.price);
        if (electrolux[0]) picks.push(electrolux[0]);
        setFeatured(picks);
      });
  }, []);

  const BADGES = ['Лучшая цена', 'Хит продаж', 'Надёжный выбор'];

  return (
    <section className="py-14 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-4">

        {/* Header */}
        <div className="flex items-end justify-between mb-8">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-crimson-500 animate-pulse" />
              <span className="text-xs font-bold uppercase tracking-[0.15em] text-crimson-400">Хиты сезона</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-white leading-tight">
              Кондиционеры с установкой
            </h2>
            <p className="text-zinc-400 text-sm mt-1">Готовая цена под ключ — кондиционер + монтаж</p>
          </div>
          <Link
            href="/products"
            className="hidden sm:flex items-center gap-1.5 text-sm font-medium text-zinc-400 hover:text-white transition-colors"
          >
            Весь каталог <Icon name="ArrowRightIcon" size={14} />
          </Link>
        </div>

        {/* Cards */}
        {featured.length === 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="bg-zinc-800 rounded-2xl h-96 animate-pulse" />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {featured.map((product, i) => (
              <HeroCard
                key={product.id}
                product={product}
                onCartOpen={onCartOpen}
                badge={BADGES[i]}
              />
            ))}
          </div>
        )}

        {/* Bottom CTA */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-8 pt-8 border-t border-zinc-800">
          <p className="text-zinc-400 text-sm text-center sm:text-left">
            Не нашли нужную модель? Поможем подобрать бесплатно
          </p>
          <div className="flex gap-3">
            <a
              href="tel:+375291050694"
              className="flex items-center gap-2 text-sm font-semibold text-white border border-zinc-700 hover:border-crimson-500 hover:bg-crimson-700/20 px-5 py-2.5 rounded-xl transition-all"
            >
              <Icon name="PhoneIcon" size={15} />
              +375 29 105-06-94
            </a>
            <Link
              href="/products"
              className="flex items-center gap-2 text-sm font-semibold bg-crimson-700 hover:bg-crimson-800 text-white px-5 py-2.5 rounded-xl transition-all sm:hidden"
            >
              Каталог <Icon name="ArrowRightIcon" size={14} />
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
