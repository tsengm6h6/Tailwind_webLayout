import { createRouter, createWebHashHistory } from 'vue-router'
import landingPage from '../views/landingPage.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: landingPage
  },
  {
    path: '/products',
    name: 'Products',
    component: () => import('../views/Products.vue')
  },
  {
    path: '/product/:id',
    name: 'product',
    component: () => import('../views/Product.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/Login.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
