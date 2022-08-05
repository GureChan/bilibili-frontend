<template>
  <div class="header">
    <Tab v-if="loginStatus" :tabs="tabList" :icon-name="editIcon" />
    <van-nav-bar v-else title="动态" />
  </div>
  <div class="content">
    <template v-if="loginStatus">
      <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
        <van-list v-model:loading="loading" :finished="finished" finished-text="没有更多了" @load="onLoad"
          :immediate-check="false">
          <div class="item-list">
            <dynamic-item v-for="item in itemList" :key="item" :interactionData="item"></dynamic-item>
          </div>
        </van-list>
      </van-pull-refresh>
    </template>

    <template v-else>
      <div class="logout-info">
        <span>你还未登录</span>
        <span>登录账号，查看你关注的UP主内容</span>
        <van-button type="primary" size="large" round>登录</van-button>
      </div>
    </template>
  </div>
</template>

<script>
import { useStore } from 'vuex'
import editIcon from '@/assets/icon/edit.svg'
import Tab from '@/components/Tab.vue'
import { onActivated, computed, ref } from 'vue'
import DynamicItem from '@/components/DynamicItem.vue'
import { getDynamicRequest } from '@/api/dynamic'
export default {
  name: "Dynamic",
  components: {
    Tab,
    DynamicItem
  },
  setup() {
    const store = useStore();
    const loading = ref(false)
    const finished = ref(false)
    const refreshing = ref(false)
    const loginStatus = computed(() => store.state.user.loginStatus)
    let itemList = ref([])
    const tabList = [
      {
        title: '视频',
        tabName: 'video'
      },
      {
        title: '综合',
        tabName: 'integration'
      }
    ]

    onActivated(async () => {
      document
        .querySelector("body")
        .setAttribute('style', 'background:#f4f4f4')

      if (loginStatus.value) {
        const response = await getDynamicRequest();
        console.log(response);
        itemList.value = response.data.data
      }
    })

    const onRefresh = () => {
      finished.value = false
      loading.value = true;
      onLoad();
    }

    // XXX:我觉得不应该由前端来控制是否结束加载
    const onLoad = async () => {
      if (refreshing.value) {
        itemList.value.splice(0, itemList.value.length)
        refreshing.value = false
      }
      if (itemList.value.length === 20) {
        finished.value = true
      } else {
        const response = await getDynamicRequest();
        itemList.value = response.data.data.dynamicList
      }
    }
    return {
      tabList,
      editIcon,
      loginStatus,
      itemList,
      loading,
      finished,
      refreshing,
      onRefresh,
      onLoad
    }
  }
}
</script>

<style scoped>
.content {
  position: relative;
  flex: 1;
  overflow: auto;
  display: flex;
  flex-direction: column
}

.logout-info {
  padding: 30px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.logout-info>span:first-child {

  font-weight: 700;
  font-size: large
}

.logout-info>span:nth-child(2) {
  color: rgb(75, 75, 75);
}

.logout-info>* {
  margin: 6px 0;
}

.item-list {
  height: 100%;
  display: flex;
  flex-direction: column;
}

:deep(.van-pull-refresh) {
  overflow: scroll;
}
</style>