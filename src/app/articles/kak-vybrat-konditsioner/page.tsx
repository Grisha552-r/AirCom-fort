'use client';
import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CartDrawer from '@/components/CartDrawer';
import Icon from '@/components/ui/AppIcon';
import Link from 'next/link';

const IMAGES = {
  hero:    'https://cdn21vek.by/img/tmp/66ab9176d2a9b.jpeg',
  power:   'https://cdn21vek.by/img/tmp/66ad0fe1ba938.jpeg',
  types:   'https://cdn21vek.by/img/tmp/66ad1222b5e8b.jpeg',
  modes:   'https://cdn21vek.by/img/tmp/66ad125659f9a.jpeg',
  wifi:    'https://cdn21vek.by/img/tmp/66ad12815eec8.jpeg',
  filters: 'https://cdn21vek.by/img/tmp/66ad1465c5574.jpeg',
  winter:  'https://cdn21vek.by/img/tmp/66ad149706546.jpeg',
  energy:  'https://cdn21vek.by/img/tmp/66ad1521bd52f.jpeg',
  install: 'https://cdn21vek.by/img/tmp/66ad15d03848f.jpeg',
  service: 'https://cdn21vek.by/img/tmp/66ad15e82c6c8.jpeg',
  brands:  'https://cdn21vek.by/img/tmp/66ad15f9d7c13.jpeg',
};

function ArticleImage({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="rounded-2xl overflow-hidden my-6 border border-border">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} alt={alt} className="w-full object-cover" />
    </div>
  );
}

function Section({ icon, title, children }: { icon: string; title: string; children: React.ReactNode }) {
  return (
    <section className="mb-10">
      <h2 className="flex items-center gap-3 text-xl font-bold text-foreground mb-4">
        <span className="w-9 h-9 rounded-xl bg-crimson-100 flex items-center justify-center shrink-0">
          <Icon name={icon} size={18} className="text-crimson-700" />
        </span>
        {title}
      </h2>
      <div className="text-muted-foreground leading-relaxed space-y-3">{children}</div>
    </section>
  );
}

function TipBox({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-crimson-50 border border-crimson-200 rounded-2xl p-5 my-5 flex gap-3">
      <Icon name="LightBulbIcon" size={20} className="text-crimson-600 shrink-0 mt-0.5" />
      <p className="text-sm text-crimson-800 leading-relaxed">{children}</p>
    </div>
  );
}

export default function ArticlePage() {
  const [cartOpen, setCartOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <Header onCartOpen={() => setCartOpen(true)} />
      <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} />

      <main className="max-w-3xl mx-auto px-4 py-10">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
          <Link href="/" className="hover:text-crimson-700 transition-colors">Главная</Link>
          <Icon name="ChevronRightIcon" size={14} />
          <Link href="/articles" className="hover:text-crimson-700 transition-colors">Ответы на вопросы</Link>
          <Icon name="ChevronRightIcon" size={14} />
          <span className="text-foreground font-medium truncate">Как выбрать кондиционер</span>
        </nav>

        {/* Header */}
        <div className="mb-8">
          <span className="bg-crimson-100 text-crimson-700 text-xs font-semibold px-3 py-1 rounded-full">Выбор техники</span>
          <h1 className="text-3xl font-bold text-foreground mt-4 mb-3 leading-tight">
            Как выбрать кондиционер: полное руководство покупателя
          </h1>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-1"><Icon name="ClockIcon" size={14} /> 10 мин читать</span>
            <span className="flex items-center gap-1"><Icon name="CalendarIcon" size={14} /> 2025</span>
          </div>
        </div>

        <ArticleImage src={IMAGES.hero} alt="Как выбрать кондиционер" />

        <p className="text-base text-muted-foreground leading-relaxed mb-8">
          Кондиционер — покупка на 7–10 лет вперёд. Ошибиться с выбором легко: взять слабый — не справится с жарой, слишком мощный — будет гнать холодный сквозняк и тратить лишнее электричество. В этом руководстве разберём всё по шагам, чтобы вы купили то, что действительно подойдёт именно вашему помещению.
        </p>

        {/* 1 */}
        <Section icon="HomeIcon" title="Как работает кондиционер">
          <p>
            Принцип работы кондиционера прост: он не вырабатывает холод, а перекачивает тепло с одного места на другое. Внутренний блок забирает тепло из воздуха комнаты, фреон переносит его по медной трассе, а наружный блок выбрасывает наружу. В режиме обогрева процесс идёт в обратном направлении.
          </p>
          <p>
            Именно поэтому кондиционер греет в 3–4 раза эффективнее обычного обогревателя — он не сжигает электричество, а перемещает уже существующее тепло.
          </p>
        </Section>

        {/* 2 */}
        <Section icon="CalculatorIcon" title="Расчёт мощности по площади">
          <ArticleImage src={IMAGES.power} alt="Расчёт мощности кондиционера" />
          <p>
            Базовое правило: <strong className="text-foreground">1 кВт мощности на каждые 10 м²</strong> при стандартной высоте потолков 2,7–3 м. То есть для комнаты 20 м² нужен кондиционер мощностью 2 кВт, или 7 000 BTU.
          </p>
          <div className="bg-zinc-50 rounded-2xl border border-border p-5 my-4">
            <p className="text-sm font-semibold text-foreground mb-3">Быстрая таблица подбора:</p>
            <div className="space-y-2">
              {[
                ['до 20 м²', '2,0–2,2 кВт', '07 (7 000 BTU)'],
                ['20–30 м²', '2,5–2,7 кВт', '09 (9 000 BTU)'],
                ['30–40 м²', '3,2–3,5 кВт', '12 (12 000 BTU)'],
                ['40–55 м²', '4,5–5,0 кВт', '18 (18 000 BTU)'],
                ['55–70 м²', '6,0–7,0 кВт', '24 (24 000 BTU)'],
              ].map(([area, kw, btu]) => (
                <div key={area} className="flex items-center justify-between text-sm py-1.5 border-b border-border last:border-0">
                  <span className="text-muted-foreground w-24">{area}</span>
                  <span className="font-semibold text-foreground w-28">{kw}</span>
                  <span className="text-crimson-700 font-semibold">{btu}</span>
                </div>
              ))}
            </div>
          </div>
          <TipBox>
            Если окна выходят на юг, потолки выше 3 м, или в помещении постоянно работает компьютерная техника — добавьте 15–20% к расчётной мощности.
          </TipBox>
        </Section>

        {/* 3 */}
        <Section icon="TagIcon" title="Типы кондиционеров">
          <ArticleImage src={IMAGES.types} alt="Типы кондиционеров" />
          <p><strong className="text-foreground">Настенная сплит-система</strong> — самый популярный выбор для квартиры или офиса. Состоит из двух блоков: внутреннего на стене и наружного на фасаде. Тихая работа, равномерный обдув, эффективное охлаждение. Требует профессиональной установки.</p>
          <p><strong className="text-foreground">Мобильный кондиционер</strong> — не требует монтажа: просто выводите гофру в окно. Подходит для арендованных квартир или помещений, где нельзя сверлить стены. Немного шумнее сплита и менее эффективен, зато можно переставить из комнаты в комнату.</p>
          <p><strong className="text-foreground">Кассетные и канальные системы</strong> — для офисов и коммерческих помещений. Монтируются в подвесной потолок, обдув идёт равномерно по всей площади.</p>
        </Section>

        {/* 4 */}
        <Section icon="AdjustmentsHorizontalIcon" title="Инвертор или On/Off: в чём разница">
          <ArticleImage src={IMAGES.modes} alt="Инверторный кондиционер" />
          <p>
            <strong className="text-foreground">On/Off (обычный)</strong> — компрессор работает на полную мощность, достигает нужной температуры и выключается. Потом снова включается. Температура немного «гуляет» ±2°C, потребление электричества выше.
          </p>
          <p>
            <strong className="text-foreground">Инверторный</strong> — компрессор плавно меняет скорость и поддерживает температуру точно, без скачков. Экономит 30–40% электроэнергии, работает тише, служит дольше. Разница в цене окупается за 2–3 сезона.
          </p>
          <TipBox>
            Для постоянного использования берите инвертор — он окупится уже за 2 года. On/Off оправдан только при редком использовании или ограниченном бюджете.
          </TipBox>
        </Section>

        {/* 5 */}
        <Section icon="WifiIcon" title="Управление: пульт, Wi-Fi, голос">
          <ArticleImage src={IMAGES.wifi} alt="Управление кондиционером через Wi-Fi" />
          <p>Все современные кондиционеры управляются пультом ДУ. Но многие модели поддерживают Wi-Fi — можно включить кондиционер заранее через смартфон, чтобы войти уже в прохладную комнату.</p>
          <p>Часть моделей совместима с умными колонками (Яндекс Алиса, Google Home) — управление голосом. Для большинства пользователей достаточно стандартного пульта, Wi-Fi — приятный бонус.</p>
        </Section>

        {/* 6 */}
        <Section icon="FunnelIcon" title="Фильтры: чистота воздуха в комнате">
          <ArticleImage src={IMAGES.filters} alt="Фильтры кондиционера" />
          <p>Базовый фильтр есть в любом кондиционере — он задерживает пыль и защищает теплообменник. Его нужно чистить раз в 2–4 недели: просто промыть под краном.</p>
          <p>В более дорогих моделях встречаются:</p>
          <ul className="list-none space-y-2 mt-2">
            {[
              'HEPA-фильтр — задерживает мелкие частицы и аллергены',
              'Угольный фильтр — устраняет запахи',
              'Антибактериальное покрытие — подавляет рост микробов на теплообменнике',
              'Ионизатор — освежает воздух, снижает статическое электричество',
            ].map(item => (
              <li key={item} className="flex items-start gap-2 text-sm">
                <Icon name="CheckCircleIcon" size={15} className="text-crimson-600 shrink-0 mt-0.5" />
                {item}
              </li>
            ))}
          </ul>
        </Section>

        {/* 7 */}
        <Section icon="SunIcon" title="Работа зимой">
          <ArticleImage src={IMAGES.winter} alt="Кондиционер зимой" />
          <p>Стандартные кондиционеры работают в режиме обогрева до −5°C на улице. При более низких температурах компрессор может не запуститься или выйти из строя.</p>
          <p>Если нужен обогрев в морозы, ищите модели с расширенным температурным диапазоном — они работают до −15°C, −20°C и даже −25°C (серия Arctic, Freeze, Winter и аналоги). Такие кондиционеры стоят дороже, но в условиях белорусской зимы часто необходимы.</p>
          <TipBox>
            Даже если кондиционер официально поддерживает работу при морозе — в очень сильные холода лучше использовать его совместно с дополнительным обогревателем.
          </TipBox>
        </Section>

        {/* 8 */}
        <Section icon="BoltIcon" title="Энергоэффективность: класс A и выше">
          <ArticleImage src={IMAGES.energy} alt="Энергоэффективность кондиционера" />
          <p>Кондиционеры маркируются классами энергоэффективности от A+++ до D. Чем выше класс — тем меньше электричества тратит устройство на единицу холода.</p>
          <p>Класс A++ и выше — хороший выбор для ежедневного использования. Разница в потреблении между классом B и A+++ может составлять 40–50% — это ощутимо в счётах за электричество за сезон.</p>
        </Section>

        {/* 9 */}
        <Section icon="WrenchScrewdriverIcon" title="Установка кондиционера">
          <ArticleImage src={IMAGES.install} alt="Установка кондиционера" />
          <p>Монтаж сплит-системы занимает 2–4 часа и включает: сверление отверстия в стене, прокладку медной трассы, крепление наружного блока, вакуумирование системы и пусконаладку.</p>
          <p>Стандартная трасса — 3 метра. Каждый дополнительный метр добавляет к цене монтажа. Если наружный блок вешается через балкон или в нестандартном месте — стоимость работ увеличивается.</p>
          <div className="bg-zinc-50 rounded-2xl border border-border p-5 my-4">
            <p className="text-sm font-semibold text-foreground mb-3">Стоимость монтажа в AirComfort:</p>
            <div className="space-y-2">
              {[
                ['Монтаж до 30 м²', '400 р.'],
                ['Монтаж до 50 м²', '500 р.'],
                ['Монтаж до 70 м²', '550 р.'],
                ['Каждый доп. метр трассы', '+50 р.'],
                ['Через балкон', '+50 р.'],
              ].map(([service, price]) => (
                <div key={service} className="flex justify-between text-sm py-1 border-b border-border last:border-0">
                  <span className="text-muted-foreground">{service}</span>
                  <span className="font-bold text-crimson-700">{price}</span>
                </div>
              ))}
            </div>
          </div>
        </Section>

        {/* 10 */}
        <Section icon="Cog6ToothIcon" title="Техническое обслуживание">
          <ArticleImage src={IMAGES.service} alt="Обслуживание кондиционера" />
          <p>Кондиционер требует ухода — без него он теряет эффективность, начинает распространять неприятный запах и быстрее выходит из строя.</p>
          <ul className="list-none space-y-2 mt-2">
            {[
              'Каждые 2–4 недели — чистить сетчатые фильтры внутреннего блока',
              '1 раз в год — профессиональная чистка теплообменника и дренажа',
              'Каждые 2–3 года — проверка уровня фреона',
              'При появлении запаха или снижении производительности — дезинфекция',
            ].map(item => (
              <li key={item} className="flex items-start gap-2 text-sm">
                <Icon name="CheckCircleIcon" size={15} className="text-crimson-600 shrink-0 mt-0.5" />
                {item}
              </li>
            ))}
          </ul>
        </Section>

        {/* 11 */}
        <Section icon="StarIcon" title="Лучшие бренды на рынке Беларуси">
          <ArticleImage src={IMAGES.brands} alt="Бренды кондиционеров" />
          <p>В ассортименте AirComfort — только проверенные производители с официальной гарантией и сервисными центрами в Беларуси:</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-4">
            {[
              { brand: 'Electrolux', desc: 'Шведский бренд. Широкий модельный ряд, отличное качество сборки.' },
              { brand: 'Ballu', desc: 'Популярный в СНГ. Оптимальное соотношение цены и функций.' },
              { brand: 'Haier', desc: 'Китайский лидер. Инновации, надёжность, богатый выбор моделей.' },
              { brand: 'LG', desc: 'Корейский гигант. Тихая работа, Wi-Fi, долгий срок службы.' },
              { brand: 'Panasonic', desc: 'Японское качество. Надёжные инверторы с расширенным диапазоном.' },
              { brand: 'Mitsudai', desc: 'Доступная серия SENTO. Хорошее качество по привлекательной цене.' },
            ].map(({ brand, desc }) => (
              <Link
                key={brand}
                href={`/products/split-${brand.toLowerCase()}`}
                className="bg-zinc-50 rounded-xl border border-border p-3 hover:border-crimson-300 hover:bg-crimson-50 transition-all group"
              >
                <p className="font-bold text-sm text-foreground group-hover:text-crimson-700">{brand}</p>
                <p className="text-xs text-muted-foreground mt-1 leading-snug">{desc}</p>
              </Link>
            ))}
          </div>
        </Section>

        {/* Summary */}
        <div className="bg-zinc-50 rounded-2xl border border-border p-6 mb-10">
          <h2 className="font-bold text-foreground text-lg mb-4 flex items-center gap-2">
            <Icon name="CheckBadgeIcon" size={20} className="text-crimson-600" />
            8 шагов для правильного выбора
          </h2>
          <ol className="space-y-2">
            {[
              'Измерьте площадь помещения и рассчитайте нужную мощность',
              'Определитесь с типом: сплит или мобильный',
              'Выберите инвертор — он окупится за 2 сезона',
              'Уточните, нужна ли работа при минусовых температурах зимой',
              'Решите, нужен ли Wi-Fi и какие фильтры важны',
              'Выберите класс энергоэффективности A+ и выше',
              'Уточните стоимость монтажа и длину трассы заранее',
              'Планируйте сервис раз в год — продлит срок службы вдвое',
            ].map((step, i) => (
              <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                <span className="w-6 h-6 rounded-full bg-crimson-100 text-crimson-700 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">{i + 1}</span>
                {step}
              </li>
            ))}
          </ol>
        </div>

        {/* CTA */}
        <div className="bg-crimson-gradient rounded-2xl p-6 text-white text-center">
          <h3 className="text-xl font-bold mb-2">Готовы выбрать кондиционер?</h3>
          <p className="text-crimson-100 text-sm mb-5">Позвоните нам — поможем подобрать модель под ваш бюджет и площадь, рассчитаем стоимость монтажа.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="tel:+375291050694"
              onClick={e => { e.preventDefault(); window.open('tel:+375291050694'); }}
              className="flex items-center justify-center gap-2 bg-white text-crimson-700 px-6 py-3 rounded-xl font-bold hover:bg-crimson-50 transition-colors"
            >
              <Icon name="PhoneIcon" size={16} />
              +375 29 105-06-94
            </a>
            <Link
              href="/products"
              className="flex items-center justify-center gap-2 bg-white/20 text-white border border-white/40 px-6 py-3 rounded-xl font-bold hover:bg-white/30 transition-colors"
            >
              Смотреть каталог
              <Icon name="ArrowRightIcon" size={16} />
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
