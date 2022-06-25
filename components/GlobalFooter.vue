<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <footer class="relative" aria-labelledby="footer-heading">
    <h2 id="footer-heading" class="sr-only">Footer</h2>
    <div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
      <div class="xl:grid xl:grid-cols-3 xl:gap-8">
        <div class="space-y-8 xl:col-span-1">
          <img class="h-16" src="~/assets/kvitly.svg" alt="🌱kvitly" />
          <p class="text-gray-500 text-base">{{footer.tagline}}</p>
          <div class="flex items-center space-x-6">
            <a v-for="item in footer.social" :key="item.name" :href="item.href" class="text-gray-400 hover:text-gray-500">
              <span class="sr-only">{{ item.name }}</span>
              <component :is="item.icon" class="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </div>
        <div class="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
          <div class="md:grid md:grid-cols-2 md:gap-8">
            <div>
              <h3 class="text-sm font-semibold text-gray-400 tracking-wider uppercase">Возможности</h3>
              <ul role="list" class="mt-4 space-y-4">
                <li v-for="item in footer.solutions" :key="item.name">
                  <a :href="item.href" class="text-base text-gray-500 hover:text-gray-900">
                    {{ item.name }}
                  </a>
                </li>
              </ul>
            </div>
            <div class="mt-12 md:mt-0">
              <h3 class="text-sm font-semibold text-gray-400 tracking-wider uppercase">&nbsp;</h3>
              <ul role="list" class="mt-4 space-y-4">
                <li v-for="item in footer.support" :key="item.name">
                  <a :href="item.href" class="text-base text-gray-500 hover:text-gray-900">
                    {{ item.name }}
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="md:grid md:grid-cols-2 md:gap-8">
            <div>
              <h3 class="text-sm font-semibold text-gray-400 tracking-wider uppercase">Сервис</h3>
              <ul role="list" class="mt-4 space-y-4">
                <li v-for="item in footer.company" :key="item.name">
                  <a :href="item.href" class="text-base text-gray-500 hover:text-gray-900">
                    {{ item.name }}
                  </a>
                </li>
              </ul>
            </div>
            <div class="mt-12 md:mt-0">
              <h3 class="text-sm font-semibold text-gray-400 tracking-wider uppercase">Ресурсы</h3>
              <ul role="list" class="mt-4 space-y-4">
                <li v-for="item in footer.legal" :key="item.name">
                  <a :href="item.href" class="text-base text-gray-500 hover:text-gray-900">
                    {{ item.name }}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="mt-12 flex items-center px-8 justify-between border-t border-gray-200 pt-8">
        <p class="text-md text-gray-400 xl:text-center">{{footer.copyright}}</p>
        <img class="max-w-sm opacity-75" src="~/assets/payments-bw.png" />
      </div>
    </div>
  </footer>
</template>

<script setup>
import { defineComponent, h } from 'vue'

const footer = {
  tagline: "Сервис, где есть всё для легкого старта и уверенного развития вашего бизнеса.",
  copyright: "© Сделано с 💚 в Беларуси, 2014—2022.",
  solutions: [
    { name: 'Веб-сайт', href: '/products/website' },
    { name: 'Интернет-магазин', href: '/products/ecommerce' },
    { name: 'Рассылки', href: '/products/email' },
    { name: 'Интеграции', href: '/integrations' },
  ],
  support: [
    { name: 'Лендинг', href: '/products/landing' },
    { name: 'Платежи', href: '/products/payments' },
    { name: 'CRM-система', href: '/products/crm' },
    // { name: 'API Status', href: '#' },
  ],
  company: [
    { name: 'Тарифы', href: '/plans' },
    { name: 'Блог', href: '#' },
    { name: 'О нас', href: '/about' },
    // { name: 'Press', href: '#' },
    // { name: 'Partners', href: '#' },
  ],
  legal: [
    { name: 'Справка', href: '#' },
    { name: 'Вебинары', href: '#' },
    { name: 'Партнерам', href: '#' },
  ],
  social: [
    {
      name: 'Facebook',
      href: 'https://www.facebook.com/staronkaby',
      icon: defineComponent({
        render: () =>
          h('svg', { fill: 'currentColor', viewBox: '0 0 16 16' }, [
            h('path', {
              'fill-rule': 'evenodd',
              d: 'M6.02293,16L6,9H3V6h3V4c0-2.6992,1.67151-4,4.07938-4c1.15339,0,2.14468,0.08587,2.43356,0.12425v2.82082 l-1.66998,0.00076c-1.30953,0-1.56309,0.62227-1.56309,1.53541V6H13l-1,3H9.27986v7H6.02293z',
              'clip-rule': 'evenodd',
            }),
          ]),
      }),
    },
    {
      name: 'VK',
      href: 'https://vk.com/staronkaby',
      icon: defineComponent({
        render: () =>
          h('svg', { fill: 'currentColor', viewBox: '0 0 16 16' }, [
            h('path', {
              'fill-rule': 'evenodd',
              d: 'M13.535,0H2.465C1.104,0,0,1.104,0,2.465v11.069 C0,14.896,1.104,16,2.465,16h11.069C14.896,16,16,14.896,16,13.535V2.465C16,1.104,14.896,0,13.535,0z M13.135,11.265h-1.346 c-0.439,0-0.494-0.32-1.3-1.09c-0.68-0.67-0.971-0.723-1.135-0.723c-0.147,0-0.247,0.11-0.247,0.366v1.025 c0,0.302-0.174,0.421-0.888,0.421c-1.172,0-2.472-0.723-3.461-2.06c-1.474-1.987-1.85-3.47-1.85-3.791 c0-0.174,0.128-0.293,0.302-0.293h1.199c0.311,0,0.43,0.092,0.54,0.421c0.549,1.611,1.529,3.031,1.941,3.031 c0.156,0,0.174-0.128,0.174-0.458V6.476c0-0.794-0.449-0.861-0.449-1.154c0-0.116,0.092-0.201,0.238-0.201h1.923 c0.256,0,0.293,0.092,0.293,0.403v2.225c0,0.254,0.052,0.348,0.165,0.348c0.14,0,0.269-0.085,0.522-0.366 c0.789-0.871,1.438-2.252,1.438-2.252c0.082-0.174,0.183-0.293,0.458-0.293c0.403,0,1.199,0,1.199,0 c0.238,0,0.339,0.128,0.293,0.357c-0.137,0.641-1.52,2.591-1.52,2.591c-0.128,0.201-0.183,0.311,0,0.504 c0.128,0.165,0.531,0.522,0.778,0.851c0.604,0.641,0.998,1.181,0.998,1.483C13.401,11.2,13.272,11.265,13.135,11.265z',
              'clip-rule': 'evenodd',
            }),
          ]),
      }),
    },
    {
      name: 'Instagram',
      href: 'https://www.instagram.com/staronkaby',
      icon: defineComponent({
        render: () =>
          h('svg', { fill: 'currentColor', viewBox: '0 0 16 16' }, [
            h('path', {
              'fill-rule': 'evenodd',
              d: 'M8,12c-2.206,0-4-1.794-4-4s1.794-4,4-4s4,1.794,4,4S10.206,12,8,12z M8,6C6.897,6,6,6.897,6,8 s0.897,2,2,2s2-0.897,2-2S9.103,6,8,6z',
              'clip-rule': 'evenodd',
            }),
            h('path', {
              'fill-rule': 'evenodd',
              d: 'M12,16H4c-2.056,0-4-1.944-4-4V4c0-2.056,1.944-4,4-4h8c2.056,0,4,1.944,4,4v8C16,14.056,14.056,16,12,16z M4,2C3.065,2,2,3.065,2,4v8c0,0.953,1.047,2,2,2h8c0.935,0,2-1.065,2-2V4c0-0.935-1.065-2-2-2H4z',
              'clip-rule': 'evenodd',
            }),
            h('circle', {
              cx: '12.145',
              cy: '3.892',
              r: '0.96',
            }),
          ]),
      }),
    },
    {
      name: 'Twitter',
      href: 'https://twitter.com/staronkaby',
      icon: defineComponent({
        render: () =>
          h('svg', { fill: 'currentColor', viewBox: '0 0 16 16' }, [
            h('path', {
              d: 'M16,3c-0.6,0.3-1.2,0.4-1.9,0.5c0.7-0.4,1.2-1,1.4-1.8c-0.6,0.4-1.3,0.6-2.1,0.8c-0.6-0.6-1.5-1-2.4-1 C9.3,1.5,7.8,3,7.8,4.8c0,0.3,0,0.5,0.1,0.7C5.2,5.4,2.7,4.1,1.1,2.1c-0.3,0.5-0.4,1-0.4,1.7c0,1.1,0.6,2.1,1.5,2.7 c-0.5,0-1-0.2-1.5-0.4c0,0,0,0,0,0c0,1.6,1.1,2.9,2.6,3.2C3,9.4,2.7,9.4,2.4,9.4c-0.2,0-0.4,0-0.6-0.1c0.4,1.3,1.6,2.3,3.1,2.3 c-1.1,0.9-2.5,1.4-4.1,1.4c-0.3,0-0.5,0-0.8,0c1.5,0.9,3.2,1.5,5,1.5c6,0,9.3-5,9.3-9.3c0-0.1,0-0.3,0-0.4C15,4.3,15.6,3.7,16,3z',
            }),
          ]),
      }),
    },
    {
      name: 'Telegram',
      href: 'https://t.me/menavita',
      icon: defineComponent({
        render: () =>
          h('svg', { fill: 'currentColor', viewBox: '0 0 16 16' }, [
            h('path', {
              'fill-rule': 'evenodd',
              d: 'M15.968,1.684a.338.338,0,0,0-.232-.253,1.192,1.192,0,0,0-.63.045S1.087,6.514.286,7.072c-.172.121-.23.19-.259.272-.138.4.293.573.293.573L3.933,9.094a.388.388,0,0,0,.183-.011c.822-.519,8.27-5.222,8.7-5.38.068-.02.118,0,.1.049-.172.6-6.606,6.319-6.641,6.354a.138.138,0,0,0-.049.118l-.337,3.528s-.142,1.1.956,0c.779-.779,1.527-1.425,1.9-1.738,1.242.858,2.579,1.806,3.156,2.3a1,1,0,0,0,.732.283.825.825,0,0,0,.7-.622S15.894,3.7,15.979,2.317C15.987,2.182,16,2.1,16,2A1.177,1.177,0,0,0,15.968,1.684Z',
              'clip-rule': 'evenodd',
            }),
          ]),
      }),
    },
    {
      name: 'YouTube',
      href: 'https://www.youtube.com/c/staronkaby',
      icon: defineComponent({
        render: () =>
          h('svg', { fill: 'currentColor', viewBox: '0 0 16 16' }, [
            h('path', {
              'fill-rule': 'evenodd',
              d: 'M15.8,4.8c-0.2-1.3-0.8-2.2-2.2-2.4C11.4,2,8,2,8,2S4.6,2,2.4,2.4C1,2.6,0.3,3.5,0.2,4.8C0,6.1,0,8,0,8 s0,1.9,0.2,3.2c0.2,1.3,0.8,2.2,2.2,2.4C4.6,14,8,14,8,14s3.4,0,5.6-0.4c1.4-0.3,2-1.1,2.2-2.4C16,9.9,16,8,16,8S16,6.1,15.8,4.8z M6,11V5l5,3L6,11z',
              'clip-rule': 'evenodd',
            }),
          ]),
      }),
    },
  ],
}
</script>