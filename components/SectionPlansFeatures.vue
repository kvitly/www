<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div class="lg:pt-24">
    <SectionPlansFeaturesMobile
      :tiers="props.tiers"
      :features="props.features">
    </SectionPlansFeaturesMobile>
    <SectionPlansFeaturesDesktop
      v-for="(feature, index) in props.features"
      :title="feature.title"
      :first="index === 0"
      :tiers="props.tiers"
      :features="feature.features">
    </SectionPlansFeaturesDesktop>
  </div>
</template>

<script setup>
  const props = defineProps(["tiers", "features"]);
</script>