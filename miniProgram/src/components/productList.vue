<template>
  <div class="products">
    <div class="product-item" v-for="(item, index) in products" :key="index">
      <div class="item-left">
        <img class="img" :src="item.headImage" alt>
      </div>
      <div class="item-center">
        <p class="center-title">{{item.mainTitle}}</p>
        <p class="center-msg">{{item.subTitle}}</p>
      </div>
      <div class="item-right">
        <!-- <button class="join-btn" @click="joinOperate(item)">+加群</button> -->
        <button class="join-btn" open-type="contact" :session-from="item.id">+加群</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    products: {
      type: Array
    }
  },
  methods: {
    joinOperate(config) {
      this.$emit("operateItem", config);
    }
  }
};
</script>

<style lang="less">
@import "./less/productList.less";
</style>