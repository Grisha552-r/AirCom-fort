'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

const WORKS = [
  {
    img: 'https://climate-montazh.by/wp-content/uploads/2022/07/klimat-montazh-kondi-57.webp',
    title: 'Установка в спальне',
    desc: 'Electrolux 9000 BTU, ул. Советская',
  },
  {
    img: 'https://climate-montazh.by/wp-content/uploads/2022/07/klimat-montazh-kondi-49.webp',
    title: 'Монтаж в гостиной',
    desc: 'Ballu 12000 BTU, пр. Октября',
  },
  {
    img: 'https://climate-montazh.by/wp-content/uploads/2022/07/klimat-montazh-kondi-55.webp',
    title: 'Установка на кухне',
    desc: 'Haier 7000 BTU, ул. Победы',
  },
  {
    img: 'https://climate-montazh.by/wp-content/uploads/2022/07/klimat-montazh-kondi-52.webp',
    title: 'Офисный монтаж',
    desc: 'LG 18000 BTU, ул. Ленина',
  },
  {
    img: 'https://climate-montazh.by/wp-content/uploads/2022/07/klimat-montazh-kondi-47.webp',
    title: 'Монтаж в детской',
    desc: 'Mitsudai 9000 BTU, Новобелицкий р-н',
  },
  {
    img: 'https://climate-montazh.by/wp-content/uploads/2022/07/klimat-montazh-kondi-58.webp',
    title: 'Установка в квартире',
    desc: 'Electrolux 12000 BTU, ул. Барыкина',
  },
];

export default function WorksGallery() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-1">Наши работы</h2>
            <p className="text-muted-foreground text-sm md:text-base">Примеры монтажа кондиционеров в Гомеле</p>
          </div>
          <Link href="/services" className="hidden sm:flex items-center gap-1.5 text-crimson-700 text-sm font-semibold hover:text-crimson-800 transition-colors">
            Заказать установку
            <Icon name="ArrowRightIcon" size={14} />
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {WORKS.map((w, i) => (
            <div
              key={i}
              className="relative rounded-2xl overflow-hidden aspect-[4/3] cursor-pointer group"
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={w.img}
                alt={w.title}
                loading="lazy"
                className={`w-full h-full object-cover transition-transform duration-500 ${hovered === i ? 'scale-110' : 'scale-100'}`}
              />
              <div className={`absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent transition-opacity duration-300 ${hovered === i ? 'opacity-100' : 'opacity-60'}`} />
              <div className="absolute bottom-0 left-0 right-0 p-3 md:p-4">
                <p className="text-white font-semibold text-sm md:text-base leading-tight">{w.title}</p>
                <p className="text-white/75 text-xs mt-0.5">{w.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-6 sm:hidden">
          <Link href="/services" className="inline-flex items-center gap-1.5 text-crimson-700 text-sm font-semibold">
            Заказать установку
            <Icon name="ArrowRightIcon" size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
}
