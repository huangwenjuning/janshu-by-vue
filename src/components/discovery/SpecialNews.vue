<template>
  <div class="specialNews">
          <div class="banner"></div>
          <div class="specialItem">
              <div class="specials_grid" v-for="index in specialItem.length" :key="index.id">
                  <a href="#"><img :src="imgArr[index-1]" alt="">
                    <br>{{specialItem[index-1]}}
                  </a>
              </div>
          </div>
          <!-- 我关注的专题 -->
        <div class="followSpecial">
            <a href=""><img src="../../assets/img/specialNews/s16.png" alt="">
            <span class="follow">我关注的专题</span>
            <img class="arrow" src="../../assets/img/specialNews/s17.png" alt=""></a>
        </div>
  </div>
</template>
<script>
    export default {
        data() {
            return {
                specialItem: ["关注的标题","专题","城市专题","校园专题","生活家","摄影",
                "手绘","故事","IT互联网","程序员","人文","电影","读书","社会热点","简书交友"],
                imgArr:["/static/specialNews/s1.png","/static/specialNews/s2.png","/static/specialNews/s3.png",
                "/static/specialNews/s4.png","/static/specialNews/s5.png","/static/specialNews/s6.png",
                "/static/specialNews/s7.png","/static/specialNews/s8.png","/static/specialNews/s9.png",
                "/static/specialNews/s10.png","/static/specialNews/s11.png","/static/specialNews/s12.png",
                "/static/specialNews/s13.png","/static/specialNews/s14.png","/static/specialNews/s15.png",]
            }
        }
    }
</script>
<style scoped>
    .specialNews {
        background: #f4f4f4;        
    }
    .specialItem {
        margin-top: .32rem /* 24/75 */;
        background-color: #fff;        
    }
    .specials_grid {
        width: 20%;
        height: 2rem /* 150/75 */;
        display: inline-block;
        text-align: center;
        color: #000;
    }
    .specials_grid>a>img {
        width: 50%;
        height: 50%;
    }
    .followSpecial {
        position: relative;
        background-color: #fff;
        height: 1.333333rem /* 100/75 */;
        margin-top: .293333rem ;
        font-size: .48rem /* 36/75 */;
        color: #2f2f2f;
        line-height: 1.333333rem /* 100/75 */;    
    }
    .followSpecial span {
        display: inline-block;
        position: absolute;
        margin-top: -.026667rem /* 2/75 */;
    }
    .followSpecial img, .arrow img {
        width: 1.2rem /* 90/75 */;
        height: 1.2rem /* 90/75 */;
    }
    .arrow {
        margin-left:6.933333rem /* 520/75 */;
    }
</style>
