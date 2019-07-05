const API_HOST = "https://comm.tonglibang.com";

function request(apiUrl, options, successCallback, failCallback) {
    wx.showLoading({
        title: '加载中',
    });
    wx.request({
        url: `${API_HOST}/${apiUrl}`,
        data: options,
        method: "POST",
        success(res) {
            successCallback(res)
            wx.hideLoading();
        },
        fail(err) {
            failCallback && failCallback(err);
            console.log(err);
            wx.hideLoading();
        }
    })
}

module.exports = request;