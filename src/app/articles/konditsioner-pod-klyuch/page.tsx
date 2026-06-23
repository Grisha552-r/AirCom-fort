import Link from 'next/link';
import ArticleShell from '../ArticleShell';

export default function KonditsionerPodKlyuchPage() {
  const breadcrumbLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Главная', item: 'https://aircom-fort.by' },
      { '@type': 'ListItem', position: 2, name: 'Статьи', item: 'https://aircom-fort.by/articles' },
      { '@type': 'ListItem', position: 3, name: 'Кондиционер под ключ в Гомеле' },
    ],
  };
  return (
    <ArticleShell>
      <main className="max-w-3xl mx-auto px-4 py-10">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
        <nav className="text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:text-red-600">Главная</Link>{' / '}
          <Link href="/articles" className="hover:text-red-600">Статьи</Link>{' / '}
          <span>Кондиционер под ключ</span>
        </nav>
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Кондиционер под ключ в Гомеле — кондиционер + установка от 1 290 р.</h1>
        <p className="text-gray-500 text-sm mb-8">Обновлено: май 2026 · Время чтения: 5 мин</p>
        <p className="text-gray-700 leading-relaxed mb-6">Кондиционер под ключ — это полный комплекс: выбор модели, доставка, профессиональный монтаж, пуско-наладка и инструктаж. Вы платите один раз фиксированную цену, мастер приезжает и делает всё. Никаких сюрпризов при расчёте.</p>
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Что входит в стоимость под ключ</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
          {[
            ['Кондиционер с гарантией', 'Выбранная модель из нашего каталога с официальной гарантией производителя'],
            ['Монтаж внутреннего блока', 'Разметка, кронштейны, крепление на стену'],
            ['Монтаж внешнего блока', 'Кронштейны на фасад, сверление, крепление'],
            ['Трасса до 3 м', 'Медные трубки, дренаж, кабель, теплоизоляция'],
            ['Вакуумирование', 'Удаление воздуха и влаги перед запуском'],
            ['Пуско-наладка', 'Запуск, проверка всех режимов, настройка'],
            ['Инструктаж', 'Как пользоваться пультом и всеми функциями'],
            ['Гарантия на монтаж 1 год', 'При любой проблеме с монтажом — бесплатный выезд'],
          ].map((item) => (
            <div key={item[0]} className="flex items-start gap-2 bg-gray-50 rounded-lg px-3 py-2.5">
              <svg className="w-4 h-4 text-green-600 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
              <div>
                <p className="text-sm font-semibold text-gray-800">{item[0]}</p>
                <p className="text-xs text-gray-500">{item[1]}</p>
              </div>
            </div>
          ))}
        </div>
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Цены на кондиционер под ключ в Гомеле</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full text-sm border-collapse">
            <thead><tr className="bg-red-50">
              <th className="text-left p-3 border border-gray-200 font-semibold">Модель</th>
              <th className="text-left p-3 border border-gray-200 font-semibold">Площадь</th>
              <th className="text-left p-3 border border-gray-200 font-semibold">Цена под ключ</th>
            </tr></thead>
            <tbody>
              {[
                ['Mitsudai MD-SNE09AI', 'до 27 м²', '1 290 р.'],
                ['Ballu BSAGI-09HN8', 'до 25 м²', '1 290 р.'],
                ['Haier AS09NS4ERA', 'до 25 м²', '1 350 р.'],
                ['Electrolux EACS-I-09HAT', 'до 25 м²', '1 490 р.'],
                ['LG S09EQ', 'до 25 м²', '1 690 р.'],
                ['Haier AS12NS4ERA', 'до 35 м²', '1 590 р.'],
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
        <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-5 mb-8">
          <p className="font-semibold text-gray-900 mb-1">Что не входит в стандартный монтаж</p>
          <p className="text-gray-700 text-sm">Трасса сверх 3 м (+50 р./м), прокладка через балкон (+50 р.), штробление стен (по факту). Всё оговаривается до начала работ — сюрпризов нет.</p>
        </div>
        <div className="bg-red-50 border border-red-100 rounded-xl p-5 mb-8">
          <p className="font-semibold text-gray-900 mb-2">Кондиционер под ключ в Гомеле</p>
          <p className="text-gray-700 text-sm mb-3">Выберите модель на сайте или позвоните — подберём за 2 минуты. Выезд в день заказа.</p>
          <a href="tel:+375291050694" className="text-red-700 font-semibold hover:underline">+375 29 105-06-94</a>
        </div>
        <div className="bg-gray-50 rounded-xl p-5 mb-8">
          <p className="font-semibold text-gray-900 mb-3">Читайте также</p>
          <div className="space-y-2">
            <Link href="/articles/tsena-ustanovki-konditsionera" className="block text-red-700 hover:underline text-sm">→ Цены на установку кондиционера</Link>
            <Link href="/services" className="block text-red-700 hover:underline text-sm">→ Установка кондиционера в Гомеле</Link>
            <Link href="/articles/kak-vybrat-konditsioner" className="block text-red-700 hover:underline text-sm">→ Как выбрать кондиционер</Link>
          </div>
        </div>
        <Link href="/products" className="inline-block bg-red-700 text-white px-6 py-3 rounded-xl font-semibold hover:bg-red-800 transition-colors">Выбрать кондиционер под ключ →</Link>
      </main>
    </ArticleShell>
  );
}
