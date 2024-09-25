import { createRouter, createWebHistory } from 'vue-router'
import BenchView from '@/views/BenchView.vue';
import DefaultView from '@/views/DefaultView.vue';


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: BenchView,
      meta: {
        layout: 'Default',
      },
    },
    {
      path: '/bench',
      name: 'bench',
      component: BenchView,
      meta: {
        layout: 'Default',
      },
    },
  ]
})

export default router
