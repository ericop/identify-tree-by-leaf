<template>
  <section class="container">
    <div>
      <h2 class="subtitle">
        Start
      </h2>
      <div class="main-image"><img src="http://uptreeid.com/KeyLeafOnly/PICS/Sfwd-Hdwd.jpg"/></div>
      <div class="links">
        <h2>First, pick:</h2>
        <nuxt-link to="/conifer" class="button--green">conifer</nuxt-link>
        <nuxt-link to="/broad-leaf" class="button--green">broad-leaf</nuxt-link>
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
