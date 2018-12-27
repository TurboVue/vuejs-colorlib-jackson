<template>
  <div id="colorlib-page">
    <div class="container-wrap">
      <Sidebar />
      <div id="colorlib-main">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from '@/components/Sidebar';
import store from './store'

export default {
  name: 'App',
  components: {
    Sidebar
  },
  created() {
    store.dispatch('load-state-profile')
    store.dispatch('load-state-menus')
    store.dispatch('load-state-slides')
    store.dispatch('load-state-about')
    store.dispatch('load-state-services')
  },
}
</script>
