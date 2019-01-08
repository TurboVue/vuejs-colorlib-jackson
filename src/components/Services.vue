<template>
  <section>
    <section class="colorlib-services" data-section="services">
      <div class="colorlib-narrow-content">
        <div class="row">
          <div class="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
            <span class="heading-meta">{{ content.title }}</span>
            <h2 class="colorlib-heading">{{ content.caption }}</h2>
          </div>
        </div>

        <div class="row row-pt-md" v-if="content.cards">
          <div v-for="expertise in content.cards" class="col-md-4 text-center animate-box">
            <div v-bind:class="expertise.cardColor">
              <span class="icon">
                <i v-bind:class="expertise.cardIcon"></i>
              </span>
              <div class="desc">
                <h3>{{expertise.cardTitle}}</h3>
                <p>{{expertise.cardText}}</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>

    <div v-if="content.counters" id="colorlib-counter" class="colorlib-counters" style="background-image: url(static/images/cover_bg_1.jpg);" data-stellar-background-ratio="0.5">
      <div class="overlay"></div>
      <div class="colorlib-narrow-content">
        <div class="row">
        </div>
        <div class="row">

          <div v-for="counter in content.counters" class="col-md-3 text-center animate-box">
            <span class="colorlib-counter js-counter" data-from="0" v-bind:data-to="counter.amount" data-speed="5000" data-refresh-interval="50"></span>
            <span class="colorlib-counter-label">{{counter.title}}</span>
          </div>

        </div>
      </div>
    </div>

  </section>
</template>

<script>
import store from '../store'
import defaultMixin from './mixins/defaultMixin.js'

export default {
  name: 'Services',
  mixins: [defaultMixin],
  computed: {
    content() { return store.state.services.content }
  }
}
</script>
