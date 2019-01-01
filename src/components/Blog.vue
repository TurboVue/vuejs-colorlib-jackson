<template>
  <section class="colorlib-blog" data-section="blog">
    <div class="colorlib-narrow-content">
      <div class="row">
        <div class="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
          <span class="heading-meta">Read</span>
          <h2 class="colorlib-heading">Recent Blog</h2>
        </div>
      </div>
      <div class="row">
        <div v-for="(post, index) in content.posts" class="col-md-4 col-sm-6 animate-box" data-animate-effect="fadeInLeft">
          <div class="blog-entry">
            <a :href="post.path" class="blog-img">
              <img :src="post.images" class="img-responsive" :alt="post.title"></a>
              <div class="desc">
                <span><small>{{post.datatime}} </small> | <small> {{post.category}} </small> | <small> <i class="icon-bubble3"></i> {{post.comments}}</small></span>
                <h3><a :href="post.path">{{post.title}}</a></h3>
                <p>{{post.description}}</p>
              </div>
            </div>
          </div>
        </div>

        <div v-if="content.posts.length > 2" class="row">
          <div class="col-md-12 animate-box">
            <p><a href="#" class="btn btn-primary btn-lg btn-load-more">Load more <i class="icon-reload"></i></a></p>
          </div>
        </div>
      </div>
    </section>
  </template>

  <script>
  import store from '../store'
  import { contentWayPoint } from './utils'

  export default {
    name: 'Blog',
    mounted(){
      contentWayPoint()
    },
    computed: {
      content(){
        return store.state.blog.content
      }
    }
  }
  </script>
