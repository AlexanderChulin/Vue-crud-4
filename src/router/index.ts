import { createRouter, createWebHistory } from 'vue-router'

import CreateBookView from '../views/CreateBookView.vue'
import EditBookView from '../views/EditBookView.vue'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/create',
    name: 'create',
    component: CreateBookView
  },
  {
    path: '/edit/:id',
    name: 'edit',
    component: EditBookView
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router