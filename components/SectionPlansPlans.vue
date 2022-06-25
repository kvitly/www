<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div class="">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- <div class="sm:flex sm:flex-col sm:align-center">
        <h1 class="text-5xl font-extrabold text-gray-900 sm:text-center">Pricing Plans</h1>
        <p class="mt-5 text-xl text-gray-500 sm:text-center">Start building for free, then add a site plan to go live. Account plans unlock additional features.</p>
        <div class="relative self-center mt-6 bg-gray-100 rounded-lg p-0.5 flex sm:mt-8">
          <button type="button" class="relative w-1/2 bg-white border-gray-200 rounded-md shadow-sm py-2 text-sm font-medium text-gray-900 whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:z-10 sm:w-auto sm:px-8">Monthly billing</button>
          <button type="button" class="ml-0.5 relative w-1/2 border border-transparent rounded-md py-2 text-sm font-medium text-gray-700 whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:z-10 sm:w-auto sm:px-8">Yearly billing</button>
        </div>
      </div> -->
      <div class="bg-white relative mt-12 space-y-4 sm:mt-16 sm:space-y-0 sm:grid sm:grid-cols-1 sm:gap-6 lg:max-w-4xl lg:mx-auto xl:max-w-none xl:mx-0 xl:grid-cols-3">
        <div
          v-for="tier in tiers"
          :key="tier.name"
          class="border border-gray-200 rounded-lg shadow-sm divide-y divide-gray-200"
        >
          <div class="p-6">
            <h2 class="text-lg leading-6 font-medium text-gray-900">
              {{ tier.name }}
            </h2>
            <p class="mt-4 text-sm h-12 text-gray-500">
              {{ tier.description }}
            </p>
            <p class="mt-8">
              <span class="text-4xl font-extrabold text-gray-900">{{ tier.priceMonthly }} Br</span>
              {{ ' ' }}
              <span class="text-base font-medium text-gray-500">/мес.</span>
            </p>
            <a
              :href="tier.href"
              class="mt-8 block w-full bg-emerald-600 border border-emerald-600 rounded-md py-2 text-sm font-semibold text-white text-center hover:bg-emerald-700"
            >Выбрать {{ tier.name }}</a>
          </div>
          <div class="pt-6 pb-8 px-6">
            <h3 class="text-xs font-medium text-gray-900 tracking-wide uppercase">
              Включено
            </h3>
            <ul
              role="list"
              class="mt-6 space-y-4"
            >
              <li
                v-for="feature in tier.includedFeatures"
                :key="feature"
                class="flex space-x-3"
              >
                <CheckIcon
                  class="flex-shrink-0 h-5 w-5 text-green-500"
                  aria-hidden="true"
                />
                <span class="text-sm text-gray-500">{{ feature }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <SectionPlansFeatures
      :tiers="tiers"
      :features="features"
    />
  </div>
</template>

<script setup>
import { CheckIcon, XIcon } from '@heroicons/vue/solid'
const tiers = [
  {
    name: 'Стартовый',
    href: '#',
    featured: false,
    priceMonthly: '12,90',
    description: 'Подходит для создания сайтов-визиток, лендингов и промо-страниц. Для успешного старта бизнеса.',
    includedFeatures: [
      'Одна страница и до 100 товаров',
      'Прием заказов',
      'Базовые интеграции',
    ],
  },
  {
    name: 'Базовый',
    href: '#',
    featured: false,
    priceMonthly: '19,90',
    description: 'Отличное решение для сайтов и небольших интернет-магазинов. Есть все для развития и продвижения.',
    includedFeatures: [
      'До 10 страниц и 500 товаров',
      'Управление заказами',
      'Свой адрес',
      'Больше интеграций',
      'Расширенное управление магазином'
    ],
  },
  {
    name: 'Премиум',
    href: '#',
    featured: true,
    priceMonthly: '25,90',
    description: 'Лучший вариант для больших интернет-магазинов и сайтов. Никаких ограничений.',
    includedFeatures: [
      'Без лимита страниц, до 1000 товаров',
      'Выгрузка заказов',
      'Свой адрес',
      'Все доступные интеграции',
      'Экспорт товаров на маркетплейсы',
      'SSL-сертификат',
      'Отключение брендинга 🌱kvitly',
    ],
  },
]
const features = [
  {
    title: 'Веб-сайт',
    features: [
      {
        title: 'Визуальный дизайн-редактор',
        tiers: [
          { title: 'starter', value: true },
          { title: 'intermediate', value: true },
          { title: 'popular', featured: true, value: true },
        ],
      },
      {
        title: 'Доступно страниц',
        tiers: [
          { title: 'starter', value: '1 страница' },
          { title: 'intermediate', value: 'До 10 страниц' },
          { title: 'popular', featured: true, value: 'Неограниченно' },
        ],
      },
      {
        title: 'Собственный домен',
        tiers: [
          { title: 'starter', value: true },
          { title: 'intermediate', value: true },
          { title: 'popular', featured: true, value: true },
        ],
      },
      {
        title: 'Перенаправления',
        tiers: [
          { title: 'starter', value: false },
          { title: 'intermediate', value: true },
          { title: 'popular', featured: true, value: true },
        ],
      },
      {
        title: 'Ограничения доступа',
        tiers: [
          { title: 'starter', value: false },
          { title: 'intermediate', value: true },
          { title: 'popular', featured: true, value: true },
        ],
      },
      {
        title: 'Управление DNS-записями',
        tiers: [
          { title: 'starter', value: false },
          { title: 'intermediate', value: false },
          { title: 'popular', featured: true, value: true },
        ],
      },
      {
        title: 'Вставка своего кода',
        tiers: [
          { title: 'starter', value: false },
          { title: 'intermediate', value: false },
          { title: 'popular', featured: true, value: true },
        ],
      },
      {
        title: 'SSL-сертификат',
        tiers: [
          { title: 'starter', value: false },
          { title: 'intermediate', value: false },
          { title: 'popular', featured: true, value: true },
        ],
      },
      {
        title: 'Отключение брендинга',
        tiers: [
          { title: 'starter', value: false },
          { title: 'intermediate', value: false },
          { title: 'popular', featured: true, value: true },
        ],
      },
    ],
  },
  {
    title: 'CRM-система',
    features: [
      {
        title: 'Конструктор форм',
        tiers: [
          { title: 'starter', value: true },
          { title: 'intermediate', value: true },
          { title: 'popular', featured: true, value: true },
        ],
      },
      {
        title: 'Уведомления о заказах',
        tiers: [
          { title: 'starter', value: true },
          { title: 'intermediate', value: true },
          { title: 'popular', featured: true, value: true },
        ],
      },
      {
        title: 'Письма клиентам',
        tiers: [
          { title: 'starter', value: false },
          { title: 'intermediate', value: true },
          { title: 'popular', featured: true, value: true },
        ],
      },
      {
        title: 'Управление заказами',
        tiers: [
          { title: 'starter', value: false },
          { title: 'intermediate', value: true },
          { title: 'popular', featured: true, value: true },
        ],
      },
      {
        title: 'Экспорт заказов в сторонние системы',
        tiers: [
          { title: 'starter', value: false },
          { title: 'intermediate', value: false },
          { title: 'popular', featured: true, value: true },
        ],
      }
    ]
  },
  {
    title: 'Магазин',
    features: [
      {
        title: 'Каталог товаров',
        tiers: [
          { title: 'starter', value: 'До 100 товаров' },
          { title: 'intermediate', value: 'До 500 товаров' },
          { title: 'popular', featured: true, value: 'До 1000 товаров' },
        ],
      },
      {
        title: 'Импорт и экспорт товаров',
        tiers: [
          { title: 'starter', value: true },
          { title: 'intermediate', value: true },
          { title: 'popular', featured: true, value: true },
        ],
      },
      {
        title: 'Отдельные страницы товаров',
        tiers: [
          { title: 'starter', value: false },
          { title: 'intermediate', value: true },
          { title: 'popular', featured: true, value: true },
        ],
      },
      {
        title: 'Товары с вариантами',
        tiers: [
          { title: 'starter', value: false },
          { title: 'intermediate', value: false },
          { title: 'popular', featured: true, value: true },
        ],
      },
      {
        title: 'Учет количества товаров',
        tiers: [
          { title: 'starter', value: false },
          { title: 'intermediate', value: false },
          { title: 'popular', featured: true, value: true },
        ],
      },
      {
        title: 'Выгрузки товаров в маркетплейсы',
        tiers: [
          { title: 'starter', value: false },
          { title: 'intermediate', value: false },
          { title: 'popular', featured: true, value: true },
        ],
      }
    ]
  },
    {
    title: 'Интеграции',
    features: [
      {
        title: 'Счетчики посещений',
        tiers: [
          { title: 'starter', value: true },
          { title: 'intermediate', value: true },
          { title: 'popular', featured: true, value: true },
        ],
      },
      {
        title: 'Онлайн-консультанты',
        tiers: [
          { title: 'starter', value: true },
          { title: 'intermediate', value: true },
          { title: 'popular', featured: true, value: true },
        ],
      },
      {
        title: 'Виджеты социальных сетей',
        tiers: [
          { title: 'starter', value: true },
          { title: 'intermediate', value: true },
          { title: 'popular', featured: true, value: true },
        ],
      },
      {
        title: 'Виджеты обратного звонка',
        tiers: [
          { title: 'starter', value: true },
          { title: 'intermediate', value: true },
          { title: 'popular', featured: true, value: true },
        ],
      },
      {
        title: 'Виджеты онлайн-записи',
        tiers: [
          { title: 'starter', value: true },
          { title: 'intermediate', value: true },
          { title: 'popular', featured: true, value: true },
        ],
      },
      {
        title: 'Сервисы почтовых рассылок',
        tiers: [
          { title: 'starter', value: false },
          { title: 'intermediate', value: true },
          { title: 'popular', featured: true, value: true },
        ],
      },
      {
        title: 'Корпоративная почта',
        tiers: [
          { title: 'starter', value: false },
          { title: 'intermediate', value: false },
          { title: 'popular', featured: true, value: true },
        ],
      },
      {
        title: 'Прием онлайн-платежей',
        tiers: [
          { title: 'starter', value: false },
          { title: 'intermediate', value: false },
          { title: 'popular', featured: true, value: true },
        ],
      },
      {
        title: 'Системы ретаргетинга',
        tiers: [
          { title: 'starter', value: false },
          { title: 'intermediate', value: false },
          { title: 'popular', featured: true, value: true },
        ],
      },
      {
        title: 'Маркетинговые сервисы',
        tiers: [
          { title: 'starter', value: false },
          { title: 'intermediate', value: false },
          { title: 'popular', featured: true, value: true },
        ],
      }
    ]
  },
];
</script>