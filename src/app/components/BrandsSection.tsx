import React from 'react';
import Link from 'next/link';

const BRANDS = [
  {
    name: 'Electrolux',
    slug: 'split-electrolux',
    desc: 'Европейское качество',
    color: '#003DA5',
    letter: 'E',
  },
  {
    name: 'Ballu',
    slug: 'split-ballu',
    desc: 'Надёжность и доступность',
    color: '#E31837',
    letter: 'B',
  },
  {
    name: 'Haier',
    slug: 'split-haier',
    desc: 'Мировой лидер',
    color: '#005BAC',
    letter: 'H',
  },
  {
    name: 'LG',
    slug: 'split-lg',
    desc: 'Инновации и Wi-Fi',
    color: '#A50034',
    letter: 'LG',
  },
  {
    name: 'Mitsudai',
    slug: 'split-mitsudai',
    desc: 'Лучшее соотношение цены',
    color: '#1A1A2E',
    letter: 'M',
  },
  {
    name: 'King Home',
    slug: 'split-kinghome',
    desc: 'А++ класс, 74 мес. гарантия',
    color: '#2C3E6B',
    letter: 'K',
  },
];

export default function BrandsSection() {
  return (
    <section className="py-14 bg-zinc-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
          <div>
            <p className="text-xs font-bold text-crimson-600 uppercase tracking-widest mb-2">Официальный дилер</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Бренды в наличии</h2>
          </div>
          <Link href="/products" className="text-sm font-semibold text-crimson-700 hover:text-crimson-900 flex items-center gap-1.5 shrink-0 transition-colors">
            Весь каталог
            <svg viewBox="0 0 16 16" fill="none" className="w-4 h-4" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 8h10M9 4l4 4-4 4" />
            </svg>
          </Link>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {BRANDS.map(brand => (
            <Link
              key={brand.slug}
              href={`/products/${brand.slug}`}
              className="group bg-white rounded-2xl border border-border hover:border-zinc-300 hover:shadow-md p-5 flex flex-col items-center gap-3 transition-all duration-300 cursor-pointer"
            >
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center text-white font-black text-xl transition-transform duration-300 group-hover:scale-110 shadow-sm"
                style={{ backgroundColor: brand.color }}
              >
                {brand.letter}
              </div>
              <div className="text-center">
                <p className="font-bold text-foreground text-sm leading-tight">{brand.name}</p>
                <p className="text-xs text-muted-foreground mt-0.5 leading-tight">{brand.desc}</p>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-8 bg-white rounded-2xl border border-border p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-crimson-100 flex items-center justify-center shrink-0">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-5 h-5 text-crimson-700">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <p className="font-semibold text-foreground text-sm">Официальная гарантия производителя</p>
              <p className="text-xs text-muted-foreground">На все товары — гарантийный талон и сервисное обслуживание</p>
            </div>
          </div>
          <Link
            href="/konditsionery-gomel"
            className="shrink-0 text-sm font-semibold text-crimson-700 border border-crimson-200 hover:border-crimson-500 hover:bg-crimson-50 px-4 py-2 rounded-xl transition-all duration-200"
          >
            Подробнее о нас
          </Link>
        </div>
      </div>
    </section>
  );
}
