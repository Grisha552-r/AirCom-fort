'use client';
import React, { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CartDrawer from '@/components/CartDrawer';
import ProductGallery from '@/app/product-detail/components/ProductGallery';
import ProductInfo from '@/app/product-detail/components/ProductInfo';
import ProductTabs from '@/app/product-detail/components/ProductTabs';
import SimilarProducts from '@/app/product-detail/components/SimilarProducts';
import ProductCard from '@/components/ProductCard';
import Icon from '@/components/ui/AppIcon';
import Link from 'next/link';
import { CATEGORIES } from '@/lib/categories';
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

const WALL_CATEGORY_IDS = ['split-electrolux', 'split-ballu', 'split-haier', 'split-panasonic', 'split-lg', 'split-mitsudai'];

const CATEGORY_META: Record<string, { label: string; brand?: string; categoryIds?: string[]; seoText?: { h2: string; paragraphs: string[] } }> = {
  'split-systems': {
    label: 'Все сплит-системы',
    categoryIds: WALL_CATEGORY_IDS,
    seoText: {
      h2: 'Купить сплит-систему в Гомеле — AirComfort',
      paragraphs: [
        'AirComfort предлагает широкий выбор настенных сплит-систем ведущих мировых брендов: Electrolux, Ballu, Haier, LG и Mitsudai. В каталоге — инверторные и on/off модели мощностью от 7 000 до 36 000 BTU для помещений площадью от 15 до 100 м². Все кондиционеры в наличии и поставляются с официальной гарантией производителя.',
        'Установка кондиционера в Гомеле под ключ — от 400 р. В стоимость входит монтаж обоих блоков, прокладка трассы до 3 метров, вакуумирование и запуск. Наши специалисты работают в Гомеле и Гомельской области. Гарантия на монтажные работы — 1 год.',
        'Не знаете, какую мощность выбрать? Для комнаты 20 м² подойдёт 9 000 BTU, для 35 м² — 12 000 BTU, для 50 м² — 18 000 BTU. Позвоните нам или напишите в Telegram — бесплатно проконсультируем и поможем подобрать оптимальную модель.',
      ],
    },
  },
  'split-electrolux': {
    label: 'Кондиционеры Electrolux',
    brand: 'Electrolux',
    seoText: {
      h2: 'Кондиционеры Electrolux в Гомеле — официальный дилер',
      paragraphs: [
        'Electrolux — один из ведущих мировых производителей климатической техники. Кондиционеры Electrolux сочетают современный дизайн, тихую работу и высокую надёжность. Все модели оснащены инверторным компрессором, что обеспечивает точное поддержание температуры и экономию электроэнергии до 40% по сравнению с обычными on/off системами.',
        'В нашем каталоге — полный ассортимент сплит-систем Electrolux: серия EACS (базовая), EACS-I (инверторная) и EACO (мультисплит). Мощность от 9 000 до 24 000 BTU. Официальная гарантия производителя 2–3 года. Доставка по Гомелю и установка под ключ от 400 р.',
      ],
    },
  },
  'split-ballu': {
    label: 'Кондиционеры Ballu',
    brand: 'Ballu',
    seoText: {
      h2: 'Кондиционеры Ballu в Гомеле — надёжные и доступные',
      paragraphs: [
        'Ballu — популярный бренд климатического оборудования с широким ассортиментом моделей для любого бюджета. Инверторные кондиционеры Ballu серии BSUI обеспечивают тихую работу (от 19 дБ), режим обогрева до −15 °C и управление через приложение. Базовые on/off модели подойдут тем, кто ищет бюджетное охлаждение.',
        'Купить кондиционер Ballu в Гомеле с официальной гарантией и профессиональной установкой — в AirComfort. Монтаж под ключ от 400 р. Подберём модель под ваш бюджет и площадь помещения.',
      ],
    },
  },
  'split-haier': {
    label: 'Кондиционеры Haier',
    brand: 'Haier',
    seoText: {
      h2: 'Кондиционеры Haier в Гомеле — полный ассортимент',
      paragraphs: [
        'Haier — китайский производитель №1 в мире по объёму производства климатического оборудования. Кондиционеры Haier AS отличаются низким уровнем шума (22–24 дБ для внутреннего блока), встроенной самоочисткой и режимом работы при температуре наружного воздуха до −25 °C. Официальная гарантия 3 года.',
        'В AirComfort вы найдёте кондиционеры Haier на любую площадь: от 9 000 BTU для спальни до 24 000 BTU для большой гостиной. Доставка по Гомелю. Установка под ключ от 400 р. с гарантией на монтаж 1 год.',
      ],
    },
  },
  'split-lg': {
    label: 'Кондиционеры LG',
    brand: 'LG',
    seoText: {
      h2: 'Кондиционеры LG в Гомеле — умные сплит-системы с Wi-Fi',
      paragraphs: [
        'LG — мировой лидер в производстве инверторных кондиционеров с технологией Dual Inverter Compressor. Сплит-системы LG обеспечивают ускоренное охлаждение на 40% быстрее стандартных моделей, работают при температуре до −25 °C и управляются через приложение LG ThinQ с Wi-Fi. Уровень шума внутреннего блока — от 19 дБ.',
        'Купить кондиционер LG в Гомеле с официальной гарантией — в AirComfort. В каталоге: модели S09ET, S12ET, S18ET и другие. Монтаж под ключ от 400 р. Выезд в Гомеле и Гомельской области.',
      ],
    },
  },
  'split-mitsudai': {
    label: 'Кондиционеры Mitsudai',
    brand: 'Mitsudai',
    seoText: {
      h2: 'Кондиционеры Mitsudai в Гомеле — доступные цены, хорошее качество',
      paragraphs: [
        'Mitsudai — бюджетная линейка кондиционеров для тех, кто ищет надёжное охлаждение по минимальной цене. Модели Mitsudai оснащены фильтром очистки воздуха, таймером и спящим режимом. Доступны инверторные варианты для экономии электроэнергии. Подходят для квартир, дач и небольших офисов.',
        'Установка кондиционера Mitsudai в Гомеле под ключ — от 400 р. Гарантия на оборудование 1 год, на монтажные работы 1 год. Консультации по выбору модели — бесплатно.',
      ],
    },
  },
  mobile: {
    label: 'Мобильные кондиционеры',
    categoryIds: ['mobile'],
    seoText: {
      h2: 'Мобильные кондиционеры в Гомеле — без монтажа и сверления',
      paragraphs: [
        'Мобильный кондиционер — идеальное решение там, где установка настенной сплит-системы невозможна или нежелательна: арендное жильё, исторические здания, офисы, дачи. Переносной кондиционер готов к работе за 5 минут — достаточно вывести воздуховод в окно через специальный комплект.',
        'В нашем каталоге — мобильные кондиционеры мощностью 7 000–14 000 BTU для помещений 15–40 м². Функции: охлаждение, осушение, вентиляция, таймер. Доставка по Гомелю. Никакого монтажа и разрешений не нужно.',
      ],
    },
  },
};

const BTU_OPTIONS = [
  { id: '7 000',  label: '7 000 BTU — до 20 м²' },
  { id: '9 000',  label: '9 000 BTU — до 25 м²' },
  { id: '12 000', label: '12 000 BTU — до 35 м²' },
  { id: '18 000', label: '18 000 BTU — до 50 м²' },
  { id: '24 000', label: '24 000 BTU — до 70 м²' },
  { id: '36 000', label: '36 000 BTU' },
];

const CAT_BRANDS = ['Electrolux', 'Ballu', 'Haier', 'LG', 'Mitsudai'];

function CatCheckbox({ label, checked, onChange }: { label: string; checked: boolean; onChange: () => void }) {
  return (
    <label className="flex items-center gap-2.5 cursor-pointer group py-0.5 select-none" onClick={onChange}>
      <div className={`w-[18px] h-[18px] rounded-[4px] border-2 flex items-center justify-center shrink-0 transition-all ${checked ? 'bg-crimson-700 border-crimson-700' : 'border-border group-hover:border-crimson-400 bg-white'}`}>
        {checked && <svg viewBox="0 0 10 10" fill="none" className="w-2.5 h-2.5"><path d="M1.5 5l2.5 2.5 5-5" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>}
      </div>
      <span className={`text-sm leading-tight transition-colors ${checked ? 'text-crimson-700 font-medium' : 'text-foreground group-hover:text-crimson-700'}`}>{label}</span>
    </label>
  );
}

function CatRadio({ label, checked, onChange }: { label: string; checked: boolean; onChange: () => void }) {
  return (
    <label className="flex items-center gap-2.5 cursor-pointer group py-0.5 select-none" onClick={onChange}>
      <div className={`w-[18px] h-[18px] rounded-full border-2 flex items-center justify-center shrink-0 transition-all ${checked ? 'border-crimson-700 bg-crimson-700' : 'border-border group-hover:border-crimson-400 bg-white'}`}>
        {checked && <div className="w-2 h-2 rounded-full bg-white" />}
      </div>
      <span className={`text-sm leading-tight transition-colors ${checked ? 'text-crimson-700 font-medium' : 'text-foreground group-hover:text-crimson-700'}`}>{label}</span>
    </label>
  );
}

function CatFilterSection({ title, badge, children }: { title: string; badge?: number; children: React.ReactNode }) {
  const [open, setOpen] = useState(true);
  return (
    <div className="border-b border-border pb-4 mb-4 last:border-0 last:pb-0 last:mb-0">
      <button className="flex items-center justify-between w-full mb-3 text-left" onClick={() => setOpen(o => !o)}>
        <span className="font-semibold text-sm text-foreground flex items-center gap-2">
          {title}
          {!!badge && <span className="bg-crimson-700 text-white text-[10px] font-bold rounded-full min-w-[18px] h-[18px] px-1 flex items-center justify-center">{badge}</span>}
        </span>
        <Icon name={open ? 'ChevronUpIcon' : 'ChevronDownIcon'} size={14} className="text-muted-foreground shrink-0" />
      </button>
      {open && <div className="space-y-2">{children}</div>}
    </div>
  );
}

function CategoryView({ slug }: { slug: string }) {
  const info = CATEGORY_META[slug];
  const [allProducts, setAllProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
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
    fetch('/api/products')
      .then(r => r.json())
      .then((all: Product[]) => {
        let filtered: Product[] = all;
        if (info.brand) filtered = all.filter(p => p.brand === info.brand);
        else if (info.categoryIds) filtered = all.filter(p => info.categoryIds!.includes(p.categoryId));
        setAllProducts(filtered);
        setLoading(false);
      });
  }, [slug]);

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
        <CatFilterSection title="Бренд" badge={selectedBrands.size}>
          {CAT_BRANDS.map(b => <CatCheckbox key={b} label={b} checked={selectedBrands.has(b)} onChange={() => toggleBrand(b)} />)}
        </CatFilterSection>
      )}
      <CatFilterSection title="Мощность (BTU)" badge={selectedBtus.size}>
        {BTU_OPTIONS.map(o => <CatCheckbox key={o.id} label={o.label} checked={selectedBtus.has(o.id)} onChange={() => toggleBtu(o.id)} />)}
      </CatFilterSection>
      <CatFilterSection title="Технология" badge={inverterFilter !== 'all' ? 1 : 0}>
        {(['all', 'yes', 'no'] as const).map(v => (
          <CatRadio key={v} label={v === 'all' ? 'Все' : v === 'yes' ? 'Инвертор' : 'On/Off'} checked={inverterFilter === v} onChange={() => setInverterFilter(v)} />
        ))}
      </CatFilterSection>
      <CatFilterSection title="Цена (р.)" badge={priceMin || priceMax ? 1 : 0}>
        <div className="flex gap-2">
          <input type="number" placeholder="От" value={priceMin} onChange={e => setPriceMin(e.target.value)}
            className="w-full border border-border rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-crimson-400" />
          <input type="number" placeholder="До" value={priceMax} onChange={e => setPriceMax(e.target.value)}
            className="w-full border border-border rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-crimson-400" />
        </div>
      </CatFilterSection>
      {activeCount > 0 && (
        <button onClick={resetAll} className="w-full mt-2 text-sm text-crimson-600 hover:text-crimson-700 font-medium py-2.5 border border-crimson-200 rounded-lg hover:bg-crimson-50 transition-colors">
          Сбросить все ({activeCount})
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
          <span className="text-foreground font-medium">{info.label}</span>
        </nav>

        <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-5">{info.label} в Гомеле</h1>

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

        {info.seoText && (
          <div className="mt-12 bg-zinc-50 rounded-2xl border border-border p-6 md:p-8">
            <h2 className="text-xl font-bold text-foreground mb-4">{info.seoText.h2}</h2>
            <div className="space-y-3">
              {info.seoText.paragraphs.map((p, i) => <p key={i} className="text-sm text-muted-foreground leading-relaxed">{p}</p>)}
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

function getSeriesKey(name: string): string {
  return name.replace(/-(?:05|07|09|11|12|13|14|16|18|19|21|22|24|26|27|28|30|32|36|42|48|55|60)(?=[A-Z])/g, '-##');
}

function getBtuNum(p: Product): number {
  const v = (p.characteristics?.['Базовая мощность кондиционера (охлаждение),BTU'] || '').replace(/\s/g, '');
  return parseInt(v) || 99999;
}

function getBtuLabel(p: Product): string {
  return (p.characteristics?.['Базовая мощность кондиционера (охлаждение),BTU'] || '').trim();
}

export default function ProductPage() {
  const params = useParams();
  const id = params?.id as string;

  const [cartOpen, setCartOpen] = useState(false);
  const [baseProduct, setBaseProduct] = useState<Product | null>(null);
  const [selected, setSelected] = useState<Product | null>(null);
  const [variants, setVariants] = useState<Product[]>([]);
  const [similar, setSimilar] = useState<Product[]>([]);

  useEffect(() => {
    if (CATEGORY_META[id]) return;
    fetch('/api/products')
      .then(r => r.json())
      .then((all: Product[]) => {
        const found = all.find(p => p.id === id) || all[0];
        setBaseProduct(found);
        setSelected(found);

        const seriesKey = getSeriesKey(found.name);
        const v = all
          .filter(p =>
            p.brand === found.brand &&
            p.categoryId === found.categoryId &&
            getSeriesKey(p.name) === seriesKey
          )
          .sort((a, b) => getBtuNum(a) - getBtuNum(b));

        setVariants(v.length > 1 ? v : []);
        const variantIds = new Set(v.map(x => x.id));
        setSimilar(
          all
            .filter(p => p.categoryId === found.categoryId && p.id !== found.id && !variantIds.has(p.id))
            .slice(0, 5)
        );

        document.title = `${found.name} — купить в Гомеле | AirComfort`;
      });
  }, [id]);

  if (CATEGORY_META[id]) {
    return <CategoryView slug={id} />;
  }

  const product = selected;
  const category = CATEGORIES.find(c => c.id === product?.categoryId);
  const parentCat = category?.parentId ? CATEGORIES.find(c => c.id === category.parentId) : null;

  return (
    <div className="min-h-screen bg-background">
      <Header onCartOpen={() => setCartOpen(true)} />
      <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} />
      <main className="max-w-7xl mx-auto px-4 py-6">

        <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-6 flex-wrap">
          <Link href="/" className="hover:text-crimson-700 transition-colors">Главная</Link>
          <Icon name="ChevronRightIcon" size={14} />
          <Link href="/products" className="hover:text-crimson-700 transition-colors">Каталог</Link>
          {parentCat && (
            <>
              <Icon name="ChevronRightIcon" size={14} />
              <Link href={`/products/${parentCat.slug}`} className="hover:text-crimson-700 transition-colors">{parentCat.name}</Link>
            </>
          )}
          {category && (
            <>
              <Icon name="ChevronRightIcon" size={14} />
              <Link href={`/products/${category.slug}`} className="hover:text-crimson-700 transition-colors">{category.name}</Link>
            </>
          )}
          <Icon name="ChevronRightIcon" size={14} />
          <span className="text-foreground font-medium line-clamp-1">{baseProduct?.name}</span>
        </nav>

        {product ? (
          <>
            {variants.length > 1 && (
              <div className="bg-white rounded-2xl border border-border p-4 mb-6">
                <p className="text-sm font-semibold text-foreground mb-3">Выберите мощность:</p>
                <div className="flex flex-wrap gap-2">
                  {variants.map(v => {
                    const btu = getBtuLabel(v);
                    const area = BTU_TO_AREA[btu];
                    return (
                      <button
                        key={v.id}
                        onClick={() => setSelected(v)}
                        className={`flex flex-col items-center px-4 py-2.5 rounded-xl border text-sm font-semibold transition-all duration-200 min-w-[90px] ${
                          selected?.id === v.id
                            ? 'bg-crimson-700 text-white border-crimson-700 shadow-crimson'
                            : 'border-border hover:border-crimson-400 hover:bg-crimson-50 text-foreground'
                        }`}
                      >
                        <span>{btu || '—'} BTU</span>
                        {area && (
                          <span className={`text-[11px] font-normal mt-0.5 ${selected?.id === v.id ? 'text-crimson-100' : 'text-muted-foreground'}`}>
                            до {area} м²
                          </span>
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
              <ProductGallery images={product.images} productName={product.name} />
              <ProductInfo product={product} onCartOpen={() => setCartOpen(true)} />
            </div>
            <ProductTabs product={product} />
            {similar.length > 0 && (
              <SimilarProducts products={similar} onCartOpen={() => setCartOpen(true)} />
            )}
          </>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
            <div className="aspect-square bg-zinc-100 rounded-2xl animate-pulse" />
            <div className="space-y-4">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="h-8 bg-zinc-100 rounded-xl animate-pulse" />
              ))}
            </div>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}
