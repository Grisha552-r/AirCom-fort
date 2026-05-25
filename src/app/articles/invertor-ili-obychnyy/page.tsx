'use client';
import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CartDrawer from '@/components/CartDrawer';
import Icon from '@/components/ui/AppIcon';
import Link from 'next/link';

function ArticleImage({ src, alt, caption }: { src: string; alt: string; caption?: string }) {
  return (
    <figure className="my-8">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} alt={alt} className="w-full rounded-2xl object-cover max-h-96 shadow-sm border border-border" />
      {caption && <figcaption className="text-center text-sm text-muted-foreground mt-2">{caption}</figcaption>}
    </figure>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mb-10">
      <h2 className="text-2xl font-bold text-foreground mb-4 pb-2 border-b border-border">{title}</h2>
      {children}
    </section>
  );
}

function TipBox({ type = 'tip', children }: { type?: 'tip' | 'warning' | 'info'; children: React.ReactNode }) {
  const styles = {
    tip: { bg: 'bg-emerald-50 border-emerald-200', icon: 'CheckCircleIcon', iconColor: 'text-emerald-600', title: 'Совет' },
    warning: { bg: 'bg-amber-50 border-amber-200', icon: 'ExclamationTriangleIcon', iconColor: 'text-amber-600', title: 'Важно' },
    info: { bg: 'bg-blue-50 border-blue-200', icon: 'InformationCircleIcon', iconColor: 'text-blue-600', title: 'Полезно знать' },
  }[type];
  return (
    <div className={`${styles.bg} border rounded-xl p-4 my-5 flex gap-3`}>
      <Icon name={styles.icon} size={20} className={`${styles.iconColor} mt-0.5 shrink-0`} />
      <div>
        <p className="text-sm font-semibold text-foreground mb-1">{styles.title}</p>
        <div className="text-sm text-muted-foreground leading-relaxed">{children}</div>
      </div>
    </div>
  );
}

export default function ArticlePage() {
  const [cartOpen, setCartOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <Header onCartOpen={() => setCartOpen(true)} />
      <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} />

      <main>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Главная', item: 'https://aircom-fort.by' },
            { '@type': 'ListItem', position: 2, name: 'Статьи', item: 'https://aircom-fort.by/articles' },
            { '@type': 'ListItem', position: 3, name: 'Инверторный или обычный кондиционер: в чём разница и стоит ли переплачивать' },
          ],
        }) }} />
        {/* Hero */}
        <div className="bg-crimson-gradient text-white">
          <div className="max-w-7xl mx-auto px-4 py-14">
            <nav className="flex items-center gap-2 text-sm text-crimson-200 mb-6 flex-wrap">
              <Link href="/" className="hover:text-white transition-colors">Главная</Link>
              <Icon name="ChevronRightIcon" size={14} />
              <Link href="/articles" className="hover:text-white transition-colors">Ответы на вопросы</Link>
              <Icon name="ChevronRightIcon" size={14} />
              <span className="text-white font-medium">Инверторный или обычный</span>
            </nav>
            <div className="max-w-3xl">
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-white/20 text-white text-xs font-semibold px-3 py-1 rounded-full">Выбор техники</span>
                <span className="text-crimson-200 text-sm flex items-center gap-1"><Icon name="ClockIcon" size={14} /> 7 мин</span>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-4">
                Инверторный или обычный кондиционер: в чём разница и стоит ли переплачивать
              </h1>
              <p className="text-crimson-100 text-lg leading-relaxed">
                Один из самых частых вопросов при выборе кондиционера. Разбираем технически просто и честно.
              </p>
            </div>
          </div>
        </div>

        {/* Article body */}
        <div className="max-w-3xl mx-auto px-4 py-12">

          <ArticleImage
            src="https://static.tildacdn.com/tild6362-6135-4234-a533-653563626231/invertonoff.jpg"
            alt="Инверторный и обычный кондиционер — сравнение работы компрессора"
            caption="Принцип работы инверторного и on/off компрессора: главное отличие — способ регулировки мощности"
          />

          <Section title="Как работает обычный (on/off) кондиционер">
            <p className="text-muted-foreground leading-relaxed mb-4">
              В стандартном кондиционере компрессор работает только в двух режимах: включён на 100% или выключен полностью. Когда температура в комнате достигает заданной отметки, компрессор отключается. Как только температура снова поднимается выше нормы — включается снова.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Такой подход работает, но создаёт несколько проблем:
            </p>
            <ul className="space-y-2 mb-4">
              {[
                'Температура в комнате постоянно колеблется в диапазоне ±2–3°C — то немного теплее, то немного холоднее',
                'Каждый пуск компрессора потребляет в 3–5 раз больше тока, чем работа на номинальной мощности',
                'Частые старт-стопы создают механический износ и сокращают ресурс техники',
                'В момент включения слышен характерный рывок — компрессор разгоняется с нуля',
              ].map(item => (
                <li key={item} className="flex items-start gap-2 text-muted-foreground text-sm">
                  <Icon name="XMarkIcon" size={16} className="text-red-400 mt-0.5 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <TipBox type="info">
              Обычные on/off кондиционеры стоят дешевле на 200–400 рублей — именно это их главное преимущество.
            </TipBox>
          </Section>

          <Section title="Как работает инверторный кондиционер">
            <p className="text-muted-foreground leading-relaxed mb-4">
              Инверторный кондиционер не выключает компрессор — он замедляет его. Специальный инвертор (преобразователь частоты) плавно изменяет скорость вращения компрессора от минимальной до максимальной, подстраиваясь под текущую нагрузку.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Когда комната уже охладилась до нужной температуры, компрессор не отключается, а работает на 10–20% мощности, поддерживая точный микроклимат. При резком потеплении (открылась дверь, вошло несколько человек) он плавно ускоряется.
            </p>
            <ul className="space-y-2 mb-4">
              {[
                'Температура держится в диапазоне ±0,5°C — практически незаметные колебания',
                'Нет пиковых токов при пуске — плавный набор мощности',
                'Меньший износ компрессора — работает непрерывно, без ударных нагрузок',
                'Тише работает на пониженных оборотах — особенно ночью',
                'Быстрее выходит на нужную температуру при старте',
              ].map(item => (
                <li key={item} className="flex items-start gap-2 text-muted-foreground text-sm">
                  <Icon name="CheckCircleIcon" size={16} className="text-emerald-500 mt-0.5 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </Section>

          <ArticleImage
            src="https://static.tildacdn.com/tild6631-3866-4366-a461-313637656332/123_1.png"
            alt="Преимущества инверторного кондиционера"
            caption="График температуры: инверторный кондиционер поддерживает стабильный микроклимат без скачков"
          />

          <Section title="Сколько реально экономит инвертор на электричестве">
            <p className="text-muted-foreground leading-relaxed mb-4">
              Производители часто пишут «экономия до 40%». Это маркетинг. Реальные данные скромнее:
            </p>
            <div className="overflow-x-auto mb-4">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-zinc-50">
                    <th className="text-left px-4 py-3 border border-border font-semibold text-foreground">Условия использования</th>
                    <th className="text-left px-4 py-3 border border-border font-semibold text-foreground">Реальная экономия</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Интенсивная работа 8+ часов в день', '20–30%'],
                    ['Умеренное использование 4–6 часов', '15–20%'],
                    ['Редкое использование (1–2 часа)', '5–10%'],
                    ['Обогрев зимой', '25–35%'],
                  ].map(([cond, econ]) => (
                    <tr key={cond} className="hover:bg-zinc-50">
                      <td className="px-4 py-3 border border-border text-muted-foreground">{cond}</td>
                      <td className="px-4 py-3 border border-border font-semibold text-emerald-700">{econ}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-4">
              При среднем тарифе на электроэнергию в Беларуси и стандартной нагрузке 6 часов в день инверторный кондиционер мощностью 2,5 кВт сэкономит примерно <strong className="text-foreground">30–50 рублей в сезон</strong> по сравнению с on/off аналогом.
            </p>
            <TipBox type="warning">
              Срок окупаемости разницы в цене (200–400 рублей) при экономии 40–50 рублей/сезон составит 4–8 лет. Если вы используете кондиционер редко — переплата может не окупиться вообще.
            </TipBox>
          </Section>

          <Section title="Когда инвертор оправдан, а когда нет">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-5">
                <p className="font-bold text-emerald-800 mb-3 flex items-center gap-2">
                  <Icon name="CheckCircleIcon" size={18} className="text-emerald-600" />
                  Инвертор — правильный выбор, если:
                </p>
                <ul className="space-y-2 text-sm text-emerald-900">
                  {[
                    'Кондиционер работает 6–12 часов в день (офис, кухня)',
                    'Важна тишина — спальня, кабинет',
                    'Планируете использовать зимой для обогрева',
                    'В доме маленькие дети или аллергики',
                    'Покупаете технику надолго — на 10+ лет',
                  ].map(item => (
                    <li key={item} className="flex items-start gap-2">
                      <Icon name="CheckIcon" size={14} className="text-emerald-600 mt-0.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-zinc-50 border border-zinc-200 rounded-2xl p-5">
                <p className="font-bold text-zinc-800 mb-3 flex items-center gap-2">
                  <Icon name="XMarkIcon" size={18} className="text-zinc-500" />
                  On/off подойдёт, если:
                </p>
                <ul className="space-y-2 text-sm text-zinc-700">
                  {[
                    'Кондиционер включается редко — охладить перед сном',
                    'Это дача или сезонное жильё',
                    'Сдаёте квартиру — важна цена, а не экономия',
                    'Нестабильное напряжение в сети (инвертор хуже переносит скачки)',
                    'Бюджет ограничен, нужно уложиться в конкретную сумму',
                  ].map(item => (
                    <li key={item} className="flex items-start gap-2">
                      <Icon name="MinusIcon" size={14} className="text-zinc-500 mt-0.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Section>

          <Section title="Что насчёт ремонта инвертора">
            <p className="text-muted-foreground leading-relaxed mb-4">
              У инверторного кондиционера более сложная электроника. Плата управления инвертором стоит 400–700 рублей и требует специалиста для замены. У обычного on/off — электрическая часть проще, запчасти дешевле и доступнее.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Это не повод отказываться от инвертора, но важно выбирать проверенные бренды с официальными сервисными центрами в Беларуси. Electrolux, Ballu, Haier, LG и Panasonic — всё это есть.
            </p>
          </Section>

          <Section title="Итог: короткий вывод">
            <div className="bg-crimson-50 border border-crimson-100 rounded-2xl p-6">
              <ul className="space-y-3">
                {[
                  'Инвертор тише, точнее держит температуру и экономит электричество при регулярном использовании',
                  'Реальная экономия — 15–30% при интенсивной эксплуатации, не 40% как в рекламе',
                  'Срок окупаемости разницы в цене — 4–8 лет в зависимости от режима работы',
                  'Если кондиционер включается редко или это дача — берите обычный и сэкономьте 200–400 рублей сразу',
                  'Для спальни, офиса или круглогодичного обогрева — однозначно инвертор',
                ].map(item => (
                  <li key={item} className="flex items-start gap-3 text-sm text-foreground">
                    <Icon name="CheckCircleIcon" size={16} className="text-crimson-600 mt-0.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Section>

          {/* CTA */}
          <div className="bg-crimson-gradient rounded-3xl p-8 text-white text-center mt-12">
            <h2 className="text-2xl font-bold mb-3">Помогаем выбрать правильную модель</h2>
            <p className="text-crimson-100 mb-6">Расскажите, для какой комнаты и как часто планируете использовать — подберём оптимальный вариант по соотношению цены и эффективности.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+375291050694"
                onClick={e => { e.preventDefault(); window.open('tel:+375291050694'); }}
                className="flex items-center justify-center gap-2 bg-white text-crimson-700 px-6 py-3 rounded-xl font-bold hover:bg-crimson-50 transition-colors"
              >
                <Icon name="PhoneIcon" size={18} />
                +375 29 105-06-94
              </a>
              <Link href="/products" className="flex items-center justify-center gap-2 bg-white/20 border border-white/40 text-white px-6 py-3 rounded-xl font-bold hover:bg-white/30 transition-colors">
                Смотреть каталог
                <Icon name="ArrowRightIcon" size={16} />
              </Link>
            </div>
          </div>

          <div className="mt-10 pt-6 border-t border-border flex items-center justify-between flex-wrap gap-4">
            <Link href="/articles" className="flex items-center gap-2 text-crimson-700 font-semibold hover:underline text-sm">
              <Icon name="ArrowLeftIcon" size={16} />
              Все статьи
            </Link>
            <Link href="/articles/kak-vybrat-konditsioner" className="flex items-center gap-2 text-crimson-700 font-semibold hover:underline text-sm">
              Как выбрать кондиционер →
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
