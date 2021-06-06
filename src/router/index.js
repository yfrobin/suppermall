import {createRouter, createWebHistory} from 'vue-router'

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: () => import(/* webpackChunkName: "about" */ '../views/home/Home')
  },
  {
    path: '/category',
    component: () => import(/* webpackChunkName: "about" */ '../views/category/Category')
  },
  {
    path: '/cart',
    component: () => import(/* webpackChunkName: "about" */ '../views/cart/Cart')
  },
  {
    path: '/profile',
    component: () => import(/* webpackChunkName: "about" */ '../views/profile/Profile')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
