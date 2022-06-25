/* eslint-disable vue/max-attributes-per-line */
<template>
  <Head>
    <!-- Фавиконки в наши дни — это большое дело. Каждая платформа требует свой формат. Вы посмотрите сколько я их наделал! -->
    <Link rel="apple-touch-icon" sizes="180x180" href="/assets/favicon/apple-touch-icon.png" />
    <Link rel="icon" type="image/png" href="/assets/favicon/favicon-32x32.png" sizes="32x32" />
    <Link rel="icon" type="image/png" href="/assets/favicon/favicon-16x16.png" sizes="16x16" />
    <Link rel="manifest" href="/assets/favicon/manifest.json" />
    <Link rel="mask-icon" href="/assets/favicon/safari-pinned-tab.svg" color="#1c7ec0" />
    <Link rel="shortcut icon" href="/assets/favicon/favicon.ico" />
    <Meta name="msapplication-config" content="/assets/favicon/browserconfig.xml" />
    <Meta name="theme-color" content="#1c7ec0" />
  </Head>
  <div class="bg-white font-light overflow-x-hidden">
    <header class="sticky top-0 z-50 bg-white shadow">
      <GlobalHeader />
    </header>
    <main class="relative">
      <NuxtPage />
    </main>
    <footer>
      <GlobalFooter />
    </footer>
    <GlobalChat />
  </div>
</template>

<script setup>
  useHead({
    title: 'Сервис для запуска и развития бизнеса 🌱kvitly ',
    viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
    charset: 'utf-8',
  });
</script>