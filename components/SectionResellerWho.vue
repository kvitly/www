<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div class="relative bg-white pt-16 pb-32 overflow-hidden">
    <div class="mt-24">
      <div class="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
        <div class="px-4 max-w-xl mx-auto sm:px-6 lg:py-32 lg:max-w-none lg:mx-0 lg:px-0 lg:col-start-2">
          <div>
            <div>
              <span class="h-12 w-12 rounded-md flex items-center justify-center bg-emerald-500">
                <UserGroupIcon class="h-6 w-6 text-white" aria-hidden="true" />
              </span>
            </div>
            <div class="mt-6">
              <h2 class="text-3xl font-extrabold tracking-tight text-gray-900">Кто может стать партнером?</h2>
              <p class="mt-4 text-lg text-gray-500">Вы! Если у вас есть клиенты или вы готовы их искать, и если вам нравится строить сайты, которые помогают бизнесам.  С нами вы можете помочь малому бизнесу выстроить полноценные бизнес-процессы, настроить их продвижение в интернете, прием оплат и заказов, чтобы они начали цвести.</p>
                 <p class="mt-4 text-lg text-gray-500">У вас веб-студия, или вы фрилансер, или вам просто нравится работать с 🌱kvitly и вы готовы помогать другим? Давайте развиваться вместе!</p>
              <div class="mt-6">
                <a href="#" class="inline-flex px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-emerald-600 hover:bg-emerald-700"> Стать партнером </a>
              </div>
            </div>
          </div>
        </div>
        <div class="mt-12 sm:mt-16 lg:mt-0 lg:col-start-1">
          <div class="pr-4 -ml-48 sm:pr-6 md:-ml-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
            <img class="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:right-0 lg:h-full lg:w-auto lg:max-w-none" src="~/assets/reseller-vibe.jpg"/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { UserGroupIcon } from '@heroicons/vue/outline'
</script>