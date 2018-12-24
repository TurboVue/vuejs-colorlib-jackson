<template>
  <nav id="colorlib-main-menu" role="navigation" class="navbar">
    <div id="navbar" class="collapse">
      <ul>
        <li v-for="(menu, index) in menus" v-bind:class="{active: isActive(menu.title)}">
          <router-link :to="menu.path">
            <span v-on:click="setActive(menu.title)">{{ menu.title }}</span>
          </router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'ColorlibMainMenu',
  data() {
    return {
      activeItem: 'home'
    }
  },
  props: {
    menus: {
      type: Object,
      default: {}
    }
  },
  methods: {
    isActive: function(activeItem) {
      return this.activeItem == activeItem
    },
    setActive: function(activeItem) {
      this.activeItem = activeItem
    }
  }
}
</script>
