<template>
    <div>
        <SectionHeroPage
            :label="page.label"
            :title="page.title"
            :description="page.desciption">
        </SectionHeroPage>
        <SectionAboutLeading></SectionAboutLeading>
        <SectionAboutStory></SectionAboutStory>
        <SectionAboutTeam></SectionAboutTeam>
        <SectionAboutCallout></SectionAboutCallout>
        <SectionAboutContact></SectionAboutContact>
        <SectionAboutOffices></SectionAboutOffices>
    </div>
</template>

<script setup>
    const page = {
        label: 'О нас',
        title: 'Мы — 🌱kvitly',
        desciption: 'Мы растем вместе с прекрасными историями бизнесов, которые развиваются на нашей платформе.'
    }
</script>