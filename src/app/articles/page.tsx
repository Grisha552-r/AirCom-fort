'use client';
import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CartDrawer from '@/components/CartDrawer';
import Icon from '@/components/ui/AppIcon';
import Link from 'next/link';

const ARTICLES = [
  {
    slug: 'tsena-ustanovki-konditsionera',
    title: 'Сколько стоит установка кондиционера в Гомеле в 2026 году',
    excerpt: 'Актуальные цены на монтаж: от 400 р. за комнату до 30 м². Что входит в стоимость, за что попросят доплату и как не переплатить — объясняем по шагам.',
    image: 'https://klimresh.by/imager/resized/news-single/450x275-Qpvs94OINi3S7YsdbyuQaF1TR2bkkK-metaa29uZGljaW9uZXItcG9kZ290b3ZrYS1rLXppbWUucG5n-.png',
    readTime: '5 мин',
    date: '2026',
    tag: 'Установка',
  },
  {
    slug: 'konditsioner-dlya-komnaty',
    title: 'Какой кондиционер выбрать для комнаты в 2026 году: советы мастеров',
    excerpt: 'Как рассчитать мощность, выбрать между инвертором и on/off, и какой бренд лучше. Простые советы без лишних слов.',
    image: 'https://static.tildacdn.com/tild6362-6135-4234-a533-653563626231/invertonoff.jpg',
    readTime: '6 мин',
    date: '2026',
    tag: 'Выбор техники',
  },
  {
    slug: 'konditsioner-ne-okhlazhdaet',
    title: 'Кондиционер работает, но не охлаждает: 7 причин и что делать',
    excerpt: 'Грязный фильтр, обмерзание, нехватка фреона — разбираем по порядку. Что можно сделать самому за 10 минут, а когда нужно звонить мастеру.',
    image: 'https://klimresh.by/imager/resized/news-single/450x275-uv6gS6xW4ORb6pZ74l3tWLwAsPqY2z-metadWhvZC1rb25kaWNpb25lciAoMSkucG5n-.png',
    readTime: '5 мин',
    date: '2026',
    tag: 'Обслуживание',
  },
  {
    slug: 'kak-vybrat-konditsioner',
    title: 'Как выбрать кондиционер: полное руководство покупателя',
    excerpt: 'Разбираем всё, что важно знать перед покупкой: мощность, типы, режимы работы, фильтры и энергоэффективность. Поможем не переплатить и выбрать то, что реально нужно.',
    image: 'https://cdn21vek.by/img/tmp/66ab9176d2a9b.jpeg',
    readTime: '10 мин',
    date: '2026',
    tag: 'Выбор техники',
  },
  {
    slug: 'invertor-ili-obychnyy',
    title: 'Инверторный или обычный кондиционер: в чём разница и стоит ли переплачивать',
    excerpt: 'Объясняем, чем инверторный компрессор отличается от обычного, сколько реально экономится электричества и когда переплата за инвертор оправдана, а когда нет.',
    image: 'https://static.tildacdn.com/tild6362-6135-4234-a533-653563626231/invertonoff.jpg',
    readTime: '7 мин',
    date: '2026',
    tag: 'Выбор техники',
  },
  {
    slug: 'chistka-i-obsluzhivanie',
    title: 'Чистка и обслуживание кондиционера: когда, как и почему это важно',
    excerpt: 'Рассказываем, что происходит с кондиционером без ухода, какие работы можно сделать самому, а что лучше доверить мастеру. Признаки, что пора вызывать специалиста.',
    image: 'https://klimresh.by/imager/resized/news-single/450x275-uv6gS6xW4ORb6pZ74l3tWLwAsPqY2z-metadWhvZC1rb25kaWNpb25lciAoMSkucG5n-.png',
    readTime: '8 мин',
    date: '2026',
    tag: 'Обслуживание',
  },
  {
    slug: 'kak-pravilno-polzovatsya-letom',
    title: 'Как правильно пользоваться кондиционером летом: советы и частые ошибки',
    excerpt: 'Какую температуру выставить, куда направлять воздух, как избежать простуды и аллергии. Простые правила, которые продлят жизнь технике и сохранят здоровье.',
    image: 'https://static.tildacdn.com/tild6233-3334-4062-b238-386537323331/rendy-novantino-Pjx2.jpg',
    readTime: '6 мин',
    date: '2026',
    tag: 'Эксплуатация',
  },
  {
    slug: 'podgotovka-k-zime',
    title: 'Подготовка кондиционера к зиме: пошаговое руководство',
    excerpt: 'Что нужно сделать осенью, чтобы кондиционер пережил зиму без поломок. Как правильно консервировать и когда имеет смысл использовать кондиционер для обогрева.',
    image: 'https://klimresh.by/imager/resized/news-single/450x275-Qpvs94OINi3S7YsdbyuQaF1TR2bkkK-metaa29uZGljaW9uZXItcG9kZ290b3ZrYS1rLXppbWUucG5n-.png',
    readTime: '7 мин',
    date: '2026',
    tag: 'Эксплуатация',
  },
  {
    slug: 'mobilnyy-ili-split',
    title: 'Мобильный кондиционер или сплит-система: что выбрать',
    excerpt: 'Сравниваем два типа кондиционеров по шуму, эффективности, цене и удобству. Кому подойдёт мобильный, а кому лучше сразу брать сплит.',
    image: 'https://content.onliner.by/news/1100x5616/fc670b5951c1c8d023eb5d860b4492bb.jpeg',
    readTime: '6 мин',
    date: '2026',
    tag: 'Выбор техники',
  },
  {
    slug: 'soglasovanie-ustanovki',
    title: 'Как согласовать установку кондиционера в Беларуси: документы и штрафы',
    excerpt: 'Разбираем законодательство: когда нужно разрешение, какие документы собрать, куда обращаться и что грозит за самовольную установку на фасаде многоквартирного дома.',
    image: 'https://split.by/sites/default/files/styles/640x400/public/field/image/nr.jpg?itok=eysvupPi',
    readTime: '5 мин',
    date: '2026',
    tag: 'Установка',
  },
  {
    slug: 'ustanovka-konditsionera-v-gomele',
    title: 'Установка кондиционера в Гомеле: монтаж сплит-системы под ключ',
    excerpt: 'Монтаж кондиционера в Гомеле от 400 р. Что входит в установку под ключ, как выбрать надёжную фирму и почему лучше брать кондиционер с установкой в одном месте.',
    image: 'https://klimresh.by/imager/resized/news-single/450x275-Qpvs94OINi3S7YsdbyuQaF1TR2bkkK-metaa29uZGljaW9uZXItcG9kZ290b3ZrYS1rLXppbWUucG5n-.png',
    readTime: '6 мин',
    date: '2026',
    tag: 'Установка',
  },
  {
    slug: 'skolko-vremeni-zanimaet-ustanovka-konditsionera',
    title: 'Сколько времени занимает установка кондиционера: от замера до запуска',
    excerpt: 'Стандартный монтаж сплит-системы — 2–4 часа. Разбираем все этапы установки, что увеличивает время и нужно ли присутствовать дома весь день.',
    image: 'https://static.tildacdn.com/tild6362-6135-4234-a533-653563626231/invertonoff.jpg',
    readTime: '4 мин',
    date: '2026',
    tag: 'Установка',
  },
  {
    slug: 'razreshenie-na-ustanovku-konditsionera',
    title: 'Нужно ли разрешение на установку кондиционера в Гомеле',
    excerpt: 'Когда требуется согласование, куда обращаться в Гомеле и что грозит за самовольную установку наружного блока на фасаде многоквартирного дома.',
    image: 'https://split.by/sites/default/files/styles/640x400/public/field/image/nr.jpg?itok=eysvupPi',
    readTime: '5 мин',
    date: '2026',
    tag: 'Установка',
  },
  {
    slug: 'konditsioner-pod-klyuch',
    title: 'Кондиционер под ключ в Гомеле: цены и что входит в пакет',
    excerpt: 'Кондиционер с установкой под ключ: один договор, один визит мастера, гарантия 1 год. Разбираем, что реально включено в пакет и почему это выгоднее, чем покупать отдельно.',
    image: 'https://klimresh.by/imager/resized/news-single/450x275-uv6gS6xW4ORb6pZ74l3tWLwAsPqY2z-metadWhvZC1rb25kaWNpb25lciAoMSkucG5n-.png',
    readTime: '5 мин',
    date: '2026',
    tag: 'Установка',
  },
  {
    slug: 'montazh-kassetnogo-konditsionera',
    title: 'Монтаж кассетного кондиционера: стоимость и особенности установки',
    excerpt: 'Стоимость монтажа кассетного кондиционера в Гомеле, отличия от настенного сплита и этапы установки в подвесной потолок. Цены от 600 р.',
    image: 'https://content.onliner.by/news/1100x5616/fc670b5951c1c8d023eb5d860b4492bb.jpeg',
    readTime: '5 мин',
    date: '2026',
    tag: 'Установка',
  },
  {
    slug: 'zapravka-konditsionera-gomel',
    title: 'Заправка кондиционера в Гомеле — цены 2026, выезд в день заказа',
    excerpt: 'Кондиционер плохо охлаждает или покрывается льдом? Скорее всего нужна дозаправка фреоном. Цены от 60 р., диагностика бесплатно при заправке.',
    image: 'https://klimresh.by/imager/resized/news-single/450x275-Qpvs94OINi3S7YsdbyuQaF1TR2bkkK-metaa29uZGljaW9uZXItcG9kZ290b3ZrYS1rLXppbWUucG5n-.png',
    readTime: '4 мин',
    date: '2026',
    tag: 'Обслуживание',
  },
  {
    slug: 'remont-konditsionera-gomel',
    title: 'Ремонт кондиционера в Гомеле — диагностика бесплатно, цены 2026',
    excerpt: 'Не включается, течёт, шумит или не охлаждает? Разбираем частые поломки и цены на ремонт. Мастер приедет в день обращения.',
    image: 'https://static.tildacdn.com/tild6362-6135-4234-a533-653563626231/invertonoff.jpg',
    readTime: '5 мин',
    date: '2026',
    tag: 'Обслуживание',
  },
  {
    slug: 'obsluzhivanie-konditsionera-gomel',
    title: 'Обслуживание кондиционера в Гомеле — чистка, заправка, ремонт 2026',
    excerpt: 'Чистка кондиционера от 60 р., заправка фреоном от 60 р. Что входит в полное ТО и как часто нужно обслуживать. Диагностика бесплатно.',
    image: 'https://klimresh.by/imager/resized/news-single/450x275-uv6gS6xW4ORb6pZ74l3tWLwAsPqY2z-metadWhvZC1rb25kaWNpb25lciAoMSkucG5n-.png',
    readTime: '5 мин',
    date: '2026',
    tag: 'Обслуживание',
  },
  {
    slug: 'demontazh-konditsionera-gomel',
    title: 'Демонтаж кондиционера в Гомеле — цена от 100 р., выезд в день заказа',
    excerpt: 'Снимем кондиционер правильно: закачаем фреон, сохраним блоки в рабочем состоянии. При заказе нового кондиционера — демонтаж бесплатно.',
    image: 'https://klimresh.by/imager/resized/news-single/450x275-Qpvs94OINi3S7YsdbyuQaF1TR2bkkK-metaa29uZGljaW9uZXItcG9kZ290b3ZrYS1rLXppbWUucG5n-.png',
    readTime: '4 мин',
    date: '2026',
    tag: 'Установка',
  },
  {
    slug: 'konditsioner-electrolux-gomel',
    title: 'Кондиционеры Electrolux в Гомеле — купить с установкой от 1 490 р.',
    excerpt: 'Официальный дилер Electrolux в Гомеле. Серии EACS, EACS-I и Nordic в наличии на складе. Установка в день заказа, гарантия 2–3 года.',
    image: 'https://cdn21vek.by/img/tmp/66ab9176d2a9b.jpeg',
    readTime: '6 мин',
    date: '2026',
    tag: 'Выбор техники',
  },
  {
    slug: 'konditsioner-dlya-ofisa-gomel',
    title: 'Кондиционер для офиса в Гомеле — как выбрать, цены и монтаж',
    excerpt: 'Какой кондиционер выбрать для офиса: настенный сплит, кассетный или мультисплит. Расчёт мощности по площади и числу рабочих мест, цены с монтажом.',
    image: 'https://content.onliner.by/news/1100x5616/fc670b5951c1c8d023eb5d860b4492bb.jpeg',
    readTime: '6 мин',
    date: '2026',
    tag: 'Установка',
  },
  {
    slug: 'tikhiy-konditsioner-dlya-spalni',
    title: 'Тихий кондиционер для спальни 2026 — ТОП 5 бесшумных моделей',
    excerpt: 'Рейтинг самых тихих кондиционеров с уровнем шума от 19 дБ. Ballu Platinum, Electrolux Nordic, Haier Pearl — выбор для спальни с режимом ночной работы.',
    image: 'https://static.tildacdn.com/tild6233-3334-4062-b238-386537323331/rendy-novantino-Pjx2.jpg',
    readTime: '6 мин',
    date: '2026',
    tag: 'Выбор техники',
  },
  {
    slug: 'konditsioner-ballu-gomel',
    title: 'Кондиционеры Ballu в Гомеле — купить с установкой от 1 290 р.',
    excerpt: 'Официальный дилер Ballu в Гомеле. Серии BSW, BSAGI, BSDI и Platinum Evolution в наличии. Инвертор или On/Off — поможем выбрать под бюджет и задачи.',
    image: 'https://static.tildacdn.com/tild6362-6135-4234-a533-653563626231/invertonoff.jpg',
    readTime: '5 мин',
    date: '2026',
    tag: 'Выбор техники',
  },
  {
    slug: 'konditsioner-haier-gomel',
    title: 'Кондиционеры Haier в Гомеле — купить с установкой от 1 350 р.',
    excerpt: 'Wi-Fi управление через hOn, инверторный компрессор, самоочистка. Официальный дилер Haier в Гомеле — все модели в наличии, монтаж в день заказа.',
    image: 'https://content.onliner.by/news/1100x5616/fc670b5951c1c8d023eb5d860b4492bb.jpeg',
    readTime: '5 мин',
    date: '2026',
    tag: 'Выбор техники',
  },
  {
    slug: 'konditsioner-lg-gomel',
    title: 'Кондиционеры LG в Гомеле — купить с установкой от 1 690 р.',
    excerpt: 'Гарантия 3 года, тихая работа от 21 дБ, ThinQ Smart управление. LG S-серия и ArtCool в наличии в Гомеле. Официальный дилер AirComfort.',
    image: 'https://cdn21vek.by/img/tmp/66ab9176d2a9b.jpeg',
    readTime: '5 мин',
    date: '2026',
    tag: 'Выбор техники',
  },
  {
    slug: 'konditsioner-dlya-detskoy',
    title: 'Кондиционер для детской комнаты — как выбрать безопасный в 2026',
    excerpt: 'Тихий, с фильтрацией воздуха, без сквозняков — как выбрать кондиционер для детской. ТОП моделей до 24 дБ с режимом «Ночь» и самоочисткой.',
    image: 'https://static.tildacdn.com/tild6233-3334-4062-b238-386537323331/rendy-novantino-Pjx2.jpg',
    readTime: '6 мин',
    date: '2026',
    tag: 'Выбор техники',
  },
  {
    slug: 'invertor-konditsioner-gomel',
    title: 'Инверторный кондиционер в Гомеле — купить с установкой, цены 2026',
    excerpt: 'Инверторный кондиционер с установкой в Гомеле от 1 290 р. Electrolux EACS-I, Ballu BSAGI, Haier, LG — экономия 30–40% на электроэнергии. Монтаж в день заказа.',
    image: 'https://static.tildacdn.com/tild6362-6135-4234-a533-653563626231/invertonoff.jpg',
    readTime: '6 мин',
    date: '2026',
    tag: 'Выбор техники',
  },
  {
    slug: 'split-sistema-gomel',
    title: 'Сплит-система в Гомеле — купить и установить от 1 290 р.',
    excerpt: 'Как выбрать сплит-систему в Гомеле: расчёт мощности, сравнение с мобильным кондиционером, этапы монтажа. Лучшие модели с ценами, установка в день заказа.',
    image: 'https://klimresh.by/imager/resized/news-single/450x275-Qpvs94OINi3S7YsdbyuQaF1TR2bkkK-metaa29uZGljaW9uZXItcG9kZ290b3ZrYS1rLXppbWUucG5n-.png',
    readTime: '6 мин',
    date: '2026',
    tag: 'Установка',
  },
  {
    slug: 'konditsioner-dlya-gostinoy',
    title: 'Кондиционер для гостиной — какой выбрать в 2026 году',
    excerpt: 'Как выбрать кондиционер для гостиной: мощность по площади, лучшие модели, уровень шума и Wi-Fi управление. Цены с монтажом в Гомеле от 990 р.',
    image: 'https://static.tildacdn.com/tild6233-3334-4062-b238-386537323331/rendy-novantino-Pjx2.jpg',
    readTime: '5 мин',
    date: '2026',
    tag: 'Выбор техники',
  },
  {
    slug: 'mulitsplit-gomel',
    title: 'Мультисплит система в Гомеле — цены 2026, один блок на все комнаты',
    excerpt: 'Один внешний блок — 2–5 комнат. Цены на мультисплит в Гомеле от 2 500 р. под ключ. Когда мультисплит выгоднее нескольких кондиционеров — разбираем.',
    image: 'https://content.onliner.by/news/1100x5616/fc670b5951c1c8d023eb5d860b4492bb.jpeg',
    readTime: '5 мин',
    date: '2026',
    tag: 'Установка',
  },
  {
    slug: 'konditsioner-gree-gomel',
    title: 'Кондиционеры Gree в Гомеле — купить с установкой от 990 р.',
    excerpt: 'Gree — №1 производитель кондиционеров в мире, OEM-поставщик для Daikin. Серии Bora, Lomo, Amber с установкой под ключ в Гомеле. Надёжность при доступной цене.',
    image: 'https://static.tildacdn.com/tild6362-6135-4234-a533-653563626231/invertonoff.jpg',
    readTime: '5 мин',
    date: '2026',
    tag: 'Выбор техники',
  },
  {
    slug: 'konditsioner-dlya-dachi',
    title: 'Кондиционер для дачи 2026 — мобильный или сплит, что выбрать',
    excerpt: 'Мобильный кондиционер от 490 р. без сверления стен, или бюджетный сплит от 1 190 р. под ключ. Сравниваем и помогаем выбрать для дачного дома.',
    image: 'https://static.tildacdn.com/tild6233-3334-4062-b238-386537323331/rendy-novantino-Pjx2.jpg',
    readTime: '5 мин',
    date: '2026',
    tag: 'Выбор техники',
  },
  {
    slug: 'konditsioner-s-obogrevom-gomel',
    title: 'Кондиционер с обогревом в Гомеле — в 3 раза экономичнее обогревателя',
    excerpt: 'Как кондиционер работает на обогрев: до какой температуры, сколько экономит. Лучшие модели для зимнего использования в Гомеле, цены с монтажом.',
    image: 'https://klimresh.by/imager/resized/news-single/450x275-Qpvs94OINi3S7YsdbyuQaF1TR2bkkK-metaa29uZGljaW9uZXItcG9kZ290b3ZrYS1rLXppbWUucG5n-.png',
    readTime: '5 мин',
    date: '2026',
    tag: 'Эксплуатация',
  },
  {
    slug: 'nedorogoy-konditsioner-gomel',
    title: 'Недорогой кондиционер в Гомеле — купить с установкой от 1 090 р.',
    excerpt: 'Рейтинг лучших бюджетных кондиционеров в Гомеле: Mitsudai от 1 090 р., Ballu от 1 190 р. Что выбрать — on/off или недорогой инвертор? Советы без лишних слов.',
    image: 'https://cdn21vek.by/img/tmp/66ab9176d2a9b.jpeg',
    readTime: '5 мин',
    date: '2026',
    tag: 'Выбор техники',
  },
  {
    slug: 'konditsioner-kinghome-gomel',
    title: 'Кондиционеры King Home в Гомеле — купить с установкой от 990 р.',
    excerpt: 'King Home — надёжный бюджетный бренд. Сравнение с Ballu и Mitsudai, цены на все модели с монтажом в Гомеле. Официальный дилер AirComfort.',
    image: 'https://static.tildacdn.com/tild6362-6135-4234-a533-653563626231/invertonoff.jpg',
    readTime: '4 мин',
    date: '2026',
    tag: 'Выбор техники',
  },
  {
    slug: 'ustanovka-konditsionera-v-novostroyke',
    title: 'Установка кондиционера в новостройке — как правильно и сколько стоит',
    excerpt: 'Когда лучше ставить кондиционер в новостройке — до отделки или после. Этапы монтажа, цены, согласование в новых домах Гомеля. Советы мастеров.',
    image: 'https://klimresh.by/imager/resized/news-single/450x275-Qpvs94OINi3S7YsdbyuQaF1TR2bkkK-metaa29uZGljaW9uZXItcG9kZ290b3ZrYS1rLXppbWUucG5n-.png',
    readTime: '5 мин',
    date: '2026',
    tag: 'Установка',
  },
  {
    slug: 'konditsioner-mitsudai-gomel',
    title: 'Кондиционеры Mitsudai в Гомеле — купить с установкой от 990 р.',
    excerpt: 'Mitsudai — самый доступный вариант в каталоге AirComfort. On/off сплит с установкой от 1 254 р. Кому подходит и чем отличается от Ballu — разбираем честно.',
    image: 'https://cdn21vek.by/img/tmp/66ab9176d2a9b.jpeg',
    readTime: '5 мин',
    date: '2026',
    tag: 'Выбор техники',
  },
  {
    slug: 'konditsioner-dlya-kukhni',
    title: 'Кондиционер для кухни — какой выбрать и особенности установки',
    excerpt: 'Кухня — сложное помещение для кондиционирования: плита, пар, жир. Как правильно рассчитать мощность, куда ставить и почему кондиционер на кухне нужно чаще обслуживать.',
    image: 'https://static.tildacdn.com/tild6233-3334-4062-b238-386537323331/rendy-novantino-Pjx2.jpg',
    readTime: '5 мин',
    date: '2026',
    tag: 'Выбор техники',
  },
];

const TAG_COLORS: Record<string, string> = {
  'Выбор техники': 'bg-crimson-100 text-crimson-700',
  'Обслуживание': 'bg-emerald-100 text-emerald-700',
  'Эксплуатация': 'bg-blue-100 text-blue-700',
  'Установка': 'bg-amber-100 text-amber-700',
};

export default function ArticlesPage() {
  const [cartOpen, setCartOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <Header onCartOpen={() => setCartOpen(true)} />
      <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} />

      <main>
        <div className="bg-crimson-gradient text-white">
          <div className="max-w-7xl mx-auto px-4 py-14">
            <nav className="flex items-center gap-2 text-sm text-crimson-200 mb-6">
              <Link href="/" className="hover:text-white transition-colors">Главная</Link>
              <Icon name="ChevronRightIcon" size={14} />
              <span className="text-white font-medium">Ответы на вопросы</span>
            </nav>
            <h1 className="text-4xl font-bold mb-3">Ответы на вопросы</h1>
            <p className="text-crimson-100 text-lg">Полезные статьи о выборе, установке и обслуживании кондиционеров</p>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ARTICLES.map(article => (
              <Link key={article.slug} href={`/articles/${article.slug}`} className="group block">
                <div className="bg-white rounded-2xl border border-border overflow-hidden hover:shadow-lg hover:border-crimson-200 transition-all duration-300 h-full flex flex-col">
                  <div className="aspect-video overflow-hidden bg-zinc-100">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-5 flex flex-col flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <span className={`text-xs font-semibold px-3 py-1 rounded-full ${TAG_COLORS[article.tag] ?? 'bg-zinc-100 text-zinc-700'}`}>{article.tag}</span>
                      <span className="text-xs text-muted-foreground flex items-center gap-1">
                        <Icon name="ClockIcon" size={12} />
                        {article.readTime}
                      </span>
                    </div>
                    <h2 className="text-base font-bold text-foreground mb-2 group-hover:text-crimson-700 transition-colors leading-snug">{article.title}</h2>
                    <p className="text-sm text-muted-foreground leading-relaxed flex-1">{article.excerpt}</p>
                    <div className="flex items-center gap-1 text-crimson-700 text-sm font-semibold mt-4">
                      Читать статью <Icon name="ArrowRightIcon" size={14} className="group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
