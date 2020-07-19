<template>
    <v-bottom-navigation
      grow
      color="blue lighten-1"
      class="footer-nav"
    >
      <v-btn  :to="$i18n.path('')">
        <span>{{ $t('footer-link.home') }}</span>
        <v-icon>far fa-home-alt</v-icon>
      </v-btn>
      <v-btn  :to="$i18n.path('coupon')">
        <span>{{ $t('footer-link.coupon') }}</span>
        <v-icon>far fa-gift fa-2x</v-icon>
      </v-btn>
      <v-btn  :to="$i18n.path('service')">
        <span>{{ $t('footer-link.service') }}</span>
        <v-icon>far fa-user-headset</v-icon>
      </v-btn>
      <v-btn  :to="$i18n.path('my')">
        <span> {{ $t('footer-link.my') }}</span>
        <v-icon>far fa-user</v-icon>
      </v-btn>
    </v-bottom-navigation>
</template>

<style>
  /*.footer-nav .theme--light.v-btn:hover::before{*/
  /*  opacity: 0;*/
  /*}*/
  .footer-nav{
    box-shadow:none !important;
    border-top: 1px solid #F5F5F5;
  }
</style>
