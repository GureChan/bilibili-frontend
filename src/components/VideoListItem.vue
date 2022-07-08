<template>
  <div class="video-item">
    <div class="cover">
      <slot name="cover"></slot>
    </div>
    <div class="info">
      <div class="title">
        <slot name="title"></slot>
      </div>
      <div class="center-info">
        <slot name="centerInfo"></slot>
      </div>
      <div class="bottom-info">
        <slot name="bottomInfo"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "VideoItem",
};
</script>

<style scoped>
.video-item {
  display: flex;
  padding: 10px 0;
  height: 110px;
  border-bottom: 1px solid #f0f0f0;
}
.cover {
  flex: 0.8;
  position: relative;
  height: inherit;
  width: 0;
  border-radius: 5px;
  overflow: hidden;
  margin-right: 4px;
}
.info {
  margin-left: 4px;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: inherit;
  width: 0;
}
:deep(.cover > img) {
  height: 100%;
  width: 100%;
}
.center-info {
  margin-bottom: 2px;
}
.title {
  /* 解决主轴上单个元素的排列 */
  margin-top: 0;
  margin-bottom: auto;
}
</style>
