import { createRouter, createWebHistory } from 'vue-router'
import BenchView from '@/views/BenchView.vue';
import DefaultView from '@/views/DefaultView.vue';
import Vacancies from '@/components/vacancies/Vacancies.vue';
import Vacancy from '@/components/vacancy/Vacancy.vue';
import Candidate from '@/components/candidate/candidate.vue';


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
    {
      path: '/candidate/:id',
      name: 'candidate',
      component: Candidate,
      meta: {
        layout: 'Default',
      },
    },
    {
      path: '/vacancies',
      name: 'vacancies',
      component: Vacancies,
      meta: {
        layout: 'Default',
      },
    },
    {
      path: '/vacancies/:id',
      name: 'vacancy',
      component: Vacancy,
      params: true,
      meta: {
        layout: 'Default',
      },
    },
  ]
})

export default router
