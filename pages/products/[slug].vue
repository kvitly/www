<template>
  <div>
    <SectionProductHero
      :title="products[$route.params.slug].hero.title"
      :description="products[$route.params.slug].hero.description"
      :image="products[$route.params.slug].hero.image"
    />
    <SectionProductDetail
      :title="products[$route.params.slug].title"
      :description="products[$route.params.slug].description"
      :features="products[$route.params.slug].features"
    />
    <SectionMainFeatures v-if="products[$route.params.slug].type === 'product'" />
    <SectionProductServices v-if="products[$route.params.slug].type === 'service'" />
    <SectionMainCta />
  </div>
</template>

<script setup>
import {
  PencilIcon,
  ViewGridIcon,
  SearchIcon,
  ChartBarIcon,
  TemplateIcon,
  DocumentDuplicateIcon,
  SpeakerphoneIcon,
  UsersIcon,
} from "@heroicons/vue/outline";

const products = {
  website: {
    type: 'product',
    hero: {
      title: ["Создайте сайт,", "развивайте бизнес"],
      description: "У нас есть все инструменты для легкого создания красивого и функционального сайта для бизнеса, продвижения в интернете, приема заявок и отслеживания эффективности.",
      image: {
        alt: "",
        src: "https://tailwindui.com/img/component-images/top-nav-with-multi-column-layout-screenshot.jpg",
      },
    },
    title: "Все для сайта в одном месте",
    description: "Всего за несколько минут вы сможете превратить любую идею в готовый продукт — создать страницу для продажи курсов, вебинаров или цифровых товаров.",
    features: [
      {
        title: "Простой и удобный конструктор сайтов",
        description: "Управляйте сайтом в визуальном редакторе, легко добавляйте и удаляйте стильные блоки (в нашей коллекции их более 50), меняйте цвета и изображения. Всё можно сделать самостоятельно, без программистов и дизайнеров.",
        featurelist: [
          {
            name: "Выбор шрифтов",
            description: "Выбирайте самые красивые шрифты из нашей коллекции или добавляйте свои.",
            icon: PencilIcon,
          },
          {
            name: "Выбор иконок",
            description: "Подберите уникальные иконки и сделайте сайт понятным для клиентов.",
            icon: ViewGridIcon,
          },
        ],
        image: {
          alt: "",
          src: "https://tailwindui.com/img/features/feature-example-1.png",
        },
      },
      {
        title: "Продвижение и отслеживание эффективности",
        description: "Помогите сайту стать видимым для поисковых систем, настраивайте ключевые слова для каждой страницы, следите за посещаемостью и анализируйте эффективность вашего сайта.",
        featurelist: [
          {
            name: "Поисковая оптимизация",
            description: "Возможности для SEO сделают сайт понятным поисковикам. Вас найдут в интернете!",
            icon: SearchIcon,
          },
          {
            name: "Встроенная аналитика",
            description: "Вам доступна вся информация по посещаемости сайта и откликам посетителей.",
            icon: ChartBarIcon,
          },
        ],
        image: {
          alt: "",
          src: "https://tailwindui.com/img/features/feature-example-1.png",
        },
      },
      {
        title: "Продвижение и отслеживание эффективности",
        description: "Помогите сайту стать видимым для поисковых систем, настраивайте ключевые слова для каждой страницы, следите за посещаемостью и анализируйте эффективность вашего сайта.",
        image: {
          alt: "",
          src: "https://tailwindui.com/img/features/feature-example-1.png",
        },
      },
    ],
  },
  landing: {
    type: 'product',
    hero: {
      title: ["Гибкий конструктор", "продающих страниц"],
      description: "Уверенно превращайте посетителей в покупателей на продающих лендингах, которые можно легко собрать самому.",
      image: {
        alt: "",
        src: "https://tailwindui.com/img/component-images/top-nav-with-multi-column-layout-screenshot.jpg",
      },
    },
    title: "Сервис, где есть всё, что надо",
    description: "Превращайте идею в готовый продукт — создавайте страницы для продаж услуг, курсов, вебинаров, цифровых товаров или чего-то другого. Привлекайте клиентов через рассылки, спасибо-страницы, живые чаты и другие возможности общения с вами.",
    features: [
      {
        title: "Стройте страницы с удовольствием",
        description: "В нашей коллекции десятки блоков для разной информации: преимущества, услуги, формы, призывы к действию, команда, карты — всё, чтобы сделать сочную страницу о товарах или услугах, которые сразу захочется купить.",
        featurelist: [
          {
            name: "Визуальный редактор",
            description: "Перетаскивайте блоки, редактируйте и получайте сайт — это интересно.",
            icon: TemplateIcon,
          },
          {
            name: "Тематические шаблоны",
            description: "Легко начать с готового шаблона, лучше всего подходящего вашему делу.",
            icon: DocumentDuplicateIcon,
          },
        ],
        image: {
          alt: "",
          src: "https://tailwindui.com/img/features/feature-example-1.png",
        },
      },
      {
        title: "Страницы продают, пока вы отдыхаете",
        description: "Задача лендигов — конвертировать, и страницы на 🌱 kvitly отлично с этим справляются. Они хорошо смотрятся на экранах разных размеров, в конструкторе можно построить любую форму и собирать нужные данные, автоматизации помогут общаться с покупателями и сразу отправлять лид-магниты или оплаченные цифровые товары.",
        featurelist: [
          {
            name: "Эффективный маркетинг",
            description: "Выстраивайте работающий маркетинг с нашей аналитикой и доступными интеграциями.",
            icon: SpeakerphoneIcon,
          },
          {
            name: "CRM-система",
            description: "Все заказы собираются в одном разделе, где их просто отслеживать и обрабатывать.",
            icon: UsersIcon,
          },
        ],
        image: {
          alt: "",
          src: "https://tailwindui.com/img/features/feature-example-1.png",
        },
      },
      {
        title: "Прием платежей онлайн",
        description: "Легко подключайте возможность оплаты ваших услуг онлайн с нашими встроенными интеграциями с банками и платежными сервисами.",
        image: {
          alt: "",
          src: "https://tailwindui.com/img/features/feature-example-1.png",
        },
      },
    ],
  },
  ecommerce: {
    type: 'product',
    hero: {
      title: ["Продавайте в своем", "интернет-магазине"],
      description: "С нами можно собрать магазин в простом конструкторе, управлять каталогом, привлекать клиентов и принимать оплату — словом, продавать в интернете легко и с удовольствием.",
      image: {
        alt: "",
        src: "https://tailwindui.com/img/component-images/top-nav-with-multi-column-layout-screenshot.jpg",
      },
    },
    title: "Все для магазина в одном месте",
    description: "Понятная навигация, информация о товарах, корзина, онлайн-оплата — простое управление магазином для вас и приятный опыт покупки для ваших клиентов.",
    features: [
      {
        title: "Каталог — душа вашего магазина",
        description: "Легко добавляйте товары с изображениями, редактируйте их, распределяйте по категориям, добавляйте описания и управляйте способами доставки. У каждого товара будет своя страница, где ваши покупатели узнают все, что их интересует.",
        featurelist: [
          {
            name: "Варианты товаров",
            description: "Размеры, цвета, вес — вы можете добавлять разные модификации одного товара.",
            icon: TemplateIcon,
          },
          {
            name: "Импорт и экспорт товаров",
            description: "Удобный способ для массового управления всеми параметрами всех товаров.",
            icon: DocumentDuplicateIcon,
          },
        ],
        image: {
          alt: "",
          src: "https://tailwindui.com/img/features/feature-example-1.png",
        },
      },
      {
        title: "Удобное отслеживание заказов",
        description: "Все заказы собираются в одном месте, и вы сможете всегда держать руку на пульсе своего бизнеса: получайте уведомления, следите за статусами, делайте дополнительные заметки. Не упускайте ни одного клиента!",
        image: {
          alt: "",
          src: "https://tailwindui.com/img/features/feature-example-1.png",
        },
      },
      {
        title: "Прием онлайн-платежей в 2 клика",
        description: "Подключите прием платежей онлайн с любым интегрированным с 🌱kvitly платежным сервисом и дайте вашим клиентам возможность оплачивать заказ сразу в момент создания. Максимальное удобство для вас и ваших покупателей.",
        image: {
          alt: "",
          src: "https://tailwindui.com/img/features/feature-example-1.png",
        },
      },
    ],
  },
  payments: {
    type: 'service',
    hero: {
      title: ["Прием платежей", "онлайн"],
      description: "Готовые интеграции с банками и платежными сервисами. Подключить онлайн оплату к сайту никогда не было так просто.",
      image: {
        alt: "",
        src: "https://tailwindui.com/img/component-images/top-nav-with-multi-column-layout-screenshot.jpg",
      },
    },
    title: "Онлайн оплаты проще, чем кажется",
    description: "Получайте платежи через самые лучшие платежные сервисы. Это безопасно, легально и уже интегрировано в прием заказов через сайты на 🌱kvitly.",
    features: [
      {
        title: "Простое подключение",
        description: "Добавить платежный сервис на любой сайт, сделанный на Kvitly, совсем не сложно: найдите в наших расширениях выбранный сервис, введите нужные параметры, — готово!",
        image: {
          alt: "",
          src: "https://tailwindui.com/img/features/feature-example-1.png",
        },
      },
      {
        title: "Не беспокойтесь о безопасности",
        description: "Мы направляем ваших клиентов на защищенные страницы платежных сервисов через безопасное соединение и передаем только необходимые данные в зашифрованном виде. Вы можете быть спокойны.",
        image: {
          alt: "",
          src: "https://tailwindui.com/img/features/feature-example-1.png",
        },
      },
      {
        title: "Никаких дополнительных комиссий",
        description: "В отличие от некоторых других платформ, мы не берем проценты от ваших платежей. Все деньги приходят на ваш счет напрямую.",
        image: {
          alt: "",
          src: "https://tailwindui.com/img/features/feature-example-1.png",
        },
      },
      {
        title: "Узнавайте об оплате",
        description: "Получайте оповещения о платежах, поступивших с вашего сайта, самым удобным способом: на почту, по SMS или в мессенджеры.",
        image: {
          alt: "",
          src: "https://tailwindui.com/img/features/feature-example-1.png",
        },
      },
    ],
  },
  crm: {
    type: 'service',
    hero: {
      title: ["CRM для системной", "работы с клиентами"],
      description: "Сервис, который помогает строить отношения с каждым клиентом и формировать полноценный процесс продаж.",
      image: {
        alt: "",
        src: "https://tailwindui.com/img/component-images/top-nav-with-multi-column-layout-screenshot.jpg",
      },
    },
    title: "Используйте все возможности",
    description: "С нами можно следить за сделками на всех этапах продажи, сохранять важные детали о каждой сделке или партнере и строить систему продаж, которая работает на вас.",
    features: [
      {
        title: "Гибкие воронки продаж",
        description: "Настройте все этапы, которые проходит заказ вашего клиента от его оформления до полного выполнения, и вы сможете следить, на каком этапе находится каждая заявка. Автоматизируйте все шаги и экономьте свое время.",
        image: {
          alt: "",
          src: "https://tailwindui.com/img/features/feature-example-1.png",
        },
      },
      {
        title: "Принимайте заказы и управляйте ими",
        description: "Все заявки с вашего сайта попадают в один раздел, где можно добавлять метки, видеть оплату, менять статусы, писать комментарии и многое другое.",
        image: {
          alt: "",
          src: "https://tailwindui.com/img/features/feature-example-1.png",
        },
      },
      {
        title: "Простое управление контактами",
        description: "Клиенты — главная ценность вашего бизнеса. Собирайте информацию о них, расставляйте метки, сегментируйте по ключевым признакам, добавляйте специальные фильтры. С Kvitly легко хранить и управлять вашими контактами, а при необходимости их можно импортировать.",
        image: {
          alt: "",
          src: "https://tailwindui.com/img/features/feature-example-1.png",
        },
      },
    ],
  },
  email: {
    type: 'service',
    hero: {
      title: ["Говорите с клиентами", "через письма"],
      description: "Отправляйте письма, которые нужны вашим клиентам.",
      image: {
        alt: "",
        src: "https://tailwindui.com/img/component-images/top-nav-with-multi-column-layout-screenshot.jpg",
      },
    },
    title: "Инструменты для работы с письмами",
    description: "Мы не сервис для отправки писем, но у нас есть всё, чтобы легко делать строить все e-mail коммуникации вашего бизнеса.",
    features: [
      {
        title: "Отправка писем по событиям",
        description: "Оправляйте своим клиентам письма после создания заказа или оплаты. Расскажите, что будет происходить дальше, рекомендуйте другие товары или даже отправляйте ссылки на документы или видео-материалы.",
        image: {
          alt: "",
          src: "https://tailwindui.com/img/features/feature-example-1.png",
        },
      },
      {
        title: "Простой сбор контактных данных",
        description: "Собирайте контакты ваших клиентов, выгружайте нужную информацию и используйте как списки рассылок в системах массовых отправок писем. Отправляйте специальные предложения и полезную информацию — все, что может порадовать и удержать вашего клиента.",
        image: {
          alt: "",
          src: "https://tailwindui.com/img/features/feature-example-1.png",
        },
      },
      {
        title: "Интеграции с системами массовых рассылок",
        description: "Автоматически переносите контактные данные ваших клиентов в MailChimp или Unisender, формируйте списки рассылок и в пару кликов отправляйте красивые продающие или информационные письма.",
        image: {
          alt: "",
          src: "https://tailwindui.com/img/features/feature-example-1.png",
        },
      },
    ],
  },
};
</script>
