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
        <v-btn class="m-icon-c  bg-gradient mx-1" fab dark x-small elevation="0">
          <v-icon small>fas fa-heart</v-icon>
        </v-btn>
        <v-btn class="m-icon-c active bg-gradient mx-1" fab dark x-small elevation="0">
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
    components: {
      Logo,
      NavFooter,
    }
  }



</script>
