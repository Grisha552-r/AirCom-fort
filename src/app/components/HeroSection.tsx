'use client';
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';
import SelectionModal from '@/components/SelectionModal';

const HERO_CATS = [
  { id: 'split-electrolux', name: 'Electrolux', image: 'https://climate-montazh.by/wp-content/uploads/2023/03/88183.970.png', alt: 'Кондиционер Electrolux' },
  { id: 'split-ballu',      name: 'Ballu',      image: 'https://climate-montazh.by/wp-content/uploads/2024/01/konditsioner-ballu-bsagi-igreen-pro-dc-inverter.500x500.jpeg', alt: 'Кондиционер Ballu' },
  { id: 'split-haier',      name: 'Haier',      image: 'https://climate-montazh.by/wp-content/uploads/2022/07/klimat-montazh-kondi-57.webp', alt: 'Кондиционер Haier' },
  { id: 'split-mitsudai',   name: 'Mitsudai',   image: 'https://interpride.by/wp-content/uploads/2023/04/inv2-600x600-2-1.png', alt: 'Кондиционер Mitsudai' },
];

export default function HeroSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up');
            entry.target.classList.remove('opacity-0');
          }
        });
      },
      { threshold: 0.1 }
    );
    const elements = sectionRef?.current?.querySelectorAll('.reveal-on-scroll');
    elements?.forEach((el) => observer?.observe(el));
    return () => observer?.disconnect();
  }, []);

  return (
    <>
      <section ref={sectionRef} className="bg-white pt-6 pb-10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
            {/* Left: Text */}
            <div className="reveal-on-scroll opacity-100">
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-4">
                Установка и продажа
                <span className="text-crimson-gradient block">кондиционеров</span>
                в Гомеле и области
              </h1>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-6 max-w-md">
                Electrolux, Ballu, Haier, LG, Panasonic, Mitsudai — настенные сплит-системы и мобильные кондиционеры с установкой в Гомеле. Официальная гарантия производителя.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 mb-6">
                <button
                  onClick={() => setModalOpen(true)}
                  className="bg-crimson-gradient text-white px-8 py-3.5 rounded-xl font-semibold text-base hover:opacity-90 transition-all duration-200 shadow-crimson flex items-center justify-center gap-2 group"
                >
                  <Icon name="MagnifyingGlassIcon" size={18} />
                  Подобрать кондиционер
                  <Icon name="ArrowRightIcon" size={16} className="group-hover:translate-x-1 transition-transform" />
                </button>
                <Link
                  href="/products"
                  className="border border-border text-foreground px-8 py-3.5 rounded-xl font-semibold text-base hover:border-crimson-300 hover:bg-crimson-50 transition-all duration-200 flex items-center justify-center gap-2"
                >
                  <Icon name="Squares2X2Icon" size={18} />
                  Весь каталог
                </Link>
              </div>

              {/* Promo card */}
              <Link href="/products/p-md-sne09ai" className="group relative flex items-center gap-4 bg-white border border-crimson-200 rounded-2xl p-3 max-w-md shadow-sm hover:shadow-md hover:border-crimson-400 transition-all duration-300">
                {/* АКЦИЯ badge */}
                <div className="absolute -top-3 left-4 flex items-center gap-1.5 bg-crimson-700 text-white text-xs font-bold px-3 py-1 rounded-full shadow-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-white/80 animate-pulse" />
                  АКЦИЯ
                </div>

                {/* Image */}
                <div className="w-[88px] h-[88px] shrink-0 rounded-xl overflow-hidden bg-gray-50 border border-gray-100 flex items-center justify-center">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="https://interpride.by/wp-content/uploads/2023/03/classic-split-system-sento-2022-01.png"
                    alt="Mitsudai MD-SNE09AI"
                    className="w-full h-full object-contain p-1.5"
                  />
                </div>

                {/* Info */}
                <div className="flex-1 min-w-0">
                  <p className="text-xs text-muted-foreground truncate mb-1">Сплит-система Mitsudai MD-SNE09AI</p>
                  <div className="flex items-center gap-1.5 mb-2">
                    <span className="text-xs text-gray-400 line-through">929 р.</span>
                    <span className="text-[11px] font-bold bg-crimson-100 text-crimson-700 px-1.5 py-0.5 rounded-md">−4%</span>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    <span className="font-medium text-foreground">890 р.</span>
                    <span className="mx-1 text-gray-300">+</span>
                    монтаж 400 р.
                  </p>
                  <div className="flex items-baseline gap-1 mt-0.5">
                    <span className="text-[11px] text-muted-foreground">Итого:</span>
                    <span className="text-xl font-bold text-crimson-700 leading-none">1 290 р.</span>
                  </div>
                </div>

                {/* Arrow */}
                <div className="shrink-0 w-8 h-8 rounded-xl bg-crimson-50 flex items-center justify-center text-crimson-600 group-hover:bg-crimson-700 group-hover:text-white transition-colors">
                  <Icon name="ArrowRightIcon" size={16} />
                </div>
              </Link>
            </div>

            {/* Right: Brand grid */}
            <div className="reveal-on-scroll opacity-100 grid grid-cols-2 grid-rows-2 gap-3 h-[260px] sm:h-[360px] md:h-[480px]">
              <div className="row-span-2 relative rounded-2xl overflow-hidden group cursor-pointer shadow-card">
                <AppImage src={HERO_CATS[0].image} alt={HERO_CATS[0].alt} fill className="object-cover group-hover:scale-105 transition-transform duration-700" priority sizes="(max-width: 1024px) 100vw, 50vw" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                <Link href={`/products/${HERO_CATS[0].id}`} className="absolute inset-0 flex flex-col justify-end p-4">
                  <span className="text-white font-bold text-lg leading-tight">{HERO_CATS[0].name}</span>
                  <span className="text-white/70 text-xs mt-0.5">Смотреть →</span>
                </Link>
              </div>

              <div className="relative rounded-2xl overflow-hidden group cursor-pointer shadow-card">
                <AppImage src={HERO_CATS[1].image} alt={HERO_CATS[1].alt} fill className="object-cover group-hover:scale-105 transition-transform duration-700" sizes="(max-width: 1024px) 50vw, 25vw" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                <Link href={`/products/${HERO_CATS[1].id}`} className="absolute inset-0 flex flex-col justify-end p-3">
                  <span className="text-white font-bold text-sm">{HERO_CATS[1].name}</span>
                </Link>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {HERO_CATS.slice(2).map((cat) => (
                  <div key={cat.id} className="relative rounded-2xl overflow-hidden group cursor-pointer shadow-card">
                    <AppImage src={cat.image} alt={cat.alt} fill className="object-cover group-hover:scale-105 transition-transform duration-700" sizes="(max-width: 1024px) 25vw, 12vw" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                    <Link href={`/products/${cat.id}`} className="absolute inset-0 flex flex-col justify-end p-2">
                      <span className="text-white font-semibold text-xs leading-tight">{cat.name}</span>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <SelectionModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
