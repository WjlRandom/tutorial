<template>
  <div>
    <ul class="container log-list">
      <li v-for="(log, index) in logs" :class="{ red: aa }" :key="index" class="log-item">
        <card :text="(index + 1) + ' . ' + log"></card>
      </li>
    </ul>
    <div>
      <button class="btn" @click="redirectTo">显示</button>
      <modal :hidden="hiddenmodalput" title="完善资料" confirm-text="提交" cancel-text="取消" bindcancel="cancelM" bindconfirm="confirmM">
        <input bindinput='iName' type='text' placeholder="请输入姓名..." auto-focus/>
        <input bindinput='iPhoneNum' type='number' placeholder="请输入手机号码..." />
     </modal>
    </div>
  </div>
</template>

<script>
    import {
        formatTime
    } from '@static/utils/index'
    import card from '@/components/card'

    export default {
        components: {
            card
        },

        data() {
            return {
                logs: [],
                hiddenmodalput: true,
                name: "",
                phoneNum: '',
            }
        },
        methods: {
            cancelM: function(e) {
                this.setData({
                    hiddenmodalput: true,
                })
            },

            confirmM: function(e) {
                console.log("姓名：" + this.data.name + "  电话：" + this.data.phoneNum);
            },

            iName: function(e) {
                this.setData({
                    name: e.detail.value
                })
            },
            iPhoneNum: function(e) {
                this.setData({
                    phoneNum: e.detail.value
                })
            }
        },
        created() {
            const logs = (wx.getStorageSync('logs') || [])
            this.logs = logs.map(log => formatTime(new Date(log)))
        }
    }
</script>

<style>
    .log-list {
        display: flex;
        flex-direction: column;
        padding: 40rpx;
    }
    
    .log-item {
        margin: 10rpx;
    }
</style>