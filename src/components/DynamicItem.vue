<template>
    <div class="dynamic-item" @click="toOtherPage">
        <div class="top-info" ref="user">
            <div class="avatar">
                <img :src="interactionData.publisherAvatar" alt="">
            </div>
            <div class="info">
                <span>{{ interactionData.publisherName }}</span>
                <span>{{ interactionData.publishDate }}</span>
            </div>
        </div>
        <div class="content" ref="content">
            <!-- 传入的是个文本 -->
            <template v-if="isText">
                <span>{{ interactionData.content }}</span>
            </template>

            <template v-else>
                <div class="video-cover-container">
                    <div class="cover">
                        <img :src="interactionData.videoCover" alt="">
                    </div>
                    <div class="duration">
                        <span>{{ interactionData.duration }}</span>
                    </div>
                </div>
                <div class="title">
                    <span>{{ interactionData.title }}</span>
                </div>
            </template>
        </div>
        <div class="bottom-info">
            <div class="bottom-item">
                <van-icon :name="forwardIcon" size="18"></van-icon>
                <span>{{ interactionData.forwardCount === 0 ? '转发' : interactionData.likeCount }}</span>
            </div>
            <div class="bottom-item">
                <van-icon :name="commentIcon" size="18"></van-icon>
                <span>{{ interactionData.commentCount === 0 ? '评论' : interactionData.commentCount }}</span>
            </div>
            <div class="bottom-item">
                <van-icon :name="likeIcon" size="18"></van-icon>
                <span>{{ interactionData.likeCount === 0 ? '点赞' : interactionData.likeCount }}</span>
            </div>
        </div>
    </div>
</template>

<script>
import forwardIcon from '@/assets/icon/forward.svg'
import commentIcon from '@/assets/icon/comment.svg'
import likeIcon from '@/assets/icon/like.svg'
import { computed, ref } from 'vue'
import { useRouter } from 'vue-router'
export default {
    name: 'DynamicItem',
    props: {
        interactionData: {
            type: Object,
            required: true
        }
    },
    setup(props) {
        const user = ref(null);
        const content = ref(null);
        const router = useRouter();
        const isText = computed(() => {
            return props.interactionData.hasOwnProperty('content') // 只有富文本才有content,视频没有
        })
        const toOtherPage = (event) => {
            const target = event.target
            if (user.value.contains(target)) {
                console.log('跳转到用户页'); // TODO:需要实现
            } else if (content.value.contains(target)) {
                console.log('跳转到详情页');
                if (isText.value) {
                    router.push({ name: 'post', params: { pid: props.interactionData.pid } })
                } else {
                    router.push({ name: 'video', params: { vid: props.interactionData.vid } })

                }
            }
        }
        return {
            forwardIcon,
            commentIcon,
            likeIcon,
            user,
            content,
            toOtherPage,
            isText
        }
    }
}
</script>
<style scoped>
.dynamic-item {
    display: flex;
    flex-direction: column;
    margin: 5px 0;
    background-color: #fff;
    padding: 10px;
    user-select: none;
}

.dynamic-item:active {
    background-color: #f2f2f2;
}

.dynamic-item:first-child {
    margin-top: 0;
}

.avatar {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    overflow: hidden;
}

.avatar>img {
    width: 100%;
    height: 100%;
}

.top-info {
    display: flex;
}

.info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 10px;
}

.bottom-info {
    display: flex;
}

.bottom-item {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #646566;
}

.dynamic-item>.content {
    margin: 14px 0;
}

.info>span:first-child {
    font-weight: bold;
    padding-bottom: 6px;
}

.info>span:nth-child(2) {
    color: #646566;
    font-size: 14px;
}

.content {
    font-size: 16px;
    line-height: 22px;
    border-radius: 4px;
    overflow: hidden;
}

.bottom-item>span {
    font-size: 14px;
    padding-left: 4px;
}

.content>video {
    object-fit: fill;
    width: 100%;
    height: 200px;
}

.video-cover-container {
    border-radius: 6px;
    overflow: hidden;
    position: relative;
}

.cover {
    width: 100%;
    height: 200px;
    /*XXX:这里应该是用rem之类的*/
}

.cover>img {
    width: 100%;
    height: 100%;
}

.duration {
    position: absolute;
    font-size: x-small;
    z-index: 999;
    bottom: 6px;
    right: 6px;
    border-radius: 4px;
    background-color: #00000046;
    color: #fff;
    padding: 2px 4px;
}

.video-info> :nth-child(2) {
    padding-left: 8px;
}

.title {
    padding-top: 8px;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    font-weight: 600;
}
</style>