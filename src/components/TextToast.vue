<template>
  <transition>
    <div class="toast" v-if="isShow">
      <span>{{ content }}</span>
    </div>
  </transition>
</template>

<script>
import { ref } from "vue";

export default {
  name: "TextToast",
  props: {
    content: String,
  },
  setup() {
    const isShow = ref(false)
    const showToast = () => {
      isShow.value = true
      setTimeout(() => {
        isShow.value = false
      }, 2000)
    }
    return {
      isShow,
      showToast
    }
  }
}
</script>

<style scoped>
.toast {
  position: fixed;
  z-index: 999;
  font-size: x-small;
  padding: 8px 12px;
  color: #fff;
  background-color: rgba(0, 0, 0, 0.6);
  border-radius: 8px;
  left: 50%;
  transform: translate(-50%);
  opacity: 1;
  bottom: 20%;
  text-align: center;
}

.v-leave-to,
.v-enter-from {
  /*v-开头的类是transition组件自带的，这两个类表示一开始的状态*/
  opacity: 0;
}

.v-enter-active,
.v-leave-active {
  /*整个进入的状态和离开的状态*/
  transition: all 0.3s ease;
}
</style>