import { createRouter, createWebHistory } from 'vue-router'
import AppHomePage from '../components/AppHomePage.vue'
import AppContact from '../components/AppContact.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: AppHomePage
  },
  {
    path: '/contact',
    name: 'Contact',
    component: AppContact
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
