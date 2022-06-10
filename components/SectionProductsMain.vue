<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div class="py-16  overflow-hidden lg:py-24">
    <div class="relative max-w-xl mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-7xl">

      <div class="relative">
        <h2 class="text-center text-3xl leading-8 font-bold tracking-tight text-gray-900 sm:text-4xl">
        Возможности для вашего бизнеса
        </h2>
        <p class="mt-4 max-w-3xl mx-auto text-center text-xl text-gray-500">
          На каждом тарифе 🌱kvitly можно легко сделать сайт и начать принимать заявки. Дальше — больше: продвигайте себя, подключайте онлайн платежи, автоматизируйте рутину и всегда будьте в курсе происходящего.
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
    title: 'Просто текст на три слова',
    description: 'Можно начать с подходящего шаблона и адаптировать его под себя в визуальном конструкторе. За пару минут вы можете опубликовать красивый сайт, который расскажет о вашем бизнесе и поможет найти партнеров и клиентов.',
    checklist:[
      {
        name: 'Визуальный редактор',
        description: 'Самый лучший на рынке визуальные редакторов.',
      },
      {
        name: 'Встроенная аналитика',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
      },
      {
        name: 'Конструктор форм',
        description: 'Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
      },
      {
        name: 'Поисковая оптимизация',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
      },
    ],
    button: {
      title: 'Подробнее о конструкторе',
      href: '/products/website',
    },
    image: {
      alt: '',
      src: 'https://tailwindui.com/img/features/feature-example-1.png'
    }
  },
  landing: {
    title: 'Стройте продающие страницы для продуктов и услуг',
    description: 'Соберите одностраничный сайт самостоятельно из готовых блоков или на основе шаблона, принимайте заявки и продавайте свои услуги уже сейчас. С встроенными системами аналитики вы всегда будете в курсе эффективности своих страниц.',
    checklist:[
      {
        name: 'Визуальный редактор',
        description: 'Самый лучший на рынке визуальные редакторов.',
      },
      {
        name: 'Встроенная аналитика',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
      },
      {
        name: 'Конструктор форм',
        description: 'Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
      },
      {
        name: 'Поисковая оптимизация',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
      },
    ],
    button: {
      title: 'Подробнее о конструкторе',
      href: '/products/landing',
    },
    image: {
      alt: '',
      src: 'https://tailwindui.com/img/features/feature-example-1.png'
    }
  },
  ecommerce: {
    title: 'Онлайн магазин за 5 минут',
    description: 'Добавьте товары с описаниями и фотографиями, и мы автоматически сгенерируем полноценный каталог. Вы можете легко управлять товарами, способами доставки и оплаты и следить за статусами заказов.',
    checklist:[
      {
        name: 'Каталог товаров',
        description: 'Самый лучший на рынке визуальные редакторов.',
      },
      {
        name: 'Встроенная аналитика',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
      },
      {
        name: 'Прием платежей',
        description: 'Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
      },
      {
        name: 'Поисковая оптимизация',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
      },
    ],
    button: {
      title: 'Подробнее о конструкторе',
      href: '/products/ecommerce',
    },
    image: {
      alt: '',
      src: 'https://tailwindui.com/img/features/feature-example-1.png'
    }
  },
  payments: {
    title: 'Получать оплату онлайн — это просто',
    description: 'Подключайте разные платежные системы, и ваши покупатели смогут оплачивать покупки онлайн легко и безопасно. Выставление счетов и получение оплаты стало совсем простым: заключайте договор с выбранным платежным сервисом и включайте платежи в настройках вашего сайта.',
    checklist:[
      {
        name: 'Каталог товаров',
        description: 'Самый лучший на рынке визуальные редакторов.',
      },
      {
        name: 'Встроенная аналитика',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
      },
    ],
    button: {
      title: 'Подробнее о платежах',
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
        name: 'Каталог товаров',
        description: 'Самый лучший на рынке визуальные редакторов.',
      },
      {
        name: 'Встроенная аналитика',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
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
    description: 'Принимайте заказы, которые попадут прямиком в удобную CRM-систему, где можно отслеживать их статус, делать заметки или помечать тегами. С нами вы не упустите ни одного клиента.',
    checklist:[
      {
        name: 'Каталог товаров',
        description: 'Самый лучший на рынке визуальные редакторов.',
      },
      {
        name: 'Встроенная аналитика',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
      },
    ],
    button: {
      title: 'Подробнее о рассылках',
      href: '/products/customer-relationship',
    },
    image: {
      alt: '',
      src: 'https://tailwindui.com/img/features/feature-example-1.png'
    }
  },
  integrations: {
    title: 'Готовые решения для любых нужд',
    description: 'Не хватает встроенных возможностей? Уже используете какой-то другой сервис в своих процессах? Не проблема, скорее всего мы уже с ним интегрировались! К сайтам на 🌱kvitly можно подключить десятки других сервисов: Google документы, живой чат, попапы и многое другое. Используйте все возможности, чтобы сделать то, что надо именно вам.',
    checklist:[],
    button: {
      title: 'Подробнее о рассылках',
      href: '/products/integrations',
    },
    image: {
      alt: '',
      src: 'https://tailwindui.com/img/features/feature-example-1.png'
    }
  },
};
</script>