<template>
  <section class="colorlib-skills" data-section="skills">
    <div class="colorlib-narrow-content">
      <div class="row">
        <div class="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
          <span class="heading-meta">{{content.title}}</span>
          <h2 class="colorlib-heading animate-box">{{content.caption}}</h2>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12 animate-box" data-animate-effect="fadeInLeft">
          <p>{{content.description}}</p>
        </div>
        <!-- MY SKILLS -->
        <div v-for="(ability, index) in content.skills" class="col-md-6 animate-box" data-animate-effect="fadeInLeft">
          <div class="progress-wrap">
            <h3>{{ability.name}}</h3>
            <div class="progress">
              <div v-bind:class="`progress-bar color-${index+1}`" role="progressbar" v-bind:aria-valuenow="ability.progress"
              aria-valuemin="0" aria-valuemax="100" v-bind:style="{width: toPercent(ability.progress)}">
              <span>{{toPercent(ability.progress)}}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
</template>

<script>
import store from '../store'
import { contentWayPoint } from './utils'

export default {
  name: 'Services',
  mounted(){
    contentWayPoint()
  },
  computed: {
    content(){
      return store.state.skills.content
    }
  },
  methods: {
    toPercent(number) {
      return `${number}%`
    }
  }
}
</script>
