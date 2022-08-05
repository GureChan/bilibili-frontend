<template>
    <div class="tab-bar">
        <div class="tab-bar-item">
            <van-icon :name="forwardIcon" size="24"></van-icon>
            <span>转发</span>
        </div>
        <div class="tab-bar-item">
            <van-icon :name="commentIcon" size="24"></van-icon>
            <span>评论</span>
        </div>
        <div class="tab-bar-item">
            <van-icon :name="likeIcon" size="24"></van-icon>
            <span>点赞</span>
        </div>
    </div>
</template>

<script>
import forwardIcon from '@/assets/icon/forward.svg'
import commentIcon from '@/assets/icon/comment.svg'
import likeIcon from '@/assets/icon/like.svg'

export default {
    name: "PostTabBar",
    setup() {
        return {
            forwardIcon,
            commentIcon,
            likeIcon
        }
    }
}
</script>

<style scoped>
.tab-bar {
    display: flex;
    height: 50px;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: #fff;
}

.tab-bar-item {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    color: #61666D;
}

.tab-bar-item> :nth-child(2) {
    padding-left: 6px;
}
</style>