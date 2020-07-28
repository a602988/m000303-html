<template>

  <div>
    <Carousels />
    <!-- marquee -->
    <div class="py-1 px-2 m-index-marquee">
      <v-row no-gutters align="center">
        <v-col cols="auto">
          <div class="text-center grey lighten-2 rounded-circle d-inline-flex align-center justify-center  m-gradient m-icon-c">
            <v-icon small dark>fas fa-volume</v-icon>
          </div>
        </v-col>
        <v-col class="overflow-hidden m-text">
          <marquee-text :repeat="3" :duration="40">
           <a v-bind:href="marqueeText.url"  v-for="(marqueeText,i) in marqueeTexts">
             <span v-if="$i18n.locale === 'tw'">{{marqueeText.subject}}</span>
             <span v-if="$i18n.locale === 'en'">{{marqueeText.subject_eng}}</span>
           </a>
          </marquee-text>
        </v-col>
        <v-col cols="auto ml-1 m-type">
          <div class="d-inline-block rounded-l-xl  indigo px-2 white--text">
            <v-icon dark>fas fa-trophy-alt</v-icon>{{ $t('index.marquee-type')}}
          </div>
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
      <v-btn small color="primary" @click="getInfo()">get</v-btn>
     <v-btn small color="primary" @click="postInfo()">post</v-btn>
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
  // const dataMarquee = [
  //   { id: 1, title:'首存滿千送500現金,指定經銷介紹好友再領588現金', url:''},
  //   { id: 2, title:'今天的例行維護作業完畢 遊戲皆可以正常運行了。 請清除暫存在登入遊戲~謝謝', url:''},
  // ]

  export default {
    head () {
      return { title: this.$t('index.title') }
    },
    components: {
      Carousels,
      MarqueeText,
    },
    data(){
      return {
        msgClass:'熱門賽事',
        marqueeTexts: null,
        info:null
      }
    },
    created() {
      this.marqueeList()
    },
    methods:{
      marqueeList(){
        const api = 'http://localhost:3000/data/marquee.json';
        this.$axios.get(api).then(response =>{
          var response = response.data;
          if(response.success === true){
            this.marqueeTexts = response.data
          }else {
            console.log('獲取數據失敗')
          }
        });
      },
      getInfo(){

      },
      postInfo(){
        this.$axios.post('',{},{}).then(result =>{

        })
      }
    }
  }

  //https://lhbetex-api.ifun18.com/api-v1/site/get-bulletin

</script>


