<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div class="py-16  overflow-hidden lg:py-24">
    <div class="relative max-w-xl mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-7xl">

      <div class="relative">
        <h2 class="text-center text-3xl leading-8 font-bold tracking-tight text-gray-900 sm:text-4xl">
        Возможности для запуска дела мечты
        </h2>
        <p class="mt-4 max-w-3xl mx-auto text-center text-xl text-gray-500">
          На каждом тарифе 🌱kvitly можно легко запустить сайт и начать принимать заявки. Дальше — больше: продвигайтесь, подключайте онлайн платежи, автоматизируйте рутину и всегда будьте в курсе всего, что у вас происходит.
        </p>
      </div>

      <FeatureLeft 
        :title="products.website.title"
        :description="products.website.description"
        :checklist="products.website.checklist"
        :button="products.website.button"
        :image="products.website.image">
      </FeatureLeft>

      <FeatureRight 
        :title="products.landing.title"
        :description="products.landing.description"
        :checklist="products.landing.checklist"
        :button="products.landing.button"
        :image="products.landing.image">
      </FeatureRight>

      <FeatureLeft 
        :title="products.ecommerce.title"
        :description="products.ecommerce.description"
        :checklist="products.ecommerce.checklist"
        :button="products.ecommerce.button"
        :image="products.ecommerce.image">
      </FeatureLeft>

      <FeatureRight 
        :title="products.payments.title"
        :description="products.payments.description"
        :checklist="products.payments.checklist"
        :button="products.payments.button"
        :image="products.payments.image">
      </FeatureRight>

      <FeatureLeft 
        :title="products.email.title"
        :description="products.email.description"
        :checklist="products.email.checklist"
        :button="products.email.button"
        :image="products.email.image">
      </FeatureLeft>

      <FeatureRight 
        :title="products.crm.title"
        :description="products.crm.description"
        :checklist="products.crm.checklist"
        :button="products.crm.button"
        :image="products.crm.image">
      </FeatureRight>

      <FeatureLeft 
        :title="products.integrations.title"
        :description="products.integrations.description"
        :checklist="products.integrations.checklist"
        :button="products.integrations.button"
        :image="products.integrations.image">
      </FeatureLeft>

    </div>
  </div>
</template>

<script setup>
import { AnnotationIcon, GlobeAltIcon, LightningBoltIcon, MailIcon, ScaleIcon, CheckIcon } from '@heroicons/vue/outline'

const products = {
  website: {
    title: 'Сайт для вашего бизнеса',
    description: 'Можно начать с подходящего шаблона и адаптировать его под себя в визуальном конструкторе. За пару минут вы можете опубликовать красивый сайт, который расскажет о вашем бизнесе и поможет найти партнеров и клиентов.',
    checklist:[
      {
        name: 'Визуальный редактор',
        description: 'Удобное управление дизайном и контентом вашего сайта.',
      },
      {
        name: 'Встроенная аналитика',
        description: 'Данные о посещаемости и конверсиях собираются автоматически.',
      },
      {
        name: 'Конструктор форм',
        description: 'Понятный конструктор форм для приема заявок с сайта.',
      },
      {
        name: 'Поисковая оптимизация',
        description: 'SEO-настройки для каждой страницы, редиректы, фавиконки и многое другое.',
      },
    ],
    button: {
      title: 'Подробнее о создании сайта',
      href: '/products/website',
    },
    image: {
      alt: '',
      src: '/assets/main-website.png'
    }
  },
  landing: {
    title: 'Продающие лендинги для услуг',
    description: 'Соберите одностраничный сайт из блоков с нуля или на основе шаблона, принимайте заявки и продавайте свои услуги. Со встроенной аналитикой вы всегда будете знать эффективность всех страниц.',
    checklist:[
      {
        name: 'Дизайн-редактор',
        description: 'Страницы легко собираются из готовых блоков и будут отлично выглядеть.',
      },
      {
        name: 'Онлайн-платежи',
        description: 'Подключайте онлайн оплату в 2 клика и получайте уже оплаченные заказы.',
      },
      {
        name: 'Сбор заявок',
        description: 'Разные варианты размещения форм заказа на странице помогут собрать как можно больше лидов.',
      },
    ],
    button: {
      title: 'Подробнее о возможностях лендингов',
      href: '/products/landing',
    },
    image: {
      alt: '',
      src: '/assets/main-landing.png'
    }
  },
  ecommerce: {
    title: 'Онлайн магазин за 5 минут',
    description: 'Добавьте товары с описаниями и фотографиями, и мы автоматически сгенерируем полноценный каталог. Тут можно легко управлять товарами, способами доставки и оплаты и следить за заказами.',
    checklist:[
      {
        name: 'Каталог товаров',
        description: 'Простое управление статусами, наличием, описанием и стоимостью товаров.',
      },
      {
        name: 'Варианты товаров',
        description: 'Продаете разные вариации одного товара? Это можно легко настроить.',
      },
      {
        name: 'Разные способы оплаты',
        description: 'Предлагайте вашим клиентам оплачивать заказы любыми удобными им способами.',
      },
      {
        name: 'Управление заказами',
        description: 'Все заказы собраны в одном месте и вы в любой момент знаете их статус.',
      },
    ],
    button: {
      title: 'Подробнее о конструкторе магазинов',
      href: '/products/ecommerce',
    },
    image: {
      alt: '',
      src: '/assets/main-ecommerce.png'
    }
  },
  payments: {
    title: 'Получать оплату онлайн — это просто',
    description: 'Подключайте платежные системы, и ваши покупатели смогут оплачивать покупки онлайн легко и безопасно. Выставление счетов и получение оплаты стало совсем простым!',
    checklist:[
      {
        name: 'Никакой комиссии',
        description: 'Мы не берем комиссию с платежей ваших клиентов и никогда не будем это делать.',
      },
      {
        name: 'Безопасность',
        description: 'Мы направляем ваших клиентов на безопасные страницы платежных систем и ничего не храним у себя.',
      },
    ],
    button: {
      title: 'Подробнее о приеме платежей',
      href: '/products/payments',
    },
    image: {
      alt: '',
      src: 'https://tailwindui.com/img/features/feature-example-1.png'
    }
  },
  email: {
    title: 'Автоматическая отправка писем',
    description: 'Создавайте красивые письма и настраивайте автоматические отправления для разных событий, например при оплате. Используйте уже готовые цепочки сообщений или стройте свои сценарии. Делайте массовые рассылки, которые дочитывают до конца.',
    checklist:[
      {
        name: 'Системные письма',
        description: 'Держте ваших клиентов в курсе того, что происходит с их заказом.',
      },
      {
        name: 'Сервисы рассылок',
        description: 'Формируйте контакт-листы для отправки массовых рассылок из сторонних сервисов.',
      },
    ],
    button: {
      title: 'Подробнее о рассылках',
      href: '/products/email',
    },
    image: {
      alt: '',
      src: 'https://tailwindui.com/img/features/feature-example-1.png'
    }
  },
  crm: {
    title: 'Общение с клиентами',
    description: 'Все ваши заказы попадут прямиком в удобную CRM-систему, где можно отслеживать их статус, делать заметки или помечать тегами. Вы не упустите ни одного клиента.',
    checklist:[
      {
        name: 'Управление заказами',
        description: 'Все заказы удобно просматривать, редактировать, и вы всегда их актуальное состояние.',
      },
      {
        name: 'Работа с контактами',
        description: 'Формируйте и выгружайте списки контактов для массовых действий.',
      },
    ],
    button: {
      title: 'Подробнее о CRM-системе',
      href: '/products/customer-relationship',
    },
    image: {
      alt: '',
      src: '/assets/main-crm.png'
    }
  },
  integrations: {
    title: 'Готовые решения для любых нужд',
    description: 'Не хватает встроенных возможностей? Уже используете какой-то другой сервис в своих процессах? Не проблема, скорее всего мы уже с ним интегрировались! К сайтам на 🌱kvitly можно подключить десятки других сервисов: Google документы, живой чат, попапы и многое другое. Используйте все возможности, чтобы сделать то, что надо именно вам.',
    checklist:[],
    button: {
      title: 'Подробнее об интеграциях',
      href: '/products/integrations',
    },
    image: {
      alt: '',
      src: 'https://tailwindui.com/img/features/feature-example-1.png'
    }
  },
};
</script>