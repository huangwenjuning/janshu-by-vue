<template>
  <div class="page-tabbar">
    <mt-tabbar v-model="selected" fixed>
      
      <mt-tab-item id="关注 ">
        <router-link to="/follow" >
          <icon name="home" v-if="selected==='关注'" color="#EA6F5A"></icon>
          <icon name="home" v-if="selected !=='关注'"></icon>
          <br> 关注 
        </router-link>
      </mt-tab-item>

      <mt-tab-item id="发现">
          <router-link to="/discovery" >
            <icon  name="compass" v-if="selected ==='发现'" color="#EA6F5A" ></icon>
            <icon  name="compass" v-if="selected !=='发现'"></icon>
            <br>发现
          </router-link>       
      </mt-tab-item>
      
      <mt-tab-item id="消息">
           <router-link to="/news" >
              <icon name="bell" v-if="selected ==='消息'" color="#EA6F5A" ></icon>
              <icon name="bell" v-if="selected !=='消息'" ></icon>
              <br>消息              
          </router-link>
      </mt-tab-item> 

      <mt-tab-item id="我的">
          <router-link to="/mine" >
              <icon name="user" v-if="selected ==='我的'" color="#EA6F5A"></icon>
              <icon name="user" v-if="selected !=='我的'" ></icon>
              <br>我的
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
      }
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
  .is-selected .mint-tab-item-label a{
   background: #fff;
    color: #EA6F5A;
}
.fa-icon {
  width: auto;
  height: .586667rem /* 44/75 */; /* 或任意其它字体大小相对值 */
  /* 要在 Safari 中正常工作，需要再引入如下两行代码 */
  max-width: 100%;
  max-height: 100%;
}
</style>
