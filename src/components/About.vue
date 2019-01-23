<template>
  <section class="colorlib-about" data-section="about">
    <div class="colorlib-narrow-content">
      <div class="row">
        <div class="col-md-12">
          <div class="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
            <div class="col-md-12">
              <div class="about-desc">
                <span class="heading-meta">{{content.title}}</span>
                <h2 class="colorlib-heading">{{content.caption}}</h2>
                <div class="colorlib-about-description" v-html="content.description">
                </div>
              </div>
            </div>
          </div>
          <div v-if="content.cards.length > 0" class="row">
            <div v-for="card in content.cards" class="col-md-3 animate-box" data-animate-effect="fadeInLeft">
              <div v-bind:class="card.color">
                <span v-bind:class="card.classes"><i v-bind:class="card.icon"></i></span>
                <h3>{{ card.name }}</h3>
              </div>
            </div>
          </div>

          <div class="row" v-if="content.hireme.length > 0">
            <div class="col-md-12 animate-box" data-animate-effect="fadeInLeft">
              <div class="hire" v-html="content.hireme">
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
import defaultMixin from './mixins/defaultMixin.js'

export default {
  name: 'About',
  mixins: [defaultMixin],
  computed: {
    content() { return store.state.about.content },
  },
}
</script>
