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
    <router-view></router-view>
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
</style>
