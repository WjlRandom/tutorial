<template>
  <div class="modal" catchtouchmove="preventTouchMove">
    <div class="modal-inner">
      <div class="modal-top">{{modalData.title}}</div>
      <div class="modal-content">
        <!-- <img :src="modalData.qrImg" alt=""> -->
        <!-- <img src="../../static/images/qr.png" @click="previewImg" alt> -->
        <button class="join-btn" open-type="contact" :session-from="modalData.id">加入社群</button>
        <div class="tip">{{modalData.tip}}</div>
      </div>
      <div class="modal-bottom">
        <div class="cancel" @click="cancelModal">取消</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    modalData: {
      type: Object
    }
  },
  methods: {
    cancelModal() {
      this.$emit("closeModal");
    }
  }
};
</script>

<style scoped>
.modal {
  position: fixed;
  left: 0;
  bottom: 0;
  top: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 999;
}

.modal .modal-inner {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #fff;
  text-align: center;
  min-width: 600rpx;
}

.modal .modal-inner .modal-top {
  font-size: 32rpx;
  padding: 20rpx;
}
.modal .modal-inner .modal-content {
  padding: 60rpx 20rpx;
}
.modal .modal-inner .modal-content .tip {
  font-size: 24rpx;
  padding: 20rpx;
}
.modal .modal-inner .modal-content .join-btn {
  font-size: 40rpx;
  background: #cb3129;
  color: #fff;
  width: 300rpx;
  height: 88rpx;
  line-height: 88rpx;
  border-radius: 20rpx;
}

.modal .modal-inner .modal-bottom {
  border-top: 1rpx solid #efefef;
}

.modal .modal-inner .modal-bottom .cancel {
  font-size: 32rpx;
  padding: 20rpx;
  color: #cb3129;
}
</style>