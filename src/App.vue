<template>
  <router-view></router-view>

  <div class="footer" v-show="$route.meta.isTabBarShow">
    <tab-bar></tab-bar>
  </div>
</template>

<script>
import tabBar from "@/components/TabBar";

export default {
  name: "App",
  components: {
    tabBar,
  },
};
</script>

<style>
/*
https://blog.csdn.net/u010881899/article/details/80845369
顶部，底部固定，中间滚动
*/
html,
body {
  height: 100%;
  width: 100%;
}

.footer {
  overflow: hidden;
}

#app {
  display: flex;
  flex-direction: column;
  height: 100%;
}
</style>
