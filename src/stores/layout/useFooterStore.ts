import { defineStore } from 'pinia'
import { RouteNames } from '@/router/routes/routeNames'

interface FooterNav {
  title: string
  routeName: string
}

interface Contacts {
  mail: string
  phone: string
  address: string
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
        title: 'Конфиденциальность и защита данных',
        routeName: RouteNames.MAIN.MAIN_PAGE.children.PRIVACY,
      },
      {
        title: 'Политика обработки персональных данных',
        routeName: RouteNames.MAIN.MAIN_PAGE.children.AGREEMENT,
      },
      {
        title: 'Условия использования сайта',
        routeName: RouteNames.MAIN.MAIN_PAGE.children.RULES,
      },
      {
        title: 'Договор присоединения',
        routeName: RouteNames.MAIN.MAIN_PAGE.children.CONTRACT,
      },
      {
        title: 'Согласие на получение информационных и других рассылок',
        routeName: RouteNames.MAIN.MAIN_PAGE.children.MAILINGCONSENT,
      },
    ],
    contacts: {
      mail: 'help@staffconnect.ru',
      phone: '+7 (495) 260-12-90',
      address: 'г. Москва, ул. Ялтинская, 10, к.1',
    },
  }),
})
