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
        routeName: RouteNames.USER.children.USER,
        icon: 'icon icon-user',
      },
      // {
      //   title: 'Заявки',
      //   icon: 'icon icon-book-open',
      //   items: [
      //     {
      //       title: 'Вкладка 1',
      //       routeName: RouteNames.MAIN.IN_DEV,
      //     },
      //     {
      //       title: 'Вкладка 2',
      //       routeName: RouteNames.MAIN.IN_DEV,
      //     },
      //   ],
      // },
      {
        title: 'Специалисты',
        icon: 'icon icon-users',
        items: [
          {
            title: 'Добавить специалиста',
            routeName: RouteNames.USER.children.ADD_CANDIDATE,
          },
          {
            title: 'Парсинг специалиста',
            routeName: RouteNames.USER.children.PARSE_CANDIDATE,
          },
        ],
      },
      // {
      //   title: 'Команда',
      //   routeName: RouteNames.MAIN.IN_DEV,
      //   icon: 'icon icon-group',
      // },
    ],
  }),
})
