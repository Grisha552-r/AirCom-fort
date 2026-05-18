'use client';
import React, { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CartDrawer from '@/components/CartDrawer';
import ProductCard from '@/components/ProductCard';
import Icon from '@/components/ui/AppIcon';
import Link from 'next/link';
import { useFavorites } from '@/lib/useStore';
import type { Product } from '@/lib/store';

export default function FavoritesPage() {
  const [cartOpen, setCartOpen] = useState(false);
  const { favorites } = useFavorites();
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/products')
      .then(r => r.json())
      .then((all: Product[]) => {
        setProducts(all.filter(p => favorites.includes(p.id)));
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [favorites]);

  return (
    <div className="min-h-screen bg-background">
      <Header onCartOpen={() => setCartOpen(true)} />
      <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} />

      <main className="max-w-7xl mx-auto px-4 py-8">
        <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
          <Link href="/" className="hover:text-crimson-700 transition-colors">Главная</Link>
          <Icon name="ChevronRightIcon" size={14} />
          <span className="text-foreground font-medium">Избранное</span>
        </nav>

        <h1 className="text-2xl font-bold text-foreground mb-6">
          Избранное
          {favorites.length > 0 && (
            <span className="ml-2 text-base font-normal text-muted-foreground">({favorites.length})</span>
          )}
        </h1>

        {loading ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="bg-white rounded-2xl border border-border h-64 animate-pulse" />
            ))}
          </div>
        ) : products.length === 0 ? (
          <div className="text-center py-20">
            <div className="w-20 h-20 rounded-full bg-crimson-50 flex items-center justify-center mx-auto mb-5">
              <Icon name="HeartIcon" size={40} className="text-crimson-300" />
            </div>
            <p className="text-lg font-semibold text-foreground mb-2">Список избранного пуст</p>
            <p className="text-muted-foreground mb-6">Нажмите на сердечко на карточке товара, чтобы добавить его сюда</p>
            <Link href="/products" className="bg-crimson-gradient text-white px-8 py-3 rounded-xl font-semibold hover:opacity-90 transition-opacity shadow-crimson inline-block">
              Перейти в каталог
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {products.map(product => (
              <ProductCard key={product.id} product={product} onCartAdd={() => setCartOpen(true)} />
            ))}
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
