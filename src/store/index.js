import Vue from 'vue'
import Vuex from 'vuex'
import VueResource from 'vue-resource'
import example from './modules/example'

Vue.use(Vuex)
Vue.use(VueResource)


export default new Vuex.Store({
  modules: {
    example
  },
  // mutations,
  // actions
})
