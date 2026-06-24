'use client';
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Icon from '@/components/ui/AppIcon';
import SelectionModal from '@/components/SelectionModal';

export default function HeroSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [cardIndex, setCardIndex] = useState(0);
  const router = useRouter();

  function handleOrder(e: React.MouseEvent) {
    e.preventDefault();
    e.stopPropagation();
    const items = [
      { productId: 'p-md-sne09ai', productName: 'Сплит-система Mitsudai MD-SNE09AI', price: 890, quantity: 1, image: '/assets/images/products/mitsudai-sne09.png' },
      { productId: 'service-montage', productName: 'Монтаж кондиционера (стандарт, до 3 м трассы)', price: 400, quantity: 1, image: '' },
    ];
    localStorage.setItem('sga_cart', JSON.stringify(items));
    window.dispatchEvent(new Event('cart-updated'));
    router.push('/checkout');
  }

  function handleOrderKH(e: React.MouseEvent) {
    e.preventDefault();
    e.stopPropagation();
    const items = [
      { productId: 'p-kh-luna-09', productName: 'Кондиционер King Home Luna Matt 09 (9000 BTU)', price: 2100, quantity: 1, image: '/assets/images/products/kinghome-luna-09.jpg' },
      { productId: 'service-montage', productName: 'Монтаж кондиционера (стандарт, до 3 м трассы)', price: 190, quantity: 1, image: '' },
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
            <div className="reveal-on-scroll opacity-100 relative z-10">
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-4">
                Кондиционеры в Гомеле{' '}
                <span className="text-crimson-gradient block">с установкой под ключ</span>
              </h1>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-5 max-w-md">
                Electrolux, Ballu, Haier, LG, Mitsudai — 300+ моделей в наличии. Монтаж от 400 р., выезд в день заказа, гарантия 1 год.
              </p>

              {/* Trust counters */}
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center gap-1.5">
                  <span className="text-amber-400 text-lg">★</span>
                  <span className="font-bold text-foreground text-sm">4.9</span>
                  <span className="text-muted-foreground text-xs">/ 200+ отзывов</span>
                </div>
                <div className="w-px h-4 bg-border" />
                <div className="text-sm text-muted-foreground">
                  <span className="font-bold text-foreground">500+</span> установок в Гомеле
                </div>
                <div className="w-px h-4 bg-border" />
                <div className="text-sm text-muted-foreground">
                  Гарантия <span className="font-bold text-foreground">1 год</span>
                </div>
              </div>

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

            {/* Right: Promo card carousel */}
            <div className="reveal-on-scroll opacity-100 relative z-10">
              <div className="relative rounded-3xl overflow-hidden shadow-xl h-[480px] sm:h-[500px] md:h-[520px]">
                {/* Slider track */}
                <div
                  className="flex h-full transition-transform duration-500 ease-in-out"
                  style={{ transform: `translateX(-${cardIndex * 100}%)` }}
                >
                  {/* ── Card 0: Mitsudai ── */}
                  <div
                    className="w-full shrink-0 h-full flex flex-col"
                    style={{ background: 'linear-gradient(160deg, #ffffff 0%, #fff8f0 100%)' }}
                  >
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

                    <div className="px-4 pb-1">
                      <p className="text-foreground/50 text-[11px] font-medium tracking-wide">Сплит-система</p>
                      <p className="text-foreground font-bold text-base leading-tight">
                        Mitsudai <span className="text-crimson-700">MD-SNE09AI</span>
                      </p>
                    </div>

                    <Link href="/products/p-md-sne09ai" className="flex-1 min-h-0 flex items-center justify-center px-4 overflow-hidden">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src="/assets/images/products/mitsudai-sne09.png"
                        alt="Сплит-система Mitsudai"
                        width={1000}
                        height={368}
                        className="max-h-full w-auto max-w-[220px] sm:max-w-[260px] object-contain mix-blend-multiply"
                        fetchPriority="high"
                        loading="eager"
                      />
                    </Link>

                    <div className="p-3 space-y-2">
                      <div className="inline-flex items-center gap-1.5 border border-foreground/20 rounded-full px-2.5 py-0.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-crimson-600" />
                        <span className="text-[9px] font-semibold tracking-widest text-foreground/50 uppercase">Акция · Всё включено</span>
                      </div>
                      <div className="bg-zinc-900 rounded-2xl px-4 py-2.5 flex items-center justify-between gap-3">
                        <div>
                          <p className="text-[9px] text-zinc-400 uppercase tracking-widest mb-0.5">Цена под ключ</p>
                          <p className="text-2xl font-black text-white leading-none">
                            1 290 <span className="text-sm font-semibold text-zinc-400">BYN</span>
                          </p>
                          <p className="text-[9px] text-zinc-500 mt-0.5">890 + монтаж 400</p>
                          <p className="text-[9px] text-emerald-400 font-semibold mt-0.5">Экономия 39 р.</p>
                        </div>
                        <button
                          onClick={handleOrder}
                          className="shrink-0 bg-crimson-700 hover:bg-crimson-800 active:scale-95 text-white text-xs font-bold px-4 py-2.5 rounded-xl transition-all duration-150 shadow-lg flex items-center gap-1.5"
                        >
                          Заказать
                          <Icon name="ArrowRightIcon" size={13} />
                        </button>
                      </div>
                      <div className="grid grid-cols-3 gap-1.5">
                        {[
                          { icon: 'ClockIcon', color: 'text-crimson-600', bg: 'bg-crimson-50', title: 'Монтаж', sub: 'за 1 день' },
                          { icon: 'ShieldCheckIcon', color: 'text-emerald-600', bg: 'bg-emerald-50', title: 'Гарантия', sub: '2 года' },
                          { icon: 'WrenchScrewdriverIcon', color: 'text-amber-600', bg: 'bg-amber-50', title: 'Сервис', sub: '1 год' },
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

                  {/* ── Card 1: King Home ── */}
                  <div
                    className="w-full shrink-0 h-full flex flex-col"
                    style={{ background: 'linear-gradient(160deg, #ffffff 0%, #f0f3ff 100%)' }}
                  >
                    <div className="flex items-start justify-between px-4 pt-4 pb-1">
                      <div className="flex flex-col gap-2">
                        <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-xl px-2.5 py-1.5 shadow-sm self-start">
                          <div className="w-6 h-6 rounded-lg bg-indigo-100 flex items-center justify-center">
                            <Icon name="BoltIcon" size={13} className="text-indigo-600" />
                          </div>
                          <div>
                            <p className="text-[9px] text-muted-foreground leading-none uppercase tracking-wide">Тип</p>
                            <p className="text-xs font-bold text-foreground leading-tight">Inverter</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-1.5 bg-indigo-600 text-white text-[10px] font-bold px-3 py-1.5 rounded-full shadow-sm self-start">
                          <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                          СЕЗОН · 2026
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-[9px] text-foreground/40 uppercase tracking-widest leading-none">Для комнаты</p>
                        <p className="text-[64px] sm:text-[80px] font-black text-foreground/10 leading-none">25</p>
                        <p className="text-sm font-bold text-foreground/20 -mt-1">м²</p>
                      </div>
                    </div>

                    <div className="px-4 pb-1">
                      <p className="text-foreground/50 text-[11px] font-medium tracking-wide">Сплит-система</p>
                      <p className="text-foreground font-bold text-base leading-tight">
                        King Home <span className="text-indigo-600">Luna Matt</span>
                      </p>
                    </div>

                    <Link href="/products/p-kh-luna-09" className="flex-1 min-h-0 flex items-center justify-center px-2 overflow-hidden">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src="/assets/images/products/kinghome-luna-09.jpg"
                        alt="King Home Luna Matt"
                        loading="lazy"
                        width={950}
                        height={950}
                        className="max-h-full w-auto max-w-[280px] sm:max-w-[320px] object-contain mix-blend-multiply"
                        style={{ transform: 'scale(2.5)' }}
                      />
                    </Link>

                    <div className="p-3 space-y-2">
                      <div className="inline-flex items-center gap-1.5 border border-foreground/20 rounded-full px-2.5 py-0.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
                        <span className="text-[9px] font-semibold tracking-widest text-foreground/50 uppercase">Акция · Всё включено</span>
                      </div>
                      <div className="bg-zinc-900 rounded-2xl px-4 py-2.5 flex items-center justify-between gap-3">
                        <div>
                          <p className="text-[9px] text-zinc-400 uppercase tracking-widest mb-0.5">Цена под ключ</p>
                          <p className="text-2xl font-black text-white leading-none">
                            2 290 <span className="text-sm font-semibold text-zinc-400">BYN</span>
                          </p>
                          <p className="text-[9px] text-zinc-500 mt-0.5">2 100 + монтаж 190</p>
                          <p className="text-[9px] text-emerald-400 font-semibold mt-0.5">Экономия 210 р.</p>
                        </div>
                        <button
                          onClick={handleOrderKH}
                          className="shrink-0 bg-indigo-600 hover:bg-indigo-700 active:scale-95 text-white text-xs font-bold px-4 py-2.5 rounded-xl transition-all duration-150 shadow-lg flex items-center gap-1.5"
                        >
                          Заказать
                          <Icon name="ArrowRightIcon" size={13} />
                        </button>
                      </div>
                      <div className="grid grid-cols-3 gap-1.5">
                        {[
                          { icon: 'WifiIcon', color: 'text-indigo-600', bg: 'bg-indigo-50', title: 'Wi-Fi', sub: 'встроенный' },
                          { icon: 'SparklesIcon', color: 'text-sky-500', bg: 'bg-sky-50', title: 'Ионизация', sub: 'воздуха' },
                          { icon: 'CpuChipIcon', color: 'text-zinc-600', bg: 'bg-zinc-100', title: 'Gree', sub: 'компрессор' },
                        ].map((f) => (
                          <div key={f.title} className="bg-white/80 backdrop-blur-sm rounded-xl p-2 text-center">
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

                {/* Prev / Next arrows */}
                <button
                  onClick={() => setCardIndex(i => (i - 1 + 2) % 2)}
                  className="absolute left-2 top-1/2 -translate-y-1/2 z-10 w-8 h-8 rounded-full bg-white/70 backdrop-blur-sm shadow flex items-center justify-center hover:bg-white transition-colors"
                >
                  <Icon name="ChevronLeftIcon" size={16} className="text-foreground" />
                </button>
                <button
                  onClick={() => setCardIndex(i => (i + 1) % 2)}
                  className="absolute right-2 top-1/2 -translate-y-1/2 z-10 w-8 h-8 rounded-full bg-white/70 backdrop-blur-sm shadow flex items-center justify-center hover:bg-white transition-colors"
                >
                  <Icon name="ChevronRightIcon" size={16} className="text-foreground" />
                </button>
              </div>

              {/* Dots */}
              <div className="flex items-center justify-center gap-2 mt-3">
                {[0, 1].map(i => (
                  <button
                    key={i}
                    onClick={() => setCardIndex(i)}
                    className={`h-1.5 rounded-full transition-all duration-300 ${cardIndex === i ? 'bg-crimson-600 w-6' : 'bg-zinc-300 w-1.5'}`}
                  />
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
