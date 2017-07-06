module.exports = {
  css: [
    'assets/main.css'
  ],


  router: {
    base: '/identify-tree-by-leaf/'
  },
  /*
   ** Headers of the page
   */
  head: {
    title: 'Identify Tree by Leaf',
    meta: [{
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'Tree identification guide by leaf shape',
        name: 'Identify Tree by Leaf',
        content: 'Identify Tree by Leaf project'
      }
    ],
    link: [{
      rel: 'icon',
      type: 'image/x-icon',
      href: '/favicon.png'
    }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: {
    color: '#3B8070'
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** Run ESLINT on save
     */
    extend(config, ctx) {
      if (ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
