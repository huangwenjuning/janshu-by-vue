<template>
 <div class="fans">
        <div class="titles">关注
            <span>添加关注</span>    
        </div>
        <div class="box" v-for="info in infos">
            <div class="fansInfo">
                <div class="avatarImg"><img src="../../assets/avatar.jpg" alt=""></div>
                <div class="infomation">
                    <p class="nickname">{{info.nickname}}</p>
                    <p class="details">{{info.details}}</p>
                </div>
                <button class="following">已关注</button>
            </div>
        </div>  
    </div>
</template>
<script>
    export default {
        name: 'fans',
        data() {
            return {
            }
        },
        computed: {
            infos() {
                return this.$store.state.infos
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
    margin-left: 2.24rem /* 168/75 */;   
}
.titles span {
    color:#ea6f5a;
    float: right;
    margin-right: .346667rem /* 26/75 */;
}
.titles:after {
    content: "";
    position: absolute;
    right: 0;
    left: -2.24rem /* 168/75 */;
    bottom: -.4rem /* 30/75 */;
    height: .013333rem /* 1/75 */;
    border-top: .013333rem  solid #D5D5D5;
    transform:scaleY(0.5);
}
.box {
    margin-top: .32rem /* 24/75 */;
    height: 1.946667rem /* 146/75 */;
    padding-top: .533333rem /* 40/75 */;
    padding-left: .346667rem /* 26/75 */;
    padding-right: .346667rem /* 26/75 */;
    position: relative;
}
.box:after {
    content: "";
    position: absolute;
    right: 0;
    left: .346667rem /* 26/75 */;
    bottom: .32rem /* 24/75 */;
    height: .013333rem /* 1/75 */;
    border-top: .013333rem  solid #D5D5D5;
    transform:scaleY(0.5); 
}
.fansInfo .avatarImg {
    float: left;
}
.fansInfo .avatarImg img{
    width: .853333rem /* 64/75 */;
    height: .853333rem /* 64/75 */;
    border-radius: 50%;
}
.infomation {
    margin-left:1.146667rem /* 86/75 */;
}
.infomation .nickname {
    font-size: .373333rem /* 28/75 */;
    color: #2f2f2f;
}
.infomation .details {
    font-size: .293333rem /* 22/75 */;
    color: #888;
}
.fansInfo .following {
    float: right;
    margin-top: -.746667rem /* 56/75 */;
}
</style>
