<template>
  <swiper
    class="swiper"
    :indicator-dots="indicatorDots"
    :autoplay="autoplay"
    :interval="interval"
    :duration="duration"
  >
    <block v-for="(item,index) in bannerList" :key="index">
      <swiper-item>
        <image
          :src="item.homeImage"
          class="slide-image"
          mode="aspectFill"
          @click="linkToDetail(item)"
        ></image>
      </swiper-item>
    </block>
  </swiper>
</template>
<script>
export default {
  props: {
    bannerList: {
      type: Array
    }
  },
  data() {
    return {
      indicatorDots: true,
      autoplay: true,
      interval: 3000,
      duration: 500
    };
  },
  methods: {
    linkToDetail(data) {
      this.$emit("linkToDetail", data);
    }
  }
};
</script>

<style scoped>
.swiper {
  width: 100%;
  height: 340rpx !important;
}

image {
  height: 100%;
  width: 100%;
}
</style>