// Composables
import { createRouter, createWebHistory } from 'vue-router'
import store from '@/store/Login'

const routes = [
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
  {
    path: '/users',
    name: 'UserIndex',
    component: () => import('@/views/user/UserIndex.vue'),
  },
  {
    path: '/users/create',
    name: 'UserForm',
    component: () => import('@/views/user/UserForm.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})
router.beforeEach((to,form, next) => {
  const isAuthenticated = store.state.token || localStorage.getItem('token')
  if (to.meta.requiresAuth && !isAuthenticated) {
    next({ name: 'Login' })
  }
  else {
    next()
  }

})

export default router
