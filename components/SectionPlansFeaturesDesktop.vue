<!-- This example requires Tailwind CSS v2.0+ -->
<template>

  <!-- Feature comparison (lg+) -->
  <section aria-labelledby="comparison-heading" class="bg-white relative mt-2 hidden lg:block">
    <h2 id="comparison-heading" class="sr-only">Feature comparison</h2>

    <div class="max-w-7xl mx-auto py-4 px-8">
      <div :class="[props.first ? 'border-t border-gray-200' : '', 'w-full  flex items-stretch']">
        <div class="-mt-px w-1/4 py-6 pr-4 flex items-end">
          <h3 class="mt-auto text-sm font-bold text-gray-900">{{props.title}}</h3>
        </div>
        <div v-if="props.first" v-for="(plan, planIdx) in props.tiers" :key="plan.name" aria-hidden="true" :class="[planIdx === tiers.length - 1 ? '' : 'pr-4', '-mt-px pl-4 w-1/4']">
          <div :class="[plan.featured ? 'border-emerald-600' : 'border-transparent', 'py-6 border-t-2']">
            <p :class="[plan.featured ? 'text-emerald-600' : 'text-gray-900', 'text-sm font-bold']">{{ plan.name }} </p>
            <p class="mt-2 text-sm text-gray-500">{{ plan.description }}</p>
          </div>
        </div>
      </div>

      <div class="relative">
        <!-- Fake card backgrounds -->
        <div class="absolute inset-0 flex items-stretch pointer-events-none" aria-hidden="true">
          <div class="w-1/4 pr-4" />
          <div class="w-1/4 px-4">
            <div class="w-full h-full bg-white rounded-lg shadow" />
          </div>
          <div class="w-1/4 px-4">
            <div class="w-full h-full bg-white rounded-lg shadow" />
          </div>
          <div class="w-1/4 pl-4">
            <div class="w-full h-full bg-white rounded-lg shadow-md" />
          </div>
        </div>

        <table class="relative w-full">
          <caption class="sr-only">
            Business feature comparison
          </caption>
          <thead>
            <tr class="text-left">
              <th scope="col">
                <span class="sr-only">Feature</span>
              </th>
              <th v-for="plan in props.tiers" :key="plan.title" scope="col">
                <span class="sr-only">{{ plan.title }} plan</span>
              </th>
            </tr>
          </thead>
          <tbody class="divide-y divide-gray-100">
            <tr v-for="feature in props.features" :key="feature.title">
              <th scope="row" class="w-1/4 py-3 pr-4 text-left text-sm font-normal text-gray-600">{{ feature.title }}</th>
              <td v-for="(tier, tierIdx) in feature.tiers" :key="tier.title" :class="[tierIdx === feature.tiers.length - 1 ? 'pl-4' : 'px-4', 'relative w-1/4 py-0 text-center']">
                <span class="relative w-full h-full py-3">
                  <span v-if="typeof tier.value === 'string'" :class="[tier.featured ? 'text-emerald-600' : 'text-gray-900', 'text-sm font-medium']">{{ tier.value }}</span>
                  <template v-else>
                    <CheckIcon v-if="tier.value === true" class="mx-auto h-5 w-5 text-emerald-600" aria-hidden="true" />
                    <XIcon v-else class="mx-auto h-5 w-5 text-gray-400 opacity-50" aria-hidden="true" />
                    <span class="sr-only">{{ tier.value === true ? 'Yes' : 'No' }}</span>
                  </template>
                </span>
              </td>
            </tr>
          </tbody>
        </table>

        <!-- Fake card borders -->
        <div class="absolute inset-0 flex items-stretch pointer-events-none" aria-hidden="true">
          <div class="w-1/4 pr-4" />
          <div class="w-1/4 px-4">
            <div class="w-full h-full rounded-lg ring-1 ring-black ring-opacity-5" />
          </div>
          <div class="w-1/4 px-4">
            <div class="w-full h-full rounded-lg ring-1 ring-black ring-opacity-5" />
          </div>
          <div class="w-1/4 pl-4">
            <div class="w-full h-full rounded-lg ring-2 ring-emerald-600 ring-opacity-100" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
  import { CheckIcon, XIcon } from '@heroicons/vue/solid'
  const props = defineProps(["title", "first", "tiers", "features"]);
</script>