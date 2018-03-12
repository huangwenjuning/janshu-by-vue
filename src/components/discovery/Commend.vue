<template>
    <div class="commend" >
        <!-- 推荐 -->
        <!-- banner 大图 -->
        <div class="banner">
            <img src="../../assets/img/discovery/banner.png" alt="">
        </div>

        <!-- 左右滑动分类 -->
        <div class="swipe">
            <div class="swipe_items">
                <a href=""><img src="../../assets/img/discovery/swipe_01.png" alt=""><br>排行榜</a>   
            </div>
            <div class="swipe_items">
                <a href=""><img src="../../assets/img/discovery/swipe_02.png" alt=""><br>连载优选</a>
            </div>
            <div class="swipe_items">
                <a href=""><img src="../../assets/img/discovery/swipe_03.png" alt=""><br>简书大学堂</a>
            </div>
            <div class="swipe_items">
                <a href=""><img src="../../assets/img/discovery/swipe_04.png" alt=""><br>简书出版</a>
            </div>
            <div class="swipe_items">
                <a href=""><img src="../../assets/img/discovery/swipe_05.png" alt=""><br>简书会员</a>
            </div>
            <div class="swipe_items">
                <a href=""><img src="../../assets/img/discovery/swipe_06.png" alt=""><br>积分商城</a>
            </div>
        </div>
        <!-- <div class="nav">
            <swiper :options="swiperOption">
                <swiper-slide class="nav_item"><img src="" alt=""><br>排行榜</swiper-slide>
                <swiper-slide class="nav_item"><img src="" alt=""><br>排行榜</swiper-slide>
                <swiper-slide class="nav_item"><img src="" alt=""><br>排行榜</swiper-slide>
                <swiper-slide class="nav_item"><img src="" alt=""><br>排行榜</swiper-slide>
                <swiper-slide class="nav_item"><img src="" alt=""><br>排行榜</swiper-slide>
                <swiper-slide class="nav_item"><img src="" alt=""><br>排行榜</swiper-slide>
            </swiper>
        </div> -->

        <!-- 内容部分 -->
            <div class="content" v-for="commendArticle in commendArticles" >
                <!-- 作者 标题 内容 点赞 -->
                <div class="author">
                        <a href="" class="avatar">
                            <img :src="commendArticle.avatar" alt="头像"></a>     
                        <a href="" class="nickname">{{ commendArticle.nickname }}</a>
                </div>
                <div class="contentL"> 
                    <div class="title">
                        <a href="">{{ commendArticle.title }}</a>
                    </div>
                    <p class="article">{{ commendArticle.article }}</p>
                    <div class="meta">
                            <a class="collection-tag" target="_blank" href="">{{ commendArticle.tag }}</a>       
                            <a target="_blank" href=""><i class="iconfont icon-xiaoxi colors" ></i> {{ commendArticle.comments }}</a>      
                            <span><i class="iconfont icon-xihuan colors" ></i> {{ commendArticle.like }}</span>
                            <span><i class="iconfont icon-qian colors" ></i>{{ commendArticle.money }}</span>
                    </div>
                </div>
                <!-- 标题图片 -->
                <div class="contentR">
                    <a href="" class="more">
                        <img src="" alt="">
                    </a>
                    <a href="" class="coverImg">
                        <img :src="commendArticle.coverImg" alt="封面">
                    </a>
                </div>
        </div>
        
        
    </div>
</template>
<script>
    export default {
        name: 'commend',
        mounted () {
            this.axios.get('https://www.easy-mock.com/mock/5aa1f8fa106c1334ecc10350/janshu/janshu/commend')
            .then((response) => {
                this.commendArticles = response.data.commendArticles;
                console.log(this.commendArticles);
            })
            .catch((error) => {
                console.log(error);
            })
        },
        data() {
            return {
                commendArticles: [],
                swiperOption: {
                    sliderPerView: 5,
                    spaceBetween: 10,
                    slideToClickedSlide: true,
                    direction: "horizontal",
                }
            }
        }
    }
</script>
<style scoped>
    a {
        text-decoration: none;
    }
    .commend {
        margin: 0 auto;
    }

    .banner {
        height: 5.013333rem/* 376/75 */;
        width: 10rem/* 750/75 */;
    }

    .banner img {
        width: 100%;
        height: 5.013333rem/* 376/75 */;
    }


    .swipe {
        /* display: inline; */
        height: 2.533333rem/* 190/75 */;
        float: left;   
    }

    .swipe_items {
        float: left;
        text-align: center;
    }
    .swipe img {
        float: left;
        padding: .16rem/* 12/75 */;
        width: 1.333333rem/* 100/75 */;
        height: 1.333333rem/* 100/75 */;
    }
    
    .content {
        background: #fff;
        display: inline-block;
        margin-left: .4rem/* 30/75 */;  
        margin-top: .266667rem /* 20/75 */;      
    }
    .content {
        position: relative;
    }
    .content:after {
        content: '';
        position: absolute;
        left: 0;
        right: 0;
        top: -.213333rem /* 16/75 */;
        height: .013333rem /* 1/75 */;
        border-bottom: .013333rem /* 1/75 */ solid #D5D5D5;
        transform: rotateY(0.5);
    }
    .author {
        position: relative;
    }
    .author img {
        width: .64rem/* 48/75 */;
        height: .64rem/* 48/75 */;
        border-radius: 50%;
    }
    .author .nickname{
        position: absolute;
        margin-top: .08rem /* 6/75 */;
        margin-left: .133333rem /* 10/75 */;
        color: #2f2f2f;
        font-size: .32rem /* 24/75 */;      
    }
    .contentL {
        float: left;
        width: 6.666667rem /* 500/75 */;
        margin-top: .24rem /* 18/75 */;        
    }
    .contentL .title a{
        font-size: .506667rem /* 38/75 */;
        color: #2f2f2f;
    }
    .colors {
        color: #999;
        text-align: center;
        margin-left: .32rem /* 24/75 */;
        margin-top: .16rem /* 12/75 */;
    }
    .contentL .article {
        margin-top:.293333rem /* 22/75 */;        
        color: #999;
        font-size: .32rem /* 24/75 */;
        overflow: hidden;
        text-overflow:ellipsis;
        display:-webkit-box; 
        -webkit-box-orient:vertical;
        -webkit-line-clamp:2;
    }
    .contentL span {
        margin-bottom: .32rem/* 24/75 */;
    }

    .contentR {
        float: left;
        padding-left: .026667rem /* 2/75 */;
        width: 2.88rem /* 216/75 */;
        text-align: center;
        margin-top: .24rem /* 18/75 */;
        
    }

    .contentR img {
        width: 2.16rem/* 162/75 */;
        height: 2.16rem/* 162/75 */;
        border-radius: 4%;
    }
    .contentL .meta {
        margin-top: .32rem /* 24/75 */;
        font-size: 12px;
        font-weight: 400;
        line-height: 20px;
        margin-bottom: .133333rem /* 10/75 */;
    }
    .meta .collection-tag {
        display: inline-block;
        padding: 3px 6px;
        margin-top: -1px;
        max-width: 200px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        line-height: 1;
        vertical-align: middle;
        color: #ea6f5a!important;
        border: 1px solid rgba(236,97,73,.7);
        border-radius: 3px;
    }
   
    
</style>