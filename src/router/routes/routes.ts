import type { RouteRecordRaw } from 'vue-router'
import { RouteNames } from './routeNames'
import IndexView from '@/views/IndexView.vue'

export const MAIN_ROUTES: RouteRecordRaw[] = [
  {
    path: `/${RouteNames.MAIN.LOGIN}`,
    name: RouteNames.MAIN.LOGIN,
    component: () => import('@/pages/Login/Login.vue'),
  },
  {
    path: `/${RouteNames.MAIN.REGISTER}`,
    name: RouteNames.MAIN.REGISTER,
    component: () => import('@/pages/Register/Register.vue'),
  },
  {
    path: '/',
    name: RouteNames.MAIN.INDEX,
    component: IndexView,
    redirect: { name: RouteNames.MAIN.MAIN_PAGE },
    children: [
      {
        path: `/${RouteNames.MAIN.MAIN_PAGE}`,
        name: RouteNames.MAIN.MAIN_PAGE,
        component: () => import('@/pages/Main/Main.vue'),
      },
    ],
  },
]
