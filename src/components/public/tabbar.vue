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
        <mt-tab-container-item id="消息"></mt-tab-container-item>
        <mt-tab-container-item id="我的"></mt-tab-container-item>
    </mt-tab-container>

    <mt-tabbar v-model="selected" fixed>
      <mt-tab-item id="关注 ">
        <router-link to="/follow" exact>
        <i class="iconfont icon-home" ></i><br> 关注 
        </router-link>
      </mt-tab-item>
      <mt-tab-item id="发现">
          <router-link to="/discovery" exact>
          <i class="iconfont icon-faxian" ></i><br>发现
          </router-link>       
      </mt-tab-item>
      
      
      <mt-tab-item id="消息">
           <router-link to="/news" exact>
              <i class="iconfont icon-xiaoxi1"></i><br>消息
          </router-link>
      </mt-tab-item>      
      <mt-tab-item id="我的">
          <router-link to="/mine" exact>
              <i class="iconfont icon-wode" ></i><br>我的
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
 
  .mint-tab-item-label a{
    text-decoration: none;
    display: inline-block;
    font-size: .32rem /* 24/75 */;
    color: #b8b8b8;
  }
  .mint-tab-item-label i {
    font-size: .586667rem /* 44/75 */;
  }
  .is-selected .mint-tab-item-label a{
   background: #fff;
    color: #EA6F5A;
}
</style>
