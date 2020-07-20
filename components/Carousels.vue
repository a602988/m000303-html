<template>
  <v-carousel hide-delimiters cycle show-arrows-on-hover height="20vh" class="m-index-banner">
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
      class="list-item"
    ></v-carousel-item>
  </v-carousel>
</template>
<script>
  export default {
    data () {
      return {
        items: [
          {
            src: '/images/banner01.jpg',
          },
          {
            src: '/images/banner01.jpg',
          }
        ],
      }
    },
  }
</script>
