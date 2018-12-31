<template>
  <section class="colorlib-education" data-section="education">
    <div class="colorlib-narrow-content">
      <div class="row">
        <div class="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
          <span class="heading-meta">{{content.title}}</span>
          <h2 class="colorlib-heading animate-box">{{content.caption}}</h2>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12 animate-box" data-animate-effect="fadeInLeft">
          <div class="fancy-collapse-panel">
            <div class="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
              <!-- MY EDUCATION -->
              <div v-for="(course, index) in content.courses" class="panel panel-default">
                <div class="panel-heading" role="tab" id="headingOne">
                  <h4 class="panel-title">
                    <a v-on:click="activate(index)" data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="false" aria-controls="collapseOne">{{course.name}}
                    </a>
                  </h4>
                </div>
                <!-- (in) is my class to set default -->
                <div :class="{ in: elementIndex == index }" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingOne">
                  <div class="panel-body">
                    <div class="row">
                      <div class="col-md-12">
                        <p>{{course.description}}</p>
                      </div>
                    </div>
                  </div>
                </div>
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
  data(){
    return {
      elementIndex: 0
    }
  },
  mounted(){
    contentWayPoint()
  },
  computed: {
    content(){
      return store.state.education.content
    }
  },
  methods: {
    activate(elementIndex) {
      this.elementIndex = elementIndex
    }
  }
}
</script>
