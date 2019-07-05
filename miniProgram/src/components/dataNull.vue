<template>
  <div class="data-null">
    <p class="data-null-inner">暂无数据</p>
  </div>
</template>

<script>
    export default {
        data() {
            return {
                name: "wwwww"
            }
        },
        methods: {
            test() {
                console.log("test");
            }
        }
    }
</script>

<style scoped>
    .data-null {
        width: 400rpx;
        height: 40rpx;
        text-align: center;
        position: fixed;
        top: 50%;
        left: 50%;
        margin-top: -50rpx;
        margin-left: -200rpx;
        color: #e6e6e6;
        background: url(../../static/images/data-null.png) no-repeat center;
        background-size: 100rpx auto;
        z-index: 99;
        padding-top: 100rpx;
        font-size: 28rpx;
    }
    
    .data-null-inner {
        text-align: center;
        height: 100rpx;
        line-height: 100rpx;
    }
</style>