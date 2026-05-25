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
            { '@type': 'ListItem', position: 3, name: 'Как правильно пользоваться кондиционером летом: советы и частые ошибки' },
          ],
        }) }} />
        <div className="bg-crimson-gradient text-white">
          <div className="max-w-7xl mx-auto px-4 py-14">
            <nav className="flex items-center gap-2 text-sm text-crimson-200 mb-6 flex-wrap">
              <Link href="/" className="hover:text-white transition-colors">Главная</Link>
              <Icon name="ChevronRightIcon" size={14} />
              <Link href="/articles" className="hover:text-white transition-colors">Ответы на вопросы</Link>
              <Icon name="ChevronRightIcon" size={14} />
              <span className="text-white font-medium">Как пользоваться летом</span>
            </nav>
            <div className="max-w-3xl">
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-white/20 text-white text-xs font-semibold px-3 py-1 rounded-full">Эксплуатация</span>
                <span className="text-crimson-200 text-sm flex items-center gap-1"><Icon name="ClockIcon" size={14} /> 6 мин</span>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-4">
                Как правильно пользоваться кондиционером летом: советы и частые ошибки
              </h1>
              <p className="text-crimson-100 text-lg leading-relaxed">
                Простые правила, которые помогут не простудиться, не навредить технике и действительно сэкономить на электричестве.
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-3xl mx-auto px-4 py-12">

          <ArticleImage
            src="https://static.tildacdn.com/tild6233-3334-4062-b238-386537323331/rendy-novantino-Pjx2.jpg"
            alt="Правильное использование кондиционера летом в квартире"
            caption="Комфортная температура в помещении — это 23–26°C, а не максимальный холод"
          />

          <Section title="Какую температуру выставить">
            <p className="text-muted-foreground leading-relaxed mb-4">
              Самая распространённая ошибка — выставить +18°C в надежде охладиться побыстрее. Это не ускоряет охлаждение, зато гарантирует простуды и перегрев компрессора.
            </p>
            <div className="bg-blue-50 border border-blue-200 rounded-2xl p-5 mb-4">
              <p className="font-bold text-blue-900 mb-3">Комфортная температура для разных помещений:</p>
              <div className="space-y-2">
                {[
                  { room: 'Спальня', temp: '24–26°C', note: 'Ниже — риск переохлаждения во сне' },
                  { room: 'Гостиная / зал', temp: '23–25°C', note: 'Оптимальный баланс комфорта и экономии' },
                  { room: 'Офис', temp: '23–24°C', note: 'Рекомендации ВОЗ для рабочих помещений' },
                  { room: 'Кухня', temp: '22–24°C', note: 'Учитывайте тепловыделение от плиты' },
                ].map(item => (
                  <div key={item.room} className="flex items-center justify-between gap-4 py-2 border-b border-blue-100 last:border-0">
                    <span className="text-sm font-semibold text-blue-900">{item.room}</span>
                    <span className="text-sm font-bold text-crimson-700 shrink-0">{item.temp}</span>
                    <span className="text-xs text-blue-700 hidden sm:block">{item.note}</span>
                  </div>
                ))}
              </div>
            </div>
            <TipBox type="warning">
              Разница между температурой на улице и в помещении не должна превышать 7–8°C. Если на улице +30°C, выставьте не ниже +22°C. Резкий перепад при выходе из комнаты — стресс для сердечно-сосудистой системы.
            </TipBox>
          </Section>

          <Section title="Куда направлять поток воздуха">
            <p className="text-muted-foreground leading-relaxed mb-4">
              Холодный воздух тяжелее тёплого и опускается вниз сам по себе. Поэтому направляйте жалюзи горизонтально или чуть вверх — так воздух равномерно распределится по всей комнате, а не будет дуть точечно.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4">
                <p className="font-semibold text-emerald-800 mb-2 text-sm flex items-center gap-2">
                  <Icon name="CheckCircleIcon" size={16} className="text-emerald-600" />
                  Правильно
                </p>
                <ul className="space-y-1 text-sm text-emerald-900">
                  <li>— Жалюзи горизонтально или вверх</li>
                  <li>— Воздух направлен к стене или потолку</li>
                  <li>— Никто не сидит прямо под потоком</li>
                  <li>— Мебель не перекрывает блок</li>
                </ul>
              </div>
              <div className="bg-red-50 border border-red-200 rounded-xl p-4">
                <p className="font-semibold text-red-800 mb-2 text-sm flex items-center gap-2">
                  <Icon name="XMarkIcon" size={16} className="text-red-500" />
                  Неправильно
                </p>
                <ul className="space-y-1 text-sm text-red-900">
                  <li>— Струя воздуха прямо на человека</li>
                  <li>— Дует на спящего ребёнка</li>
                  <li>— Шкаф или шторы закрывают блок</li>
                  <li>— Максимально вниз на рабочее место</li>
                </ul>
              </div>
            </div>
          </Section>

          <Section title="Режимы: что выбрать и когда">
            <div className="space-y-4">
              {[
                {
                  icon: 'SunIcon',
                  mode: 'Охлаждение (❄️ Cold)',
                  color: 'bg-blue-50 border-blue-200 text-blue-900',
                  badge: 'bg-blue-100 text-blue-700',
                  desc: 'Основной режим в жару. Кондиционер охлаждает воздух до заданной температуры. Одновременно осушает воздух — норма.',
                },
                {
                  icon: 'CloudIcon',
                  mode: 'Осушение (💧 Dry)',
                  color: 'bg-cyan-50 border-cyan-200 text-cyan-900',
                  badge: 'bg-cyan-100 text-cyan-700',
                  desc: 'Снижает влажность без сильного охлаждения. Идеально в пасмурную тёплую погоду, когда не жарко, но душно. Оптимальная влажность — 40–60%.',
                },
                {
                  icon: 'ArrowsRightLeftIcon',
                  mode: 'Вентиляция (Fan)',
                  color: 'bg-zinc-50 border-zinc-200 text-zinc-900',
                  badge: 'bg-zinc-100 text-zinc-600',
                  desc: 'Просто гоняет воздух без нагрева и охлаждения. Полезен ночью, когда температура снизилась — экономит электроэнергию.',
                },
                {
                  icon: 'FireIcon',
                  mode: 'Обогрев (🔥 Heat)',
                  color: 'bg-orange-50 border-orange-200 text-orange-900',
                  badge: 'bg-orange-100 text-orange-700',
                  desc: 'Работает как тепловой насос — в 2,5–3 раза эффективнее электрообогревателя. Актуален осенью и весной при +5°C и выше на улице.',
                },
              ].map(item => (
                <div key={item.mode} className={`${item.color} border rounded-xl p-4 flex gap-3`}>
                  <Icon name={item.icon} size={20} className="mt-0.5 shrink-0 opacity-70" />
                  <div>
                    <p className="font-bold text-sm mb-1">{item.mode}</p>
                    <p className="text-sm opacity-80">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </Section>

          <Section title="5 частых ошибок, которые вредят здоровью и технике">
            <div className="space-y-4">
              {[
                {
                  num: '1',
                  title: 'Держать включённым 24/7 без вентиляции',
                  desc: 'Воздух в закрытой комнате пересушивается, концентрация CO₂ растёт. Каждые 3–4 часа проветривайте 10–15 минут — выключите кондиционер, откройте окно.',
                },
                {
                  num: '2',
                  title: 'Выставлять минимальную температуру для скорости',
                  desc: 'Кондиционер охлаждает с одинаковой скоростью при любой заданной температуре. На +18°C он просто будет работать дольше и потребит больше электричества.',
                },
                {
                  num: '3',
                  title: 'Спать прямо под потоком воздуха',
                  desc: 'Даже небольшой сквозняк за несколько часов сна вызывает миозит (боль в мышцах), фарингит или насморк. Направляйте жалюзи в сторону или к потолку.',
                },
                {
                  num: '4',
                  title: 'Не менять фильтры весь сезон',
                  desc: 'Пыль на фильтрах — питательная среда для бактерий. Кроме запаха, это снижает холодопроизводительность и увеличивает расход электроэнергии на 15–20%.',
                },
                {
                  num: '5',
                  title: 'Открывать окна при работающем кондиционере',
                  desc: 'Кондиционер будет охлаждать улицу. Расход энергии вырастет в разы, компрессор будет работать на пределе — это сокращает срок его службы.',
                },
              ].map(item => (
                <div key={item.num} className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-red-100 text-red-700 flex items-center justify-center font-bold text-sm shrink-0 mt-0.5">{item.num}</div>
                  <div>
                    <p className="font-semibold text-foreground mb-1 text-sm">{item.title}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </Section>

          <Section title="Советы для аллергиков">
            <p className="text-muted-foreground leading-relaxed mb-4">
              Кондиционер может стать союзником или врагом аллергика — в зависимости от того, как за ним ухаживают.
            </p>
            <ul className="space-y-3">
              {[
                'Меняйте фильтры каждые 2–3 недели в сезон цветения',
                'Выбирайте модели с угольными или HEPA-фильтрами — они задерживают пыльцу и мелкую пыль',
                'После зимнего простоя обязательно сделайте профессиональную чистку перед включением',
                'Используйте режим осушения — сухой воздух менее комфортен для клещей домашней пыли',
                'Не ставьте кондиционер над кроватью или диваном — при загрязнённом фильтре грязь осядет прямо на вас',
              ].map(tip => (
                <li key={tip} className="flex items-start gap-3">
                  <Icon name="CheckCircleIcon" size={16} className="text-emerald-500 mt-0.5 shrink-0" />
                  <span className="text-sm text-muted-foreground">{tip}</span>
                </li>
              ))}
            </ul>
          </Section>

          <div className="bg-crimson-gradient rounded-3xl p-8 text-white text-center mt-12">
            <h2 className="text-2xl font-bold mb-3">Вопросы по эксплуатации кондиционера?</h2>
            <p className="text-crimson-100 mb-6">Звоните — консультируем бесплатно. Работаем с 9:00 до 18:00, понедельник–суббота.</p>
            <a
              href="tel:+375291050694"
              onClick={e => { e.preventDefault(); window.open('tel:+375291050694'); }}
              className="inline-flex items-center justify-center gap-2 bg-white text-crimson-700 px-8 py-3.5 rounded-xl font-bold hover:bg-crimson-50 transition-colors"
            >
              <Icon name="PhoneIcon" size={18} />
              +375 29 105-06-94
            </a>
          </div>

          <div className="mt-10 pt-6 border-t border-border flex items-center justify-between flex-wrap gap-4">
            <Link href="/articles" className="flex items-center gap-2 text-crimson-700 font-semibold hover:underline text-sm">
              <Icon name="ArrowLeftIcon" size={16} />
              Все статьи
            </Link>
            <Link href="/articles/chistka-i-obsluzhivanie" className="flex items-center gap-2 text-crimson-700 font-semibold hover:underline text-sm">
              Чистка и обслуживание →
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
