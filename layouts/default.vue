<template>
  <v-app>
    <div>
      <v-app-bar
        color="blue lighten-3"
        dense
        src="images/topbg.jpg"
        elevation="0"
        height="45"
      >
        <v-toolbar-title><logo /></v-toolbar-title>
        <v-spacer></v-spacer>

        <nuxt-link
          v-for="locale in availableLocales"
          :key="locale.code"
          :to="switchLocalePath(locale.code)">{{ locale.name }}
        </nuxt-link>
        <v-btn class="m-icon-c  m-gradient mx-1" fab dark x-small elevation="0">
          <v-icon small>fas fa-heart</v-icon>
        </v-btn>
        <v-btn class="m-icon-c active m-gradient mx-1" fab dark x-small elevation="0">
          <v-icon small dense>fas fa-comment-alt-dots</v-icon>
        </v-btn>
      </v-app-bar>
    </div>
    <Nuxt />
    <v-footer padless
              :class="`d-flex justify-space-around`"
              color="white"
              app
    >
      <NavFooter/>
    </v-footer>
  </v-app>
</template>

<script>
  import Logo from '~/components/Logo.vue'
  import NavFooter from '~/components/NavFooter.vue'
  export default {
    head() {
      return {
        htmlAttrs: {
          lang: this.$i18n.locale,
          amp: true,
        },
      }
    },
    components: {
      Logo,
      NavFooter,
    },
    computed: {
      availableLocales () {
        return this.$i18n.locales.filter(i => i.code !== this.$i18n.locale)
      }
    }
  }



</script>
