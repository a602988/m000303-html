<template>

  <div>
    <Carousels />
    <v-container class="py-1 px-2 elevation-2">
      <v-row no-gutters align="center">
        <v-col cols="auto">
          <v-responsive
            class="text-center grey lighten-2 rounded-circle d-inline-flex align-center justify-center ma-1 bg-gradient m-icon-c"
            height="25"
            width="25"
          >
            <v-icon small dark>fas fa-volume</v-icon>
          </v-responsive>
        </v-col>
        <v-col class="overflow-hidden">
          <p class="text-body-2 text-truncate mb-0 grey--text text--darken-1">{{msg}}}</p>
        </v-col>
        <v-col cols="auto ml-1">
          <span class="d-block rounded-l-xl  blue lighten-1 px-2 py-1 white--text text-body-2"> {{msgClass}} </span>
        </v-col>

      </v-row>
    </v-container>
    <p>
      <NuxtLink to="/about">
        About page
      </NuxtLink>
    </p>
    <p>
      <NuxtLink to="/users">
        Lists of users
      </NuxtLink>
    </p>
  </div>
</template>
<script>
  import Carousels from '~/components/Carousels.vue'
  export default {
    components: {
      Carousels
    },
    data(){
      return {
        msg:'請會員注意自身資安安全，立亨絕對注意自身資安安全，立亨絕對...',
        msgClass:'熱門賽事',
      }
    }
  }


</script>


