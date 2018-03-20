<template>
  <div id="app">
    <!-- <news></news> -->
    <!-- <index></index> -->
    <!-- <discovery></discovery> -->
    <!-- <follow></follow> -->
    <!-- <mine></mine> -->
    <!-- <tabbar></tabbar>         -->
    <router-view></router-view>
    <index></index>
  </div>
</template>

<script>
import Index from './page/Index';
import Tabbar from './components/public/Tabbar.vue'
import Follow from './page/home/Follow';
import Discovery from './page/home/Discovery';
import Mine from './page/home/Mine';
import News from './page/home/News';
// import Articles from './components/public/Articles.vue'
import Article from './page/article/Article'
import Fans from './components/mine/Fans'

export default {
  name: 'App',
  components: {
    News,
    Discovery,
    Follow,
    Index,
    Mine,
    Tabbar,
    Article,
    Fans
  }
} 
</script>

<style>
  a {
    text-decoration: none;
  }
</style>
