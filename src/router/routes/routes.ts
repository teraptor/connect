import type { RouteRecordRaw } from 'vue-router'
import { RouteNames } from './routeNames'

const defaultMeta = {
  showHeader: true,
  showFooter: true,
  showSidebar: false
}

const userMeta = {
  showHeader: true,
  showSidebar: true,
  showFooter: false
}

export const MAIN_ROUTES: RouteRecordRaw[] = [
  {
    path: `/${RouteNames.MAIN.LOGIN}`,
    name: RouteNames.MAIN.LOGIN,
    component: () => import('@/pages/auth/Login.vue'),
    meta: {
      title: 'Авторизация'
    },
  },
  {
    path: `/${RouteNames.MAIN.REGISTER}`,
    name: RouteNames.MAIN.REGISTER,
    component: () => import('@/pages/auth/Register.vue'),
    meta: {
      title: 'Регистрация'
    },
  },
  {
    path: `/${RouteNames.MAIN.FORGOT}`,
    name: RouteNames.MAIN.FORGOT,
    component: () => import('@/pages/auth/Forgot.vue'),
    meta: {
      title: 'Забыли пароль'
    },
  },
  {
    path: '',
    redirect: { name: RouteNames.MAIN.MAIN_PAGE.name },
    meta: {
      title: 'Главная страница',
      ...defaultMeta
    },
    children: [
      {
        path: RouteNames.MAIN.MAIN_PAGE.name,
        name: RouteNames.MAIN.MAIN_PAGE.name,
        component: () => import('@/pages/index.vue'),
        meta: {
          title: 'Главная страница',
        },
      },
      {
        path: RouteNames.MAIN.MAIN_PAGE.children.WHY_WE,
        name: RouteNames.MAIN.MAIN_PAGE.children.WHY_WE,
        component: () => import('@/pages/WhyWe/WhyWe.vue'),
        meta: {
          title: 'Почему мы?',
        },
      },
      {
        path: RouteNames.MAIN.MAIN_PAGE.children.HOW_IT_WORKS,
        name: RouteNames.MAIN.MAIN_PAGE.children.HOW_IT_WORKS,
        component: () => import('@/pages/HowItWorks/HowItWorks.vue'),
        meta: {
          title: 'Как это работает?',
        },
      },
      {
        path: RouteNames.MAIN.MAIN_PAGE.children.VACANCIES,
        name: RouteNames.MAIN.MAIN_PAGE.children.VACANCIES,
        component: () => import('@/pages/Vacancies/Vacancies.vue'),
        meta: {
          title: 'Вакансии',
        },
      },
      {
        path: RouteNames.MAIN.MAIN_PAGE.children.BENCHMARK,
        name: RouteNames.MAIN.MAIN_PAGE.children.BENCHMARK,
        component: () => import('@/pages/Benchmark/Benchmark.vue'),
        meta: {
          title: 'Бенчмарк',
        },
      },
      {
        path: RouteNames.MAIN.MAIN_PAGE.children.CANDIDATES,
        name: RouteNames.MAIN.MAIN_PAGE.children.CANDIDATES,
        component: () => import('@/pages/Candidates/CandidatesList.vue'),
        meta: {
          title: 'Кандидаты',
        },
      },
      {
        path: `${RouteNames.MAIN.MAIN_PAGE.children.CANDIDATES}/:id`,
        name: RouteNames.MAIN.MAIN_PAGE.children.CANDIDATES_DETAIL,
        component: () => import('@/pages/Candidates/CandidateDetail.vue'),
        meta: {
          title: 'Кандидат описание',
        },
      },
      {
        path: RouteNames.MAIN.UI_KIT.children.ICONS,
        name: RouteNames.MAIN.UI_KIT.children.ICONS,
        component: () => import('@/pages/UIKit/Icons.vue'),
        meta: {
          title: 'icons',
        },
      }
    ]
  },
  {
    path: `/${RouteNames.MAIN.USER}`,
    name: RouteNames.MAIN.USER,
    component: () => import('@/pages/User/User.vue'),
    meta: {
      title: 'Пользователь',
      ...userMeta
    },
  },
  {
    path:`${RouteNames.MAIN.NOT_FOUND}`,
    name: RouteNames.MAIN.NOT_FOUND,
    component: () => import('@/pages/NotFound/NotFound.vue'),
    meta: {
      title: '404',
      ...defaultMeta
    },
  }
]
