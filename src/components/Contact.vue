<template>
  <section class="colorlib-contact" data-section="contact">
    <div class="colorlib-narrow-content">
      <div class="row">
        <div class="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
          <span class="heading-meta">Get in Touch</span>
          <h2 class="colorlib-heading">Contact</h2>
        </div>
      </div>
      <div class="row">
        <div class="col-md-5">
          <div v-if="content.email" class="colorlib-feature colorlib-feature-sm animate-box" data-animate-effect="fadeInLeft">
            <div class="colorlib-icon">
              <i class="icon-globe-outline"></i>
            </div>
            <div class="colorlib-text">
              <p><a href="#">{{content.email}}</a></p>
            </div>
          </div>

          <div v-if="content.address" class="colorlib-feature colorlib-feature-sm animate-box" data-animate-effect="fadeInLeft">
            <div class="colorlib-icon">
              <i class="icon-map"></i>
            </div>
            <div class="colorlib-text">
              <p>{{content.address}}</p>
            </div>
          </div>

          <div v-if="content.phone" class="colorlib-feature colorlib-feature-sm animate-box" data-animate-effect="fadeInLeft">
            <div class="colorlib-icon">
              <i class="icon-phone"></i>
            </div>
            <div class="colorlib-text">
              <p><a href="tel://">{{content.phone}}</a></p>
            </div>
          </div>
        </div>

        <div class="col-md-7 col-md-push-1">
          <div class="row">
            <div class="col-md-10 col-md-offset-1 col-md-pull-1 animate-box" data-animate-effect="fadeInRight">
              <form action="">

                <div class="form-group">
                  <input
                    v-model="contact.name"
                    v-validate="{ required: true, min: 2, max: 20, alpha: true }"
                    :class="{'has-error': errors.first('name') }"
                    id="name"
                    name="name"
                    type="text"
                    class="form-control"
                    placeholder="Name">
                <p class="text-danger" v-if="errors.has('name')">{{ errors.first('name') }}</p>
                </div>

                <div class="form-group">
                  <input
                    v-model="contact.email"
                    v-validate="'required|email'"
                    :class="{'has-error': errors.first('email') }"
                    id="email"
                    name="email"
                    type="text"
                    class="form-control"
                    placeholder="Email">
                  <p class="text-danger" v-if="errors.has('email')">{{ errors.first('email') }}</p>
                </div>

                <div class="form-group">
                  <input
                    v-model="contact.subject"
                    v-validate="{ required: true, min: 5, max: 20 }"
                    :class="{'has-error': errors.first('subject') }"
                    id="subject"
                    name="subject"
                    type="text"
                    class="form-control"
                    placeholder="Subject">
                  <p class="text-danger" v-if="errors.has('subject')">{{ errors.first('subject') }}</p>
                </div>

                <div class="form-group">
                  <textarea
                    v-model="contact.message"
                    v-validate="{ required: true, min: 10, max: 200, alpha: true }"
                    :class="{'has-error': errors.first('message') }"
                    id="message"
                    name="message"
                    cols="30"
                    rows="7"
                    class="form-control"
                    placeholder="Message"></textarea>
                  <p class="text-danger" v-if="errors.has('message')">{{ errors.first('message') }}</p>
                </div>

                <div class="form-group">
                  <input
                    @click.prevent="submitted"
                    type="submit"
                    class="btn btn-primary btn-send-message"
                    value="Send Message">
                </div>

                <div v-if="content.status.length" class="form-group">
                  <span class="form-control alert">{{content.status}}</span>
                </div>
              </form>
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
  name: 'Contact',
  mixins: [defaultMixin],
  data() {
    return {
      contact: {
        name: '',
        email: '',
        subject: '',
        message: ''
      }
    }
  },
  computed: {
    content(){
      return store.state.contact.content
    }
  },
  methods: {
    submitted() {
      let payload = this.contact

      this.$validator.validateAll().then((result) => {
        if (result) {
          store.dispatch('get-in-touch', payload)
        }
        if(!result){
          alert('Oops! Complete all fields.');
        }
      });
    }
  }
}
</script>


<style scoped>
  .has-error {
    border: 1px solid #a94442 !important;
  }
  .alert {
    background-color: #d4edda;
    border-color: #c3e6cb;
  }
</style>
