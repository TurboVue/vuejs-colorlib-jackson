<template>
  <section>
    <a href="#" class="js-colorlib-nav-toggle colorlib-nav-toggle" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar"><i></i></a>
    <aside id="colorlib-aside" role="complementary" class="border js-fullheight">

      <div class="text-center">
        <div class="author-img"  v-bind:style="{backgroundImage: profile.image }"></div>
        <h1 id="colorlib-logo"><a href="index.html">{{ profile.name }}</a></h1>
        <span class="position"><a href="#">{{ profile.job }}</a> {{ profile.country }}</span>
      </div>

      <colorlib-main-menu :menus="menus"></colorlib-main-menu>
      <colorlib-footer></colorlib-footer>

    </aside>
  </section>
</template>

<script>
import store from '../store'
import ColorlibMainMenu from '@/components/shared/ColorlibMainMenu'
import ColorlibFooter from '@/components/shared/ColorlibFooter'

export default {
  name: 'Sidebar',
  components: {
    ColorlibMainMenu,
    ColorlibFooter
  },
  computed: {
    profile() { return store.state.app.profile },
    menus(){ return store.state.sidebar.menus }
  }
}
</script>
