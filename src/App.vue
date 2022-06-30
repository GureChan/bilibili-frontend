<template>
  <router-view></router-view>
  <tab-bar></tab-bar>
</template>

<script>
import tabBar from "@/components/TabBar";

export default {
  name: 'App',
  components: {
    tabBar
  },
}
</script>

<style>
html{
  height: 100vh;
}
body{
  height: 100vh;
}
#app{
  height: 100vh;
  display: flex;
  flex-direction: column;
}
</style>
