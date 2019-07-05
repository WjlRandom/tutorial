require("../../common/manifest.js")
require("../../common/vendor.js")
global.webpackJsonpMpvue([3],{

/***/ 56:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(57);



const app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 57:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_template_compiler_index_id_data_v_fa6d692c_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(60);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(58)
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
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_template_compiler_index_id_data_v_fa6d692c_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/pages/search/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-fa6d692c", Component.options)
  } else {
    hotAPI.reload("data-v-fa6d692c", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 58:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 59:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_productList__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_dataNull__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__static_utils_request__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__static_utils_request___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__static_utils_request__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_showModal__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_loadMore__ = __webpack_require__(5);
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
      searchConfig: {
        current: "1",
        size: "20",
        search: ""
      },
      products: [],
      isDataNull: false,
      isMore: false,
      isShowModal: false
    };
  },
  components: {
    ProductList: __WEBPACK_IMPORTED_MODULE_0__components_productList__["a" /* default */],
    DataNull: __WEBPACK_IMPORTED_MODULE_1__components_dataNull__["a" /* default */],
    Modal: __WEBPACK_IMPORTED_MODULE_3__components_showModal__["a" /* default */],
    LoadMore: __WEBPACK_IMPORTED_MODULE_4__components_loadMore__["a" /* default */]
  },

  methods: {
    initSearchList() {
      if (this.searchConfig.search == "") {
        return;
      } else {
        this.searchConfig.current = 1; //重置为第一页
        this.products = [];
      }
      this.getSearchList();
    },

    getMoreList() {
      this.searchConfig.current += 1;
      this.getSearchList();
    },
    getSearchList() {
      __WEBPACK_IMPORTED_MODULE_2__static_utils_request___default()("communitym/community/communityInfo/searchCommunityInfoList.json", this.searchConfig, res => {
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
    showQrcode(res) {
      //显示二维码弹窗
      this.isShowModal = true;
      this.modalData = {
        title: res.mainTitle,
        qrImg: res.qrCode,
        tip: "识别二维码进群"
      };
    },
    closeQrcode(data) {
      //关闭二维码弹窗
      this.isShowModal = false;
    }
  },
  onShow() {
    this.searchConfig = {
      current: "1",
      size: "20",
      search: ""
    };
    this.isDataNull = false;
  }
});

/***/ }),

/***/ 60:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "search-page"
  }, [_c('div', {
    staticClass: "search-top"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.searchConfig.search),
      expression: "searchConfig.search"
    }],
    staticClass: "search-input",
    attrs: {
      "type": "text",
      "placeholder": "请输入你感兴趣的群",
      "eventid": '0'
    },
    domProps: {
      "value": (_vm.searchConfig.search)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.searchConfig.search = $event.target.value
      }
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "search-btn",
    attrs: {
      "eventid": '1'
    },
    on: {
      "click": _vm.initSearchList
    }
  }, [_vm._v("确定")])]), _vm._v(" "), _c('div', {
    staticClass: "search-list"
  }, [_c('product-list', {
    attrs: {
      "products": _vm.products,
      "eventid": '2',
      "mpcomid": '0'
    },
    on: {
      "operateItem": _vm.showQrcode
    }
  })], 1), _vm._v(" "), (_vm.isMore) ? _c('load-more', {
    attrs: {
      "eventid": '3',
      "mpcomid": '1'
    },
    on: {
      "loadMore": _vm.getMoreList
    }
  }) : _vm._e(), _vm._v(" "), (_vm.isDataNull) ? _c('data-null', {
    attrs: {
      "mpcomid": '2'
    }
  }) : _vm._e(), _vm._v(" "), (_vm.isShowModal) ? _c('modal', {
    attrs: {
      "modalData": _vm.modalData,
      "eventid": '4',
      "mpcomid": '3'
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
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-fa6d692c", esExports)
  }
}

/***/ })

},[56]);
//# sourceMappingURL=main.js.map