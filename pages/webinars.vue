<template>
  <div>
    <SectionHeroPage
      :label="page.label"
      :title="page.title"
      :description="page.description"
    />
    <div class="py-8 relative bg-white">
      <SectionWebinarsList
        :title="webinars.kvitly.title"
        :description="webinars.kvitly.description"
        :videos="webinars.kvitly.videos"
      />
      <SectionWebinarsList
        :title="webinars.marketing.title"
        :description="webinars.marketing.description"
        :videos="webinars.marketing.videos"
      />
    </div>
    <SectionWebinarsCta />
  </div>
</template>

<script setup>
    const page = {
        label: 'Вебинары',
        title: 'Расцветайте быстрее с 🌱kvitly',
        description: 'Мы подготовили серию видеоуроков, чтобы было проще сориентироваться в нашем сервисе и в бизнесе.'
    }

    const webinars = {
      kvitly: {
        title: 'Добро пожаловать!',
        description: 'Несколько вебинаров о работе с 🌱kvitly: поговорим о том, как сделать сайт, из каких элементов он состоит и как достигать своих целей сайтом.',
        videos: [
          {
            url: 'https://www.youtube.com/watch?v=8brT1KQuOYs',
            imageUrl: '/assets/webinars/kvitly-website.png',
            name: 'Елизавета Козицкая',
            title: 'Создаем сайт в конструкторе за час',
            description: 'В этом видео вы увидите, как можно собрать сайт на конструкторе меньше, чем за час и познакомитесь с функционалом личного кабинета клиента и редактором сайтов. Это видео – запись вебинара от 29.05.2020 года, и некоторые интерфейсы сильно изменились, но видео поможет понять логику работы с сервисом.'
          },
          {
            url: 'https://www.youtube.com/watch?v=pAhTe0Ucd2I',
            imageUrl: '/assets/webinars/kvitly-prepare-to-website.png',
            name: 'Елизавета Козицкая',
            title: 'Подготовка к созданию сайта',
            description: 'Запись вебинара для социальных проектов на тему "Подготовка к созданию сайта: что важно знать перед созданием сайта; структура сайта; правила подготовки контента для сайта"'
          }
        ],
      },
      marketing: {
        title: 'О развитии бизнеса',
        description: 'Серия вебинаров о разных аспектах ведения бизнеса: особенности работы с социальными сетями, продвижение, развитие и мотивация команды.',
        videos: [
          {
            url: 'https://www.youtube.com/watch?v=ZYgeGALxmtQ',
            imageUrl: '/assets/webinars/growth-instagram-visual.png',
            name: 'Жанна Антонова',
            title: 'Продающий визуал в Instagram',
            description: 'Обсуждаем, приглашать ли фотографа или разбираться самому, как организовать съёмку для бренда, компоновку фото в профиле. Это видео – запись вебинара от 09.07.2020 года.',
            speaker: 'Жанна Антонова — коммерческий фотограф, дизайнер.',
          },
          {
            url: 'https://www.youtube.com/watch?v=BDDevvKUSuw',
            imageUrl: '/assets/webinars/growth-personal-brand.png',
            name: 'Даша Гензер',
            title: 'Создаем сайт в конструкторе за час',
            description: 'Поговорим о том, как стать достойным специалистом, что такое позиционирование и уникальность бренда личности, какие есть этапы формирования своего бренда.',
            speaker: 'Даша Гензер — маркетолог, бренд-менеджер, бизнес-коуч.',
          },
          {
            url: 'https://www.youtube.com/watch?v=uMnejas6QOQ',
            imageUrl: '/assets/webinars/growth-seo-basics.png',
            name: 'Станислав Демиденко',
            title: 'Основы поискового продвижения',
            description: 'Темы этого видео: что такое SEO, принципы "продающего" сайта, как работают поисковые системы (сканирование, индексирование, ранжирование), плюсы и минусы SEO.',
            speaker: 'Станислав Демиденко — основатель и преподаватель в «Школе SEO»',
          },
          {
            url: 'https://www.youtube.com/watch?v=ZCVbONb4RTw',
            imageUrl: '/assets/webinars/growth-objections.png',
            name: 'Кристина Середа',
            title: 'Как закрывать возражения клиентов',
            description: 'Тут можно узнать о психологии возражений и основных возражениях, а также получить готовые решения для их отработки.',
            speaker: 'Кристина Середа — руководитель филиала в оптовой транснациональной компании в сфере сельского хозяйства.',
          }
        ],
      }
    };

</script>