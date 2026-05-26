import Link from 'next/link';
import ArticleShell from '../ArticleShell';

export default function GostinayaPage() {
  const breadcrumbLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Главная', item: 'https://aircom-fort.by' },
      { '@type': 'ListItem', position: 2, name: 'Статьи', item: 'https://aircom-fort.by/articles' },
      { '@type': 'ListItem', position: 3, name: 'Кондиционер для гостиной' },
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
        <span>Кондиционер для гостиной</span>
      </nav>

      <h1 className="text-3xl font-bold text-gray-900 mb-4">
        Кондиционер для гостиной — какой выбрать в 2026 году
      </h1>
      <p className="text-gray-500 text-sm mb-8">Обновлено: май 2026 · Время чтения: 5 мин</p>

      <p className="text-gray-700 leading-relaxed mb-6">
        Гостиная — самая большая комната в квартире. Здесь нужен кондиционер с достаточной мощностью,
        тихой работой и стильным дизайном. Разбираем, как выбрать подходящую модель и сколько стоит
        установка в Гомеле.
      </p>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Какая мощность нужна для гостиной</h2>
      <div className="overflow-x-auto mb-8">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-red-50">
              <th className="text-left p-3 border border-gray-200 font-semibold">Площадь гостиной</th>
              <th className="text-left p-3 border border-gray-200 font-semibold">Мощность</th>
              <th className="text-left p-3 border border-gray-200 font-semibold">Модели</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['до 25 кв.м', '2,5 кВт (9 BTU)', 'Electrolux EACS-09, Ballu BSW-09'],
              ['25–35 кв.м', '3,5 кВт (12 BTU)', 'Electrolux EACS-12, Ballu BSW-12, Haier AS12NS4ERA'],
              ['35–45 кв.м', '4,0–5,0 кВт (14–18 BTU)', 'Electrolux EACS-14, Haier AS18NS4ERA'],
              ['45–60 кв.м', '5,5–7,0 кВт (18–24 BTU)', 'Haier AS24NS4ERA, LG S24EQ'],
            ].map(([area, power, models], i) => (
              <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                <td className="p-3 border border-gray-200 font-medium">{area}</td>
                <td className="p-3 border border-gray-200 text-red-700 font-semibold">{power}</td>
                <td className="p-3 border border-gray-200 text-gray-600">{models}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-5 mb-8">
        <p className="font-semibold text-gray-900 mb-1">Важно: угловые комнаты и большие окна</p>
        <p className="text-gray-700 text-sm">
          Если гостиная угловая, с панорамными окнами или выходит на юг — добавьте 20–30% к расчётной
          мощности. Лучше взять кондиционер чуть мощнее, чем постоянно работающий на максимуме.
        </p>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Топ-6 кондиционеров для гостиной с ценами</h2>
      <div className="overflow-x-auto mb-8">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-red-50">
              <th className="text-left p-3 border border-gray-200 font-semibold">Модель</th>
              <th className="text-left p-3 border border-gray-200 font-semibold">Площадь</th>
              <th className="text-left p-3 border border-gray-200 font-semibold">Шум</th>
              <th className="text-left p-3 border border-gray-200 font-semibold">Цена с уст.</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Electrolux EACS-12HA', 'до 35 кв.м', '23 дБ', 'от 1 190 р.'],
              ['Electrolux EACS-I 12HAT', 'до 35 кв.м', '21 дБ', 'от 1 490 р.'],
              ['Ballu BSW-12HN1 (On/Off)', 'до 35 кв.м', '24 дБ', 'от 990 р.'],
              ['Ballu BSAGI-12HN1 (Инверт.)', 'до 35 кв.м', '22 дБ', 'от 1 190 р.'],
              ['Haier AS12NS4ERA-W', 'до 35 кв.м', '22 дБ', 'от 1 290 р.'],
              ['LG S12EQ (Dual Inverter)', 'до 35 кв.м', '21 дБ', 'от 1 590 р.'],
            ].map(([model, area, noise, price], i) => (
              <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                <td className="p-3 border border-gray-200 font-medium">{model}</td>
                <td className="p-3 border border-gray-200 text-gray-600">{area}</td>
                <td className="p-3 border border-gray-200 text-gray-600">{noise}</td>
                <td className="p-3 border border-gray-200 text-red-700 font-semibold">{price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">На что обратить внимание при выборе</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
        {[
          ['Уровень шума', 'В гостиной оптимально до 23 дБ — это тише шёпота. Инверторные модели тише on/off на 2–3 дБ.'],
          ['Дизайн', 'Белый или серебристый корпус подходит к большинству интерьеров. LG ArtCool предлагает зеркальное исполнение.'],
          ['Инвертор', 'Для гостиной, где кондиционер работает часто, инвертор окупится за 2–3 сезона за счёт экономии электроэнергии.'],
          ['Wi-Fi управление', 'Удобно включать кондиционер с телефона за 30 минут до прихода домой. Есть у Haier, LG, Electrolux.'],
        ].map(([title, text]) => (
          <div key={title} className="bg-gray-50 rounded-xl p-4">
            <p className="font-semibold text-gray-900 mb-1">{title}</p>
            <p className="text-gray-700 text-sm">{text}</p>
          </div>
        ))}
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Где лучше поставить кондиционер в гостиной</h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Внутренний блок вешается на стену над диваном или зоной отдыха — поток воздуха направляется
        вдоль потолка и равномерно охлаждает всю комнату. <strong>Не направляйте</strong> воздух
        прямо на людей — вызывает простуду.
      </p>
      <p className="text-gray-700 leading-relaxed mb-8">
        Внешний блок — на балконе или фасаде. Важно не перекрывать вентиляционные решётки
        и оставлять не менее 30 см свободного пространства вокруг блока.
      </p>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Стоимость установки в Гомеле</h2>
      <p className="text-gray-700 leading-relaxed mb-6">
        Установка кондиционера в гостиной — от{' '}
        <Link href="/articles/tsena-ustanovki-konditsionera" className="text-red-700 hover:underline">
          290 р. (стандартный монтаж)
        </Link>
        . Полный комплект под ключ — кондиционер + монтаж + материалы — от 1 190 р.
        Работаем ежедневно с 9:00 до 18:00. Выезд в день обращения.
      </p>

      <div className="bg-red-50 border border-red-100 rounded-xl p-5 mb-8">
        <p className="font-semibold text-gray-900 mb-2">Помогаем выбрать</p>
        <p className="text-gray-700 text-sm mb-3">
          Скажите площадь гостиной и бюджет — подберём оптимальную модель и рассчитаем стоимость
          установки. Звоните:
        </p>
        <a href="tel:+375291050694" className="text-red-700 font-semibold hover:underline">
          +375 29 105-06-94
        </a>
      </div>

      <div className="bg-gray-50 rounded-xl p-5 mb-8">
        <p className="font-semibold text-gray-900 mb-3">Читайте также</p>
        <div className="space-y-2">
          <Link href="/articles/kak-vybrat-konditsioner" className="block text-red-700 hover:underline text-sm">
            → Как выбрать кондиционер для квартиры — полный гайд
          </Link>
          <Link href="/articles/invertor-konditsioner-gomel" className="block text-red-700 hover:underline text-sm">
            → Инверторный кондиционер в Гомеле — стоит ли переплачивать?
          </Link>
          <Link href="/articles/tikhiy-konditsioner-dlya-spalni" className="block text-red-700 hover:underline text-sm">
            → Тихий кондиционер для спальни — рейтинг 2026
          </Link>
          <Link href="/articles/konditsioner-dlya-detskoy" className="block text-red-700 hover:underline text-sm">
            → Кондиционер для детской комнаты
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
