import Link from 'next/link';
import ArticleShell from '../ArticleShell';

export default function InvertorKonditsionerGomelPage() {
  const breadcrumbLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Главная', item: 'https://aircom-fort.by' },
      { '@type': 'ListItem', position: 2, name: 'Статьи', item: 'https://aircom-fort.by/articles' },
      { '@type': 'ListItem', position: 3, name: 'Инверторный кондиционер в Гомеле' },
    ],
  };
  return (
    <ArticleShell>
      <main className="max-w-3xl mx-auto px-4 py-10">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
        <nav className="text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:text-red-600">Главная</Link>{' / '}
          <Link href="/articles" className="hover:text-red-600">Статьи</Link>{' / '}
          <span>Инверторный кондиционер в Гомеле</span>
        </nav>
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Инверторный кондиционер в Гомеле — купить с установкой</h1>
        <p className="text-gray-500 text-sm mb-8">Обновлено: май 2026 · Время чтения: 5 мин</p>
        <p className="text-gray-700 leading-relaxed mb-6">Инверторный кондиционер плавно регулирует мощность компрессора вместо его включения/выключения. Результат: меньше шума, точное поддержание температуры и экономия электроэнергии до 40%. В Гомеле инверторные модели — наш главный выбор 90% покупателей.</p>
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Инвертор vs On/Off — сравнение</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full text-sm border-collapse">
            <thead><tr className="bg-red-50">
              <th className="text-left p-3 border border-gray-200 font-semibold">Параметр</th>
              <th className="text-left p-3 border border-gray-200 font-semibold">Инверторный</th>
              <th className="text-left p-3 border border-gray-200 font-semibold">On/Off</th>
            </tr></thead>
            <tbody>
              {[
                ['Шум', '19–24 дБ', '26–32 дБ'],
                ['Экономия', 'до 40% электроэнергии', 'Базовый расход'],
                ['Точность температуры', '±0,5°C', '±2–3°C'],
                ['Работа в мороз', 'до −25°C', 'до −5°C'],
                ['Цена покупки', 'дороже на 100–300 р.', 'дешевле'],
                ['Окупаемость', '1–2 сезона', '—'],
              ].map(([p, inv, onoff], i) => (
                <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                  <td className="p-3 border border-gray-200 font-semibold">{p}</td>
                  <td className="p-3 border border-gray-200 text-red-700 font-semibold">{inv}</td>
                  <td className="p-3 border border-gray-200 text-gray-500">{onoff}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Лучшие инверторные кондиционеры в Гомеле 2026</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full text-sm border-collapse">
            <thead><tr className="bg-red-50">
              <th className="text-left p-3 border border-gray-200 font-semibold">Модель</th>
              <th className="text-left p-3 border border-gray-200 font-semibold">Шум</th>
              <th className="text-left p-3 border border-gray-200 font-semibold">Мороз</th>
              <th className="text-left p-3 border border-gray-200 font-semibold">Цена с уст.</th>
            </tr></thead>
            <tbody>
              {[
                ['Ballu BSAGI-09HN8', '22 дБ', '−15°C', 'от 1 290 р.'],
                ['Haier AS09NS4ERA', '22 дБ', '−25°C', 'от 1 350 р.'],
                ['Electrolux EACS-I-09HAT', '21 дБ', '−15°C', 'от 1 490 р.'],
                ['LG S09EQ', '21 дБ', '−25°C', 'от 1 690 р.'],
                ['King Home Luna Matt 09', '22 дБ', '−15°C', 'от 2 490 р.'],
              ].map(([m, n, f, p], i) => (
                <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                  <td className="p-3 border border-gray-200 font-medium">{m}</td>
                  <td className="p-3 border border-gray-200">{n}</td>
                  <td className="p-3 border border-gray-200">{f}</td>
                  <td className="p-3 border border-gray-200 font-bold text-red-700">{p}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Когда выгоден инвертор, а когда — нет</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
          {[
            ['Инвертор выгоден', 'Если кондиционер работает каждый день 4+ часов. Разница в цене окупается за 1–2 сезона.'],
            ['On/Off достаточен', 'Дача, временное жильё, редкое использование. Нет смысла переплачивать за инвертор.'],
            ['Для спальни', 'Только инвертор: тихий режим сна, точная температура, нет резких включений/выключений.'],
            ['Для зимнего обогрева', 'Только инвертор: работает при −15°C…−25°C, on/off перестаёт греть уже при −5°C.'],
          ].map(([title, text]) => (
            <div key={title} className="bg-gray-50 rounded-xl p-4">
              <p className="font-semibold text-gray-900 mb-1">{title}</p>
              <p className="text-gray-700 text-sm">{text}</p>
            </div>
          ))}
        </div>
        <div className="bg-red-50 border border-red-100 rounded-xl p-5 mb-8">
          <p className="font-semibold text-gray-900 mb-2">Купить инверторный кондиционер в Гомеле</p>
          <p className="text-gray-700 text-sm mb-3">Подберём модель под ваш бюджет и площадь. Монтаж в день заказа, гарантия 1 год.</p>
          <a href="tel:+375291050694" className="text-red-700 font-semibold hover:underline">+375 29 105-06-94</a>
        </div>
        <div className="bg-gray-50 rounded-xl p-5 mb-8">
          <p className="font-semibold text-gray-900 mb-3">Читайте также</p>
          <div className="space-y-2">
            <Link href="/articles/invertor-ili-obychnyy" className="block text-red-700 hover:underline text-sm">→ Инвертор или обычный — что выгоднее</Link>
            <Link href="/articles/tikhiy-konditsioner-dlya-spalni" className="block text-red-700 hover:underline text-sm">→ Тихий кондиционер для спальни</Link>
            <Link href="/articles/kak-vybrat-konditsioner" className="block text-red-700 hover:underline text-sm">→ Как выбрать кондиционер</Link>
          </div>
        </div>
        <Link href="/products/split-systems" className="inline-block bg-red-700 text-white px-6 py-3 rounded-xl font-semibold hover:bg-red-800 transition-colors">Смотреть инверторные кондиционеры →</Link>
      </main>
    </ArticleShell>
  );
}
