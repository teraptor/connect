import { createRouter, createWebHistory } from 'vue-router'
import { MAIN_ROUTES } from '@/router/routes'
import { RouteNames } from './routes/routeNames'
import { useUserStore } from '@/stores/useUserStore'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [...MAIN_ROUTES],
})

router.beforeEach(async (to, from, next) => {
  const userStore = useUserStore()

  if (!userStore.user) {
    await userStore.getUserData()
  }

  const isAuthenticated = !!userStore.user

  if (to.meta?.requiresAuth && !isAuthenticated) {
    next({ name: RouteNames.MAIN.LOGIN })
  } else {
    next()
  }
})

export default router
