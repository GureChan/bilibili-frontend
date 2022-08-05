<template>
    <div class="header">
        <van-nav-bar title="详情" left-arrow :fixed="true"></van-nav-bar>
    </div>
    <div class="main">
        <div class="post">
            <div class="pulisher-info">
                <div class="avatar">
                    <img :src="data?.publisherAvatar" alt="">
                </div>
                <div class="info">
                    <span>{{ data?.publisherName }}</span>
                    <span>{{ data?.publishDate }}</span>
                </div>
            </div>
            <div class="content">
                <span>
                    {{ data?.content }}
                </span>
            </div>
        </div>

        <div class="comments">
            <div class="comment-tab">
                <div class="tab">
                    <span>转发 {{ data?.forwardCount || 0 }}</span>
                </div>
                <div class="tab">
                    <span>评论 {{ data?.comment.length || 0 }}</span>
                </div>
                <div class="tab">
                    <span>赞 {{ data?.likeCount || 0 }}</span>
                </div>
            </div>
            <div class="info">
                <span>{{ orderBy === '按热度' ? '热门评论' : '最新评论' }}</span>
                <span @click="changeSort">
                    <van-icon :name="sortIcon" size="20"></van-icon>
                    {{ orderBy }}
                </span>
            </div>
            <div class="comment-list">
                <comment-item v-for="item in data?.comment" :comment="item" :key="item"></comment-item>
            </div>
        </div>
    </div>
    <div class="footer">
        <post-tab-bar></post-tab-bar>
    </div>
</template>

<script>
import avatarIcon from '@/assets/img/info/noface.webp'
import PostTabBar from '@/components/PostTabBar.vue'
import sortIcon from '@/assets/icon/sort.svg'
import CommentItem from '@/components/CommentItem.vue'
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import { getPostDetailInfoRequest } from '@/api/dynamic'
export default {
    name: "Post",
    setup() {
        const route = useRoute();
        const data = ref(null);
        const orderBy = ref('按时间')
        const changeSort = () => {
            console.log('✌');
        }

        onMounted(async () => {
            const temp = await getPostDetailInfoRequest(route.params.pid);
            data.value = temp.data.data;
            console.log(data.value);
        })

        return {
            avatarIcon,
            sortIcon,
            orderBy,
            changeSort,
            data
        };
    },
    components: {
        PostTabBar,
        CommentItem
    }
}
</script>

<style scoped>
:deep(.van-nav-bar__content .van-icon) {
    color: black;
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


.post .info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 10px;
}

.post .info>span:first-child {
    font-weight: bold;
    padding-bottom: 6px;
}

.post .info>span:nth-child(2) {
    color: #646566;
    font-size: 14px;
}

.pulisher-info {
    display: flex;
}

.main {
    margin-top: 46px;
    /*navbar的高度*/
    background-color: #f4f4f4;
}

.post {
    background-color: #fff;
    padding: 10px;
}

.comments {
    background-color: #fff;
}

.content {
    padding: 12px 0;
}

.content>span {
    overflow-wrap: break-word;
    word-break: break-all;
}

.post {
    margin-bottom: 10px;
}

.comment-tab {
    line-height: 36px;
    font-size: 15px;
    display: flex;
    /* border-bottom: 1px solid #dadada; */
    align-items: center;
}

.comment-tab>.tab {
    padding: 0px 4px;
    color: #646566;
    /* border-bottom: 2px solid #00a1d6; */
}

.comment-tab>.tab:first-child,
.comment-tab>.tab:nth-child(2) {
    margin: 0 10px;
}

.comment-tab>.tab:nth-child(3) {
    margin-right: 4px;
    margin-left: auto;
}

.comments .info {
    display: flex;
    font-size: 14px;
    line-height: 26px;
    align-items: center;
    color: #646566;
}

.comments .info>span:first-child {
    margin-left: 6px;
}

.comments .info>span:nth-child(2) {
    margin-right: 10px;
    margin-left: auto;
    display: flex;
    align-items: center;
}

.comments .info>span:nth-child(2)>* {
    padding: 0 2px;
}
</style>