import Vue from 'vue'
import VueResource from 'vue-resource'
Vue.use(VueResource)

const state = {
  content: {
    title: 'EXPERIENCE',
    caption: 'WORK EXPERIENCE',
    experiences: [
      { responsibility: 'Full Stack Developer', period: '2017-2018', description: 'Tolerably earnestly middleton extremely distrusts she boy now not. Add and offered prepare how cordial two promise. Greatly who affixed suppose but enquire compact prepare all put. Added forth chief trees but rooms think may.' },
      { responsibility: 'Front End Developer at Google Company', period: '2017-2018', description: 'Tolerably earnestly middleton extremely distrusts she boy now not. Add and offered prepare how cordial two promise. Greatly who affixed suppose but enquire compact prepare all put. Added forth chief trees but rooms think may.' },
      { responsibility: 'System Analyst', period: '2017-2018', description: 'Tolerably earnestly middleton extremely distrusts she boy now not. Add and offered prepare how cordial two promise. Greatly who affixed suppose but enquire compact prepare all put. Added forth chief trees but rooms think may.' },
      { responsibility: 'Creative Designer', period: '2017-2018', description: 'Tolerably earnestly middleton extremely distrusts she boy now not. Add and offered prepare how cordial two promise. Greatly who affixed suppose but enquire compact prepare all put. Added forth chief trees but rooms think may.' },
      { responsibility: 'UI/UX Designer at Envato', period: '2017-2018', description: 'Tolerably earnestly middleton extremely distrusts she boy now not. Add and offered prepare how cordial two promise. Greatly who affixed suppose but enquire compact prepare all put. Added forth chief trees but rooms think may.' },
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
