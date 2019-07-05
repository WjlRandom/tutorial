<template>
    <block>
        <!-- <view class="commodity_screen" bindtap="hideModal" v-if="showModalStatus"></view>
        <view :animation="animationData" class="commodity_attr_box" v-if="showModalStatus">
            <text>我是弹出层的内容</text>
        </view> -->
        <view>hahhhhhhhhhh</view>
    </block>
</template>
<script>
    export default {
        data: {
            showModalStatus: true,
            animationData: ''
        },
        test() {
            console.log("test");
        },
        showModal: function() {
            console.log("wwwwwwwwww");
            // 显示遮罩层
            var animation = wx.createAnimation({
                duration: 200,
                timingFunction: "ease-in-out",
                delay: 0
            })
            this.animation = animation
            animation.translateY(500).step()
                // this.setData({
                //     animationData: animation.export(),
                //     showModalStatus: true
                // })
            setTimeout(function() {
                animation.translateY(0).step()
                    // this.setData({
                    //     animationData: animation.export()
                    // })
            }.bind(this), 200)
        },
        hideModal: function() {
            // this.setData({
            //     showModalStatus: false,
            // })

        }
    };
</script>

<style scoped>
    .commodity_screen {
        width: 100%;
        height: 100%;
        position: fixed;
        top: 0;
        left: 0;
        background: #000;
        opacity: 0.5;
        overflow: hidden;
        z-index: 9;
        color: #fff;
    }
    
    .commodity_attr_box {
        width: 100%;
        overflow: hidden;
        position: fixed;
        bottom: 0;
        left: 0;
        z-index: 10;
        background: #fff;
        padding-top: 20rpx;
        height: 300px;
    }
    
    .commodity_attr_box {
        text-align: center;
        padding-top: 100rpx;
    }
</style>