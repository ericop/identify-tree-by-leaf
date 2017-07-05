<template>
  <section class="container">
    <div>
      <logo></logo>
      <h1 class="title">
        Identify Tree by Leaf
      </h1>
      <h2 class="subtitle">
        An EricOP Universal Vue.js App (NUXT)
      </h2>
      <div class="links">
        <a href="https://nuxtjs.org/" target="_blank" class="button--green">Docs on NUXT</a>
        <a href="https://github.com/ericop/identify-tree-by-leaf" target="_blank" class="button--grey">This project on GitHub</a>
        <nuxt-link to="/identify-tree-by-leaf/conifer" class="button--green">conifer</nuxt-link>
        <nuxt-link to="/identify-tree-by-leaf/start" class="button--green">start</nuxt-link>
        <nuxt-link to="/identify-tree-by-leaf/about" class="button--green">about</nuxt-link>
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

.button--green{
  margin: 1rem;
}
</style>
