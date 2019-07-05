const baseUrl = "http://m.sumeiliti.com/gxmrm"
    //const baseUrl = "http://gxmr.sumeirenyi.com:12141"
export default {
    login: `${baseUrl}/weChat/getWxUserInfoByCode.json`,
    logindev: `${baseUrl}/person/logintest`,
    getPersonIds: `${baseUrl}/person/getPersonIds`,
    /*
     *首页获取用户信息 
     */
    getUserInfo: `${baseUrl}/person/getPersonInfo.json`,
    update: `${baseUrl}/person/update.json`,

    /*
     *我的收益
     */
    getProfitList: `${baseUrl}/profit/getMyProfit.json`,
    getSmsCode: `${baseUrl}/sms/sendVerificationCode.json`,
    /*
     *获取微信分享参数
     */
    wechatShare: `${baseUrl}/weChat/getWxShareInfo.json`,
    /*
     *体验卡首页获取用户身份
     */
    getActivityUser: `${baseUrl}/activity/joinActivity.json`,
    /**
     * 绑定用户手机号
     */
    bindUser: `${baseUrl}/person/bindingPhone.json`,
    /**
     * 获取支付参数
     */
    getPayConfig: `${baseUrl}/activity/activityPay.json`,
    /**
     * 获取支付结果
     */
    getPayStatus: `${baseUrl}/activity/selectPersonActivityStatus.json`,
    /**
     * 查询是否绑定了手机号 
     */
    selectPhoneFromAuthPerson: `${baseUrl}/person/selectPhoneFromAuthPerson.json`,
    /**
     * 顾客扫码机器码后显示二维码 
     */
    showCustomerQrcode: `${baseUrl}/equipment/scanEquipmentQr.json`,
    /**
     * 店员扫描顾客二维码获取顾客信息
     */
    // getCustomerInfoByQrcode: `${baseUrl}/profit/serviceCharge/getServicePayInfo.json`,
    getPersonActivityInfo: `${baseUrl}/activity/getPersonActivityInfo.json`,
    getServicePayInfo: `${baseUrl}/profit/serviceCharge/getServicePayInfo.json`,

    /**
     * 店员点击确认按钮确认服务信息
     */
    confirmService: `${baseUrl}/profit/serviceCharge/verifyServicePayInfo.json`,
    confirmActivityService: `${baseUrl}/activity/confirmPersonActivity.json`,
    /**
    /**
     * 查询用户活动是否确认
     */
    confirmActivityResult: `${baseUrl}/activity/selectPersonActivityStatus.json`,
    /**
     * 确认是否可以开始服务
     */
    confirmServiceResult: `${baseUrl}/profit/serviceCharge/SelectVerifyServiceStatus.json`,
    /**
     * 获取会员卡信息
     */
    getMemberCardInfo: `${baseUrl}/membercar/card/getPersonAddCardInfo.json`,
    /**
     * 办卡支付接口
     */
    createOrder: `${baseUrl}/gxmrf/orderpay/order/createOrder.json`,
    /**
     * 我的会员
     */
    getMemberData: `${baseUrl}/membercar/card/selectDirectSubordinates.json`,
    /**
     * 间接推荐会员
     */
    getSubMemberData: `${baseUrl}/membercar/card/selectIndirectSubordinates.json`,
    /**
     *会员确认列表
     */
    getConfirmData: `${baseUrl}/membercar/card/getShopCardList.json`,
    /**
     *会员确认操作
     */
    confirmMember: `${baseUrl}/membercar/card/verifyCard.json`,
    /**
     *店铺收益
     */
    getShopProfit: `${baseUrl}/shop/getShopProfit.json`,
    /**
     *结算
     */
    getAccountsList: `${baseUrl}/profit/earnings/getShopEarningsList.json`,
    /**
     *确认结算
     */
    settleAccount: `${baseUrl}/profit/earnings/verifyEarnings.json`,
    /**
     *模拟登录
     */
    weChatRegister: `${baseUrl}/weChat/weChatRegister.json`,
    /**
     *模拟支付
     */
    wechatPayMock: `${baseUrl}/profit/serviceCharge/simulateServicePaySuccess.json`,
    /**
     * 支付服务费
     */
    payService: `${baseUrl}/profit/serviceCharge/addServiceOrder.json`,
    /**
     *支付服务费状态
     */
    payForServiceStatus: `${baseUrl}/profit/serviceCharge/selectServicePayStatus.json`,
    /**
     *会员管理
     */
    getMembershipList: `${baseUrl}/membercar/card/selectMemberManagement.json`,
    /**
     *获取七牛上传图片token
     */
    getQiniuToken: `${baseUrl}/qiniu/getUploadFile.json`,
    /**
     *更新用户头像
     */
    updateProfile: `${baseUrl}/person/updateHeadImage.json`,


    request(reqUrl, config, successFn, errorFn) {

        let dataStr = JSON.stringify(config);
        // $.ajax = fun({
        //     url: reqUrl,
        //     type: "post",
        //     contentType: "application/json",
        //     dataType: "json",
        //     data: dataStr,
        //     success: successFn,
        //     error: errorFn,

        // });
        //首先备份下jquery的ajax方法  
        var _ajax = $.ajax;

        //重写jquery的ajax方法
        $.ajax = function(opt) {

            //备份opt中error和success方法 
            var fn = {
                error: function(XMLHttpRequest, textStatus, errorThrown) {},
                success: function(data, textStatus) {}
            }
            if (opt.error) {
                fn.error = opt.error;
            }
            if (opt.success) {
                fn.success = opt.success;
            }
            //扩展增强处理 
            var _opt = $.extend(opt, {
                error: function(XMLHttpRequest, textStatus, errorThrown) {

                    // let error = eval("(" + XMLHttpRequest.responseText + ")");
                    // if (error.err_code == 500)
                    //     alert(error.err_msg);
                    //错误方法增强处理 
                    fn.error(XMLHttpRequest, textStatus, errorThrown);
                },
                success: function(data, textStatus) {
                    //成功回调方法增强处理  
                    // alert(data.code);
                    if (data.code != '100101') {
                        fn.success(data, textStatus);
                        return;
                    }
                    //业务URL当前浏览器访问
                    const businessUrl = encodeURIComponent(encodeURIComponent(window.location.href));
                    //登录URL
                    let loginUrl = window.location.protocol + '//' + window.location.host + '/tm/views/login.html';
                    loginUrl += '?businessUrl=' + businessUrl;
                    let jumpWechatUrl = data.data.url;
                    jumpWechatUrl = jumpWechatUrl.replace('*#', loginUrl);
                    window.location.href = jumpWechatUrl; //1
                },
                beforeSend: function(xhr) {
                    xhr.setRequestHeader('Content-Type', "application/json");
                }
            });
            return _ajax(_opt);
        };
        $.ajax({
            url: reqUrl,
            type: "post",
            contentType: "application/json",
            dataType: "json",
            data: dataStr,
            xhrFields: {
                withCredentials: true
            },
            success: successFn,
            error: errorFn
        });


    }

}