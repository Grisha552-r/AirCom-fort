import Link from 'next/link';
import ArticleShell from '../ArticleShell';

export default function KonditsionerDlyaKukhniPage() {
  const breadcrumbLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Главная', item: 'https://aircom-fort.by' },
      { '@type': 'ListItem', position: 2, name: 'Статьи', item: 'https://aircom-fort.by/articles' },
      { '@type': 'ListItem', position: 3, name: 'Кондиционер для кухни' },
    ],
  };
  return (
    <ArticleShell>
      <main className="max-w-3xl mx-auto px-4 py-10">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
        <nav className="text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:text-red-600">Главная</Link>{' / '}
          <Link href="/articles" className="hover:text-red-600">Статьи</Link>{' / '}
          <span>Кондиционер для кухни</span>
        </nav>
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Кондиционер для кухни — как выбрать и где установить</h1>
        <p className="text-gray-500 text-sm mb-8">Обновлено: май 2026 · Время чтения: 5 мин</p>
        <p className="text-gray-700 leading-relaxed mb-6">Кухня — особое помещение: жара от плиты, приготовление пищи и запахи. Кондиционер на кухне не только охлаждает воздух, но и значительно повышает комфорт во время готовки. Разбираем, как выбрать подходящую модель.</p>
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Особенности кухни при выборе кондиционера</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
          {[
            ['Добавьте 20–30% мощности', 'Кухня нагревается сильнее из-за плиты и духовки. К расчётной мощности по площади добавьте 20–30%.'],
            ['Фильтр для жира', 'Воздух на кухне содержит масляные пары. Выбирайте модели с лёгкими в очистке фильтрами.'],
            ['Место установки', 'Не вешайте кондиционер над плитой. Оптимально — над обеденным столом или на противоположной стене.'],
            ['Вытяжка + кондиционер', 'Кондиционер не заменяет вытяжку. Они решают разные задачи — используйте оба.'],
          ].map(([title, text]) => (
            <div key={title} className="bg-gray-50 rounded-xl p-4">
              <p className="font-semibold text-gray-900 mb-1">{title}</p>
              <p className="text-gray-700 text-sm">{text}</p>
            </div>
          ))}
        </div>
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Какая мощность нужна для кухни</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full text-sm border-collapse">
            <thead><tr className="bg-red-50">
              <th className="text-left p-3 border border-gray-200 font-semibold">Площадь кухни</th>
              <th className="text-left p-3 border border-gray-200 font-semibold">Базовая мощность</th>
              <th className="text-left p-3 border border-gray-200 font-semibold">С поправкой на нагрев</th>
            </tr></thead>
            <tbody>
              {[
                ['до 10 м²', '7 000 BTU', '9 000 BTU'],
                ['10–15 м²', '9 000 BTU', '12 000 BTU'],
                ['15–20 м²', '12 000 BTU', '14 000–18 000 BTU'],
              ].map(([a, b, r], i) => (
                <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                  <td className="p-3 border border-gray-200 font-medium">{a}</td>
                  <td className="p-3 border border-gray-200 text-gray-500">{b}</td>
                  <td className="p-3 border border-gray-200 text-red-700 font-semibold">{r}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Рекомендуемые модели для кухни</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full text-sm border-collapse">
            <thead><tr className="bg-red-50">
              <th className="text-left p-3 border border-gray-200 font-semibold">Модель</th>
              <th className="text-left p-3 border border-gray-200 font-semibold">Площадь кухни</th>
              <th className="text-left p-3 border border-gray-200 font-semibold">Цена с уст.</th>
            </tr></thead>
            <tbody>
              {[
                ['Ballu BSAGI-09HN8', 'до 10 м²', 'от 1 290 р.'],
                ['Haier AS12NS4ERA', 'до 15 м²', 'от 1 590 р.'],
                ['Electrolux EACS-I-12HAT', 'до 15 м²', 'от 1 690 р.'],
                ['LG S12EQ', 'до 15 м²', 'от 1 890 р.'],
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
          <p className="font-semibold text-gray-900 mb-1">Где лучше не вешать кондиционер на кухне</p>
          <p className="text-gray-700 text-sm">Не устанавливайте кондиционер над плитой — жир и пары забьют теплообменник. Не вешайте над раковиной — конденсат попадёт в воду. Идеально — над обеденной зоной или на стене напротив окна.</p>
        </div>
        <div className="bg-red-50 border border-red-100 rounded-xl p-5 mb-8">
          <p className="font-semibold text-gray-900 mb-2">Кондиционер для кухни в Гомеле</p>
          <p className="text-gray-700 text-sm mb-3">Подберём модель и место установки. Монтаж в день заказа.</p>
          <a href="tel:+375291050694" className="text-red-700 font-semibold hover:underline">+375 29 105-06-94</a>
        </div>
        <div className="bg-gray-50 rounded-xl p-5 mb-8">
          <p className="font-semibold text-gray-900 mb-3">Читайте также</p>
          <div className="space-y-2">
            <Link href="/articles/konditsioner-dlya-komnaty" className="block text-red-700 hover:underline text-sm">→ Кондиционер для комнаты — как выбрать</Link>
            <Link href="/articles/chistka-i-obsluzhivanie" className="block text-red-700 hover:underline text-sm">→ Чистка кондиционера — когда и как</Link>
            <Link href="/articles/kak-vybrat-konditsioner" className="block text-red-700 hover:underline text-sm">→ Полный гайд по выбору кондиционера</Link>
          </div>
        </div>
        <Link href="/products/split-systems" className="inline-block bg-red-700 text-white px-6 py-3 rounded-xl font-semibold hover:bg-red-800 transition-colors">Смотреть кондиционеры для кухни →</Link>
      </main>
    </ArticleShell>
  );
}
