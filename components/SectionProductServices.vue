<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div class=" overflow-hidden">
    <div class="relative max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <!-- <svg class="absolute top-0 left-full transform -translate-x-1/2 -translate-y-3/4 lg:left-auto lg:right-full lg:translate-x-2/3 lg:translate-y-1/4" width="404" height="784" fill="none" viewBox="0 0 404 784" aria-hidden="true">
        <defs>
          <pattern id="8b1b5f72-e944-4457-af67-0c6d15a99f38" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
            <rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor" />
          </pattern>
        </defs>
        <rect width="404" height="784" fill="url(#8b1b5f72-e944-4457-af67-0c6d15a99f38)" />
      </svg> -->

      <div class="relative lg:grid lg:grid-cols-3 lg:gap-x-8">
        <div class="lg:col-span-1">
          <h2 class="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Доступно для всех продуктов 🌱kvitly
          </h2>
          <p class="mx-auto mt-5 max-w-prose text-xl text-gray-500">
            Простое подключение в пару кликов. <br>Уже встроено в сайты любого типа.
          </p>
        </div>
        <dl class="mt-10 space-y-10 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-x-8 sm:gap-y-10 lg:mt-0 lg:col-span-2">
          <div
            v-for="feature in features"
            :key="feature.name"
          >
            <dt>
              <div class="flex items-center justify-center h-12 w-12 rounded-md bg-emerald-500 text-white">
                <component
                  :is="feature.icon"
                  class="h-6 w-6"
                  aria-hidden="true"
                />
              </div>
              <p class="mt-5 text-lg leading-6 font-medium text-gray-900">
                {{ feature.name }}
              </p>
            </dt>
            <dd class="mt-2 text-base text-gray-500">
              {{ feature.description }}
            </dd>
          </div>
        </dl>
      </div>
    </div>
  </div>
</template>
<!-- 
<template>
  <div class="relative bg-white py-16 sm:py-24 lg:py-32">
    <div
      class="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8"
    >
      <p
        class="mt-2 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl"
      >
        Доступно для всех продуктов 🌱kvitly
      </p>
      <p class="mx-auto mt-5 max-w-prose text-xl text-gray-500">
        Простое подключение в пару кликов. Уже встроено в сайты любого типа.
      </p>
      <div class="mt-12">
        <div class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div v-for="feature in features" :key="feature.name" class="pt-6">
            <div class="flow-root rounded-lg bg-gray-50 px-6 pb-8">
              <div class="-mt-6">
                <div>
                  <span
                    class="inline-flex items-center justify-center rounded-md bg-emerald-500 p-5 shadow-lg"
                  >
                    <component
                      :is="feature.icon"
                      class="h-8 w-8 text-white"
                      aria-hidden="true"
                    />
                  </span>
                </div>
                <h3
                  class="mt-8 text-lg font-medium tracking-tight text-gray-900"
                >
                  {{ feature.name }}
                </h3>
                <p class="mt-5 text-base text-gray-500">
                  {{ feature.description }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template> -->

<script setup>
import {
  DesktopComputerIcon,
  DocumentIcon,
  ShoppingCartIcon,
} from "@heroicons/vue/outline";

const features = [
  {
    name: "Веб-сайты",
    description: "Многостраничные сайты для любого бизнеса, чтобы рассказать о себе всему миру.",
    icon: DesktopComputerIcon,
  },
  {
    name: "Лендинги",
    description: "Одностраничные сайты для активных продаж и продвижения, заточенные для высокой конверсии в покупку.",
    icon: DocumentIcon,
  },
  {
    name: "Интернет-магазины",
    description: "Полноценные магазины с каталогом, корзиной, карточками товаров и управлением заказами.",
    icon: ShoppingCartIcon,
  },
];
</script>
