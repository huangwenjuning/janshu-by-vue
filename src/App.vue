<template>
  <div id="app">
    <!-- <news></news> -->
    <discovery></discovery>
    <!-- <follow></follow> -->
  </div>
</template>

<script>
import News from './page/home/News';
import Discovery from './page/home/Discovery';
import Follow from './page/home/Follow';

export default {
  name: 'App',
  components: {
    News,
    Discovery,
    Follow
  }
} 
</script>

<style>
  a {
    text-decoration: none;
  }
</style>
