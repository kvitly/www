<template>
  <svg class="hidden lg:block absolute left-full transform -translate-x-1/2 -translate-y-1/5" width="404" height="784" fill="none" viewBox="0 0 404 784" aria-hidden="true">
    <defs>
      <pattern id="b1e6e422-73f8-40a6-b5d9-c8586e37e0e7" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
        <rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor" />
      </pattern>
    </defs>
    <rect width="404" height="784" fill="url(#b1e6e422-73f8-40a6-b5d9-c8586e37e0e7)" />
  </svg>
  <div class="relative mt-12 lg:mt-24 lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
    <div class="relative">
      <h3 class="text-3xl font-bold text-gray-900 tracking-tight sm:text-3xl">
        {{ props.title }}
      </h3>
      <p class="mt-3 text-lg text-gray-500">
        {{ props.description }}
      </p>

      <dl class="mt-12 space-y-10 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 lg:gap-x-8">
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

      <div class="my-16">
        <a :href="props.button.href"
          class="px-8 py-3 border border-transparent text-base font-medium rounded-md text-emerald-700 bg-emerald-100 hover:bg-emerald-200">
          {{ props.button.title }}
        </a>
      </div>
    </div>

    <div class="mt-10 -mx-4 relative lg:mt-0" aria-hidden="true">
      <svg class="absolute left-1/2 transform -translate-x-1/2 translate-y-16 lg:hidden" width="784" height="404"
        fill="none" viewBox="0 0 784 404">
        <defs>
          <pattern id="ca9667ae-9f92-4be7-abcb-9e3d727f2941" x="0" y="0" width="20" height="20"
            patternUnits="userSpaceOnUse">
            <rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor" />
          </pattern>
        </defs>
        <rect width="784" height="404" fill="url(#ca9667ae-9f92-4be7-abcb-9e3d727f2941)" />
      </svg>
      <img class="relative mx-auto" width="490" :src="props.image.src" :alt="props.image.alt" />
    </div>
  </div>
</template>

<script setup>
  import { CheckIcon } from '@heroicons/vue/outline'

  const props = defineProps(['title', 'description', 'checklist', 'button', 'image']);

</script>