import { createRouter, createWebHistory } from 'vue-router'

const history = createWebHistory(import.meta.env.VITE_BASE_URL)
// const history = createWebHashHistory('#');

console.log('history', history)

const router = createRouter({
  history,
  // scrollBehavior(to, from, savedPosition) {
  //   console.log('to', to)
  //   console.log('from', from)
  //   console.log('savedPosition', savedPosition)
  //   return { top: 0 }
  // },
  sensitive: true,// 路由是否大小写敏感
  strict: true, // 路由是否严格匹配路径
  linkActiveClass: 'active', // 链接激活时的类名
  linkExactActiveClass: 'exact-active', // 链接严格激活时的类名
  // parseQuery(query: string) {
  // },
  // stringifyQuery(obj: Record<string, string>) {
  // },
  routes: [
    {
      path: '/',
      name: 'index',
      alias: ['/home'],
      // HomeView 组件内包含 <router-view> 和 <router-view name="dashboard">
      component: () => import('@/views/home/HomeView.vue'),
      meta: {
        title: 'Home',
        icon: 'home',
        roles: ['admin', 'user']
      },
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
      component: () => import('@/views/lists/ListView.vue'),
      meta: {
        title: 'Lists',
        icon: 'lists',
        roles: ['admin', 'user']
      },
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
      meta: {
        title: 'About',
        icon: 'about',
        roles: ['admin', 'user']
      },
    },
    {
      path: '/user',
      name: 'user',
      component: () => import('@/views/user/UserView.vue'),
      meta: {
        title: '用户管理',
        icon: 'user',
        roles: ['admin']
      },
      children: [ // 嵌套路由
        {
          path: 'lists',
          name: 'user-list',
          component: () => import('@/views/user/UserList.vue')
        },
        {
          path: ':id',
          // name: 'user-detail',
          component: () => import('@/views/user/UserDetail.vue'),
          beforeEnter: (to, from) => {
            console.log('xx-----')
            return true
          }
        }
      ],
      beforeEnter: (to, from) => {
        console.log('beforeEnter-to', to)
        console.log('beforeEnter-from', from)
        return true
      },
    },
    {
      path: '/role',
      name: 'role',
      component: () => import('@/views/role/RoleView.vue'),
      meta: {
        title: '角色管理',
        icon: 'role',
        roles: ['admin']
      },
    },
    {
        path: '/role/:id',
        name: 'role-detail',
        component: () => import('@/views/role/RoleDetail.vue'),
        meta: {
          title: '角色详情',
          icon: 'role-detail',
          roles: ['admin']
        },
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: () => import('@/views/dashboard/DashBoard.vue'),
      meta: {
        title: 'Dashboard',
        icon: 'dashboard',
        roles: ['admin', 'user']
      },
      // beforeEnter: (to, from) => {
      //   console.log('beforeEnter-to', to)
      //   console.log('beforeEnter-from', from)
      //   return true
      // },
      beforeEnter: [(to, from) => {
        // console.log('beforeEnter-111to', to)
        // console.log('beforeEnter-f111rom', from)
        return true
      }, (to, from) => {
        // console.log('beforeEnter-222to', to)
        // console.log('beforeEnter-222from', from)
        return true
      }]

    },
    {
      path: '/data-view',
      name: 'data-view',
      component: () => import('@/views/dataview/DataView.vue'),
      meta: {
        title: '数据管理',
        icon: 'data-view',
        roles: ['admin']
      },
    }
  ]
})


// 全局前置守卫
router.beforeEach((to, from) => {
  // console.log('router.beforeEach-to', to)
  // console.log('router.beforeEach-from', from)
  return true
})

// 全局解析守卫
router.beforeResolve((to, from) => {
  // console.log('router.beforeResolve-to', to)
  // console.log('router.beforeResolve-from', from)
  return true
})

// 全局后置守卫
router.afterEach((to, from, failure) => {
  if(failure) {
    console.log('router.afterEach-failure', failure);
    return;
  }
  document.title = to.meta.title ? `Vue3 管理端 ｜ ${to.meta.title}` : `Vue3 管理端`;
})

// console.log('router', router)
export default router

