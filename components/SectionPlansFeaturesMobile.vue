<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <!-- Feature comparison (up to lg) -->
  <section aria-labelledby="mobile-comparison-heading" class="lg:hidden">
    <h2 id="mobile-comparison-heading" class="sr-only">Feature comparison</h2>

    <div class="max-w-2xl mx-auto py-16 px-4 space-y-16 sm:px-6">
      <div v-for="(plan, mobilePlanIndex) in props.tiers" :key="mobilePlanIndex" class="border-t border-gray-200">
        <div :class="[plan.featured ? 'border-emerald-600' : 'border-transparent', '-mt-px pt-6 border-t-2 sm:w-1/2']">
          <h3 :class="[plan.featured ? 'text-emerald-600' : 'text-gray-900', 'text-sm font-bold']">{{ plan.name }}</h3>
          <p class="mt-2 text-sm text-gray-500">{{ plan.description }}</p>
        </div>
        <div v-for="tier in props.features">
          <h4 class="mt-10 text-sm font-bold text-gray-900">{{tier.title}}</h4>
          <div class="mt-6 relative">
            <!-- Fake card background -->
            <div aria-hidden="true" class="hidden absolute inset-0 pointer-events-none sm:block">
              <div :class="[plan.featured ? 'shadow-md' : 'shadow', 'absolute right-0 w-1/2 h-full bg-white rounded-lg']" />
            </div>

            <div :class="[plan.featured ? 'ring-2 ring-emerald-600 shadow-md' : 'ring-1 ring-black ring-opacity-5 shadow', 'relative py-3 px-4 bg-white rounded-lg sm:p-0 sm:bg-transparent sm:rounded-none sm:ring-0 sm:shadow-none']">
              <dl class="divide-y divide-gray-200">
                <div v-for="feature in tier.features" :key="feature.title" class="py-3 flex items-center justify-between sm:grid sm:grid-cols-2">
                  <dt class="pr-4 text-sm font-medium text-gray-600">{{ feature.title }}</dt>
                  <dd class="flex items-center justify-end sm:px-4 sm:justify-center">
                    <span v-if="typeof feature.tiers[mobilePlanIndex].value === 'string'" :class="[feature.tiers[mobilePlanIndex].featured ? 'text-emerald-600' : 'text-gray-900', 'text-sm font-medium']">{{ feature.tiers[mobilePlanIndex].value }}</span>
                    <template v-else>
                      <CheckIcon v-if="feature.tiers[mobilePlanIndex].value === true" class="mx-auto h-5 w-5 text-emerald-600" aria-hidden="true" />
                      <XIcon v-else class="mx-auto h-5 w-5 text-gray-400 opacity-50" aria-hidden="true" />
                      <span class="sr-only">{{ feature.tiers[mobilePlanIndex].value === true ? 'Yes' : 'No' }}</span>
                    </template>
                  </dd>
                </div>
              </dl>
            </div>

            <!-- Fake card border -->
            <div aria-hidden="true" class="hidden absolute inset-0 pointer-events-none sm:block">
              <div :class="[plan.featured ? 'ring-2 ring-emerald-600' : 'ring-1 ring-black ring-opacity-5', 'absolute right-0 w-1/2 h-full rounded-lg']" />
            </div>
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