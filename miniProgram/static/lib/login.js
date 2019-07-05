var store = require("../../store/");
var request = require("../utils/request");
module.exports = {
    login() {
        var _this = this;
        wx.showLoading()
        wx.login({
            success(res) {
                if (res.code) {
                    // 登录成功，获取用户信息
                    _this.getUserInfo(res.code)
                } else {
                    // 否则弹窗显示，showToast需要封装
                    _this.showToast()
                }
            },
            fail() {
                _this.showToast()
            }
        })
    },
    getUserInfo(code) {
        var _this = this;
        wx.getUserInfo({
            // 获取成功，全局存储用户信息，开发者服务器登录
            success(res) {
                // 全局存储用户信息
                // store.commit('storeUpdateWxUser', res.userInfo);
                _this.postLogin(code)
            },
            // 获取失败，弹窗提示一键登录
            fail() {
                wx.hideLoading()
                    // 获取用户信息失败，清楚全局存储的登录状态，弹窗提示一键登录
                    // 使用token管理登录态的，清楚存储全局的token
                    // 使用cookie管理登录态的，可以清楚全局登录状态管理的变量
                    // store.commit('storeUpdateToken', '')
                    // 获取不到用户信息，说明用户没有授权或者取消授权。弹窗提示一键登录，后续会讲
                _this.showLoginModal()
            }
        })
    },
    // 开发者服务端登录
    postLogin(code) {
        let _this = this;
        let params = {
            code: code,
        }
        request("communitym/weChat/getWxUserInfoByCode.json", params, (res) => {
            if (res.code == "200") {
                // 登录成功，
                // 使用token管理登录态的，存储全局token，用于当做登录态判断，
                // 使用cookie管理登录态的，可以存任意变量当做已登录状态
                //store.commit('storeUpdateToken', res.data.token)
            } else {
                _this.showToast()
            }
        }, (err) => {
            _this.showToast()
        });
    },
    // 判断是否登录
    isLogin(callback) {
        let token = store.state.token;
        let _this = this;
        if (token) {
            // 如果有全局存储的登录态，暂时认为他是登录状态
            callback && callback()
        } else {
            // 如果没有登录态，弹窗提示一键登录
            _this.showLoginModal()
        }
    },

    // 接口调用失败处理，
    handleError(res, callback) {
        let _this = this;
        // 规定-3041和-3042分别代表未登录和登录态失效
        if (res.code == -3041 || res.code == -3042) {
            // 弹窗提示一键登录
            _this.showLoginModal()
        } else if (res.msg) {
            // 弹窗显示错误信息
            _this.showToast(res.msg)
        }
    },
    // 显示toast弹窗
    showToast(content = '登录失败，请稍后再试') {
        wx.showToast({
            title: content,
            icon: 'none'
        })
    },
    showLoginModal() {
        wx.showModal({
            title: '提示',
            content: '你还未登录，登录后可获得完整体验 ',
            confirmText: '一键登录',
            success(res) {
                // 点击一键登录，去授权页面
                if (res.confirm) {
                    // wx.navigateTo({
                    //     url: '',
                    // })
                }
            }
        })
    }

}