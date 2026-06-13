'use client';
import React, { useEffect, useRef, useState } from 'react';
import Icon from '@/components/ui/AppIcon';

const STATS = [
  { value: 500, suffix: '+', label: 'установок', sub: 'в Гомеле и области', icon: 'WrenchScrewdriverIcon' as const, color: 'text-crimson-400' },
  { value: 4.9, suffix: '★', label: 'средняя оценка', sub: 'более 200 отзывов', icon: 'StarIcon' as const, color: 'text-amber-400' },
  { value: 7, suffix: '+', label: 'лет на рынке', sub: 'работаем с 2019 года', icon: 'CalendarIcon' as const, color: 'text-sky-400' },
  { value: 300, suffix: '+', label: 'моделей в наличии', sub: 'Electrolux, Ballu, LG…', icon: 'CubeIcon' as const, color: 'text-emerald-400' },
];

function useCountUp(target: number, duration = 1500, started = false) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!started) return;
    const isFloat = target % 1 !== 0;
    const steps = 40;
    const step = target / steps;
    const interval = duration / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += step;
      if (current >= target) {
        setValue(target);
        clearInterval(timer);
      } else {
        setValue(isFloat ? Math.round(current * 10) / 10 : Math.floor(current));
      }
    }, interval);
    return () => clearInterval(timer);
  }, [target, duration, started]);
  return value;
}

function StatCard({ stat, started }: { stat: typeof STATS[number]; started: boolean }) {
  const count = useCountUp(stat.value, 1400, started);
  const display = stat.value % 1 !== 0 ? count.toFixed(1) : count.toLocaleString('ru-RU');

  return (
    <div className="flex flex-col items-center text-center py-8 px-4 relative group">
      <div className={`w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center mb-4 group-hover:bg-white/10 transition-colors duration-300`}>
        <Icon name={stat.icon} size={24} className={stat.color} />
      </div>
      <div className="flex items-end gap-1 mb-1">
        <span className="text-4xl md:text-5xl font-black text-white leading-none tabular-nums">{display}</span>
        <span className={`text-2xl md:text-3xl font-black leading-none mb-0.5 ${stat.color}`}>{stat.suffix}</span>
      </div>
      <p className="text-white font-semibold text-sm md:text-base leading-tight">{stat.label}</p>
      <p className="text-zinc-400 text-xs mt-1">{stat.sub}</p>
    </div>
  );
}

export default function StatsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setStarted(true); observer.disconnect(); } },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="bg-zinc-950 border-y border-zinc-800">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-y lg:divide-y-0 divide-zinc-800">
          {STATS.map(stat => (
            <StatCard key={stat.label} stat={stat} started={started} />
          ))}
        </div>
      </div>
    </section>
  );
}
