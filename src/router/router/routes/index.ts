import type { RouteRecordRaw } from 'vue-router'

/**
 * 静态路由菜单
 */
export const constantRoutes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/index'
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/_base/login/index.vue')
  },
  {
    path: '/index',
    name: 'HomeLayout',
    component: () => import('@/layouts/HomeLayout.vue'),
    children: []
  }
]