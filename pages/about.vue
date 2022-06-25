<template>
  <div>
    <SectionHeroPage
      :label="page.label"
      :title="page.title"
      :description="page.desciption"
    />
    <SectionAboutLeading />
    <SectionAboutStory />
    <SectionAboutTeam />
    <SectionAboutCallout />
    <SectionAboutContact />
    <SectionAboutOffices />
  </div>
</template>

<script setup>
  const page = {
    label: 'О нас',
    title: 'Мы — 🌱kvitly',
    desciption: 'Мы растем вместе с прекрасными историями бизнесов, которые развиваются на нашей платформе.'
  }

  useHead({
    title: 'О нас. Команда 🌱kvitly',
    meta: [{
      name: 'description',
      content: 'Мы растем вместе с нашими прекрасными клиентами, которые развивают свой бизнес с сервисами 🌱kvitly'
    }]
  })
</script>