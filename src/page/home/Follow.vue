<template>
  <div class="follow">
      <div class="search">

      </div>
      <div class="nav">
          <swiper :options="swiperOption">
            <swiper-slide class="nav_item">全部关注</swiper-slide>
            <swiper-slide class="nav_item">简友圈</swiper-slide>
            <swiper-slide class="nav_item">专题</swiper-slide>
            <swiper-slide class="nav_item">作者</swiper-slide>
            <swiper-slide class="nav_item">连载</swiper-slide>
            <swiper-slide class="nav_item">文章</swiper-slide>
            <swiper-slide class="nav_item">推送信息</swiper-slide>
          </swiper>
      </div>
      <div class="news"></div>
  </div>
</template>
<script>
    export default {
        name: "follow",
        components: {
          
        },
        data() {
            return {
                swiperOption: {
                    sliderPerView: 5,
                    spaceBetween: 10,
                    slideToClickedSlide: true,
                    direction: 'horizontal',
                }
            }
        }

    }
</script>
<style scoped>
    .nav_item {
        display: inline-block;
        font-size: .4rem;
        color: #919191;
        width: .48rem /* 36/75 */;
        /* text-align: center; */
    }
</style>