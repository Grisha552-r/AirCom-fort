'use client';
import React, { useState, useEffect, useMemo, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CartDrawer from '@/components/CartDrawer';
import ProductCard from '@/components/ProductCard';
import Icon from '@/components/ui/AppIcon';
import Link from 'next/link';
import type { Product } from '@/lib/store';

const BRANDS_LIST = [
  { id: 'Electrolux', label: 'Electrolux' },
  { id: 'Ballu', label: 'Ballu' },
  { id: 'Haier', label: 'Haier' },
  { id: 'LG', label: 'LG' },
  { id: 'Mitsudai', label: 'Mitsudai' },
  { id: 'King Home', label: 'King Home' },
];

const TYPE_GROUPS = [
  { id: 'wall', label: 'Настенная сплит-система', slugs: ['split-electrolux', 'split-ballu', 'split-haier', 'split-lg', 'split-mitsudai', 'split-kinghome'] },
  { id: 'mobile', label: 'Мобильный', slugs: ['mobile'] },
];

const BTU_OPTIONS = [
  { id: '7 000', label: '7 000 BTU — до 20 м²' },
  { id: '9 000', label: '9 000 BTU — до 25 м²' },
  { id: '12 000', label: '12 000 BTU — до 35 м²' },
  { id: '18 000', label: '18 000 BTU — до 50 м²' },
  { id: '24 000', label: '24 000 BTU — до 70 м²' },
  { id: '36 000', label: '36 000 BTU' },
  { id: '48 000', label: '48 000 BTU' },
];

const SLUG_TO_BRAND: Record<string, string> = {
  'split-electrolux': 'Electrolux',
  'split-ballu': 'Ballu',
  'split-haier': 'Haier',
  'split-lg': 'LG',
  'split-mitsudai': 'Mitsudai',
  'split-kinghome': 'King Home',
};

const SLUG_TO_TYPE: Record<string, string> = {
  'split-systems': 'wall',
  'multi-split': 'multi-split',
  'semi-pro': 'semi-pro',
  'mobile': 'mobile',
};

function getBtu(product: Product): string {
  return (product.characteristics?.['Базовая мощность кондиционера (охлаждение),BTU'] || '').trim();
}

function isInverter(product: Product): boolean | null {
  const tech = product.characteristics?.['Инверторная технология'];
  if (tech === 'Да') return true;
  if (tech === 'Нет') return false;
  const ctrl = product.characteristics?.['Тип управления'];
  if (ctrl === 'Инвертор') return true;
  if (ctrl === 'On/Off') return false;
  return null;
}

function FilterSection({
  title,
  activeCount,
  defaultOpen = true,
  children,
}: {
  title: string;
  activeCount?: number;
  defaultOpen?: boolean;
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="border-b border-border pb-4 mb-4 last:border-0 last:pb-0 last:mb-0">
      <button
        className="flex items-center justify-between w-full mb-3 text-left"
        onClick={() => setOpen(o => !o)}
      >
        <span className="font-semibold text-sm text-foreground flex items-center gap-2">
          {title}
          {activeCount ? (
            <span className="bg-crimson-700 text-white text-[10px] font-bold rounded-full min-w-[18px] h-[18px] px-1 flex items-center justify-center">
              {activeCount}
            </span>
          ) : null}
        </span>
        <Icon
          name={open ? 'ChevronUpIcon' : 'ChevronDownIcon'}
          size={14}
          className="text-muted-foreground shrink-0"
        />
      </button>
      {open && <div className="space-y-2">{children}</div>}
    </div>
  );
}

function Checkbox({ label, checked, onChange }: { label: string; checked: boolean; onChange: () => void }) {
  return (
    <label className="flex items-center gap-2.5 cursor-pointer group py-0.5 select-none" onClick={onChange}>
      <div
        className={`w-[18px] h-[18px] rounded-[4px] border-2 flex items-center justify-center shrink-0 transition-all ${
          checked ? 'bg-crimson-700 border-crimson-700' : 'border-border group-hover:border-crimson-400 bg-white'
        }`}
      >
        {checked && (
          <svg viewBox="0 0 10 10" fill="none" className="w-2.5 h-2.5">
            <path d="M1.5 5l2.5 2.5 5-5" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        )}
      </div>
      <span className={`text-sm leading-tight transition-colors ${checked ? 'text-crimson-700 font-medium' : 'text-foreground group-hover:text-crimson-700'}`}>
        {label}
      </span>
    </label>
  );
}

function RadioOption({ label, checked, onChange }: { label: string; checked: boolean; onChange: () => void }) {
  return (
    <label className="flex items-center gap-2.5 cursor-pointer group py-0.5 select-none" onClick={onChange}>
      <div
        className={`w-[18px] h-[18px] rounded-full border-2 flex items-center justify-center shrink-0 transition-all ${
          checked ? 'border-crimson-700 bg-crimson-700' : 'border-border group-hover:border-crimson-400 bg-white'
        }`}
      >
        {checked && <div className="w-2 h-2 rounded-full bg-white" />}
      </div>
      <span className={`text-sm leading-tight transition-colors ${checked ? 'text-crimson-700 font-medium' : 'text-foreground group-hover:text-crimson-700'}`}>
        {label}
      </span>
    </label>
  );
}

interface SidebarProps {
  selectedBrands: Set<string>;
  selectedTypes: Set<string>;
  selectedBtus: Set<string>;
  inverterFilter: 'all' | 'yes' | 'no';
  priceMin: string;
  priceMax: string;
  inStockOnly: boolean;
  activeFilterCount: number;
  toggleBrand: (id: string) => void;
  toggleType: (id: string) => void;
  toggleBtu: (id: string) => void;
  setInverterFilter: (v: 'all' | 'yes' | 'no') => void;
  setPriceMin: (v: string) => void;
  setPriceMax: (v: string) => void;
  setInStockOnly: (v: boolean) => void;
  resetAll: () => void;
}

function SidebarContent({
  selectedBrands, selectedTypes, selectedBtus, inverterFilter,
  priceMin, priceMax, inStockOnly, activeFilterCount,
  toggleBrand, toggleType, toggleBtu,
  setInverterFilter, setPriceMin, setPriceMax, setInStockOnly, resetAll,
}: SidebarProps) {
  return (
    <div>
      <FilterSection title="Бренд" activeCount={selectedBrands.size} defaultOpen={false}>
        {BRANDS_LIST.map(b => (
          <Checkbox key={b.id} label={b.label} checked={selectedBrands.has(b.id)} onChange={() => toggleBrand(b.id)} />
        ))}
      </FilterSection>

      <FilterSection title="Тип кондиционера" activeCount={selectedTypes.size} defaultOpen={false}>
        {TYPE_GROUPS.map(g => (
          <Checkbox key={g.id} label={g.label} checked={selectedTypes.has(g.id)} onChange={() => toggleType(g.id)} />
        ))}
      </FilterSection>

      <FilterSection title="Мощность (BTU)" activeCount={selectedBtus.size} defaultOpen={false}>
        {BTU_OPTIONS.map(o => (
          <Checkbox key={o.id} label={o.label} checked={selectedBtus.has(o.id)} onChange={() => toggleBtu(o.id)} />
        ))}
      </FilterSection>

      <FilterSection title="Технология" activeCount={inverterFilter !== 'all' ? 1 : 0} defaultOpen={false}>
        {(['all', 'yes', 'no'] as const).map(val => (
          <RadioOption
            key={val}
            label={val === 'all' ? 'Все' : val === 'yes' ? 'Инверторный' : 'Не инверторный (On/Off)'}
            checked={inverterFilter === val}
            onChange={() => setInverterFilter(val)}
          />
        ))}
      </FilterSection>

      <FilterSection title="Цена (BYN)" activeCount={priceMin || priceMax ? 1 : 0} defaultOpen={false}>
        <div className="flex gap-2">
          <input
            type="number"
            placeholder="От"
            value={priceMin}
            onChange={e => setPriceMin(e.target.value)}
            className="w-full border border-border rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-crimson-400 focus:ring-1 focus:ring-crimson-100"
          />
          <input
            type="number"
            placeholder="До"
            value={priceMax}
            onChange={e => setPriceMax(e.target.value)}
            className="w-full border border-border rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-crimson-400 focus:ring-1 focus:ring-crimson-100"
          />
        </div>
      </FilterSection>


      {activeFilterCount > 0 && (
        <button
          onClick={resetAll}
          className="w-full mt-3 text-sm text-crimson-600 hover:text-crimson-700 font-medium py-2.5 border border-crimson-200 rounded-lg hover:bg-crimson-50 transition-colors"
        >
          Сбросить все фильтры ({activeFilterCount})
        </button>
      )}
    </div>
  );
}

function ProductsContent() {
  const searchParams = useSearchParams();
  const categoryParam = searchParams?.get('category');
  const searchParam = searchParams?.get('search');

  const [allProducts, setAllProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [cartOpen, setCartOpen] = useState(false);
  const [selectedBrands, setSelectedBrands] = useState<Set<string>>(new Set());
  const [selectedTypes, setSelectedTypes] = useState<Set<string>>(new Set());
  const [selectedBtus, setSelectedBtus] = useState<Set<string>>(new Set());
  const [inverterFilter, setInverterFilter] = useState<'all' | 'yes' | 'no'>('all');
  const [priceMin, setPriceMin] = useState('');
  const [priceMax, setPriceMax] = useState('');
  const [inStockOnly, setInStockOnly] = useState(false);
  const [sortBy, setSortBy] = useState('default');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    fetch('/api/products')
      .then(r => r.json())
      .then((data: Product[]) => { setAllProducts(data); setLoading(false); });
  }, []);

  useEffect(() => {
    if (!categoryParam) return;
    const brand = SLUG_TO_BRAND[categoryParam];
    if (brand) setSelectedBrands(new Set([brand]));
    const type = SLUG_TO_TYPE[categoryParam];
    if (type) setSelectedTypes(new Set([type]));
    if (categoryParam === 'split-systems') setSelectedTypes(new Set(['wall']));
  }, [categoryParam]);

  const toggleSet = (setter: React.Dispatch<React.SetStateAction<Set<string>>>, id: string) => {
    setter(prev => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  };

  const toggleBrand = (id: string) => toggleSet(setSelectedBrands, id);
  const toggleType = (id: string) => toggleSet(setSelectedTypes, id);
  const toggleBtu = (id: string) => toggleSet(setSelectedBtus, id);

  const filteredProducts = useMemo(() => {
    let products = [...allProducts];

    if (searchParam) {
      const q = searchParam.toLowerCase();
      products = products.filter(
        p => p.name.toLowerCase().includes(q) || p.description.toLowerCase().includes(q) || p.brand.toLowerCase().includes(q)
      );
    }

    if (selectedBrands.size > 0) products = products.filter(p => selectedBrands.has(p.brand));

    if (selectedTypes.size > 0) {
      products = products.filter(p => {
        const group = TYPE_GROUPS.find(g => g.slugs.includes(p.categoryId));
        return group ? selectedTypes.has(group.id) : false;
      });
    }

    if (selectedBtus.size > 0) products = products.filter(p => selectedBtus.has(getBtu(p)));
    if (inverterFilter === 'yes') products = products.filter(p => isInverter(p) === true);
    else if (inverterFilter === 'no') products = products.filter(p => isInverter(p) === false);
    if (priceMin) products = products.filter(p => p.price >= Number(priceMin));
    if (priceMax) products = products.filter(p => p.price <= Number(priceMax));
    if (inStockOnly) products = products.filter(p => p.inStock);

    if (sortBy === 'price-asc') products.sort((a, b) => a.price - b.price);
    else if (sortBy === 'price-desc') products.sort((a, b) => b.price - a.price);
    else if (sortBy === 'rating') products.sort((a, b) => b.rating - a.rating);

    return products;
  }, [allProducts, searchParam, selectedBrands, selectedTypes, selectedBtus, inverterFilter, priceMin, priceMax, inStockOnly, sortBy]);

  const resetAll = () => {
    setSelectedBrands(new Set());
    setSelectedTypes(new Set());
    setSelectedBtus(new Set());
    setInverterFilter('all');
    setPriceMin('');
    setPriceMax('');
    setInStockOnly(false);
    setSortBy('default');
  };

  const activeFilterCount =
    selectedBrands.size + selectedTypes.size + selectedBtus.size +
    (inverterFilter !== 'all' ? 1 : 0) + (priceMin ? 1 : 0) + (priceMax ? 1 : 0) + (inStockOnly ? 1 : 0);

  const sidebarProps: SidebarProps = {
    selectedBrands, selectedTypes, selectedBtus, inverterFilter,
    priceMin, priceMax, inStockOnly, activeFilterCount,
    toggleBrand, toggleType, toggleBtu,
    setInverterFilter, setPriceMin, setPriceMax, setInStockOnly, resetAll,
  };

  return (
    <div className="min-h-screen bg-background">
      <Header onCartOpen={() => setCartOpen(true)} />
      <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} />

      <main className="max-w-7xl mx-auto px-4 py-6">
        <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-5">
          <Link href="/" className="hover:text-crimson-700 transition-colors">Главная</Link>
          <Icon name="ChevronRightIcon" size={14} />
          <span className="text-foreground font-medium">Каталог</span>
          {searchParam && (
            <>
              <Icon name="ChevronRightIcon" size={14} />
              <span className="text-foreground font-medium">«{searchParam}»</span>
            </>
          )}
        </nav>

        <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
          Купить кондиционер в Гомеле — каталог 2026
        </h1>

        <div className="flex gap-6">
          {/* Desktop Sidebar */}
          <aside className="hidden lg:block w-64 shrink-0">
            <div className="bg-white rounded-2xl border border-border p-5 sticky top-24 max-h-[calc(100vh-7rem)] overflow-y-auto">
              <div className="flex items-center justify-between mb-5">
                <h2 className="font-bold text-base text-foreground">Фильтры</h2>
                {activeFilterCount > 0 && (
                  <button onClick={resetAll} className="text-xs text-crimson-600 hover:text-crimson-700 font-medium">
                    Сбросить ({activeFilterCount})
                  </button>
                )}
              </div>
              <SidebarContent {...sidebarProps} />
            </div>
          </aside>

          {/* Main content */}
          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between gap-3 mb-4 flex-wrap">
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setSidebarOpen(true)}
                  className={`lg:hidden flex items-center gap-2 border rounded-xl px-4 py-2.5 text-sm font-medium transition-colors ${
                    activeFilterCount > 0 ? 'border-crimson-500 text-crimson-700 bg-crimson-50' : 'border-border hover:border-crimson-400'
                  }`}
                >
                  <Icon name="AdjustmentsHorizontalIcon" size={16} />
                  Фильтры{activeFilterCount > 0 ? ` (${activeFilterCount})` : ''}
                </button>
                <span className="text-sm text-muted-foreground">
                  {loading ? 'Загрузка...' : `${filteredProducts.length} товаров`}
                </span>
              </div>
              <select
                value={sortBy}
                onChange={e => setSortBy(e.target.value)}
                className="border border-border rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-crimson-400 bg-white"
              >
                <option value="default">По умолчанию</option>
                <option value="price-asc">Цена: по возрастанию</option>
                <option value="price-desc">Цена: по убыванию</option>
                <option value="rating">По рейтингу</option>
              </select>
            </div>

            {loading ? (
              <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3 md:gap-4">
                {[...Array(12)].map((_, i) => (
                  <div key={i} className="h-72 bg-zinc-100 rounded-2xl animate-pulse" />
                ))}
              </div>
            ) : filteredProducts.length > 0 ? (
              <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3 md:gap-4">
                {filteredProducts.map(p => (
                  <ProductCard key={p.id} product={p} onCartAdd={() => setCartOpen(true)} />
                ))}
              </div>
            ) : (
              <div className="text-center py-20 bg-white rounded-2xl border border-border">
                <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center mx-auto mb-4">
                  <Icon name="MagnifyingGlassIcon" size={28} className="text-muted-foreground" />
                </div>
                <p className="text-lg font-semibold text-foreground mb-2">Товары не найдены</p>
                <p className="text-sm text-muted-foreground mb-4">Попробуйте изменить параметры фильтрации</p>
                <button
                  onClick={resetAll}
                  className="bg-crimson-700 text-white px-6 py-2.5 rounded-xl font-medium hover:bg-crimson-800 transition-colors"
                >
                  Сбросить фильтры
                </button>
              </div>
            )}
          </div>
        </div>
      </main>

      {/* Mobile sidebar overlay */}
      {sidebarOpen && (
        <>
          <div className="fixed inset-0 bg-black/40 z-50" onClick={() => setSidebarOpen(false)} />
          <div className="fixed top-0 left-0 h-full w-full max-w-xs bg-white z-50 shadow-2xl overflow-y-auto p-5">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-bold text-lg">Фильтры</h3>
              <button onClick={() => setSidebarOpen(false)}>
                <Icon name="XMarkIcon" size={20} />
              </button>
            </div>
            <SidebarContent {...sidebarProps} />
          </div>
        </>
      )}

      {/* FAQ */}
      <section className="max-w-7xl mx-auto px-4 py-10">
        <h2 className="text-xl font-bold text-foreground mb-6">Часто задаваемые вопросы</h2>
        <div className="space-y-3 max-w-3xl">
          {[
            ['Как выбрать мощность кондиционера?', 'Ориентируйтесь на площадь помещения: для 20 м² — 7 000–9 000 BTU, для 35 м² — 12 000 BTU, для 50 м² — 18 000 BTU. Если потолки выше 2,7 м или помещение с большими окнами — берите модель с запасом мощности.'],
            ['Что входит в стандартный монтаж?', 'В монтаж от 400 р. входит: крепление внутреннего и наружного блоков, прокладка медной трассы до 3 м, электрокабель, вакуумирование системы и пусконаладка. Дополнительный метр трассы — 25 р.'],
            ['Сколько времени занимает установка?', 'Стандартная установка одного кондиционера — 2–4 часа. Если трасса длинная или монтаж через балкон — до 5–6 часов. Мастера приезжают в оговорённое время в день заказа или на следующий день.'],
            ['Какая гарантия на кондиционер?', 'Electrolux и LG — 3 года, Ballu и Haier — 2 года, Mitsudai и King Home — 1 год. На монтажные работы — отдельная гарантия 1 год. Гарантийный ремонт выполняем бесплатно с выездом мастера.'],
            ['Можно ли купить кондиционер без установки?', 'Да, продаём кондиционеры без монтажа. Самовывоз — по адресу, уточняйте по телефону. Доставка по Гомелю — договаривайтесь при заказе. Но рекомендуем установку: неправильный монтаж снимает гарантию производителя.'],
          ].map(([q, a], i) => (
            <details key={i} className="group border border-border rounded-xl overflow-hidden bg-white">
              <summary className="flex items-center justify-between p-4 cursor-pointer font-semibold text-sm text-foreground hover:bg-zinc-50 list-none">
                {q}
                <svg className="w-4 h-4 text-muted-foreground shrink-0 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-4 pb-4 text-sm text-muted-foreground leading-relaxed border-t border-border pt-3">{a}</div>
            </details>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default function ProductsPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-muted-foreground">Загрузка...</div>
        </div>
      }
    >
      <ProductsContent />
    </Suspense>
  );
}
