import { ADD_CANDIDATE } from '@/constants'

export const RouteNames = {
  MAIN: {
    INDEX: 'index',
    LOGIN: 'login',
    REGISTER: 'register',
    FORGOT: 'forgot',
    MAIN_PAGE: {
      name: '/',
      children: {
        WHY_WE: 'why_we',
        HOW_IT_WORKS: 'how_it_works',
        VACANCIES: 'vacancies',
        BENCHMARK: 'benchmark',
        CANDIDATES: 'candidates',
        CANDIDATES_DETAIL: 'candidates_detail',
      },
    },
    UI_KIT: {
      name: 'UI_Kit',
      children: {
        ICONS: 'icons',
      },
    },
  },
  USER: {
    name: 'user',
    children: {
      ADD_CANDIDATE: 'add_candidate',
      PARSE_CANDIDATE: 'parse_candidate',
    },
  },
  NOT_FOUND: '/:pathMatch(.*)',
}
