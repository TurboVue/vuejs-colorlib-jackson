import Vue from 'vue'
import VueResource from 'vue-resource'
Vue.use(VueResource)

const state = {
  content: {
    title: 'READ',
    caption: 'RECENT BLOG',
    posts: [
      { title: 'RENOVATING NATIONAL GALLERY', path: '/', images: 'static/images/blog-1.jpg', datatime: 'APRIL 14, 2018', category: 'WEB DESIGN', comments: '50', description: 'Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.' },
      { title: 'WORDPRESS FOR A BEGINNER', path: '/', images: 'static/images/blog-1.jpg', datatime: 'APRIL 14, 2018', category: 'WEB DESIGN', comments: '110', description: 'Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.' },
      { title: 'MAKE WEBSITE FROM SCRATCH', path: '/', images: 'static/images/blog-1.jpg', datatime: 'APRIL 14, 2018', category: 'WEB DESIGN', comments: '75', description: 'Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.' }
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
