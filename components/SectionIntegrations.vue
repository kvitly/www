<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div class="relative py-16 sm:py-24 lg:py-32">
    <div
      class="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8"
    >
      <div class="mt-12">
        <div class="grid grid-cols-1 gap-8 sm:grid-cols-2">
          <div v-for="feature in features" :key="feature.name" class="pt-6">
            <!-- <div class="flow-root rounded-lg bg-gray-50 px-6 pb-8">
              <div class="flex justify-between">
                <div class="w-64">
                    <span class="rounded-md w-32 bg-indigo-500 overflow-hidden shadow-lg">
                        <img class="block h-24 w-24" :src="`https://staronka.by/app/lib/images/integrations/${feature.img}`">
                    </span>
                </div>
                <div class="text-left">
                    <h3 class="mt-8 text-lg font-medium tracking-tight text-gray-900">{{ feature.title }}</h3>
                    <p class="mt-5 text-base text-gray-500">{{ feature.about }}</p>
                </div>
              </div>
            </div> -->
            <div class="flow-root rounded-lg bg-gray-50 px-6 py-8">
              <dt>
                <div
                  class="absolute flex items-center justify-center h-16 w-16 shadow-lg overflow-hidden rounded-md bg-white"
                >
                  <img
                    class="block h-16 w-16"
                    :src="`https://staronka.by/app/lib/images/integrations/${feature.img}`"
                  />
                </div>
                <p class=" ml-24 text-lg leading-6 font-medium text-gray-900">
                  {{ feature.title }}
                </p>
              </dt>
              <dd class="mt-2 ml-24 text-base text-gray-500">
                {{ feature.about }}
              </dd>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import extensions from "../lib/conf/extensions.json";

import {
  CloudUploadIcon,
  CogIcon,
  LockClosedIcon,
  RefreshIcon,
  ServerIcon,
  ShieldCheckIcon,
} from "@heroicons/vue/outline";

const features = extensions;
</script>
