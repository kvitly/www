<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div class="max-w-7xl mb-10 mx-auto">
    <Popover class="relative bg-white">
      <div class="flex justify-between items-center px-4 py-4 sm:px-6 md:justify-start md:space-x-10">
        <div>
          <a href="/" class="flex">
            <span class="sr-only">kvitly</span>
            <img class="w-auto h-14" src="~/assets/kvitly.svg" alt="" />
          </a>
        </div>
        <div class="-mr-2 -my-2 md:hidden">
          <PopoverButton
            class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-emerald-500">
            <span class="sr-only">Open menu</span>
            <MenuIcon class="h-6 w-6" aria-hidden="true" />
          </PopoverButton>
        </div>
        <div class="hidden md:flex-1 md:flex md:items-center md:justify-between">
          <PopoverGroup as="nav" class="flex space-x-10">
            <Popover class="relative" v-slot="{ open }">
              <PopoverButton
                :class="[open ? 'text-gray-900' : 'text-gray-500', 'group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500']">
                <span>Возможности</span>
                <ChevronDownIcon
                  :class="[open ? 'text-gray-600' : 'text-gray-400', 'ml-2 h-5 w-5 group-hover:text-gray-500']"
                  aria-hidden="true" />
              </PopoverButton>

              <transition enter-active-class="transition ease-out duration-200"
                enter-from-class="opacity-0 translate-y-1" enter-to-class="opacity-100 translate-y-0"
                leave-active-class="transition ease-in duration-150" leave-from-class="opacity-100 translate-y-0"
                leave-to-class="opacity-0 translate-y-1">
                <PopoverPanel class="absolute z-10 -ml-4 mt-3 transform w-screen max-w-md lg:max-w-3xl">
                  <div class="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                    <div class="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8 lg:grid-cols-2">
                      <a v-for="item in solutions" :key="item.name" :href="item.href"
                        class="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50">
                        <div
                          class="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-emerald-500 text-white sm:h-12 sm:w-12">
                          <component :is="item.icon" class="h-6 w-6" aria-hidden="true" />
                        </div>
                        <div class="ml-4">
                          <p class="text-base font-medium text-gray-900">
                            {{ item.name }}
                          </p>
                          <p class="mt-1 text-sm text-gray-500">
                            {{ item.description }}
                          </p>
                        </div>
                      </a>
                    </div>
                    <div class="p-5 bg-gray-50 sm:p-8">
                      <a :href="integrations.href" class="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-100">
                        <div
                          class="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-emerald-500 text-white sm:h-12 sm:w-12">
                          <component :is="integrations.icon" class="h-6 w-6" aria-hidden="true" />
                        </div>
                        <div class="ml-4">
                          <p class="text-base font-medium text-gray-900">
                            {{ integrations.name }}
                          </p>
                          <p class="mt-1 text-sm text-gray-500">
                            {{ integrations.description }}
                          </p>
                        </div>
                      </a>
                      <!-- class="-m-3 p-3 flow-root rounded-md hover:bg-gray-100">
                                                  <div
                            class="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-emerald-500 text-white sm:h-12 sm:w-12">
                            <component :is="MailIcon" class="h-6 w-6" aria-hidden="true" />
                          </div>
                        <div class="flex items-center">
                          <div class="text-base font-medium text-gray-900">Интеграции со сторонними сервисами</div>
                          <span
                            class="ml-3 inline-flex items-center px-3 py-0.5 rounded-full text-xs font-medium leading-5 bg-emerald-100 text-emerald-800">
                            Super </span>
                        </div>
                        <p class="mt-1 text-sm text-gray-500">Подключение десятков сервисов для упрощения ежедневной
                          работы
                        </p>
                      </a> -->
                    </div>
                  </div>
                </PopoverPanel>
              </transition>
            </Popover>
            <a href="#" class="text-base font-medium text-gray-500 hover:text-gray-900"> Тарифы </a>
            <a href="#" class="text-base font-medium text-gray-500 hover:text-gray-900"> Блог </a>

            <Popover class="relative" v-slot="{ open }">
              <PopoverButton
                :class="[open ? 'text-gray-900' : 'text-gray-500', 'group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500']">
                <span>Ресурсы</span>
                <ChevronDownIcon
                  :class="[open ? 'text-gray-600' : 'text-gray-400', 'ml-2 h-5 w-5 group-hover:text-gray-500']"
                  aria-hidden="true" />
              </PopoverButton>

              <transition enter-active-class="transition ease-out duration-200"
                enter-from-class="opacity-0 translate-y-1" enter-to-class="opacity-100 translate-y-0"
                leave-active-class="transition ease-in duration-150" leave-from-class="opacity-100 translate-y-0"
                leave-to-class="opacity-0 translate-y-1">
                <PopoverPanel
                  class="absolute z-10 left-1/2 transform -translate-x-1/2 mt-3 px-2 w-screen max-w-xs sm:px-0">
                  <div class="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                    <div class="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                      <a v-for="item in resources" :key="item.name" :href="item.href"
                        class="-m-3 p-3 block rounded-md hover:bg-gray-50">
                        <p class="text-base font-medium text-gray-900">
                          {{ item.name }}
                        </p>
                        <p class="mt-1 text-sm text-gray-500">
                          {{ item.description }}
                        </p>
                      </a>
                    </div>
                  </div>
                </PopoverPanel>
              </transition>
            </Popover>
          </PopoverGroup>
          <div class="flex items-center md:ml-12">
            <a href="#" class="text-base font-medium text-gray-500 hover:text-gray-900">Войти</a>
            <a href="#"
              class="ml-8 inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-emerald-600 hover:bg-emerald-700">
              Попробовать бесплатно </a>
          </div>
        </div>
      </div>

      <transition enter-active-class="duration-200 ease-out" enter-from-class="opacity-0 scale-95"
        enter-to-class="opacity-100 scale-100" leave-active-class="duration-100 ease-in"
        leave-from-class="opacity-100 scale-100" leave-to-class="opacity-0 scale-95">
        <PopoverPanel focus class="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
          <div class="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
            <div class="pt-5 pb-6 px-5">
              <div class="flex items-center justify-between">
                <div>
                  <img class="w-auto h-14" src="~/assets/kvitly.svg" alt="kvitly" />
                </div>
                <div class="-mr-2">
                  <PopoverButton
                    class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-emerald-500">
                    <span class="sr-only">Close menu</span>
                    <XIcon class="h-6 w-6" aria-hidden="true" />
                  </PopoverButton>
                </div>
              </div>
              <div class="mt-6">
                <nav class="grid gap-6">
                  <a v-for="item in solutions" :key="item.name" :href="item.href"
                    class="-m-3 p-3 flex items-center rounded-lg hover:bg-gray-50">
                    <div
                      class="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-emerald-500 text-white">
                      <component :is="item.icon" class="h-6 w-6" aria-hidden="true" />
                    </div>
                    <div class="ml-4 text-base font-medium text-gray-900">
                      {{ item.name }}
                    </div>
                  </a>
                  <a :href="integrations.href"
                    class="-m-3 p-3 flex items-center rounded-lg hover:bg-gray-50">
                    <div
                      class="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-emerald-500 text-white">
                      <component :is="integrations.icon" class="h-6 w-6" aria-hidden="true" />
                    </div>
                    <div class="ml-4 text-base font-medium text-gray-900">
                      {{ integrations.name }}
                    </div>
                  </a>
                </nav>
              </div>
            </div>
            <div class="py-6 px-5">
              <div class="grid grid-cols-2 gap-4">
                <a href="/plans" class="text-base font-medium text-gray-900 hover:text-gray-700"> Тарифы </a>

                <a href="/blog" class="text-base font-medium text-gray-900 hover:text-gray-700"> Блог </a>

                <a v-for="item in resources" :key="item.name" :href="item.href"
                  class="text-base font-medium text-gray-900 hover:text-gray-700">
                  {{ item.name }}
                </a>
              </div>
              <div class="mt-6">
                <a href="#"
                  class="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-emerald-600 hover:bg-emerald-700">
                  Попробовать бесплатно </a>
                <p class="mt-6 text-center text-base font-medium text-gray-500">
                  Уже регистрировались?
                  {{ ' ' }}
                  <a href="#" class="text-emerald-600 hover:text-emerald-500"> Войти </a>
                </p>
              </div>
            </div>
          </div>
        </PopoverPanel>
      </transition>
    </Popover>
  </div>
</template>

<script setup>
import { Popover, PopoverButton, PopoverGroup, PopoverPanel } from '@headlessui/vue'
import {
  DesktopComputerIcon,
  DocumentIcon,
  ShoppingCartIcon,
  CreditCardIcon,
  MailIcon,
  UsersIcon,
  XIcon,
  MenuIcon,
  ViewGridAddIcon,
} from '@heroicons/vue/outline'
import { ChevronDownIcon } from '@heroicons/vue/solid'

const solutions = [
  {
    name: 'Веб-сайт',
    description: 'Соберите именно такой сайт, который вам нужен',
    href: '/products/website',
    icon: DesktopComputerIcon,
  },
  {
    name: 'Лендинг',
    description: 'Одностраничные сайты для продвижения продуктов и услуг',
    href: '/products/landing',
    icon: DocumentIcon,
  },
  {
    name: 'Интернет-магазин',
    description: "Решение для онлайн-продаж и управления каталогом",
    href: '/products/ecommerce',
    icon: ShoppingCartIcon
  },
  {
    name: 'Платежи',
    description: 'Простое подключение сервисов для приема платежей онлайн',
    href: '/products/payments',
    icon: CreditCardIcon,
  },
  {
    name: 'Рассылки',
    description: 'Автоматизации для отправки писем и цепочек писем клиентам',
    href: '/products/email',
    icon: MailIcon,
  },
  {
    name: 'CRM-система',
    description: 'Сервис для комфортного управления заказами и контактами',
    href: '/products/crm',
    icon: UsersIcon,
  },
]
const integrations = {
    name: 'Интеграции со сторонними сервисами',
    description: 'Подключение десятков сервисов для упрощения ежедневной работы',
    href: '/integrations',
    icon: ViewGridAddIcon,
};

const resources = [
  {
    name: 'Справка',
    description: 'Get all of your questions answered in our forums or contact support.',
    href: '#',
  },
  { name: 'Истории клиентов', description: 'Примеры для вдохновения.', href: '#' },
  { name: 'Вебинары', description: 'Бесплатное обучение работе.', href: '#' },
  { name: 'Партнерская программа', description: 'Зарабатывайте вместе с нами.', href: '#' },
]
</script>