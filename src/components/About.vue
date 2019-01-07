<template>
  <section class="colorlib-about" data-section="about">
    <div class="colorlib-narrow-content">
      <div class="row">
        <div class="col-md-12">
          <div class="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
            <div class="col-md-12">
              <div class="about-desc">
                <span class="heading-meta">{{ content.title }}</span>
                <h2 class="colorlib-heading">{{ content.caption }}</h2>
                <p><strong>Hi I'm Jackson Ford</strong> On her way she met a copy. The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand times and everything that was left from its origin would be the word "and" and the Little Blind Text should turn around and return to its own, safe country.</p>
                <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.</p>
              </div>
            </div>
          </div>
          <div class="row">

            <div v-for="card in content.cards" class="col-md-3 animate-box" data-animate-effect="fadeInLeft">
              <div v-bind:class="card.color">
                <span v-bind:class="card.classes"><i v-bind:class="card.icon"></i></span>
                <h3>{{ card.name }}</h3>
              </div>
            </div>

          </div>

          <div class="row">
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
