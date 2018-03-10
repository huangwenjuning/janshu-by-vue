<template>
  <div id="app">
    <!-- <news></news> -->
    <!-- <index></index> -->
    <discovery></discovery>
    <!-- <follow></follow> -->
    <!-- <router-view></router-view> -->
  </div>
</template>

<script>
import News from './page/home/News';
import Discovery from './page/home/Discovery';
import Follow from './page/home/Follow';
import Index from './page/Index';

export default {
  name: 'App',
  components: {
    News,
    Discovery,
    Follow,
    Index
  }
} 
</script>

<style>
  a {
    text-decoration: none;
  }
</style>
