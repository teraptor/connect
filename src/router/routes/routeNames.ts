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
        CANDIDATES_DETAIL: 'candidates_detail'
      },
    },
    USER: 'user',
    UI_KIT: {
      name:'UI_Kit',
      children: {
        ICONS: 'icons'
      }
    },
    NOT_FOUND: '/:pathMatch(.*)'
  },
}
