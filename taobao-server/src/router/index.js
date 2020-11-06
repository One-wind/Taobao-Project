import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  { path: '/about', name: 'About',component: () => import( '../views/About.vue')},
  { path: '/login', name: 'Login',component: () => import( '../views/Login.vue')},
  { path: '/updata/:id', name: 'Updata',component: () => import( '../views/Updata.vue')},
  { path: '/add', name: 'Add',component: () => import( '../views/Add.vue')},
  
  {path:'/*' , redirect:'/'}

]

const router = new VueRouter({
  routes
})

export default router
