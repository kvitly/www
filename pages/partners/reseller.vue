<template>
  <div>
    <SectionHeroPage
      :label="page.label"
      :title="page.title"
      :description="page.desciption"
    />
    <SectionResellerFeatures />
    <SectionResellerWho />
    <SectionResellerFaq />
    <SectionResellerCta />
  </div>
</template>

<script setup>
    const page = {
        label: 'Партнерская программа',
        title: 'Растите вместе с 🌱kvitly',
        desciption: 'Создаёте сайты на нашей платформе своим клиентам и получайте процент от каждой их оплаты.'
    }
</script>


