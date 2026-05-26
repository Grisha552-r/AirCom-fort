import React from 'react';
import Link from 'next/link';

const ADVANTAGES = [
  { label: 'Монтаж по ГОСТ', desc: 'Медные трубки, правильная изоляция, вакуумирование' },
  { label: 'Гарантия 1 год на монтаж', desc: 'Устраняем неисправности по нашей вине бесплатно' },
  { label: 'Официальная гарантия', desc: 'Electrolux, Ballu, Haier, LG, Mitsudai — дилеры' },
  { label: 'Выезд в день заказа', desc: 'Принимаем заявки пн–сб с 9:00 до 18:00' },
  { label: 'Фиксированная цена', desc: 'Без скрытых доплат. Монтаж от 400 р. под ключ' },
  { label: 'Гомель и область', desc: 'Жлобин, Мозырь, Речица, Светлогорск и другие' },
];

export default function SeoSection() {
  return (
    <section className="bg-zinc-50 border-t border-border py-14">
      <div className="max-w-7xl mx-auto px-4">

        {/* Advantages grid */}
        <h2 className="text-2xl font-bold text-foreground mb-8 text-center">
          Почему выбирают AirComfort для установки кондиционера в Гомеле
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-14">
          {ADVANTAGES.map(adv => (
            <div key={adv.label} className="bg-white rounded-2xl border border-border p-5 hover:border-crimson-200 transition-colors">
              <p className="font-semibold text-foreground text-sm mb-1">{adv.label}</p>
              <p className="text-xs text-muted-foreground leading-relaxed">{adv.desc}</p>
            </div>
          ))}
        </div>

        {/* SEO text */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 text-sm text-muted-foreground leading-relaxed mb-10">
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-foreground">Продажа и установка кондиционеров в Гомеле</h3>
            <p>
              AirComfort — специализированный магазин климатической техники в Гомеле. Продаём настенные сплит-системы и мобильные кондиционеры ведущих мировых брендов: <strong className="text-foreground">Electrolux, Ballu, Haier, LG и Mitsudai</strong>. Все модели в наличии, поставляются с официальной гарантией производителя.
            </p>
            <p>
              Выполняем профессиональный монтаж кондиционеров в Гомеле и Гомельской области. Установка «под ключ» — от 400 р. для помещений до 30 м². Это полный цикл: разметка, бурение, прокладка медной трассы, подключение, вакуумирование и пуско-наладка. Все расходники включены в стоимость.
            </p>
            <p>
              Для комнаты <strong className="text-foreground">до 20 м²</strong> — кондиционер 7 000–9 000 BTU (от 700 р. + монтаж от 400 р.). Для <strong className="text-foreground">до 35 м²</strong> — 12 000 BTU. Для <strong className="text-foreground">до 50 м²</strong> — 18 000 BTU. Поможем рассчитать точно — позвоните или напишите в Telegram.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-foreground">Инверторный или обычный кондиционер — что выбрать</h3>
            <p>
              Инверторный кондиционер плавно регулирует мощность и экономит до 40% электроэнергии по сравнению с обычным On/Off. Он тише, точнее поддерживает заданную температуру и служит дольше — меньше пусков компрессора означает меньший износ. При использовании более 3 месяцев в год переплата за инвертор окупается за 2–3 сезона.
            </p>
            <p>
              Помимо охлаждения, большинство современных сплит-систем умеют обогревать помещение при температуре до −15 °C — это экономичнее электрообогревателя в 2–3 раза. Мобильный кондиционер — если сверление стен невозможно: идеально для аренды или дачи.
            </p>
            <div className="flex flex-wrap gap-2 mt-2">
              <Link href="/konditsionery-gomel" className="text-xs bg-crimson-50 border border-crimson-200 rounded-lg px-3 py-1.5 text-crimson-700 font-medium hover:bg-crimson-100 transition-colors">Кондиционеры в Гомеле →</Link>
              <Link href="/products/split-systems" className="text-xs bg-white border border-border rounded-lg px-3 py-1.5 text-foreground hover:border-crimson-300 hover:bg-crimson-50 transition-colors">Сплит-системы →</Link>
              <Link href="/products/split-electrolux" className="text-xs bg-white border border-border rounded-lg px-3 py-1.5 text-foreground hover:border-crimson-300 hover:bg-crimson-50 transition-colors">Electrolux →</Link>
              <Link href="/products/split-ballu" className="text-xs bg-white border border-border rounded-lg px-3 py-1.5 text-foreground hover:border-crimson-300 hover:bg-crimson-50 transition-colors">Ballu →</Link>
              <Link href="/products/split-haier" className="text-xs bg-white border border-border rounded-lg px-3 py-1.5 text-foreground hover:border-crimson-300 hover:bg-crimson-50 transition-colors">Haier →</Link>
              <Link href="/products/split-lg" className="text-xs bg-white border border-border rounded-lg px-3 py-1.5 text-foreground hover:border-crimson-300 hover:bg-crimson-50 transition-colors">LG →</Link>
              <Link href="/products/mobile" className="text-xs bg-white border border-border rounded-lg px-3 py-1.5 text-foreground hover:border-crimson-300 hover:bg-crimson-50 transition-colors">Мобильные →</Link>
            </div>
          </div>
        </div>

        {/* Article links */}
        <div className="border-t border-border pt-8">
          <h3 className="text-sm font-semibold text-foreground mb-4">Полезные статьи о кондиционерах</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2">
            {[
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
              { href: '/articles/konditsioner-midea-gomel', label: 'Midea в Гомеле' },
              { href: '/articles/zapravka-konditsionera-gomel', label: 'Заправка фреоном Гомель' },
              { href: '/articles/obsluzhivanie-konditsionera-gomel', label: 'Обслуживание кондиционера' },
            ].map(link => (
              <Link key={link.href} href={link.href} className="text-xs text-crimson-700 hover:underline py-1">
                → {link.label}
              </Link>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
