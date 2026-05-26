import Link from 'next/link';
import ArticleShell from '../ArticleShell';

export default function ZapravkaPage() {
  const breadcrumbLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Главная', item: 'https://aircom-fort.by' },
      { '@type': 'ListItem', position: 2, name: 'Статьи', item: 'https://aircom-fort.by/articles' },
      { '@type': 'ListItem', position: 3, name: 'Заправка кондиционера в Гомеле' },
    ],
  };

  return (
    <ArticleShell>
    <main className="max-w-3xl mx-auto px-4 py-10">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />

      <nav className="text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:text-red-600">Главная</Link>
        {' / '}
        <Link href="/articles" className="hover:text-red-600">Статьи</Link>
        {' / '}
        <span>Заправка кондиционера в Гомеле</span>
      </nav>

      <h1 className="text-3xl font-bold text-gray-900 mb-4">
        Заправка кондиционера в Гомеле — цены 2026
      </h1>
      <p className="text-gray-500 text-sm mb-8">Обновлено: май 2026 · Время чтения: 4 мин</p>

      <p className="text-gray-700 leading-relaxed mb-6">
        Если кондиционер плохо охлаждает, долго работает прежде чем охладить комнату или покрывается
        льдом — скорее всего, нужна дозаправка фреоном. Это одна из самых частых причин обращений
        летом. Разберём, сколько это стоит в Гомеле в 2026 году и когда заправка действительно нужна.
      </p>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Признаки того, что нужна заправка</h2>
      <ul className="list-disc list-inside text-gray-700 space-y-2 mb-8">
        <li>Кондиционер работает, но воздух тёплый или чуть прохладнее уличного</li>
        <li>На внутреннем блоке или трубке появляется лёд или иней</li>
        <li>Слышен необычный звук — шипение или булькание</li>
        <li>Кондиционер работает заметно дольше, чем раньше, чтобы охладить комнату</li>
        <li>На улице жарко, а в комнате не становится холоднее 25°C</li>
      </ul>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Цены на заправку в Гомеле в 2026 году</h2>
      <div className="overflow-x-auto mb-8">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-red-50">
              <th className="text-left p-3 border border-gray-200 font-semibold">Тип фреона</th>
              <th className="text-left p-3 border border-gray-200 font-semibold">Цена</th>
              <th className="text-left p-3 border border-gray-200 font-semibold">Применение</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['R32', 'от 70 р.', 'Современные инверторные модели (Electrolux, LG, Haier)'],
              ['R410A', 'от 60 р.', 'Большинство сплит-систем 2015–2022 г.'],
              ['R22', 'от 80 р.', 'Старые модели до 2010 г.'],
            ].map(([type, price, desc], i) => (
              <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                <td className="p-3 border border-gray-200 font-medium">{type}</td>
                <td className="p-3 border border-gray-200 text-red-700 font-semibold">{price}</td>
                <td className="p-3 border border-gray-200 text-gray-600">{desc}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="bg-red-50 border border-red-100 rounded-xl p-5 mb-8">
        <p className="font-semibold text-gray-900 mb-1">Диагностика бесплатно</p>
        <p className="text-gray-700 text-sm">
          При заправке мастер бесплатно проверяет давление в системе, состояние компрессора
          и наличие утечки. Если утечка найдена — сообщим заранее, до начала работ.
        </p>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Как часто нужна заправка?</h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Исправный кондиционер <strong>не теряет фреон</strong> — он работает в замкнутом контуре.
        Если заправка нужна каждый год, значит есть утечка, и её нужно устранить. Найти и заварить
        место утечки стоит от 50 р., но это сэкономит деньги в долгосрочной перспективе.
      </p>
      <p className="text-gray-700 leading-relaxed mb-8">
        При первичной установке нового кондиционера и правильном монтаже заправка не нужна — фреон
        уже находится в системе. Дозаправка может понадобиться через 5–7 лет при нормальной эксплуатации.
      </p>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Как вызвать мастера</h2>
      <p className="text-gray-700 leading-relaxed mb-6">
        Мастер приедет в удобное для вас время — в тот же день или на следующий.
        Работаем в Гомеле и Гомельской области. Звоните:{' '}
        <a href="tel:+375291050694" className="text-red-700 font-semibold hover:underline">
          +375 29 105-06-94
        </a>
      </p>

      <div className="bg-gray-50 rounded-xl p-5 mb-8">
        <p className="font-semibold text-gray-900 mb-3">Читайте также</p>
        <div className="space-y-2">
          <Link href="/articles/chistka-i-obsluzhivanie" className="block text-red-700 hover:underline text-sm">
            → Чистка и обслуживание кондиционера в Гомеле
          </Link>
          <Link href="/articles/konditsioner-ne-okhlazhdaet" className="block text-red-700 hover:underline text-sm">
            → Кондиционер не охлаждает — что делать?
          </Link>
          <Link href="/articles/remont-konditsionera-gomel" className="block text-red-700 hover:underline text-sm">
            → Ремонт кондиционера в Гомеле — цены и сроки
          </Link>
        </div>
      </div>

      <Link
        href="/products"
        className="inline-block bg-red-700 text-white px-6 py-3 rounded-xl font-semibold hover:bg-red-800 transition-colors"
      >
        Посмотреть кондиционеры в наличии →
      </Link>
    </main>
    </ArticleShell>
  );
}
