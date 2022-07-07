<template>
  <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
    <div class="swiper" v-if="isFirstLoad">
      <van-swipe :autoplay="3000" indicator-color="white" lazy-render class="live-swiper">
        <van-swipe-item v-for="item in swipeItemList" :key="item">
          <img :src="item" alt="">
        </van-swipe-item>
      </van-swipe>
    </div>

    <div class="grid-recommend-category" :style="{marginTop:isFirstLoad?`8px`:`0`}">
      <van-grid :column-num="5" square :border="false" icon-size="36">
        <template v-for="item in liveCategoryList" :key="item">
          <van-grid-item :icon="item.img" :text="item.title"/>
        </template>
      </van-grid>
    </div>

    <div class="recommend-live">
      <div class="title">
        <van-icon :name="videoCameraIcon" size="22"></van-icon>
        <span>推荐直播</span>
      </div>
      <van-list
          v-model:loading="loading"
          :finished="finished"
          finished-text="没有更多了"
          @load="onLoad"
          :offset="10"
      >
        <div class="video-view van-clearfix">
          <template v-for="items in splitItems" :key="items">
            <div class="view-list">
              <template v-for="item in items" :key="item">
                <video-view-item>

                  <template #videoImage>
                    <img :src="item.image" alt="">
                  </template>

                  <template #videoInfo>
                    <div class="left-info">
                      <span>{{ item.streamer }}</span>
                    </div>
                    <div class="right-info">
                      <van-icon :name="viewersIcon" size="14"></van-icon>
                      <span>{{ item.viewersNumber }}</span>
                    </div>
                  </template>

                  <template #infoCenter>
                    <div class="live-title">
                      <span>{{ item.title }}</span>
                    </div>
                  </template>

                  <template #infoBottom>
                    <div class="live-category">
                      <span>{{ item.category }}</span>
                    </div>
                  </template>
                </video-view-item>
              </template>
            </div>
          </template>
        </div>
      </van-list>
    </div>
  </van-pull-refresh>
</template>

<script>
import {Swipe, SwipeItem, Grid, GridItem} from 'vant';
import {reactive, ref, computed, onMounted} from "vue";
import request from "@/request";
import videoViewItem from "@/components/VideoViewItem";
import viewersIcon from '@/assets/icon/viewers.svg'
import videoCameraIcon from '@/assets/icon/video-camera.svg'

export default {
  name: "Live",
  components: {
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem,
    [Grid.name]: Grid,
    [GridItem.name]: GridItem,
    videoViewItem
  },
  setup() {
    const refreshing = ref(false)
    const swipeItemList = ref([require('@/assets/img/swipe/1.webp'), require('@/assets/img/swipe/2.webp'), require('@/assets/img/swipe/3.webp')]);
    const loading = ref(false)
    const finished = ref(false)
    const liveList = reactive([])
    const columns = 2
    let pageIndex = 1
    let isFirstLoad = ref(true)

    const liveCategoryList = ref([
      {
        img: require('@/assets/img/live-grid/1.webp'),
        title: '英雄联盟'
      },
      {
        img: require('@/assets/img/live-grid/2.webp'),
        title: '虚拟主播'
      },
      {
        img: require('@/assets/img/live-grid/3.webp'),
        title: '王者荣耀'
      },
      {
        img: require('@/assets/img/live-grid/4.webp'),
        title: 'CS:GO'
      },
      {
        img: require('@/assets/img/live-grid/5.webp'),
        title: '视频唱见'
      },
      {
        img: require('@/assets/img/live-grid/6.webp'),
        title: '舞见'
      },
      {
        img: require('@/assets/img/live-grid/7.webp'),
        title: '视频聊天'
      },
      {
        img: require('@/assets/img/live-grid/8.webp'),
        title: '户外'
      },
      {
        img: require('@/assets/img/live-grid/9.webp'),
        title: '主机游戏'
      },
      {
        img: require('@/assets/img/live-grid/10.webp'),
        title: '陪伴'
      }
    ])

    onMounted(() => {
      document.querySelector('body').setAttribute('style', 'background:#f4f4f4')
    })

    let splitItems = computed(() => {
      // 把数据给分成多列，这里是2列，然后进行渲染
      return [
        liveList.filter(el => liveList.indexOf(el) % columns === 0
        ),
        liveList.filter(el => liveList.indexOf(el) % columns !== 0)
      ]
    })

    const onRefresh = () => {
      isFirstLoad.value = false
      finished.value = false
      loading.value = true;
      onLoad();
    }

    const onLoad = () => {
      if (refreshing.value) {
        liveList.splice(0, liveList.length)
        refreshing.value = false
      }
      if (liveList.length === 100) {
        finished.value = true
      } else {
        request.get('/live', {params: {index: pageIndex++, size: 10}}).then((res) => {
          loading.value = false
          liveList.push(...Object.values(res.data))
        }).catch((err) => {
          console.log(err)
        })
      }
    }
    return {
      swipeItemList,
      refreshing,
      onRefresh,
      loading,
      finished,
      onLoad,
      splitItems,
      liveCategoryList,
      viewersIcon,
      isFirstLoad,
      videoCameraIcon
    }
  }
}
</script>

<style scoped>
.swiper,
.grid-recommend-category {
  border-radius: 10px;
  overflow: hidden;
}

.live-swiper  {
  height: 150px;
}

.van-swipe-item img {
  width: 100%;
}

.grid-recommend-category {
  margin-bottom: 8px;
}

.title {
  font-weight: bold;
  margin-bottom: 8px;
}

.video-view {
  display: flex;
  flex-wrap: wrap;
  margin-top: 8px;
}

.video-view > .view-list:first-child {
  margin-right: 4px;
}

.video-view > .view-list:nth-child(2) {
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

.right-info span {
  margin-left: 4px;
}

.live-title {
  height: 40px;
  font-size: 14px;
}

.live-title > span {
  display: block;
  margin-left: 8px;
}

.live-category {
  font-size: 12px;
  display: flex;
  color: #9499A0;
  height: 18px;
  align-items: center;
  padding-left: 8px;
}

.live-category > span {
  padding-left: 4px;
}

.title{
  display: flex;
  align-items: center;
}
.title>span{
  margin-left: 4px;
}
</style>