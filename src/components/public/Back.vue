<template>
  <mt-header title="">
  <router-link to="/follow" slot="left">
    <mt-button icon="back"></mt-button>
  </router-link>
  <mt-button icon="more" slot="right"></mt-button>
</mt-header>
</template>
<script>
    export default {
        name: 'back'
    }
</script>
<style scoped>
    .mint-header {
        background-color: #fff;
        color:#888;
    }
</style>
