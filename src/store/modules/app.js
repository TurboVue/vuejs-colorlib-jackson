import Vue from 'vue'
import VueResource from 'vue-resource'
Vue.use(VueResource)

// Initial state
const state = {
  profile: {}
}

const mutations = {
  'SET_STATE_PROFILE'(state, profile){
    state.profile = profile
  }
}

const actions = {
  'load-state-profile'(context){
    const profile = {
      name: 'Jackson Ford',
      job: 'UI/UX/Designer',
      country: 'in Philippines',
      image: 'url(static/images/about.jpg)'
    };
    context.commit('SET_STATE_PROFILE', profile)
  }
}

export default{
  state,
  getters: [],
  mutations,
  actions
}
