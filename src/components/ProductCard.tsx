'use client';
import React from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';
import type { Product } from '@/lib/store';
import { useCart, useFavorites } from '@/lib/useStore';

interface ProductCardProps {
  product: Product;
  onCartAdd?: () => void;
}

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map(star => (
        <svg key={star} className={`w-3 h-3 ${star <= Math.round(rating) ? 'text-amber-400' : 'text-zinc-200'}`} fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function ProductCard({ product, onCartAdd }: ProductCardProps) {
  const { addToCart } = useCart();
  const { isFavorite, toggleFavorite } = useFavorites();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart({
      productId: product.id,
      productName: product.name,
      price: product.price,
      quantity: 1,
      image: product.images[0] || '',
    });
    onCartAdd?.();
  };

  const chars = (product.characteristics as Record<string, string> | undefined) ?? {};
  const area = chars['Эффективен для помещ. площадью до'] || '';

  return (
    <Link href={`/products/${product.id}`} className="group block h-full cursor-pointer">
      <div className="bg-white rounded-2xl border border-border hover:border-zinc-300 overflow-hidden h-full flex flex-col transition-all duration-300 hover:shadow-card-hover">

        {/* Image area */}
        <div className="relative overflow-hidden bg-zinc-50 aspect-square">
          <AppImage
            src={product.images[0] || '/assets/images/no_image.png'}
            alt={product.name}
            fill
            className="object-contain p-3 [@media(hover:hover)]:group-hover:scale-105 transition-transform duration-500"
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
          />

          {/* Badges */}
          {product.discount ? (
            <span className="absolute top-2 left-2 bg-crimson-700 text-white text-[10px] font-bold px-2 py-1 rounded-lg leading-none">
              -{product.discount}%
            </span>
          ) : product.isNew ? (
            <span className="absolute top-2 left-2 bg-emerald-500 text-white text-[10px] font-bold px-2 py-1 rounded-lg leading-none">
              NEW
            </span>
          ) : null}

          {area && (
            <span className="absolute bottom-2 left-2 bg-white/90 backdrop-blur-sm text-zinc-600 text-[10px] font-medium px-2 py-1 rounded-lg leading-none border border-zinc-200">
              до {area}
            </span>
          )}

          {/* Favorite */}
          <button
            onClick={e => { e.preventDefault(); e.stopPropagation(); toggleFavorite(product.id); }}
            aria-label={isFavorite(product.id) ? 'Убрать из избранного' : 'Добавить в избранное'}
            className={`absolute top-2 right-2 w-8 h-8 rounded-full bg-white/90 backdrop-blur-sm border border-zinc-200 flex items-center justify-center transition-all duration-200 shadow-sm cursor-pointer ${
              isFavorite(product.id) ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
            }`}
          >
            <Icon
              name="HeartIcon"
              size={15}
              className={isFavorite(product.id) ? 'text-crimson-600' : 'text-zinc-400 hover:text-crimson-600'}
            />
          </button>
        </div>

        {/* Info */}
        <div className="p-3 flex flex-col flex-1 gap-2">
          {product.reviewCount > 0 && (
            <div className="flex items-center gap-1.5">
              <Stars rating={product.rating} />
              <span className="text-xs text-muted-foreground">({product.reviewCount})</span>
            </div>
          )}

          <p className="text-sm font-medium text-foreground line-clamp-2 leading-snug flex-1">
            {product.name}
          </p>

          <div className="mt-auto pt-1">
            <div className="flex items-baseline gap-2 mb-2.5">
              <span className="text-lg font-bold text-foreground leading-none">
                {product.price.toLocaleString('ru-RU')} р.
              </span>
              {product.originalPrice && (
                <span className="text-xs text-muted-foreground line-through leading-none">
                  {product.originalPrice.toLocaleString('ru-RU')} р.
                </span>
              )}
            </div>

            <button
              onClick={handleAddToCart}
              className="w-full bg-crimson-700 hover:bg-crimson-800 active:scale-[0.98] text-white text-xs font-semibold py-2.5 rounded-xl transition-all duration-200 flex items-center justify-center gap-1.5 shadow-sm hover:shadow-crimson cursor-pointer"
            >
              <Icon name="ShoppingCartIcon" size={14} />
              В корзину
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
}
