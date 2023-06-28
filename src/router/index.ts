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
    path: '',
    name: 'LayoutLogin',
    component: () => import('@/layouts/LayoutLogin.vue'),
    children : [
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

    ]
  },
  {
    path: '/users',
    name: 'UserIndex',
    component: () => import('@/views/user/UserIndex.vue'),
    meta: { requiresAuth: true }

  },
  {
    path: '/users/create',
    name: 'CreateUser',
    component: () => import('@/views/user/Create.vue'),
    props: true,
    meta: { requiresAuth: true }

  },
  {
    path: '/users/:id',
    name: 'UpdateUser',
    component: () => import('@/views/user/Update.vue'),
    props: true,
    meta: { requiresAuth: true }

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
