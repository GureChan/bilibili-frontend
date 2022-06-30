<template>
<div class="video-view-item">
  <div class="video-cover">
    <div class="video-image">
      <slot name="videoImage"></slot>
    </div>
    <div class="video-info">
      <slot name="videoInfo"></slot>
    </div>
  </div>
  <div class="info-center">
    <slot name="infoCenter"></slot>
  </div>
  <div class="info-bottom">
    <slot name="infoBottom"></slot>
  </div>
</div>
</template>

<script>
export default {
  name: "VideoViewItem"
}
</script>

<style scoped>
.video-view-item{
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  overflow: hidden;
  background: #ffffff;
  box-shadow: 0 2px 1px #e6e6e6 ;
  margin-bottom: 10px;
}

.video-image{
  height: inherit;
  width: inherit;
}
.video-cover{
  position: relative;
  height: 140px;
}

.video-info{
  position: absolute;
  bottom:4px;
  display: flex;
  height: 22px;
  width: 100%;
  background: linear-gradient(to top,rgba(0,0,0,0.5),rgba(0,0,0,0));
  max-width: 100%;
  color: #ffffff;
}
.info-center{
  margin: 4px 0;
}
.info-bottom{
  margin-bottom: 4px;
}
</style>