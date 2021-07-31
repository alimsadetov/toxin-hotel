import { createRouter, createWebHistory } from 'vue-router'
import Landing from '../views/Landing.vue'
import SignIn from '../views/SignIn.vue'

const routes = [
  {
    path: '/main',
    name: 'Landing',
    component: Landing,
    alias: '/'
  },
  {
    path: '/signin',
    name: 'SignIn',
    component: SignIn
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
