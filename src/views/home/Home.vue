<template>
  <div class="header">
    <home-nav-bar></home-nav-bar>
      <home-tab></home-tab>
  </div>
  <div class="content">
    <router-view></router-view>
  </div>
</template>

<script>
import HomeNavBar from "@/views/home/HomeNavBar";
import HomeTab from "@/views/home/HomeTab";

import {ref} from "vue";

export default {
  name: "Home",
  components: {
    HomeNavBar,
    HomeTab,
  },
  setup() {
    const content = ref()
    const header = ref()


    return {
      header,
      content,
    }
  }
}
</script>

<style scoped>
.content {
  position: relative;
  flex: 1;
  overflow: auto;
}
</style>