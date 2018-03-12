<template>
  <div class="page-tabbar">
      <div class="page-wrap">
        <div class="page-title">
          <!-- <router-view></router-view> -->
        </div>
      </div>
      <div><mt-cell class="page-part" title="" :value="selected" /></div>
    <!-- tabcontainer --> 
    <mt-tab-container class="page-tabbar-container" v-model="selected">
        <mt-tab-container-item id="关注"></mt-tab-container-item>
        <mt-tab-container-item id="发现"></mt-tab-container-item> 
        <mt-tab-container-item id="+"></mt-tab-container-item>
        <mt-tab-container-item id="消息"></mt-tab-container-item>
        <mt-tab-container-item id="我的"></mt-tab-container-item>
    </mt-tab-container>

    <mt-tabbar v-model="selected" fixed>
      <mt-tab-item id=" ">
        <router-link to="/follow" exact>
        <i class="iconfont icon-home" color="#EA6F5A"></i><br> 关注 
        </router-link>
      </mt-tab-item>
      <mt-tab-item id=" ">
          <router-link to="/discovery" exact>
          <i class="iconfont icon-faxian" color="#EA6F5A"></i><br>发现
          </router-link>       
      </mt-tab-item>
      
      <mt-tab-item id=" ">
          <router-link to="/add" exact>
            <i class="iconfont icon-jia-tianchong" color="#EA6F5A"></i><br>
          </router-link> 
      </mt-tab-item>
      <mt-tab-item id=" ">
           <router-link to="/news" exact>
              <i class="iconfont icon-xiaoxi1" color="#EA6F5A"></i><br>消息
          </router-link>
      </mt-tab-item>      
      <mt-tab-item id="">
          <router-link to="/mine" exact>
              <i class="iconfont icon-wode" color="#EA6F5A"></i><br>我的
          </router-link>
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
