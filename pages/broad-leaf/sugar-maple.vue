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
      subtitle: 'Broad-Leaf | Sugar Maple',
      name: 'sugar maple',
      mainImage: '<img src="//upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Acer_saccharum_1-jgreenlee_%285098070608%29.jpg/220px-Acer_saccharum_1-jgreenlee_%285098070608%29.jpg">',
      mainContent: '<span>start spot</span>'
    }
  }
  // mounted: function () {
  //   console.log('ready')
  //   this.getMainImage()
  // },
  // asyncData () {
  //   let name = 'sugar maple'
  //   // https://en.wikipedia.org/w/index.php?action=render&title=
  //   return axios.get(`http://en.wikipedia.org/w/api.php?action=opensearch&limit=5&format=json&&namespace=0&search=${name}`)
  //     .then((res) => {
  //       if (process.BROWSER_BUILD) {
  //         // require('window')
  //         console.warn('i am back', res)
  //         var stuff = ''
  //         var w = window
  //         var parser = new w.DOMParser()
  //         var xmlDoc = parser.parseFromString(res, 'text/xml')
  //         stuff = xmlDoc.getElementsByTagName('Image')[0]
  //         console.log('stuff', stuff)
  //         return stuff
  //       }
  //     })
  // }
  // methods: {
  //   getMainImage: function () {
  //     // ajax get County list
  //     axios.get('https://en.wikipedia.org/w/api.php?action=opensearch&limit=5&format=json&&namespace=0&search=' + this.name)
  //       .success(function (response) {
  //         console.warn('&&&&&&&&&&&&&&&&&&&&', response)
  //         this.mainContent = response
  //       })
  //       .error(function (err) {
  //         console.error('Error on api call to wikipedia', err)
  //       })
  //   }
  // }
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
