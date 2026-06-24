'use client';
import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CartDrawer from '@/components/CartDrawer';
import HeroSection from '@/app/components/HeroSection';
import PopularProducts from '@/app/components/PopularProducts';
import ReviewsSection from '@/app/components/ReviewsSection';
import HomeFaq from '@/app/components/HomeFaq';
import SeoSection from '@/app/components/SeoSection';
import type { Product } from '@/lib/store';

export default function HomePageClient({ initialProducts }: { initialProducts: Product[] }) {
  const [cartOpen, setCartOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <Header onCartOpen={() => setCartOpen(true)} />
      <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} />

      <main>
        <HeroSection />

        <PopularProducts initialProducts={initialProducts} onCartOpen={() => setCartOpen(true)} />
        <ReviewsSection />
        <HomeFaq />
        <SeoSection />
      </main>

      <Footer />
    </div>
  );
}
