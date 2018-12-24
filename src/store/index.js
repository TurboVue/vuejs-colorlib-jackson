import Vue from 'vue'
import Vuex from 'vuex'
import VueResource from 'vue-resource'

import app from './modules/app'
import sidebar from './modules/sidebar'

Vue.use(Vuex)
Vue.use(VueResource)


export default new Vuex.Store({
  modules: {
    app,
    sidebar
  },
  // mutations,
  // actions
})
