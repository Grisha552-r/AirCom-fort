'use client';
import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CartDrawer from '@/components/CartDrawer';
import Icon from '@/components/ui/AppIcon';
import Link from 'next/link';

const STATS = [
  { value: '500+', label: 'товаров в наличии' },
  { value: '7', label: 'брендов-партнёров' },
  { value: '1 год', label: 'гарантия на монтаж' },
  { value: '9:00–18:00', label: 'пн–сб, без выходных' },
];

const BRANDS = [
  { name: 'Electrolux', slug: 'split-electrolux' },
  { name: 'Ballu', slug: 'split-ballu' },
  { name: 'Haier', slug: 'split-haier' },
  { name: 'LG', slug: 'split-lg' },
  { name: 'Mitsudai', slug: 'split-mitsudai' },
  { name: 'King Home', slug: 'split-kinghome' },
  { name: 'Все бренды', slug: 'split-systems' },
];

const VALUES = [
  {
    icon: 'ShieldCheckIcon',
    title: 'Официальная гарантия',
    desc: 'Всё оборудование поставляется с гарантией производителя. Сервисные центры каждого бренда работают на территории Беларуси.',
  },
  {
    icon: 'CurrencyDollarIcon',
    title: 'Честные цены',
    desc: 'Работаем без накруток и скрытых комиссий. Розничные цены в белорусских рублях по актуальному курсу.',
  },
  {
    icon: 'WrenchScrewdriverIcon',
    title: 'Монтаж и обслуживание',
    desc: 'Выполняем установку, техническое обслуживание и демонтаж кондиционеров. Фиксированные цены, гарантия на работы 1 год.',
  },
  {
    icon: 'PhoneIcon',
    title: 'Живая поддержка',
    desc: 'Консультируем по телефону, Telegram и Viber. Помогаем подобрать оборудование под площадь и бюджет.',
  },
];

const SERVICES = [
  {
    icon: 'WrenchScrewdriverIcon',
    title: 'Установка кондиционера',
    price: 'от 400 р.',
    desc: 'Монтаж настенного кондиционера под ключ: разметка, бурение, прокладка трассы, пуско-наладка. Работаем с любыми марками.',
  },
  {
    icon: 'SparklesIcon',
    title: 'Техническое обслуживание',
    price: 'от 100 р.',
    desc: 'Чистка фильтров и теплообменника, проверка уровня фреона, диагностика всех узлов. Продлевает срок службы на годы.',
  },
  {
    icon: 'ArrowPathIcon',
    title: 'Демонтаж и замена',
    price: 'от 100 р.',
    desc: 'Аккуратный демонтаж старого кондиционера при замене или переезде. Конденсатор сохраняется для повторного использования.',
  },
  {
    icon: 'CogIcon',
    title: 'Диагностика и ремонт',
    price: 'от 80 р.',
    desc: 'Выявление и устранение неисправностей: не охлаждает, шумит, течёт. Гарантия на выполненный ремонт.',
  },
];

const FAQ = [
  {
    q: 'Какой кондиционер выбрать для комнаты 20 м²?',
    a: 'Для комнаты площадью 20 м² подойдёт кондиционер мощностью 7 000–9 000 BTU (2–2,5 кВт). Это оптимальный вариант для небольшой спальни или кабинета. Рекомендуем модели Electrolux EACS-07 или Ballu BSUI-09HN8.',
  },
  {
    q: 'Сколько стоит установка кондиционера в Гомеле?',
    a: 'Стоимость стандартной установки кондиционера под ключ начинается от 400 р. Цена включает монтаж обоих блоков, прокладку трассы до 3 метров, вакуумирование и запуск. Дополнительный метр трассы — 50 р./м.',
  },
  {
    q: 'Есть ли гарантия на кондиционер и установку?',
    a: 'Да. На оборудование действует официальная гарантия производителя (1–3 года). На выполненный монтаж мы даём собственную гарантию 1 год. Если что-то пойдёт не так — устраним бесплатно.',
  },
  {
    q: 'Как часто нужно обслуживать кондиционер?',
    a: 'Рекомендуем профилактическое обслуживание 1 раз в год — обычно весной перед началом сезона. При интенсивной эксплуатации (офисы, магазины) — 2 раза в год. Регулярная чистка продлевает срок службы и сохраняет эффективность.',
  },
  {
    q: 'Работаете ли вы в Гомельской области?',
    a: 'Продажа кондиционеров — по всей Беларуси с доставкой. Установку и сервисное обслуживание выполняем в Гомеле и Гомельской области. Для уточнения зоны выезда звоните по телефону +375 29 105-06-94.',
  },
];

export default function AboutPage() {
  const [cartOpen, setCartOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

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
              <span className="text-white font-medium">О нас</span>
            </nav>
            <div className="max-w-2xl">
              <h1 className="text-4xl font-bold mb-4 leading-tight">AirComfort —<br />кондиционеры в Гомеле</h1>
              <p className="text-crimson-100 text-lg leading-relaxed">
                Продаём и устанавливаем кондиционеры ведущих мировых брендов в Гомеле и Беларуси. Работаем напрямую с поставщиками — без посредников и переплат.
              </p>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="bg-white border-b border-border">
          <div className="max-w-7xl mx-auto px-4 py-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {STATS.map(s => (
                <div key={s.label} className="text-center">
                  <p className="text-3xl font-bold text-crimson-700 mb-1">{s.value}</p>
                  <p className="text-sm text-muted-foreground">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 py-14 space-y-16">

          {/* About text */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-5">Кто мы</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  <strong className="text-foreground">AirComfort</strong> — специализированный магазин по продаже и установке кондиционеров в Гомеле. Мы занимаемся настенными сплит-системами и мобильными кондиционерами от проверенных производителей: <span className="text-foreground font-medium">Electrolux, Ballu, Haier, LG и Mitsudai</span>.
                </p>
                <p>
                  Наша цель — дать каждому покупателю возможность купить качественный кондиционер по честной цене, без скрытых наценок. Мы работаем напрямую с официальными дистрибьюторами, поэтому всё оборудование поставляется с официальной гарантией производителя.
                </p>
                <p>
                  Помимо продажи, мы оказываем полный спектр услуг: профессиональный монтаж сплит-систем под ключ, техническое обслуживание и чистка, заправка фреоном, а также демонтаж старого оборудования при замене. Работаем в Гомеле и Гомельской области.
                </p>
                <p>
                  За годы работы мы установили сотни кондиционеров в квартирах, частных домах и офисах. Каждый объект сдаём с гарантией на монтаж 1 год.
                </p>
              </div>
            </div>
            <div className="bg-zinc-50 rounded-3xl p-8 border border-border space-y-5">
              <h3 className="font-bold text-foreground text-lg">Наши бренды</h3>
              <div className="grid grid-cols-2 gap-3">
                {BRANDS.map(brand => (
                  <Link
                    key={brand.name}
                    href={`/products/${brand.slug}`}
                    className="flex items-center gap-3 bg-white rounded-xl px-4 py-3 border border-border hover:border-crimson-300 hover:bg-crimson-50 transition-all group"
                  >
                    <Icon name="CheckCircleIcon" size={16} className="text-crimson-600 shrink-0" />
                    <span className="text-sm font-semibold text-foreground group-hover:text-crimson-700">{brand.name}</span>
                  </Link>
                ))}
              </div>
              <Link
                href="/products"
                className="flex items-center justify-center gap-2 bg-crimson-gradient text-white py-3 rounded-xl font-semibold text-sm hover:opacity-90 transition-opacity shadow-crimson"
              >
                Смотреть весь каталог
                <Icon name="ArrowRightIcon" size={16} />
              </Link>
            </div>
          </div>

          {/* Services */}
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-3">Услуги по кондиционированию в Гомеле</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl">
              Мы не просто продаём кондиционеры — мы берём на себя весь цикл: от подбора модели до монтажа и последующего технического обслуживания.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {SERVICES.map(s => (
                <div key={s.title} className="bg-white rounded-2xl border border-border p-6 hover:border-crimson-200 hover:shadow-md transition-all">
                  <div className="w-12 h-12 rounded-2xl bg-crimson-50 flex items-center justify-center mb-4">
                    <Icon name={s.icon} size={24} className="text-crimson-700" />
                  </div>
                  <h3 className="font-bold text-foreground mb-1">{s.title}</h3>
                  <p className="text-sm font-semibold text-crimson-700 mb-2">{s.price}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 text-center">
              <Link
                href="/services"
                className="inline-flex items-center gap-2 bg-crimson-gradient text-white px-8 py-3.5 rounded-xl font-semibold hover:opacity-90 transition-opacity shadow-crimson"
              >
                Все услуги и цены
                <Icon name="ArrowRightIcon" size={16} />
              </Link>
            </div>
          </div>

          {/* How to choose — SEO text */}
          <div className="bg-zinc-50 rounded-3xl p-8 md:p-10 border border-border">
            <h2 className="text-2xl font-bold text-foreground mb-6">Как выбрать кондиционер для квартиры или дома</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 text-muted-foreground leading-relaxed">
              <div className="space-y-5">
                <div>
                  <h3 className="font-bold text-foreground mb-2">По мощности и площади</h3>
                  <p>
                    Главный параметр при выборе — мощность охлаждения в BTU. Для комнаты до 20&nbsp;м² достаточно модели 7&nbsp;000–9&nbsp;000&nbsp;BTU. Для 25–35&nbsp;м² — 12&nbsp;000&nbsp;BTU. Для 50–70&nbsp;м² — 18&nbsp;000–24&nbsp;000&nbsp;BTU. Наши консультанты помогут рассчитать точную мощность с учётом высоты потолков, ориентации окон и теплонагрузки.
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-2">Инверторный или On/Off</h3>
                  <p>
                    Инверторный кондиционер плавно регулирует мощность и поддерживает заданную температуру без перепадов. Он тише, экономнее по электроэнергии и дольше служит. Обычный On/Off — дешевле в покупке, но дороже в эксплуатации. Для жилого помещения мы рекомендуем инвертор.
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-2">Какой бренд выбрать</h3>
                  <p>
                    <strong>Electrolux</strong> и <strong>Haier</strong> — оптимальное соотношение цены и качества для квартиры. <strong>LG</strong> — широкий модельный ряд с Wi-Fi управлением. <strong>Ballu</strong> — надёжные базовые модели по доступной цене. <strong>Mitsudai</strong> — бюджетный вариант с хорошими характеристиками.
                  </p>
                </div>
              </div>
              <div className="space-y-5">
                <div>
                  <h3 className="font-bold text-foreground mb-2">Мобильный или настенный</h3>
                  <p>
                    Настенная сплит-система эффективнее и тише, но требует установки. Мобильный кондиционер — идеальное решение там, где сверление стен невозможно: арендное жильё, исторические здания, временные помещения. Не нужен монтаж — достаточно вывести шланг в окно.
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-2">Дополнительные функции</h3>
                  <p>
                    Современные кондиционеры умеют не только охлаждать. Функции: обогрев (тепловой насос), осушение воздуха, вентиляция, очистка HEPA-фильтром, управление через Wi-Fi и приложение. При выборе учитывайте климат — белорусская зима требует моделей с обогревом до −15&nbsp;°C.
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-2">Сколько стоит кондиционер в Гомеле</h3>
                  <p>
                    Цены на кондиционеры в Гомеле начинаются от 700–800&nbsp;р. за базовую On/Off модель 9&nbsp;000&nbsp;BTU. Инверторные модели — от 1&nbsp;000&nbsp;р. Установка «под ключ» — от 400&nbsp;р. В итоге готовая система под ключ обойдётся от 1&nbsp;100&nbsp;р.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Values */}
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-8 text-center">Наши принципы</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {VALUES.map(v => (
                <div key={v.title} className="bg-white rounded-2xl border border-border p-6 hover:border-crimson-200 hover:shadow-md transition-all">
                  <div className="w-12 h-12 rounded-2xl bg-crimson-50 flex items-center justify-center mb-4">
                    <Icon name={v.icon} size={24} className="text-crimson-700" />
                  </div>
                  <h3 className="font-bold text-foreground mb-2">{v.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* FAQ */}
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-8">Часто задаваемые вопросы</h2>
            <div className="space-y-3">
              {FAQ.map((item, i) => (
                <div key={i} className="bg-white rounded-2xl border border-border overflow-hidden">
                  <button
                    className="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-zinc-50 transition-colors"
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  >
                    <span className="font-semibold text-foreground pr-4">{item.q}</span>
                    <Icon
                      name={openFaq === i ? 'ChevronUpIcon' : 'ChevronDownIcon'}
                      size={18}
                      className="text-muted-foreground shrink-0"
                    />
                  </button>
                  {openFaq === i && (
                    <div className="px-6 pb-5 text-sm text-muted-foreground leading-relaxed border-t border-border pt-4">
                      {item.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="bg-crimson-gradient rounded-3xl p-8 md:p-12 text-center text-white">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">Остались вопросы?</h2>
            <p className="text-crimson-100 mb-8 max-w-xl mx-auto">Позвоните нам или напишите в мессенджер — поможем подобрать подходящий кондиционер и рассчитаем стоимость установки.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+375291050694"
                onClick={e => { e.preventDefault(); window.open('tel:+375291050694'); }}
                className="flex items-center justify-center gap-2 bg-white text-crimson-700 px-8 py-3.5 rounded-xl font-bold hover:bg-crimson-50 transition-colors"
              >
                <Icon name="PhoneIcon" size={18} />
                +375 29 105-06-94
              </a>
              <a
                href="https://t.me/AirComforto"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-white/20 text-white border border-white/40 px-8 py-3.5 rounded-xl font-bold hover:bg-white/30 transition-colors"
              >
                Написать в Telegram
              </a>
            </div>
          </div>

          {/* Article links */}
          <div className="bg-zinc-50 border border-border rounded-2xl p-6 mt-8">
            <p className="text-sm font-semibold text-foreground mb-4">Полезные статьи от наших специалистов</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {[
                ['/articles/kak-vybrat-konditsioner', 'Как выбрать кондиционер для квартиры'],
                ['/articles/tsena-ustanovki-konditsionera', 'Сколько стоит установка в Гомеле'],
                ['/articles/invertor-ili-obychnyy', 'Инвертор или обычный — что выгоднее'],
                ['/articles/tikhiy-konditsioner-dlya-spalni', 'Тихий кондиционер для спальни'],
                ['/articles/konditsioner-dlya-ofisa-gomel', 'Кондиционер для офиса в Гомеле'],
                ['/articles/chistka-i-obsluzhivanie', 'Чистка и обслуживание кондиционера'],
              ].map(([href, label]) => (
                <Link key={href} href={href} className="text-sm text-crimson-700 hover:underline py-1">
                  → {label}
                </Link>
              ))}
            </div>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
