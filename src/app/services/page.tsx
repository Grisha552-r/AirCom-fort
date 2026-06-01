'use client';
import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CartDrawer from '@/components/CartDrawer';
import Icon from '@/components/ui/AppIcon';
import Link from 'next/link';
import { useCart } from '@/lib/useStore';

const SERVICES = [
  {
    id: 'install',
    icon: 'WrenchScrewdriverIcon',
    title: 'Установка',
    subtitle: 'кондиционеров',
    description: 'Профессиональный монтаж кондиционеров любого типа с гарантией качества работы',
    price: 'от 400 р.',
    color: 'crimson',
    features: [
      'Монтаж внутреннего и наружного блоков',
      'Прокладка трассы (3 м включено)',
      'Вакуумирование системы',
      'Пусконаладочные работы',
      'Гарантия на работы 1 год',
    ],
  },
  {
    id: 'service',
    icon: 'Cog6ToothIcon',
    title: 'Обслуживание',
    subtitle: 'и ремонт',
    description: 'Регулярное ТО, чистка, дезинфекция, заправка фреоном и ремонт',
    price: 'от 100 р.',
    color: 'emerald',
    features: [
      'Чистка и дезинфекция фильтров',
      'Проверка уровня фреона',
      'Заправка фреоном',
      'Диагностика и ремонт',
      'Рекомендуется раз в год',
    ],
  },
  {
    id: 'dismantle',
    icon: 'ArrowUturnLeftIcon',
    title: 'Демонтаж',
    subtitle: 'оборудования',
    description: 'Аккуратный демонтаж старых кондиционеров с сохранением стен',
    price: 'от 100 р.',
    color: 'zinc',
    features: [
      'Снятие внутреннего блока',
      'Снятие наружного блока',
      'Сохранность стен и отделки',

      'Подготовка места для новой установки',
    ],
  },
];

const AREA_OPTIONS = [
  { label: 'до 30 м²', price: 400 },
  { label: 'до 35 м²', price: 430 },
  { label: 'до 50 м²', price: 500 },
  { label: 'до 70 м²', price: 550 },
];

const SERVICE_COLOR: Record<string, string> = {
  crimson: 'bg-crimson-50 border-crimson-200 text-crimson-700',
  emerald: 'bg-emerald-50 border-emerald-200 text-emerald-700',
  zinc: 'bg-zinc-100 border-zinc-200 text-zinc-700',
};
const SERVICE_ICON_BG: Record<string, string> = {
  crimson: 'bg-crimson-100 text-crimson-700',
  emerald: 'bg-emerald-100 text-emerald-700',
  zinc: 'bg-zinc-200 text-zinc-700',
};
const SERVICE_BTN: Record<string, string> = {
  crimson: 'bg-crimson-gradient shadow-crimson',
  emerald: 'bg-emerald-500 hover:bg-emerald-600',
  zinc: 'bg-zinc-700 hover:bg-zinc-800',
};

export default function ServicesPage() {
  const [cartOpen, setCartOpen] = useState(false);
  const { addToCart } = useCart();
  const [added, setAdded] = useState(false);

  // Calculator state
  const [serviceType, setServiceType] = useState<'install' | 'service' | 'dismantle'>('install');
  const [areaIdx, setAreaIdx] = useState(0);
  const [traceLen, setTraceLen] = useState(3);
  const [viaBalcony, setViaBalcony] = useState(false);
  const [removal] = useState(false);
  const [maintenance, setMaintenance] = useState(false);

  const basePrice = serviceType === 'install'
    ? AREA_OPTIONS[areaIdx].price
    : 100;
  const extraTrace = serviceType === 'install' ? Math.max(0, traceLen - 3) * 50 : 0;
  const extraBalcony = viaBalcony ? 50 : 0;
  const extraMaintenance = serviceType !== 'service' && maintenance ? 100 : 0;
  const total = basePrice + extraTrace + extraBalcony + extraMaintenance;

  const SERVICE_LABELS = { install: 'Установка кондиционера', service: 'Обслуживание кондиционера', dismantle: 'Демонтаж кондиционера' };

  const handleAddToCart = () => {
    const extras: string[] = [];
    if (serviceType === 'install') extras.push(AREA_OPTIONS[areaIdx].label, `трасса ${traceLen} м`);
    if (viaBalcony) extras.push('через балкон');

    if (extraMaintenance) extras.push('обслуживание');
    const name = `${SERVICE_LABELS[serviceType]}${extras.length ? ` (${extras.join(', ')})` : ''}`;
    addToCart({ productId: `service-${serviceType}-${Date.now()}`, productName: name, price: total, quantity: 1, image: '/assets/images/no_image.png' });
    setAdded(true);
    setCartOpen(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header onCartOpen={() => setCartOpen(true)} />
      <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} />

      <main>
        {/* Hero */}
        <div className="bg-crimson-gradient text-white">
          <div className="max-w-7xl mx-auto px-4 py-14">
            <nav className="flex items-center gap-2 text-sm text-crimson-200 mb-6">
              <Link href="/" className="hover:text-white transition-colors">Главная</Link>
              <Icon name="ChevronRightIcon" size={14} />
              <span className="text-white font-medium">Услуги</span>
            </nav>
            <div className="max-w-2xl">
              <h1 className="text-4xl font-bold mb-4 leading-tight">Установка кондиционеров<br />в Гомеле</h1>
              <p className="text-crimson-100 text-lg mb-6">Продаём кондиционеры с установкой под ключ. Монтаж, техническое обслуживание и демонтаж. Гарантия на все виды работ 1 год.</p>
              <div className="flex flex-wrap gap-4 text-sm">
                <div className="flex items-center gap-2 bg-white/15 rounded-xl px-4 py-2">
                  <Icon name="ShieldCheckIcon" size={16} />
                  Гарантия 1 год
                </div>
                <div className="flex items-center gap-2 bg-white/15 rounded-xl px-4 py-2">
                  <Icon name="ClockIcon" size={16} />
                  Выезд в день заказа
                </div>
                <div className="flex items-center gap-2 bg-white/15 rounded-xl px-4 py-2">
                  <Icon name="CurrencyDollarIcon" size={16} />
                  Фиксированная цена
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Service cards */}
        <div className="max-w-7xl mx-auto px-4 py-14">
          <h2 className="text-2xl font-bold text-foreground mb-8 text-center">Наши услуги</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {SERVICES.map(svc => (
              <div key={svc.id} className={`rounded-2xl border-2 p-6 flex flex-col ${SERVICE_COLOR[svc.color]}`}>
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-5 ${SERVICE_ICON_BG[svc.color]}`}>
                  <Icon name={svc.icon} size={28} />
                </div>
                <div className="mb-1">
                  <span className="text-xl font-bold">{svc.title}</span>{' '}
                  <span className="text-base font-medium opacity-70">{svc.subtitle}</span>
                </div>
                <p className="text-sm opacity-80 mb-5 leading-relaxed">{svc.description}</p>
                <ul className="space-y-2 mb-6 flex-1">
                  {svc.features.map(f => (
                    <li key={f} className="flex items-start gap-2 text-sm">
                      <Icon name="CheckCircleIcon" size={16} className="shrink-0 mt-0.5 opacity-70" />
                      {f}
                    </li>
                  ))}
                </ul>
                <div className="mt-auto pt-4 border-t border-current/20 text-center">
                  <span className="text-2xl font-bold">{svc.price}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Calculator */}
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-2">Калькулятор стоимости</h2>
              <p className="text-muted-foreground">Рассчитайте примерную стоимость работ онлайн</p>
            </div>

            <div className="bg-white rounded-3xl border border-border shadow-xl overflow-hidden">
              {/* Step 1 — service type */}
              <div className="p-6 border-b border-border">
                <p className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-crimson-700 text-white text-xs flex items-center justify-center font-bold">1</span>
                  Выберите услугу
                </p>
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { id: 'install', label: 'Установка', icon: 'WrenchScrewdriverIcon' },
                    { id: 'service', label: 'Обслуживание', icon: 'Cog6ToothIcon' },
                    { id: 'dismantle', label: 'Демонтаж', icon: 'ArrowUturnLeftIcon' },
                  ].map(opt => (
                    <button
                      key={opt.id}
                      onClick={() => setServiceType(opt.id as typeof serviceType)}
                      className={`flex flex-col items-center gap-2 p-4 rounded-2xl border-2 transition-all font-medium text-sm ${
                        serviceType === opt.id
                          ? 'border-crimson-600 bg-crimson-50 text-crimson-700'
                          : 'border-border text-muted-foreground hover:border-crimson-200 hover:bg-crimson-50/50'
                      }`}
                    >
                      <Icon name={opt.icon} size={22} />
                      {opt.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 2 — area (only for install) */}
              {serviceType === 'install' && (
                <div className="p-6 border-b border-border">
                  <p className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-crimson-700 text-white text-xs flex items-center justify-center font-bold">2</span>
                    Площадь помещения
                  </p>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {AREA_OPTIONS.map((opt, i) => (
                      <button
                        key={i}
                        onClick={() => setAreaIdx(i)}
                        className={`flex flex-col items-center py-3 px-2 rounded-2xl border-2 transition-all ${
                          areaIdx === i
                            ? 'border-crimson-600 bg-crimson-50 text-crimson-700'
                            : 'border-border text-muted-foreground hover:border-crimson-200'
                        }`}
                      >
                        <span className="font-bold text-base">{opt.label}</span>
                        <span className="text-sm font-semibold mt-0.5">{opt.price} р.</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Step 3 — trace length (only for install) */}
              {serviceType === 'install' && (
                <div className="p-6 border-b border-border">
                  <p className="text-sm font-semibold text-foreground mb-1 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-crimson-700 text-white text-xs flex items-center justify-center font-bold">3</span>
                    Длина трассы
                    <span className="text-xs text-muted-foreground font-normal">(3 м включено, далее +50 р./м)</span>
                  </p>
                  <div className="flex items-center gap-4 mt-3">
                    <button
                      onClick={() => setTraceLen(l => Math.max(3, l - 1))}
                      className="w-11 h-11 rounded-xl border border-border flex items-center justify-center text-xl font-bold hover:bg-muted transition-colors"
                    >−</button>
                    <div className="text-center">
                      <span className="text-3xl font-bold text-foreground">{traceLen}</span>
                      <span className="text-muted-foreground ml-1 text-sm">м</span>
                    </div>
                    <button
                      onClick={() => setTraceLen(l => l + 1)}
                      className="w-11 h-11 rounded-xl border border-border flex items-center justify-center text-xl font-bold hover:bg-muted transition-colors"
                    >+</button>
                    {traceLen > 3 && (
                      <span className="text-sm text-crimson-700 font-semibold">+{(traceLen - 3) * 50} р.</span>
                    )}
                  </div>
                </div>
              )}

              {/* Step 4 — add-ons */}
              <div className="p-6 border-b border-border">
                <p className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-crimson-700 text-white text-xs flex items-center justify-center font-bold">
                    {serviceType === 'install' ? '4' : '2'}
                  </span>
                  Дополнительно
                </p>
                <div className="space-y-3">
                  {/* Via balcony */}
                  <label className="flex items-center justify-between p-4 rounded-2xl border-2 cursor-pointer transition-all hover:border-crimson-200 group" style={{ borderColor: viaBalcony ? 'var(--crimson-600, #b91c1c)' : undefined, backgroundColor: viaBalcony ? 'rgb(254 242 242)' : undefined }}>
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${viaBalcony ? 'bg-crimson-100' : 'bg-zinc-100'}`}>
                        <Icon name="HomeModernIcon" size={20} className={viaBalcony ? 'text-crimson-700' : 'text-zinc-500'} />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-foreground">Прокладка через балкон</p>
                        <p className="text-xs text-muted-foreground">Усложнённый маршрут трассы</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-sm font-bold text-crimson-700">+50 р.</span>
                      <input type="checkbox" checked={viaBalcony} onChange={e => setViaBalcony(e.target.checked)} className="w-5 h-5 accent-crimson-700 cursor-pointer" />
                    </div>
                  </label>


                  {/* Maintenance (only when not already chosen as main) */}
                  {serviceType !== 'service' && (
                    <label className="flex items-center justify-between p-4 rounded-2xl border-2 cursor-pointer transition-all hover:border-crimson-200" style={{ borderColor: maintenance ? 'var(--crimson-600, #b91c1c)' : undefined, backgroundColor: maintenance ? 'rgb(254 242 242)' : undefined }}>
                      <div className="flex items-center gap-3">
                        <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${maintenance ? 'bg-crimson-100' : 'bg-zinc-100'}`}>
                          <Icon name="Cog6ToothIcon" size={20} className={maintenance ? 'text-crimson-700' : 'text-zinc-500'} />
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-foreground">Обслуживание кондиционера</p>
                          <p className="text-xs text-muted-foreground">Чистка, дезинфекция, проверка фреона</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-sm font-bold text-crimson-700">+100 р.</span>
                        <input type="checkbox" checked={maintenance} onChange={e => setMaintenance(e.target.checked)} className="w-5 h-5 accent-crimson-700 cursor-pointer" />
                      </div>
                    </label>
                  )}
                </div>
              </div>

              {/* Result */}
              <div className="p-6 bg-zinc-50">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Итоговая стоимость</p>
                    <div className="flex items-baseline gap-2">
                      <span className="text-4xl font-bold text-crimson-700">{total}</span>
                      <span className="text-xl font-semibold text-foreground">р.</span>
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">Фиксированная цена, без скрытых доплат</p>
                  </div>
                  <div className="text-right space-y-1 text-sm text-muted-foreground">
                    <p>База: <span className="font-semibold text-foreground">{basePrice} р.</span></p>
                    {extraTrace > 0 && <p>Трасса: <span className="font-semibold text-crimson-700">+{extraTrace} р.</span></p>}
                    {extraBalcony > 0 && <p>Балкон: <span className="font-semibold text-crimson-700">+{extraBalcony} р.</span></p>}

                    {extraMaintenance > 0 && <p>Обслуживание: <span className="font-semibold text-crimson-700">+{extraMaintenance} р.</span></p>}
                  </div>
                </div>
                <button
                  onClick={handleAddToCart}
                  className={`w-full py-4 rounded-2xl font-bold text-base flex items-center justify-center gap-3 transition-all shadow-crimson ${added ? 'bg-emerald-500 text-white' : 'bg-crimson-gradient text-white hover:opacity-90'}`}
                >
                  <Icon name={added ? 'CheckIcon' : 'ShoppingCartIcon'} size={20} />
                  {added ? 'Добавлено в корзину!' : 'Добавить в корзину'}
                </button>
                <p className="text-xs text-muted-foreground text-center mt-3">Звоним с 9:00 до 18:00 пн–сб · +375 29 105-06-94</p>
              </div>
            </div>
          </div>
        </div>
        {/* Installation steps */}
        <div className="bg-zinc-50 border-y border-border py-14">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-2xl font-bold text-foreground mb-3 text-center">Этапы установки кондиционера</h2>
            <p className="text-muted-foreground text-center mb-10 max-w-xl mx-auto">Монтаж выполняется по ГОСТ, всё оборудование и расходники включены в стоимость</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {[
                { step: '01', icon: 'ClipboardDocumentCheckIcon', title: 'Замер и разметка', desc: 'Мастер определяет оптимальное место установки внутреннего блока, размечает трассу и бурит отверстие в стене.' },
                { step: '02', icon: 'HomeModernIcon', title: 'Монтаж внутреннего блока', desc: 'Крепим пластину, навешиваем внутренний блок, подключаем трубки и электрокабель. Прокладываем трассу.' },
                { step: '03', icon: 'BuildingOffice2Icon', title: 'Монтаж наружного блока', desc: 'Устанавливаем кронштейны на стену, монтируем наружный блок, подключаем трубки и кабель снаружи.' },
                { step: '04', icon: 'BoltIcon', title: 'Пуско-наладка', desc: 'Вакуумируем систему, проверяем герметичность, запускаем кондиционер и тестируем все режимы работы.' },
              ].map(s => (
                <div key={s.step} className="bg-white rounded-2xl border border-border p-6 relative hover:border-crimson-200 hover:shadow-md transition-all">
                  <span className="absolute top-4 right-5 text-4xl font-black text-zinc-100 leading-none select-none">{s.step}</span>
                  <div className="w-12 h-12 rounded-2xl bg-crimson-50 flex items-center justify-center mb-4">
                    <Icon name={s.icon} size={24} className="text-crimson-700" />
                  </div>
                  <h3 className="font-bold text-foreground mb-2">{s.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Why us + geography */}
        <div className="max-w-7xl mx-auto px-4 py-14">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

            {/* Why us */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-6">Почему выбирают AirComfort</h2>
              <div className="space-y-4">
                {[
                  { icon: 'ShieldCheckIcon', title: 'Гарантия на монтаж 1 год', desc: 'Если что-то выйдет из строя по нашей вине — устраним бесплатно. Официальные расходники и сертифицированные мастера.' },
                  { icon: 'ClockIcon', title: 'Выезд в день заказа', desc: 'Принимаем заявки с 9:00 до 18:00. Мастер приезжает в удобное для вас время, часто в тот же день.' },
                  { icon: 'CurrencyDollarIcon', title: 'Фиксированная цена без скрытых доплат', desc: 'Цена, названная при заказе — окончательная. Все расходники, крепёж и вакуумирование включены.' },
                  { icon: 'WrenchScrewdriverIcon', title: 'Монтаж по ГОСТ', desc: 'Используем медные трубки, правильные диаметры и изоляцию. Система работает без сбоев весь срок службы.' },
                ].map(item => (
                  <div key={item.title} className="flex gap-4 p-4 bg-zinc-50 rounded-2xl border border-border">
                    <div className="w-10 h-10 rounded-xl bg-crimson-50 flex items-center justify-center shrink-0">
                      <Icon name={item.icon} size={20} className="text-crimson-700" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground text-sm mb-1">{item.title}</p>
                      <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Geography */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-6">Зона обслуживания</h2>
              <p className="text-muted-foreground mb-5 leading-relaxed">
                Продажу кондиционеров осуществляем по всей Беларуси. Установку и обслуживание выполняем в <strong className="text-foreground">Гомеле и Гомельской области</strong>. Для уточнения возможности выезда — позвоните нам.
              </p>
              <div className="bg-zinc-50 rounded-2xl border border-border p-5 mb-5">
                <p className="text-sm font-semibold text-foreground mb-3">Населённые пункты:</p>
                <div className="flex flex-wrap gap-2">
                  {['Гомель', 'Жлобин', 'Мозырь', 'Речица', 'Светлогорск', 'Калинковичи', 'Рогачёв', 'Петриков', 'Житковичи', 'Хойники', 'Лоев'].map(city => (
                    <span key={city} className="text-sm bg-white border border-border rounded-lg px-3 py-1 text-foreground">{city}</span>
                  ))}
                </div>
              </div>
              <div className="bg-crimson-50 border border-crimson-200 rounded-2xl p-5">
                <p className="text-sm font-semibold text-crimson-800 mb-1">Выезд за пределы Гомеля</p>
                <p className="text-xs text-crimson-700 leading-relaxed">Для районов Гомельской области уточняйте наличие выезда и стоимость доставки по телефону. Стараемся охватить все запросы.</p>
              </div>
            </div>
          </div>
        </div>

        {/* SEO text block */}
        <div className="bg-zinc-50 border-t border-border">
          <div className="max-w-7xl mx-auto px-4 py-12">
            <h2 className="text-xl font-bold text-foreground mb-5">Установка кондиционеров в Гомеле — AirComfort</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 text-sm text-muted-foreground leading-relaxed">
              <div className="space-y-4">
                <p>
                  AirComfort выполняет профессиональный монтаж кондиционеров в Гомеле и Гомельской области. Устанавливаем настенные сплит-системы брендов <strong className="text-foreground">Electrolux, Ballu, Haier, LG и Mitsudai</strong> в квартирах, частных домах и офисах. Стоимость установки кондиционера под ключ — от 400 р. для помещений до 30 м².
                </p>
                <p>
                  В стоимость монтажа входит: крепление внутреннего и наружного блоков, прокладка медной трассы до 3 м с изоляцией, электрокабель, сливной шланг, вакуумирование системы, пусконаладочные работы и проверка всех режимов. Дополнительный метр трассы — 50 р. Монтаж через балкон или лоджию — доплата 50 р.
                </p>
              </div>
              <div className="space-y-4">
                <p>
                  Помимо установки, оказываем полный спектр сервисных услуг: техническое обслуживание кондиционера (чистка фильтров, промывка теплообменника, дозаправка фреоном) — от 100 р., диагностика и ремонт — от 80 р., демонтаж при замене или переезде — от 100 р. Рекомендуем проводить профилактику раз в год — весной перед сезоном.
                </p>
                <p>
                  Все работы выполняются с соблюдением требований ГОСТ. Мастера — сертифицированные специалисты с опытом монтажа более 5 лет. Гарантия на монтажные работы — 1 год. Звоните: <strong className="text-foreground">+375 29 105-06-94</strong>, работаем пн–сб с 9:00 до 18:00.
                </p>
              </div>
            </div>
            <div className="mt-8 pt-6 border-t border-border">
              <p className="text-sm font-semibold text-foreground mb-3">Полезные статьи по теме:</p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {[
                  ['/articles/tsena-ustanovki-konditsionera', 'Цены на установку кондиционера'],
                  ['/articles/split-sistema-gomel', 'Сплит-система в Гомеле'],
                  ['/articles/montazh-kassetnogo-konditsionera', 'Монтаж кассетного кондиционера'],
                  ['/articles/demontazh-konditsionera-gomel', 'Демонтаж кондиционера'],
                  ['/articles/zapravka-konditsionera-gomel', 'Заправка фреоном'],
                  ['/articles/obsluzhivanie-konditsionera-gomel', 'Обслуживание кондиционера'],
                ].map(([href, label]) => (
                  <Link key={href} href={href} className="text-xs text-crimson-700 hover:underline py-1">
                    → {label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
