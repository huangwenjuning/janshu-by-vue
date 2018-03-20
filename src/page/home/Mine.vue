<template>
  <div class="mine">
      <div class="titles">我的<i class="iconfont icon-shezhi"></i> </div>
       <div class="login">
           <div class="avatarImg"><img src="../../assets/avatar.jpg" alt=""></div>
           <div class="infomation">
               <p class="user">杳杳飞花</p>
               <p class="write">立即开始创作</p>
           </div>
       </div>
       <div class="details">
               <span>1<br><span class="colorGray">公开文章</span></span>
               <router-link to="/mine/fans">
                    <span>6<br><span class="colorGray">关注</span></span>
               </router-link>
               <span>2<br><span class="colorGray">粉丝</span></span>
        </div>
           <br clear="both" />
        
        <div class="items">
            <div class="items1" v-for="index in Items1.length" :key="index.id">
                    <mt-cell :title="Items1[index-1]" is-link >  
                        <img slot="icon" :src="Img1[index-1]" >
                    </mt-cell> 
            </div>
       </div>
       <div class="items">
            <div class="items2" v-for="index in Items2.length" :key="index.id">
                    <mt-cell :title="Items2[index-1]" is-link >  
                        <img slot="icon" :src="Img2[index-1]" >
                    </mt-cell> 
            </div>
       </div>
        <div class="items">
            <div class="items3" v-for="index in Items3.length" :key="index.id">
                    <mt-cell :title="Items3[index-1]" is-link >  
                        <img slot="icon" :src="Img3[index-1]" >
                    </mt-cell> 
            </div>
       </div>
       <div class="items">
            <div class="items4" v-for="index in Items4.length" :key="index.id">
                    <mt-cell :title="Items4[index-1]" is-link >  
                    </mt-cell> 
            </div>
       </div>
  </div>
</template>
<script>
    export default {
        name: 'mine',
        data() {
            return {
                Items1:['私密文章','收藏的文章','喜欢的文章','拥有的付费内容'],
                Img1:['/static/icon/icon_simi.png','/static/icon/icon_shoucang.png',
                '/static/icon/icon_xihuan.png','/static/icon/icon_fufei.png'],
                Items2:['我的专题','我的文集','关注的专题/文集/连载','我的钱包'],
                Img2:['/static/icon/icon_zhuanti.png','/static/icon/icon_wenji.png',
                '/static/icon/icon_guanzhu.png','/static/icon/icon_qianbao.png'],
                Items3:['夜间模式','浏览历史'],
                Img3:['/static/icon/icon_yejian.png','/static/icon/icon_liulanlishi.png'],
                Items4:['分享简书App','帮助与反馈','给简书评分'],
            }
        }
    }
</script>
<style scoped>

    .titles {
        font-size: .453333rem /* 34/75 */;
        color: #2f2f2f;
        text-align: center;
        margin-top: .266667rem /* 20/75 */;
        font-weight: 500; 
        position: relative;      
    }
    .iconfont {
        float: right;
        margin-right: .48rem /* 36/75 */;
    }
    .titles i {
        color: #646464;
        font-size: .64rem /* 48/75 */;
    }
    
    .titles:after {
        content: "";
        position: absolute;
        right: 0;
        left: 0;
        bottom: -.4rem /* 30/75 */;
        height: .013333rem /* 1/75 */;
        border-top: .013333rem  solid #D5D5D5;
        transform:scaleY(0.5);
    }
    .login {
        margin-top: .373333rem /* 28/75 */;
        position: relative;
    }
    .login:after {
        content: "";
        position: absolute;
        right: 0;
        left: 0;
        bottom: -.8rem /* 60/75 */;
        height: .013333rem /* 1/75 */;
        border-top: .013333rem  solid #D5D5D5;
        transform:scaleY(0.5);
    }
    .login .avatarImg {
        float: left;
        width: 2.746667rem /* 206/75 */;
        height: 2.4rem /* 180/75 */;
    }
    .login .avatarImg img {
        width: 1.893333rem /* 142/75 */;
        height: 1.893333rem /* 142/75 */;
        margin-left: .266667rem /* 20/75 */;
        margin-top: .213333rem /* 16/75 */;
        /* border-radius: 999px */

    }
    .login .infomation {
        color: #2f2f2f;
    }
    .login .infomation .user{
        position: relative;
        padding-top: .186667rem /* 14/75 */;
        font-size:.506667rem /* 38/75 */;
    }
    .login .infomation .write {
        margin-top: .24rem /* 18/75 */;
        font-size: .426667rem /* 32/75 */;
    }
     
    .details {
        float: left;
        margin-bottom: .373333rem /* 28/75 */;
        margin-top: .373333rem /* 28/75 */;
    }
    .details span {
        font-size: .4rem /* 30/75 */;
        display: inline-block;
        margin:0 .533333rem /* 40/75 */;
        text-align: center;   
    }
    .details .colorGray {
        color: #888;
    }
   .items {
       position: relative;
   }
   .items1,.items2,.items3,.items4 {
       position: relative;
   }
   .items:before {
        content: "";
        position: absolute;
        right: 0;
        left: 0;
        top: 0; 
        height: .266667rem /* 20/75 */;
        border-top: .266667rem   solid #F5F5F5;
        z-index: 9;
        /* transform:scaleY(0.5); */
    }
   .items1:after, .items2:after, .items3:after, .items4:after {
        content: "";
        position: absolute;
        right: 0;
        left: 0;
        bottom: 0; 
        height: .013333rem /* 1/75 */;
        border-top: .013333rem  solid #D5D5D5;
        transform:scaleY(0.5);
    }
   img {
       padding-right: .346667rem /* 26/75 */;
   }
   .mint-cell-text {
       font-size: .426667rem /* 32/75 */;
       color: #2F2F2F;
   }
   
</style>
