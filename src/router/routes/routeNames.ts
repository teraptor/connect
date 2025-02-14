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
        PRIVACY: 'privacy',
        AGREEMENT: 'agreement',
        RULES: 'rules',
        MAILINGCONSENT: 'mailing_consent',
        CONTRACT: 'contract',
      },
    },
    UI_KIT: {
      name: 'UI_Kit',
      children: {
        ICONS: 'icons',
      },
    },
    IN_DEV: 'in_dev',
  },
  USER: {
    name: 'user_parent',
    children: {
      USER: 'user',
      ADD_CANDIDATE: 'add_candidate',
      PARSE_CANDIDATE: 'parse_candidate',
    },
  },
  NOT_FOUND: '/:pathMatch(.*)',
}
