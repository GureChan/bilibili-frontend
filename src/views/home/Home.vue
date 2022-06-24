<template>
  <home-nav-bar></home-nav-bar>
  <home-tab></home-tab>
  <router-view :video-data="videoList"></router-view>
</template>

<script>
import HomeNavBar from "@/views/home/HomeNavBar";
import HomeTab from "@/views/home/HomeTab";

import request from "@/request";
import { ref } from "vue";

export default {
  name: "Home",
  components: {
    HomeNavBar,
    HomeTab
  },
  setup() {
    let videoList = ref([]) 

    request.get('/videos').then(res => {
      videoList.value = res.data.videoViewList
    }).catch(err => {
      console.log(err);
    })

    return {
      videoList,
    }
  }
}
</script>

<style scoped>
</style>