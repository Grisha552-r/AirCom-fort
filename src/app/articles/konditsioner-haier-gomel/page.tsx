import Link from 'next/link';
import ArticleShell from '../ArticleShell';

export default function HaierGomelPage() {
  const breadcrumbLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Главная', item: 'https://aircom-fort.by' },
      { '@type': 'ListItem', position: 2, name: 'Статьи', item: 'https://aircom-fort.by/articles' },
      { '@type': 'ListItem', position: 3, name: 'Кондиционеры Haier в Гомеле' },
    ],
  };
  return (
    <ArticleShell>
      <main className="max-w-3xl mx-auto px-4 py-10">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
        <nav className="text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:text-red-600">Главная</Link>{' / '}
          <Link href="/articles" className="hover:text-red-600">Статьи</Link>{' / '}
          <span>Кондиционеры Haier в Гомеле</span>
        </nav>
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Кондиционеры Haier в Гомеле — купить с установкой от 1 350 р.</h1>
        <p className="text-gray-500 text-sm mb-8">Обновлено: май 2026 · Время чтения: 5 мин</p>
        <p className="text-gray-700 leading-relaxed mb-6">Haier — производитель климатического оборудования №1 в мире. Главные преимущества: встроенный Wi-Fi без доплаты, тихая работа от 22 дБ и работа на обогрев до −25°C. AirComfort — официальный дилер Haier в Гомеле.</p>
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Популярные серии Haier</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full text-sm border-collapse">
            <thead><tr className="bg-red-50">
              <th className="text-left p-3 border border-gray-200 font-semibold">Серия</th>
              <th className="text-left p-3 border border-gray-200 font-semibold">Шум</th>
              <th className="text-left p-3 border border-gray-200 font-semibold">Wi-Fi</th>
              <th className="text-left p-3 border border-gray-200 font-semibold">Мороз</th>
            </tr></thead>
            <tbody>
              {[
                ['Haier NS4ERA', '22 дБ', 'Встроенный', 'до −25°C'],
                ['Haier Flexis Plus', '21 дБ', 'Встроенный', 'до −25°C'],
                ['Haier Pearl', '22 дБ', 'Встроенный', 'до −20°C'],
                ['Haier Tibio', '24 дБ', 'Опционально', 'до −15°C'],
              ].map(([s, n, w, f], i) => (
                <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                  <td className="p-3 border border-gray-200 font-medium">{s}</td>
                  <td className="p-3 border border-gray-200">{n}</td>
                  <td className="p-3 border border-gray-200 text-red-700 font-semibold">{w}</td>
                  <td className="p-3 border border-gray-200 text-gray-600">{f}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Цены Haier с установкой</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full text-sm border-collapse">
            <thead><tr className="bg-red-50">
              <th className="text-left p-3 border border-gray-200 font-semibold">Модель</th>
              <th className="text-left p-3 border border-gray-200 font-semibold">Площадь</th>
              <th className="text-left p-3 border border-gray-200 font-semibold">Цена под ключ</th>
            </tr></thead>
            <tbody>
              {[
                ['Haier AS09NS4ERA', 'до 25 м²', 'от 1 350 р.'],
                ['Haier AS12NS4ERA', 'до 35 м²', 'от 1 590 р.'],
                ['Haier AS18NS4ERA', 'до 50 м²', 'от 2 090 р.'],
                ['Haier AS24NS4ERA', 'до 70 м²', 'от 2 590 р.'],
              ].map(([m, a, p], i) => (
                <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                  <td className="p-3 border border-gray-200 font-medium">{m}</td>
                  <td className="p-3 border border-gray-200 text-gray-600">{a}</td>
                  <td className="p-3 border border-gray-200 font-bold text-red-700">{p}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
          {[
            ['Wi-Fi в базе', 'Большинство моделей Haier имеют встроенный Wi-Fi без доплаты. Управление через приложение hOn (iOS/Android).'],
            ['Самоочистка', 'Авто-очистка испарителя — меньше плесени, реже нужно вызывать мастера на обслуживание.'],
            ['Работа в мороз', 'Серии NS4ERA работают на обогрев при −25°C — идеально для белорусской зимы.'],
            ['Гарантия 2 года', 'AirComfort — авторизованный дилер. Официальная гарантия производителя на каждый товар.'],
          ].map(([title, text]) => (
            <div key={title} className="bg-gray-50 rounded-xl p-4">
              <p className="font-semibold text-gray-900 mb-1">{title}</p>
              <p className="text-gray-700 text-sm">{text}</p>
            </div>
          ))}
        </div>
        <div className="bg-red-50 border border-red-100 rounded-xl p-5 mb-8">
          <p className="font-semibold text-gray-900 mb-2">Купить Haier в Гомеле</p>
          <p className="text-gray-700 text-sm mb-3">Монтаж в день заказа. Гарантия 2 года на оборудование.</p>
          <a href="tel:+375291050694" className="text-red-700 font-semibold hover:underline">+375 29 105-06-94</a>
        </div>
        <div className="bg-gray-50 rounded-xl p-5 mb-8">
          <p className="font-semibold text-gray-900 mb-3">Читайте также</p>
          <div className="space-y-2">
            <Link href="/articles/konditsioner-ballu-gomel" className="block text-red-700 hover:underline text-sm">→ Кондиционеры Ballu в Гомеле</Link>
            <Link href="/articles/konditsioner-lg-gomel" className="block text-red-700 hover:underline text-sm">→ Кондиционеры LG в Гомеле</Link>
            <Link href="/articles/invertor-konditsioner-gomel" className="block text-red-700 hover:underline text-sm">→ Инверторный кондиционер в Гомеле</Link>
          </div>
        </div>
        <Link href="/products/split-haier" className="inline-block bg-red-700 text-white px-6 py-3 rounded-xl font-semibold hover:bg-red-800 transition-colors">Смотреть кондиционеры Haier →</Link>
      </main>
    </ArticleShell>
  );
}
