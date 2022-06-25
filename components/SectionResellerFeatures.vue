<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div class="py-12 bg-white relative">
    <div class="max-w-xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
      <h2 class="sr-only">A better way to send money.</h2>
      <dl class="space-y-10 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-8">
        <div v-for="feature in features" :key="feature.name">
          <dt>
            <div class="flex items-center justify-center h-12 w-12 rounded-md bg-emerald-500 text-white">
              <component :is="feature.icon" class="h-6 w-6" aria-hidden="true" />
            </div>
            <p class="mt-5 text-lg leading-6 font-medium text-gray-900">{{ feature.name }}</p>
          </dt>
          <dd class="mt-2 text-base text-gray-500">
            {{ feature.description }}
          </dd>
        </div>
      </dl>
    </div>
  </div>
</template>

<script setup>
import { CashIcon, DocumentReportIcon, CursorClickIcon } from '@heroicons/vue/outline'

const features = [
  {
    name: 'Оплата за каждого клиента',
    description: 'Вы будете получать 25% от каждого платежа каждого клиента, которого вы привели. Чем дольше клиенты остаются с нами — тем дольше вы получаете выплаты.',
    icon: CashIcon,
  },
  {
    name: 'Прозрачность платежей',
    description: 'У нас нет никаких дополнительных платежей кроме оплат в рамках тарифов, поэтому вы можете быть уверены в том, что полностью получаете вашу часть.',
    icon: DocumentReportIcon,
  },
  {
    name: 'Простота работы',
    description: 'Сайты на 🌱kvitly легко делать и поддерживать. Вы и ваши клиенты будут получать все обновления нашего сервиса, и мы будем рады любой обратной связи.',
    icon: CursorClickIcon,
  },
]
</script>