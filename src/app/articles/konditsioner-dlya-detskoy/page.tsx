import Link from 'next/link';
import ArticleShell from '../ArticleShell';

const breadcrumbLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Главная', item: 'https://aircom-fort.by' },
    { '@type': 'ListItem', position: 2, name: 'Статьи', item: 'https://aircom-fort.by/articles' },
    { '@type': 'ListItem', position: 3, name: 'Кондиционер для детской комнаты' },
  ],
};

const TOP_MODELS = [
  { brand: 'Electrolux', series: 'Nordic EACS-I-09HN/N3', noise: '19 дБ', area: '25 м²', price: 'от 1 690 р.', link: '/products/split-electrolux', badge: 'Самый тихий' },
  { brand: 'Ballu', series: 'Platinum Evolution BSPI-09HN8', noise: '19 дБ', area: '25 м²', price: 'от 1 690 р.', link: '/products/split-ballu', badge: 'Тихий + Wi-Fi' },
  { brand: 'Haier', series: 'Pearl AS09PM5HRA', noise: '22 дБ', area: '25 м²', price: 'от 1 490 р.', link: '/products/split-haier', badge: 'Self-clean' },
  { brand: 'LG', series: 'S09EQ Dualcool', noise: '21 дБ', area: '25 м²', price: 'от 1 690 р.', link: '/products/split-lg', badge: 'Гарантия 3 г.' },
];

export default function DetskayaPage() {
  return (
    <ArticleShell>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <main className="max-w-3xl mx-auto px-4 py-10">
        <nav className="text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:text-red-600">Главная</Link>
          {' / '}
          <Link href="/articles" className="hover:text-red-600">Статьи</Link>
          {' / '}
          <span>Кондиционер для детской комнаты</span>
        </nav>

        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Кондиционер для детской комнаты — как выбрать безопасный в 2026
        </h1>
        <p className="text-gray-500 text-sm mb-8">Обновлено: май 2026 · Время чтения: 6 мин</p>

        <p className="text-gray-700 leading-relaxed mb-6">
          Детская комната — особое место, где требования к кондиционеру строже, чем в любой другой. Родителей беспокоят три вещи: шум мешает сну, холодный поток продувает, а грязный кондиционер распространяет бактерии. В этой статье — что реально важно при выборе, на какие технические характеристики смотреть и какие модели лучше всего подходят для детской комнаты.
        </p>

        <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-5 mb-8">
          <p className="font-semibold text-gray-900 mb-2">Главные требования к кондиционеру для детской</p>
          <ul className="space-y-1.5 text-sm text-gray-700">
            <li>✓ <strong>Шум до 24 дБ</strong> — не нарушает сон ребёнка</li>
            <li>✓ <strong>Инверторный компрессор</strong> — нет резких включений, ровная температура</li>
            <li>✓ <strong>Режим «Ночь»</strong> — автоматически снижает скорость вентилятора</li>
            <li>✓ <strong>Фильтрация воздуха</strong> — задерживает пыль, пыльцу, бактерии</li>
            <li>✓ <strong>3D-воздухораспределение</strong> — поток не попадает прямо на ребёнка</li>
          </ul>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mb-4">Лучшие кондиционеры для детской 2026</h2>

        <div className="space-y-4 mb-10">
          {TOP_MODELS.map((m, i) => (
            <div key={m.series} className={`border rounded-xl p-5 ${i === 0 ? 'border-green-300 bg-green-50' : 'border-gray-200'}`}>
              <div className="flex items-start justify-between gap-3 mb-3">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-bold text-gray-900">#{i + 1} {m.brand} {m.series}</span>
                  </div>
                  <span className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full">{m.badge}</span>
                </div>
                <div className="text-right shrink-0">
                  <p className="text-2xl font-black text-green-700">{m.noise}</p>
                  <p className="text-xs text-gray-500">уровень шума</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3 mb-3">
                <div className="text-center bg-white rounded-lg py-2">
                  <p className="text-xs text-gray-500">Площадь</p>
                  <p className="text-sm font-semibold">{m.area}</p>
                </div>
                <div className="text-center bg-white rounded-lg py-2">
                  <p className="text-xs text-gray-500">Цена с монтажом</p>
                  <p className="text-sm font-semibold text-red-700">{m.price}</p>
                </div>
              </div>
              <Link href={m.link} className="text-sm text-red-700 hover:underline">Смотреть в каталоге →</Link>
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mb-4">Правила использования кондиционера в детской</h2>

        <div className="space-y-4 mb-8">
          {[
            {
              title: 'Температура',
              desc: 'Педиатры рекомендуют 22–24°C днём и 20–22°C ночью. Не опускайте ниже 20°C — резкий перепад с уличными +30°C опасен для детского организма. Разница между комнатой и улицей не должна превышать 7–10°C.',
            },
            {
              title: 'Направление потока',
              desc: 'Поток воздуха не должен дуть прямо на кровать или игровую зону. Направьте жалюзи горизонтально или вверх. Выбирайте кондиционеры с функцией 3D-воздухораспределения — они создают равномерный климат без «холодных зон».',
            },
            {
              title: 'Чистота фильтров',
              desc: 'Загрязнённый фильтр превращает кондиционер в источник бактерий и пыли. В детской чистите фильтр каждые 2 недели в сезон. Промывайте в тёплой воде, высушивайте перед установкой. Раз в сезон вызывайте мастера для чистки теплообменника.',
            },
            {
              title: 'Режим «Сон»',
              desc: 'Включайте режим «Ночь» перед сном. Кондиционер автоматически повысит температуру на 1°C за час и снизит скорость вентилятора до минимума. Через 1–2 часа шум практически неслышен.',
            },
          ].map(item => (
            <div key={item.title} className="border-l-4 border-red-300 pl-4">
              <p className="font-semibold text-gray-900 mb-1">{item.title}</p>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mb-4">Кондиционер с очисткой воздуха для детской — нужен ли?</h2>

        <p className="text-gray-700 leading-relaxed mb-4">
          Для детей с аллергией, астмой или частыми ОРВИ — однозначно да. Кондиционеры с HEPA-фильтром задерживают частицы размером от 0,3 мкм: пыльца, споры плесени, шерсть животных, бактерии. Обычный фильтр кондиционера улавливает только крупную пыль.
        </p>

        <div className="bg-gray-50 rounded-xl p-5 mb-8">
          <p className="font-semibold text-gray-900 mb-3">Что умеют дополнительные фильтры:</p>
          <div className="space-y-2">
            {[
              { filter: 'HEPA-фильтр', desc: 'Задерживает 99,97% частиц от 0,3 мкм. Пыльца, плесень, бактерии. Требует замены раз в 1–2 года.' },
              { filter: 'Угольный фильтр', desc: 'Поглощает запахи, ВОС (летучие органические соединения). Хорошо для детских, где красили или клеили обои.' },
              { filter: 'Фотокаталитический', desc: 'Разрушает бактерии и вирусы под действием UV-излучения. Есть в ряде моделей Haier и Electrolux Nordic.' },
            ].map(f => (
              <div key={f.filter} className="flex gap-3 text-sm">
                <span className="font-semibold text-gray-800 w-36 shrink-0">{f.filter}</span>
                <span className="text-gray-600">{f.desc}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gray-900 rounded-2xl p-6 text-white mb-8">
          <h3 className="text-lg font-bold mb-2">Подобрать кондиционер для детской в Гомеле</h3>
          <p className="text-gray-300 text-sm mb-4">Расскажите нам площадь комнаты — подберём тихую и безопасную модель. Монтаж в день заказа, гарантия 1 год.</p>
          <a href="tel:+375291050694" className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-3 rounded-xl transition-colors">
            +375 29 105-06-94
          </a>
        </div>

        <div className="border-t pt-8">
          <p className="text-sm font-semibold text-gray-700 mb-4">Читайте также:</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { href: '/articles/tikhiy-konditsioner-dlya-spalni', label: 'Тихий кондиционер для спальни' },
              { href: '/articles/kak-pravilno-polzovatsya-letom', label: 'Как правильно пользоваться летом' },
              { href: '/articles/chistka-i-obsluzhivanie', label: 'Чистка и обслуживание кондиционера' },
              { href: '/articles/kak-vybrat-konditsioner', label: 'Как выбрать кондиционер' },
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
