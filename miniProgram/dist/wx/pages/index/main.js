require("../../common/manifest.js")
require("../../common/vendor.js")
global.webpackJsonpMpvue([1],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(18);



__WEBPACK_IMPORTED_MODULE_0_vue___default.a.app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
__WEBPACK_IMPORTED_MODULE_0_vue___default.a.app.$mount();

/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_template_compiler_index_id_data_v_d084e034_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(45);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(19)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_template_compiler_index_id_data_v_d084e034_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/pages/index/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-d084e034", Component.options)
  } else {
    hotAPI.reload("data-v-d084e034", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 19 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_productList__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_swiper__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_dataNull__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_loadMore__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_showModal__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__static_lib_login__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__static_lib_login___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__static_lib_login__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__static_utils_request__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__static_utils_request___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__static_utils_request__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__data__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__data___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__data__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//










/* harmony default export */ __webpack_exports__["a"] = ({
  data() {
    return {
      userInfo: {},
      isMenuFixed: false,
      menuTop: 0,
      filterBoxShow: false, //是否显示筛选框
      currentTab: 1,
      isShowSearchBtn: false, //是否显示搜索按钮
      // activityList: Data.indexInfo.activityList,
      // regionList: Data.indexInfo.regionList,
      // subjectList: Data.indexInfo.subjectList,
      // typeList: Data.indexInfo.genreList,
      // products: Data.productsData.communityResultBoList,
      activityList: [],
      regionList: [],
      subjectList: [],
      typeList: [],
      products: [],
      filterConfig: {
        //筛选参数
        current: "1",
        size: "20",
        genreId: "", //类型
        subjectId: "", //主题
        cityId: "" //地级市
      },
      selectedItems: {
        genreName: "",
        subjectName: "",
        cityName: ""
      },
      isMore: false, //是否显示加载更多按钮
      isDataNull: false,
      isShowModal: false,
      modalData: {}
    };
  },

  components: {
    ProductList: __WEBPACK_IMPORTED_MODULE_0__components_productList__["a" /* default */],
    Swiper: __WEBPACK_IMPORTED_MODULE_1__components_swiper__["a" /* default */],
    LoadMore: __WEBPACK_IMPORTED_MODULE_3__components_loadMore__["a" /* default */],
    DataNull: __WEBPACK_IMPORTED_MODULE_2__components_dataNull__["a" /* default */],
    Modal: __WEBPACK_IMPORTED_MODULE_4__components_showModal__["a" /* default */]
  },
  computed: {
    reset() {
      if (this.filterConfig.genreId != "" || this.filterConfig.subjectId != "" || this.filterConfig.cityId != "") {
        return true;
      }
      return false;
    }
  },
  onLoad() {
    // Login.login(); //微信授权登录
  },

  created() {
    this.getIndexInfo();
    this.initProductList();
  },
  methods: {
    initProductList() {
      //初始化加载第一页数据
      this.filterConfig.current = 1;
      this.products = [];
      this.getProductList();
    },
    reload() {
      this.filterConfig = {
        //筛选参数
        current: "1",
        size: "20",
        genreId: "", //类型
        subjectId: "", //主题
        cityId: "" //地级市
      };
      this.filterBoxShow = false;
      this.initProductList();
    },
    getMoreList() {
      //加载更多页数据
      this.filterConfig.current += 1;
      this.getProductList();
    },
    getIndexInfo() {
      //获取首页数据
      __WEBPACK_IMPORTED_MODULE_6__static_utils_request___default()("communitym/community/subject/getIndexInfo.json", {}, res => {
        if (res.statusCode == "200") {
          this.activityList = res.data.data.activityList;
          this.typeList = res.data.data.genreList;
          this.regionList = res.data.data.regionList;
          this.subjectList = res.data.data.subjectList;
        }
      }, err => {});
    },
    getProductList() {
      //请求接口
      __WEBPACK_IMPORTED_MODULE_6__static_utils_request___default()("communitym/community/communityInfo/getCommunityInfoList.json", this.filterConfig, res => {
        if (res.statusCode == "200") {
          if (res.data.data.communityResultBoList) {
            this.products = this.products.concat(res.data.data.communityResultBoList);
          }
          if (this.products.length == 0) {
            this.isDataNull = true;
          } else {
            this.isDataNull = false;
          }
          if (res.data.data.haveNextPage) {
            this.isMore = true;
          } else {
            this.isMore = false;
          }
        }
      }, err => {});
    },
    initClientRect() {
      // 查询菜单栏距离文档顶部的距离menuTop
      let query = wx.createSelectorQuery();
      query.select("#filter").boundingClientRect();
      query.exec(res => {
        this.menuTop = res[0].top;
        let top = res[0].top;
        if (top < 0) {
          this.isShowSearchBtn = true;
        } else {
          this.isShowSearchBtn = false;
        }
      });
    },
    showFilterBox(id) {
      //点击筛选弹出筛选框
      this.filterBoxShow = true;
      this.currentTab = id;
    },
    closeFilterBox() {
      //关闭筛选框
      this.filterBoxShow = false;
    },
    confirmFilter(tabId, item) {
      console.log(tabId);
      //确认筛选条件
      let list = {
        "1": "cityId",
        "2": "subjectId",
        "3": "genreId"
      };
      this.filterBoxShow = false;
      this.filterConfig[list[tabId]] = item.id;
      switch (tabId) {
        case 1:
          this.selectedItems = Object.assign({}, this.selectedItems, {
            cityName: item.regionName
          });
          break;
        case 2:
          this.selectedItems = Object.assign({}, this.selectedItems, {
            subjectName: item.subName
          });
          break;
        case 3:
          this.selectedItems = Object.assign({}, this.selectedItems, {
            genreName: item.genreName
          });
          break;
      }
      this.initProductList();
    },
    changeFilterTab(tabId) {
      //筛选弹窗tab切换
      this.currentTab = tabId;
    },

    resetFilter() {
      //重置筛选条件
      this.filterConfig = {
        current: "1",
        size: "20",
        genreId: "", //类型
        subjectId: "", //主题
        cityId: "" //地级市
      };
      this.selectedItems = Object.assign({}, {
        genreName: "",
        subjectName: "",
        cityName: ""
      });
      this.initProductList();
    },
    showQrcode(res) {
      //显示二维码弹窗
      console.log(res);
      this.isShowModal = true;
      this.modalData = {
        title: res.mainTitle,
        qrImg: res.qrCode,
        tip: "请您在客服消息回复“加群”",
        id: res.id
      };
    },
    closeQrcode(data) {
      //关闭二维码弹窗
      this.isShowModal = false;
    },
    preventTouchMove() {
      //阻止弹窗下页面滑动
      return false;
    },
    linkToMiniprogram(data) {
      wx.navigateToMiniProgram({
        appId: "wx59e3e1b404f5f723",
        path: "/pages/index/index",
        extraData: {},
        envVersion: "develop",
        success(res) {
          // 打开成功
          console.log("打开成功");
        }
      });
    }
  },

  onPageScroll(scroll) {
    // 监听页面滚动距离scrollTop
    this.initClientRect();
  },
  onShow: function () {
    this.reload(); //刷新页面
  }
});

/***/ }),
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_script_index_0_swiper_vue__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_template_compiler_index_id_data_v_0ce73e6d_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_template_index_0_swiper_vue__ = __webpack_require__(27);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(25)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-0ce73e6d"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_script_index_0_swiper_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_template_compiler_index_id_data_v_0ce73e6d_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_template_index_0_swiper_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/swiper.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] swiper.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-0ce73e6d", Component.options)
  } else {
    hotAPI.reload("data-v-0ce73e6d", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 25 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
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
});

/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('swiper', {
    staticClass: "swiper",
    attrs: {
      "indicator-dots": _vm.indicatorDots,
      "autoplay": _vm.autoplay,
      "interval": _vm.interval,
      "duration": _vm.duration
    }
  }, _vm._l((_vm.bannerList), function(item, index) {
    return _c('block', {
      key: index
    }, [_c('swiper-item', {
      attrs: {
        "mpcomid": '0_' + index
      }
    }, [_c('image', {
      staticClass: "slide-image",
      attrs: {
        "src": item.homeImage,
        "mode": "aspectFill",
        "eventid": '0_' + index
      },
      on: {
        "click": function($event) {
          _vm.linkToDetail(item)
        }
      }
    })])], 1)
  }))
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-0ce73e6d", esExports)
  }
}

/***/ }),
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(42);
var request = __webpack_require__(2);
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

/***/ }),
/* 42 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuex__ = __webpack_require__(43);



__WEBPACK_IMPORTED_MODULE_0_vue___default.a.use(__WEBPACK_IMPORTED_MODULE_1_vuex__["a" /* default */])

/* harmony default export */ __webpack_exports__["default"] = (new __WEBPACK_IMPORTED_MODULE_1_vuex__["a" /* default */].Store({ //store对象
    state: {
        userInfo: {},
        user: "weijinlong"
    },
    mutations: {
        storeUpdateWxUser(data) {
            this.userInfo = data;
        }
    }
}));

/***/ }),
/* 43 */,
/* 44 */
/***/ (function(module, exports) {

module.exports = {
    "code": "200",
    "msg": "成功",
    "indexInfo": {
        "activityList": [{ //banner轮播图
            "id": "cd9976ebe98e40678cb9149576b0d8bc",
            "homeImage": "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2735633715,2749454924&fm=26&gp=0.jpg"
        }, { //banner轮播图
            "id": "cd9976ebe98e40678cb9149576b0d8bc",
            "homeImage": "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2735633715,2749454924&fm=26&gp=0.jpg"
        }],
        "genreList": [{
            "id": "a6f7dac2784f41a48e80e2d27fe56c4c",
            "genreName": "测试类型-一级类型0",
            "headimage": "http://pic33.photophoto.cn/20141114/0005018350653217_b.jpg"
        }, {
            "id": "84d9de96c3ee44b0b77fb3ce6d4672b7",
            "genreName": "测试类型-一级类型1",
            "headimage": "http://pic33.photophoto.cn/20141114/0005018350653217_b.jpg"
        }, {
            "id": "592cd3fd138a4c08a77fb00efd0365da",
            "genreName": "测试类型-一级类型2",
            "headimage": "http://pic33.photophoto.cn/20141114/0005018350653217_b.jpg"
        }, {
            "id": "a4fcd7d4ab594c3f9e7be5f6de141e49",
            "genreName": "测试类型-一级类型3",
            "headimage": "http://pic33.photophoto.cn/20141114/0005018350653217_b.jpg"
        }, {
            "id": "c1c1288df800461f816e48264cc48e4c",
            "genreName": "测试类型-一级类型4",
            "headimage": "http://pic33.photophoto.cn/20141114/0005018350653217_b.jpg"
        }, {
            "id": "c08d3d88951b4ea9bcaaf23b9bafe757",
            "genreName": "测试类型-一级类型5",
            "headimage": "http://pic33.photophoto.cn/20141114/0005018350653217_b.jpg"
        }, {
            "id": "63ea4f8088b54bd8af29737e22c96e5c",
            "genreName": "测试类型-一级类型6",
            "headimage": "http://pic33.photophoto.cn/20141114/0005018350653217_b.jpg"
        }],
        "subjectList": [{
            "id": "d656afde1c14496c80b24b445f41a810",
            "subName": "测试主题0"
        }, {
            "id": "edbe29f97feb4b1ca0fa63576c7f8244",
            "subName": "测试主题1"
        }, {
            "id": "3b5de59fdc224929804552dacf69ad98",
            "subName": "测试主题2"
        }, {
            "id": "75e02db0ecae4c2583ede9db80cb3f90",
            "subName": "测试主题3"
        }, {
            "id": "de99139cfe264b82a4dd25857f349dab",
            "subName": "测试主题4"
        }, {
            "id": "6b839ae0e24f43759956633a4c0d6dfa",
            "subName": "测试主题5"
        }],
        "regionList": [{
            "id": "460200",
            "parentId": 460000,
            "regionName": "三亚市"
        }, {
            "id": "511300",
            "parentId": 510000,
            "regionName": "南充市"
        }, {
            "id": "511400",
            "parentId": 510000,
            "regionName": "眉山市"
        }, {
            "id": "511500",
            "parentId": 510000,
            "regionName": "宜宾市"
        }, {
            "id": "511600",
            "parentId": 510000,
            "regionName": "广安市"
        }, {
            "id": "511700",
            "parentId": 510000,
            "regionName": "达州市"
        }, {
            "id": "511800",
            "parentId": 510000,
            "regionName": "雅安市"
        }, {
            "id": "511900",
            "parentId": 510000,
            "regionName": "巴中市"
        }, {
            "id": "512000",
            "parentId": 510000,
            "regionName": "资阳市"
        }, {
            "id": "513200",
            "parentId": 510000,
            "regionName": "阿坝藏族羌族自治州"
        }, {
            "id": "430400",
            "parentId": 430000,
            "regionName": "衡阳市"
        }]
    },
    "productsData": {
        "current": 1,
        "size": 1,
        "total": 100,
        "haveNextPage": true,
        "communityResultBoList": [{
            "mainTitle": "主标题99",
            "subTitle": "副标题99",
            "headImage": "http://img.pconline.com.cn/images/upload/upc/tx/photoblog/1405/31/c0/34808184_34808184_1401494219156_mthumb.jpg",
            "id": "d9185780d6fe408792a9cf1c1be9fe46"
        }, {
            "mainTitle": "主标题99",
            "subTitle": "副标题99",
            "headImage": "http://img.pconline.com.cn/images/upload/upc/tx/photoblog/1405/31/c0/34808184_34808184_1401494219156_mthumb.jpg",
            "id": "d9185780d6fe408792a9cf1c1be9fe46"
        }, {
            "mainTitle": "主标题99",
            "subTitle": "副标题99",
            "headImage": "http://img.pconline.com.cn/images/upload/upc/tx/photoblog/1405/31/c0/34808184_34808184_1401494219156_mthumb.jpg",
            "id": "d9185780d6fe408792a9cf1c1be9fe46"
        }, {
            "mainTitle": "主标题99",
            "subTitle": "副标题99",
            "headImage": "http://img.pconline.com.cn/images/upload/upc/tx/photoblog/1405/31/c0/34808184_34808184_1401494219156_mthumb.jpg",
            "id": "d9185780d6fe408792a9cf1c1be9fe46"
        }, {
            "mainTitle": "主标题99",
            "subTitle": "副标题99",
            "headImage": "http://img.pconline.com.cn/images/upload/upc/tx/photoblog/1405/31/c0/34808184_34808184_1401494219156_mthumb.jpg",
            "id": "d9185780d6fe408792a9cf1c1be9fe46"
        }]
    }

};

/***/ }),
/* 45 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "container"
  }, [_c('div', {
    staticClass: "banner"
  }, [_c('Swiper', {
    attrs: {
      "bannerList": _vm.activityList,
      "eventid": '0',
      "mpcomid": '0'
    },
    on: {
      "linkToDetail": _vm.linkToMiniprogram
    }
  })], 1), _vm._v(" "), _c('div', {
    class: ['filter', _vm.isMenuFixed ? 'fixed' : ''],
    attrs: {
      "id": "filter"
    }
  }, [_c('div', {
    staticClass: "filter-link"
  }, [_c('div', {
    staticClass: "filter-item",
    attrs: {
      "eventid": '1'
    },
    on: {
      "click": function($event) {
        _vm.showFilterBox(1)
      }
    }
  }, [_vm._v("选地区")]), _vm._v(" "), _c('div', {
    staticClass: "filter-item",
    attrs: {
      "eventid": '2'
    },
    on: {
      "click": function($event) {
        _vm.showFilterBox(2)
      }
    }
  }, [_vm._v("选主题")]), _vm._v(" "), _c('div', {
    staticClass: "filter-item",
    attrs: {
      "eventid": '3'
    },
    on: {
      "click": function($event) {
        _vm.showFilterBox(3)
      }
    }
  }, [_vm._v("选车型")])]), _vm._v(" "), (_vm.reset) ? _c('div', {
    staticClass: "filter-selected"
  }, [(_vm.selectedItems.cityName) ? _c('div', {
    staticClass: "selected-item"
  }, [_vm._v(_vm._s(_vm.selectedItems.cityName))]) : _vm._e(), _vm._v(" "), (_vm.selectedItems.subjectName) ? _c('div', {
    staticClass: "selected-item"
  }, [_vm._v(_vm._s(_vm.selectedItems.subjectName))]) : _vm._e(), _vm._v(" "), (_vm.selectedItems.genreName) ? _c('div', {
    staticClass: "selected-item"
  }, [_vm._v(_vm._s(_vm.selectedItems.genreName))]) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "selected-reset",
    attrs: {
      "eventid": '4'
    },
    on: {
      "click": _vm.resetFilter
    }
  }, [_vm._v("重置")])]) : _vm._e()]), _vm._v(" "), _c('div', {
    staticClass: "product-list"
  }, [_c('product-list', {
    attrs: {
      "products": _vm.products,
      "eventid": '5',
      "mpcomid": '1'
    },
    on: {
      "operateItem": _vm.showQrcode
    }
  })], 1), _vm._v(" "), (_vm.isMore) ? _c('load-more', {
    attrs: {
      "eventid": '6',
      "mpcomid": '2'
    },
    on: {
      "loadMore": _vm.getMoreList
    }
  }) : _vm._e(), _vm._v(" "), (_vm.filterBoxShow) ? _c('div', {
    staticClass: "filter-box",
    attrs: {
      "catchtouchmove": "preventTouchMove"
    }
  }, [_c('div', {
    staticClass: "filter-box-top"
  }, [_c('div', {
    staticClass: "filter-box-close",
    attrs: {
      "eventid": '7'
    },
    on: {
      "click": _vm.closeFilterBox
    }
  }, [_vm._v("关闭")]), _vm._v(" "), _c('div', {
    staticClass: "filter-link"
  }, [_c('div', {
    class: ['filter-item', _vm.currentTab == 1 ? 'activeTab' : ''],
    attrs: {
      "eventid": '8'
    },
    on: {
      "click": function($event) {
        _vm.changeFilterTab(1)
      }
    }
  }, [_vm._v("选地区")]), _vm._v(" "), _c('div', {
    class: ['filter-item', _vm.currentTab == 2 ? 'activeTab' : ''],
    attrs: {
      "eventid": '9'
    },
    on: {
      "click": function($event) {
        _vm.changeFilterTab(2)
      }
    }
  }, [_vm._v("选主题")]), _vm._v(" "), _c('div', {
    class: ['filter-item', _vm.currentTab == 3 ? 'activeTab' : ''],
    attrs: {
      "eventid": '10'
    },
    on: {
      "click": function($event) {
        _vm.changeFilterTab(3)
      }
    }
  }, [_vm._v("选车型")])])]), _vm._v(" "), _c('div', {
    staticClass: "filter-box-main"
  }, [_vm._l((_vm.regionList), function(item, index) {
    return _c('ul', {
      key: index,
      class: ['box-list', _vm.currentTab == 1 ? 'show' : 'hidden']
    }, [_c('li', {
      staticClass: "box-list-item",
      attrs: {
        "eventid": '11_' + index
      },
      on: {
        "click": function($event) {
          _vm.confirmFilter(1, item)
        }
      }
    }, [_vm._v(_vm._s(item.regionName))])], 1)
  }), _vm._v(" "), _vm._l((_vm.subjectList), function(item, index) {
    return _c('ul', {
      key: index,
      class: ['box-list', _vm.currentTab == 2 ? 'show' : 'hidden']
    }, [_c('li', {
      staticClass: "box-list-item",
      attrs: {
        "eventid": '12_' + index
      },
      on: {
        "click": function($event) {
          _vm.confirmFilter(2, item)
        }
      }
    }, [_vm._v(_vm._s(item.subName))])], 1)
  }), _vm._v(" "), _vm._l((_vm.typeList), function(item, index) {
    return _c('ul', {
      key: index,
      class: ['box-list', _vm.currentTab == 3 ? 'show' : 'hidden']
    }, [_c('li', {
      staticClass: "box-list-item",
      attrs: {
        "eventid": '13_' + index
      },
      on: {
        "click": function($event) {
          _vm.confirmFilter(3, item)
        }
      }
    }, [_vm._v(_vm._s(item.genreName))])], 1)
  })], 2)]) : _vm._e(), _vm._v(" "), (_vm.isShowSearchBtn) ? _c('a', {
    staticClass: "search-link",
    attrs: {
      "href": "/pages/search/main",
      "open-type": "switchTab"
    }
  }, [_vm._v("搜索")]) : _vm._e(), _vm._v(" "), (_vm.isDataNull) ? _c('data-null', {
    attrs: {
      "mpcomid": '3'
    }
  }) : _vm._e(), _vm._v(" "), (_vm.isShowModal) ? _c('modal', {
    attrs: {
      "modalData": _vm.modalData,
      "eventid": '14',
      "mpcomid": '4'
    },
    on: {
      "closeModal": _vm.closeQrcode
    }
  }) : _vm._e()], 1)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-d084e034", esExports)
  }
}

/***/ })
],[17]);
//# sourceMappingURL=main.js.map