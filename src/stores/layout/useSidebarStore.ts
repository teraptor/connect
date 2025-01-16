import { defineStore } from 'pinia'
import { RouteNames } from '@/router/routes/routeNames'

interface SidebarItem {
  title: string
  routeName: string
}

interface Sidebar {
  title: string
  routeName?: string
  icon: string
  items?: SidebarItem[]
}

export const usesidebarStore = defineStore('sidebar', {
  state: (): { sidebarNav: Sidebar[] } => ({
    sidebarNav: [
      {
        title: 'Начало работы',
        routeName: RouteNames.MAIN.MAIN_PAGE.children.USER,
        icon: 'icon icon-user'
      },
      {
        title: 'Заявки',
        icon: 'icon icon-book-open',
        items: [
          {
            title: 'Вкладка 1',
            routeName: RouteNames.MAIN.MAIN_PAGE.children.USER,
          },
          {
            title: 'Вкладка 2',
            routeName: RouteNames.MAIN.MAIN_PAGE.children.HOW_IT_WORKS,
          }
        ]
      },
      {
        title: 'Специалисты',
        icon: 'icon icon-users',
        items: [
          {
            title: 'Вкладка 1',
            routeName: RouteNames.MAIN.MAIN_PAGE.children.CANDIDATES,
          },
          {
            title: 'Вкладка 2',
            routeName: RouteNames.MAIN.MAIN_PAGE.children.CANDIDATES,
          }
        ]
      },
      {
        title: 'Команда',
        routeName: RouteNames.MAIN.MAIN_PAGE.children.BENCHMARK,
        icon: 'icon icon-group'
      }
    ]
  })
})