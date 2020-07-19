<template id="icon-btn">
  <v-btn class="m-top-right-btn  bg-gradient mx-1" fab dark x-small elevation="0" v-if=logind>
    <v-icon small>{{class}}</v-icon>
  </v-btn>
</template>

<script>
  Vue.component('icon-btn', {
    props: ['postTitle'],
    template: '#icon-btn',
    data(){
      return{
        class:'',
        logind:''
      }
    }
  })
</script>

