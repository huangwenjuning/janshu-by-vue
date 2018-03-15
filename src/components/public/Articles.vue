<template>
   <div class="articles">
     <div>
        <div class="title">{{ article[0].title }}</div>
        <div class="authorInfo">
            <img :src="article[0].avatar">
            <span class="nickname">{{ article[0].nickname }}</span>
            <button>+关注</button>
        </div>
        <div class="info">
            <span class="date">{{ article[0].date }} · {{ article[0].time }} · 字数 {{ article[0].words }} · 阅读 {{ article[0].looks }}</span>
        </div>
        <div class="banner">
            <img :src="article[0].banner">
        </div>
        <div class="text">
            <div class="content">
            <p>{{ article[0].text }}</p>
            
                <div class="like"></div>
            </div>
        </div>
        <div class="comment"></div>
      </div>
    </div>
</template>
<script>
    export default {
      name: 'articles',
      created() {
        // console.log(this.id)
            var that = this;
            this.axios.get('https://www.easy-mock.com/mock/5aa1f8fa106c1334ecc10350/janshu/janshu/follow')
            .then((response) =>{
                var articles = response.data.articles;
                // console.log(articles);
                that.article = articles.filter((article) => {
                  return article.id === that.id;
                })
                console.log(that.article)                
            })
            .catch((error)=>{
                console.log(error);
            })
        },
        data() {
            return {
                // articles:[],
                id: this.$route.params.id,
                article: []
            }
        }
    }
</script>
<style scoped>
  
  .title {
    color:#2f2f2f;
    font-size: .746667rem /* 56/75 */;
    font-weight: bold;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
}
.title, .authorInfo, .info {
    margin-left: .4rem /* 30/75 */;
    margin-top: .4rem /* 30/75 */;
}
.authorInfo img {
    width: .906667rem /* 68/75 */;
    height: .906667rem /* 68/75 */;
    border-radius: 50%;
}
.authorInfo span {
    position: absolute;
    margin-left: .266667rem /* 20/75 */;
    margin-top: -.16rem /* 12/75 */;
}
.authorInfo button {
   float: right;
   margin-right: .4rem /* 30/75 */;
   width: 2.16rem /* 162/75 */;
   height: .826667rem /* 62/75 */;
   background-color: #49BE38;
   color: #fff;
   border-radius: 8%;
}
.nickname {   
    font-size: .453333rem /* 34/75 */;
    color: #333;
    text-align: center;
    line-height: 1.333333rem /* 100/75 */;
}
.info span {
    font-size: .32rem /* 24/75 */;
    color: #888;
}
.banner img{
    margin-top: .4rem /* 30/75 */;
    width: 9.866667rem /* 740/75 */;
    height: 7.546667rem /* 566/75 */;
    margin-left: .066667rem /* 5/75 */;
}
.text p{
    margin: .4rem /* 30/75 */;
    line-height: .346667rem /* 26/75 */;
}
.text {
    position: relative;
}
.content:after {
    content: '';
    position: absolute;
    left: .16rem /* 12/75 */;
    right: .16rem /* 12/75 */;
    bottom: -.32rem /* 24/75 */;
    border-bottom: 1px solid #D5D5D5;
    height: .013333rem /* 1/75 */;
    transform: rotateY(0.5);
}
</style>

 