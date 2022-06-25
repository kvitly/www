<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div class="py-16 overflow-hidden lg:py-24">
    <div class="relative max-w-xl mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-7xl">
      <div class="relative">
        <h2
          class="text-center text-3xl leading-8 font-bold tracking-tight text-gray-900 sm:text-4xl"
        >
          {{ props.title }}
        </h2>
        <p class="mt-4 max-w-3xl mx-auto text-center text-xl text-gray-500">
          {{ props.description }}
        </p>
      </div>

      <div v-for="(feature, index) in props.features">
        <FeatureLeft
          v-if="index % 2 === 0"
          :title="feature.title"
          :description="feature.description"
          :featurelist="feature.featurelist"
          :image="feature.image"
        />
        <FeatureRight
          v-else
          :title="feature.title"
          :description="feature.description"
          :featurelist="feature.featurelist"
          :image="feature.image"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps(["title", "description", "features"]);
</script>
