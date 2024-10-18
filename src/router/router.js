import { createRouter, createWebHistory } from 'vue-router'
import BenchView from '@/views/BenchView.vue';
import Vacancies from '@/components/vacancies/Vacancies.vue';
import Vacancy from '@/components/vacancies/vacancy/Vacancy.vue';
import Candidate from '@/components/candidate/candidate.vue';
import RegisterView from '@/views/RegisterView.vue';
import LoginView from '@/views/LoginView.vue';
import RecoveryView from '@/views/RecoveryView.vue';
import CVView from '@/views/CVView.vue';
import TheNotFoundLayout from '@/layouts/TheNotFoundLayout.vue';
import authMiddleware from '@/middleware/auth';
import ForecastChart from '@/views/ForecastChart.vue';
import VizardView from '@/views/VizardView.vue';
import MultiUpload from '@/views/MultiUpload.vue';


const router = createRouter({
  history: createWebHistory(),
  mode: 'history',
  routes: [
    {
      path: '/cv',
      name: 'cv',
      component: CVView,
      meta: {
        layout: 'Default',
      },
    },
    {
      path: '/multiupload',
      name: 'multi',
      component: MultiUpload,
      meta: {
        layout: 'Default',
      },
    },
    {
      path: '/vizard',
      name: 'vizard',
      component: VizardView,
      meta: {
        layout: 'Default',
      },
    },
    {
      path: '/forecast',
      name: 'forecast',
      component: ForecastChart,
      meta: {
        layout: 'Default',
      },
    },

    {
      path: '/:pathMatch(.*)*',
      name: '404',
      component: BenchView,
      meta: {
        layout: 'NotFound',
      },
    },
    {
      path: '/',
      name: '/',
      component: BenchView,
      meta: {
        layout: 'Default',
      },
    },
    {
      path: '/register',
      name: "register",
      component: RegisterView,
      meta: {
        layout: 'Default',
      }
    },
    {
      path: '/recovery',
      name: "recovery",
      component: RecoveryView,
      meta: {
        layout: 'Default',
      }
    },
    {
      path: '/login',
      name: "login",
      component: LoginView,
      meta: {
        layout: 'Default',
      }
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

router.beforeEach(authMiddleware); // Регистрируйте middleware

export default router
