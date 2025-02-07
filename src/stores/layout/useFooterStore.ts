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
          routeName: RouteNames.MAIN.MAIN_PAGE.children.BENCHMARK,
        },
        {
          title: 'Frontend-разработчики',
          routeName: RouteNames.MAIN.MAIN_PAGE.children.BENCHMARK,
        },
        {
          title: 'Backend-разработчики',
          routeName: RouteNames.MAIN.MAIN_PAGE.children.BENCHMARK,
        },
        {
          title: 'UX/UI дизайнеры',
          routeName: RouteNames.MAIN.MAIN_PAGE.children.BENCHMARK,
        },
        {
          title: 'Ручные тестировщики',
          routeName: RouteNames.MAIN.MAIN_PAGE.children.BENCHMARK,
        },
        {
          title: 'Менеджеры проектов',
          routeName: RouteNames.MAIN.MAIN_PAGE.children.BENCHMARK,
        },
        {
          title: 'Системные архитекторы',
          routeName: RouteNames.MAIN.MAIN_PAGE.children.BENCHMARK,
        },
      ],
      [
        {
          title: 'О платформе',
          routeName: RouteNames.MAIN.MAIN_PAGE.children.HOW_IT_WORKS,
        },
        {
          title: 'Стать партнером',
          routeName: RouteNames.MAIN.MAIN_PAGE.children.BENCHMARK,
        },
        {
          title: 'Запросы клиентов',
          routeName: RouteNames.MAIN.MAIN_PAGE.children.BENCHMARK,
        },
        {
          title: 'FAQ',
          routeName: RouteNames.MAIN.MAIN_PAGE.children.HOW_IT_WORKS,
        },
      ],
      [
        {
          title: 'Контакты',
          routeName: RouteNames.MAIN.MAIN_PAGE.children.BENCHMARK,
        },
        {
          title: 'Блог',
          routeName: RouteNames.MAIN.MAIN_PAGE.children.BENCHMARK,
        },
        {
          title: 'Карьера',
          routeName: RouteNames.MAIN.MAIN_PAGE.children.HOW_IT_WORKS,
        },
        {
          title: 'Исследования',
          routeName: RouteNames.MAIN.MAIN_PAGE.children.BENCHMARK,
        },
      ],
    ],
    documents: [
      {
        title: 'Политика обработки персональных данных',
        routeName: RouteNames.MAIN.MAIN_PAGE.children.HOW_IT_WORKS,
      },
      {
        title: 'Условия использования сайта',
        routeName: RouteNames.MAIN.MAIN_PAGE.children.BENCHMARK,
      },
      {
        title: 'Договор присоединения',
        routeName: RouteNames.MAIN.MAIN_PAGE.children.BENCHMARK,
      },
      {
        title: 'Согласие на получение информационных и других рассылок',
        routeName: RouteNames.MAIN.MAIN_PAGE.children.BENCHMARK,
      },
    ],
    contacts: {
      mail: 'help@staffconnect.ru',
      phone: '+7 (800) 000-00-00',
    },
  }),
})
