<template>
  <div class="header">
    <home-nav-bar :handleClickLeft="toSignInPage" :handleClickRight="toChatPage"></home-nav-bar>
    <Tab :tabs="tabList" :icon-name="menuIcon">
    </Tab>
  </div>
  <div class="content">
    <router-view></router-view>
  </div>
</template>

<script>
import menuIcon from '@/assets/icon/menu.svg'
import HomeNavBar from "@/views/home/HomeNavBar";
import Tab from "@/components/Tab.vue";
import { useRouter } from 'vue-router';
export default {
  name: "Home",
  components: {
    HomeNavBar,
    Tab,
  },
  setup() {
    const router = useRouter()
    const tabList = [
      {
        title: '推荐',
        tabName: 'recommend'
      },
      {
        title: '热门',
        tabName: 'hot'
      },
    ]

    const toSignInPage = () => {
      router.push({ name: 'signin' })
    }

    // TODO:该组件还没做
    const toChatPage = () => {
      // router.push({ name: '' })
    }
    return {
      tabList,
      menuIcon,
      toSignInPage,
      toChatPage
    }
  }
}
</script>

<style scoped>
.content {
  position: relative;
  padding-top: 8px;
  padding-left: 8px;
  padding-right: 8px;
  flex: 1;
  overflow: auto;
}
</style>