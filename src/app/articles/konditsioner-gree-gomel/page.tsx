import Link from 'next/link';
import ArticleShell from '../ArticleShell';

export default function GreeGomelPage() {
  const breadcrumbLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Главная', item: 'https://aircom-fort.by' },
      { '@type': 'ListItem', position: 2, name: 'Статьи', item: 'https://aircom-fort.by/articles' },
      { '@type': 'ListItem', position: 3, name: 'Кондиционер Gree в Гомеле' },
    ],
  };
  return (
    <ArticleShell>
      <main className="max-w-3xl mx-auto px-4 py-10">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
        <nav className="text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:text-red-600">Главная</Link>{' / '}
          <Link href="/articles" className="hover:text-red-600">Статьи</Link>{' / '}
          <span>Кондиционер Gree в Гомеле</span>
        </nav>
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Кондиционер Gree в Гомеле — купить с установкой</h1>
        <p className="text-gray-500 text-sm mb-8">Обновлено: май 2026 · Время чтения: 4 мин</p>
        <p className="text-gray-700 leading-relaxed mb-6">Gree — крупнейший в мире производитель кондиционеров по объёму выпуска. Китайский бренд с собственными заводами по производству компрессоров, которые используются в кондиционерах King Home, Ballu и многих других брендах. В Гомеле кондиционеры Gree доступны в AirComfort.</p>
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Почему Gree популярен</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
          {[
            ['Собственный компрессор', 'Gree производит собственные компрессоры — ключевой компонент любого кондиционера. Это снижает себестоимость и повышает надёжность.'],
            ['Широкий модельный ряд', 'От бюджетных on/off до премиальных инверторных серий Pular, Soyal и Hansol с Wi-Fi и ионизацией.'],
            ['Работа в мороз', 'Серии Pular и Soyal работают на обогрев до −30°C — редкость даже среди премиум-брендов.'],
            ['Доступная цена', 'При хороших характеристиках Gree стоит на 10–15% дешевле аналогичных моделей LG и Haier.'],
          ].map(([title, text]) => (
            <div key={title} className="bg-gray-50 rounded-xl p-4">
              <p className="font-semibold text-gray-900 mb-1">{title}</p>
              <p className="text-gray-700 text-sm">{text}</p>
            </div>
          ))}
        </div>
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Популярные серии Gree с ценами</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full text-sm border-collapse">
            <thead><tr className="bg-red-50">
              <th className="text-left p-3 border border-gray-200 font-semibold">Серия</th>
              <th className="text-left p-3 border border-gray-200 font-semibold">Шум</th>
              <th className="text-left p-3 border border-gray-200 font-semibold">Особенности</th>
              <th className="text-left p-3 border border-gray-200 font-semibold">Цена с уст.</th>
            </tr></thead>
            <tbody>
              {[
                ['Gree G-Tech', '22 дБ', 'Базовый инвертор, надёжный', 'от 1 290 р.'],
                ['Gree Pular', '22 дБ', 'Инвертор, −30°C, Wi-Fi', 'от 1 590 р.'],
                ['Gree Soyal', '21 дБ', 'Инвертор, очистка воздуха', 'от 1 790 р.'],
                ['Gree Hansol', '20 дБ', 'Премиум, ионизация, HEPA', 'от 2 190 р.'],
              ].map(([s, n, f, p], i) => (
                <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                  <td className="p-3 border border-gray-200 font-medium">{s}</td>
                  <td className="p-3 border border-gray-200">{n}</td>
                  <td className="p-3 border border-gray-200 text-gray-600">{f}</td>
                  <td className="p-3 border border-gray-200 font-bold text-red-700">{p}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-5 mb-8">
          <p className="font-semibold text-gray-900 mb-1">Gree в King Home</p>
          <p className="text-gray-700 text-sm">Кондиционеры King Home Luna Matt используют компрессор Gree. Если вы хотите надёжность Gree по доступной цене — рассмотрите King Home Luna Matt с тем же компрессором.</p>
        </div>
        <div className="bg-red-50 border border-red-100 rounded-xl p-5 mb-8">
          <p className="font-semibold text-gray-900 mb-2">Кондиционеры Gree в Гомеле</p>
          <p className="text-gray-700 text-sm mb-3">Позвоните — подберём модель и рассчитаем стоимость с установкой.</p>
          <a href="tel:+375291050694" className="text-red-700 font-semibold hover:underline">+375 29 105-06-94</a>
        </div>
        <div className="bg-gray-50 rounded-xl p-5 mb-8">
          <p className="font-semibold text-gray-900 mb-3">Читайте также</p>
          <div className="space-y-2">
            <Link href="/articles/konditsioner-kinghome-gomel" className="block text-red-700 hover:underline text-sm">→ Кондиционеры King Home в Гомеле</Link>
            <Link href="/articles/invertor-konditsioner-gomel" className="block text-red-700 hover:underline text-sm">→ Инверторный кондиционер в Гомеле</Link>
            <Link href="/articles/kak-vybrat-konditsioner" className="block text-red-700 hover:underline text-sm">→ Как выбрать кондиционер</Link>
          </div>
        </div>
        <Link href="/products/split-systems" className="inline-block bg-red-700 text-white px-6 py-3 rounded-xl font-semibold hover:bg-red-800 transition-colors">Смотреть все кондиционеры →</Link>
      </main>
    </ArticleShell>
  );
}
