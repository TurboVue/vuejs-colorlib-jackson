import Vue from 'vue'
import VueResource from 'vue-resource'
Vue.use(VueResource)

// Initial state
const state = {
  content: {
    title: 'ABOUT US',
    caption: 'WHO AM I?',
    description: '<p><strong>Hi I\'m Jackson Ford</strong> On her way she met a copy. The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand times and everything that was left from its origin would be the word "and" and the Little Blind Text should turn around and return to its own, safe country.</p><p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.</p>',
    cards: [],
    hireme: '<h2>I am happy to know you <br>that 300+ projects done sucessfully!</h2><a href="#" class="btn-hire">Hire me</a>'
  }
}

const mutations = {
  'SET_STATE_ABOUT_CARDS'(state, cards){
    state.content.cards = cards
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
