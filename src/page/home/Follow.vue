<template>
  <div class="follow">
      <form class="search">
        <input type="text" placeholder="搜索简书上的内容和朋友"  v-model="search"
       onblur="if(this.placeholder=='') placeholder='搜索简书上的内容和朋友';"
        onfocus="if(this.placeholder=='搜索简书上的内容和朋友') placeholder='';">          
      </form>
      <div class="line"></div>
        <div  v-for="article in filteredArticles" :key="article.id">
                <div class="body">
                        <div class="info">
                            <img class="avatar" :src=" article.avatar " alt="">
                            <span class="nickname">{{ article.nickname }}</span>
                        </div>
                    <router-link :to="'/article/' + article.id">
                        <div class="banner"><img :src=" article.banner " alt=""></div>
                        <div class="title">{{ article.title }}</div>
                        <div class="text">{{ article.text }}</div>
                    </router-link>
                        <div class="meta">
                            <span >{{ article.comment }}评论 · {{ article.like }}喜欢</span>
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
                this.articles = response.data.articles;
                console.log(this.articles);
            })
            .catch((error)=>{
                console.log(error);
            })
        },
        data() {
            return {
                articles:[],
                search:''
            }
        },
        computed:{
            filteredArticles:function() {
                return this.articles.filter((article) => {
                    return article.title.match(this.search) || article.nickname.match(this.search);
                })
            }
        }
        

    }
</script>
<style scoped>
    .search {
        position: relative;
    }  
    .search input {
        margin: 0 auto;
        width: 9.466667rem /* 710/75 */;
        margin-top: .4rem /* 30/75 */;
        margin-left: .266667rem /* 20/75 */;
        height: .773333rem /* 58/75 */;
        text-align: center;
        color:#b1b1b1;
        font-size: .373333rem /* 28/75 */;
        line-height: .773333rem /* 58/75 */;
        /* border-radius: .333333rem 25/75; */
        background: #f3f3f3;
    }
    
    .body {
        margin: .426667rem /* 32/75 */ .453333rem /* 34/75 */  .666667rem /* 50/75 */ .426667rem /* 32/75 */;
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
    .body {
        position: relative;
        padding-top: .48rem /* 36/75 */;
    }
    .body:after {
        content: '';
        position: absolute;
        left: 0;
        right: 0;
        height: .013333rem /* 1/75 */;
        bottom: -1.066667rem /* 80/75 */;
        border-bottom: .013333rem /* 1/75 */ solid #D5D5D5;
        transform: rotateY(0.5);
    }
    .line {
        border: .013333rem /* 1/75 */ solid #D5D5D5;
        height: .013333rem /* 1/75 */;
        margin-top: .32rem /* 24/75 */;
        transform: rotateY(0.5);        
    }
</style>