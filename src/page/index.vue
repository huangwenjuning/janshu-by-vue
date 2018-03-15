<template>
  <div class="index">
    <!-- <router-link to="/"></router-link> -->
    <tabbar></tabbar>
    <!-- <articles></articles> -->
  </div>
</template>
<script>
import Tabbar from '../components/public/Tabbar'
// import Articles from '../components/publ/Articles'
    export default {
      name: 'index',
      components: {
        Tabbar,
        // Articles
      }
    }
</script>
<style scoped>

</style>
  