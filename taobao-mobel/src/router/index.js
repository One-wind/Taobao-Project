import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', component: Home },
  { path: '/cart', component: () => import('../views/Cart.vue') },
  { path: '/orderlist', component: () => import('../views/List.vue') },
  // {path: '/my', component: () => import('../views/My.vue') },

  // 我的淘宝页路由配置
  { path: '/my', component: () => import('../views/My.vue') },
  { path: '/footprint', component: () => import('../views/MyChildren/Footprint.vue') },
  { path: '/myFavorite', component: () => import('../views/MyChildren/MyFavorite.vue') },
  { path: '/mailList', component: () => import('../views/MyChildren/MailList.vue') },
  { path: '/global', component: () => import('../views/MyChildren/Global.vue') },


  {
    path: '/Verification',
    component: () =>
      import('../views/about/Verification.vue')
  },
  {
    path: '/WuRegister',
    component: () =>
      import('../views/about/WuRegister.vue')
  },
  {
    path: '/y_shopcart',
    component: () =>
      import('../views/about/y_shopcart.vue')
  },
  {
    path: '/Settlement',
    component: () =>
      import('../views/about/Settlement.vue')
  },

  { path: '/more', component: () => import('../views/More.vue') },
  { path: '/search', component: () => import('../views/Search.vue') },
  { path: '/*', redirect: '/' }
]

const router = new VueRouter({
  routes
})

export default router
