!function(_){var t={};function r(n){if(t[n])return t[n].exports;var e=t[n]={i:n,l:!1,exports:{}};return _[n].call(e.exports,e,e.exports,r),e.l=!0,e.exports}r.m=_,r.c=t,r.d=function(n,e,_){r.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:_})},r.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},r.t=function(e,n){if(1&n&&(e=r(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var _=Object.create(null);if(r.r(_),Object.defineProperty(_,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var t in e)r.d(_,t,function(n){return e[n]}.bind(null,t));return _},r.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return r.d(e,"a",e),e},r.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},r.p="/dist/",r(r.s="./src/assets/js/common.js")}({"./src/assets/js/common.js":
/*!*********************************!*\
  !*** ./src/assets/js/common.js ***!
  \*********************************/
/*! no exports provided */function(module,__webpack_exports__,__webpack_require__){"use strict";eval('__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_index_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @components/index/index */ "./src/components/index/index.js");\n\nclass Index {\n    constructor() {\n        $(".common").html("哈哈哈哈")\n    }\n    init() {\n        let module = new _components_index_index__WEBPACK_IMPORTED_MODULE_0__["default"]({\n            el: $("#module")\n        });\n        console.log("module", module);\n        module.on("linkClick", () => {\n            alert("点击事件被触发")\n        });\n    }\n}\nnew Index();\n\n//# sourceURL=webpack:///./src/assets/js/common.js?')},"./src/components/index/index.ejs":
/*!****************************************!*\
  !*** ./src/components/index/index.ejs ***!
  \****************************************/
/*! no static exports found */function(module,exports){eval("module.exports = function (obj) {\nobj || (obj = {});\nvar __t, __p = '';\nwith (obj) {\n__p += '<div class=\"link\">这是一个ejs模板</div>';\n\n}\nreturn __p\n}\n\n//# sourceURL=webpack:///./src/components/index/index.ejs?")},"./src/components/index/index.js":
/*!***************************************!*\
  !*** ./src/components/index/index.js ***!
  \***************************************/
/*! exports provided: default */function(module,__webpack_exports__,__webpack_require__){"use strict";eval('__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_ejs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.ejs */ "./src/components/index/index.ejs");\n/* harmony import */ var _index_ejs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_index_ejs__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _lib_event__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @lib/event */ "./src/lib/event.js");\n/* harmony import */ var _lib_event__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_lib_event__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nclass Index {\n    constructor(config) {\n        console.log(config.el);\n        this.el = config.el;\n        this.render();\n        this.events();\n    }\n    render() {\n        let html = _index_ejs__WEBPACK_IMPORTED_MODULE_0___default()();\n        this.el.html(html);\n    }\n    events() {\n        this.el.on("click", ".link", () => {\n            this.emit("linkClick", {\n                link: "hahahh"\n            })\n        })\n\n    }\n}\nObject.assign(Index.prototype, _lib_event__WEBPACK_IMPORTED_MODULE_1___default.a);\n/* harmony default export */ __webpack_exports__["default"] = (Index);\n\n//# sourceURL=webpack:///./src/components/index/index.js?')},"./src/lib/event.js":
/*!**************************!*\
  !*** ./src/lib/event.js ***!
  \**************************/
/*! no static exports found */function(module,exports){eval("module.exports = {\n    handles: {},\n    on: function(handle, callback) {\n        if (!this.handles[handle]) {\n            this.handles[handle] = callback;\n        }\n    },\n    emit: function(handle) {\n        if (this.handles[handle]) {\n            var callback = this.handles[handle];\n            var args = Array.prototype.slice.call(arguments, 1);\n            callback(args);\n        }\n    },\n    off: function(handle) {\n        if (this.handles[handle]) {\n            delete this.handles[handle]\n        }\n    }\n};\n\n//# sourceURL=webpack:///./src/lib/event.js?")}});