<template>
  <section class="container">
    <div>
      <h2 class="subtitle">
        {{subtitle}}
      </h2>
      <div v-html="mainImage"></div>
      <div class="links">
        <nuxt-link to="/broad-leaf" class="button--grey">broad-leaf (back)</nuxt-link>
      </div>
    </div>
  </section>
</template>

<script>
import Logo from '~components/Logo.vue'
// import axios from 'axios'

export default {
  components: {
    Logo
  },
  data: function () {
    return {
      subtitle: 'Broad-Leaf | Box Elder',
      name: 'sugar maple',
      mainImage: '<img src="//upload.wikimedia.org/wikipedia/commons/thumb/1/18/Acnegundo.jpg/320px-Acnegundo.jpg">',
      mainContent: '<span>start spot</span>'
    }
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
