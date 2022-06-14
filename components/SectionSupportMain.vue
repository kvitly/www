<template>
  <div class="bg-white ">
    <header class="relative pt-8 pb-32 bg-slate-900">
      <div class="absolute inset-0">
        <img class="w-full h-full object-cover opacity-40" src="~/assets/main-support-kvitlyteam.jpg" alt="" />
        <div class="absolute inset-0 bg-slate-300 mix-blend-multiply" aria-hidden="true" />
      </div>

      <div class="relative mt-24 max-w-md mx-auto px-4 pb-32 sm:max-w-3xl sm:px-6 md:mt-32 lg:max-w-7xl lg:px-8">
        <h1 class="text-4xl font-extrabold tracking-tight text-white md:text-5xl lg:text-6xl">Давайте развиваться вместе. </h1>
        <p class="mt-6 max-w-3xl text-xl text-slate-300">Мы всегда рядом, если понадобится помощь. Мы настроены серьезно и готовы на все, чтобы ваше дело расцветало.</p>
      </div>
    </header>

    <main>
      <div class=" pb-24">
        <!-- Cards -->
        <section class="-mt-32 max-w-md mx-auto relative z-10 px-4 sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8" aria-labelledby="contact-heading">
          <h2 class="sr-only" id="contact-heading">Contact us</h2>
          <div class="grid grid-cols-1 gap-y-20 lg:grid-cols-3 lg:gap-y-0 lg:gap-x-8">
            <div v-for="link in supportLinks" :key="link.name" class="flex flex-col bg-white rounded-2xl shadow-xl">
              <div class="flex-1 relative pt-16 px-6 pb-8 md:px-8">
                <div class="absolute top-0 p-5 inline-block bg-emerald-500 rounded-xl shadow-lg transform -translate-y-1/2">
                  <component :is="link.icon" class="h-6 w-6 text-white" aria-hidden="true" />
                </div>
                <h3 class="text-xl font-medium text-slate-900">{{ link.name }}</h3>
                <p class="mt-4 text-base text-slate-500">{{ link.description }}</p>
              </div>
                <div class="p-6 bg-emerald-50 rounded-bl-2xl rounded-br-2xl md:px-8">
                  <a :href="link.href" class="text-base font-medium text-emerald-700 hover:text-emerald-500">{{ link.link_title }}<span aria-hidden="true"> &rarr;</span></a>
                </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  </div>
</template>

<script setup>
import { defineComponent, h } from 'vue'
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/vue'
import { MenuIcon, FilmIcon, ChatIcon, SupportIcon, XIcon } from '@heroicons/vue/outline'

const supportLinks = [
  {
    name: 'Великолепная поддержка',
    description: 'Всегда готовы прийти на помощь для решения ваших бизнес задач.',
    icon: ChatIcon,
    link_title: 'Напишите нам'
  },
  {
    name: 'Встроенная система обучения',
    href: '#',
    description: 'Мы описали все функции, чтобы вы никогда не потерялись в настройках.',
    icon: SupportIcon,
    link_title: 'Перейти в Базу знаний'
  },
  {
    name: 'Подробные видеоуроки',
    href: '#',
    description: 'Вебинары помогут легче разобраться с сервисом и быстрее начать',
    icon: FilmIcon,
    link_title: 'Посмотреть вебинары'
  },
]
</script>