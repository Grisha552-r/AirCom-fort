'use client';
import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CartDrawer from '@/components/CartDrawer';
import HeroSection from '@/app/components/HeroSection';
import StatsSection from '@/app/components/StatsSection';
import PopularProducts from '@/app/components/PopularProducts';
import ServicesSection from '@/app/components/ServicesSection';
import BrandsSection from '@/app/components/BrandsSection';
import ReviewsSection from '@/app/components/ReviewsSection';
import CtaSection from '@/app/components/CtaSection';
import SeoSection from '@/app/components/SeoSection';

const homeFaqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Сколько стоит установка кондиционера в Гомеле?',
      acceptedAnswer: { '@type': 'Answer', text: 'Установка кондиционера в Гомеле от 400 р. Цена под ключ — кондиционер + монтаж. Electrolux от 1 290 р., Ballu от 1 090 р. Выезд мастера бесплатно.' },
    },
    {
      '@type': 'Question',
      name: 'Как быстро установят кондиционер?',
      acceptedAnswer: { '@type': 'Answer', text: 'Выезд мастера и установка кондиционера — в день заказа или на следующий день. Монтаж занимает 2–4 часа.' },
    },
    {
      '@type': 'Question',
      name: 'Какая гарантия на кондиционер?',
      acceptedAnswer: { '@type': 'Answer', text: 'Гарантия на кондиционер — 1 год, на монтажные работы — 1 год. Обслуживание и ремонт по гарантии бесплатно.' },
    },
    {
      '@type': 'Question',
      name: 'Выезжаете ли в область?',
      acceptedAnswer: { '@type': 'Answer', text: 'Да, работаем в Гомеле и Гомельской области. Выезд в район — по договорённости. Звоните: +375 29 105-06-94.' },
    },
    {
      '@type': 'Question',
      name: 'Какие кондиционеры есть в наличии?',
      acceptedAnswer: { '@type': 'Answer', text: 'В наличии более 300 моделей: Electrolux, Ballu, Haier, LG, Mitsudai, King Home. Сплит-системы, мобильные, инверторные. Цены от 890 р.' },
    },
  ],
};

export default function HomePage() {
  const [cartOpen, setCartOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(homeFaqSchema) }} />
      <Header onCartOpen={() => setCartOpen(true)} />
      <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} />

      <main>
        {/* 1. Hero — главное УТП + продуктовый слайдер */}
        <HeroSection />

        {/* 2. Цифры доверия — сразу после hero */}
        <StatsSection />

        {/* 3. Каталог товаров с фильтрами */}
        <PopularProducts onCartOpen={() => setCartOpen(true)} />

        {/* 4. Наши услуги */}
        <ServicesSection />

        {/* 5. Бренды которые мы продаём */}
        <BrandsSection />

        {/* 6. Отзывы покупателей */}
        <ReviewsSection />

        {/* 7. CTA — форма обратного звонка */}
        <CtaSection />

        {/* 8. SEO / FAQ */}
        <SeoSection />
      </main>

      <Footer />
    </div>
  );
}
