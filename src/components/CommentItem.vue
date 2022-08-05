<template>
    <div class="comment-item">
        <div class="avatar">
            <img :src="comment?.userAvatar" alt="">
        </div>
        <div class="right">
            <span>{{ comment?.userName }}</span>
            <span>{{ comment?.commentDate }}</span>
            <span>{{ comment?.commentContent }}</span>
            <div class="react">
                <van-icon :name="likeIcon" size="20"></van-icon>
                <van-icon :name="dislikeIcon" size="20"></van-icon>
                <van-icon :name="forwardIcon" size="20"></van-icon>
                <van-icon :name="commentIcon" size="20"></van-icon>
            </div>

            <div class="reply" v-if="hasReply">
                <span>五</span>
            </div>
        </div>
    </div>
</template>

<script>
import avatarIcon from '@/assets/img/info/noface.webp'
import likeIcon from '@/assets/icon/like.svg'
import dislikeIcon from '@/assets/icon/dislike.svg'
import commentIcon from '@/assets/icon/comment.svg'
import forwardIcon from '@/assets/icon/forward.svg'
export default {
    name: "CommentItem",
    props: {
        comment: {
            type: Object,
            required: true
        }
    },
    setup(props) {
        return {
            avatarIcon,
            likeIcon,
            dislikeIcon,
            forwardIcon,
            commentIcon
        }
    }
}
</script>

<style scoped>
.comment-item {
    padding: 10px 10px 20px 10px;
    display: flex;
    border-bottom: 1px solid #f3f3f3;
}

.avatar {
    width: 45px;
    height: 45px;
    border-radius: 50%;
    overflow: hidden;
    margin-right: 10px;
}

.avatar>img {
    width: 100%;
    height: 100%;
}

.right {
    display: flex;
    flex-direction: column;
    flex: 1;
}

.right>span {
    padding-bottom: 6px;
}

.right>span:first-child {
    color: #646566;
}

.right>span:nth-child(2) {
    color: #99a2aa;
    font-size: small;
}

.right>span:nth-child(3) {
    overflow-wrap: break-word;
    word-break: break-all;
    font-size: 16px;
}


.react>* {
    padding-right: 22px;
}
</style>
