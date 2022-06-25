<template>
  <div class="bg-white font-light overflow-x-hidden">
    <header class="sticky top-0 z-50 bg-white shadow">
      <GlobalHeader />
    </header>
    <main class="relative">
      <NuxtPage/>
    </main>
    <footer>
      <GlobalFooter />
    </footer>
    <GlobalChat></GlobalChat>
  </div>
</template>

<script setup>
useHead({
  title: 'My App',
  base: 'www'
});

</script>