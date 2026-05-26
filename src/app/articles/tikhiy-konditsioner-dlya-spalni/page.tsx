import Link from 'next/link';
import ArticleShell from '../ArticleShell';

const breadcrumbLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Главная', item: 'https://aircom-fort.by' },
    { '@type': 'ListItem', position: 2, name: 'Статьи', item: 'https://aircom-fort.by/articles' },
    { '@type': 'ListItem', position: 3, name: 'Тихий кондиционер для спальни' },
  ],
};

const TOP_MODELS = [
  { brand: 'Ballu', series: 'Platinum Evolution BSPI-09HN8', noise: '19 дБ', btu: '9 000', area: '25 м²', price: 'от 1 390 р.', link: '/products/split-ballu', badge: 'Самый тихий' },
  { brand: 'Electrolux', series: 'Nordic EACS-I-09HN/N3', noise: '21 дБ', btu: '9 000', area: '25 м²', price: 'от 1 690 р.', link: '/products/split-electrolux', badge: 'Хит' },
  { brand: 'Haier', series: 'Pearl AS09PM5HRA', noise: '22 дБ', btu: '9 000', area: '25 м²', price: 'от 1 490 р.', link: '/products/split-haier', badge: 'Wi-Fi' },
  { brand: 'LG', series: 'ArtCool S09EQ', noise: '21 дБ', btu: '9 000', area: '25 м²', price: 'от 1 690 р.', link: '/products/split-lg', badge: 'Дизайн' },
  { brand: 'Electrolux', series: 'Nordic EACS-I-12HN/N3', noise: '22 дБ', btu: '12 000', area: '35 м²', price: 'от 1 950 р.', link: '/products/split-electrolux', badge: 'До 35 м²' },
];

export default function TikhiyPage() {
  return (
    <ArticleShell>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <main className="max-w-3xl mx-auto px-4 py-10">
        <nav className="text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:text-red-600">Главная</Link>
          {' / '}
          <Link href="/articles" className="hover:text-red-600">Статьи</Link>
          {' / '}
          <span>Тихий кондиционер для спальни</span>
        </nav>

        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Тихий кондиционер для спальни 2026 — ТОП 5 бесшумных моделей
        </h1>
        <p className="text-gray-500 text-sm mb-8">Обновлено: май 2026 · Время чтения: 6 мин</p>

        <p className="text-gray-700 leading-relaxed mb-6">
          Шумный кондиционер в спальне — один из главных поводов для возврата техники. Гул и вибрация мешают засыпать, режим ночной работы помогает не всегда. В этой статье разбираем, что означают децибелы на этикетке кондиционера, какой уровень шума считается комфортным для сна, и приводим ТОП 5 бесшумных моделей, которые есть в наличии в Гомеле.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mb-4">Что такое уровень шума кондиционера в дБ</h2>

        <div className="bg-blue-50 rounded-xl p-5 mb-6">
          <div className="space-y-2 text-sm">
            {[
              { db: '19–22 дБ', desc: 'Шелест листьев. Идеально для спальни — вы не услышите кондиционер', color: 'bg-green-500' },
              { db: '23–26 дБ', desc: 'Тихий шёпот. Комфортно для большинства людей, особенно в режиме "Сон"', color: 'bg-yellow-400' },
              { db: '27–30 дБ', desc: 'Тихий разговор. Заметно, но не мешает засыпать при усталости', color: 'bg-orange-400' },
              { db: '31–35 дБ', desc: 'Обычный разговор. Для спальни не подходит — будет мешать', color: 'bg-red-500' },
            ].map(item => (
              <div key={item.db} className="flex items-center gap-3">
                <div className={`w-3 h-3 rounded-full shrink-0 ${item.color}`} />
                <span className="font-semibold w-20 shrink-0">{item.db}</span>
                <span className="text-gray-700">{item.desc}</span>
              </div>
            ))}
          </div>
        </div>

        <p className="text-gray-700 leading-relaxed mb-8">
          Обратите внимание: на этикетке указывается уровень шума <strong>внутреннего блока</strong> при минимальной скорости вентилятора. В режиме максимального охлаждения шум на 5–8 дБ выше. Именно поэтому инверторные модели так тихи — они работают на пониженной мощности большую часть времени.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mb-6">ТОП 5 тихих кондиционеров для спальни 2026</h2>

        <div className="space-y-4 mb-10">
          {TOP_MODELS.map((m, i) => (
            <div key={m.series} className={`border rounded-xl p-5 ${i === 0 ? 'border-green-300 bg-green-50' : 'border-gray-200'}`}>
              <div className="flex items-start justify-between gap-3 mb-3">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-bold text-gray-900">#{i + 1} {m.brand} {m.series}</span>
                  </div>
                  <span className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full mr-2">{m.badge}</span>
                </div>
                <div className="text-right shrink-0">
                  <p className="text-2xl font-black text-green-700">{m.noise}</p>
                  <p className="text-xs text-gray-500">уровень шума</p>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-3 mb-3">
                <div className="text-center bg-white rounded-lg py-2">
                  <p className="text-xs text-gray-500">Мощность</p>
                  <p className="text-sm font-semibold">{m.btu}</p>
                </div>
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

        <h2 className="text-2xl font-bold text-gray-900 mb-4">Что ещё важно для сна с кондиционером</h2>

        <div className="space-y-4 mb-8">
          {[
            {
              title: 'Режим «Ночь» или «Сон»',
              desc: 'В этом режиме кондиционер автоматически повышает температуру на 1°C каждые 30 минут после включения и снижает скорость вентилятора до минимума. Через 1–2 часа — почти полная тишина. Большинство современных инверторных моделей поддерживают этот режим.',
            },
            {
              title: 'Направление воздушного потока',
              desc: 'Поток не должен дуть прямо на кровать. Направьте жалюзи горизонтально или вверх — холодный воздух опустится сам. Кондиционеры с функцией 3D-воздухораспределения создают равномерный климат без «холодных зон».',
            },
            {
              title: 'Оптимальная температура для сна',
              desc: 'Физиологически оптимальная температура для сна — 18–22°C. Но резкий перепад с уличными 30°C вредит здоровью. Рекомендуем ставить 24–26°C и оставлять включённым до утра, не выключать перед сном.',
            },
            {
              title: 'Регулярная чистка фильтров',
              desc: 'Грязный фильтр — главная причина шума кондиционера. Вентилятор работает на повышенных оборотах, чтобы протолкнуть воздух через забитую сетку. Чистите фильтр раз в 2–4 недели в сезон.',
            },
          ].map(item => (
            <div key={item.title} className="border-l-4 border-red-300 pl-4">
              <p className="font-semibold text-gray-900 mb-1">{item.title}</p>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mb-4">Почему инвертор тише обычного кондиционера</h2>

        <p className="text-gray-700 leading-relaxed mb-4">
          Обычный on/off кондиционер работает в двух режимах: компрессор либо включён на максимуме, либо полностью выключен. При включении — резкий шум, при выключении — тишина, потом снова шум. Этот цикл повторяется каждые 10–20 минут и мешает сну.
        </p>

        <p className="text-gray-700 leading-relaxed mb-8">
          Инверторный кондиционер плавно меняет скорость компрессора. Достигнув нужной температуры, он переходит в режим поддержания — компрессор работает на 20–30% мощности почти бесшумно. Именно поэтому все тихие кондиционеры для спальни — инверторные.
        </p>

        <div className="bg-gray-900 rounded-2xl p-6 text-white mb-8">
          <h3 className="text-lg font-bold mb-2">Подобрать тихий кондиционер для спальни в Гомеле</h3>
          <p className="text-gray-300 text-sm mb-4">Поможем выбрать по площади спальни и бюджету. Установка в день заказа, гарантия 1 год на монтаж.</p>
          <a href="tel:+375291050694" className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-3 rounded-xl transition-colors">
            +375 29 105-06-94
          </a>
        </div>

        <div className="border-t pt-8">
          <p className="text-sm font-semibold text-gray-700 mb-4">Читайте также:</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { href: '/articles/invertor-ili-obychnyy', label: 'Инвертор или обычный — разница' },
              { href: '/articles/konditsioner-dlya-komnaty', label: 'Кондиционер для комнаты 20 кв м' },
              { href: '/articles/kak-pravilno-polzovatsya-letom', label: 'Как правильно пользоваться летом' },
              { href: '/articles/chistka-i-obsluzhivanie', label: 'Чистка и обслуживание кондиционера' },
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
