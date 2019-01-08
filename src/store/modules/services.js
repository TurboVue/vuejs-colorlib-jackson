import Vue from 'vue'
import VueResource from 'vue-resource'
Vue.use(VueResource)

// Initial state
const state = {
  content: {
    title: 'WHAT I DO?',
    caption: 'HERE ARE SOME OF MY EXPERTISE',
    cards: [],
    counters: [
      { title: 'CUPS OF COFFEE', amount: '309' },
      { title: 'PROJECTS', amount: '356' },
      { title: 'CLIENTS', amount: '30' },
      { title: 'PARTNER', amount: '10' }
    ]
  }
}

const mutations = {
  'SET_STATE_SERVICES_CARDS'(state, cards){
    state.content.cards = cards
  }
}

const actions = {
  'load-state-services'(context){
    const cards = [
      { cardTitle: 'INNOVATIVE IDEAS', cardColor: 'services color-1', cardIcon: 'icon-bulb', cardText: 'Separated they live in Bookmarksgrove right at the coast of the Semantics' },
      { cardTitle: 'SOFTWARE', cardColor: 'services color-2', cardIcon: 'icon-data', cardText: 'Separated they live in Bookmarksgrove right at the coast of the Semantics' },
      { cardTitle: 'APPLICATION', cardColor: 'services color-3', cardIcon: 'icon-phone3', cardText: 'Separated they live in Bookmarksgrove right at the coast of the Semantics' },
      { cardTitle: 'GRAPHIC DESIGN', cardColor: 'services color-4', cardIcon: 'icon-layers2', cardText: 'Separated they live in Bookmarksgrove right at the coast of the Semantics' },
      { cardTitle: 'SOFTWARE', cardColor: 'services color-5', cardIcon: 'icon-data', cardText: 'Separated they live in Bookmarksgrove right at the coast of the Semantics' },
      { cardTitle: 'APPLICATION', cardColor: 'services color-6', cardIcon: 'icon-phone3', cardText: 'Separated they live in Bookmarksgrove right at the coast of the Semantics' }
    ];

    context.commit('SET_STATE_SERVICES_CARDS', cards)
  }
}

export default{
  state,
  getters: [],
  mutations,
  actions
}
