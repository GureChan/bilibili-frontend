<template>
  <div class="van-tabs">
    <div class="van-tabs-nav">
      <div class="van-tab-word" >
        <template v-for="tab in tabs" :key="tab">
          <div class="van-tab" :data-name="tab.tabName" :class="{activeClass:tab.tabName===activeName}" @click="toNewSubPage(tab.tabName)">
            <span>{{ tab.title }}</span>
          </div>
        </template>
      </div>
      <div class="van-tab-icon">
        <van-icon :name="menuIcon" size="24px"></van-icon>
      </div>
    </div>
  </div>
</template>

<script>
import menuIcon from '@/assets/icon/menu.svg'
import {ref} from 'vue'
import {useRouter} from 'vue-router'

export default {
  name: "HomeTab",
  setup() {
    let activeName = ref('recommend')
    const router = new useRouter()
    const tabs = [
      {
        title: '直播',
        tabName: 'live'
      },
      {
        title: '推荐',
        tabName: 'recommend'
      },
      {
        title: '热门',
        tabName: 'hot'
      },
      {
        title: '动画',
        tabName: 'anime'
      }
    ]

    const toNewSubPage = (tabName) => {
      activeName.value = tabName
      router.push({name:tabName})
    }

    return {
      menuIcon,
      toNewSubPage,
      activeName,
      tabs
    }
  }
}
</script>

<style scoped>
.van-tabs {
  line-height: 44px;
  background: #ffffff;
}

.van-tabs-nav {
  display: flex;
}

.van-tab-word {
  flex: 4;
  display: flex;
  justify-content: center;
  color: #646566;
  align-items: center;
}

.van-tab-word .van-tab {
  margin: 0 14px;
}

.van-tab-icon {
  margin-left: auto;
  margin-right: 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.activeClass {
  color: #1989fa;
}
.activeClass > span{
  font-weight: bolder;
  font-size: 18px;
  border-bottom: 2px solid #1989fa;
  padding-bottom: 4px;
}

.van-tab > span{
  transition: all 0.2s ease 0s;
}
</style>