import Vue from 'vue'
import VueResource from 'vue-resource'
Vue.use(VueResource)

// Initial state
const state = {
  header: 'About Us',
  title: 'Who Am I?',
  cards: [],
  hireme: '<h2>I am happy to know you <br>that 300+ projects done sucessfully!</h2><a href="#" class="btn-hire">Hire me</a>'
}

const mutations = {
  'SET_STATE_ABOUT_CARDS'(state, cards){
    state.cards = cards
  }
}

const actions = {
  'load-state-about'(context){
    const cards = [
      { name: 'Graphic Design', classes: 'icon2', color: 'services color-1', icon: 'icon-bulb' },
      { name: 'Web Design', classes: 'icon2', color: 'services color-2', icon: 'icon-globe-outline' },
      { name: 'Software', classes: 'icon2', color: 'services color-3', icon: 'icon-data' },
      { name: 'Application', classes: 'icon2', color: 'services color-4', icon: 'icon-phone3' }
    ];

    context.commit('SET_STATE_ABOUT_CARDS', cards)
  }
}

export default{
  state,
  getters: [],
  mutations,
  actions
}
