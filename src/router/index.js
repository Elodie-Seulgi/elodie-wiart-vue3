import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ListView from '../views/ListView.vue'
import DetailView from '../views/DetailView.vue'

const routes = [
  { 
    path: '/', 
    name: 'home', 
    component: HomeView 
  },
  { 
    path: '/list', 
    name: 'list', 
    component: ListView 
  },
  { 
    path: '/details/:cardId', 
    name: 'details', 
    component: DetailView 
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router