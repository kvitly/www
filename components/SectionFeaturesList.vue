<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div class="bg-white">
    <div class="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-24 lg:px-8 lg:grid lg:grid-cols-3 lg:gap-x-8">
      <div>
        <h2 class="text-base font-semibold text-emerald-600 uppercase tracking-wide">Кроме того</h2>
        <p class="mt-2 text-3xl font-extrabold text-gray-900">Базовые возможности</p>
        <p class="mt-4 text-lg text-gray-500">Пару вещей, которые вы получите на любом тарифе и с любым сервисом 🌱kvitly</p>
      </div>
      <div class="mt-12 lg:mt-0 lg:col-span-2">
        <dl class="space-y-10 sm:space-y-0 sm:grid sm:grid-cols-2 sm:grid-rows-3 sm:grid-flow-col sm:gap-x-6 sm:gap-y-10 lg:gap-x-8">
          <div v-for="feature in features" :key="feature.name" class="relative">
            <dt>
              <CheckIcon class="absolute h-6 w-6 text-green-500" aria-hidden="true" />
              <p class="ml-9 text-lg leading-6 font-medium text-gray-900">{{ feature.name }}</p>
            </dt>
            <dd class="mt-2 ml-9 text-base text-gray-500">
              {{ feature.description }}
            </dd>
          </div>
        </dl>
      </div>
    </div>
  </div>
</template>

<script setup>
import { CheckIcon } from '@heroicons/vue/outline'

const features = [
  {
    name: 'Хостинг',
    description: 'Мы надежно храним ваши данные в течение срока подписки и еще немного.',
  },
  { 
    name: 'Мобильные интерфейсы', 
    description: 'Ваши сайты будут выглядеть одинаково хорошо на экранах разных размеров.' },
  {
    name: 'Свой домен',
    description: 'Вы сможете легко подключить свой адрес сайта на любом тарифе.',
  },
  { 
    name: 'Поддержка', 
    description: 'Мы подготовили базу знаний о продукте и готовы всегда прийти на помощь в чате.' 
  },
  { 
    name: 'Постоянное улучшение', 
    description: 'Мы каждый день улучшаем сервис, чтобы у вас было больше возможностей.' 
  },
  { 
    name: 'Приятный опыт ваших клиентов', 
    description: 'Вы можете делать все в одном месте, и ваши клиенты будут легко вас узнавать.' 
  },
]
</script>