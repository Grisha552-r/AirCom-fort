import Link from 'next/link';
import ArticleShell from '../articles/ArticleShell';

const faqSchema = {
  mainEntity: [
    { name: 'Сколько стоит кондиционер с установкой в Гомеле?', acceptedAnswer: { text: 'Стоимость кондиционера с установкой в Гомеле «под ключ» — от 1 290 р. Это включает: кондиционер Mitsudai 9000 BTU (890 р.) + стандартный монтаж до 3 м трассы (400 р.). Electrolux с установкой — от 1 490 р., Ballu — от 1 290 р., Haier — от 1 350 р., LG — от 1 690 р.' } },
    { name: 'Как быстро приедет мастер для установки кондиционера в Гомеле?', acceptedAnswer: { text: 'Мастер приедет в день заказа или на следующий день. Работаем понедельник–суббота с 9:00 до 18:00. Монтаж занимает 2–4 часа в зависимости от сложности.' } },
    { name: 'Какой кондиционер выбрать для комнаты 20 м² в Гомеле?', acceptedAnswer: { text: 'Для комнаты 20 м² подойдёт кондиционер мощностью 9 000 BTU (2,6 кВт). Рекомендуем: Ballu BSAGI-09 (инвертор, тихий, от 1 290 р. с установкой) или Electrolux EACS-09 (надёжный, бесшумный, от 1 490 р. с установкой).' } },
    { name: 'Выезжаете ли в районы Гомеля и область?', acceptedAnswer: { text: 'Да, работаем по всему Гомелю: Советский, Центральный, Железнодорожный, Новобелицкий и Октябрьский районы. Также выезжаем в Гомельскую область: Жлобин, Мозырь, Речица, Светлогорск, Жодино и другие населённые пункты.' } },
    { name: 'Нужно ли разрешение для установки кондиционера в квартире?', acceptedAnswer: { text: 'В большинстве случаев разрешение от ЖЭУ не требуется — если наружный блок крепится на стену вашей квартиры без изменения фасада. Для жилых домов в Гомеле достаточно стандартного договора найма/собственности.' } },
    { name: 'Какую гарантию даёте на кондиционер и монтаж?', acceptedAnswer: { text: 'Гарантия на кондиционер — 1–3 года в зависимости от бренда (Electrolux и LG — 3 года, Ballu и Haier — 2 года). Гарантия на монтажные работы — 1 год. При гарантийной поломке выезжаем и устраняем за свой счёт.' } },
  ],
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Главная', item: 'https://aircom-fort.by' },
    { '@type': 'ListItem', position: 2, name: 'Кондиционеры в Гомеле' },
  ],
};

const MODELS = [
  { name: 'Mitsudai MD-SNE09AI', area: '27 м²', price: '1 290', slug: 'p-md-sne09ai', label: 'Хит продаж' },
  { name: 'Ballu BSAGI-09HN8', area: '25 м²', price: '1 290', slug: 'p-ba-bsagi09hn8', label: 'Инвертор' },
  { name: 'Electrolux EACS-09', area: '25 м²', price: '1 490', slug: 'split-electrolux', label: 'Бесшумный' },
  { name: 'Haier AS09NS4ERA', area: '25 м²', price: '1 350', slug: 'p-ha-as09ns4era', label: 'Wi-Fi' },
  { name: 'LG S09EQ', area: '25 м²', price: '1 690', slug: 'p-lg-s09eq', label: 'Премиум' },
  { name: 'Ballu BSDI-12HN8', area: '35 м²', price: '1 590', slug: 'p-ba-bsdi12hn8', label: 'До 35 м²' },
];

const PRICES = [
  { area: 'до 20 м²', btu: '7 000–9 000 BTU', condPrice: 'от 690 р.', installPrice: 'от 400 р.', total: 'от 1 090 р.' },
  { area: 'до 35 м²', btu: '12 000 BTU',      condPrice: 'от 790 р.', installPrice: 'от 450 р.', total: 'от 1 240 р.' },
  { area: 'до 50 м²', btu: '18 000 BTU',      condPrice: 'от 990 р.', installPrice: 'от 500 р.', total: 'от 1 490 р.' },
  { area: 'до 70 м²', btu: '24 000 BTU',      condPrice: 'от 1 390 р.', installPrice: 'от 550 р.', total: 'от 1 940 р.' },
];

const DISTRICTS = [
  'Советский район', 'Центральный район', 'Железнодорожный район',
  'Новобелицкий район', 'Октябрьский район',
  'Жлобин', 'Мозырь', 'Речица', 'Светлогорск', 'Добруш',
];

export default function KonditsioneryGomelPage() {
  return (
    <ArticleShell>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <main>
        {/* Hero */}
        <section className="bg-white pt-8 pb-10 border-b border-border">
          <div className="max-w-4xl mx-auto px-4">
            <nav className="text-sm text-gray-400 mb-5">
              <Link href="/" className="hover:text-crimson-700">Главная</Link>
              {' / '}
              <span className="text-gray-600">Кондиционеры в Гомеле</span>
            </nav>

            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
              Кондиционеры в Гомеле — купить с установкой от 1 290 р.
            </h1>
            <p className="text-lg text-gray-600 mb-6 max-w-2xl">
              Продажа и монтаж сплит-систем в Гомеле и Гомельской области.
              Electrolux, Ballu, Haier, LG, Mitsudai — <strong>300+ моделей</strong> в наличии.
              Монтаж от 400 р., выезд в день заказа, гарантия 1 год.
            </p>

            <div className="flex flex-wrap gap-3">
              <a
                href="tel:+375291050694"
                className="inline-flex items-center gap-2 bg-crimson-700 text-white px-6 py-3 rounded-xl font-semibold hover:bg-crimson-800 transition-colors"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
                +375 29 105-06-94
              </a>
              <Link
                href="/products"
                className="inline-flex items-center gap-2 border border-gray-300 text-gray-700 px-6 py-3 rounded-xl font-semibold hover:border-crimson-400 hover:text-crimson-700 transition-colors"
              >
                Весь каталог →
              </Link>
            </div>

            {/* Trust line */}
            <div className="flex flex-wrap gap-4 mt-6 text-sm text-gray-500">
              <span>★ <strong className="text-gray-800">4.9</strong> — 200+ отзывов</span>
              <span>·</span>
              <span><strong className="text-gray-800">500+</strong> установок в Гомеле</span>
              <span>·</span>
              <span>Гарантия <strong className="text-gray-800">1 год</strong> на монтаж</span>
              <span>·</span>
              <span>Работаем с <strong className="text-gray-800">2019</strong> года</span>
            </div>
          </div>
        </section>

        {/* Price table */}
        <section className="py-10 bg-white">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Цены на кондиционеры с установкой в Гомеле</h2>
            <p className="text-gray-600 mb-5">Цена «под ключ» — кондиционер + монтаж. Без скрытых доплат.</p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-red-50">
                    <th className="text-left p-3 border border-gray-200 font-semibold">Площадь</th>
                    <th className="text-left p-3 border border-gray-200 font-semibold">Мощность</th>
                    <th className="text-left p-3 border border-gray-200 font-semibold">Кондиционер</th>
                    <th className="text-left p-3 border border-gray-200 font-semibold">Монтаж</th>
                    <th className="text-left p-3 border border-gray-200 font-semibold text-crimson-700">Итого</th>
                  </tr>
                </thead>
                <tbody>
                  {PRICES.map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                      <td className="p-3 border border-gray-200 font-medium">{row.area}</td>
                      <td className="p-3 border border-gray-200 text-gray-600">{row.btu}</td>
                      <td className="p-3 border border-gray-200">{row.condPrice}</td>
                      <td className="p-3 border border-gray-200">{row.installPrice}</td>
                      <td className="p-3 border border-gray-200 font-bold text-crimson-700">{row.total}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-gray-400 mt-2">* В цену монтажа входит трасса до 3 м, кронштейны, вакуумирование, запуск. Доп. метр трассы — 25 р.</p>
          </div>
        </section>

        {/* Popular models */}
        <section className="py-10 bg-gray-50 border-t border-gray-100">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Популярные кондиционеры в Гомеле</h2>
            <p className="text-gray-500 mb-6">Самые продаваемые модели в этом сезоне</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-6">
              {MODELS.map(m => (
                <Link
                  key={m.slug}
                  href={`/products/${m.slug}`}
                  className="bg-white rounded-xl border border-gray-200 p-4 hover:border-crimson-300 hover:shadow-sm transition-all group"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] bg-crimson-50 text-crimson-700 font-semibold px-2 py-0.5 rounded-full">{m.label}</span>
                    <span className="text-xs text-gray-400">{m.area}</span>
                  </div>
                  <p className="text-sm font-semibold text-gray-800 group-hover:text-crimson-700 leading-tight mb-1">{m.name}</p>
                  <p className="text-base font-bold text-crimson-700">от {m.price} р.</p>
                  <p className="text-[10px] text-gray-400 mt-0.5">с установкой</p>
                </Link>
              ))}
            </div>
            <Link href="/products" className="text-crimson-700 font-semibold hover:underline text-sm">
              Смотреть все 300+ моделей →
            </Link>
          </div>
        </section>

        {/* What's included */}
        <section className="py-10 bg-white border-t border-gray-100">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Что включает установка кондиционера в Гомеле</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              {[
                ['Крепление внутреннего блока', 'Кронштейны, уровень, дюбели'],
                ['Крепление наружного блока', 'Кронштейны на фасад или балкон'],
                ['Медная трасса до 3 м', 'Трубки, теплоизоляция, кабель-канал'],
                ['Электрический кабель', 'Подключение к щитку или розетке'],
                ['Вакуумирование системы', 'Обязательный этап перед запуском'],
                ['Пуско-наладка', 'Проверка всех режимов: холод, тепло, вентиляция'],
              ].map(([title, desc], i) => (
                <div key={i} className="flex gap-3 items-start">
                  <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center shrink-0 mt-0.5">
                    <svg className="w-3 h-3 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-800">{title}</p>
                    <p className="text-xs text-gray-500">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              После монтажа мастер показывает, как пользоваться пультом, объясняет все режимы и отвечает на вопросы.
              Выдаём акт выполненных работ. Все расходники (крепёж, изолента, патрубки) уже включены в стоимость — никаких сюрпризов при расчёте.
            </p>
          </div>
        </section>

        {/* Brands */}
        <section className="py-10 bg-gray-50 border-t border-gray-100">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Бренды кондиционеров в Гомеле — AirComfort</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {[
                { name: 'Electrolux', slug: 'split-electrolux', desc: '123 модели · Швеция/Китай · Инвертор, тихий, класс А' },
                { name: 'Ballu', slug: 'split-ballu', desc: '87 моделей · Россия · Лучшая цена, On/Off и инвертор' },
                { name: 'Haier', slug: 'split-haier', desc: '85 моделей · Китай · Wi-Fi, Smart-управление, бесшумный' },
                { name: 'LG', slug: 'split-lg', desc: '73 модели · Южная Корея · Премиум, длительный срок службы' },
                { name: 'Mitsudai', slug: 'split-mitsudai', desc: '8 моделей · Доступная цена · Оптимальный выбор' },
                { name: 'Мобильные', slug: 'mobile', desc: '35 моделей · Без сверления · Для аренды и дачи' },
              ].map(b => (
                <Link
                  key={b.slug}
                  href={`/products/${b.slug}`}
                  className="bg-white rounded-xl border border-gray-200 p-4 hover:border-crimson-300 hover:shadow-sm transition-all"
                >
                  <p className="font-bold text-gray-900 mb-1">{b.name}</p>
                  <p className="text-xs text-gray-500 leading-snug">{b.desc}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Service areas */}
        <section className="py-10 bg-white border-t border-gray-100">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Районы и города обслуживания</h2>
            <p className="text-gray-600 mb-5">
              Устанавливаем кондиционеры во всех районах Гомеля и Гомельской области. Выезд в тот же день.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              {DISTRICTS.map(d => (
                <span key={d} className="text-sm bg-gray-50 border border-gray-200 rounded-full px-3 py-1 text-gray-700">{d}</span>
              ))}
            </div>
            <p className="text-sm text-gray-500">
              Работаем по всему Гомелю: панельные и кирпичные дома, частный сектор, коттеджи, квартиры и офисы.
              Выезд в Гомельскую область — по договорённости, стоимость уточняйте по телефону.
            </p>
          </div>
        </section>

        {/* How to order */}
        <section className="py-10 bg-gray-50 border-t border-gray-100">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Как заказать кондиционер с установкой в Гомеле</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              {[
                ['1', 'Выберите модель', 'В нашем каталоге — 300+ кондиционеров. Или позвоните, и мы подберём под ваш бюджет и площадь.'],
                ['2', 'Согласуйте дату', 'Мастер приедет в удобное время. Принимаем заявки пн–сб с 9:00 до 18:00. Выезд в день обращения.'],
                ['3', 'Получите результат', 'После монтажа подпишем акт. Гарантия на кондиционер 1–3 года, на монтаж — 1 год.'],
              ].map(([num, title, desc]) => (
                <div key={num} className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-full bg-crimson-700 text-white flex items-center justify-center font-bold text-lg shrink-0">{num}</div>
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">{title}</p>
                    <p className="text-sm text-gray-600 leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Buying guide */}
        <section className="py-10 bg-white border-t border-gray-100">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Как купить кондиционер с установкой в Гомеле — пошаговый гид</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Купить кондиционер с установкой в Гомеле проще всего в одном месте — так вы получаете
              единую гарантию на оборудование и монтаж, без лишних согласований. Вот как это работает:
            </p>
            <div className="space-y-4 mb-8">
              {[
                {
                  title: 'Шаг 1. Определите площадь комнаты',
                  text: 'Мощность кондиционера подбирается из расчёта 1 кВт на 10 м² (с корректировкой на высоту потолков и ориентацию окон). Для комнаты 20 м² — 2 кВт (7 000–9 000 BTU), для 30 м² — 3 кВт (12 000 BTU), для 50 м² — 5 кВт (18 000 BTU).',
                },
                {
                  title: 'Шаг 2. Выберите тип: инвертор или On/Off',
                  text: 'Инверторный кондиционер плавно регулирует мощность, потребляет на 30–40% меньше электроэнергии и поддерживает температуру точнее. On/Off — дешевле при покупке, но дороже в эксплуатации. Если планируете использовать ежедневно — берите инвертор.',
                },
                {
                  title: 'Шаг 3. Выберите бренд',
                  text: 'Electrolux и LG — надёжные, тихие, с долгим сроком службы. Ballu и Mitsudai — лучшее соотношение цены и качества. Haier — смарт-функции, Wi-Fi, самоочистка. Все бренды представлены в нашем каталоге.',
                },
                {
                  title: 'Шаг 4. Согласуйте место монтажа',
                  text: 'Перед заказом убедитесь: есть ли возможность вывести трубки наружу (через стену или балкон), на какую высоту будет установлен наружный блок. Если сомневаетесь — мастер оценит бесплатно по фото или при выезде.',
                },
                {
                  title: 'Шаг 5. Закажите установку',
                  text: 'Позвоните или оформите заказ в каталоге. Мастер приедет в день заказа со всем оборудованием. Монтаж занимает 2–4 часа, после — проверка всех режимов и инструктаж.',
                },
              ].map(({ title, text }, i) => (
                <div key={i} className="flex gap-4 p-4 bg-gray-50 rounded-xl">
                  <span className="bg-red-700 text-white w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">{i + 1}</span>
                  <div>
                    <p className="font-semibold text-gray-900 mb-1 text-sm">{title}</p>
                    <p className="text-gray-600 text-sm leading-relaxed">{text}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-red-50 border border-red-100 rounded-xl p-5">
              <p className="font-semibold text-gray-900 mb-2">Не знаете, какой кондиционер выбрать?</p>
              <p className="text-gray-600 text-sm mb-3">Позвоните — бесплатно подберём модель под вашу площадь и бюджет за 5 минут.</p>
              <a href="tel:+375291050694" className="inline-block bg-red-700 text-white px-5 py-2.5 rounded-xl font-semibold text-sm hover:bg-red-800 transition-colors">
                +375 29 105-06-94
              </a>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-10 bg-gray-50 border-t border-gray-100">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Частые вопросы о кондиционерах в Гомеле</h2>
            <div className="space-y-4">
              {[
                ...faqSchema.mainEntity,
                { name: 'Можно ли купить кондиционер в рассрочку?', acceptedAnswer: { text: 'Да, мы работаем с рассрочкой через банки-партнёры. Уточните условия по телефону +375 29 105-06-94 — подберём удобный вариант оплаты.' } },
                { name: 'Какой кондиционер лучше для квартиры с установкой в Гомеле?', acceptedAnswer: { text: 'Для квартиры рекомендуем инверторный сплит: тихий (до 22 дБ), экономичный (класс А++), с режимом ночной работы. Оптимальный выбор — Ballu BSAGI или Electrolux EACS в соответствии с площадью комнаты.' } },
                { name: 'Какова цена кондиционера Electrolux с установкой в Гомеле?', acceptedAnswer: { text: 'Electrolux с установкой в Гомеле под ключ — от 1 490 р. (модель EACS-09, до 25 м²). Более мощные модели на 12 000 BTU — от 1 690 р. с монтажом.' } },
                { name: 'За сколько дней устанавливают кондиционер в Гомеле?', acceptedAnswer: { text: 'Обычно монтаж выполняется в день заказа или на следующий день. В пиковый сезон (июнь–июль) запись на 1–2 дня вперёд. Звоните заранее, чтобы выбрать удобное время.' } },
              ].map((faq, i) => (
                <details key={i} className="group border border-gray-200 rounded-xl overflow-hidden">
                  <summary className="flex items-center justify-between p-4 cursor-pointer font-semibold text-gray-800 text-sm hover:bg-gray-50 list-none">
                    {faq.name}
                    <svg className="w-4 h-4 text-gray-400 shrink-0 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <div className="px-4 pb-4 text-sm text-gray-600 leading-relaxed border-t border-gray-100 pt-3">
                    {faq.acceptedAnswer.text}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* About + CTA */}
        <section className="py-10 bg-gray-50 border-t border-gray-100">
          <div className="max-w-4xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">AirComfort — ваш надёжный поставщик кондиционеров в Гомеле</h2>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  Работаем с 2019 года. За это время выполнили более 500 установок в Гомеле и Гомельской области.
                  Мы не просто продаём кондиционеры — мы несём ответственность за каждый монтаж.
                  Все мастера прошли обучение и имеют допуск к работе с холодильными агентами.
                </p>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  Являемся официальными дилерами: <strong>Electrolux, Ballu, Haier, LG, Mitsudai</strong>.
                  Это значит — оригинальный товар, официальная гарантия и запчасти в наличии.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Link href="/articles" className="text-sm text-crimson-700 hover:underline">Статьи и советы</Link>
                  <span className="text-gray-300">·</span>
                  <Link href="/services" className="text-sm text-crimson-700 hover:underline">Наши услуги</Link>
                  <span className="text-gray-300">·</span>
                  <Link href="/about" className="text-sm text-crimson-700 hover:underline">О компании</Link>
                </div>
              </div>
              <div className="bg-white rounded-2xl border border-gray-200 p-6 text-center">
                <p className="text-gray-500 text-sm mb-2">Звоните или пишите — бесплатно проконсультируем</p>
                <a href="tel:+375291050694" className="block text-3xl font-bold text-gray-900 hover:text-crimson-700 transition-colors mb-3">
                  +375 29 105-06-94
                </a>
                <div className="flex gap-3 justify-center">
                  <a href="https://t.me/AirComforto" target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm font-medium text-[#2AABEE] border border-[#2AABEE]/30 rounded-lg px-4 py-2 hover:bg-blue-50 transition-colors">
                    Telegram
                  </a>
                  <a href="viber://chat?number=%2B375291050694"
                    className="flex items-center gap-2 text-sm font-medium text-[#7360F2] border border-[#7360F2]/30 rounded-lg px-4 py-2 hover:bg-purple-50 transition-colors">
                    Viber
                  </a>
                </div>
                <p className="text-xs text-gray-400 mt-3">Пн–Сб, 9:00–18:00</p>
              </div>
            </div>
          </div>
        </section>

        {/* Internal links */}
        <section className="py-8 bg-white border-t border-gray-100">
          <div className="max-w-4xl mx-auto px-4">
            <h3 className="text-base font-semibold text-gray-700 mb-4">Полезные статьи о кондиционерах</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {[
                ['/articles/kak-vybrat-konditsioner', 'Как выбрать кондиционер'],
                ['/articles/tsena-ustanovki-konditsionera', 'Цены на установку'],
                ['/articles/konditsioner-electrolux-gomel', 'Electrolux в Гомеле'],
                ['/articles/konditsioner-ballu-gomel', 'Ballu в Гомеле'],
                ['/articles/konditsioner-haier-gomel', 'Haier в Гомеле'],
                ['/articles/konditsioner-lg-gomel', 'LG в Гомеле'],
                ['/articles/tikhiy-konditsioner-dlya-spalni', 'Тихий кондиционер'],
                ['/articles/konditsioner-dlya-ofisa-gomel', 'Кондиционер для офиса'],
                ['/articles/konditsioner-dlya-gostinoy', 'Кондиционер для гостиной'],
                ['/articles/multisplit-gomel', 'Мультисплит в Гомеле'],
                ['/articles/zapravka-konditsionera-gomel', 'Заправка фреоном'],
              ].map(([href, label]) => (
                <Link key={href} href={href} className="text-sm text-crimson-700 hover:underline py-1">
                  → {label}
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
    </ArticleShell>
  );
}
