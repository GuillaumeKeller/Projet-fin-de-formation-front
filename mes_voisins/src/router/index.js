import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/inscription',
    name: 'inscription',
    component: () => import(/* webpackChunkName: "inscription" */ '../views/InscriptionView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
