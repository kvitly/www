<template>
    <div>
        <SectionHeroPage
            :label="page.label"
            :title="page.title"
            :description="page.desciption">
        </SectionHeroPage>

    </div>
</template>

<script setup>
    const page = {
        label: 'Тарифы',
        title: 'Заголовок страницы',
        desciption: 'Описание содержимого страницы с панчлайном в конце.'
    }
</script>