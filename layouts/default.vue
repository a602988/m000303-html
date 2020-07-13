<template>
  <v-app>
    <header class="Header">
      <div class="container">
        <h1 class="Header__Title">
          Nuxt i18n
        </h1>
        <nav class="Header__Menu">
          <NuxtLink :to="$i18n.path('')" class="Header__Link" exact>
            {{ $t('links.home') }}
          </NuxtLink>
          <NuxtLink :to="$i18n.path('about')" class="Header__Link" exact>
            {{ $t('links.about') }}
          </NuxtLink>
          <NuxtLink :to="$i18n.path('users')" class="Header__Link" exact>
            {{ $t('links.users') }}
          </NuxtLink>
          <NuxtLink v-if="$i18n.locale === 'tw'" :to="`/en` + $route.fullPath" class="Header__Link" active-class="none" exact>
            {{ $t('links.english') }}
          </NuxtLink>
          <NuxtLink v-else :to="$route.fullPath.replace(/^\/[^\/]+/, '')" class="Header__Link" active-class="none" exact>
            {{ $t('links.tw') }}
          </NuxtLink>
        </nav>
      </div>
    </header>
    <Nuxt />
    <v-footer padless
    :class="`d-flex justify-space-around`"
    color="white"
    app
    >
      <NuxtLink :to="$i18n.path('')" class="footer_link" exact>
        {{ $t('footer-link.home') }}
      </NuxtLink>
      <NuxtLink :to="$i18n.path('coupon')" class="footer_link" exact>
        {{ $t('footer-link.coupon') }}
      </NuxtLink>
      <NuxtLink :to="$i18n.path('service')" class="footer_link" exact>
        {{ $t('footer-link.service') }}
      </NuxtLink>
      <NuxtLink :to="$i18n.path('my')" class="footer_link" exact>
        {{ $t('footer-link.my') }}
      </NuxtLink>
    </v-footer>
  </v-app>
</template>

<script>
  export default {}
</script>

<style>

  .container {
    width: 75%;
    margin: 0 auto;
  }
  .container:after {
    content: "";
    display: table;
    clear: both;
  }
  .Header {
    color: #fff;
    height: 80px;
    line-height: 80px;
    background-color: #2e2f30;
  }
  .Header__Title {
    float: left;
    font-weight: 300;
    font-size: 30px;
  }
  .Header__Menu {
    float: right;
  }
  .Header__Link {
    font-size: 16px;
    color: #fff;
    border: 1px solid #fff;
    padding: 7px 12px;
    text-transform: uppercase;
    text-decoration: none;
    border-radius: 5px;
    margin-left: 10px;
  }
  .Header__Link:hover {
    color: #2e2f30;
    background-color: #fff;
  }



</style>
