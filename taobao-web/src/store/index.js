import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
import UserInfo from './UserInfo'
import Search from './Search'


export default new Vuex.Store({
  modules: {
    UserInfo,Search
  }
})
