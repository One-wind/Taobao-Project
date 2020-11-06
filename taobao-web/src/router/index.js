import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {path: '/', name: 'Home', component: Home },
  {path: '/login', name: 'Login', component: () => import('../views/Login.vue')},
  {path: '/loginupata', name: 'LoginUpdata', component: () => import('../views/LoginUpdata.vue')},
  // {path: '/register', name: 'Register', component: () => import('../views/Register.vue')},
  
  {path: '/category/:type', name: 'Category', component: () => import('../views/Category.vue')},

  {path: '/search/:text', name: 'search', component: () => import('../views/Search.vue')},
  // 商品详情
  {path: '/goods/:id', name: 'goods', component: () => import('../views/GoodsDetail.vue')},
  // 购物车
  {path: '/cart/:goodsInfo', name: 'Cart', component: () => import('../views/Cart.vue')},
  // 结算页
  {path: '/settlement/:orderid', name: 'settlement', component: () => import('../views/Settlement.vue')},


  {path:'/*', redirect:'/'}
]

const router = new VueRouter({
  routes
})


// 保存原来的push函数
const routerPush = VueRouter.prototype.push 
// 重写push函数
VueRouter.prototype.push = function push(location) {
  
 // 这个if语句在跳转相同路径的时候，在路径末尾添加新参数（一些随机数字）
 // 用来触发watch
 if(typeof(location)=="string"){
 var Separator = "&";
 if(location.indexOf('?')==-1) { Separator='?'; }
 location = location + Separator + "random=" + Math.random();
 }
  
 // 这个语句用来解决报错
 // 调用原来的push函数，并捕获异常
 return routerPush.call(this, location).catch(error => error)
}
  
export default router

