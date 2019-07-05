<template>
  <div class="container">
    <button class="link-btn" @click="linkToMiniprogram">进入商城</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userInfo: {}
    };
  },
  components: {},
  methods: {
    linkToMiniprogram() {
      wx.navigateToMiniProgram({
        appId: "wx59e3e1b404f5f723",
        path: "/pages/index/index",
        extraData: {},
        envVersion: "develop",
        success(res) {
          // 打开成功
          console.log("打开成功");
        }
      });
    }
  }
};
</script>

<style scoped>
.link-btn {
  margin-top: 200rpx;
  background: #cb3129;
  color: #fff;
}
</style>