<template>
  <van-nav-bar :border="false">
    <template #left>
      <van-icon :name="loginIcon" size="26"></van-icon>
    </template>

    <template #title>
      <van-search shape="round" disabled placeholder="叔叔，柠檬什么时候熟"></van-search>
    </template>

    <template #right>
      <van-icon :name="mailIcon" size="26"></van-icon>
    </template>
  </van-nav-bar>
</template>

<script>
import loginIcon from '@/assets/icon/user-circle.svg'
import mailIcon from '@/assets/icon/mail.svg'

export default {
  name: "HomeHeader",
  setup(){
    return{
      loginIcon,
      mailIcon
    }
  }
}
</script>

<style scoped>
.van-nav-bar :deep(.van-icon){
  color: inherit;
}
.van-nav-bar :deep(.van-nav-bar__title){
  max-height: 100%;
  display: flex;
}
</style>