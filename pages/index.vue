<template>
  <section class="container">
    <div>
      <logo></logo>
      <h1 class="title">
        Identify Tree by Leaf
      </h1>
      <h2 class="subtitle">
        An EricOP Universal Vue.js App (<a href="https://nuxtjs.org/" target="_blank" class="button--green">https://nuxtjs.org/</a>)
      </h2>
      <div class="links subtitle">
        <nuxt-link to="/start" class="button--green">Start</nuxt-link>
      </div>
      <transition name="slide-fade">
        <router-view></router-view>
      </transition>
      </div>
  </section>
</template>

<script>
import Logo from '~components/Logo.vue'

export default {
  components: {
    Logo
  },
  // transition: 'slide-fade'
  transition: 'page'
}
</script>

<style>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  /* 1 */
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}

</style>
