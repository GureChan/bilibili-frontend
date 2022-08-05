<template>
  <div class="van-tabs">
    <div class="van-tabs-nav">
      <div class="van-tab-word" :style="{ flex: tabs.length }">
        <template v-for="tab in tabs" :key="tab">
          <div class="van-tab" :data-name="tab.tabName" :class="{ activeClass: tab.tabName === activeName }"
            @click="toNewSubPage(tab.tabName)">
            <span>{{ tab.title }}</span>
          </div>
        </template>
      </div>
      <div class="van-tab-icon">
        <van-icon :name="iconName" size="24px"></van-icon>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

export default {
  name: "HomeTab",
  props: {
    tabs: {
      type: Array,
      default() {
        return []
      },
    },
    iconName: {
      type: String,
      required: true
    }
  },
  setup(props) {
    let activeName = ref(props.tabs[0].tabName) // 默认选中传入数组的第一个tab
    const router = new useRouter()

    const toNewSubPage = (tabName) => {
      activeName.value = tabName
      router.push({ name: tabName })
    }

    return {
      toNewSubPage,
      activeName,
    }
  }
}
</script>

<style scoped>
.van-tabs {
  min-height: 44px;
  max-height: 44px;
  line-height: 44px;
  background: #ffffff;
  box-shadow: 0 1px #e6e6e6;
}

.van-tabs-nav {
  display: flex;
}

.van-tab-word {
  display: flex;
  justify-content: center;
  color: #646566;
  align-items: center;
}

.van-tab {
  margin: 0 12px;
}

.van-tab-icon {
  position: absolute;
  right: 10px;
  z-index: 999;
}

.van-tab-icon>i {
  vertical-align: middle;
}

.activeClass {
  color: #1989fa;
}

.activeClass>span {
  font-weight: bolder;
  font-size: 18px;
  border-bottom: 2px solid #1989fa;
  padding-bottom: 4px;
}

.van-tab>span {
  transition: all 0.2s ease 0s;
}
</style>