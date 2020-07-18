import Vue from 'vue'
// the component
import { FontAwesomeIcon } from '@fortawesome/fontawesome-pro'
import '@fortawesome/fontawesome-pro/css/all.css' // Ensure you are using css-loader

// icon 要使用的標籤名稱 <font-awesome-icon>
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.config.productionTip = false
