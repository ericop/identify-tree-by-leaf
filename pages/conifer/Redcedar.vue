<template>
  <section class="container">
    <div>
      <logo/>
      <h1 class="title">
        Identify Tree by Leaf
      </h1>
        <transition name="slide-fade">
        <h2 class="subtitle">
          Conifer | Red Cedar
        </h2>
        </transition>
      <div class="links">
        <a href="https://nuxtjs.org/" target="_blank" class="button--green">Docs on NUXT</a>
        <a href="https://github.com/ericop/identify-tree-by-leaf" target="_blank" class="button--grey">This project on GitHub</a>
        <nuxt-link to="/conifer" class="button--green">conifer (router test)</nuxt-link>
        <nuxt-link to="/conifer/arborvitae" class="button--green">Arborvitae (router test)</nuxt-link>
        <nuxt-link to="/conifer/redcedar" class="button--green">Red cedar (router test)</nuxt-link>
      </div>

    </div>
  </section>
</template>

<script>
import Logo from '~components/Logo.vue'

export default {
  components: {
    Logo
  }
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
