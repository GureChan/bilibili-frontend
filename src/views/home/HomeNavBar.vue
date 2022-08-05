<template>
  <van-nav-bar :border="false" @click-left="handleClickLeft" @click-right="handleClickRight">
    <template #left>
      <van-icon :name="loginIcon" size="26"></van-icon>
    </template>

    <template #title>
      <van-search shape="round" disabled placeholder="你所热爱的，就是你的生活"></van-search>
    </template>

    <template #right>
      <van-icon :name="mailIcon" size="26"></van-icon>
    </template>
  </van-nav-bar>
</template>

<script>
import loginIcon from "@/assets/icon/user-circle.svg";
import mailIcon from "@/assets/icon/mail.svg";

export default {
  name: "HomeHeader",
  props: {
    // BUG:并不能接收到参数
    handleClickLeft: {
      type: Function,
      required: true
    },
    handleClickRight: {
      type: Function,
      required: true
    }
  },
  setup() {
    return {
      loginIcon,
      mailIcon,
    };
  },
};
</script>

<style scoped>
.van-nav-bar :deep(.van-icon) {
  color: inherit;
}

:deep(.van-nav-bar__left) {
  position: relative;
}

:deep(.van-nav-bar__right) {
  position: relative;
}

:deep(.van-nav-bar__title) {
  flex: 1;
  width: 0;
  max-width: 100%;
}
</style>
