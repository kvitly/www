<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div class="bg-white">
    <div class="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
      <div class="max-w-lg mx-auto md:max-w-none md:grid md:grid-cols-2 md:gap-16">
        <div class="mt-12 sm:mt-16 md:mt-0">
          <h2 class="text-2xl font-extrabold text-gray-900 sm:text-3xl">Техническая поддержка</h2>
          <div class="mt-3">
            <p class="text-lg text-gray-500">Мы на связи в чате и по почте и готовы помочь с любыми вопросами.</p>
          </div>
          <div class="mt-9 space-y-4">
            <div class="flex">
              <div class="flex-shrink-0">
                <MailIcon class="h-6 w-6 text-gray-400" aria-hidden="true" />
              </div>
              <div class="ml-3 text-base text-gray-500">
                <p>help@kvitly.com</p>
              </div>
            </div>
            <div class="flex">
              <div class="flex-shrink-0">
                <ClockIcon class="h-6 w-6 text-gray-400" aria-hidden="true" />
              </div>
              <div class="ml-3 text-base text-gray-500">
                <p>Будние дни с 10 до 18 часов</p>
              </div>
            </div>
            <div class="flex">
              <div class="flex-shrink-0">
                <GlobeAltIcon class="h-6 w-6 text-gray-400" aria-hidden="true" />
              </div>
              <div class="ml-3 text-base text-gray-500">
                <p>Мониторинг сервиса — круглосуточно!</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h2 class="text-2xl font-extrabold text-gray-900 sm:text-3xl">Обратная связь</h2>
          <div class="mt-3">
            <p class="text-lg text-gray-500">Хотите присодеиниться к команде или что-то предложить? Мы всегда открыты к сотрудничеству!</p>
          </div>
          <div class="mt-9 space-y-4">
            <div class="flex">
              <div class="flex-shrink-0">
                <MailIcon class="h-6 w-6 text-gray-400" aria-hidden="true" />
              </div>
              <div class="ml-3 text-base text-gray-500">
                <p>hello@kvitly.com</p>
              </div>
            </div>
            <div class="flex">
              <div class="flex-shrink-0">
                <ClockIcon class="h-6 w-6 text-gray-400" aria-hidden="true" />
              </div>
              <div class="ml-3 text-base text-gray-500">
                <p>Будние дни с 10 до 18 часов</p>
              </div>
            </div>
            <div class="flex">
              <div class="flex-shrink-0">
                <SparklesIcon class="h-6 w-6 text-gray-400" aria-hidden="true" />
              </div>
              <div class="ml-3 text-base text-gray-500">
                <p>Будем рады новым знакомствам!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { MailIcon, SparklesIcon, ClockIcon, GlobeAltIcon } from '@heroicons/vue/outline'
</script>