import { createRouter, createWebHistory } from 'vue-router'
import BenchView from '@/views/BenchView.vue';
import Vacancies from '@/components/vacancies/Vacancies.vue';
import Vacancy from '@/components/vacancies/vacancy/Vacancy.vue';
import Candidate from '@/components/candidate/candidate.vue';
import RegisterView from '@/views/RegisterView.vue';
import LoginView from '@/views/LoginView.vue';
import RecoveryView from '@/views/RecoveryView.vue';
import TheNotFoundLayout from '@/layouts/TheNotFoundLayout.vue';
import authMiddleware from '@/middleware/auth';
import logMiddleware from '@/middleware/log';
import ForecastChart from '@/views/ForecastChart.vue';
import VizardView from '@/views/VizardView.vue';


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
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
      name: 'home',
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
        // middleware: [authMiddleware, logMiddleware],
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

router.beforeEach((to, from, next) => {
  if (!to.meta.middleware) {
      console.log(to.meta.middleware)
      return next()
  }
  const middleware = to.meta.middleware
  const context = {
      to,
      from,
      next,
      // store
  }
  return middleware[0]({
      ...context,
      // next: middlewarePipeline(context, middleware, 1)
  })
})

export default router
