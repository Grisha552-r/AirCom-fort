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
            { '@type': 'ListItem', position: 3, name: 'Чистка и обслуживание кондиционера' },
          ],
        }) }} />
        <div className="bg-crimson-gradient text-white">
          <div className="max-w-7xl mx-auto px-4 py-14">
            <nav className="flex items-center gap-2 text-sm text-crimson-200 mb-6 flex-wrap">
              <Link href="/" className="hover:text-white transition-colors">Главная</Link>
              <Icon name="ChevronRightIcon" size={14} />
              <Link href="/articles" className="hover:text-white transition-colors">Ответы на вопросы</Link>
              <Icon name="ChevronRightIcon" size={14} />
              <span className="text-white font-medium">Чистка и обслуживание</span>
            </nav>
            <div className="max-w-3xl">
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-white/20 text-white text-xs font-semibold px-3 py-1 rounded-full">Обслуживание</span>
                <span className="text-crimson-200 text-sm flex items-center gap-1"><Icon name="ClockIcon" size={14} /> 8 мин</span>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-4">
                Чистка и обслуживание кондиционера: когда, как и почему это важно
              </h1>
              <p className="text-crimson-100 text-lg leading-relaxed">
                Кондиционер без ухода — источник пыли, плесени и поломок. Рассказываем, что делать самому, а что отдать мастеру.
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-3xl mx-auto px-4 py-12">

          <ArticleImage
            src="/assets/images/articles/ac-cleaning.png"
            alt="Обслуживание кондиционера — чистка фильтров и теплообменника"
            caption="Регулярное обслуживание продлевает ресурс кондиционера на 5–7 лет"
          />

          <Section title="Что происходит с кондиционером без ухода">
            <p className="text-muted-foreground leading-relaxed mb-4">
              Внутренний блок кондиционера непрерывно прогоняет через себя воздух из помещения. Вместе с ним туда попадают пыль, шерсть животных, пыльца, жир (особенно на кухне) и споры плесени. Всё это оседает на фильтрах и испарителе.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              При температуре около 8–12°C, которая держится на поверхности испарителя в режиме охлаждения, влажная пыль становится идеальной средой для размножения бактерий и плесневых грибков. После этого кондиционер начинает буквально «выдувать» их в воздух комнаты.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
              {[
                { icon: 'ExclamationTriangleIcon', color: 'text-red-500 bg-red-50', title: 'Здоровье', desc: 'Аллергии, хронические насморки, запах затхлости из блока' },
                { icon: 'BoltIcon', color: 'text-amber-500 bg-amber-50', title: 'Эффективность', desc: 'Забитые фильтры снижают холодопроизводительность на 20–30%' },
                { icon: 'WrenchScrewdriverIcon', color: 'text-blue-500 bg-blue-50', title: 'Ресурс', desc: 'Без обслуживания срок службы сокращается с 12–15 до 5–7 лет' },
              ].map(item => (
                <div key={item.title} className={`${item.color} rounded-xl p-4 text-center border border-border`}>
                  <Icon name={item.icon} size={28} className={`${item.color.split(' ')[0]} mx-auto mb-2`} />
                  <p className="font-bold text-foreground text-sm mb-1">{item.title}</p>
                  <p className="text-xs text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </Section>

          <Section title="Что можно сделать самостоятельно">
            <p className="text-muted-foreground leading-relaxed mb-4">
              Базовый уход за кондиционером не требует инструментов или специальных навыков. Вот что под силу любому владельцу:
            </p>
            <div className="space-y-4">
              {[
                {
                  step: '1',
                  title: 'Промывка фильтров — раз в 2–4 недели',
                  desc: 'Откройте крышку внутреннего блока, извлеките пластиковые фильтры и промойте под тёплой водой (без порошков). Просушите и верните на место. Весь процесс занимает 10–15 минут.',
                },
                {
                  step: '2',
                  title: 'Протирка корпуса — раз в месяц',
                  desc: 'Протрите внешний корпус внутреннего блока влажной тряпкой без агрессивной химии. Не допускайте скопления пыли на жалюзи и решётках.',
                },
                {
                  step: '3',
                  title: 'Проверка дренажа — раз в сезон',
                  desc: 'Убедитесь, что из дренажного шланга (обычно выходит наружу) ничего не капает внутрь помещения. Если вода скапливается в поддоне — дренаж засорён.',
                },
                {
                  step: '4',
                  title: 'Осмотр наружного блока — весной',
                  desc: 'Проверьте, не забит ли радиатор наружного блока листьями, тополиным пухом или грязью. Если забит — аккуратно продуйте струёй воды из шланга (без напора).',
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
          </Section>

          <ArticleImage
            src="https://aircomfort.by/upload/iblock/d10/bnhan9q9ellfkbroc6f8tjy6bl8cwpq0.jpg"
            alt="Профессиональная чистка кондиционера мастером"
            caption="Профессиональная глубокая чистка теплообменника и поддона — то, что нельзя сделать дома"
          />

          <Section title="Что делает мастер при профессиональном обслуживании">
            <p className="text-muted-foreground leading-relaxed mb-4">
              Раз в год, перед сезоном (обычно апрель–май), рекомендуется вызвать специалиста. Он выполняет работы, недоступные без профессионального оборудования:
            </p>
            <ul className="space-y-3 mb-6">
              {[
                { title: 'Глубокая промывка испарителя', desc: 'С помощью специального пенного раствора и аппарата высокого давления очищается от жирового налёта и биологических загрязнений' },
                { title: 'Дезинфекция блока', desc: 'Антибактериальный препарат уничтожает плесень и бактерии на всех поверхностях внутри блока' },
                { title: 'Прочистка и промывка дренажной системы', desc: 'Устраняет засоры, которые приводят к протечкам и затоплению потолка соседей снизу' },
                { title: 'Проверка давления фреона', desc: 'Измеряется давление в системе — при необходимости дозаправляется. Естественная утечка: 30–50 г в год' },
                { title: 'Диагностика электроники и механики', desc: 'Проверяется состояние платы, компрессора, вентиляторов и клапанов' },
              ].map(item => (
                <li key={item.title} className="flex items-start gap-3">
                  <Icon name="CheckCircleIcon" size={16} className="text-emerald-500 mt-0.5 shrink-0" />
                  <div>
                    <span className="font-semibold text-foreground text-sm">{item.title}</span>
                    <span className="text-muted-foreground text-sm"> — {item.desc}</span>
                  </div>
                </li>
              ))}
            </ul>
            <TipBox type="info">
              Стоимость профессионального обслуживания в Беларуси — от 70 до 150 рублей в зависимости от типа и мощности кондиционера. Это в разы дешевле ремонта после игнорирования ТО.
            </TipBox>
          </Section>

          <Section title="Признаки, что кондиционер срочно нужно почистить">
            <p className="text-muted-foreground leading-relaxed mb-4">
              Не ждите планового ТО, если заметили хотя бы один из этих симптомов:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { icon: 'EyeDropperIcon', text: 'Неприятный или затхлый запах при включении' },
                { icon: 'ArrowsPointingInIcon', text: 'Заметно снизился поток воздуха из блока' },
                { icon: 'BeakerIcon', text: 'Внутри блока или под ним появляется вода' },
                { icon: 'SpeakerWaveIcon', text: 'Появился шум, треск или вибрация' },
                { icon: 'BoltIcon', text: 'Счёт за электричество вырос без изменения режима' },
                { icon: 'ExclamationTriangleIcon', text: 'Горят индикаторы ошибок или мигает подсветка' },
              ].map(item => (
                <div key={item.text} className="flex items-start gap-3 bg-red-50 border border-red-100 rounded-xl p-3">
                  <Icon name={item.icon} size={16} className="text-red-500 mt-0.5 shrink-0" />
                  <p className="text-sm text-foreground">{item.text}</p>
                </div>
              ))}
            </div>
          </Section>

          <Section title="Как часто обслуживать: краткий ориентир">
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-zinc-50">
                    <th className="text-left px-4 py-3 border border-border font-semibold text-foreground">Работа</th>
                    <th className="text-left px-4 py-3 border border-border font-semibold text-foreground">Периодичность</th>
                    <th className="text-left px-4 py-3 border border-border font-semibold text-foreground">Кто выполняет</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Промывка фильтров', 'Раз в 2–4 недели', 'Сам владелец'],
                    ['Протирка корпуса', 'Раз в месяц', 'Сам владелец'],
                    ['Осмотр дренажа', 'Раз в сезон', 'Сам владелец'],
                    ['Глубокая чистка + дезинфекция', '1–2 раза в год', 'Мастер'],
                    ['Проверка давления фреона', '1 раз в год', 'Мастер'],
                    ['Полная диагностика', '1 раз в год', 'Мастер'],
                  ].map(([work, freq, who]) => (
                    <tr key={work} className="hover:bg-zinc-50">
                      <td className="px-4 py-3 border border-border text-muted-foreground">{work}</td>
                      <td className="px-4 py-3 border border-border font-medium text-foreground">{freq}</td>
                      <td className="px-4 py-3 border border-border text-muted-foreground">{who}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Section>

          <div className="bg-crimson-gradient rounded-3xl p-8 text-white text-center mt-12">
            <h2 className="text-2xl font-bold mb-3">Нужно обслуживание кондиционера?</h2>
            <p className="text-crimson-100 mb-6">Выполняем профессиональную чистку, дезинфекцию и диагностику. Работаем по Гомелю и области. Фиксированные цены, гарантия на работы 1 год.</p>
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
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
