import { defineStore } from 'pinia'
import { RouteNames } from '@/router/routes/routeNames'

interface HeaderNav {
  title: string
  routeName: string
}

export const useHeaderStore = defineStore('header', {
  state: (): { headerNav: HeaderNav[] } => ({
    headerNav: [
      {
        title: 'Почему мы?',
        routeName: RouteNames.MAIN.MAIN_PAGE.children.WHY_WE,
      },
      {
        title: 'Как это работает?',
        routeName: RouteNames.MAIN.MAIN_PAGE.children.HOW_IT_WORKS,
      },
      {
        title: 'Вакансии',
        routeName: RouteNames.MAIN.MAIN_PAGE.children.VACANCIES,
      },
      {
        title: 'Бенчмарк',
        routeName: RouteNames.MAIN.MAIN_PAGE.children.BENCHMARK,
      },
    ],
  }),
})
