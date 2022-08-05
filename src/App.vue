<template>
  <router-view v-slot="{ Component }">
    <keep-alive>
      <component :is="Component" />
    </keep-alive>
  </router-view>

  <div class="footer" v-show="$route.meta.showTabBar">
    <!-- 根据从路由传入的meta来判断该页面是否需要tabbar -->
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

#app {
  display: flex;
  flex-direction: column;
  height: 100%;
}
</style>
