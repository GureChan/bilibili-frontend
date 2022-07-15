<template>
  <div class="header">
    <van-nav-bar>
      <template #right>
        <van-icon :name="paletteIcon" size="24"></van-icon>
        <van-icon v-if="isLightMode" :name="sunIcon" size="24"></van-icon>
        <van-icon v-else :name="moonIcon" size="24"></van-icon>
      </template>
    </van-nav-bar>
  </div>

  <div class="content">
    <div class="top-info" @click="toLoginPage">
      <img :src="noFaceAvater" alt="" />
      <span>点击登录</span>
      <van-icon :name="chevronIcon"></van-icon>
    </div>
    <div class="center-info">
      <div class="info-item">
        <span>4</span>
        <span>动态</span>
      </div>
      <div class="info-item">
        <span>5</span>
        <span>关注</span>
      </div>
      <div class="info-item">
        <span>6</span>
        <span>粉丝</span>
      </div>
    </div>
    <div class="video-info">
      <div class="video-item">
        <van-icon :name="historyIcon" :size="22"></van-icon>
        <span>历史记录</span>
      </div>
      <div class="video-item">
        <van-icon :name="favouriteIcon" :size="22"></van-icon>
        <span>我的收藏</span>
      </div>
    </div>
  </div>
</template>

<script>
import historyIcon from "@/assets/icon/history.svg";
import favouriteIcon from "@/assets/icon/favourite.svg";
import chevronIcon from "@/assets/icon/chevron-right-profile.svg";
import moonIcon from "@/assets/icon/moon.svg";
import sunIcon from "@/assets/icon/sun.svg";
import paletteIcon from "@/assets/icon/palette.svg";
import noFaceAvater from "@/assets/img/info/noface.webp";
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";

export default {
  name: "Profile",
  setup() {
    const isLightMode = ref(false);
    const isLogin = ref(false);
    const router = new useRouter();

    onMounted(() => {
      document
        .querySelector("body")
        .setAttribute("style", "background:#ffffff");
    });

    const toLoginPage = () => {
      router.push({ name: "login" });
    };

    return {
      moonIcon,
      sunIcon,
      paletteIcon,
      isLightMode,
      noFaceAvater,
      isLogin,
      chevronIcon,
      historyIcon,
      favouriteIcon,
      toLoginPage,
    };
  },
};
</script>

<style scoped>
.van-nav-bar__right > i {
  margin-left: 20px;
}
.content {
  position: relative;
  padding-top: 8px;
  padding-left: 8px;
  padding-right: 8px;
  flex: 1;
  overflow: auto;
}
.top-info {
  height: 60px;
  width: 100%;
  display: flex;
  align-items: center;
}
.top-info > img {
  height: 90%;
  margin-left: 10px;
  border-radius: 50%;
}

.top-info > span {
  margin-left: 20px;
  font-size: larger;
}
.top-info > :nth-child(3) {
  margin-right: 0;
  margin-left: auto;
}
.center-info {
  padding: 20px 0;
  display: flex;
  border-bottom: 1px solid rgb(189, 189, 189);
}
.info-item {
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;
}
.info-item > span:nth-child(2) {
  color: #646566;
  font-size: small;
}
.video-info {
  margin-top: 20px;
  height: 80px;
  display: flex;
}
.video-item {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #474747;
}
.video-item > span {
  font-size: 14px;
}
</style>
