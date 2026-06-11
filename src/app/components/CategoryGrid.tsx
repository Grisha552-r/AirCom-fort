import React from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';
import { CATEGORIES } from '@/lib/categories';

const GRID_CATS = [
  { id: 'split-systems', colSpan: 'md:col-span-2 md:row-span-2', size: 'large' },
  { id: 'split-ballu',   colSpan: 'md:col-span-1', size: 'medium' },
  { id: 'split-electrolux', colSpan: 'md:col-span-1', size: 'medium' },
  { id: 'multi-split',   colSpan: 'md:col-span-1', size: 'medium' },
  { id: 'semi-pro',      colSpan: 'md:col-span-1', size: 'medium' },
  { id: 'mobile',        colSpan: 'md:col-span-1', size: 'medium' },
  { id: 'split-toshiba', colSpan: 'md:col-span-1', size: 'medium' },
  { id: 'accessories',   colSpan: 'md:col-span-2', size: 'medium' },
];

export default function CategoryGrid() {
  const categoryMap = Object.fromEntries(CATEGORIES.map(c => [c.id, c]));

  return (
    <section className="py-10 bg-zinc-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-bold text-foreground">Каталог оборудования</h2>
            <p className="text-sm text-muted-foreground mt-0.5">Кондиционеры и климатическая техника со склада в Гомеле</p>
          </div>
          <Link href="/products" className="text-sm font-medium text-crimson-700 hover:text-crimson-800 flex items-center gap-1">
            Все категории →
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 auto-rows-[140px] sm:auto-rows-[160px] lg:auto-rows-[190px]">
          {GRID_CATS.map(({ id, colSpan, size }) => {
            const cat = categoryMap[id];
            if (!cat) return null;
            return (
              <Link
                key={id}
                href={`/products/${cat.slug}`}
                className={`relative rounded-2xl overflow-hidden group shadow-card hover:shadow-card-hover transition-shadow duration-300 ${colSpan}`}
              >
                <AppImage
                  src={cat.image || '/assets/images/no_image.png'}
                  alt={`${cat.name} — склад Гомель`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 640px) 50vw, 25vw"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${size === 'large' ? 'from-black/70 via-black/30' : 'from-black/65 via-black/20'} to-transparent`} />
                <div className="absolute inset-0 flex flex-col justify-end p-4">
                  <span className={`text-white font-bold leading-tight ${size === 'large' ? 'text-xl md:text-2xl' : 'text-sm md:text-base'}`}>
                    {cat.name}
                  </span>
                  {cat.productCount ? (
                    <span className="text-white/60 text-xs mt-0.5 group-hover:text-white/90 transition-colors">
                      {cat.productCount} позиций →
                    </span>
                  ) : (
                    <span className="text-white/60 text-xs mt-0.5">Смотреть →</span>
                  )}
                </div>
                <div className="absolute inset-0 bg-crimson-800/0 group-hover:bg-crimson-800/10 transition-colors duration-300" />
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
