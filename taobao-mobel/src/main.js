import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false


import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
Vue.use(VueAwesomeSwiper)


import ajax from './lib/ajax.js'
Vue.use(ajax)

import cookie from './lib/cookie'
Vue.use(cookie)


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
