<template>
  <section id="colorlib-hero" class="js-fullheight" data-section="home">
    <div class="flexslider js-fullheight" style="height: 100%">
      <ul class="slides">
        <li v-for ="slide in slides" v-bind:style="{backgroundImage: toUrl(slide.image)}">
          <div class="overlay"></div>
          <div class="container-fluid">
            <div class="row">
              <div class="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                <div class="slider-text-inner js-fullheight">
                  <!-- Show Slides -->
                  <div class="desc" v-html="slide.message">
                  </div>
                </div>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
import store from '../store'
import { sliderMain } from '@/components/utils'

export default {
  name: 'Home',
  mounted() {
    sliderMain()
  },
  computed: {
    profile() { return store.state.app.profile },
    slides() { return store.state.home.slides },
  },
  methods: {
    toUrl(string) {
      return `url(${string})`;
    }
  }
}
</script>
