<template>
  <section class="container">
    <div>
      <h2 class="subtitle">
        {{subtitle}}
      </h2>
      <div v-html="mainImage"></div>
      <div class="links">
        <nuxt-link to="/conifer" class="button--grey">confier (back)</nuxt-link>
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
      subtitle: 'Confier | Red Cedar',
      name: 'sugar maple',
      mainImage: '<img src="//upload.wikimedia.org/wikipedia/commons/thumb/2/2c/2014-05-13_08_32_55_Eastern_Red_Cedar_at_South_Riding_Golf_Club_in_South_Riding%2C_Virginia.JPG/220px-2014-05-13_08_32_55_Eastern_Red_Cedar_at_South_Riding_Golf_Club_in_South_Riding%2C_Virginia.JPG">',
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
