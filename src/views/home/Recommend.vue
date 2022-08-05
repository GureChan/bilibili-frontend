<template>
  <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
    <van-list v-model:loading="loading" :finished="finished" finished-text="没有更多了" @load="onLoad" :offset="10">
      <div class="video-view van-clearfix">
        <!-- 注意这里要加van-clearfix 在用flex  时需要清除左右浮动 -->
        <template v-for="items in splitItems" :key="items">
          <div class="view-list">
            <template v-for="item in items" :key="item">
              <video-view-item>

                <template #videoImage>
                  <img :src="item.image" alt="">
                </template>

                <template #videoInfo>
                  <div class="left-info">
                    <van-icon :name="playIcon"></van-icon>
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
    </van-list>
  </van-pull-refresh>
</template>

<script>
import { onMounted, computed, ref, reactive } from "vue";

import VideoViewItem from "@/components/VideoViewItem";
import request from "@/request";
import playIcon from '@/assets/icon/play.svg'


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
  setup() {
    const columns = 2
    const loading = ref(false) // 记录是否正在加载
    const finished = ref(false) // 记录是否所有数据加载完毕
    const refreshing = ref(false) // 判断当前是否正在刷新
    let pageIndex = 1
    let videoList = reactive([])

    let splitItems = computed(() => {
      // 把数据给分成多列，这里是2列，然后进行渲染
      return [
        videoList.filter(el => videoList.indexOf(el) % columns === 0
        ),
        videoList.filter(el => videoList.indexOf(el) % columns !== 0)
      ]
    })

    onMounted(() => {
      document.querySelector('body').setAttribute('style', 'background:#f4f4f4')
    })

    const onLoad = () => {
      // 每次执行的时候 loading的值都会被自动设置为true
      if (refreshing.value) {
        videoList.splice(0, videoList.length)// 清空列表数据
        refreshing.value = false // 当前不在刷新状态
      }
      if (videoList.length === 100) {
        finished.value = true
      } else {
        request.get('/videos', { params: { index: pageIndex++, size: 10 } }).then(res => {
          loading.value = false
          videoList.push(...Object.values(res.data))
        }).catch(err => {
          console.log(err);
        })
      }
    }
    const onRefresh = () => {
      finished.value = false
      loading.value = true;
      onLoad();
    }

    return {
      splitItems,
      loading,
      finished,
      onLoad,
      onRefresh,
      refreshing,
      playIcon,
    }
  }
}
</script>

<style scoped>
.video-view {
  display: flex;
  flex-wrap: wrap;
}

.video-view>.view-list:first-child {
  margin-right: 4px;
}

.video-view>.view-list:nth-child(2) {
  margin-left: 4px;
}

.view-list {
  flex: 1;
  display: flex;
  flex-direction: column;
  height: 100%;
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

.video-title>span {
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

.video-uploader>span:nth-child(2) {
  padding-left: 4px;
}
</style>