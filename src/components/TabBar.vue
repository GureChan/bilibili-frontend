<template>
  <van-tabbar v-model="active" :fixed="false">
    <van-tabbar-item name="home" @click="toNewURL" data-router-name="home">
      <!--  data-*是html中的自定义属性 -->
      <span>首页</span>
      <template #icon="props">
        <img :src="props.active ? images[0].active : images[0].inactive" alt="">
      </template>
    </van-tabbar-item>

    <van-tabbar-item name="dynamic" @click="toNewURL" data-router-name="dynamic">
      <span>动态</span>
      <template #icon="props">
        <img :src="props.active ? images[1].active : images[1].inactive" alt="">
      </template>
    </van-tabbar-item>

    <van-tabbar-item name="user" @click="toNewURL" data-router-name="profile">
      <span>我的</span>
      <template #icon="props">
        <img :src="props.active ? images[2].active : images[2].inactive" alt="">
      </template>
    </van-tabbar-item>
  </van-tabbar>

</template>

<script>
import { ref } from 'vue';
import { Tabbar, TabbarItem } from 'vant';
import homeIcon from '@/assets/icon/home.svg'
import homeActiveIcon from '@/assets/icon/home-active.svg'
import dynamicIcon from '@/assets/icon/dynamic.svg'
import dynamicActiveIcon from '@/assets/icon/dynamic-active.svg'
import userIcon from '@/assets/icon/user.svg'
import userActiveIcon from '@/assets/icon/user-active.svg'
import { useRouter } from 'vue-router'

export default {
  name: "TabBar",
  setup() {
    const active = ref('home');
    const router = useRouter()
    const images = [{
      active: homeActiveIcon,
      inactive: homeIcon
    }, {
      active: dynamicActiveIcon,
      inactive: dynamicIcon
    }, {
      active: userActiveIcon,
      inactive: userIcon
    }]

    const toNewURL = (event) => {
      // https://blog.csdn.net/qq_44960253/article/details/106868020 获取data-开头的属性值
      const url = event.currentTarget.getAttribute("data-router-name")
      // currentTarget是获取当绑定事件的元素，target是获取到事件的元素
      router.push({ name: url })
    }
    return {
      active,
      images,
      toNewURL
    };
  }
}
</script>

<style scoped>
</style>