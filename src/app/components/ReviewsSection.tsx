'use client';
import React, { useRef } from 'react';
import Icon from '@/components/ui/AppIcon';

const REVIEWS = [
  {
    name: 'Андрей К.',
    date: 'март 2026',
    dateIso: '2026-03-15',
    rating: 5,
    text: 'Заказали Electrolux на гостиную 25 м². Приехали в оговорённое время, сделали всё аккуратно — трасса спрятана в кабель-канал, дырку в стене зашпаклевали. Кондиционер работает тихо, жена довольна. Рекомендую.',
    product: 'Electrolux EACS-07',
  },
  {
    name: 'Марина Л.',
    date: 'апрель 2026',
    dateIso: '2026-04-10',
    rating: 5,
    text: 'Долго выбирала между Ballu и Haier. Менеджер объяснил разницу по-человечески, без давления. Взяла Ballu инвертор. Монтаж сделали за 3 часа, всё чисто. Цена за установку фиксированная — никаких сюрпризов.',
    product: 'Ballu BSAGI-09HN8',
  },
  {
    name: 'Сергей В.',
    date: 'май 2026',
    dateIso: '2026-05-03',
    rating: 5,
    text: 'Брали два кондиционера — в спальню и детскую. Сделали скидку за комплект. Мастера работали слаженно, управились за полдня. Наружные блоки повесили на кронштейны так, что с улицы почти не видно.',
    product: 'Haier AS09NS4ERA',
  },
  {
    name: 'Ольга Р.',
    date: 'апрель 2026',
    dateIso: '2026-04-22',
    rating: 5,
    text: 'Покупала мобильный кондиционер — квартира съёмная, сверлить нельзя. Привезли быстро, помогли разобраться с подключением по телефону. Летом спасает, в следующем году, наверное, переедем и возьмём сплит здесь же.',
    product: 'Мобильный кондиционер',
  },
  {
    name: 'Дмитрий Ш.',
    date: 'май 2026',
    dateIso: '2026-05-14',
    rating: 5,
    text: 'Установили LG с Wi-Fi. Теперь включаю кондиционер с телефона по дороге домой — прихожу в прохладную квартиру. Монтаж профессиональный, мастер объяснил как пользоваться приложением. Всё работает отлично.',
    product: 'LG S09EQ',
  },
  {
    name: 'Наталья М.',
    date: 'март 2026',
    dateIso: '2026-03-28',
    rating: 4,
    text: 'Заказали обслуживание старого кондиционера другой фирмы. Почистили, заправили фреон — стал работать как новый. Цена разумная, мастер пунктуальный. Теперь будем обслуживаться здесь каждый год.',
    product: 'Обслуживание',
  },
  {
    name: 'Игорь Т.',
    date: 'апрель 2026',
    dateIso: '2026-04-05',
    rating: 5,
    text: 'Переехали в новую квартиру и сразу обратились в AirComfort. Посоветовали Mitsudai — хорошее соотношение цены и качества. Прошёл сезон, никаких нареканий. Работает тихо, охлаждает быстро.',
    product: 'Mitsudai SENTO',
  },
  {
    name: 'Екатерина Б.',
    date: 'май 2026',
    dateIso: '2026-05-19',
    rating: 5,
    text: 'Ставили кондиционер через балкон — трасса длинная, 7 метров. Думала, будет проблема, но мастера справились без вопросов. Смонтировали красиво, все стыки герметичны. Очень довольна результатом.',
    product: 'Electrolux EACS-09',
  },
  {
    name: 'Роман П.',
    date: 'февраль 2026',
    dateIso: '2026-02-18',
    rating: 5,
    text: 'Брал кондиционер для работы в режиме обогрева зимой. Менеджер сразу предупредил, какая модель выдержит мороз, а какая нет. Взял с зимним комплектом — работает даже при -15. Грамотные специалисты.',
    product: 'Ballu Arctic',
  },
];


function Stars({ n }: { n: number }) {
  return (
    <div className="flex gap-0.5">
      {[1,2,3,4,5].map(i => (
        <svg key={i} className={`w-4 h-4 ${i <= n ? 'text-amber-400' : 'text-zinc-200'}`} fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
        </svg>
      ))}
    </div>
  );
}

export default function ReviewsSection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: 'left' | 'right') => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: dir === 'right' ? 320 : -320, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-12 bg-zinc-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">Отзывы покупателей</h2>
            <p className="text-muted-foreground text-sm md:text-base mt-1">Более 200 установок в Гомеле и области</p>
          </div>
          <div className="flex items-center gap-2">
            <button onClick={() => scroll('left')} className="w-9 h-9 rounded-full border border-border flex items-center justify-center hover:border-crimson-400 hover:bg-crimson-50 transition-colors">
              <Icon name="ChevronLeftIcon" size={16} />
            </button>
            <button onClick={() => scroll('right')} className="w-9 h-9 rounded-full border border-border flex items-center justify-center hover:border-crimson-400 hover:bg-crimson-50 transition-colors">
              <Icon name="ChevronRightIcon" size={16} />
            </button>
          </div>
        </div>

        <div ref={scrollRef} className="flex gap-4 overflow-x-auto scrollbar-hide pb-2 scroll-smooth snap-x snap-mandatory">
          {REVIEWS.map((r, i) => (
            <div key={i} className="shrink-0 w-[85vw] sm:w-80 md:w-96 snap-start bg-white rounded-2xl border border-border p-5 flex flex-col gap-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-full bg-crimson-100 flex items-center justify-center text-crimson-700 font-bold text-sm shrink-0">
                    {r.name[0]}
                  </div>
                  <div>
                    <p className="font-semibold text-sm text-foreground leading-none">{r.name}</p>
                    <p className="text-xs text-muted-foreground mt-0.5">{r.date}</p>
                  </div>
                </div>
                <Stars n={r.rating} />
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed flex-1">{r.text}</p>
              <span className="text-xs text-crimson-600 font-medium bg-crimson-50 px-2.5 py-1 rounded-full self-start">{r.product}</span>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <p className="text-sm text-muted-foreground">Средняя оценка <span className="font-bold text-foreground">4.9 / 5</span> на основе отзывов покупателей</p>
        </div>
      </div>
    </section>
  );
}
