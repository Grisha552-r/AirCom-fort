import Link from 'next/link';
import ArticleShell from '../ArticleShell';

function CodeTable({ rows }: { rows: [string, string, string][] }) {
  return (
    <div className="overflow-x-auto mb-8">
      <table className="w-full text-sm border-collapse">
        <thead>
          <tr className="bg-red-50">
            <th className="text-left p-3 border border-gray-200 font-semibold w-20">Код</th>
            <th className="text-left p-3 border border-gray-200 font-semibold">Что означает</th>
            <th className="text-left p-3 border border-gray-200 font-semibold">Что делать</th>
          </tr>
        </thead>
        <tbody>
          {rows.map(([code, meaning, action], i) => (
            <tr key={code} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
              <td className="p-3 border border-gray-200 font-bold text-red-700">{code}</td>
              <td className="p-3 border border-gray-200 text-gray-700">{meaning}</td>
              <td className="p-3 border border-gray-200 text-gray-600">{action}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function KodyOshibokPage() {
  const breadcrumbLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Главная', item: 'https://aircom-fort.by' },
      { '@type': 'ListItem', position: 2, name: 'Статьи', item: 'https://aircom-fort.by/articles' },
      { '@type': 'ListItem', position: 3, name: 'Коды ошибок кондиционеров' },
    ],
  };

  return (
    <ArticleShell>
      <main className="max-w-3xl mx-auto px-4 py-10">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
        <nav className="text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:text-red-600">Главная</Link>{' / '}
          <Link href="/articles" className="hover:text-red-600">Статьи</Link>{' / '}
          <span>Коды ошибок кондиционеров</span>
        </nav>
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Коды ошибок кондиционеров: расшифровка по брендам</h1>
        <p className="text-gray-500 text-sm mb-8">Обновлено: июнь 2026 · Время чтения: 7 мин</p>

        <p className="text-gray-700 leading-relaxed mb-6">
          Когда кондиционер перестаёт работать и на дисплее внутреннего блока (или индикаторами на корпусе) высвечивается код вроде <b>E1</b> или <b>H6</b> — это самодиагностика. Ниже расшифровка кодов для брендов, которые мы продаём и обслуживаем в Гомеле: Electrolux, Ballu, Haier, LG и Gree.
        </p>

        <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-8">
          <p className="font-semibold text-gray-900 mb-1 text-sm">Важно</p>
          <p className="text-gray-700 text-sm leading-relaxed">
            Один и тот же код у разных серий одного бренда иногда означает разное — производители периодически меняют логику кодов между поколениями платы. Таблицы ниже — это самые частые и устойчивые значения по данным сервисной документации. Для точного диагноза по вашей конкретной модели сверьтесь с инструкцией или вызовите мастера.
          </p>
        </div>

        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Electrolux</h2>
        <CodeTable rows={[
          ['E1', 'Сработала защита по высокому давлению в контуре', 'Грязный наружный блок, перекрыт обдув — почистить теплообменник'],
          ['E2', 'Сработала защита внутреннего блока от обмерзания испарителя', 'Чаще всего грязный фильтр или мало фреона — нужна диагностика'],
          ['P4', 'Переполнен дренажный поддон или обрыв его датчика', 'Проверить дренаж на засор, при необходимости — мастер'],
        ]} />

        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Ballu</h2>
        <CodeTable rows={[
          ['E1', 'Ошибка датчика температуры внутреннего воздуха', 'Требуется проверка/замена датчика мастером'],
          ['E2', 'Ошибка датчика температуры испарителя', 'Требуется проверка/замена датчика мастером'],
          ['E5', 'Защитный режим по ошибке наружного блока', 'Диагностика наружного блока специалистом'],
          ['E6', 'Ошибка двигателя вентилятора внутреннего блока', 'Проверка/замена двигателя вентилятора'],
          ['E8', 'Забит электростатический фильтр', 'Промыть или заменить фильтр'],
        ]} />

        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Haier</h2>
        <CodeTable rows={[
          ['E1', 'Повышено давление в компрессоре', 'Проверить чистоту наружного блока и обдув'],
          ['E2', 'Теплообменник внутреннего блока покрылся льдом', 'Грязный фильтр или неправильный режим — проверить'],
          ['E3', 'Недостаточное давление в компрессоре', 'Возможна нехватка фреона — нужна диагностика'],
          ['F1', 'Отключился термодатчик теплообменника внутреннего блока', 'Замена/проверка датчика мастером'],
        ]} />

        <h2 className="text-2xl font-semibold text-gray-900 mb-4">LG</h2>
        <CodeTable rows={[
          ['CH05', 'Потеряна связь между внутренним и наружным блоком', 'Проверить кабель связи, при сбое — выключить на 5 минут и включить заново'],
          ['CH06', 'Превышение тока компрессора', 'Проблема с питанием или пусковым реле — нужна диагностика'],
          ['CH10', 'Ошибка датчика температуры компрессора либо проблема с вентилятором внутреннего блока', 'Диагностика датчика и вентилятора мастером'],
        ]} />

        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Gree</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          У Gree самая длинная и формализованная таблица самодиагностики — вот самые частые коды по официальной сервисной документации:
        </p>
        <CodeTable rows={[
          ['E1', 'Защита холодильного контура по высокому давлению', 'Грязный теплообменник, избыток хладагента — диагностика'],
          ['E2', 'Защита от замерзания испарителя', 'Грязный фильтр или слабый поток воздуха — почистить фильтр'],
          ['E3', 'Низкое давление в контуре либо утечка хладагента', 'Проверка герметичности системы мастером'],
          ['E4', 'Слишком высокая температура нагнетания компрессора', 'Перегрев устройства — диагностика'],
          ['E5', 'Защита от перегрузки по току', 'Нестабильное питание или грязный теплообменник'],
          ['E6', 'Ошибка связи между блоками', 'Повреждён или ослаблен кабель связи'],
          ['H5', 'Защита силового модуля (IPM)', 'Требуется диагностика платы управления'],
          ['H6', 'Неисправность двигателя вентилятора внутреннего блока', 'Проверка/замена вентилятора'],
        ]} />

        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Mitsudai и King Home</h2>
        <p className="text-gray-700 leading-relaxed mb-8">
          Для этих брендов производители не публикуют единую таблицу кодов в открытом доступе — расшифровка может отличаться даже между сериями одной марки. Большинство бюджетных инверторных кондиционеров (включая Mitsudai и King Home) использует ту же платформу управления, что и крупные бренды, поэтому коды вида <b>E1–E6, F1–F5, H5, H6</b> обычно сигнализируют о похожих неисправностях: высокое/низкое давление, обмерзание испарителя, ошибка связи или датчика. Чтобы не гадать — позвоните нам и назовите код с дисплея, мы свяжемся с сервисной базой по вашей модели.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Когда можно попробовать самому, а когда — звонить мастеру</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
          <div className="bg-emerald-50 border border-emerald-100 rounded-xl p-4">
            <p className="font-semibold text-gray-900 mb-1">Можно попробовать самому</p>
            <p className="text-gray-700 text-sm">Промыть/почистить фильтр внутреннего блока, проверить, не перекрыт ли обдув наружного блока, выключить устройство на 5–10 минут и включить заново.</p>
          </div>
          <div className="bg-red-50 border border-red-100 rounded-xl p-4">
            <p className="font-semibold text-gray-900 mb-1">Нужен мастер</p>
            <p className="text-gray-700 text-sm">Коды про давление в контуре, утечку хладагента, ошибки датчиков и платы управления — без манометра и спецоборудования диагноз поставить нельзя.</p>
          </div>
        </div>

        <div className="bg-red-50 border border-red-100 rounded-xl p-5 mb-8">
          <p className="font-semibold text-gray-900 mb-2">Кондиционер показывает код ошибки?</p>
          <p className="text-gray-700 text-sm mb-3">Позвоните и назовите код с дисплея — подскажем, что это значит, и при необходимости пришлём мастера для диагностики.</p>
          <a href="tel:+375291050694" className="text-red-700 font-semibold hover:underline">+375 29 105-06-94</a>
        </div>

        <div className="bg-gray-50 rounded-xl p-5 mb-8">
          <p className="font-semibold text-gray-900 mb-3">Читайте также</p>
          <div className="space-y-2">
            <Link href="/articles/remont-konditsionera-gomel" className="block text-red-700 hover:underline text-sm">→ Ремонт кондиционера в Гомеле</Link>
            <Link href="/articles/konditsioner-ne-okhlazhdaet" className="block text-red-700 hover:underline text-sm">→ Кондиционер работает, но не охлаждает: 7 причин</Link>
            <Link href="/articles/chistka-i-obsluzhivanie" className="block text-red-700 hover:underline text-sm">→ Чистка и обслуживание кондиционера</Link>
          </div>
        </div>

        <Link href="/services" className="inline-block bg-red-700 text-white px-6 py-3 rounded-xl font-semibold hover:bg-red-800 transition-colors">Диагностика и ремонт →</Link>
      </main>
    </ArticleShell>
  );
}
