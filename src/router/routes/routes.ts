import type { RouteRecordRaw } from 'vue-router'
import { RouteNames } from './routeNames'
import IndexView from '@/views/IndexView.vue'

export const MAIN_ROUTES: RouteRecordRaw[] = [
  {
    path: `/${RouteNames.MAIN.LOGIN}`,
    name: RouteNames.MAIN.LOGIN,
    component: () => import('@/pages/Login/Login.vue'),
    meta: {
      title: 'Авторизация',
    },
  },
  {
    path: `/${RouteNames.MAIN.REGISTER}`,
    name: RouteNames.MAIN.REGISTER,
    component: () => import('@/pages/Register/Register.vue'),
    meta: {
      title: 'Регистрация',
    },
  },
  {
    path: '/',
    name: RouteNames.MAIN.INDEX,
    component: IndexView,
    redirect: { name: RouteNames.MAIN.MAIN_PAGE.name },
    children: [
      {
        path: `/${RouteNames.MAIN.MAIN_PAGE.name}`,
        name: RouteNames.MAIN.MAIN_PAGE.name,
        component: () => import('@/pages/Main/Main.vue'),
        meta: {
          title: 'Главная страница',
        },
      },
      {
        path: `/${RouteNames.MAIN.MAIN_PAGE.children.WHY_WE}`,
        name: RouteNames.MAIN.MAIN_PAGE.children.WHY_WE,
        component: () => import('@/pages/WhyWe/WhyWe.vue'),
        meta: {
          title: 'Почему мы?',
        },
      },
      {
        path: `/${RouteNames.MAIN.MAIN_PAGE.children.HOW_IT_WORKS}`,
        name: RouteNames.MAIN.MAIN_PAGE.children.HOW_IT_WORKS,
        component: () => import('@/pages/HowItWorks/HowItWorks.vue'),
        meta: {
          title: 'Как это работает?',
        },
      },
      {
        path: `/${RouteNames.MAIN.MAIN_PAGE.children.VACANCIES}`,
        name: RouteNames.MAIN.MAIN_PAGE.children.VACANCIES,
        component: () => import('@/pages/Vacancies/Vacancies.vue'),
        meta: {
          title: 'Вакансии',
        },
      },
      {
        path: `/${RouteNames.MAIN.MAIN_PAGE.children.BENCHMARK}`,
        name: RouteNames.MAIN.MAIN_PAGE.children.BENCHMARK,
        component: () => import('@/pages/Benchmark/Benchmark.vue'),
        meta: {
          title: 'Бенчмарк',
        },
      },
    ],
  },
]
