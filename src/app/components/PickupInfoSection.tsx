import React from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

const FEATURES = [
  { icon: 'TruckIcon',        title: 'Быстрый самовывоз',   desc: 'Забирайте оборудование в удобное время — уточняйте наличие и время по телефону' },
  { icon: 'PhoneIcon',        title: 'Поддержка 7 дней',    desc: 'Наши специалисты готовы помочь с 9:00 до 18:00 ежедневно' },
  { icon: 'ShieldCheckIcon',  title: 'Официальная гарантия', desc: 'Гарантия производителя на всё оборудование. Сервисные центры в Беларуси' },
  { icon: 'CurrencyDollarIcon', title: 'Актуальные цены',   desc: 'Розничные цены в белорусских рублях по актуальному курсу' },
];

export default function PickupInfoSection() {
  return (
    <section className="py-10 bg-gradient-to-br from-crimson-700 to-crimson-800">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">Кондиционеры с установкой в Гомеле</h2>
          <p className="text-crimson-200 text-sm md:text-base">Продаём и устанавливаем — Electrolux, Ballu, Haier, LG, Mitsudai</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {FEATURES.map(f => (
            <div key={f.title} className="bg-white/10 backdrop-blur-sm rounded-2xl p-5 border border-white/20 hover:bg-white/15 transition-colors group">
              <div className="w-11 h-11 rounded-xl bg-white/20 flex items-center justify-center mb-4 group-hover:bg-white/30 transition-colors">
                <Icon name={f.icon as 'TruckIcon'} size={22} className="text-white" />
              </div>
              <h3 className="text-white font-semibold text-base mb-1.5">{f.title}</h3>
              <p className="text-crimson-100 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 bg-white text-crimson-700 px-8 py-3 rounded-xl font-bold text-sm hover:bg-crimson-50 transition-colors shadow-lg"
          >
            <Icon name="WrenchScrewdriverIcon" size={18} />
            Узнать стоимость установки
          </Link>
        </div>

      </div>
    </section>
  );
}
