'use client';
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Icon from '@/components/ui/AppIcon';
import SelectionModal from '@/components/SelectionModal';

export default function HeroSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const router = useRouter();

  function handleOrder(e: React.MouseEvent) {
    e.preventDefault();
    e.stopPropagation();
    const items = [
      { productId: 'p-md-sne09ai', productName: 'Сплит-система Mitsudai MD-SNE09AI', price: 890, quantity: 1, image: 'https://interpride.by/wp-content/uploads/2023/03/classic-split-system-sento-2022-01.png' },
      { productId: 'service-montage', productName: 'Монтаж кондиционера (стандарт, до 3 м трассы)', price: 400, quantity: 1, image: '' },
    ];
    localStorage.setItem('sga_cart', JSON.stringify(items));
    window.dispatchEvent(new Event('cart-updated'));
    router.push('/checkout');
  }

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

            </div>

            {/* Right: Promo card */}
            <div
              className="reveal-on-scroll opacity-100 rounded-3xl overflow-hidden flex flex-col h-[420px] sm:h-[480px] md:h-[520px] shadow-xl"
              style={{ background: 'linear-gradient(160deg, #fffaf6 0%, #faeedd 100%)' }}
            >
              {/* Top row: badges + area */}
              <div className="flex items-start justify-between px-4 pt-4 pb-1">
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-xl px-2.5 py-1.5 shadow-sm self-start">
                    <div className="w-6 h-6 rounded-lg bg-crimson-100 flex items-center justify-center">
                      <Icon name="PowerIcon" size={13} className="text-crimson-700" />
                    </div>
                    <div>
                      <p className="text-[9px] text-muted-foreground leading-none uppercase tracking-wide">Тип</p>
                      <p className="text-xs font-bold text-foreground leading-tight">On / Off</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5 bg-crimson-700 text-white text-[10px] font-bold px-3 py-1.5 rounded-full shadow-sm self-start">
                    <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                    СЕЗОН · 2026
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-[9px] text-foreground/40 uppercase tracking-widest leading-none">Для комнаты</p>
                  <p className="text-[64px] sm:text-[80px] font-black text-foreground/10 leading-none">27</p>
                  <p className="text-sm font-bold text-foreground/20 -mt-1">м²</p>
                </div>
              </div>

              {/* Model name — between badges and image */}
              <div className="px-4 pb-1">
                <p className="text-foreground/50 text-[11px] font-medium tracking-wide">Сплит-система</p>
                <p className="text-foreground font-bold text-base leading-tight">
                  Mitsudai <span className="text-crimson-700">MD-SNE09AI</span>
                </p>
              </div>

              {/* Product image */}
              <div className="flex-1 flex items-center justify-center px-4">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://interpride.by/wp-content/uploads/2023/03/classic-split-system-sento-2022-01.png"
                  alt="Сплит-система Mitsudai"
                  className="w-full max-w-[220px] sm:max-w-[260px] object-contain drop-shadow-xl"
                />
              </div>

              {/* Bottom info */}
              <div className="p-3 space-y-2">
                {/* АКЦИЯ + price text */}
                <div className="flex items-center justify-between">
                  <div className="inline-flex items-center gap-1.5 border border-foreground/20 rounded-full px-2.5 py-0.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-crimson-600" />
                    <span className="text-[9px] font-semibold tracking-widest text-foreground/50 uppercase">Акция · Всё включено</span>
                  </div>
                </div>

                {/* Dark price block + order button */}
                <div className="bg-zinc-900 rounded-2xl px-4 py-2.5 flex items-center justify-between gap-3">
                  <div>
                    <p className="text-[9px] text-zinc-400 uppercase tracking-widest mb-0.5">Цена под ключ</p>
                    <p className="text-2xl font-black text-white leading-none">
                      1 290 <span className="text-sm font-semibold text-zinc-400">BYN</span>
                    </p>
                  </div>
                  <button
                    onClick={handleOrder}
                    className="shrink-0 bg-crimson-700 hover:bg-crimson-800 active:scale-95 text-white text-xs font-bold px-4 py-2.5 rounded-xl transition-all duration-150 shadow-lg flex items-center gap-1.5"
                  >
                    Заказать
                    <Icon name="ArrowRightIcon" size={13} />
                  </button>
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

              </div>
            </div>
          </div>
        </div>
      </section>

      <SelectionModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
