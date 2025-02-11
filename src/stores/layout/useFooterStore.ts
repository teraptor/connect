import { defineStore } from 'pinia'
import { RouteNames } from '@/router/routes/routeNames'

interface FooterNav {
  title: string
  routeName: string
}

interface Contacts {
  mail: string
  phone: string
}

interface DocumentsNav {
  title: string
  routeName: string
}

export const useFooterStore = defineStore('footer', {
  state: (): {
    footerNav: FooterNav[][]
    documents: DocumentsNav[]
    contacts: Contacts
  } => ({
    footerNav: [
      [
        {
          title: 'Все специалисты',
          routeName: RouteNames.MAIN.MAIN_PAGE.name,
        },
        {
          title: 'Системные аналитики',
          routeName: RouteNames.MAIN.IN_DEV,
        },
        {
          title: 'Frontend-разработчики',
          routeName: RouteNames.MAIN.IN_DEV,
        },
        {
          title: 'Backend-разработчики',
          routeName: RouteNames.MAIN.IN_DEV,
        },
        {
          title: 'UX/UI дизайнеры',
          routeName: RouteNames.MAIN.IN_DEV,
        },
        {
          title: 'Ручные тестировщики',
          routeName: RouteNames.MAIN.IN_DEV,
        },
        {
          title: 'Менеджеры проектов',
          routeName: RouteNames.MAIN.IN_DEV,
        },
        {
          title: 'Системные архитекторы',
          routeName: RouteNames.MAIN.IN_DEV,
        },
      ],
      [
        {
          title: 'О платформе',
          routeName: RouteNames.MAIN.IN_DEV,
        },
        {
          title: 'Стать партнером',
          routeName: RouteNames.MAIN.IN_DEV,
        },
        {
          title: 'Запросы клиентов',
          routeName: RouteNames.MAIN.IN_DEV,
        },
        {
          title: 'FAQ',
          routeName: RouteNames.MAIN.IN_DEV,
        },
      ],
      [
        {
          title: 'Контакты',
          routeName: RouteNames.MAIN.IN_DEV,
        },
        {
          title: 'Блог',
          routeName: RouteNames.MAIN.IN_DEV,
        },
        {
          title: 'Карьера',
          routeName: RouteNames.MAIN.IN_DEV,
        },
        {
          title: 'Исследования',
          routeName: RouteNames.MAIN.IN_DEV,
        },
      ],
    ],
    documents: [
      {
        title: 'Политика обработки персональных данных',
        routeName: RouteNames.MAIN.IN_DEV,
      },
      {
        title: 'Условия использования сайта',
        routeName: RouteNames.MAIN.IN_DEV,
      },
      {
        title: 'Договор присоединения',
        routeName: RouteNames.MAIN.IN_DEV,
      },
      {
        title: 'Согласие на получение информационных и других рассылок',
        routeName: RouteNames.MAIN.IN_DEV,
      },
    ],
    contacts: {
      mail: 'help@staffconnect.ru',
      phone: '+7 (800) 000-00-00',
    },
  }),
})
