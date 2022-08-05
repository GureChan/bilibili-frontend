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
      <span>{{ userInfo?.username || '点击登录' }}</span>
      <van-icon :name="chevronIcon"></van-icon>
    </div>
    <div class="center-info">
      <div class="info-item">
        <span>{{ '-' }}</span>
        <span>动态</span>
      </div>
      <div class="info-item">
        <span>{{ '-' }}</span>
        <span>关注</span>
      </div>
      <div class="info-item">
        <span>{{ '-' }}</span>
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
import { computed, nextTick, onActivated, onMounted, reactive, ref } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import { getUserInfoRequest } from "@/api/user";

export default {
  name: "Profile",
  setup() {
    const store = useStore()
    const isLightMode = ref(false); // 浅色模式
    const loginStatus = computed(() => store.state.user.loginStatus) // vuex分成模块之后，在取的时候都要加上模块名
    const uid = computed(() => store.state.user.uid)
    const router = useRouter();
    let userInfo = ref(null);

    const toLoginPage = () => {
      router.push({ name: "signin" });
    };

    onActivated(async () => {
      document
        .querySelector("body")
        .setAttribute("style", "background:#ffffff");
      // 每次切换到该页面的时候，判断用户是否登录,如果登录了就渲染信息，如果没有登录，就渲染未登录信息
      if (loginStatus.value) {
        const temp = await getUserInfoRequest(uid.value)
        userInfo.value = temp.data.data
      }
    })

    return {
      moonIcon,
      sunIcon,
      paletteIcon,
      isLightMode,
      noFaceAvater,
      chevronIcon,
      historyIcon,
      favouriteIcon,
      toLoginPage,
      loginStatus,
      userInfo
    };
  },
};
</script>

<style scoped>
.van-nav-bar__right>i {
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

.top-info>img {
  height: 90%;
  margin-left: 10px;
  border-radius: 50%;
}

.top-info>span {
  margin-left: 20px;
  font-size: larger;
}

.top-info> :nth-child(3) {
  margin-right: 0;
  margin-left: auto;
}

.center-info {
  padding: 20px 0;
  display: flex;
}

.info-item {
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;
}

.info-item>span:nth-child(2) {
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

.video-item>span {
  font-size: 14px;
}
</style>
