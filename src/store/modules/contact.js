import Vue from 'vue'
import VueResource from 'vue-resource'
Vue.use(VueResource)

const state = {
  content: {
    title: 'GET IN TOUCH',
    caption: 'CONTACT',
    email: 'info@domain.com',
    address: '198 West 21th Street, Suite 721 New York NY 10016',
    phone: '+123 456 7890',
    sender: {},
    status: ''
  }
}

const mutations = {
  'UPDATE_CONTACT_STATE'(payload) {
    state.content.sender = payload
    state.content.status = 'Your email was sent.'
  }
}

const actions = {
  'get-in-touch'(context, payload){
    // Call API to seed an email and after commit to the store
    context.commit('UPDATE_CONTACT_STATE', payload)
  }
}

export default{
  state,
  getters: [],
  mutations,
  actions
}
