import Vue from 'vue'
import Vuex from 'vuex'
import VueResource from 'vue-resource'

import app from './modules/app'
import sidebar from './modules/sidebar'
import home from './modules/home'

Vue.use(Vuex)
Vue.use(VueResource)


export default new Vuex.Store({
  modules: {
    app,
    sidebar,
    home
  },
  // mutations,
  // actions
})
