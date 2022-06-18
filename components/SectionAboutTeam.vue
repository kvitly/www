<template>
  <div class="bg-white">
    <div class="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-16">
      <div class="space-y-12">
        <div class="space-y-5 sm:space-y-4 md:max-w-xl lg:max-w-3xl xl:max-w-none">
          <h2 class="text-3xl font-extrabold tracking-tight sm:text-4xl">Наша команда</h2>
          <p class="text-xl text-gray-500">Odio nisi, lectus dis nulla. Ultrices maecenas vitae rutrum dolor ultricies donec risus sodales. Tempus quis et.</p>
        </div>
        <ul role="list" class="space-y-12 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:grid-cols-4 lg:gap-x-8">
          <li v-for="person in people" :key="person.name">
            <div class="space-y-4">
              <div class="aspect-w-3 aspect-h-4">
                <img class="object-cover shadow-lg rounded-lg" :src="person.imageUrl" alt="" />
              </div>

              <div class="space-y-2">
                <div class="text-lg leading-6 font-medium space-y-1">
                  <h3>{{ person.name }}</h3>
                  <p class="text-emerald-600">{{ person.role }}</p>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
const people = [
  {
    name: 'Наталия Усова',
    role: 'Менеджер продукта',
    imageUrl: '/assets/kvitly-team-natalia.jpg',
  },
    {
    name: 'Ангелина Нехай',
    role: 'Поддержка пользователей',
    imageUrl: '/assets/kvitly-team-angelina.jpg',
  },
    {
    name: 'Инна Руденкова',
    role: 'Маркетинг и продвижение',
    imageUrl: '/assets/kvitly-team-inna.jpg',
  },
    {
    name: 'Егор Курьянович',
    role: 'Основатель',
    imageUrl: '/assets/kvitly-team-egor.jpg',
  },
]
</script>