import Vue from 'vue'
import Vuex from 'vuex'
import VueResource from 'vue-resource'

import app from './modules/app'
import sidebar from './modules/sidebar'
import home from './modules/home'
import about from './modules/about'
import services from './modules/services'

Vue.use(Vuex)
Vue.use(VueResource)


export default new Vuex.Store({
  modules: {
    app,
    sidebar,
    home,
    about,
    services
  },
  // mutations,
  // actions
})
