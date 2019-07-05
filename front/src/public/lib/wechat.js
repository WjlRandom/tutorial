import API from "@api"
class WechatApi {
    constructor(config) {
        this.defaultInfo = {
            //分享给朋友
            title: document.title, // 分享标题
            desc: '', // 分享描述
            link: window.location.href, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
            imgUrl: '', // 分享图标
        }
        this.shareInfo = Object.assign(this.defaultInfo, config);
        this.getShareInfo();
    }
    getShareInfo() { //获取到分享需要的签名等
        API.request(API.wechatShare, {
            url: window.location.href
        }, (res) => {
            console.log(res)
            if (res.code == "200" && res.data) {
                this.setWxConfig(res.data);
            }
        }, (err) => {
            console.log(err);
        })
    }
    setWxConfig(data) {
        wx.config({
            debug: false, // true 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
            appId: data.appid, // 必填，公众号的唯一标识
            timestamp: data.timestamp, // 必填，生成签名的时间戳
            nonceStr: data.noncestr, // 必填，生成签名的随机串
            signature: data.signature, // 必填，签名
            jsApiList: ['chooseWXPay', 'updateAppMessageShareData', 'updateTimelineShareData', 'onMenuShareTimeline', 'onMenuShareAppMessage'], // 必填，需要使用的JS接口列表
        });
        wx.ready(() => {
            wx.updateAppMessageShareData(this.shareInfo); //分享给朋友
            wx.updateTimelineShareData(this.shareInfo); //分享到朋友圈
            wx.onMenuShareAppMessage(this.shareInfo);
            wx.onMenuShareTimeline(this.shareInfo);
            wx.error(function(res) {
                // config信息验证失败会执行error函数，如签名过期导致验证失败，具体错误信息可以打开config的debug模式查看，也可以在返回的res参数中查看，对于SPA可以在这里更新签名。
                console.log(res);
            });
        })
    };
    wechatPay(payData, callback) {
        debugger;
        WeixinJSBridge.invoke(
            'getBrandWCPayRequest', {
                "appId": payData.appId, //公众号名称，由商户传入     
                "timeStamp": payData.timeStamp, //时间戳，自1970年以来的秒数     
                "nonceStr": payData.nonceStr, //随机串     
                "package": payData.packageStr,
                "signType": payData.signType, //微信签名方式：     
                "paySign": payData.jsSign //微信签名 
            },
            function(res) {
                if (res.err_msg == "get_brand_wcpay_request:ok") {
                    // 使用以上方式判断前端返回,微信团队郑重提示：
                    //res.err_msg将在用户支付成功后返回ok，但并不保证它绝对可靠。
                    if (typeof callback == "function") {
                        callback(); //支付成功后的回调
                    }
                }
            });
    }

    // wechatPay(payData) {
    //     var sd =    { 
    //     timestamp: payData.timeStamp, // 支付签名时间戳，注意微信jssdk中的所有使用timestamp字段均为小写。但最新版的支付后台生成签名使用的timeStamp字段名需大写其中的S字符
    //     nonceStr: payData.nonceStr, // 支付签名随机串，不长于 32 位
    //     package: payData.packageStr, // 统一支付接口返回的prepay_id参数值，提交格式如：prepay_id=\*\*\*）
    //     signType: payData.signType, // 签名方式，默认为'SHA1'，使用新版支付需传入'MD5'
    //     paySign: payData.paySign, // 支付签名
    //     appId: payData.appId};
    //     alert(JSON.stringify(sd));  
    //     debugger;
    //     wx.config({
    //         debug: true, // true 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
    //         appId: payData.appId, // 必填，公众号的唯一标识
    //         timestamp: payData.timeStamp, // 必填，生成签名的时间戳
    //         nonceStr: payData.nonceStr, // 必填，生成签名的随机串
    //         signature: payData.paySign, // 必填，签名
    //         jsApiList: ['chooseWXPay'] // 必填，需要使用的JS接口列表
    //     });
    //     wx.ready(() => {
    //         wx.chooseWXPay({     
    //             timeStamp: payData.timeStamp, // 支付签名时间戳，注意微信jssdk中的所有使用timestamp字段均为小写。但最新版的支付后台生成签名使用的timeStamp字段名需大写其中的S字符
    //             nonceStr: payData.nonceStr, // 支付签名随机串，不长于 32 位
    //             package: payData.packageStr, // 统一支付接口返回的prepay_id参数值，提交格式如：prepay_id=\*\*\*）
    //             signType: payData.signType, // 签名方式，默认为'SHA1'，使用新版支付需传入'MD5'
    //             paySign: payData.paySign, // 支付签名
    //             appId: payData.appId,
    //             success: function(res) {
    //                 // res.errMsg === 'chooseWXPay:ok'方式判断前端返回,微信团队郑重提示：
    //                 // res.errMsg将在用户支付成功后返回ok，但并不保证它绝对可靠， 切记。
    //                 if (res.errMsg === 'chooseWXPay:ok') {
    //                     alert(JSON.stringify(res));  
    //                 }
    //             },
    //             // 支付取消回调函数
    //             cencel: function(res) {
    //                 alert(JSON.stringify(res));  
    //             },
    //             // 支付失败回调函数
    //             fail: function(res) {
    //                 alert(JSON.stringify(res));  
    //             },
    //             complete: function(res) {
    //                 alert(JSON.stringify(res));          //接口调用完成时执行的回调函数，无论成功或失败都会执行。
    //             },
    //             cancel: function(res) {
    //                 alert(JSON.stringify(res));          //用户点击取消时的回调函数，仅部分有用户取消操作的api才会用到。
    //             },
    //             trigger: function(res) {
    //                 alert(JSON.stringify(res));          //监听Menu中的按钮点击时触发的方法，该方法仅支持Menu中的相关接口。
    //             }   
    //         });
    //     })
    // }
}
export default WechatApi