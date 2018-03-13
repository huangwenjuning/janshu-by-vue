<template>
    <div class="publish">
        <!-- 连载 -->
        <!-- 分类 -->
        <div class="kindsItem" >
            <div class="kinds_grid" v-for="index in publishItem.length" :key="index.id"><a href="#">
                <img :src="imgArr[index-1]" alt=""><br>{{publishItem[index-1]}}</a></div>
        </div>
        <!-- 我关注的连载 -->
        <div class="followPublish">
            <a href=""><img src="../../assets/img/discovery/p11.png" alt="">
            <span class="follow">我关注的连载</span>
            <img class="arrow" src="../../assets/img/discovery/p12.png" alt=""></a>
        </div>

        <!-- 连载内容推荐 -->
        <div class="publishTexts">
            <!-- 左 -->
                <div class="publishText">                       
                        <div class="text" v-for="publishtext in textLeft">
                            <div class="coverImg"><a href=""><img :src="publishtext.coverImg" alt=""></a></div>
                            <!-- 图片上层内容 -->
                        <div class="maskText">
                            <div class="fixedText">
                                <p class="update"><span class="new">New</span>{{ publishtext.update }}</p>
                                <p class="tag"><span class="tag">#</span>{{ publishtext.tag }}</p>
                            </div>
                        </div>
                        <div class="title"><a href="">{{ publishtext.title }}</a></div>
                            <div class="info">
                                <img :src="publishtext.avatar" alt="">
                                <a href=""><span class="nickname">{{ publishtext.nickname }}</span></a>
                                <a href=""><span class="look"><i class="iconfont icon-liulan"></i>{{ publishtext.look }}</span></a>
                            </div>
                        </div> 
                </div>
            
            <!-- 右 -->
           <div class="publishText">                       
                        <div class="text" v-for="publishtext in textRight">
                            <div class="coverImg"><a href=""><img :src="publishtext.coverImg" alt=""></a></div>
                            <!-- 图片上层内容 -->
                        <div class="maskText">
                            <div class="fixedText">
                                <p class="update"><span class="new">New</span>{{ publishtext.update }}</p>
                                <p class="tag"><span class="tag">#</span>{{ publishtext.tag }}</p>
                            </div>
                        </div>
                        <div class="title"><a href="">{{ publishtext.title }}</a></div>
                            <div class="info">
                                <img :src="publishtext.avatar" alt="">
                                <a href=""><span class="nickname">{{ publishtext.nickname }}</span></a>
                                <a href=""><span class="look"><i class="iconfont icon-liulan"></i>{{ publishtext.look }}</span></a>
                            </div>
                        </div> 
                </div>
        </div>
        
    </div>
</template>
<script>
    export default {
        mounted() {
            this.axios.get('https://www.easy-mock.com/mock/5aa1f8fa106c1334ecc10350/janshu/janshu/publish')
            .then((response) => {
                this.textLeft = response.data.publishTexts.textLeft;
                this.textRight = response.data.publishTexts.textRight;
                console.log(this.textLeft);
            })
            .catch((error) => {
                console.log(error);
            })
        },
        data() {
            return {
                textLeft:[],
                textRight: [],
                kindsItems: [],
                publishItem: ['全部分类',"7日热门","30日热门","编辑力荐","心理","科普","悬疑","互联网","儿童文学","历史"],
                imgArr: ['/static/public/p1.png','/static/public/p2.png','/static/public/p3.png',
                '/static/public/p4.png','/static/public/p5.png','/static/public/p6.png','/static/public/p7.png',
                '/static/public/p8.png','/static/public/p9.png','/static/public/p10.png']
            }
        }
    }
</script>
<style scoped>
    a {
        text-decoration: none;
    }
    .publish {
        background: #f4f4f4;
    }
    .kindsItem {
        margin-top: .32rem /* 24/75 */;
        background-color: #fff;        
    }
    .kindsItem a {
        color: #2f2f2f;
        font-size: .346667rem /* 26/75 */;
    }
    .kinds_grid {
        width: 20%;
        height: 2rem /* 150/75 */;
        display: inline-block;
        text-align: center;
        color: #000;
    }
    .kinds_grid>a>img {
        width: 50%;
        height: 50%;
    }
    .followPublish {
        position: relative;
        background-color: #fff;
        height: 1.333333rem /* 100/75 */;
        margin-top: .293333rem ;
        font-size: .48rem /* 36/75 */;
        color: #2f2f2f;
        line-height: 1.333333rem /* 100/75 */;    
    }
    .followPublish span {
        display: inline-block;
        position: absolute;
        margin-top: -.026667rem /* 2/75 */;
        color: #2f2f2f;
    }
    .followPublish img, .arrow img {
        width: 1.2rem /* 90/75 */;
        height: 1.2rem /* 90/75 */;
    }
    .arrow {
        margin-left:6.933333rem /* 520/75 */;
    }
    .publishTexts {
        width: 100%;
        /* padding-top: .32rem 24/75; */
        margin: 0 auto;
        overflow-x: auto;
        background: #f2f2f2;    
    } 
    .publishText {
        width: 4.533333rem /* 340/75 */;
        float: left;
        margin-left: .266667rem /* 20/75 */;
        margin-top: .32rem /* 24/75 */;                
    }
    .text {
        /* background-color: #fff; */
        width: 4.533333rem /* 340/75 */;
        margin: 0  .053333rem /* 4/75 */ .24rem /* 18/75 */;
        /* border-radius: 4%; */
        position: relative;
        cursor: pointer;
        background: #fff;        
    }
    .coverImg img {
        width: 4.533333rem /* 340/75 */;
        height: 5.973333rem /* 448/75 */;
        /* border-radius: 4%; */
    }
    .maskText {
        position: absolute;
        margin-top: -1.066667rem /* 80/75 */;
    }
    .maskText .fixedText {
        width: 4.48rem /* 336/75 */;        
        height: .96rem /* 72/75 */;
        background:rgba(0, 0, 0, .6); 
        border-radius: 5%;         
    }
    .maskText p {
        font-size: .32rem /* 24/75 */;
        color: #fff;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 1;
        margin-right: .16rem /* 12/75 */;
    }
    .update span, .tag span {
        display: inline-block;
        margin-top: .066667rem /* 5/75 */;
        width: .693333rem /* 52/75 */;
        height: .373333rem /* 28/75 */;
        background: #e45854;
        color: #fff;
        border-radius: 8%;
        text-align: center;
        margin-left: .053333rem /* 4/75 */;
        margin-right: .053333rem /* 4/75 */;
    }
    .tag span {
       background: #3f8be6;
    }
    .title {
        font-size: .48rem /* 36/75 */;
        color: #2f2f2f;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
    }
    .title a, .info a {
        color: #2f2f2f;
    }
    .title, .info {
        margin-left: .186667rem /* 14/75 */;
    }
    .info {
        margin-top: .186667rem /* 14/75 */;
    }
    .info img {
        width: .48rem /* 36/75 */;
        height: .48rem /* 36/75 */;
        border-radius: 50%;
    }
    .info .nickname, .info .look {
        position: absolute;
    }
    .info .nickname {
        margin-left: .106667rem /* 8/75 */;
        margin-top: .026667rem /* 2/75 */;
    }
    .info .look {
        margin-top: .026667rem /* 2/75 */;
        margin-left: 2.666667rem /* 200/75 */;
    }
</style>
