<template>

  <div>
    <Carousels />
    <div class="py-1 px-2 marquee-list">
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
          <p class="text-body-2 text-truncate mb-0 grey--text text--darken-1">{{msg}}</p>
        </v-col>
        <v-col cols="auto ml-1">
          <span class="d-block rounded-l-xl  blue lighten-1 px-2 py-1 white--text text-body-2"> {{msgClass}} </span>
        </v-col>
      </v-row>
    </div>
    <div id="login-box" class="py-3 px-2">
      <v-row no-gutters align="center">
        <v-col cols="auto">
          <div class="m-sm-flex-box">
            <p class="mb-0 text-body-2 px-1">{{ $t('index.login-box')}}</p>
            <v-btn class="ma-2 blue--text text--darken-2" rounded  elevation="0" color="#eee">
              <v-icon left>fas fa-user</v-icon> {{ $t('index.login-box-btn')}}
            </v-btn>
          </div>
        </v-col>
        <v-col class="text-right index-icon-link ml-3 ml-sm-5">
          <v-row no-gutters>
            <v-col cols="3">
              <button class="ml-2 blue--text text--darken-2 m-sm-flex-box float-right">
                <div class="pic d-sm-inline-block">
                  <img src="~/assets/images/index-btn1.png" class="max-pic">
                </div>
                <div class="d-block d-sm-inline-block text-body-2"> {{ $t('index.login-box-deposit')}}</div>
              </button>
            </v-col>
            <v-col cols="3">
              <button class="ml-2 blue--text text--darken-2 m-sm-flex-box float-right">
                <div class="pic">
                  <img src="~/assets/images/index-btn2.png" class="max-pic">
                </div>
                <div class="d-block text-body-2"> {{ $t('index.login-box-withdrawal')}}</div>
              </button>
            </v-col>
            <v-col cols="3">
              <button class="ml-1 blue--text text--darken-2 m-sm-flex-box float-right">
                <div class="pic">
                  <img src="~/assets/images/index-btn3.png" class="max-pic">
                </div>
                <div class="d-block text-body-2"> {{ $t('index.login-box-transfer')}}</div>
              </button>
            </v-col>
            <v-col cols="3">
              <button class="ml-1 blue--text text--darken-2 m-sm-flex-box float-right">
                <div class="pic">
                  <img src="~/assets/images/index-btn4.png" class="max-pic">
                </div>
                <div class="d-block text-body-2"> {{ $t('index.login-box-vip')}}</div>
              </button>
            </v-col>
          </v-row >
        </v-col>
      </v-row>
    </div>
      <NuxtLink to="/about">
        About page
      </NuxtLink>
      <NuxtLink to="/users">
        Lists of users
      </NuxtLink>
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
        msg:'請會員注意自身資安安全，立亨絕對注意自身資安安全，立亨絕對立亨絕對立亨絕對立亨絕對立亨絕對立亨絕對全，立亨絕對立亨絕對立亨絕對立亨絕對立亨絕對立亨絕',
        msgClass:'熱門賽事',

      }
    }
  }


</script>


