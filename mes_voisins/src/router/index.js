import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/annonces',
    name: 'ads',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '@/views/AdsView.vue')
  },
  {
    path: '/connexion',
    name: 'login',
    component: () => import('@/views/LoginView.vue')
  },
  {
    path: '/inscription',
    name: 'register',
    component: () => import(/* webpackChunkName: "about" */ '@/views/RegisterView.vue')
  },
  {
    path: '/profil/:id',
    name: 'profile',
    component: () => import(/* webpackChunkName: "about" */ '@/views/ProfileView.vue')
  },
  {
    path: '/annonces/annonce/:id',
    name: 'ad',
    component: () => import(/* webpackChunkName: "about" */ '@/views/SingleAdView.vue')
  }, 
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
