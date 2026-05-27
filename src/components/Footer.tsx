import React from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

export default function Footer() {
  return (
    <footer className="bg-zinc-950 text-zinc-400 border-t border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 pt-14 pb-6">

        {/* Top grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-9 h-9 shrink-0">
                <AppImage
                  src="/assets/images/Image__1_-1777225844930.png"
                  alt="AirComfort логотип"
                  width={36}
                  height={36}
                  className="object-contain"
                />
              </div>
              <span className="font-display text-xl font-bold text-white tracking-tight">AirComfort</span>
            </div>
            <p className="text-sm text-zinc-400 leading-relaxed mb-6 max-w-sm">
              Продажа и установка кондиционеров в Гомеле с 2019 года. Официальный дилер Electrolux,
              Ballu, Haier, LG, Mitsudai, King Home, Gree — гарантия производителя на каждый товар.
            </p>

            {/* Contact block */}
            <div className="space-y-3">
              <a
                href="tel:+375291050694"
                className="flex items-center gap-3 group w-fit"
              >
                <div className="w-9 h-9 rounded-xl bg-zinc-800 group-hover:bg-crimson-700 flex items-center justify-center transition-colors duration-200">
                  <Icon name="PhoneIcon" size={16} className="text-crimson-400 group-hover:text-white" />
                </div>
                <div>
                  <p className="text-white font-bold text-base leading-none group-hover:text-crimson-300 transition-colors">+375 29 105-06-94</p>
                  <p className="text-xs text-zinc-500 mt-1">пн–сб, 9:00–18:00</p>
                </div>
              </a>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-zinc-800 flex items-center justify-center">
                  <Icon name="PhoneIcon" size={16} className="text-zinc-500" />
                </div>
                <div>
                  <p className="text-sm text-zinc-400">Самовывоз — адрес по телефону</p>
                  <p className="text-xs text-zinc-600">Гомель и Гомельская область</p>
                </div>
              </div>
            </div>
          </div>

          {/* Каталог */}
          <div>
            <h4 className="text-white font-semibold text-xs uppercase tracking-widest mb-5">Каталог</h4>
            <ul className="space-y-3">
              {[
                { name: 'Electrolux', slug: 'split-electrolux' },
                { name: 'Ballu', slug: 'split-ballu' },
                { name: 'Haier', slug: 'split-haier' },
                { name: 'LG', slug: 'split-lg' },
                { name: 'Mitsudai', slug: 'split-mitsudai' },
                { name: 'King Home', slug: 'split-kinghome' },
                { name: 'Мобильные', slug: 'mobile' },
              ].map(item => (
                <li key={item.slug}>
                  <Link
                    href={`/products/${item.slug}`}
                    className="text-sm text-zinc-400 hover:text-white transition-colors duration-150 flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-zinc-600 group-hover:bg-crimson-500 transition-colors shrink-0" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Компания */}
          <div>
            <h4 className="text-white font-semibold text-xs uppercase tracking-widest mb-5">Компания</h4>
            <ul className="space-y-3">
              {[
                { label: 'Кондиционеры в Гомеле', href: '/konditsionery-gomel' },
                { label: 'Услуги', href: '/services' },
                { label: 'О нас', href: '/about' },
                { label: 'Все статьи', href: '/articles' },
                { label: 'Реквизиты', href: '/requisites' },
              ].map(item => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-sm text-zinc-400 hover:text-white transition-colors duration-150 flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-zinc-600 group-hover:bg-crimson-500 transition-colors shrink-0" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-zinc-800 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-zinc-600">© 2026 AirComfort. Все права защищены.</p>
          <p className="text-xs text-zinc-700">Продажа и установка кондиционеров в Гомеле</p>
        </div>

      </div>
    </footer>
  );
}
