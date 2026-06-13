'use client';
import React, { useRef } from 'react';
import Icon from '@/components/ui/AppIcon';

const REVIEWS = [
  {
    name: 'Андрей К.',
    date: 'март 2026',
    dateIso: '2026-03-15',
    rating: 5,
    text: 'Заказали Electrolux на гостиную 25 м². Приехали в оговорённое время, сделали всё аккуратно — трасса спрятана в кабель-канал, дырку в стене зашпаклевали. Кондиционер работает тихо, жена довольна.',
    product: 'Electrolux EACS-07',
    avatar: 'А',
  },
  {
    name: 'Марина Л.',
    date: 'апрель 2026',
    dateIso: '2026-04-10',
    rating: 5,
    text: 'Долго выбирала между Ballu и Haier. Менеджер объяснил разницу по-человечески, без давления. Взяла Ballu инвертор. Монтаж сделали за 3 часа, всё чисто. Цена фиксированная — никаких сюрпризов.',
    product: 'Ballu BSAGI-09HN8',
    avatar: 'М',
  },
  {
    name: 'Сергей В.',
    date: 'май 2026',
    dateIso: '2026-05-03',
    rating: 5,
    text: 'Брали два кондиционера — в спальню и детскую. Сделали скидку за комплект. Мастера работали слаженно, управились за полдня. Наружные блоки повесили на кронштейны так, что с улицы почти не видно.',
    product: 'Haier AS09NS4ERA',
    avatar: 'С',
  },
  {
    name: 'Ольга Р.',
    date: 'апрель 2026',
    dateIso: '2026-04-22',
    rating: 5,
    text: 'Покупала мобильный кондиционер — квартира съёмная, сверлить нельзя. Привезли быстро, помогли разобраться с подключением по телефону. Летом спасает, в следующем году возьмём сплит здесь же.',
    product: 'Мобильный кондиционер',
    avatar: 'О',
  },
  {
    name: 'Дмитрий Ш.',
    date: 'май 2026',
    dateIso: '2026-05-14',
    rating: 5,
    text: 'Установили LG с Wi-Fi. Теперь включаю кондиционер с телефона по дороге домой — прихожу в прохладную квартиру. Монтаж профессиональный, мастер объяснил как пользоваться приложением.',
    product: 'LG S09EQ',
    avatar: 'Д',
  },
  {
    name: 'Наталья М.',
    date: 'март 2026',
    dateIso: '2026-03-28',
    rating: 4,
    text: 'Заказали обслуживание старого кондиционера другой фирмы. Почистили, заправили фреон — стал работать как новый. Цена разумная, мастер пунктуальный. Теперь будем обслуживаться здесь каждый год.',
    product: 'Обслуживание',
    avatar: 'Н',
  },
  {
    name: 'Игорь Т.',
    date: 'апрель 2026',
    dateIso: '2026-04-05',
    rating: 5,
    text: 'Переехали в новую квартиру и сразу обратились в AirComfort. Посоветовали Mitsudai — хорошее соотношение цены и качества. Прошёл сезон, никаких нареканий.',
    product: 'Mitsudai SENTO',
    avatar: 'И',
  },
  {
    name: 'Екатерина Б.',
    date: 'май 2026',
    dateIso: '2026-05-19',
    rating: 5,
    text: 'Ставили кондиционер через балкон — трасса длинная, 7 метров. Думала, будет проблема, но мастера справились. Смонтировали красиво, все стыки герметичны.',
    product: 'Electrolux EACS-09',
    avatar: 'Е',
  },
];

function Stars({ n }: { n: number }) {
  return (
    <div className="flex gap-0.5">
      {[1,2,3,4,5].map(i => (
        <svg key={i} className={`w-3.5 h-3.5 ${i <= n ? 'text-amber-400' : 'text-zinc-200'}`} fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
        </svg>
      ))}
    </div>
  );
}

export default function ReviewsSection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: 'left' | 'right') => {
    scrollRef.current?.scrollBy({ left: dir === 'right' ? 320 : -320, behavior: 'smooth' });
  };

  return (
    <section className="py-14 bg-white">
      <div className="max-w-7xl mx-auto px-4">

        {/* Header row */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">
          <div>
            <p className="text-xs font-bold text-crimson-600 uppercase tracking-widest mb-2">Что говорят клиенты</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Отзывы покупателей</h2>
          </div>

          {/* Rating summary + scroll controls */}
          <div className="flex items-center gap-4">
            <div className="hidden sm:flex items-center gap-3 bg-zinc-50 border border-border rounded-xl px-4 py-2.5">
              <div>
                <p className="text-2xl font-black text-foreground leading-none">4.9</p>
                <Stars n={5} />
              </div>
              <div className="w-px h-8 bg-border" />
              <div>
                <p className="text-xs font-semibold text-foreground">200+ отзывов</p>
                <p className="text-xs text-muted-foreground">покупателей</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => scroll('left')}
                aria-label="Прокрутить влево"
                className="w-9 h-9 rounded-full border border-border flex items-center justify-center hover:border-crimson-400 hover:bg-crimson-50 transition-all duration-200 cursor-pointer"
              >
                <Icon name="ChevronLeftIcon" size={16} />
              </button>
              <button
                onClick={() => scroll('right')}
                aria-label="Прокрутить вправо"
                className="w-9 h-9 rounded-full border border-border flex items-center justify-center hover:border-crimson-400 hover:bg-crimson-50 transition-all duration-200 cursor-pointer"
              >
                <Icon name="ChevronRightIcon" size={16} />
              </button>
            </div>
          </div>
        </div>

        {/* Cards */}
        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto scrollbar-hide pb-2 scroll-smooth snap-x snap-mandatory"
        >
          {REVIEWS.map((r, i) => (
            <div
              key={i}
              className="shrink-0 w-[85vw] sm:w-80 snap-start bg-white rounded-2xl border border-border hover:border-zinc-300 hover:shadow-card-hover p-5 flex flex-col gap-3 transition-all duration-300"
            >
              {/* Top row */}
              <div className="flex items-start justify-between gap-2">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-crimson-gradient flex items-center justify-center text-white font-bold text-sm shrink-0 shadow-sm">
                    {r.avatar}
                  </div>
                  <div>
                    <p className="font-semibold text-sm text-foreground leading-none">{r.name}</p>
                    <p className="text-xs text-muted-foreground mt-0.5">{r.date}</p>
                  </div>
                </div>
                <Stars n={r.rating} />
              </div>

              {/* Quote icon */}
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-crimson-100 shrink-0">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
              </svg>

              <p className="text-sm text-muted-foreground leading-relaxed flex-1 -mt-2">{r.text}</p>

              <span className="text-xs text-crimson-700 font-medium bg-crimson-50 border border-crimson-100 px-2.5 py-1 rounded-full self-start">
                {r.product}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
