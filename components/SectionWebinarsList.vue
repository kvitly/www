<template>
  <div class="bg-white">
    <div class="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-16">
      <div class="space-y-12 lg:grid lg:grid-cols-3 lg:gap-8 lg:space-y-0">
        <div class="space-y-5 sm:space-y-4">
          <h2 class="text-3xl font-extrabold tracking-tight sm:text-4xl">{{props.title}}</h2>
          <p class="text-xl text-gray-500">{{props.description}}</p>
        </div>
        <div class="lg:col-span-2">
          <ul role="list" class="space-y-12 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:gap-x-8">
            <li v-for="video in props.videos" :key="video.name">
              <div class="space-y-4">
                <a :href="video.url" target="_blank" class="block aspect-w-16 aspect-h-9">
                  <img class="object-cover border shadow-lg rounded-lg" :src="video.imageUrl" alt="" />
                </a>
                <div class="text-lg leading-6 font-medium space-y-1">
                  <h3>{{ video.name }}</h3>
                  <a :href="video.url" target="_blank" class="block text-emerald-500">{{ video.title }}</a>
                </div>
                <div class="text-sm">
                  <p class="text-gray-500">{{ video.description }}</p>
                  <p v-if="video.speaker" class="text-gray-700 font-medium mt-2">{{ video.speaker }}</p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
    const props = defineProps(["title", "description", "videos"]);
</script>