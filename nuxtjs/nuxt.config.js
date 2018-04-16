module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'nuxtweb',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
   /*
  ** Mode to SPA
  */
  mode : 'spa',

  /*
  generate :{
    dir : 'dist-new'
  },
  */  

  router: {
    base: '/app/',
    mode: 'hash'
  },

  modules : [
    '@nuxtjs/axios',
  ],

  axios:{
    proxy: true
  },

  proxy : {
    '/api' : 'http://localhost:3333',
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
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
