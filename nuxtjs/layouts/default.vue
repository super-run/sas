<template>
  <div class="page">
    <div class="page-main">
      <app-header/>
      <app-header-menu/>
      <div class="my-3 my-md-5">
        <nuxt/>
      </div>
    </div>
    <app-footer-top/>
    <app-footer/>
  </div>
</template>

<script>
  import AppFooter from '../components/layouts/s-footer'
  import AppFooterTop from '../components/layouts/s-footer-top'
  import AppHeader from '../components/layouts/s-header'
  import AppHeaderMenu from '../components/layouts/s-header-menu'

  export default {
    name: 'app',
    components: {
      AppFooter,
      AppFooterTop,
      AppHeader,
      AppHeaderMenu
    }
  }
</script>

<style>


</style>
