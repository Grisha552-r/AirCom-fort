import Link from 'next/link';
import ArticleShell from '../ArticleShell';

const breadcrumbLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Главная', item: 'https://aircom-fort.by' },
    { '@type': 'ListItem', position: 2, name: 'Статьи', item: 'https://aircom-fort.by/articles' },
    { '@type': 'ListItem', position: 3, name: 'Сплит-система в Гомеле' },
  ],
};

const MODELS = [
  { brand: 'Mitsudai', series: 'MD-SNE09AI', area: '27 м²', price: '1 329', btu: '9 000', link: '/products/split-mitsudai', badge: 'Лучшая цена' },
  { brand: 'Ballu', series: 'BSW-09HN1', area: '25 м²', price: '1 522', btu: '9 000', link: '/products/split-ballu', badge: 'On/Off' },
  { brand: 'Haier', series: 'Spirit On-Off 09', area: '25 м²', price: '1 600', btu: '9 000', link: '/products/split-haier', badge: 'Wi-Fi' },
  { brand: 'Electrolux', series: 'EACS-I-09HAL', area: '25 м²', price: '1 790', btu: '9 000', link: '/products/split-electrolux', badge: 'Тихий' },
  { brand: 'LG', series: 'Standard Plus PM09SP', area: '25 м²', price: '1 931', btu: '9 000', link: '/products/split-lg', badge: 'Гарантия 3 г.' },
  { brand: 'Ballu', series: 'BSAGI-12HN8', area: '35 м²', price: '2 090', btu: '12 000', link: '/products/split-ballu', badge: 'До 35 м²' },
];

const INSTALL_STEPS = [
  { step: '1', title: 'Замер и выбор места', desc: 'Мастер определяет оптимальное место для блоков: внутренний — подальше от кровати и прямых солнечных лучей, наружный — с хорошей вентиляцией.' },
  { step: '2', title: 'Бурение и крепление', desc: 'Бурится отверстие для трассы, монтируются кронштейны наружного блока и пластина внутреннего. Инструмент с пылесборником — без пыли.' },
  { step: '3', title: 'Прокладка трассы', desc: 'Медные трубки с теплоизоляцией, кабель питания и дренажная трубка укладываются в кабель-канал. Стандарт — 3 м трассы.' },
  { step: '4', title: 'Вакуумирование', desc: 'Обязательный этап: из системы откачивается воздух и влага. Без вакуумирования фреон смешивается с воздухом — кондиционер быстро выходит из строя.' },
  { step: '5', title: 'Запуск и проверка', desc: 'Кондиционер включается во всех режимах: охлаждение, обогрев, вентиляция, осушение. Замеряется температура выдуваемого воздуха.' },
];

export default function SplitSistemaPage() {
  return (
    <ArticleShell>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <main className="max-w-3xl mx-auto px-4 py-10">
        <nav className="text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:text-red-600">Главная</Link>
          {' / '}
          <Link href="/articles" className="hover:text-red-600">Статьи</Link>
          {' / '}
          <span>Сплит-система в Гомеле</span>
        </nav>

        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Сплит-система в Гомеле — купить и установить от 1 329 р.
        </h1>
        <p className="text-gray-500 text-sm mb-8">Обновлено: май 2026 · Время чтения: 6 мин</p>

        <p className="text-gray-700 leading-relaxed mb-6">
          Сплит-система — это двухблочный кондиционер: внутренний блок остаётся в комнате, наружный вешается на фасад или балкон. В отличие от мобильного кондиционера, сплит работает тише, охлаждает эффективнее и не занимает место на полу. AirComfort предлагает купить сплит-систему в Гомеле с установкой под ключ от 1 329 р. — всё в один визит мастера.
        </p>

        <div className="bg-blue-50 border border-blue-200 rounded-xl p-5 mb-8">
          <p className="font-semibold text-gray-900 mb-2">Почему выбирают AirComfort для установки сплит-системы</p>
          <ul className="space-y-1 text-sm text-gray-700">
            <li>✓ Мастер приедет в день заказа — монтаж 2–4 часа</li>
            <li>✓ Все расходники включены в цену (трасса 3 м, кронштейны, кабель)</li>
            <li>✓ Гарантия на монтажные работы 1 год</li>
            <li>✓ Официальные дилеры: Electrolux, Ballu, Haier, LG, Mitsudai</li>
          </ul>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mb-4">Цены на сплит-системы с установкой в Гомеле 2026</h2>

        <div className="space-y-3 mb-8">
          {MODELS.map((m) => (
            <div key={`${m.brand}-${m.series}`} className="border border-gray-200 rounded-xl p-4">
              <div className="flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-bold text-gray-900">{m.brand} {m.series}</span>
                    {m.badge && <span className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full">{m.badge}</span>}
                  </div>
                  <p className="text-xs text-gray-500">{m.btu} BTU · {m.area} · Инвертор</p>
                </div>
                <div className="text-right">
                  <p className="font-bold text-red-700">от {m.price} р.</p>
                  <p className="text-xs text-gray-400">с монтажом</p>
                </div>
              </div>
              <Link href={m.link} className="text-xs text-red-700 hover:underline mt-2 block">Смотреть в каталоге →</Link>
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mb-4">Как выбрать мощность сплит-системы</h2>

        <div className="bg-gray-50 rounded-xl p-5 mb-6">
          <p className="font-semibold text-gray-900 mb-3">Правило расчёта: 1 кВт = 10 м²</p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {[
              { area: 'до 20 м²', btu: '7 000 BTU', kw: '2,0 кВт' },
              { area: '20–25 м²', btu: '9 000 BTU', kw: '2,6 кВт' },
              { area: '25–35 м²', btu: '12 000 BTU', kw: '3,5 кВт' },
              { area: '35–50 м²', btu: '18 000 BTU', kw: '5,2 кВт' },
            ].map(item => (
              <div key={item.area} className="bg-white rounded-xl p-3 text-center">
                <p className="text-xs text-gray-500 mb-1">{item.area}</p>
                <p className="font-bold text-gray-900 text-sm">{item.btu}</p>
                <p className="text-xs text-gray-500">{item.kw}</p>
              </div>
            ))}
          </div>
          <p className="text-xs text-gray-500 mt-3">При высоких потолках (выше 2,7 м), угловой квартире или южной стороне прибавьте 10–20% к расчётной мощности.</p>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mb-4">Как проходит установка сплит-системы в Гомеле</h2>

        <div className="space-y-4 mb-8">
          {INSTALL_STEPS.map(item => (
            <div key={item.step} className="flex gap-4">
              <div className="w-8 h-8 rounded-full bg-red-700 text-white text-sm font-bold flex items-center justify-center shrink-0 mt-0.5">{item.step}</div>
              <div>
                <p className="font-semibold text-gray-900">{item.title}</p>
                <p className="text-gray-600 text-sm mt-1">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mb-4">Сплит-система или мобильный кондиционер — что выбрать</h2>

        <div className="overflow-x-auto mb-8">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-gray-100">
                <th className="text-left px-4 py-3 font-semibold border border-gray-200">Критерий</th>
                <th className="text-left px-4 py-3 font-semibold border border-gray-200">Сплит-система</th>
                <th className="text-left px-4 py-3 font-semibold border border-gray-200">Мобильный</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Шум', 'От 19 дБ', '45–55 дБ (всё в комнате)'],
                ['Эффективность охлаждения', 'Высокая', 'Ниже (теплообмен в комнате)'],
                ['Монтаж', 'Нужно сверление и мастер', 'Не нужен, только вентиляционный шланг'],
                ['Место', 'Блоки на стене/фасаде', 'Занимает место на полу'],
                ['Подходит для аренды', 'Нет (нужно разрешение)', 'Да — легко забрать'],
                ['Цена с установкой', 'от 1 329 р.', 'от 700 р. (без монтажа)'],
              ].map(([crit, split, mobile], i) => (
                <tr key={crit} className={i % 2 === 1 ? 'bg-gray-50' : ''}>
                  <td className="px-4 py-3 border border-gray-200 font-medium">{crit}</td>
                  <td className="px-4 py-3 border border-gray-200 text-green-700">{split}</td>
                  <td className="px-4 py-3 border border-gray-200 text-gray-600">{mobile}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="bg-gray-900 rounded-2xl p-6 text-white mb-8">
          <h3 className="text-lg font-bold mb-2">Купить сплит-систему с установкой в Гомеле</h3>
          <p className="text-gray-300 text-sm mb-4">Звоните — подберём модель под вашу площадь и бюджет. Монтаж в день заказа, гарантия 1 год.</p>
          <a href="tel:+375291050694" className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-3 rounded-xl transition-colors">
            +375 29 105-06-94
          </a>
        </div>

        <div className="border-t pt-8">
          <p className="text-sm font-semibold text-gray-700 mb-4">Читайте также:</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { href: '/articles/kak-vybrat-konditsioner', label: 'Как выбрать кондиционер' },
              { href: '/articles/tsena-ustanovki-konditsionera', label: 'Цены на установку кондиционера' },
              { href: '/articles/invertor-konditsioner-gomel', label: 'Инверторный кондиционер в Гомеле' },
              { href: '/articles/mobilnyy-ili-split', label: 'Мобильный или сплит-система' },
            ].map(link => (
              <Link key={link.href} href={link.href} className="text-sm text-red-700 hover:text-red-800 hover:underline">
                → {link.label}
              </Link>
            ))}
          </div>
        </div>
      </main>
    </ArticleShell>
  );
}
