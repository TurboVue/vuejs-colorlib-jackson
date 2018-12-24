import Vue from 'vue'
import VueResource from 'vue-resource'
Vue.use(VueResource)

// Initial state
const state = {
  slides: {}
}

const mutations = {
  'SET_STATE_SLIDES'(state, slides){
    state.slides = slides
  }
}

const actions = {
  'load-state-slides'(context){
    const slides = [
      { message: "<h1>Hiss! <br>I'm Jackson</h1><h2>100% html5 bootstrap templates Made by <a href='https://colorlib.com/' target='_blank'>colorlib.com</a></h2><p><a class='btn btn-primary btn-learn'>Download CV <i class='icon-download4'></i></a></p>",
      image: 'static/images/img_bg_1.jpg'
    },
    { message: "<h1>Hisss! <br>I'm Jackson</h1><h2>100% html5 bootstrap templates Made by <a href='https://colorlib.com/' target='_blank'>colorlib.com</a></h2><p><a class='btn btn-primary btn-learn'>Download CV <i class='icon-download4'></i></a></p>",
    image: 'static/images/img_bg_2.jpg'
  },
];
context.commit('SET_STATE_SLIDES', slides)
}
}

export default{
  state,
  getters: [],
  mutations,
  actions
}
