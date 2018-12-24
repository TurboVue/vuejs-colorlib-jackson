import Vue from 'vue'
import VueResource from 'vue-resource'
Vue.use(VueResource)

// Initial state
const state = {
  menus: []
}

const mutations = {
  'SET_STATE_MENUS'(state, menus){
    state.menus = menus
  }
}

const actions = {
  'load-state-menus'(context){
    const menus = [
      { path: '/', title: 'home' },
      { path: '/about', title: 'about' },
      { path: '/services', title: 'services' },
      { path: '/skills', title: 'skills' },
      { path: '/education', title: 'education' },
      { path: '/experience', title: 'experience' },
      { path: '/work', title: 'work' },
      { path: '/blog', title: 'blog' },
      { path: '/contact', title: 'contact' },
    ];
    context.commit('SET_STATE_MENUS', menus)
  }
}

export default{
  state,
  getters: [],
  mutations,
  actions
}
