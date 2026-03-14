import { createRouter, createWebHistory,createWebHashHistory } from 'vue-router'

const history = createWebHistory(import.meta.env.VITE_BASE_URL)
// const history = createWebHashHistory('#');

console.log('history', history)

const router = createRouter({
  history,
  routes: [
    {
      path: '/',
      name: 'index',
      alias: ['/home'],
      // HomeView 组件内包含 <router-view> 和 <router-view name="dashboard">
      component: () => import('@/views/home/HomeView.vue'),
      children:[{
        path: '',
        name: 'home',
        components: {
          default: () => import('@/views/home/MainCard.vue'),
          dashboard: () => import('@/views/home/DashBoard.vue'),
       }
      }]
    },
    {
      path: '/lists/:type?',
      name: 'lists',
      component: () => import('@/views/lists/ListView.vue')
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
      component: () => import('@/views/user/UserView.vue'),
      children: [ // 嵌套路由
        {
          path: 'lists',
          name: 'user-list',
          component: () => import('@/views/user/UserList.vue')
        },
        {
          path: ':id',
          // name: 'user-detail',
          component: () => import('@/views/user/UserDetail.vue')
        }
      ]
    },
    {
      path: '/role',
      name: 'role',
      component: () => import('@/views/role/RoleView.vue'),
    },
    {
        path: '/role/:id',
        name: 'role-detail',
        component: () => import('@/views/role/RoleDetail.vue')
      },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: () => import('@/views/dashboard/DashBoard.vue')
    },

  ]
})

console.log('router', router)
export default router

