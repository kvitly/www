<template>
  <svg class="hidden lg:block absolute right-full transform translate-x-1/2 translate-y-12" width="404" height="784"
    fill="none" viewBox="0 0 404 784" aria-hidden="true">
    <defs>
      <pattern id="64e643ad-2176-4f86-b3d7-f2c5da3b6a6d" x="0" y="0" width="20" height="20"
        patternUnits="userSpaceOnUse">
        <rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor" />
      </pattern>
    </defs>
    <rect width="404" height="784" fill="url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)" />
  </svg>
  <div class="relative mt-12 sm:mt-16 lg:mt-24">
    <div class="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-8 lg:items-center">
      <div class="lg:col-start-2">
        <h3 class="text-3xl font-bold text-gray-900 tracking-tight sm:text-3xl">
          {{ props.title }}
        </h3>
        <p class="mt-3 text-lg text-gray-500">
          {{ props.description }}
        </p>

        <dl v-if="props.checklist" class="mt-12 space-y-10 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 lg:gap-x-8">
          <div v-for="item in props.checklist" :key="item.id" class="relative">
            <dt>
              <CheckIcon class="absolute h-6 w-6 text-green-500" aria-hidden="true" />
              <p class="ml-9 text-lg leading-6 font-medium text-gray-900">{{ item.name }}</p>
            </dt>
            <dd class="mt-2 ml-9 text-base text-gray-500">
              {{ item.description }}
            </dd>
          </div>
        </dl>

        <dl v-if="props.featurelist" class="mt-10 space-y-10">
          <div v-for="item in props.featurelist" :key="item.id" class="relative">
            <dt>
              <div class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-emerald-500 text-white">
                <component :is="item.icon" class="h-6 w-6" aria-hidden="true" />
              </div>
              <p class="ml-16 text-lg leading-6 font-medium text-gray-900">{{ item.name }}</p>
            </dt>
            <dd class="mt-2 ml-16 text-base text-gray-500">
              {{ item.description }}
            </dd>
          </div>
        </dl>

        <div v-if="props.button" class="my-16">
          <a :href="props.button.href"
            class="px-8 py-3 border border-transparent text-base font-medium rounded-md text-emerald-700 bg-emerald-100 hover:bg-emerald-200">
            {{ props.button.title }}
          </a>
        </div>
      </div>

      <div class="mt-10 -mx-4 relative lg:mt-0 lg:col-start-1">
        <svg class="absolute left-1/2 transform -translate-x-1/2 translate-y-16 lg:hidden" width="784" height="404"
          fill="none" viewBox="0 0 784 404" aria-hidden="true">
          <defs>
            <pattern id="e80155a9-dfde-425a-b5ea-1f6fadd20131" x="0" y="0" width="20" height="20"
              patternUnits="userSpaceOnUse">
              <rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor" />
            </pattern>
          </defs>
          <rect width="784" height="404" fill="url(#e80155a9-dfde-425a-b5ea-1f6fadd20131)" />
        </svg>
        <img class="relative mx-auto" width="490" :src="props.image.src"
          :alt="props.image.alt" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { CheckIcon } from '@heroicons/vue/outline'

const props = defineProps(['title', 'description', 'checklist', 'featurelist', 'button', 'image']);

</script>