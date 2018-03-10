<template>
  <div class="page-tabbar">
      <div class="page-wrap">
        <div class="page-title">
          <router-view></router-view>
        </div>
      </div>
      <div><mt-cell class="page-part" title="" :value="selected" /></div>
    <!-- tabcontainer --> 
    <mt-tab-container class="page-tabbar-container" v-model="selected">
      <mt-tab-container-item id="关注">
       <router-link to="/follow"></router-link>
      </mt-tab-container-item>
       <mt-tab-container-item id="发现">
       <router-link to="/discovery"></router-link>
      </mt-tab-container-item>
      <mt-tab-container-item id="+">
        <router-link to="/add"></router-link>
      </mt-tab-container-item>
      <mt-tab-container-item id="消息">
        <router-link to="/news"></router-link>
      </mt-tab-container-item>
      <mt-tab-container-item id="我的">
        <router-link to="/mine"></router-link>
      </mt-tab-container-item>
    </mt-tab-container>

    <mt-tabbar v-model="selected" fixed>
      <mt-tab-item id="关注">
        <i class="iconfont icon-home" color="#EA6F5A"></i><br> 关注 
      </mt-tab-item>
      <mt-tab-item id="发现">
          <i class="iconfont icon-faxian" color="#EA6F5A"></i><br>发现       
      </mt-tab-item>
      <mt-tab-item id="+">
          <i class="iconfont icon-jia-tianchong" color="#EA6F5A"></i><br> 
      </mt-tab-item>
      <mt-tab-item id="消息">
          <i class="iconfont icon-xiaoxi1" color="#EA6F5A"></i><br>消息
      </mt-tab-item>      
      <mt-tab-item id="我的">
          <i class="iconfont icon-wode" color="#EA6F5A"></i><br>我的
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>
<script>
  export default {
    name: 'page-tabbar',
    data() {
      return {
        selected: '关注'
      };
    }
  }
</script>
<style scoped>
  /* .page-tabbar {  
    overflow: hidden;  
    height: 100vh;  
  }  
  
  .page-wrap {  
    overflow: auto;  
    height: 100%;  
    padding-bottom: 100px;  
  }   */
  .mint-tab-item-label a{
    text-decoration: none;
    display: inline-block;
    width: 100%;
    height: 100%;
  }
 
</style>
