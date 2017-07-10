<template>
  <section class="container">
    <div>
      <h2 class="subtitle">
        {{subtitle}}
      </h2>
      <div class="links">
        <nuxt-link to="/broad-leaf/" class="button--grey">Broad-leaf (back)</nuxt-link>
        <nuxt-link to="/broad-leaf/sugar-maple" class="button--green">Sugar Maple (router test)</nuxt-link>
      </div>

    </div>
  </section>
</template>

<script>
import Logo from '~components/Logo.vue'

export default {
  data: function () {
    return {
      subtitle: 'Board-Leaf | Simple'
    }
  },
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
