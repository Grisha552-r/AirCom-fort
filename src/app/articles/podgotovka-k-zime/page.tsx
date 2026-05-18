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
        <div className="bg-crimson-gradient text-white">
          <div className="max-w-7xl mx-auto px-4 py-14">
            <nav className="flex items-center gap-2 text-sm text-crimson-200 mb-6 flex-wrap">
              <Link href="/" className="hover:text-white transition-colors">Главная</Link>
              <Icon name="ChevronRightIcon" size={14} />
              <Link href="/articles" className="hover:text-white transition-colors">Ответы на вопросы</Link>
              <Icon name="ChevronRightIcon" size={14} />
              <span className="text-white font-medium">Подготовка к зиме</span>
            </nav>
            <div className="max-w-3xl">
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-white/20 text-white text-xs font-semibold px-3 py-1 rounded-full">Эксплуатация</span>
                <span className="text-crimson-200 text-sm flex items-center gap-1"><Icon name="ClockIcon" size={14} /> 7 мин</span>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-4">
                Подготовка кондиционера к зиме: пошаговое руководство
              </h1>
              <p className="text-crimson-100 text-lg leading-relaxed">
                Что нужно сделать осенью, чтобы кондиционер без потерь пережил мороз и надёжно заработал следующим летом.
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-3xl mx-auto px-4 py-12">

          <ArticleImage
            src="https://klimresh.by/imager/resized/news-single/450x275-Qpvs94OINi3S7YsdbyuQaF1TR2bkkK-metaa29uZGljaW9uZXItcG9kZ290b3ZrYS1rLXppbWUucG5n-.png"
            alt="Подготовка кондиционера к зиме — консервация на зимний период"
            caption="Правильная консервация продлевает ресурс наружного блока и предотвращает поломки от мороза"
          />

          <Section title="Два сценария: законсервировать или продолжить использовать">
            <p className="text-muted-foreground leading-relaxed mb-4">
              Перед тем как что-то делать, определитесь: вы планируете отключить кондиционер до весны или хотите использовать его зимой для обогрева?
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <div className="bg-blue-50 border-2 border-blue-200 rounded-2xl p-5">
                <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center mb-3">
                  <Icon name="ArchiveBoxIcon" size={22} className="text-blue-600" />
                </div>
                <h3 className="font-bold text-foreground mb-2">Сценарий 1: Консервация</h3>
                <p className="text-sm text-muted-foreground">Вы не будете использовать кондиционер до тепла. Нужно правильно подготовить оба блока к простою при отрицательных температурах.</p>
              </div>
              <div className="bg-orange-50 border-2 border-orange-200 rounded-2xl p-5">
                <div className="w-10 h-10 bg-orange-100 rounded-xl flex items-center justify-center mb-3">
                  <Icon name="FireIcon" size={22} className="text-orange-600" />
                </div>
                <h3 className="font-bold text-foreground mb-2">Сценарий 2: Зимний обогрев</h3>
                <p className="text-sm text-muted-foreground">Вы хотите использовать кондиционер как тепловой насос зимой. Здесь свои ограничения и подготовка.</p>
              </div>
            </div>
          </Section>

          <Section title="Сценарий 1: Консервация на зиму — пошагово">
            <div className="space-y-4 mb-6">
              {[
                {
                  step: '1',
                  title: 'Последнее включение и перегон фреона',
                  desc: 'Специалист переводит весь хладагент из внутреннего блока в наружный. Это предотвращает утечку через уплотнения при замерзании. Делается при температуре не ниже +5°C на улице.',
                },
                {
                  step: '2',
                  title: 'Чистка и сушка внутреннего блока',
                  desc: 'Промойте и полностью просушите фильтры. Оставьте крышку блока немного приоткрытой на несколько часов — чтобы исключить конденсат и плесень за зиму.',
                },
                {
                  step: '3',
                  title: 'Прочистка дренажной системы',
                  desc: 'Дренажная трубка при минусовых температурах может промёрзнуть. Убедитесь, что она пуста — продуйте или промойте. Если трубка проходит через стену без утепления, утеплите её.',
                },
                {
                  step: '4',
                  title: 'Осмотр наружного блока',
                  desc: 'Проверьте крепления на стене — кронштейны должны быть надёжно затянуты. Убедитесь, что ничто не нависает над блоком: сосульки и лёд весной могут повредить радиатор.',
                },
                {
                  step: '5',
                  title: 'Отключение от питания',
                  desc: 'Выключите кондиционер через пульт (режим ожидания не считается). Желательно выключить автомат или вынуть вилку. Это защитит от случайного включения в мороз.',
                },
              ].map(item => (
                <div key={item.step} className="flex gap-4 bg-zinc-50 rounded-xl p-4 border border-border">
                  <div className="w-8 h-8 rounded-full bg-crimson-600 text-white flex items-center justify-center font-bold text-sm shrink-0 mt-0.5">{item.step}</div>
                  <div>
                    <p className="font-semibold text-foreground mb-1 text-sm">{item.title}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <TipBox type="warning">
              Не накрывайте наружный блок герметичным чехлом или плёнкой. Внутри будет скапливаться конденсат, что ускоряет коррозию. Если хотите защитить от льда — используйте специальный сетчатый козырёк.
            </TipBox>
          </Section>

          <ArticleImage
            src="https://fls1.lexx.me/u3/503/content/21959.jpg"
            alt="Наружный блок кондиционера зимой в снегу"
            caption="Наружный блок не нуждается в укрытии — он создан выдерживать морозы. Главное — не допустить обледенения дренажа"
          />

          <Section title="Сценарий 2: Использование кондиционера зимой для обогрева">
            <p className="text-muted-foreground leading-relaxed mb-4">
              Современные инверторные кондиционеры работают в режиме обогрева вплоть до –15…–25°C (зависит от модели). Это выгоднее электрообогревателя в 2,5–3 раза: на 1 кВт потреблённой энергии кондиционер даёт 2,5–3 кВт тепла.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Но есть ограничения:
            </p>
            <ul className="space-y-3 mb-4">
              {[
                { warn: true, text: 'Стандартные модели работают до –5°C…–15°C. При более сильном морозе компрессор отключается автоматически (защита)' },
                { warn: true, text: 'При работе в мороз обмерзает наружный блок — включается режим авторазморозки (блок временно греет себя, а не комнату)' },
                { warn: true, text: 'Дренаж конденсата зимой может замёрзнуть — нужен нагревательный кабель на дренажной трубке' },
                { warn: false, text: 'Если планируете обогревать зимой — уточните при покупке минимальную рабочую температуру и наличие «зимнего комплекта»' },
              ].map(item => (
                <li key={item.text} className="flex items-start gap-3">
                  <Icon name={item.warn ? 'ExclamationTriangleIcon' : 'CheckCircleIcon'} size={16} className={item.warn ? 'text-amber-500 mt-0.5 shrink-0' : 'text-emerald-500 mt-0.5 shrink-0'} />
                  <span className="text-sm text-muted-foreground">{item.text}</span>
                </li>
              ))}
            </ul>
            <TipBox type="info">
              «Зимний комплект» — это нагревательный кабель для дренажа и подогрев масла компрессора. Без него безопасная работа обогревателем при морозе ниже –10°C невозможна.
            </TipBox>
          </Section>

          <Section title="Самые частые ошибки при подготовке к зиме">
            <div className="space-y-3">
              {[
                {
                  title: 'Включить кондиционер при морозе без подготовки',
                  desc: 'Холодное масло в компрессоре густеет — запуск в мороз без прогрева может привести к поломке компрессора стоимостью 500–1000 рублей.',
                },
                {
                  title: 'Не чистить фильтры перед зимой',
                  desc: 'Влажные фильтры с пылью за зиму превратятся в рассадник плесени. Весной при первом включении всё это полетит в воздух квартиры.',
                },
                {
                  title: 'Оставить воду в дренажном поддоне',
                  desc: 'Замёрзшая вода расширяется и может треснуть поддон или повредить дренажный насос.',
                },
                {
                  title: 'Включить режим охлаждения зимой «проверить как работает»',
                  desc: 'При низкой температуре на улице давление в системе падает ниже допустимого — это приводит к поломке компрессора.',
                },
              ].map(item => (
                <div key={item.title} className="flex gap-3 bg-red-50 border border-red-100 rounded-xl p-4">
                  <Icon name="XCircleIcon" size={18} className="text-red-500 mt-0.5 shrink-0" />
                  <div>
                    <p className="font-semibold text-red-800 text-sm mb-1">{item.title}</p>
                    <p className="text-sm text-red-700">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </Section>

          <Section title="Чек-лист: что сделать до первых морозов">
            <div className="bg-zinc-50 border border-border rounded-2xl p-5">
              <p className="font-semibold text-foreground mb-4 text-sm">Оптимальное время — конец сентября–октябрь, до устойчивых минусов:</p>
              <div className="space-y-2">
                {[
                  'Промыть и просушить фильтры внутреннего блока',
                  'Протереть внутренний блок от пыли, немного проветрить',
                  'Прочистить дренажную трубку (продуть или промыть)',
                  'Проверить крепления наружного блока',
                  'Вызвать специалиста для перегона фреона (если не обогреваете зимой)',
                  'Выключить кондиционер из сети или отключить автомат',
                  'При наличии зимнего комплекта — убедиться, что кабели подключены',
                ].map(item => (
                  <label key={item} className="flex items-start gap-3 cursor-pointer group">
                    <div className="w-4 h-4 rounded border-2 border-zinc-300 mt-0.5 shrink-0 group-hover:border-crimson-400 transition-colors" />
                    <span className="text-sm text-muted-foreground">{item}</span>
                  </label>
                ))}
              </div>
            </div>
          </Section>

          <div className="bg-crimson-gradient rounded-3xl p-8 text-white text-center mt-12">
            <h2 className="text-2xl font-bold mb-3">Подготовим кондиционер к зиме за вас</h2>
            <p className="text-crimson-100 mb-6">Выполним перегон фреона, чистку, промывку дренажа и полную диагностику. Работаем по Гомелю и области.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+375291050694"
                onClick={e => { e.preventDefault(); window.open('tel:+375291050694'); }}
                className="flex items-center justify-center gap-2 bg-white text-crimson-700 px-6 py-3 rounded-xl font-bold hover:bg-crimson-50 transition-colors"
              >
                <Icon name="PhoneIcon" size={18} />
                +375 29 105-06-94
              </a>
              <Link href="/services" className="flex items-center justify-center gap-2 bg-white/20 border border-white/40 text-white px-6 py-3 rounded-xl font-bold hover:bg-white/30 transition-colors">
                Услуги и цены
                <Icon name="ArrowRightIcon" size={16} />
              </Link>
            </div>
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
