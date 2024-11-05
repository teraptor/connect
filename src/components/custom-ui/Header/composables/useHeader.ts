import { RouteNames } from '@/router/routes/routeNames'

export const useHeader = () => {
  const router = useRouter()
  const navButtons = [
    {
      title: 'Почему мы?',
      routeName: RouteNames.MAIN.MAIN_PAGE.children.WHY_WE,
    },
    {
      title: 'Как это работает?',
      routeName: RouteNames.MAIN.MAIN_PAGE.children.HOW_IT_WORKS,
    },
    {
      title: 'Вакансии',
      routeName: RouteNames.MAIN.MAIN_PAGE.children.VACANCIES,
    },
    {
      title: 'Бенчмарк',
      routeName: RouteNames.MAIN.MAIN_PAGE.children.BENCHMARK,
    },
  ]

  const moveToLogin = () => {
    router.push({ name: RouteNames.MAIN.LOGIN })
  }

  const moveToRegister = () => {
    router.push({ name: RouteNames.MAIN.REGISTER })
  }

  return {
    navButtons,
    moveToLogin,
    moveToRegister,
  }
}
