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
            { '@type': 'ListItem', position: 3, name: 'Мобильный кондиционер или сплит-система: что выбрать' },
          ],
        }) }} />
        <div className="bg-crimson-gradient text-white">
          <div className="max-w-7xl mx-auto px-4 py-14">
            <nav className="flex items-center gap-2 text-sm text-crimson-200 mb-6 flex-wrap">
              <Link href="/" className="hover:text-white transition-colors">Главная</Link>
              <Icon name="ChevronRightIcon" size={14} />
              <Link href="/articles" className="hover:text-white transition-colors">Ответы на вопросы</Link>
              <Icon name="ChevronRightIcon" size={14} />
              <span className="text-white font-medium">Мобильный или сплит</span>
            </nav>
            <div className="max-w-3xl">
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-white/20 text-white text-xs font-semibold px-3 py-1 rounded-full">Выбор техники</span>
                <span className="text-crimson-200 text-sm flex items-center gap-1"><Icon name="ClockIcon" size={14} /> 6 мин</span>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-4">
                Мобильный кондиционер или сплит-система: что выбрать
              </h1>
              <p className="text-crimson-100 text-lg leading-relaxed">
                Сравниваем два типа по всем ключевым параметрам: шум, расход электричества, удобство, цена. Без маркетинга.
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-3xl mx-auto px-4 py-12">

          <ArticleImage
            src="https://content.onliner.by/news/1100x5616/fc670b5951c1c8d023eb5d860b4492bb.jpeg"
            alt="Мобильный кондиционер и сплит-система — сравнение"
            caption="Мобильный кондиционер — удобен для тех, кто не может установить наружный блок"
          />

          <Section title="В чём принципиальное отличие">
            <p className="text-muted-foreground leading-relaxed mb-4">
              Сплит-система состоит из двух блоков: внутреннего (в комнате) и наружного (на улице). Компрессор — шумный и горячий — находится снаружи. В комнате только вентилятор и испаритель.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Мобильный кондиционер — это один блок, который стоит прямо в комнате. Компрессор внутри. Горячий воздух отводится через гибкий шланг в окно или форточку.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Это и есть ключевое различие, из которого вытекают все остальные плюсы и минусы каждого типа.
            </p>
          </Section>

          <Section title="Подробное сравнение по параметрам">
            <div className="overflow-x-auto mb-4">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-zinc-50">
                    <th className="text-left px-4 py-3 border border-border font-semibold text-foreground w-1/3">Параметр</th>
                    <th className="text-left px-4 py-3 border border-border font-semibold text-blue-800">Мобильный</th>
                    <th className="text-left px-4 py-3 border border-border font-semibold text-crimson-700">Сплит-система</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Установка', 'DIY, 5–10 минут', 'Мастер, 2–4 часа + монтаж'],
                    ['Стоимость (сам аппарат)', '350–650 BYN', '600–2000+ BYN'],
                    ['Стоимость монтажа', 'Не нужен', '200–400 BYN'],
                    ['Итоговые затраты', '350–650 BYN', '800–2400+ BYN'],
                    ['Уровень шума', '44–54 дБ (компрессор в комнате)', '20–35 дБ (компрессор снаружи)'],
                    ['Эффективность охлаждения', 'Средняя (шланг пропускает тепло)', 'Высокая'],
                    ['Скорость охлаждения', '20–30 минут', '7–10 минут'],
                    ['Расход электроэнергии', '~700–900 кВт·ч/сезон', '~300–450 кВт·ч/сезон'],
                    ['Конденсат', 'Нужно сливать каждые 3–8 часов', 'Отводится автоматически'],
                    ['Мобильность', 'Да, можно перемещать', 'Нет, стационарная'],
                    ['Требует разрешений', 'Нет', 'Да (в МКД)', ],
                    ['Срок службы', '5–7 лет', '10–15 лет'],
                  ].map(([param, mobile, split]) => (
                    <tr key={param} className="hover:bg-zinc-50">
                      <td className="px-4 py-3 border border-border font-medium text-foreground text-sm">{param}</td>
                      <td className="px-4 py-3 border border-border text-muted-foreground text-sm">{mobile}</td>
                      <td className="px-4 py-3 border border-border text-muted-foreground text-sm">{split}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Section>

          <ArticleImage
            src="https://content.onliner.by/news/1100x5616/019fe2287353e2e03643a9dea8811efa.jpeg"
            alt="Установка мобильного кондиционера — шланг выведен в окно"
            caption="Шланг нужно выводить в окно — именно это сводит на нет главное преимущество мобильного кондиционера"
          />

          <Section title="Мобильный кондиционер: правда о «минусах», которые не рекламируют">
            <div className="space-y-4">
              {[
                {
                  title: 'Шум — главная проблема',
                  desc: 'Компрессор находится в комнате. Даже «тихие» модели издают 44–50 дБ — это сравнимо с шумом принтера или оживлённого разговора. Для спальни неприемлемо для большинства людей.',
                },
                {
                  title: 'Шланг нивелирует портативность',
                  desc: 'Шланг нужно выводить через окно или форточку. Окно не закрывается, щель пропускает горячий уличный воздух — кондиционер охлаждает этот горячий воздух в том числе. КПД падает.',
                },
                {
                  title: 'Конденсат нужно сливать вручную',
                  desc: 'В жару мобильный кондиционер собирает 3–8 литров воды в сутки. Если нет функции автоиспарения — бак нужно опустошать каждые несколько часов, иначе кондиционер отключится.',
                },
                {
                  title: 'Выше расход электроэнергии',
                  desc: 'Из-за неизбежных теплопотерь через шланг и корпус мобильный кондиционер потребляет на 50–100% больше электроэнергии за сезон по сравнению со сплитом аналогичной мощности.',
                },
              ].map(item => (
                <div key={item.title} className="bg-amber-50 border border-amber-200 rounded-xl p-4">
                  <p className="font-semibold text-amber-900 text-sm mb-1 flex items-center gap-2">
                    <Icon name="ExclamationTriangleIcon" size={15} className="text-amber-600" />
                    {item.title}
                  </p>
                  <p className="text-sm text-amber-800">{item.desc}</p>
                </div>
              ))}
            </div>
          </Section>

          <Section title="Когда мобильный — правильный выбор">
            <p className="text-muted-foreground leading-relaxed mb-4">
              Несмотря на очевидные недостатки, есть ситуации, когда мобильный кондиционер — оптимальное решение:
            </p>
            <ul className="space-y-3 mb-4">
              {[
                'Вы снимаете квартиру и не можете монтировать наружный блок',
                'Здание в историческом центре, где запрещено изменять фасад',
                'Дача или временное жильё — нет смысла тратиться на сплит',
                'Нужно охладить одно конкретное помещение буквально на лето',
                'Нет возможности получить разрешение на установку в МКД',
              ].map(item => (
                <li key={item} className="flex items-start gap-3">
                  <Icon name="CheckCircleIcon" size={16} className="text-emerald-500 mt-0.5 shrink-0" />
                  <span className="text-sm text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
            <TipBox type="tip">
              Если выбираете мобильный — ищите модели с функцией авто-испарения конденсата. Это сэкономит массу времени на опустошение бака.
            </TipBox>
          </Section>

          <Section title="Кому однозначно нужна сплит-система">
            <div className="bg-crimson-50 border border-crimson-100 rounded-2xl p-5">
              <ul className="space-y-3">
                {[
                  'Собственная квартира или дом — вы живёте здесь постоянно',
                  'Важна тишина: спальня, кабинет, детская комната',
                  'Хотите кондиционер и для охлаждения летом, и для обогрева осенью',
                  'Площадь комнаты от 25 м² — мобильный не справится',
                  'Используете кондиционер ежедневно — разница в расходе электроэнергии быстро окупит разницу в цене',
                ].map(item => (
                  <li key={item} className="flex items-start gap-3 text-sm text-foreground">
                    <Icon name="CheckCircleIcon" size={16} className="text-crimson-600 mt-0.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Section>

          <div className="bg-crimson-gradient rounded-3xl p-8 text-white text-center mt-12">
            <h2 className="text-2xl font-bold mb-3">Подберём оптимальный кондиционер под вашу ситуацию</h2>
            <p className="text-crimson-100 mb-6">Расскажите: своя квартира или съёмная, какая площадь, бюджет — и мы порекомендуем конкретную модель.</p>
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
                Каталог
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
