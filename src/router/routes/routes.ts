import type { RouteRecordRaw } from 'vue-router'
import { RouteNames } from './routeNames'

const defaultMeta = {
  showHeader: true,
  showFooter: true,
  showSidebar: false,
}

const userMeta = {
  showHeader: true,
  showSidebar: true,
  showFooter: false,
}

export const MAIN_ROUTES: RouteRecordRaw[] = [
  {
    path: `/${RouteNames.MAIN.LOGIN}`,
    name: RouteNames.MAIN.LOGIN,
    component: () => import('@/pages/auth/Login.vue'),
    meta: {
      title: 'Авторизация',
    },
  },
  {
    path: `/${RouteNames.MAIN.REGISTER}`,
    name: RouteNames.MAIN.REGISTER,
    component: () => import('@/pages/auth/Register.vue'),
    meta: {
      title: 'Регистрация',
    },
  },
  {
    path: `/${RouteNames.MAIN.FORGOT}`,
    name: RouteNames.MAIN.FORGOT,
    component: () => import('@/pages/auth/Forgot.vue'),
    meta: {
      title: 'Забыли пароль',
    },
  },
  {
    path: `${RouteNames.MAIN.MAIN_PAGE.name}`,
    meta: {
      title: 'Главная страница',
      ...defaultMeta,
    },
    children: [
      {
        path: '',
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
        path: RouteNames.MAIN.MAIN_PAGE.children.PRIVACY,
        name: RouteNames.MAIN.MAIN_PAGE.children.PRIVACY,
        component: () => import('@/pages/privacy/Privacy.vue'),
        meta: {
          title: 'Политика конфиденциальности',
        },
      },
      {
        path: RouteNames.MAIN.MAIN_PAGE.children.AGREEMENT,
        name: RouteNames.MAIN.MAIN_PAGE.children.AGREEMENT,
        component: () => import('@/pages/privacy/Agreement.vue'),
        meta: {
          title:
            'Политика обработки и обеспечения безопасности персональных данных',
        },
      },
      {
        path: RouteNames.MAIN.MAIN_PAGE.children.RULES,
        name: RouteNames.MAIN.MAIN_PAGE.children.RULES,
        component: () => import('@/pages/privacy/Rules.vue'),
        meta: {
          title: 'Условия использования сайта',
        },
      },
      {
        path: RouteNames.MAIN.MAIN_PAGE.children.MAILINGCONSENT,
        name: RouteNames.MAIN.MAIN_PAGE.children.MAILINGCONSENT,
        component: () => import('@/pages/privacy/MailingConsent.vue'),
        meta: {
          title: 'Согласие на получение информационной и рекламной рассылки',
        },
      },
      {
        path: RouteNames.MAIN.MAIN_PAGE.children.CONTRACT,
        name: RouteNames.MAIN.MAIN_PAGE.children.CONTRACT,
        component: () => import('@/pages/privacy/Contract.vue'),
        meta: {
          title: 'Договор присоединения',
        },
      },
      {
        path: RouteNames.MAIN.UI_KIT.children.ICONS,
        name: RouteNames.MAIN.UI_KIT.children.ICONS,
        component: () => import('@/pages/UIKit/Icons.vue'),
        meta: {
          title: 'icons',
        },
      },
    ],
  },
  {
    path: `/${RouteNames.USER.children.USER}`,
    name: RouteNames.USER.name,
    meta: {
      title: 'Пользователь',
      ...userMeta,
    },
    children: [
      {
        path: '',
        name: RouteNames.USER.children.USER,
        component: () => import('@/pages/User/User.vue'),
        meta: {
          title: 'Пользователь',
        },
      },
      {
        path: RouteNames.USER.children.ADD_CANDIDATE,
        name: RouteNames.USER.children.ADD_CANDIDATE,
        component: () => import('@/pages/Candidates/CreateCandidate.vue'),
        meta: {
          title: 'Добавить кандидата',
        },
      },
      {
        path: RouteNames.USER.children.PARSE_CANDIDATE,
        name: RouteNames.USER.children.PARSE_CANDIDATE,
        component: () => import('@/pages/Candidates/ParseCandidate.vue'),
        meta: {
          title: 'Парсинг кандидата',
        },
      },
    ],
  },
  {
    path: `/${RouteNames.MAIN.IN_DEV}`,
    name: RouteNames.MAIN.IN_DEV,
    component: () => import('@/pages/InDev/InDev.vue'),
    meta: {
      title: 'В разработке',
    },
  },
  {
    path: `${RouteNames.NOT_FOUND}`,
    name: RouteNames.NOT_FOUND,
    component: () => import('@/pages/NotFound/NotFound.vue'),
    meta: {
      title: '404',
    },
  },
]
