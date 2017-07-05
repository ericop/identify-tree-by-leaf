<template>
  <section class="container">
    <div>
      <logo/>
      <h1 class="title">
        Identify Tree by Leaf
      </h1>
      <h2 class="subtitle">
        An EricOP Universal Vue.js App (NUXT)
      </h2>
      <div class="links">
        <a href="https://nuxtjs.org/" target="_blank" class="button--green">Docs on NUXT</a>
        <a href="https://github.com/ericop/identify-tree-by-leaf" target="_blank" class="button--grey">This project on GitHub</a>
      </div>
      <a
      title="By derivative work: McSush (talk) Leaf_morphology_no_title.png: User: Debivort (Leaf_morphology_no_title.png) [GFDL (<a href=&quot;http://www.gnu.org/copyleft/fdl.html&quot;>http://www.gnu.org/copyleft/fdl.html</a>) or CC-BY-SA-3.0 (<a href=&quot;http://creativecommons.org/licenses/by-sa/3.0/&quot;>http://creativecommons.org/licenses/by-sa/3.0/</a>)], via Wikimedia Commons"
      href="https://commons.wikimedia.org/wiki/File%3ALeaf_morphology.svg"><img width="512" alt="Leaf morphology"
      src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Leaf_morphology.svg/512px-Leaf_morphology.svg.png"/>
      </a>
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
.container
{
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.title
{
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}
.subtitle
{
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}
.links
{
  padding-top: 15px;
}
</style>
