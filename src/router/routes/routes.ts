import type { RouteRecordRaw } from 'vue-router'
import { RouteNames } from './routeNames'

export const MAIN_ROUTES: RouteRecordRaw[] = [
  {
    path: `/${RouteNames.MAIN.LOGIN}`,
    name: RouteNames.MAIN.LOGIN,
    component: () => import('@/pages/auth/Login.vue'),
    meta: {
      title: 'Авторизация',
      showHeader: false, 
      showFooter: false,
      showSidebar: false
    },
  },
  {
    path: `/${RouteNames.MAIN.REGISTER}`,
    name: RouteNames.MAIN.REGISTER,
    component: () => import('@/pages/auth/Register.vue'),
    meta: {
      title: 'Регистрация',
      showHeader: false, 
      showFooter: false,
      showSidebar: false
    },
  },
  {
    path: `/${RouteNames.MAIN.FORGOT}`,
    name: RouteNames.MAIN.FORGOT,
    component: () => import('@/pages/auth/Forgot.vue'),
    meta: {
      title: 'Забыли пароль',
      showHeader: false, 
      showFooter: false,
      showSidebar: false
    },
  },
  {
    path: '/',
    redirect: { name: RouteNames.MAIN.MAIN_PAGE.name },
    name: RouteNames.MAIN.INDEX,
    children: [
      {
        path: `/${RouteNames.MAIN.MAIN_PAGE.name}`,
        name: RouteNames.MAIN.MAIN_PAGE.name,
        component: () => import('@/pages/Main/Main.vue'),
        meta: {
          title: 'Главная страница',
          showSidebar: false
        },
      },
      {
        path: `/${RouteNames.MAIN.MAIN_PAGE.children.WHY_WE}`,
        name: RouteNames.MAIN.MAIN_PAGE.children.WHY_WE,
        component: () => import('@/pages/WhyWe/WhyWe.vue'),
        meta: {
          title: 'Почему мы?',
          showSidebar: false
        },
      },
      {
        path: `/${RouteNames.MAIN.MAIN_PAGE.children.HOW_IT_WORKS}`,
        name: RouteNames.MAIN.MAIN_PAGE.children.HOW_IT_WORKS,
        component: () => import('@/pages/HowItWorks/HowItWorks.vue'),
        meta: {
          title: 'Как это работает?',
          showSidebar: false
        },
      },
      {
        path: `/${RouteNames.MAIN.MAIN_PAGE.children.VACANCIES}`,
        name: RouteNames.MAIN.MAIN_PAGE.children.VACANCIES,
        component: () => import('@/pages/Vacancies/Vacancies.vue'),
        meta: {
          title: 'Вакансии',
          showSidebar: false
        },
      },
      {
        path: `/${RouteNames.MAIN.MAIN_PAGE.children.BENCHMARK}`,
        name: RouteNames.MAIN.MAIN_PAGE.children.BENCHMARK,
        component: () => import('@/pages/Benchmark/Benchmark.vue'),
        meta: {
          title: 'Бенчмарк',
          showSidebar: false
        },
      },
      {
        path: `/${RouteNames.MAIN.MAIN_PAGE.children.CANDIDATES}`,
        name: RouteNames.MAIN.MAIN_PAGE.children.CANDIDATES,
        component: () => import('@/pages/Candidates/CandidatesList.vue'),
        meta: {
          title: 'Кандидаты',
          showSidebar: false
        },
      },
      {
        path: `/${RouteNames.MAIN.MAIN_PAGE.children.CANDIDATES}/:id`,
        name: RouteNames.MAIN.MAIN_PAGE.children.CANDIDATES_DETAIL,
        component: () => import('@/pages/Candidates/CandidateDetail.vue'),
        meta: {
          title: 'Кандидат описание',
          showSidebar: false
        },
      },
      {
        path: `/${RouteNames.MAIN.MAIN_PAGE.children.USER}`,
        name: RouteNames.MAIN.MAIN_PAGE.children.USER,
        component: () => import('@/pages/User/User.vue'),
        meta: {
          title: 'Пользователь',
          showFooter: false
        },
      },
      {
        path: `/${RouteNames.MAIN.UI_KIT.children.ICONS}`,
        name: RouteNames.MAIN.UI_KIT.children.ICONS,
        component: () => import('@/pages/UIKit/Icons.vue'),
        meta: {
          title: 'icons',
          showSidebar: false
        },
      },
    ],
  },
  {
    path:`${RouteNames.MAIN.NOT_FOUND}`,
    name: RouteNames.MAIN.NOT_FOUND,
    component: () => import('@/pages/NotFound/NotFound.vue'),
    meta: {
      title: '404',
      showHeader: false, 
      showFooter: false,
      showSidebar: false
    },
  },
]
