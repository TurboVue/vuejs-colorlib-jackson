<template>
  <section>
    <a href="#" class="js-colorlib-nav-toggle colorlib-nav-toggle" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar"><i></i></a>
    <aside id="colorlib-aside" role="complementary" class="border js-fullheight">
      <div class="text-center">
        <div class="author-img"  v-bind:style="{backgroundImage: profile.image }"></div>
        <h1 id="colorlib-logo"><a href="index.html">{{ profile.name }}</a></h1>
        <span class="position"><a href="#">{{ profile.job }}</a> {{ profile.country }}</span>
      </div>
      <nav id="colorlib-main-menu" role="navigation" class="navbar">
        <div id="navbar" class="collapse">
          <ul>

            <li v-for="(menu, index) in menus" v-bind:class="{active: isActive(menu.title)}" v-on:click="setActive(menu.title)">
              <router-link :to="menu.path">
                {{ menu.title }}
              </router-link>
            </li>

          </ul>
        </div>
      </nav>

      <div class="colorlib-footer">
        <p><small>&copy; <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. -->
          Copyright &copy;   All rights reserved | This template is made with <i class="icon-heart" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank">Colorlib</a>
          <!-- <script>document.write(new Date().getFullYear());</script> -->
          <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. -->
        </span> <span>Demo Images: <a href="https://unsplash.com/" target="_blank">Unsplash.com</a></span></small></p>
        <ul>
          <li><a href="#"><i class="icon-facebook2"></i></a></li>
          <li><a href="#"><i class="icon-twitter2"></i></a></li>
          <li><a href="#"><i class="icon-instagram"></i></a></li>
          <li><a href="#"><i class="icon-linkedin2"></i></a></li>
        </ul>
      </div>

    </aside>
  </section>
</template>

<script>
import store from '../store'

export default {
  name: 'Sidebar',
  data() {
    return {
      activeItem: 'home'
    }
  },
  methods: {
    isActive: function(activeItem) {
      return this.activeItem == activeItem
    },
    setActive: function(activeItem) {
      this.activeItem = activeItem
    },
    onLoad: function(){


      		// $(document).click(function (e) {
      	  //   var container = $("#colorlib-aside, .js-colorlib-nav-toggle");
      	  //   if (!container.is(e.target) && container.has(e.target).length === 0) {
          //
      	  //   	if ( $('body').hasClass('offcanvas') ) {
          //
          // 			$('body').removeClass('offcanvas');
          // 			$('.js-colorlib-nav-toggle').removeClass('active');
          //
      	  //   	}
          //
      	  //   }
      		// // });
          //
      		// $(window).scroll(function(){
      		// 	if ( $('body').hasClass('offcanvas') ) {
          //
          // 			$('body').removeClass('offcanvas');
          // 			$('.js-colorlib-nav-toggle').removeClass('active');
          //
      	  //   	}
      		// });

    }
  },
  created() {
    store.dispatch('load-state-profile')
    store.dispatch('load-state-menus')
  },
  computed: {
    profile() {
      return store.state.side
    },
    menus(){
      return store.state.sidebar.menus
    }
  },
  mounted(){
    this.onLoad()
  }
}
</script>
