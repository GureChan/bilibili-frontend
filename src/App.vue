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
</style>
