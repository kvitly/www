<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div class="bg-white">
    <div class="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-20 lg:px-8">
      <div class="lg:grid lg:grid-cols-3 lg:gap-8">
        <div>
          <h2 class="text-3xl font-extrabold text-gray-900">Частые вопросы</h2>
          <p class="mt-4 text-lg text-gray-500">Что-то все еще осталось неотвеченным? <a href="#" class="font-medium text-emerald-600 hover:text-indigo-500">Пишите нам</a>, и мы уверены, всё прояснится.</p>
        </div>
        <div class="mt-12 lg:mt-0 lg:col-span-2">
          <dl class="space-y-12">
            <div v-for="faq in faqs" :key="faq.question">
              <dt class="text-lg leading-6 font-medium text-gray-900">
                {{ faq.question }}
              </dt>
              <dd class="mt-2 text-base text-gray-500">
                {{ faq.answer }}
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  </div>
</template>






<script setup>
const faqs = [
  {
    question: 'Сколько можно зарабатывать?',
    answer: '25% от каждого клиента всё время их подписки на наш сервис. Верхней границы нет, больше клиентов, которые долго живут с нами — больше выплат.',
  },
  {
    question: 'Как получать деньги?',
    answer: 'Пока мы можем выплачивать деньги только юридическим лицам (и ИП), зарегистрированным в Беларуси или России. Выплаты проводятся по агентскому договору по вашему запросу, но не чаще чем раз в месяц.',
  },
  {
    question: 'Как вы учитываете моих клиентов?',
    answer: 'Мы с вами постоянно на связи и отмечаем каждого приведенного вами клиента. Каждый месяц проверяем выплаты всех ваших клиентов и формируем сумму вашего вознаграждения.',
  },
  {
    question: 'Могу ли я оказывать клиентам дополнительные услуги?',
    answer: 'Да, конечно, это уже особенности ваших договоренностей с клиентами. Может быть вы оказываете услуги создания и развития сайта, или настройки контекстной рекламы или что-то еще, и это не касается нас.',
  },
]
</script>