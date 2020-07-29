import colors from 'vuetify/es5/util/colors'

export default {
  /*
  ** Nuxt rendering mode
  ** See https://nuxtjs.org/api/configuration-mode
  */
  mode: 'universal',
  /*
  ** Nuxt target
  ** See https://nuxtjs.org/api/configuration-target
  */
  target: 'server',
  /*
  ** Headers of the page
  ** See https://nuxtjs.org/api/configuration-head
  */
  head: {
    //titleTemplate: '%s - ' + process.env.npm_package_name,
    titleTemplate: '%s - ' + 'VWin',
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' },
      { hid: 'description', name: 'description', content: '' },
      { hid: 'og:title', propety: 'og:title', content: '' },
      { hid: 'og:url', propety: 'og:url', content: '' },
      { hid: 'og:site_name', propety: 'og:site_name', content: '' },
      { hid: 'og:description', propety: 'og:description', content: '' },
      { hid: 'og:image', propety: 'og:image', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Global CSS
  */
  css: [
    '~/assets/default.scss',
    '~/assets/style.scss',
  ],
  /*
  ** i18n
  */
  router: {
    //middleware: 'i18n'
  },
  generate: {
    routes: [
      '/',
      '/about',
      '/en',
      '/en/about',
      '/users',
      '/en/users',
    ]
  },
  /*
  ** Plugins to load before mounting the App
  ** https://nuxtjs.org/guide/plugins
  */

  plugins: [
    //'~/plugins/i18n.js',
    {
      src: '~/plugins/font-awesome'
    },
  ],
  /*
  ** Auto import components
  ** See https://nuxtjs.org/api/configuration-components
  */
  components: true,
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    '@nuxtjs/vuetify',
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/axios',
    'nuxt-i18n'
  ],
  i18n: {
    locales: [
      //'zh-Hant', 'en',
      { code: 'zh-Hant', iso: 'zh-TW', langFile: 'zh-Hant.json' },
      { code: 'en', iso: 'en-US', langFile: 'en.json' },
    ],
    defaultLocale: 'zh-Hant',
    vueI18n: {
      fallbackLocale: 'zh-Hant',
      messages: {
        'zh-Hant': require('./locales/zh-Hant.json'),
        'en': require('./locales/en.json'),
      }
    },
  },
  /*
  ** vuetify module configuration
  ** https://github.com/nuxt-community/vuetify-module
  */
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: false,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },
  /*
  ** Build configuration
  ** See https://nuxtjs.org/api/configuration-build/
  */
  build: {
  }
}

