import { createRouter, createWebHistory } from 'vue-router'
import LoginPage from '../components/pages/auth/LoginPage.vue'
import Dashboard from '../components/pages/Dashboard.vue'
import Training from '../components/pages/training/Training.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: Dashboard,
      meta: { requiresAuth: true }
    },
    {
      path: '/login',
      name: 'login',
      component: LoginPage,
    },
    {
        path: '/treinos',
        name: 'training',
        component: Training,
        meta: { requiresAuth: true }
      },
   
  ],
})

router.beforeEach((to, from, next) => {
    const isLoggedIn = !!localStorage.getItem('token')
  
    if (to.meta.requiresAuth && !isLoggedIn) {
      return next('/login')
    }
  
    if (to.path === '/login' && isLoggedIn) {
      return next('/')
    }
  
    next()
  })

export default router