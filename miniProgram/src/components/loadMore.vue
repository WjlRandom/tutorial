<template>
    <div class="more-link">
        <div class="more-link-btn" @click="getMoreList">查看更多</div>
    </div>
</template>

<script>
    export default {
        methods: {
            getMoreList() {
                this.$emit("loadMore", {
                    msg: "加载更多"
                })
            }
        }
    }
</script>

<style scoped>
    .more-link {
        text-align: center;
        font-size: 28rpx;
        padding: 20rpx 0;
    }
</style>