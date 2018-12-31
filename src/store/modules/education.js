import Vue from 'vue'
import VueResource from 'vue-resource'
Vue.use(VueResource)

const state = {
  content: {
    title: 'EDUCATION',
    caption: 'MY EDUCATION',
    courses: [
      { name: 'Master Degree Graphic Design', description: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.'},
      { name: 'Bachelor Degree of Computer Science', description: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.'},
      { name: 'Diploma in Information Technology', description: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.'},
      { name: 'High School Secondary Education', description: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.'},
    ]
  }
}

const mutations = { }

const actions = { }

export default{
  state,
  getters: [],
  mutations,
  actions
}
