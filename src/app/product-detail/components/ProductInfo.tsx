'use client';
import React, { useState } from 'react';
import Icon from '@/components/ui/AppIcon';
import type { Product } from '@/lib/store';
import { useCart, useFavorites } from '@/lib/useStore';
import InstallCalculatorModal from '@/components/InstallCalculatorModal';

interface ProductInfoProps {
  product: Product;
  onCartOpen?: () => void;
}

function StarRating({ rating, count }: { rating: number; count: number }) {
  return (
    <div className="flex items-center gap-2">
      <div className="flex items-center gap-0.5">
        {[1, 2, 3, 4, 5].map(star => (
          <svg key={star} className={`w-4 h-4 ${star <= Math.round(rating) ? 'text-amber-400' : 'text-zinc-200'}`} fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
      <span className="text-sm font-semibold text-foreground">{rating}</span>
      <span className="text-sm text-muted-foreground">({count} отзывов)</span>
    </div>
  );
}

export default function ProductInfo({ product, onCartOpen }: ProductInfoProps) {
  const { addToCart } = useCart();
  const { isFavorite, toggleFavorite } = useFavorites();
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);
  const [calcOpen, setCalcOpen] = useState(false);

  const displayPrice = product.discount ? product.price : Math.round(product.price * 0.99);
  const installFee = product.brand === 'King Home' ? 190 : 400;

  const handleAdd = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart({
        productId: product.id,
        productName: product.name,
        price: displayPrice,
        quantity: 1,
        image: product.images[0] || '',
      });
    }
    setAdded(true);
    onCartOpen?.();
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <>
    <InstallCalculatorModal open={calcOpen} onClose={() => setCalcOpen(false)} onCartOpen={onCartOpen} />
    <div className="space-y-5">
      {/* Brand & badges */}
      <div className="flex items-center gap-2 flex-wrap">
        <span className="bg-zinc-100 text-zinc-600 text-xs font-semibold px-3 py-1 rounded-full">{product.brand}</span>
        {product.isNew && <span className="bg-emerald-100 text-emerald-700 text-xs font-semibold px-3 py-1 rounded-full">Новинка</span>}
        {product.discount && <span className="bg-crimson-100 text-crimson-700 text-xs font-semibold px-3 py-1 rounded-full">-{product.discount}%</span>}
      </div>

      {/* Name */}
      <h1 className="text-2xl md:text-3xl font-bold text-foreground leading-tight">{product.name}</h1>

      {/* Rating */}
      <StarRating rating={product.rating} count={product.reviewCount} />

      {/* Price */}
      <div className="bg-zinc-50 rounded-2xl p-4 border border-border">
        <div className="flex items-baseline gap-3 mb-1">
          <span className="text-3xl font-bold text-foreground">{displayPrice.toLocaleString('ru-RU')} р.</span>
          {product.originalPrice && (
            <span className="text-lg text-muted-foreground line-through">{product.originalPrice.toLocaleString('ru-RU')} р.</span>
          )}
        </div>
        {product.discount && product.originalPrice && (
          <p className="text-sm text-crimson-700 font-semibold">
            Вы экономите: {(product.originalPrice - product.price).toLocaleString('ru-RU')} р.
          </p>
        )}
      </div>

      {/* Выгода: цена под ключ + экономия */}
      {product.categoryId !== 'mobile' && (
        <div className="rounded-2xl border border-crimson-200 overflow-hidden">
          <div className="bg-crimson-700 px-4 py-1.5">
            <p className="text-[10px] text-white/80 font-bold uppercase tracking-widest">Цена под ключ</p>
          </div>
          <div className="bg-crimson-50 px-4 py-3 flex items-center justify-between gap-4">
            <div>
              <p className="text-2xl font-bold text-foreground">
                {(displayPrice + installFee).toLocaleString('ru-RU')} <span className="text-base font-semibold text-muted-foreground">р.</span>
              </p>
              <p className="text-xs text-muted-foreground mt-0.5">
                {displayPrice.toLocaleString('ru-RU')} р. + монтаж {installFee} р.
              </p>
            </div>
            {product.discount && product.originalPrice && (
              <div className="text-right shrink-0 bg-white rounded-xl px-3 py-2 border border-emerald-200">
                <p className="text-[9px] text-muted-foreground uppercase tracking-wide">Экономия</p>
                <p className="text-lg font-bold text-emerald-600">
                  −{(product.originalPrice - product.price).toLocaleString('ru-RU')} р.
                </p>
              </div>
            )}
          </div>
        </div>
      )}


      {/* Quantity + Add to cart */}
      <div className="flex items-center gap-3">
        <div className="flex items-center border border-border rounded-xl overflow-hidden">
          <button onClick={() => setQuantity(q => Math.max(1, q - 1))} className="w-11 h-11 flex items-center justify-center hover:bg-muted transition-colors text-lg font-bold">−</button>
          <span className="w-12 text-center font-semibold">{quantity}</span>
          <button onClick={() => setQuantity(q => q + 1)} className="w-11 h-11 flex items-center justify-center hover:bg-muted transition-colors text-lg font-bold">+</button>
        </div>
        <button
          onClick={handleAdd}
          disabled={!product.inStock}
          className={`flex-1 py-3 rounded-xl font-bold text-base flex items-center justify-center gap-2 transition-all duration-200 ${
            added
              ? 'bg-emerald-500 text-white'
              : product.inStock
              ? 'bg-crimson-gradient text-white hover:opacity-90 shadow-crimson'
              : 'bg-muted text-muted-foreground cursor-not-allowed'
          }`}
        >
          <Icon name={added ? 'CheckIcon' : 'ShoppingCartIcon'} size={18} />
          {added ? 'Добавлено!' : 'В корзину'}
        </button>
        <button
          onClick={() => toggleFavorite(product.id)}
          className={`w-11 h-11 rounded-xl border flex items-center justify-center transition-colors ${isFavorite(product.id) ? 'border-crimson-400 bg-crimson-50' : 'border-border hover:border-crimson-400 hover:bg-crimson-50'}`}
        >
          <Icon name="HeartIcon" size={20} className={isFavorite(product.id) ? 'text-crimson-600' : 'text-muted-foreground'} />
        </button>
      </div>

      {/* Urgency note */}
      <div className="flex items-center gap-2 text-xs text-amber-700 bg-amber-50 border border-amber-200 rounded-xl px-3 py-2">
        <svg className="w-3.5 h-3.5 shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd"/></svg>
        <span>Сезон — мастера загружены. Запись лучше оформить заранее.</span>
      </div>

      {/* Install calculator button */}
      {product.categoryId !== 'mobile' && (
        <button
          onClick={() => setCalcOpen(true)}
          className="w-full border-2 border-crimson-200 text-crimson-700 hover:bg-crimson-50 font-semibold py-3 rounded-xl transition-all flex items-center justify-center gap-2"
        >
          <Icon name="CalculatorIcon" size={18} />
          Рассчитать стоимость установки
        </button>
      )}

      {/* Trust strip */}
      <div className="grid grid-cols-3 gap-2 text-xs text-center">
        {[
          { icon: 'ShieldCheckIcon', label: 'Гарантия\n2 года' },
          { icon: 'TruckIcon', label: 'Доставка\nпо Гомелю' },
          { icon: 'WrenchScrewdriverIcon', label: 'Монтаж\nза 1–2 дня' },
        ].map(({ icon, label }) => (
          <div key={label} className="flex flex-col items-center gap-1 bg-zinc-50 rounded-xl p-2 border border-border">
            <Icon name={icon} size={18} className="text-crimson-600" />
            <span className="text-muted-foreground leading-tight whitespace-pre-line">{label}</span>
          </div>
        ))}
      </div>

      {/* Key characteristics preview */}
      {Object.keys(product.characteristics).length > 0 && (
        <div className="space-y-2">
          <p className="text-sm font-semibold text-foreground">Основные характеристики:</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {Object.entries(product.characteristics).filter(([key]) => key !== 'Вид управления' && key !== 'Тип управления').slice(0, 4).map(([key, val]) => (
              <div key={key} className="bg-zinc-50 rounded-xl px-3 py-2 border border-border">
                <p className="text-xs text-muted-foreground">{key}</p>
                <p className="text-sm font-medium text-foreground">{val}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
    </>
  );
}