import { createRouter, createWebHistory } from 'vue-router'
console.log('window.location',window.location)
const history = createWebHistory(import.meta.env.VITE_BASE_URL)
console.log('history',history)
const router = createRouter({
  history,
  routes: [
    {
      path: '/',
      name: 'index',
      component: () => import('@/views/home/HomeView.vue')
    },
     {
      path: '/home',
      name: 'home',
      component: () => import('@/views/home/HomeView.vue')
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/user',
      name: 'user',
      component: () => import('@/views/user/UserView.vue')
    },
      {
      path: '/role',
      name: 'role',
      component: () => import('@/views/role/RoleView.vue')
    },
  ]
})

export default router
