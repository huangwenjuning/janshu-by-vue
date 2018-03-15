<template>
  <div class="followarticles">
      <div class="header"><back></back></div>
      <div class="body"><articles></articles></div>  
  </div>
</template>
<script>
    import Back from '../../components/public/Back'
    import Articles from '../../components/public/Articles'
    export default {
        name: 'followarticles',
        components: {
            Back,
            Articles
        },
    }
</script>
<style scoped>

</style>
