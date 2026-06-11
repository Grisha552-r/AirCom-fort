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
            { '@type': 'ListItem', position: 3, name: 'Как согласовать установку кондиционера в Беларуси: документы, сроки и штрафы' },
          ],
        }) }} />
        <div className="bg-crimson-gradient text-white">
          <div className="max-w-7xl mx-auto px-4 py-14">
            <nav className="flex items-center gap-2 text-sm text-crimson-200 mb-6 flex-wrap">
              <Link href="/" className="hover:text-white transition-colors">Главная</Link>
              <Icon name="ChevronRightIcon" size={14} />
              <Link href="/articles" className="hover:text-white transition-colors">Ответы на вопросы</Link>
              <Icon name="ChevronRightIcon" size={14} />
              <span className="text-white font-medium">Согласование установки</span>
            </nav>
            <div className="max-w-3xl">
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-white/20 text-white text-xs font-semibold px-3 py-1 rounded-full">Установка</span>
                <span className="text-crimson-200 text-sm flex items-center gap-1"><Icon name="ClockIcon" size={14} /> 5 мин</span>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-4">
                Как согласовать установку кондиционера в Беларуси: документы, сроки и штрафы
              </h1>
              <p className="text-crimson-100 text-lg leading-relaxed">
                Разбираем законодательство: когда нужно разрешение, что собрать, куда нести и что будет за самовольную установку.
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-3xl mx-auto px-4 py-12">

          <ArticleImage
            src="/assets/images/articles/ac-permit.jpg"
            alt="Установка кондиционера на фасаде многоквартирного дома"
            caption="Установка кондиционера на фасаде МКД требует согласования с местными органами власти"
          />

          <Section title="Кому нужно разрешение, а кому нет">
            <p className="text-muted-foreground leading-relaxed mb-4">
              В Беларуси порядок согласования установки кондиционеров регулируется Постановлением Совета Министров № 384 (с последующими редакциями). Главное правило:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <div className="bg-red-50 border-2 border-red-200 rounded-2xl p-5">
                <div className="flex items-center gap-2 mb-3">
                  <Icon name="ExclamationTriangleIcon" size={20} className="text-red-600" />
                  <p className="font-bold text-red-900">Разрешение НУЖНО:</p>
                </div>
                <ul className="space-y-2 text-sm text-red-800">
                  <li className="flex items-start gap-2"><Icon name="XMarkIcon" size={14} className="text-red-500 mt-0.5 shrink-0" />Многоквартирный дом — наружный блок на фасаде</li>
                  <li className="flex items-start gap-2"><Icon name="XMarkIcon" size={14} className="text-red-500 mt-0.5 shrink-0" />Административное здание</li>
                  <li className="flex items-start gap-2"><Icon name="XMarkIcon" size={14} className="text-red-500 mt-0.5 shrink-0" />Здание, находящееся под охраной как памятник архитектуры</li>
                </ul>
              </div>
              <div className="bg-emerald-50 border-2 border-emerald-200 rounded-2xl p-5">
                <div className="flex items-center gap-2 mb-3">
                  <Icon name="CheckCircleIcon" size={20} className="text-emerald-600" />
                  <p className="font-bold text-emerald-900">Разрешение НЕ нужно:</p>
                </div>
                <ul className="space-y-2 text-sm text-emerald-800">
                  <li className="flex items-start gap-2"><Icon name="CheckIcon" size={14} className="text-emerald-600 mt-0.5 shrink-0" />Частный дом или коттедж</li>
                  <li className="flex items-start gap-2"><Icon name="CheckIcon" size={14} className="text-emerald-600 mt-0.5 shrink-0" />Блок установлен на балконе или лоджии без выхода на уличный фасад</li>
                  <li className="flex items-start gap-2"><Icon name="CheckIcon" size={14} className="text-emerald-600 mt-0.5 shrink-0" />Мобильный кондиционер — отдельно стоящий, без монтажа</li>
                </ul>
              </div>
            </div>
            <TipBox type="info">
              Установка блока со стороны двора (не основного фасада) также требует согласования, но, как правило, проходит проще.
            </TipBox>
          </Section>

          <Section title="Какие документы нужно собрать">
            <p className="text-muted-foreground leading-relaxed mb-4">
              Для согласования установки кондиционера в многоквартирном доме вам понадобятся:
            </p>
            <div className="space-y-3">
              {[
                { num: '1', doc: 'Паспорт гражданина Республики Беларусь', note: 'Оригинал + копия' },
                { num: '2', doc: 'Технический паспорт квартиры', note: 'Получить в БТИ, если нет на руках' },
                { num: '3', doc: 'Документ о праве собственности на квартиру', note: 'Свидетельство или выписка из регистра' },
                { num: '4', doc: 'Заявление установленной формы', note: 'Бланк выдаётся в районной администрации' },
                { num: '5', doc: 'Схема размещения наружного блока', note: 'Достаточно схематичного чертежа с указанием этажа и стены' },
              ].map(item => (
                <div key={item.num} className="flex gap-4 bg-zinc-50 rounded-xl p-4 border border-border">
                  <div className="w-7 h-7 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">{item.num}</div>
                  <div>
                    <p className="font-semibold text-foreground text-sm">{item.doc}</p>
                    <p className="text-xs text-muted-foreground mt-0.5">{item.note}</p>
                  </div>
                </div>
              ))}
            </div>
          </Section>

          <Section title="Куда обращаться и сколько ждать">
            <p className="text-muted-foreground leading-relaxed mb-4">
              Заявление подаётся в местный исполнительный комитет (администрацию района) по месту нахождения квартиры. Можно лично или через систему «Одно окно».
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
              {[
                { icon: 'DocumentTextIcon', title: 'Подача', desc: 'Районная администрация или МФЦ «Одно окно»' },
                { icon: 'ClockIcon', title: 'Срок рассмотрения', desc: '15 рабочих дней (по закону)' },
                { icon: 'CurrencyDollarIcon', title: 'Стоимость', desc: 'Бесплатно — государственная пошлина не взимается' },
              ].map(item => (
                <div key={item.title} className="bg-blue-50 border border-blue-200 rounded-xl p-4 text-center">
                  <Icon name={item.icon} size={24} className="text-blue-600 mx-auto mb-2" />
                  <p className="font-bold text-blue-900 text-sm mb-1">{item.title}</p>
                  <p className="text-xs text-blue-800">{item.desc}</p>
                </div>
              ))}
            </div>
            <TipBox type="warning">
              В разрешении могут отказать, если здание является историческим памятником, если наружный блок будет выходить на главную улицу города, или если это нарушает архитектурный облик фасада.
            </TipBox>
          </Section>

          <Section title="Требования к сливу конденсата">
            <p className="text-muted-foreground leading-relaxed mb-4">
              Один из частых камней преткновения — куда отводить конденсат. Летом кондиционер производит 8–12 литров воды в сутки.
            </p>
            <div className="space-y-3">
              {[
                { ok: false, text: 'Сливать конденсат прямо с фасада вниз — запрещено (попадает на прохожих и фасад)' },
                { ok: false, text: 'Подключать дренаж в ливневую канализацию без согласования — также нарушение' },
                { ok: true, text: 'Правильный вариант: отводить в канализацию квартиры через специальную трубку' },
                { ok: true, text: 'Допустимо: сборный бак с ручным опустошением (для мобильных и временных вариантов)' },
              ].map(item => (
                <div key={item.text} className={`flex items-start gap-3 p-3 rounded-xl border ${item.ok ? 'bg-emerald-50 border-emerald-200' : 'bg-red-50 border-red-200'}`}>
                  <Icon name={item.ok ? 'CheckCircleIcon' : 'XCircleIcon'} size={16} className={item.ok ? 'text-emerald-600 mt-0.5 shrink-0' : 'text-red-500 mt-0.5 shrink-0'} />
                  <span className={`text-sm ${item.ok ? 'text-emerald-900' : 'text-red-900'}`}>{item.text}</span>
                </div>
              ))}
            </div>
          </Section>

          <Section title="Штрафы за самовольную установку">
            <p className="text-muted-foreground leading-relaxed mb-4">
              Установка кондиционера на фасаде без разрешения — административное правонарушение. Санкции по Кодексу об административных правонарушениях:
            </p>
            <div className="bg-red-50 border border-red-200 rounded-2xl p-5 mb-4">
              <div className="space-y-3">
                {[
                  { label: 'Штраф для физического лица', value: '84–630 BYN (2–15 базовых величин)' },
                  { label: 'Требование демонтировать блок', value: 'За счёт нарушителя' },
                  { label: 'Срок добровольного демонтажа', value: 'Устанавливается предписанием (обычно 30 дней)' },
                  { label: 'Принудительный демонтаж', value: 'Если не выполнено предписание — за счёт владельца + расходы' },
                ].map(item => (
                  <div key={item.label} className="flex items-start justify-between gap-4 py-2 border-b border-red-100 last:border-0">
                    <span className="text-sm text-red-900">{item.label}</span>
                    <span className="text-sm font-bold text-red-800 shrink-0 text-right">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
            <TipBox type="info">
              Легализовать уже установленный кондиционер можно задним числом — подав те же документы. Но штраф при этом, скорее всего, всё равно выпишут.
            </TipBox>
          </Section>

          <Section title="Кратко: что нужно запомнить">
            <div className="bg-zinc-50 border border-border rounded-2xl p-5">
              <ul className="space-y-3">
                {[
                  'В частном доме — никаких разрешений не нужно, устанавливайте спокойно',
                  'В МКД — нужно согласование в районной администрации. Это бесплатно и занимает 15 рабочих дней',
                  'Балкон / лоджия, не выходящие на главный фасад — проще согласовать',
                  'Конденсат нельзя сливать на улицу — только в канализацию квартиры',
                  'Штраф за самовольную установку — до 630 BYN + возможный принудительный демонтаж',
                  'Лицензированные установщики, как правило, помогают с оформлением документов',
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
            <h2 className="text-2xl font-bold mb-3">Установим кондиционер правильно и законно</h2>
            <p className="text-crimson-100 mb-6">Выполняем монтаж с соблюдением всех требований. Консультируем по вопросам согласования. Гарантия на работы 1 год.</p>
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
                Услуги монтажа
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
