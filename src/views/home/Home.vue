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

export default {
  name: "Home",
  components: {
    HomeNavBar,
    HomeTab,
  },
  setup() {

  }
}
</script>

<style scoped>
.content {
  position: relative;
  padding-top: 8px;
  padding-left: 8px;
  padding-right: 8px;
  flex: 1;
  overflow: auto;
}
</style>