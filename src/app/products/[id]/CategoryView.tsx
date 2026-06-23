'use client';
import React, { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CartDrawer from '@/components/CartDrawer';
import ProductCard from '@/components/ProductCard';
import Icon from '@/components/ui/AppIcon';
import Link from 'next/link';
import type { Product } from '@/lib/store';

const BTU_TO_AREA: Record<string, string> = {
  '5 000': '15', '6 000': '18', '7 000': '20', '7 500': '22',
  '8 000': '22', '9 000': '25', '10 000': '28', '11 000': '30',
  '12 000': '35', '13 000': '38', '14 000': '40', '16 000': '45',
  '18 000': '50', '19 100': '55', '21 000': '60', '22 000': '62',
  '24 000': '70', '26 000': '75', '27 000': '80', '28 000': '82',
  '30 000': '90', '32 000': '95', '36 000': '100', '42 000': '120',
  '48 000': '140', '55 000': '160', '60 000': '180',
};

const BTU_OPTIONS = [
  { id: '7 000',  label: '7 000 BTU — до 20 м²' },
  { id: '9 000',  label: '9 000 BTU — до 25 м²' },
  { id: '12 000', label: '12 000 BTU — до 35 м²' },
  { id: '18 000', label: '18 000 BTU — до 50 м²' },
  { id: '24 000', label: '24 000 BTU — до 70 м²' },
  { id: '36 000', label: '36 000 BTU' },
];

const CAT_BRANDS = ['Electrolux', 'Ballu', 'Haier', 'LG', 'Mitsudai', 'King Home', 'Vicool'];

function getBtuLabel(p: Product): string {
  return (p.characteristics?.['Базовая мощность кондиционера (охлаждение),BTU'] || '').trim();
}

function FilterSection({
  title, activeCount, defaultOpen = false, children,
}: { title: string; activeCount?: number; defaultOpen?: boolean; children: React.ReactNode }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="border-b border-border pb-4 mb-4 last:border-0 last:pb-0 last:mb-0">
      <button className="flex items-center justify-between w-full mb-3 text-left" onClick={() => setOpen(o => !o)}>
        <span className="font-semibold text-sm text-foreground flex items-center gap-2">
          {title}
          {activeCount ? (
            <span className="bg-crimson-700 text-white text-[10px] font-bold rounded-full min-w-[18px] h-[18px] px-1 flex items-center justify-center">{activeCount}</span>
          ) : null}
        </span>
        <Icon name={open ? 'ChevronUpIcon' : 'ChevronDownIcon'} size={14} className="text-muted-foreground shrink-0" />
      </button>
      {open && <div className="space-y-2">{children}</div>}
    </div>
  );
}

function Checkbox({ label, checked, onChange }: { label: string; checked: boolean; onChange: () => void }) {
  return (
    <label className="flex items-center gap-2.5 cursor-pointer group py-0.5 select-none" onClick={onChange}>
      <div className={`w-[18px] h-[18px] rounded-[4px] border-2 flex items-center justify-center shrink-0 transition-all ${checked ? 'bg-crimson-700 border-crimson-700' : 'border-border group-hover:border-crimson-400 bg-white'}`}>
        {checked && (
          <svg viewBox="0 0 10 10" fill="none" className="w-2.5 h-2.5">
            <path d="M1.5 5l2.5 2.5 5-5" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        )}
      </div>
      <span className={`text-sm leading-tight transition-colors ${checked ? 'text-crimson-700 font-medium' : 'text-foreground group-hover:text-crimson-700'}`}>{label}</span>
    </label>
  );
}

function RadioOption({ label, checked, onChange }: { label: string; checked: boolean; onChange: () => void }) {
  return (
    <label className="flex items-center gap-2.5 cursor-pointer group py-0.5 select-none" onClick={onChange}>
      <div className={`w-[18px] h-[18px] rounded-full border-2 flex items-center justify-center shrink-0 transition-all ${checked ? 'border-crimson-700 bg-crimson-700' : 'border-border group-hover:border-crimson-400 bg-white'}`}>
        {checked && <div className="w-2 h-2 rounded-full bg-white" />}
      </div>
      <span className={`text-sm leading-tight transition-colors ${checked ? 'text-crimson-700 font-medium' : 'text-foreground group-hover:text-crimson-700'}`}>{label}</span>
    </label>
  );
}

export interface CategoryMeta {
  label: string;
  brand?: string;
  categoryIds?: string[];
  seoText?: { h2: string; paragraphs: string[] };
}

interface CategoryViewProps {
  slug: string;
  meta: CategoryMeta;
  initialProducts?: Product[];
}

export default function CategoryView({ slug, meta, initialProducts }: CategoryViewProps) {
  const hasServerData = initialProducts !== undefined;
  const [allProducts, setAllProducts] = useState<Product[]>(initialProducts ?? []);
  const [loading, setLoading] = useState(!hasServerData);
  const [cartOpen, setCartOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const [selectedBrands, setSelectedBrands] = useState<Set<string>>(new Set());
  const [selectedBtus, setSelectedBtus] = useState<Set<string>>(new Set());
  const [inverterFilter, setInverterFilter] = useState<'all' | 'yes' | 'no'>('all');
  const [priceMin, setPriceMin] = useState('');
  const [priceMax, setPriceMax] = useState('');
  const [sortBy, setSortBy] = useState('default');

  const showBrands = slug === 'split-systems';

  useEffect(() => {
    if (hasServerData) return;
    fetch('/api/products')
      .then(r => r.json())
      .then((all: Product[]) => {
        let filtered: Product[] = all;
        if (meta.brand) filtered = all.filter(p => p.brand === meta.brand);
        else if (meta.categoryIds) filtered = all.filter(p => meta.categoryIds!.includes(p.categoryId));
        setAllProducts(filtered);
        setLoading(false);
      });
  }, [slug, hasServerData, meta.brand, meta.categoryIds]);

  const toggleBrand = (id: string) => setSelectedBrands(prev => { const n = new Set(prev); n.has(id) ? n.delete(id) : n.add(id); return n; });
  const toggleBtu = (id: string) => setSelectedBtus(prev => { const n = new Set(prev); n.has(id) ? n.delete(id) : n.add(id); return n; });

  const products = React.useMemo(() => {
    let list = [...allProducts];
    if (selectedBrands.size > 0) list = list.filter(p => selectedBrands.has(p.brand));
    if (selectedBtus.size > 0) list = list.filter(p => selectedBtus.has(getBtuLabel(p).replace(/\s/g, ' ').trim()));
    if (inverterFilter === 'yes') {
      list = list.filter(p => {
        const tech = p.characteristics?.['Инверторная технология'];
        const ctrl = p.characteristics?.['Тип управления'];
        return tech === 'Да' || ctrl === 'Инвертор';
      });
    } else if (inverterFilter === 'no') {
      list = list.filter(p => {
        const tech = p.characteristics?.['Инверторная технология'];
        const ctrl = p.characteristics?.['Тип управления'];
        return tech === 'Нет' || ctrl === 'On/Off';
      });
    }
    if (priceMin) list = list.filter(p => p.price >= Number(priceMin));
    if (priceMax) list = list.filter(p => p.price <= Number(priceMax));
    if (sortBy === 'price-asc') list.sort((a, b) => a.price - b.price);
    else if (sortBy === 'price-desc') list.sort((a, b) => b.price - a.price);
    else if (sortBy === 'rating') list.sort((a, b) => b.rating - a.rating);
    return list;
  }, [allProducts, selectedBrands, selectedBtus, inverterFilter, priceMin, priceMax, sortBy]);

  const activeCount = selectedBrands.size + selectedBtus.size + (inverterFilter !== 'all' ? 1 : 0) + (priceMin ? 1 : 0) + (priceMax ? 1 : 0);

  const resetAll = () => {
    setSelectedBrands(new Set()); setSelectedBtus(new Set());
    setInverterFilter('all'); setPriceMin(''); setPriceMax(''); setSortBy('default');
  };

  const SidebarFilters = (
    <div>
      {showBrands && (
        <FilterSection title="Бренд" activeCount={selectedBrands.size}>
          {CAT_BRANDS.map(b => <Checkbox key={b} label={b} checked={selectedBrands.has(b)} onChange={() => toggleBrand(b)} />)}
        </FilterSection>
      )}
      <FilterSection title="Мощность (BTU)" activeCount={selectedBtus.size}>
        {BTU_OPTIONS.map(o => <Checkbox key={o.id} label={o.label} checked={selectedBtus.has(o.id)} onChange={() => toggleBtu(o.id)} />)}
      </FilterSection>
      <FilterSection title="Технология" activeCount={inverterFilter !== 'all' ? 1 : 0}>
        {(['all', 'yes', 'no'] as const).map(v => (
          <RadioOption key={v} label={v === 'all' ? 'Все' : v === 'yes' ? 'Инверторный' : 'Не инверторный (On/Off)'} checked={inverterFilter === v} onChange={() => setInverterFilter(v)} />
        ))}
      </FilterSection>
      <FilterSection title="Цена (BYN)" activeCount={priceMin || priceMax ? 1 : 0}>
        <div className="flex gap-2">
          <input type="number" placeholder="От" value={priceMin} onChange={e => setPriceMin(e.target.value)}
            className="w-full border border-border rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-crimson-400 focus:ring-1 focus:ring-crimson-100" />
          <input type="number" placeholder="До" value={priceMax} onChange={e => setPriceMax(e.target.value)}
            className="w-full border border-border rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-crimson-400 focus:ring-1 focus:ring-crimson-100" />
        </div>
      </FilterSection>
      {activeCount > 0 && (
        <button onClick={resetAll} className="w-full mt-3 text-sm text-crimson-600 hover:text-crimson-700 font-medium py-2.5 border border-crimson-200 rounded-lg hover:bg-crimson-50 transition-colors">
          Сбросить все фильтры ({activeCount})
        </button>
      )}
    </div>
  );

  return (
    <div className="min-h-screen bg-background">
      <Header onCartOpen={() => setCartOpen(true)} />
      <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} />
      <main className="max-w-7xl mx-auto px-4 py-6">
        <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-5">
          <Link href="/" className="hover:text-crimson-700 transition-colors">Главная</Link>
          <Icon name="ChevronRightIcon" size={14} />
          <Link href="/products" className="hover:text-crimson-700 transition-colors">Каталог</Link>
          <Icon name="ChevronRightIcon" size={14} />
          <span className="text-foreground font-medium">{meta.label}</span>
        </nav>

        <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-5">{meta.label} в Гомеле</h1>

        <div className="flex gap-6 items-start">
          {/* Desktop sidebar */}
          <aside className="hidden lg:block w-60 shrink-0">
            <div className="bg-white rounded-2xl border border-border p-5 sticky top-24 max-h-[calc(100vh-7rem)] overflow-y-auto">
              <div className="flex items-center justify-between mb-4">
                <span className="font-bold text-base text-foreground">Фильтры</span>
                {activeCount > 0 && <button onClick={resetAll} className="text-xs text-crimson-600 font-medium">Сбросить ({activeCount})</button>}
              </div>
              {SidebarFilters}
            </div>
          </aside>

          {/* Main */}
          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between gap-3 mb-4 flex-wrap">
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setSidebarOpen(true)}
                  className={`lg:hidden flex items-center gap-2 border rounded-xl px-4 py-2.5 text-sm font-medium transition-colors ${activeCount > 0 ? 'border-crimson-500 text-crimson-700 bg-crimson-50' : 'border-border hover:border-crimson-400'}`}
                >
                  <Icon name="AdjustmentsHorizontalIcon" size={16} />
                  Фильтры{activeCount > 0 ? ` (${activeCount})` : ''}
                </button>
                <span className="text-sm text-muted-foreground">{loading ? 'Загрузка...' : `${products.length} товаров`}</span>
              </div>
              <select value={sortBy} onChange={e => setSortBy(e.target.value)}
                className="border border-border rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-crimson-400 bg-white">
                <option value="default">По умолчанию</option>
                <option value="price-asc">Цена: по возрастанию</option>
                <option value="price-desc">Цена: по убыванию</option>
                <option value="rating">По рейтингу</option>
              </select>
            </div>

            {loading ? (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
                {[...Array(8)].map((_, i) => <div key={i} className="h-72 bg-zinc-100 rounded-2xl animate-pulse" />)}
              </div>
            ) : products.length === 0 ? (
              <div className="text-center py-16 bg-white rounded-2xl border border-border">
                <p className="text-lg font-semibold text-foreground mb-2">Ничего не найдено</p>
                <p className="text-muted-foreground mb-5 text-sm">Попробуйте изменить фильтры</p>
                <button onClick={resetAll} className="bg-crimson-gradient text-white px-6 py-2.5 rounded-xl font-semibold hover:opacity-90">Сбросить фильтры</button>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
                {products.map(p => <ProductCard key={p.id} product={p} onCartAdd={() => setCartOpen(true)} />)}
              </div>
            )}
          </div>
        </div>

        {meta.seoText && (
          <div className="mt-12 bg-zinc-50 rounded-2xl border border-border p-6 md:p-8">
            <h2 className="text-xl font-bold text-foreground mb-4">{meta.seoText.h2}</h2>
            <div className="space-y-3">
              {meta.seoText.paragraphs.map((p, i) => <p key={i} className="text-sm text-muted-foreground leading-relaxed">{p}</p>)}
            </div>
          </div>
        )}
      </main>

      {/* Mobile sidebar */}
      {sidebarOpen && (
        <>
          <div className="fixed inset-0 bg-black/40 z-50" onClick={() => setSidebarOpen(false)} />
          <div className="fixed top-0 left-0 h-full w-full max-w-xs bg-white z-50 shadow-2xl overflow-y-auto p-5">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-bold text-lg">Фильтры</h3>
              <button onClick={() => setSidebarOpen(false)}><Icon name="XMarkIcon" size={20} /></button>
            </div>
            {SidebarFilters}
          </div>
        </>
      )}

      <Footer />
    </div>
  );
}
