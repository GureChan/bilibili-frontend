<template>
  <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
    <div class="list-header">
      <div class="left">
        <span>当前热门</span>
      </div>
      <div class="right">
        <van-icon :name="chartIcon" size="20"></van-icon>
        <span>排行榜</span>
        <van-icon :name="chevronRightIcon"></van-icon>
      </div>
    </div>

    <van-list
      v-model:loading="loading"
      :finished="finished"
      finished-text="没有更多了"
      @load="onLoad"
      :offset="10"
    >
      <div class="hot-list">
        <video-list-item v-for="item in hotList" :key="item">
          <template #cover>
            <img :src="item.image" alt="" />
            <div class="duration">
              <span>{{ item.duration }}</span>
            </div>
          </template>

          <template #title>
            <span>{{ item.title }}</span>
          </template>

          <template #centerInfo>
            <span>@{{ item.uploader }}</span>
          </template>

          <template #bottomInfo>
            <span>{{ item.playsCount }}</span>
            <span>{{ item.uploadTime }}</span>
          </template>
        </video-list-item>
      </div>
    </van-list>
  </van-pull-refresh>
</template>

<script>
import chartIcon from "@/assets/icon/chart.svg";
import chevronRightIcon from "@/assets/icon/chevron-right.svg";
import VideoListItem from "@/components/VideoListItem.vue";
import request from "@/request";
import { reactive, ref, onMounted } from "vue";
export default {
  name: "Hot",
  components: {
    VideoListItem,
  },
  setup() {
    const refreshing = ref(false);
    const finished = ref(false);
    const loading = ref(false);
    const hotList = reactive([]);
    let pageIndex = 1;
    const onLoad = () => {
      if (refreshing.value) {
        hotList.splice(0, hotList.length);
        refreshing.value = false;
      }
      if (hotList.length === 100) {
        finished.value = true;
      } else {
        // 写后端的时候不能以/hot来当作api，这里只是模拟一下
        request
          .get("/hot", { params: { index: pageIndex++, size: 10 } })
          .then((res) => {
            loading.value = false;
            hotList.push(...Object.values(res.data));
          })
          .catch((err) => {
            console.log(err);
          });
      }
    };

    const onRefresh = () => {
      finished.value = false;
      loading.value = true;
      onLoad();
    };

    onMounted(() => {
      document
        .querySelector("body")
        .setAttribute("style", "background:#ffffff");
    });
    return {
      chartIcon,
      chevronRightIcon,
      onLoad,
      onRefresh,
      refreshing,
      loading,
      finished,
      hotList,
    };
  },
};
</script>

<style scoped>
.list-header {
  display: flex;
  margin-top: 10px;
  font-size: small;
  font-weight: normal;
}
.left,
.right {
  flex: 1;
}
.right {
  justify-content: flex-end;
  display: flex;
  align-items: center;
}
.right > * {
  margin-left: 4px;
}
.right > span {
  color: #1989fa;
}
.duration {
  position: absolute;
  border-radius: 5px;
  background-color: #00000046;
  padding: 3px;
  color: #fff;
  bottom: 4px;
  right: 4px;
  font-size: x-small;
}
.hot-list .video-item:last-child {
  border-bottom: none;
}
.title > span {
  font-size: 14px;
}
.center-info > span,
.bottom-info span {
  font-size: small;
  color: #9499a0;
}
.bottom-info span:nth-child(2) {
  margin-left: 8px;
}
</style>
