import Vue from 'vue'
import VueResource from 'vue-resource'
Vue.use(VueResource)

const state = {
  content: {
    title: 'MY SPECIALTY',
    caption: 'MY SKILLS',
    description: 'The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild Question Marks and devious Semikoli, but the Little Blind Text didn’t listen. She packed her seven versalia, put her initial into the belt and made herself on the way.',
    skills: [
      { name: 'Photoshop', progress: '75', color: 'progress-bar color-1' },
      { name: 'jQuery', progress: '90', color: 'progress-bar color-2' },
      { name: 'HTML5', progress: '99', color: 'progress-bar color-3' },
      { name: 'WordPress', progress: '50', color: 'progress-bar color-4' },
      { name: 'CSS3', progress: '50', color: 'progress-bar color-5' },
      { name: 'SEO', progress: '50', color: 'progress-bar color-6' },
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
