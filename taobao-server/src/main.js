import Vue from 'vue'
import App from './App.vue'

import router from './router'
import store from './store'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

import ajax from './lib/ajax'
import cookie from './lib/cookie'
import element from './lib/element'

Vue.use(ajax)
Vue.use(cookie)
Vue.use(element)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
