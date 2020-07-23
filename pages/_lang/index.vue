<template>

  <div>
    <Carousels />
    <div class="py-1 px-2 m-index-marquee">
      <!-- marquee -->
      <v-row no-gutters align="center">
        <v-col cols="auto">
          <v-responsive
            class="text-center grey lighten-2 rounded-circle d-inline-flex align-center justify-center ma-1 m-gradient m-icon-c"
            height="25"
            width="25"
          >
            <v-icon small dark>fas fa-volume</v-icon>
          </v-responsive>
        </v-col>

        <v-col class="overflow-hidden">
          <marquee-text>
            <span  v-for="(marqueeText,i) in marqueeTexts"><a @href="marqueeText.url" >{{marqueeText.title}}</a></span>
          </marquee-text>
        </v-col>
        <v-col cols="auto ml-1">
          <span class="d-block rounded-l-xl  indigo px-2 py-1 white--text text-body-2"> {{msgClass}} </span>
        </v-col>
      </v-row>
    </div>
    <div  class="py-3 px-2">
      <v-row no-gutters align="center" >
        <!-- login-box -->
        <v-col cols="auto" class="m-login-box">
          <div class="m-sm-flex-box">
            <p class="mb-0 text-body-2 px-1">{{ $t('index.login-box')}}</p>
            <v-btn class="ma-2 blue--text text--darken-2" rounded  elevation="0" color="#eee">
              <v-icon left>fas fa-user</v-icon> {{ $t('index.login-box-btn')}}
            </v-btn>
          </div>
        </v-col>
        <!-- m-index-quick-link -->
        <v-col class="m-index-quick-link text-right k ml-3 ml-sm-5">
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
    <h1>test</h1>
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
  import MarqueeText from '~/components/vue-marquee-text-component/vue-marquee-text-component.vue'

  // 跑馬燈文字
  const dataMarquee = [
    { id: 1, title:'首存滿千送500現金,指定經銷介紹好友再領588現金', url:''},
    { id: 2, title:'今天的例行維護作業完畢 遊戲皆可以正常運行了。 請清除暫存在登入遊戲~謝謝', url:''},
  ]

  export default {
    components: {
      Carousels,
      MarqueeText
    },
    data(){
      return {
        msgClass:'熱門賽事',
        marqueeTexts: dataMarquee
      }
    },
    methods:{
      getInfo(){

      }
    }
  }


</script>


