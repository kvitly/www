<template>
  <div>
    <SectionHeroPage
      :label="page.label"
      :title="page.title"
      :description="page.desciption" 
    />
    <SectionPlansPlans />
    <SectionMainCta />
  </div>
</template>

<script setup>
    const page = {
        label: 'Тарифы',
        title: 'План для каждого бизнеса',
        desciption: 'Выбирайте то, что подходит именно вашим задачам, и запускайте свой проект легко и быстро.'
    }
</script>