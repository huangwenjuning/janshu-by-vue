<template>
<div class="discovery">
    <!-- <div class="page-title">N</div> -->
    <!-- navbar -->
    <mt-navbar class="page-part" v-model="selected">
        <mt-tab-item id="1">推荐</mt-tab-item>
        <mt-tab-item id="2">连载</mt-tab-item>
        <mt-tab-item id="3">专题</mt-tab-item>
    </mt-navbar>

    <!-- <div>
        <mt-cell class="page-part" title="">{{ selected }}</mt-cell>
    </div> -->
    <!-- tabcontainer -->
    <mt-tab-container v-model="selected">                        
        <mt-tab-container-item id="1"><commend></commend> </mt-tab-container-item>
        <mt-tab-container-item id="2"><publish></publish> </mt-tab-container-item>
        <mt-tab-container-item id="3"><special-news></special-news> </mt-tab-container-item>
    </mt-tab-container>
</div>
</template>
<script>
import Commend from '../../components/discovery/Commend'
import Publish from '../../components/discovery/Publish'
import SpecialNews from '../../components/discovery/SpecialNews'
    export default {
        name: 'discovery',
        components: {
            Commend,
            Publish,
            SpecialNews
        },
        data() {
            return {
                selected: '1'
            }
        }
    }
</script>
<style>
    a {
        text-decoration: none;
        border-radius: 5px;
    }
    /* .router-link-active {
        color: #ea6f5a
    } */
    .mint-navbar a {
        /* color: #2F2F2F; */
        text-decoration: none;
   }
   /* .is-selected .mint-tab-item-label{
       color: #EA6F5A;
       
   } */
   .mint-navbar{
       position: relative;
   }
   .mint-navbar .mint-tab-item.is-selected {
    border-bottom: 0 solid #EA6F5A;
    color: #EA6F5A;
    margin-bottom: -3px;
}
    /* .mint-navbar .mint-tab-item.is-selected:after{
        content: '';
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        border-top: 2px solid red;
        z-index: 999;
    }    */
    .is-selected .mint-tab-item-label:after{
        content: '';
        position: absolute;
        left: .8rem /* 60/75 */;
        right: .693333rem /* 52/75 */;
        bottom: -.32rem /* 24/75 */;
        border-top: .106667rem /* 8/75 */ solid #EA6F5A;
        z-index: 999;
    }   
   .mint-tab-item-label {
       font-size: .506667rem /* 38/75 */;
       font-weight: 500;
       position: relative;
   }
   
</style>
