import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/components/Home'
import Board from '@/components/Board'
import Detail from '@/components/Detail'
import Create from '@/components/Create'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/board/free',
    name: 'Board',
    component: Board,
  },
  {
    path: '/board/free/detail/:contentId?',
    name: 'Detail',
    component: Detail,
  },
  {
    path: '/board/create/:contentId?',
    name: 'Create',
    component: Create,
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
