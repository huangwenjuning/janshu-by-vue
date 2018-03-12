<template>
  <div class="news" >
      <div class="title">消息<i class="iconfont icon-shezhi"></i> </div>
      <div class="items grid">
          <i class="iconfont icon-pinglun grid-cell "><br><span>评论</span></i>
          <i class="iconfont icon-xihuan1 grid-cell"><br><span>喜欢和赞</span></i>
          <i class="iconfont icon-guanzhuchenggong grid-cell"><br><span>关注</span></i>
          <i class="iconfont icon-fenxiang grid-cell"><br><span>投稿请求</span></i>
          <i class="iconfont icon-qian1 grid-cell"><br><span>赞赏和付费</span></i>
          <i class="iconfont icon-qita grid-cell"><br><span>其他提醒</span></i>
      </div>
      <div class="jianxin">
          <span class="messages">简信</span>
          <span class="newMessages">新简信</span>
      </div>
      <div class="stage">
          <img src="../../assets/img/none.png" alt="">
      </div>
  </div>
</template>
<script>
    export default {
        name: 'news',
    }
</script>
<style scoped>
    .title {
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
    .title i {
        color: #646464;
        font-size: .64rem /* 48/75 */;
    }
    .title:after {
        content: "";
        position: absolute;
        right: 0;
        left: 0;
        bottom: -.4rem /* 30/75 */; 
        height: .013333rem /* 1/75 */;
        border-top: .013333rem  solid #D5D5D5;
        transform:scaleY(0.5);
    }
  .grid {
        display: flex;
        width: 10rem;
        flex-wrap: wrap;
        padding-top: .5rem;
        background-color: #fefefe;
        justify-content: center;
        text-align: center;
    }

    .grid-cell {
        flex: 0 0 25%;
        height: 2.4rem;
        margin: .4rem;
        padding-bottom: .4rem;
    }
    .items i {
        color:#E78170;
        font-size: .613333rem /* 46/75 */;
    }
    .items span {
        margin-top: .426667rem /* 32/75 */;
        display: inline-block;
        color: #2f2f2f;
        font-size: .4rem /* 30/75 */;
        font-weight: 500;
    }
    .items:after {
        content: "";
        position: absolute;
        right: 0;
        left: 0;
        top: 7.733333rem /* 580/75 */;
        border-bottom: .32rem solid #F5F5F5;
    }
    .jianxin {
        font-size: .453333rem /* 34/75 */;
        font-weight: 500;
    }
    .messages {
        margin-left: .426667rem /* 32/75 */;
    }
    .newMessages {
        float: right;
        margin-right: .426667rem /* 32/75 */;
        color: #E78170;
    }
    .jianxin:after {
        content: "";
        position: absolute;
        right:  0;
        left: .426667rem /* 32/75 */;
        top:    9.6rem /* 720/75 */;
        border-bottom: 1px solid #D5D5D5;
    }
    .stage {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .stage img {
        margin-top: 1.28rem /* 96/75 */;
        width: 3.493333rem /* 262/75 */;
        height: 3.133333rem /* 235/75 */;
        text-align: center;
        /* margin: 0 auto; */
    }
</style>
