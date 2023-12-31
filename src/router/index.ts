// Composables
import { createRouter, createWebHistory } from 'vue-router'
import store from '@/store'

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '',
        name: 'Home',
        component: () => import('@/views/Home.vue'),
        meta: { requiresAuth: true }
      },
      {
        path: '/login',
        name: 'Login',
        component: () => import('@/components/Login.vue'),
      },
      {
        path: '/register',
        name: 'Register',
        component: () => import('@/components/Register.vue'),
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})
router.beforeEach((to,form, next) => {
  const isAuthenticated = store.state.token
  if (to.meta.requiresAuth && !isAuthenticated) {
    next({ name: 'Login' })
  } 
  else {
    next() 
  }

})

export default router
