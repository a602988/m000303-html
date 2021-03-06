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
    titleTemplate: '%s - ' + process.env.npm_package_name,
    //titleTemplate: '%s - ' + 'VWin',
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' },
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
    {
      src: '~/plugins/font-awesome',
      //src: '~/plugins/i18n.js'
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
  styleResources: {
    scss: [
      '~/assets/variables.scss'
    ]
  },
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/axios',
    'nuxt-i18n'
  ],
  i18n: {
    baseUrl: 'http://localhost:3000/',
    locales: [
      { code: 'zh-Hant',name:'繁體中文', iso: 'zh-Hant', file: 'zh-Hant.json'},
      { code: 'en',name:'English', iso: 'en-US', file: 'en.json' },
    ],
    seo: true,
    lazy: true,
    langDir: 'locales/',
    defaultLocale: 'zh-Hant',
    vueI18n: {
      fallbackLocale: 'zh-Hant',
    },
    detectBrowserLanguage: {//檢測用戶的瀏覽器語言來將用戶重定向到其首選語言
      useCookie: true,
      cookieKey: 'i18n_redirected'
    },
  },
  /*json
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

