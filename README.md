# m000303-html

## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```
//https://lhbetex-api.ifun18.com/api-v1/site/get-bulletin

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).
# 製作規範

1. 組件的樣式請直接方在組件內
2. 頁面css請放置assets
3. 


# 常用筆記

## css

    @media screen and (orientation: landscape) {)
    
    @media #{map-get($display-breakpoints, 'sm-and-down')} {
          height: 25px;
        }
        
    @media #{map-get($display-breakpoints, 'sm-and-up')} {
          
          }
          
    @media #{map-get($display-breakpoints, 'xs-only')} {
        height: 25px;
      }
      
      &:lang(en-US){
            
       }
    
## 跑資料與語系

    // pages/_lang/index.vue
    <marquee-text :repeat="3" :duration="40">
        <a v-bind:href="marqueeText.url"  v-for="(marqueeText,i) in marqueeTexts">
             <span v-if="$i18n.locale === 'tw'">{{marqueeText.subject}}</span>
             <span v-if="$i18n.locale === 'en'">{{marqueeText.subject_eng}}</span>
        </a>
    </marquee-text>
    
    export default {
        head () {
          return { title: this.$t('index.title') }
        },
        components: {
          MarqueeText,
        },
        data(){
          return {
            marqueeTexts: null,
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
          }
        }
      }

    
資料內容 
    
    // pages/static/data/marquee.json
    {
      "success": true,
      "data": [
    	{
    	  "type": "熱門賽事",
    	  "subject": "首存滿千送500現金,指定經銷介紹好友再領588現金",
    	  "subject_eng": "Free 500 cash for the first deposit of over 1,000, designated dealers to introduce friends and then receive 588 cash",
    	  "url": "/about"
    	},
    	{
    	  "type": "系統公告",
    	  "subject": "今天的例行維護作業完畢 遊戲皆可以正常運行了。 請清除暫存在登入遊戲~謝謝",
    	  "subject_eng": "Today's routine maintenance work is completed, the game can run normally. Please clear the temporary login game~Thank you",
    	  "url": "/conpon"
    	}
      ]
    }


    // 
    
