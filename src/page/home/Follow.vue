<template>
  <div class="follow">
        <div class="search"></div>
        <div  v-for="follow in follows">
        <div class="body">
                <div class="info">
                    <img class="avatar" :src=" follow.avatar " alt="">
                    <span class="nickname">{{ follow.nickname }}</span>
                </div>
                <div class="banner"><img :src=" follow.banner " alt=""></div>
                <div class="title">{{ follow.title }}</div>
                <div class="text">{{ follow.text }}</div>
                <div class="meta">
                    <span >{{ follow.comment }}评论·{{ follow.like }}喜欢</span>
                </div>
        </div>
    </div>
  </div>
</template>
<script>
    export default {
        name: "follow",
        components: {

        },
        mounted() {
            this.axios.get('https://www.easy-mock.com/mock/5aa1f8fa106c1334ecc10350/janshu/janshu/follow')
            .then((response) =>{
                this.follows = response.data.follows;
                console.log(this.follows);
            })
            .catch((error)=>{
                console.log(error);
            })
        },
        data() {
            return {
                follows:[]
            }
        }
        

    }
</script>
<style scoped>
    .body {
        margin: .426667rem /* 32/75 */ .506667rem /* 38/75 */ .666667rem /* 50/75 */ .426667rem /* 32/75 */;
    }
    /*  */
    .info {
        margin-top: .32rem /* 24/75 */;
    }
    .info .avatar {
        width: .826667rem /* 62/75 */;
        height: .826667rem /* 62/75 */;
        border-radius: 50%;
    }

    .info span {
        display: block;
        position: absolute;
        margin-top: -.666667rem /* 50/75 */;
        margin-left: 1.146667rem /* 86/75 */;
    }
    .banner img{
        margin-top: .533333rem /* 40/75 */;
        width: 9.226667rem /* 692/75 */;
        height: 3.226667rem /* 242/75 */;
    }
    .title {
        color: #2f2f2f;
        font-size: .533333rem /* 40/75 */;
        font-weight: 600;
        margin-top: .533333rem /* 40/75 */;
    }
    .text {
        color:#888;
        font-size: .346667rem /* 26/75 */;
        margin-top: .426667rem /* 32/75 */;
    }
    .title, .text {
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
    }
    .meta {
        clear: both;
        float: right;
        margin-top: .453333rem /* 34/75 */;
        color: #888;
        font-size: .346667rem /* 26/75 */;
    }

</style>