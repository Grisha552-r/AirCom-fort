'use client';
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';
import SelectionModal from '@/components/SelectionModal';

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

            {/* Right: Promo card */}
            <Link
              href="/products/p-md-sne09ai"
              className="reveal-on-scroll opacity-100 relative rounded-3xl overflow-hidden flex flex-col h-[420px] sm:h-[480px] md:h-[520px] shadow-xl cursor-pointer group"
              style={{ background: 'linear-gradient(160deg, #f7e8d6 0%, #edcfad 100%)' }}
            >
              {/* Top badges */}
              <div className="flex items-start justify-between p-4">
                <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-xl px-2.5 py-1.5 shadow-sm">
                  <div className="w-6 h-6 rounded-lg bg-crimson-100 flex items-center justify-center">
                    <Icon name="PowerIcon" size={13} className="text-crimson-700" />
                  </div>
                  <div>
                    <p className="text-[9px] text-muted-foreground leading-none uppercase tracking-wide">Тип</p>
                    <p className="text-xs font-bold text-foreground leading-tight">On / Off</p>
                  </div>
                </div>
                <div className="flex items-center gap-1.5 bg-crimson-700 text-white text-[10px] font-bold px-3 py-1.5 rounded-full shadow-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                  СЕЗОН · 2026
                </div>
              </div>

              {/* Area label */}
              <div className="absolute top-12 right-4 text-right pointer-events-none">
                <p className="text-[9px] text-foreground/40 uppercase tracking-widest leading-none mb-1">Для комнаты до</p>
                <p className="text-[80px] sm:text-[100px] font-black text-foreground/10 leading-none">27</p>
                <p className="text-base font-bold text-foreground/20 -mt-2">м²</p>
              </div>

              {/* Product image */}
              <div className="flex-1 flex items-center justify-center px-6 -mt-4">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://interpride.by/wp-content/uploads/2023/03/classic-split-system-sento-2022-01.png"
                  alt="Сплит-система Mitsudai"
                  className="w-full max-w-[280px] object-contain drop-shadow-xl group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Bottom info */}
              <div className="p-3 space-y-2">
                {/* АКЦИЯ badge + headline */}
                <div>
                  <div className="inline-flex items-center gap-1.5 border border-foreground/20 rounded-full px-2.5 py-0.5 mb-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-crimson-600" />
                    <span className="text-[9px] font-semibold tracking-widest text-foreground/50 uppercase">Акция · Всё включено</span>
                  </div>
                  <p className="text-sm font-bold text-foreground leading-snug">
                    Кондиционер + монтаж = <span className="text-crimson-700">1 290 BYN</span>
                  </p>
                </div>

                {/* Dark price block */}
                <div className="bg-zinc-900 rounded-2xl px-4 py-2.5">
                  <p className="text-[9px] text-zinc-400 uppercase tracking-widest mb-0.5">Цена под ключ</p>
                  <p className="text-3xl font-black text-white leading-none">
                    1 290 <span className="text-base font-semibold text-zinc-400">BYN</span>
                  </p>
                </div>

                {/* Features */}
                <div className="grid grid-cols-3 gap-1.5">
                  {[
                    { icon: 'ClockIcon', color: 'text-crimson-600', bg: 'bg-crimson-50', title: 'Монтаж', sub: 'за 1 день' },
                    { icon: 'ShieldCheckIcon', color: 'text-emerald-600', bg: 'bg-emerald-50', title: 'Гарантия', sub: '2 года' },
                    { icon: 'WrenchScrewdriverIcon', color: 'text-amber-600', bg: 'bg-amber-50', title: 'Гарантия', sub: '1 год' },
                  ].map((f) => (
                    <div key={f.sub} className="bg-white/80 backdrop-blur-sm rounded-xl p-2 text-center">
                      <div className={`w-6 h-6 rounded-lg ${f.bg} flex items-center justify-center mx-auto mb-1`}>
                        <Icon name={f.icon as Parameters<typeof Icon>[0]['name']} size={13} className={f.color} />
                      </div>
                      <p className="text-[9px] font-semibold text-foreground leading-tight">{f.title}</p>
                      <p className="text-[9px] text-muted-foreground leading-tight">{f.sub}</p>
                    </div>
                  ))}
                </div>

                {/* Phone row */}
                <div className="bg-white/80 backdrop-blur-sm rounded-xl px-3 py-2 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-lg bg-crimson-700 flex items-center justify-center shrink-0">
                      <Icon name="PhoneIcon" size={13} className="text-white" />
                    </div>
                    <div>
                      <p className="text-[8px] text-muted-foreground uppercase tracking-wide leading-none">Звоните</p>
                      <p className="text-xs font-bold text-foreground">+375 29 105-06-94</p>
                    </div>
                  </div>
                  <span className="text-xs font-black text-crimson-700 tracking-tight">AIRCOMFORT</span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <SelectionModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
