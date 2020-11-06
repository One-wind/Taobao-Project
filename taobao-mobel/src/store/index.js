import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    compX:'AllOrders',
    hiddenBottom:false
  },
  mutations: {
    setCompX(state,str){
      state.compX = str;
    },
    setHidden(state,flag){
      state.hiddenBottom = flag
    }   
  },
  actions: {
  },
 
})
