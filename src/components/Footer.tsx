import React from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

export default function Footer() {
  return (
    <footer className="bg-zinc-900 text-zinc-300 border-t border-zinc-800 mt-16">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8">
                <AppImage
                  src="/assets/images/Image__1_-1777225844930.png"
                  alt="AirComfort логотип"
                  width={32}
                  height={32}
                  className="object-contain"
                />
              </div>
              <span className="font-display text-lg font-bold text-white">AirComfort</span>
            </div>
            <p className="text-sm text-zinc-400 leading-relaxed mb-4">
              Продажа кондиционеров в Гомеле. Electrolux, Ballu, Haier, LG, Mitsudai — официальная гарантия производителя.
            </p>
            <a href="tel:+375291050694" onClick={e => { e.preventDefault(); window.open('tel:+375291050694'); }} className="flex items-center gap-2 text-white font-semibold hover:text-crimson-300 transition-colors">
              <Icon name="PhoneIcon" size={16} className="text-crimson-400" />
              +375 29 105-06-94
            </a>
            <p className="text-xs text-zinc-500 mt-1">с 9:00 до 18:00, пн–сб</p>
          </div>

          {/* Каталог */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">Каталог</h4>
            <ul className="space-y-2.5">
              {[
                { name: 'Electrolux', slug: 'split-electrolux' },
                { name: 'Ballu', slug: 'split-ballu' },
                { name: 'Haier', slug: 'split-haier' },
                { name: 'LG', slug: 'split-lg' },
                { name: 'Mitsudai', slug: 'split-mitsudai' },
                { name: 'King Home', slug: 'split-kinghome' },
                { name: 'Мобильные', slug: 'mobile' },
              ]?.map(item => (
                <li key={item.slug}>
                  <Link href={`/products/${item.slug}`} className="text-sm text-zinc-400 hover:text-white transition-colors hover:translate-x-1 inline-block duration-200">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Компания */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">Компания</h4>
            <ul className="space-y-2.5">
              {[
                { label: 'Кондиционеры в Гомеле', href: '/konditsionery-gomel' },
                { label: 'Услуги', href: '/services' },
                { label: 'О нас', href: '/about' },
                { label: 'Все статьи', href: '/articles' },
                { label: 'Реквизиты', href: '/requisites' },
              ].map(item => (
                <li key={item.label}>
                  <Link href={item.href} className="text-sm text-zinc-400 hover:text-white transition-colors hover:translate-x-1 inline-block duration-200">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <p className="text-xs text-zinc-500 mb-2">Самовывоз:</p>
              <p className="text-sm text-zinc-400 flex items-start gap-1.5">
                <Icon name="PhoneIcon" size={14} className="text-crimson-400 mt-0.5 shrink-0" />
                уточняйте адрес по телефону
              </p>
            </div>
          </div>

          {/* Статьи */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">Статьи</h4>
            <ul className="space-y-2.5">
              {[
                { label: 'Установка кондиционера', href: '/articles/tsena-ustanovki-konditsionera' },
                { label: 'Кондиционеры Electrolux', href: '/articles/konditsioner-electrolux-gomel' },
                { label: 'Кондиционеры Ballu', href: '/articles/konditsioner-ballu-gomel' },
                { label: 'Кондиционеры Haier', href: '/articles/konditsioner-haier-gomel' },
                { label: 'Кондиционер для гостиной', href: '/articles/konditsioner-dlya-gostinoy' },
                { label: 'Мультисплит в Гомеле', href: '/articles/mulitsplit-gomel' },
              ].map(item => (
                <li key={item.label}>
                  <Link href={item.href} className="text-sm text-zinc-400 hover:text-white transition-colors hover:translate-x-1 inline-block duration-200">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-zinc-800 pt-6">
          <p className="text-xs text-zinc-500">© 2026 AirComfort. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
}