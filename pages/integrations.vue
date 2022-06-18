<template>
    <div>
        <SectionHeroPage
            :label="page.label"
            :title="page.title"
            :description="page.desciption">
        </SectionHeroPage>
        <SectionIntegrations></SectionIntegrations>
    </div>
</template>

<script setup>
    const page = {
        label: 'Интеграции',
        title: 'Соединяем все со всем',
        desciption: 'Описание содержимого страницы с панчлайном в конце.'
    }
</script>