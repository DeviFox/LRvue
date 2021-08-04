import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'login',
    meta: {layout:'empty'},
    component: () => import('../views/Login.vue')
  },
  {
    path: '/categories',
    name: 'categories',
    meta: {layout:'main'},
    component: () => import('../views/Categories.vue')
  },
  {
    path: '/history',
    name: 'history',
    meta: {layout:'main'},
    component: () => import('../views/History.vue')
  },
  {
    path: '/personal',
    name: 'personal',
    meta: {layout:'main'},
    component: () => import('../views/Personal.vue')
  },
  {
    path: '/profile',
    name: 'profile',
    meta: {layout:'main'},
    component: () => import('../views/Profile.vue')
  },
  {
    path: '/projects',
    name: 'projects',
    meta: {layout:'main'},
    component: () => import('../views/Projects.vue')
  }



]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
