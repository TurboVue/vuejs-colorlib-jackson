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

export default {
  name: 'App',
  components: {
    Sidebar
  }
}
</script>
