'use client';
import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CartDrawer from '@/components/CartDrawer';
import Icon from '@/components/ui/AppIcon';
import Link from 'next/link';

const STATS = [
  { value: '500+', label: 'товаров в наличии' },
  { value: '6', label: 'брендов-партнёров' },
  { value: '1 год', label: 'гарантия на монтаж' },
  { value: '9:00–18:00', label: 'пн–сб, без выходных' },
];

const BRANDS = ['Electrolux', 'Ballu', 'Haier', 'LG', 'Panasonic', 'Mitsudai'];

const VALUES = [
  {
    icon: 'ShieldCheckIcon',
    title: 'Официальная гарантия',
    desc: 'Всё оборудование поставляется с гарантией производителя. Сервисные центры каждого бренда работают на территории Беларуси.',
  },
  {
    icon: 'CurrencyDollarIcon',
    title: 'Честные цены',
    desc: 'Работаем без накруток и скрытых комиссий. Розничные цены в белорусских рублях по актуальному курсу.',
  },
  {
    icon: 'WrenchScrewdriverIcon',
    title: 'Монтаж и обслуживание',
    desc: 'Выполняем установку, техническое обслуживание и демонтаж кондиционеров. Фиксированные цены, гарантия на работы 1 год.',
  },
  {
    icon: 'PhoneIcon',
    title: 'Живая поддержка',
    desc: 'Консультируем по телефону, Telegram и Viber. Помогаем подобрать оборудование под площадь и бюджет.',
  },
];

export default function AboutPage() {
  const [cartOpen, setCartOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <Header onCartOpen={() => setCartOpen(true)} />
      <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} />

      <main>
        {/* Hero */}
        <div className="bg-crimson-gradient text-white">
          <div className="max-w-7xl mx-auto px-4 py-14">
            <nav className="flex items-center gap-2 text-sm text-crimson-200 mb-6">
              <Link href="/" className="hover:text-white transition-colors">Главная</Link>
              <Icon name="ChevronRightIcon" size={14} />
              <span className="text-white font-medium">О нас</span>
            </nav>
            <div className="max-w-2xl">
              <h1 className="text-4xl font-bold mb-4 leading-tight">AirComfort —<br />кондиционеры в Гомеле</h1>
              <p className="text-crimson-100 text-lg leading-relaxed">
                Продаём и устанавливаем кондиционеры ведущих мировых брендов в Беларуси. Работаем напрямую с поставщиками — без посредников и переплат.
              </p>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="bg-white border-b border-border">
          <div className="max-w-7xl mx-auto px-4 py-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {STATS.map(s => (
                <div key={s.label} className="text-center">
                  <p className="text-3xl font-bold text-crimson-700 mb-1">{s.value}</p>
                  <p className="text-sm text-muted-foreground">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 py-14 space-y-16">

          {/* About text */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-5">Кто мы</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  AirComfort — продажа кондиционеров в Гомеле. Мы занимаемся продажей настенных сплит-систем и мобильных кондиционеров от проверенных производителей: <span className="text-foreground font-medium">Electrolux, Ballu, Haier, LG и Mitsudai</span>.
                </p>
                <p>
                  Наша цель — дать покупателю возможность купить качественный кондиционер по честной цене, без лишних наценок. Мы работаем напрямую с официальными дистрибьюторами, поэтому всё оборудование в наличии поставляется с официальной гарантией производителя.
                </p>
                <p>
                  Помимо продажи, мы оказываем полный спектр услуг по климатическому оборудованию: профессиональный монтаж сплит-систем, техническое обслуживание и чистка, а также демонтаж старого оборудования при замене.
                </p>
              </div>
            </div>
            <div className="bg-zinc-50 rounded-3xl p-8 border border-border space-y-5">
              <h3 className="font-bold text-foreground text-lg">Наши бренды</h3>
              <div className="grid grid-cols-2 gap-3">
                {BRANDS.map(brand => (
                  <Link
                    key={brand}
                    href={`/products/split-${brand.toLowerCase()}`}
                    className="flex items-center gap-3 bg-white rounded-xl px-4 py-3 border border-border hover:border-crimson-300 hover:bg-crimson-50 transition-all group"
                  >
                    <Icon name="CheckCircleIcon" size={16} className="text-crimson-600 shrink-0" />
                    <span className="text-sm font-semibold text-foreground group-hover:text-crimson-700">{brand}</span>
                  </Link>
                ))}
              </div>
              <Link
                href="/products"
                className="flex items-center justify-center gap-2 bg-crimson-gradient text-white py-3 rounded-xl font-semibold text-sm hover:opacity-90 transition-opacity shadow-crimson"
              >
                Смотреть весь каталог
                <Icon name="ArrowRightIcon" size={16} />
              </Link>
            </div>
          </div>

          {/* Values */}
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-8 text-center">Наши принципы</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {VALUES.map(v => (
                <div key={v.title} className="bg-white rounded-2xl border border-border p-6 hover:border-crimson-200 hover:shadow-md transition-all">
                  <div className="w-12 h-12 rounded-2xl bg-crimson-50 flex items-center justify-center mb-4">
                    <Icon name={v.icon} size={24} className="text-crimson-700" />
                  </div>
                  <h3 className="font-bold text-foreground mb-2">{v.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="bg-crimson-gradient rounded-3xl p-8 md:p-12 text-center text-white">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">Остались вопросы?</h2>
            <p className="text-crimson-100 mb-8 max-w-xl mx-auto">Позвоните нам или напишите в мессенджер — поможем подобрать подходящий кондиционер и рассчитаем стоимость установки.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+375291050694"
                onClick={e => { e.preventDefault(); window.open('tel:+375291050694'); }}
                className="flex items-center justify-center gap-2 bg-white text-crimson-700 px-8 py-3.5 rounded-xl font-bold hover:bg-crimson-50 transition-colors"
              >
                <Icon name="PhoneIcon" size={18} />
                +375 29 105-06-94
              </a>
              <a
                href="https://t.me/AirComforto"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-white/20 text-white border border-white/40 px-8 py-3.5 rounded-xl font-bold hover:bg-white/30 transition-colors"
              >
                Написать в Telegram
              </a>
            </div>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
