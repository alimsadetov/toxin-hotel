import { createRouter, createWebHistory } from 'vue-router'
import Landing from '../views/Landing.vue'
import SignIn from '../views/SignIn.vue'
import Rooms from '../views/Rooms.vue'
import RoomReview from '../views/RoomReview.vue'

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
  },
  {
    path: '/rooms',
    name: 'Rooms',
    component: Rooms
  },
  {
    path: '/room/:id/:photo/:cost',
    name: 'RoomReview',
    component: RoomReview
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
