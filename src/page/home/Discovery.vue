<template>
  <div class="discovery">
      <div class="list">
            <div class="list1"><router-link to="/" exact>推荐</router-link></div>
            <div class="list2"><router-link to="/publish"  exact>连载</router-link></div>        
            <div class="list3"><router-link to="/specialNews"  exact>专题</router-link></div>   
            <img src="" alt="">
      </div> 
      <!-- <commend></commend> -->
      <!-- <publish></publish> -->
      <!-- <special-news></special-news> -->
      <router-view></router-view>
  </div>
</template>
<script>
import Commend from '../../components/discovery/Commend'
import Publish from '../../components/discovery/Publish'
import SpecialNews from '../../components/discovery/SpecialNews'
    export default {
        name: "discovery",
        components: {
            Commend,
            Publish,
            SpecialNews
        }

    }
</script>
<style scoped>
    .list {
        font-size: .453333rem /* 34/75 */;
        line-height: 1.173333rem /* 88/75 */;
        margin-left: 2.453333rem /* 184/75 */;
        /* padding-bottom: .426667rem 32/75; */
    }
    .list1 {
        float: left;   
        text-align: center;             
    }
    .list2, .list3 {
        float: left;
        padding-left: 1.12rem /* 84/75 */;
        text-align: center;        
    }
    a {
        text-decoration: none;
        border-radius: 5px;
    }
    .router-link-active {
        color: #ea6f5a
    }
    
</style>
