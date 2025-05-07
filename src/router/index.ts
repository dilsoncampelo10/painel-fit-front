import { createRouter, createWebHistory } from 'vue-router'
import LoginPage from '../components/pages/auth/LoginPage.vue'
import Dashboard from '../components/pages/Dashboard.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: Dashboard,
    },
    {
      path: '/login',
      name: 'login',
      component: LoginPage,
    },
   
  ],
})

export default router