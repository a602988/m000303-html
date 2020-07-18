<template>
  <v-app>
    <div>
      <v-app-bar
        color="blue lighten-3"
        dense
        src="/images/topbg.jpg"
        elevation="0"
      >
        <v-toolbar-title><logo /></v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn class="top-right-btn bg-gradient mx-1" fab dark x-small elevation="0">
          <v-icon>fas fa-heart</v-icon>
        </v-btn>
        <v-btn class="top-right-btn bg-gradient mx-1" fab dark x-small elevation="0">
          <v-icon>fas fa-comment-alt-dots</v-icon>
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
    components: {
      Logo,
      NavFooter
    }
  }

</script>

<style>




</style>
