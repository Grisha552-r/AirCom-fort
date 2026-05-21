'use client';
import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CartDrawer from '@/components/CartDrawer';
import HeroSection from '@/app/components/HeroSection';
import SaleSection from '@/app/components/SaleSection';
import FeaturedProducts from '@/app/components/FeaturedProducts';
import PopularProducts from '@/app/components/PopularProducts';
import ReviewsSection from '@/app/components/ReviewsSection';
import SeoSection from '@/app/components/SeoSection';

export default function HomePage() {
  const [cartOpen, setCartOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <Header onCartOpen={() => setCartOpen(true)} />
      <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} />

      <main>
        <HeroSection />
        <SaleSection onCartOpen={() => setCartOpen(true)} />
        <FeaturedProducts onCartOpen={() => setCartOpen(true)} />
<PopularProducts onCartOpen={() => setCartOpen(true)} />
        <ReviewsSection />
        <SeoSection />
      </main>

      <Footer />
    </div>
  );
}