import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import i18n from './i18n'


// 自定义插件
import ajax from './lib/ajax.js'
import cookie from './lib/cookie.js'
import element from './lib/element.js'


import VueAwesomeSwiper from 'vue-awesome-swiper'
// import 'swiper/swiper-bundle.css'
import 'swiper/css/swiper.css'


Vue.use(VueAwesomeSwiper)

Vue.use(ajax)
Vue.use(cookie)
Vue.use(element)

Vue.config.productionTip = false





new Vue({
  router,
  i18n,
  store,
  render: h => h(App)
}).$mount('#app')
