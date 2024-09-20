import { createRouter, createWebHistory } from 'vue-router'
import DefaultLayout from '@/layouts/TheDefaultLayout.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: import('../views/DefaultView.vue'),
      meta: {
        layout: 'Default',
      },
    },
    {
      path: '/bench',
      name: 'bench',
      component: import('../views/BenchView.vue'),
      meta: {
        layout: 'Default',
      },
    },
  ]
})

export default router
