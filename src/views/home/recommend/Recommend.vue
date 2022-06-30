<template>
  <div class="video-view">
    <template v-for="items in splitItems" :key="items">
      <div class="view-list">
        <template v-for="item in items" :key="item">
          <video-view-item>

            <template #videoImage>
              <img :src="item.image" alt="">
            </template>

            <template #videoInfo>
              <div class="left-info">
                <van-icon :name="item.playIcon"></van-icon>
                <span>{{ item.playsCount }}</span>
              </div>
              <div class="right-info">
                <span>{{ item.duration }}</span>
              </div>
            </template>

            <template #infoCenter>
              <div class="video-title">
                <span>{{ item.title }}</span>
              </div>
            </template>

            <template #infoBottom>
              <div class="video-uploader">
                <span>@</span>
                <span>{{ item.uploader }}</span>
              </div>
            </template>
          </video-view-item>
        </template>
      </div>
    </template>
  </div>
</template>

<script>
import {onMounted,computed} from "vue";

import VideoViewItem from "@/components/VideoViewItem";

export default {
  name: "Recommend",
  props: {
    videoData: {
      type: Array,
      default() { // 这里是否要写成函数形式
        return []
      }
    }
  },
  components: {
    VideoViewItem
  },
  setup(props) {
    const columns = 2
    let splitItems = computed(() => {
      return [
        props.videoData.filter(el => props.videoData.indexOf(el) % columns === 0),
        props.videoData.filter(el => props.videoData.indexOf(el) % columns !== 0)
      ]
    })

    onMounted(() => {
      document.querySelector('body').setAttribute('style', 'background:#f4f4f4')
    })

    return {
      splitItems,
    }
  }
}
</script>

<style scoped>
.video-view {
  display: flex;
  flex-wrap: wrap;
}

.view-list {
  flex: 1;
  display: flex;
  flex-direction: column;
  margin: 0 4px;
}

.video-image img {
  height: 100%;
  width: 100%;
}

.left-info,
.right-info {
  flex: 1;
  display: flex;
  font-size: small;
  align-items: center;
}

.left-info {
  padding-left: 8px;
}

.left-info span {
  padding-left: 4px;
}

.right-info {
  justify-content: flex-end;
  padding-right: 6px;
}

.video-title {
  height: 40px;
  font-size: 14px;

}

.video-title > span {
  display: block;
  margin-left: 8px;
}

.video-uploader {
  font-size: 12px;
  display: flex;
  color: #9499A0;
  height: 18px;
  align-items: center;
  padding-left: 8px;
}

.video-uploader > span:nth-child(2) {
  padding-left: 4px;
}
</style>