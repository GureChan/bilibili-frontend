<template>
  <home-nav-bar></home-nav-bar>
  <home-tab></home-tab>
  <div class="main-placeholder">
    <div class="content-container" ref="contentContainer" @scroll="handleScroll" @touchstart="handleTouchStart" @touchmove="handleTouchMove" @touchend="handleTouchEnd">
      <div class="content">
        <router-view :video-data="videoList"></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import HomeNavBar from "@/views/home/HomeNavBar";
import HomeTab from "@/views/home/HomeTab";
import request from "@/request";

import {ref} from "vue";

export default {
  name: "Home",
  components: {
    HomeNavBar,
    HomeTab
  },
  setup() {
    const videoList = ref([])
    const contentContainer = ref()


    request.get('/videos', {params: {index: 1, size: 20}}).then(res => {
      videoList.value = Object.values(res.data)
    }).catch(err => {
      console.log(err);
    })



    const handleTouchStart = (event)=>{
      console.log(event)
      console.log(contentContainer.value);
      // const {scrollTop, clientHeight, scrollHeight} = event.target

    }
    return {
      videoList,
      contentContainer,
      handleTouchStart
    }
  }
}
</script>

<style scoped>
.main-placeholder{
  flex: 1;
  position: relative;
}
.content-container{
/*
      滚动事件：
      https://blog.adityasui.com/article/605853d3ca92b803ea40f8c4
      https://ayase.moe/2018/11/20/scroll-event/
      子元素不能设置高度，或者动态高度可以按照以下办法：
      https://blog.csdn.net/youlinhuanyan/article/details/106271539
*/
  position: absolute;
  top: 0;
  bottom: 0;
  overflow-y:scroll;
  overscroll-behavior-y: contain;
}
.content{
  margin-top: 10px;
}
</style>