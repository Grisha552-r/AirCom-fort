import React from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

const ADVANTAGES = [
  { icon: 'WrenchScrewdriverIcon', label: 'Монтаж по ГОСТ', desc: 'Медные трубки, правильная изоляция, вакуумирование' },
  { icon: 'ShieldCheckIcon',       label: 'Гарантия 1 год на монтаж', desc: 'Устраняем неисправности по нашей вине бесплатно' },
  { icon: 'CheckBadgeIcon',        label: 'Официальная гарантия', desc: 'Electrolux, Ballu, Haier, LG, Mitsudai — дилеры' },
  { icon: 'BoltIcon',              label: 'Выезд в день заказа', desc: 'Принимаем заявки пн–сб с 9:00 до 18:00' },
  { icon: 'BanknotesIcon',         label: 'Фиксированная цена', desc: 'Без скрытых доплат. Монтаж от 400 р. под ключ' },
  { icon: 'MapPinIcon',            label: 'Гомель и область', desc: 'Жлобин, Мозырь, Речица, Светлогорск и другие' },
];

const ARTICLE_LINKS = [
  { href: '/articles/kak-vybrat-konditsioner', label: 'Как выбрать кондиционер' },
  { href: '/articles/tsena-ustanovki-konditsionera', label: 'Цены на установку в Гомеле' },
  { href: '/articles/invertor-konditsioner-gomel', label: 'Инверторный кондиционер Гомель' },
  { href: '/articles/tikhiy-konditsioner-dlya-spalni', label: 'Тихий кондиционер для спальни' },
  { href: '/articles/konditsioner-dlya-detskoy', label: 'Кондиционер для детской' },
  { href: '/articles/konditsioner-dlya-ofisa-gomel', label: 'Кондиционер для офиса' },
  { href: '/articles/konditsioner-electrolux-gomel', label: 'Electrolux в Гомеле' },
  { href: '/articles/konditsioner-ballu-gomel', label: 'Ballu в Гомеле' },
  { href: '/articles/konditsioner-haier-gomel', label: 'Haier в Гомеле' },
  { href: '/articles/konditsioner-lg-gomel', label: 'LG в Гомеле' },
  { href: '/articles/konditsioner-dlya-gostinoy', label: 'Кондиционер для гостиной' },
  { href: '/articles/mulitsplit-gomel', label: 'Мультисплит в Гомеле' },
  { href: '/articles/zapravka-konditsionera-gomel', label: 'Заправка фреоном Гомель' },
  { href: '/articles/obsluzhivanie-konditsionera-gomel', label: 'Обслуживание кондиционера' },
];

export default function SeoSection() {
  return (
    <section className="bg-white border-t border-border">

      {/* About block */}
      <div className="bg-zinc-950 text-white">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block text-xs font-bold uppercase tracking-widest text-crimson-400 mb-4">О компании</span>
              <h2 className="text-3xl md:text-4xl font-bold mb-5 leading-tight">
                AirComfort — продажа и монтаж кондиционеров в Гомеле
              </h2>
              <p className="text-zinc-300 leading-relaxed mb-6">
                Специализируемся на климатической технике с 2019 года. Продаём и устанавливаем
                настенные сплит-системы и мобильные кондиционеры ведущих мировых брендов:
                <strong className="text-white"> Electrolux, Ballu, Haier, LG, Mitsudai, King Home, Gree</strong>.
                Все модели в наличии, поставляются с официальной гарантией производителя.
              </p>
              <p className="text-zinc-300 leading-relaxed mb-8">
                Выполняем профессиональный монтаж в Гомеле и Гомельской области. Установка под ключ —
                от 400 р. для помещений до 30 м². Полный цикл: разметка, бурение, прокладка медной
                трассы, подключение, вакуумирование и пуско-наладка. Все расходники включены.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="/konditsionery-gomel" className="inline-flex items-center gap-2 bg-crimson-700 hover:bg-crimson-800 text-white text-sm font-semibold px-5 py-2.5 rounded-xl transition-colors">
                  Кондиционеры в Гомеле →
                </Link>
                <Link href="/products" className="inline-flex items-center gap-2 bg-zinc-800 hover:bg-zinc-700 text-white text-sm font-semibold px-5 py-2.5 rounded-xl transition-colors">
                  Каталог
                </Link>
                <Link href="/services" className="inline-flex items-center gap-2 bg-zinc-800 hover:bg-zinc-700 text-white text-sm font-semibold px-5 py-2.5 rounded-xl transition-colors">
                  Услуги
                </Link>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: '5+', label: 'лет на рынке', sub: 'с 2019 года' },
                { value: '500+', label: 'установок', sub: 'в Гомеле и области' },
                { value: '400 р.', label: 'монтаж под ключ', sub: 'от — для комнаты 30 м²' },
                { value: '7', label: 'брендов', sub: 'официальный дилер' },
              ].map(s => (
                <div key={s.value} className="bg-zinc-900 rounded-2xl p-5 border border-zinc-800 hover:border-crimson-800 transition-colors">
                  <p className="text-3xl font-bold text-white mb-1">{s.value}</p>
                  <p className="text-sm font-semibold text-crimson-400">{s.label}</p>
                  <p className="text-xs text-zinc-500 mt-1">{s.sub}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Advantages */}
      <div className="max-w-7xl mx-auto px-4 py-14">
        <div className="text-center mb-10">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-crimson-600 mb-3">Почему выбирают нас</span>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">
            Надёжный монтаж кондиционеров в Гомеле
          </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {ADVANTAGES.map(adv => (
            <div key={adv.label} className="group bg-white rounded-2xl border border-border p-5 hover:border-crimson-300 hover:shadow-md transition-all duration-200">
              <div className="w-10 h-10 rounded-xl bg-crimson-50 flex items-center justify-center mb-3">
                <Icon name={adv.icon as Parameters<typeof Icon>[0]['name']} size={22} className="text-crimson-700" />
              </div>
              <p className="font-semibold text-foreground text-sm mb-1.5">{adv.label}</p>
              <p className="text-xs text-muted-foreground leading-relaxed">{adv.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* SEO text */}
      <div className="bg-zinc-50 border-t border-border">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 text-sm text-muted-foreground leading-relaxed">
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-foreground">Продажа кондиционеров с установкой в Гомеле</h3>
              <p>
                AirComfort — специализированный магазин климатической техники в Гомеле. Продаём настенные
                сплит-системы и мобильные кондиционеры ведущих мировых брендов. Все модели в наличии,
                поставляются с официальной гарантией производителя.
              </p>
              <p>
                Выполняем профессиональный монтаж кондиционеров в Гомеле и Гомельской области.
                Установка «под ключ» — от 400 р. для помещений до 30 м². Это полный цикл: разметка,
                бурение, прокладка медной трассы, подключение, вакуумирование и пуско-наладка.
                Все расходники включены в стоимость.
              </p>
              <p>
                Для комнаты <strong className="text-foreground">до 20 м²</strong> — кондиционер 7 000–9 000 BTU.
                Для <strong className="text-foreground">до 35 м²</strong> — 12 000 BTU.
                Для <strong className="text-foreground">до 50 м²</strong> — 18 000 BTU.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-foreground">Инверторный или обычный кондиционер — что выбрать</h3>
              <p>
                Инверторный кондиционер плавно регулирует мощность и экономит до 40% электроэнергии
                по сравнению с обычным On/Off. Он тише, точнее поддерживает заданную температуру и
                служит дольше. При использовании более 3 месяцев в год переплата за инвертор
                окупается за 2–3 сезона.
              </p>
              <p>
                Помимо охлаждения, большинство современных сплит-систем умеют обогревать помещение
                при температуре до −15 °C — это экономичнее электрообогревателя в 2–3 раза. Мобильный
                кондиционер — если сверление стен невозможно: идеально для аренды или дачи.
              </p>
              <div className="flex flex-wrap gap-2 mt-3">
                <Link href="/products/split-systems" className="text-xs bg-white border border-border rounded-lg px-3 py-1.5 text-foreground hover:border-crimson-300 hover:bg-crimson-50 transition-colors">Сплит-системы →</Link>
                <Link href="/products/split-electrolux" className="text-xs bg-white border border-border rounded-lg px-3 py-1.5 text-foreground hover:border-crimson-300 hover:bg-crimson-50 transition-colors">Electrolux →</Link>
                <Link href="/products/split-ballu" className="text-xs bg-white border border-border rounded-lg px-3 py-1.5 text-foreground hover:border-crimson-300 hover:bg-crimson-50 transition-colors">Ballu →</Link>
                <Link href="/products/split-haier" className="text-xs bg-white border border-border rounded-lg px-3 py-1.5 text-foreground hover:border-crimson-300 hover:bg-crimson-50 transition-colors">Haier →</Link>
                <Link href="/products/split-lg" className="text-xs bg-white border border-border rounded-lg px-3 py-1.5 text-foreground hover:border-crimson-300 hover:bg-crimson-50 transition-colors">LG →</Link>
                <Link href="/products/mobile" className="text-xs bg-white border border-border rounded-lg px-3 py-1.5 text-foreground hover:border-crimson-300 hover:bg-crimson-50 transition-colors">Мобильные →</Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Article links */}
      <div className="border-t border-border">
        <div className="max-w-7xl mx-auto px-4 py-10">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-base font-bold text-foreground">Полезные статьи о кондиционерах</h3>
            <Link href="/articles" className="text-sm text-crimson-700 hover:underline font-medium">
              Все статьи →
            </Link>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2">
            {ARTICLE_LINKS.map(link => (
              <Link
                key={link.href}
                href={link.href}
                className="group flex items-center gap-2 bg-zinc-50 hover:bg-crimson-50 border border-border hover:border-crimson-200 rounded-xl px-3 py-2.5 transition-all duration-150"
              >
                <span className="w-1 h-1 rounded-full bg-crimson-400 shrink-0 group-hover:scale-150 transition-transform" />
                <span className="text-xs text-foreground group-hover:text-crimson-700 font-medium leading-tight">{link.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
}
