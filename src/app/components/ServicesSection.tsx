import React from 'react';
import Link from 'next/link';

const SERVICES = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
      </svg>
    ),
    title: 'Монтаж кондиционера',
    desc: 'Установка «под ключ» за 2–4 часа: кронштейны, медная трасса, вакуумирование, пусконаладка — всё включено.',
    price: 'от 400 р.',
    href: '/services',
    accent: 'crimson',
    features: ['Выезд в день заказа', 'Трасса 3 м в комплекте', 'Гарантия на монтаж 1 год'],
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
      </svg>
    ),
    title: 'Обслуживание и чистка',
    desc: 'Профессиональная чистка фильтров и теплообменника, дезинфекция, заправка фреоном — восстановим производительность.',
    price: 'от 100 р.',
    href: '/articles/obsluzhivanie-konditsionera-gomel',
    accent: 'sky',
    features: ['Диагностика бесплатно', 'Заправка фреоном от 60 р.', 'Выезд в тот же день'],
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
    title: 'Гарантийный ремонт',
    desc: 'Ремонт и техническое обслуживание кондиционеров всех марок. Быстрая диагностика, оригинальные запчасти.',
    price: 'Бесплатно*',
    href: '/services',
    accent: 'emerald',
    features: ['Гарантия производителя', 'Все бренды и модели', '*При наличии гарантии'],
  },
];

const accentMap = {
  crimson: {
    bg: 'bg-crimson-50',
    icon: 'text-crimson-700',
    badge: 'bg-crimson-700 text-white',
    border: 'border-crimson-200 hover:border-crimson-400',
    feat: 'text-crimson-600',
    btn: 'text-crimson-700 hover:text-crimson-900',
    dot: 'bg-crimson-400',
  },
  sky: {
    bg: 'bg-sky-50',
    icon: 'text-sky-600',
    badge: 'bg-sky-600 text-white',
    border: 'border-sky-200 hover:border-sky-400',
    feat: 'text-sky-600',
    btn: 'text-sky-700 hover:text-sky-900',
    dot: 'bg-sky-400',
  },
  emerald: {
    bg: 'bg-emerald-50',
    icon: 'text-emerald-700',
    badge: 'bg-emerald-600 text-white',
    border: 'border-emerald-200 hover:border-emerald-400',
    feat: 'text-emerald-600',
    btn: 'text-emerald-700 hover:text-emerald-900',
    dot: 'bg-emerald-400',
  },
};

export default function ServicesSection() {
  return (
    <section className="py-14 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-10">
          <p className="text-xs font-bold text-crimson-600 uppercase tracking-widest mb-2">Что мы делаем</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Услуги AirComfort</h2>
          <p className="text-muted-foreground mt-3 max-w-xl mx-auto">
            Всё необходимое для климатического комфорта — от продажи до обслуживания
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {SERVICES.map(service => {
            const a = accentMap[service.accent as keyof typeof accentMap];
            return (
              <div
                key={service.title}
                className={`relative bg-white rounded-2xl border-2 ${a.border} p-6 flex flex-col gap-4 transition-all duration-300 hover:shadow-lg group cursor-pointer`}
              >
                <div className="flex items-start justify-between">
                  <div className={`w-14 h-14 rounded-2xl ${a.bg} flex items-center justify-center ${a.icon} transition-transform duration-300 group-hover:scale-110`}>
                    {service.icon}
                  </div>
                  <span className={`${a.badge} text-xs font-bold px-3 py-1.5 rounded-xl`}>
                    {service.price}
                  </span>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-foreground mb-2">{service.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{service.desc}</p>
                </div>

                <ul className="space-y-1.5 mt-auto">
                  {service.features.map(f => (
                    <li key={f} className="flex items-center gap-2 text-xs text-muted-foreground">
                      <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${a.dot}`} />
                      {f}
                    </li>
                  ))}
                </ul>

                <Link
                  href={service.href}
                  className={`mt-2 flex items-center gap-1.5 text-sm font-semibold ${a.btn} transition-colors`}
                >
                  Подробнее
                  <svg viewBox="0 0 16 16" fill="none" className="w-4 h-4 transition-transform group-hover:translate-x-1" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8h10M9 4l4 4-4 4" />
                  </svg>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
