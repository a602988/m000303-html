<template>
    <v-bottom-navigation
      grow
      color="blue lighten-1"
      class="m-footer-nav"
    >
      <v-btn  :to="localePath('')">
        <span>{{ $t('footer-link.home') }}</span>
        <v-icon>far fa-home-alt</v-icon>
      </v-btn>
      <v-btn  :to="localePath('/coupon')">
        <span>{{ $t('footer-link.coupon') }}</span>
        <v-icon>far fa-gift fa-2x</v-icon>
      </v-btn>
      <v-btn  :to="localePath('/service')">
        <span>{{ $t('footer-link.service') }}</span>
        <v-icon>far fa-user-headset</v-icon>
      </v-btn>
      <v-btn  :to="localePath('/my')">
        <span> {{ $t('footer-link.my') }}</span>
        <v-icon>far fa-user</v-icon>
      </v-btn>
    </v-bottom-navigation>
</template>

<style>

</style>
