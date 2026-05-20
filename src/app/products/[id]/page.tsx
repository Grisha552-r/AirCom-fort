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

type SortKey = 'default' | 'price-asc' | 'price-desc';
type AreaFilter = 'all' | 'lt25' | '25-40' | '40-60' | 'gt60';
type PriceFilter = 'all' | 'lt800' | '800-1400' | '1400-2000' | 'gt2000';

const AREA_FILTERS: { key: AreaFilter; label: string; maxBtu?: number; minBtu?: number }[] = [
  { key: 'all',   label: 'Любая площадь' },
  { key: 'lt25',  label: 'до 25 м²',  maxBtu: 9000 },
  { key: '25-40', label: '25–40 м²',  minBtu: 9001,  maxBtu: 12000 },
  { key: '40-60', label: '40–60 м²',  minBtu: 12001, maxBtu: 18000 },
  { key: 'gt60',  label: 'от 60 м²',  minBtu: 18001 },
];

const PRICE_FILTERS: { key: PriceFilter; label: string }[] = [
  { key: 'all',      label: 'Любая цена' },
  { key: 'lt800',    label: 'до 800 р.' },
  { key: '800-1400', label: '800–1400 р.' },
  { key: '1400-2000',label: '1400–2000 р.' },
  { key: 'gt2000',   label: 'от 2000 р.' },
];

const ALL_BRANDS = ['Electrolux', 'Ballu', 'Haier', 'LG', 'Mitsudai'];

function matchesArea(p: Product, area: AreaFilter): boolean {
  if (area === 'all') return true;
  const btu = getBtuNum(p);
  if (btu === 99999) return true;
  const f = AREA_FILTERS.find(a => a.key === area)!;
  if (f.minBtu && btu < f.minBtu) return false;
  if (f.maxBtu && btu > f.maxBtu) return false;
  return true;
}

function matchesPrice(p: Product, price: PriceFilter): boolean {
  if (price === 'all') return true;
  if (price === 'lt800') return p.price < 800;
  if (price === '800-1400') return p.price >= 800 && p.price <= 1400;
  if (price === '1400-2000') return p.price > 1400 && p.price <= 2000;
  return p.price > 2000;
}

function CategoryView({ slug }: { slug: string }) {
  const info = CATEGORY_META[slug];
  const [allProducts, setAllProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [cartOpen, setCartOpen] = useState(false);

  // filters
  const [sort, setSort] = useState<SortKey>('default');
  const [area, setArea] = useState<AreaFilter>('all');
  const [price, setPrice] = useState<PriceFilter>('all');
  const [brand, setBrand] = useState<string>('all');
  const [inStockOnly, setInStockOnly] = useState(false);
  const showBrandFilter = slug === 'split-systems';

  useEffect(() => {
    fetch('/api/products')
      .then(r => r.json())
      .then((all: Product[]) => {
        let filtered: Product[] = all;
        if (info.brand) {
          filtered = all.filter(p => p.brand === info.brand);
        } else if (info.categoryIds) {
          filtered = all.filter(p => info.categoryIds!.includes(p.categoryId));
        }
        setAllProducts(filtered);
        setLoading(false);
      });
  }, [slug]);

  const products = React.useMemo(() => {
    let list = allProducts
      .filter(p => matchesArea(p, area))
      .filter(p => matchesPrice(p, price))
      .filter(p => !inStockOnly || p.inStock)
      .filter(p => brand === 'all' || p.brand === brand);

    if (sort === 'price-asc') list = [...list].sort((a, b) => a.price - b.price);
    else if (sort === 'price-desc') list = [...list].sort((a, b) => b.price - a.price);
    return list;
  }, [allProducts, sort, area, price, brand, inStockOnly]);

  const activeCount = [area !== 'all', price !== 'all', brand !== 'all', inStockOnly].filter(Boolean).length;

  const resetFilters = () => {
    setArea('all'); setPrice('all'); setBrand('all'); setInStockOnly(false); setSort('default');
  };

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

        {/* Filter bar */}
        <div className="bg-white rounded-2xl border border-border p-4 mb-5 space-y-4">

          {/* Row 1: sort + in-stock */}
          <div className="flex flex-wrap items-center gap-3 justify-between">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-sm font-semibold text-foreground">Сортировка:</span>
              {(['default', 'price-asc', 'price-desc'] as SortKey[]).map(s => (
                <button
                  key={s}
                  onClick={() => setSort(s)}
                  className={`text-sm px-3 py-1.5 rounded-lg border transition-colors ${sort === s ? 'bg-crimson-700 text-white border-crimson-700' : 'border-border text-muted-foreground hover:border-crimson-300 hover:text-foreground'}`}
                >
                  {s === 'default' ? 'По умолчанию' : s === 'price-asc' ? 'Цена ↑' : 'Цена ↓'}
                </button>
              ))}
            </div>
            <label className="flex items-center gap-2 cursor-pointer select-none">
              <input
                type="checkbox"
                checked={inStockOnly}
                onChange={e => setInStockOnly(e.target.checked)}
                className="w-4 h-4 accent-crimson-700 cursor-pointer"
              />
              <span className="text-sm text-foreground font-medium">Только в наличии</span>
            </label>
          </div>

          {/* Row 2: area filter */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-sm font-semibold text-foreground shrink-0">Площадь:</span>
            {AREA_FILTERS.map(f => (
              <button
                key={f.key}
                onClick={() => setArea(f.key)}
                className={`text-sm px-3 py-1.5 rounded-lg border transition-colors ${area === f.key ? 'bg-crimson-700 text-white border-crimson-700' : 'border-border text-muted-foreground hover:border-crimson-300 hover:text-foreground'}`}
              >
                {f.label}
              </button>
            ))}
          </div>

          {/* Row 3: price filter */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-sm font-semibold text-foreground shrink-0">Цена:</span>
            {PRICE_FILTERS.map(f => (
              <button
                key={f.key}
                onClick={() => setPrice(f.key)}
                className={`text-sm px-3 py-1.5 rounded-lg border transition-colors ${price === f.key ? 'bg-crimson-700 text-white border-crimson-700' : 'border-border text-muted-foreground hover:border-crimson-300 hover:text-foreground'}`}
              >
                {f.label}
              </button>
            ))}
          </div>

          {/* Row 4: brand filter (only on split-systems) */}
          {showBrandFilter && (
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-sm font-semibold text-foreground shrink-0">Бренд:</span>
              <button
                onClick={() => setBrand('all')}
                className={`text-sm px-3 py-1.5 rounded-lg border transition-colors ${brand === 'all' ? 'bg-crimson-700 text-white border-crimson-700' : 'border-border text-muted-foreground hover:border-crimson-300 hover:text-foreground'}`}
              >
                Все
              </button>
              {ALL_BRANDS.map(b => (
                <button
                  key={b}
                  onClick={() => setBrand(b)}
                  className={`text-sm px-3 py-1.5 rounded-lg border transition-colors ${brand === b ? 'bg-crimson-700 text-white border-crimson-700' : 'border-border text-muted-foreground hover:border-crimson-300 hover:text-foreground'}`}
                >
                  {b}
                </button>
              ))}
            </div>
          )}

          {/* Reset */}
          {activeCount > 0 && (
            <div className="flex items-center gap-3 pt-1 border-t border-border">
              <span className="text-sm text-muted-foreground">Активных фильтров: <strong className="text-crimson-700">{activeCount}</strong></span>
              <button onClick={resetFilters} className="text-sm text-crimson-700 hover:underline font-medium">
                Сбросить все
              </button>
            </div>
          )}
        </div>

        {/* Results count */}
        {!loading && (
          <p className="text-sm text-muted-foreground mb-4">
            Найдено: <strong className="text-foreground">{products.length}</strong> товаров
          </p>
        )}

        {loading ? (
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3 md:gap-4">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="h-72 bg-zinc-100 rounded-2xl animate-pulse" />
            ))}
          </div>
        ) : products.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-lg font-semibold text-foreground mb-2">Ничего не найдено</p>
            <p className="text-muted-foreground mb-5 text-sm">Попробуйте изменить фильтры</p>
            <button onClick={resetFilters} className="bg-crimson-gradient text-white px-6 py-2.5 rounded-xl font-semibold hover:opacity-90 transition-opacity">
              Сбросить фильтры
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3 md:gap-4">
            {products.map(p => (
              <ProductCard key={p.id} product={p} onCartAdd={() => setCartOpen(true)} />
            ))}
          </div>
        )}

        {info.seoText && (
          <div className="mt-12 bg-zinc-50 rounded-2xl border border-border p-6 md:p-8">
            <h2 className="text-xl font-bold text-foreground mb-4">{info.seoText.h2}</h2>
            <div className="space-y-3">
              {info.seoText.paragraphs.map((p, i) => (
                <p key={i} className="text-sm text-muted-foreground leading-relaxed">{p}</p>
              ))}
            </div>
          </div>
        )}
      </main>
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
