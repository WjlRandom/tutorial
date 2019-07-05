<template>
  <div class="tabbar">
    <div class="tabbar-item" @tap="barLink(1)">
      <img class="icon" src="../../static/images/icon-1.png" alt>
      <p class="text">首页</p>
    </div>
    <div class="tabbar-item" @tap="barLink(2)">
      <img class="icon" src="../../static/images/icon-3.png" alt>
      <p class="text">搜索</p>
    </div>
    <div class="tabbar-item" @tap="barLink(3)">
      <img class="icon" src="../../static/images/icon-5.png" alt>
      <p class="text">商城</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    barLink(config) {
      switch (config) {
        case 1:
          wx.redirectTo({
            url: "../pages/index/main.js"
          });
        case 2:
          wx.redirectTo({
            url: "../pages/search/main.js"
          });
        case 3:
          wx.redirectTo({
            url: "../pages/detail/main.js"
          });
      }
    }
  }
};
</script>

<style scoped>
.tabbar {
  width: 100%;
  display: flex;
  align-items: center;
  z-index: 99;
}
.tabbar .tabbar-item {
  flex: 1;
  text-align: center;
}
.tabbar .tabbar-item .icon {
  width: 48rpx;
  height: 48rpx;
}
.tabbar .tabbar-item .text {
  font-size: 28rpx;
}
</style>