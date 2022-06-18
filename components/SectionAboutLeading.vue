<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div class="relative  py-16 sm:py-24">
    <div class="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:gap-24 lg:items-start">
      <div class="relative sm:py-16 lg:py-0">
        <div aria-hidden="true" class="hidden sm:block lg:absolute lg:inset-y-0 lg:right-0 lg:w-screen">
          <div class="absolute inset-y-0 right-1/2 w-full bg-gray-50 rounded-r-3xl lg:right-72" />
          <svg class="absolute top-8 left-1/2 -ml-3 lg:-right-8 lg:left-auto lg:top-12" width="404" height="392" fill="none" viewBox="0 0 404 392">
            <defs>
              <pattern id="02f20b47-fd69-4224-a62a-4c9de5c763f7" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor" />
              </pattern>
            </defs>
            <rect width="404" height="392" fill="url(#02f20b47-fd69-4224-a62a-4c9de5c763f7)" />
          </svg>
        </div>
        <div class="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0 lg:max-w-none lg:py-20">
          <!-- Testimonial card-->
          <div class="relative pt-96 pb-10 rounded-2xl shadow-xl overflow-hidden">
            <img class="absolute inset-0 h-full w-full object-cover object-top" src="~/assets/kvitly-kuryanovich.jpg" alt="" />
            <div class="absolute inset-0 bg-emerald-500 mix-blend-multiply" />
            <div class="absolute inset-0 bg-gradient-to-t from-emerald-600 via-emerald-600 opacity-90" />
            <div class="relative px-8">

              <blockquote class="mt-8">
                <div class="relative text-lg font-medium text-white md:flex-grow">
                  <svg class="absolute top-0 left-0 transform -translate-x-3 -translate-y-2 h-8 w-8 text-emerald-400" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
                    <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                  </svg>
                  <p class="relative pl-6">
                    Мы стоим платформу, которая помогает малому бизнесу цвести. Мы берем на себя всю рутину и автоматизацию, 
                    чтобы предприниматели могли заниматься своим делом, а не настраивать неочевидные вещи.
                  </p>
                </div>

                <footer class="mt-4  pl-6">
                  <p class="text-base font-semibold text-emerald-200">Егор Курьянович, основатель 🌱kvitly</p>
                </footer>
              </blockquote>
            </div>
          </div>
        </div>
      </div>

      <div class="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0">
        <!-- Content area -->
        <div class="pt-12 sm:pt-16 lg:pt-20">
          <h2 class="text-3xl text-gray-900 font-extrabold tracking-tight sm:text-4xl">Наша история</h2>
          <div class="mt-6 text-gray-500 space-y-6">
            <p class="text-lg">
                Привет! Я — Егор Курьянович, основатель 🌱kvitly. Я хочу рассказать вам  о том,
                что стоит за нашим продуктом и почему мы делаем его именно таким: функциональным,
                гибким и душевным.
            </p>
            <p class="text-base leading-7">
                Всё началось в далеком 2014 году, когда конструкторов сайтов еще не было, 
                а у меня за плечами был опыт разных крупных веб-проектов. Нащупать нишу было не сложно: 
                я много работал с сайтами и в какой-то момент понял, что технически каждый сайт состоит 
                из более-менее похожих блоков, а смысл ему придает содержание. 
                
            </p>
            <p class="text-base leading-7">Так появилась мысль создать конструктор, чтобы каждый мог легко самостоятельно собрать 
                сайт и рассказать о себе так, как хочет. И мы это сделали!</p>
          </div>
        </div>

        <!-- Stats section -->
        <div class="mt-10">
          <dl class="grid grid-cols-2 gap-x-4 gap-y-8">
            <div v-for="stat in stats" :key="stat.label" class="border-t-2 border-gray-100 pt-6">
              <dt class="text-base font-medium text-gray-500">{{ stat.label }}</dt>
              <dd class="text-3xl font-extrabold tracking-tight text-gray-900">{{ stat.value }}</dd>
            </div>
          </dl>
          <div class="mt-10">
            <a href="https://staronka.by/blog/todays-the-day/" target="_blank" class="text-base font-medium text-emerald-600"> Вот как все начиналось в 2014 году <span aria-hidden="true">&rarr;</span> </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const stats = [
  { label: 'Основан', value: '2014' },
  { label: 'Команда', value: '4 человека' },
  { label: 'Клиенты', value: '400+' },
  { label: 'Регионы', value: '3 страны' },
]
</script>