import Link from 'next/link';
import ArticleShell from '../ArticleShell';

const breadcrumbLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Главная', item: 'https://aircom-fort.by' },
    { '@type': 'ListItem', position: 2, name: 'Статьи', item: 'https://aircom-fort.by/articles' },
    { '@type': 'ListItem', position: 3, name: 'Кондиционер для офиса в Гомеле' },
  ],
};

export default function OfisPage() {
  return (
    <ArticleShell>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <main className="max-w-3xl mx-auto px-4 py-10">
        <nav className="text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:text-red-600">Главная</Link>
          {' / '}
          <Link href="/articles" className="hover:text-red-600">Статьи</Link>
          {' / '}
          <span>Кондиционер для офиса в Гомеле</span>
        </nav>

        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Кондиционер для офиса в Гомеле — как выбрать, цены и монтаж
        </h1>
        <p className="text-gray-500 text-sm mb-8">Обновлено: май 2026 · Время чтения: 6 мин</p>

        <p className="text-gray-700 leading-relaxed mb-6">
          Офис без кондиционера летом — потеря производительности 20–30%, больничные листы и недовольные сотрудники. Правильно подобранная система охлаждения окупает себя за 1–2 сезона за счёт роста работоспособности команды. В этой статье разбираем, какой кондиционер выбрать для офиса в Гомеле в зависимости от площади и количества рабочих мест.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mb-4">Типы кондиционеров для офиса</h2>

        <div className="space-y-4 mb-8">
          {[
            {
              title: 'Настенный сплит-кондиционер',
              area: 'Офис 15–40 м²',
              price: 'от 400 р. монтаж',
              pros: ['Простой монтаж', 'Доступная цена', 'Все ведущие бренды'],
              cons: ['Воздух распределяется только в одном направлении', 'Занимает место на стене'],
              best: true,
            },
            {
              title: 'Кассетный кондиционер',
              area: 'Офис 30–80 м²',
              price: 'от 600 р. монтаж',
              pros: ['Равномерное распределение воздуха (4 стороны)', 'Не занимает стены', 'Незаметен в интерьере'],
              cons: ['Нужен подвесной потолок', 'Дороже в монтаже'],
              best: false,
            },
            {
              title: 'Мультисплит-система',
              area: 'Офис с несколькими зонами',
              price: 'от 1 200 р. монтаж',
              pros: ['Один наружный блок на 2–5 комнат', 'Независимое управление каждой зоной', 'Экономия места на фасаде'],
              cons: ['Высокая начальная стоимость', 'Сложный монтаж'],
              best: false,
            },
          ].map(item => (
            <div key={item.title} className={`border rounded-xl p-5 ${item.best ? 'border-red-300 bg-red-50' : 'border-gray-200'}`}>
              <div className="flex items-start justify-between gap-3 mb-3">
                <h3 className="font-bold text-gray-900">{item.title}</h3>
                <div className="text-right shrink-0">
                  <p className="text-xs text-gray-500">{item.area}</p>
                  <p className="text-sm font-semibold text-red-700">{item.price}</p>
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-3">
                <div>
                  <p className="text-xs font-semibold text-green-700 mb-1">Плюсы</p>
                  <ul className="space-y-1">
                    {item.pros.map(p => <li key={p} className="text-xs text-gray-700 flex gap-1"><span className="text-green-600">+</span>{p}</li>)}
                  </ul>
                </div>
                <div>
                  <p className="text-xs font-semibold text-red-700 mb-1">Минусы</p>
                  <ul className="space-y-1">
                    {item.cons.map(c => <li key={c} className="text-xs text-gray-700 flex gap-1"><span className="text-red-500">−</span>{c}</li>)}
                  </ul>
                </div>
              </div>
              {item.best && <p className="mt-3 text-xs text-red-700 font-semibold">★ Наш выбор для большинства офисов в Гомеле</p>}
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mb-4">Расчёт мощности кондиционера для офиса</h2>

        <p className="text-gray-700 leading-relaxed mb-4">
          В офисе тепло выделяют не только люди, но и компьютеры, принтеры, серверы. Стандартный расчёт «1 кВт на 10 м²» для квартиры в офисе нужно корректировать:
        </p>

        <div className="bg-gray-50 rounded-xl p-5 mb-6">
          <p className="font-semibold text-gray-900 mb-3">Формула для офиса:</p>
          <p className="text-sm text-gray-700 font-mono bg-white rounded p-3 mb-3">Мощность (кВт) = Площадь × 0,1 + Количество компьютеров × 0,3 + Количество людей × 0,1</p>
          <p className="text-sm text-gray-600">Пример: офис 30 м², 5 компьютеров, 5 сотрудников = 30×0,1 + 5×0,3 + 5×0,1 = 3 + 1,5 + 0,5 = <strong>5 кВт</strong> → кондиционер 18 000 BTU</p>
        </div>

        <div className="overflow-x-auto mb-8">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-gray-100">
                <th className="text-left px-4 py-3 font-semibold border border-gray-200">Площадь офиса</th>
                <th className="text-left px-4 py-3 font-semibold border border-gray-200">Мощность</th>
                <th className="text-left px-4 py-3 font-semibold border border-gray-200">Рекомендуемая модель</th>
                <th className="text-left px-4 py-3 font-semibold border border-gray-200">Цена с монтажом</th>
              </tr>
            </thead>
            <tbody>
              {[
                { area: 'до 20 м², 1–3 места', power: '7 000–9 000 BTU', model: 'Ballu BSAGI-09 / Electrolux EACS-I-09', price: 'от 1 290 р.' },
                { area: '20–35 м², 3–5 мест', power: '12 000 BTU', model: 'Haier AS12NS4ERA / Electrolux EACS-I-12', price: 'от 1 490 р.' },
                { area: '35–60 м², 5–10 мест', power: '18 000 BTU', model: 'Electrolux EACS-I-18 / LG S18EQ', price: 'от 2 200 р.' },
                { area: '60–100 м²', power: '24 000 BTU или 2 блока', model: 'Мультисплит или 2 настенных', price: 'от 3 500 р.' },
              ].map((row, i) => (
                <tr key={row.area} className={i % 2 === 1 ? 'bg-gray-50' : ''}>
                  <td className="px-4 py-3 border border-gray-200">{row.area}</td>
                  <td className="px-4 py-3 border border-gray-200 font-semibold">{row.power}</td>
                  <td className="px-4 py-3 border border-gray-200 text-gray-600">{row.model}</td>
                  <td className="px-4 py-3 border border-gray-200 font-semibold text-red-700">{row.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mb-4">На что обратить внимание при выборе офисного кондиционера</h2>

        <div className="grid sm:grid-cols-2 gap-4 mb-8">
          {[
            { title: 'Уровень шума', desc: 'В офисе важна тишина. Выбирайте инверторные модели с уровнем шума внутреннего блока до 26 дБ. Громкий кондиционер мешает переговорам и снижает концентрацию.' },
            { title: 'Качество воздуха', desc: 'Кондиционеры с угольным или HEPA-фильтром задерживают пыль, бактерии и неприятные запахи. Особенно важно для офисов без окон или с большим потоком посетителей.' },
            { title: 'Управление', desc: 'Wi-Fi управление через приложение позволяет включить кондиционер за 30 минут до прихода сотрудников. Программируемый таймер экономит электроэнергию в нерабочее время.' },
            { title: 'Энергоэффективность', desc: 'Кондиционер в офисе работает 8–10 часов 5 дней в неделю. Класс А++ сэкономит 3 000–5 000 р. за 5 лет по сравнению с классом В на той же мощности.' },
          ].map(item => (
            <div key={item.title} className="bg-gray-50 rounded-xl p-4">
              <p className="font-semibold text-gray-900 text-sm mb-2">{item.title}</p>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mb-4">Лучшие бренды кондиционеров для офиса</h2>

        <div className="space-y-3 mb-8">
          {[
            { brand: 'Electrolux', note: 'Лучший выбор для офиса', desc: 'Тихая работа, надёжность, гарантия 2–3 года. Серия EACS-I оптимальна по соотношению цена/качество.', link: '/products/split-electrolux' },
            { brand: 'Ballu', note: 'Доступная цена', desc: 'Бюджетные and средние серии. Ballu BSAGI — популярный выбор для небольших офисов. Гарантия 2 года.', link: '/products/split-ballu' },
            { brand: 'Haier', note: 'Wi-Fi в базе', desc: 'Большинство моделей Haier поставляются с Wi-Fi управлением без доплаты. Удобно для офисов с гибким графиком.', link: '/products/split-haier' },
            { brand: 'LG', note: 'Премиум', desc: 'Самые тихие модели в своём классе, обширный выбор мощностей. Для представительских офисов и переговорных комнат.', link: '/products/split-lg' },
          ].map(item => (
            <div key={item.brand} className="flex items-start gap-4 border border-gray-200 rounded-xl p-4">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-bold text-gray-900">{item.brand}</span>
                  <span className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full">{item.note}</span>
                </div>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
              <Link href={item.link} className="text-xs text-red-700 hover:underline shrink-0 mt-1">Каталог →</Link>
            </div>
          ))}
        </div>

        <div className="bg-gray-900 rounded-2xl p-6 text-white mb-8">
          <h3 className="text-lg font-bold mb-2">Заказать кондиционер для офиса в Гомеле</h3>
          <p className="text-gray-300 text-sm mb-4">Приедем, замерим, подберём оптимальную модель. Установка в день заказа или на следующий день.</p>
          <a href="tel:+375291050694" className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-3 rounded-xl transition-colors">
            +375 29 105-06-94
          </a>
        </div>

        <div className="border-t pt-8">
          <p className="text-sm font-semibold text-gray-700 mb-4">Читайте также:</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { href: '/articles/montazh-kassetnogo-konditsionera', label: 'Монтаж кассетного кондиционера' },
              { href: '/articles/kak-vybrat-konditsioner', label: 'Как выбрать кондиционер' },
              { href: '/articles/tsena-ustanovki-konditsionera', label: 'Сколько стоит установка' },
              { href: '/services', label: 'Услуги AirComfort' },
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
