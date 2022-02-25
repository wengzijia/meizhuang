(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/orderList/orderList"],{

/***/ 263:
/*!***********************************************************************************************************!*\
  !*** C:/Users/weng/Desktop/自己/uniapp/mdmeimall - 最新修改版本/main.js?{"page":"pages%2ForderList%2ForderList"} ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ 5);
var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 3));
var _orderList = _interopRequireDefault(__webpack_require__(/*! ./pages/orderList/orderList.vue */ 264));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}wx.__webpack_require_UNI_MP_PLUGIN__ = __webpack_require__;
createPage(_orderList.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["createPage"]))

/***/ }),

/***/ 264:
/*!****************************************************************************************!*\
  !*** C:/Users/weng/Desktop/自己/uniapp/mdmeimall - 最新修改版本/pages/orderList/orderList.vue ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _orderList_vue_vue_type_template_id_40959460___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./orderList.vue?vue&type=template&id=40959460& */ 265);
/* harmony import */ var _orderList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./orderList.vue?vue&type=script&lang=js& */ 267);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _orderList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _orderList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _orderList_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./orderList.vue?vue&type=style&index=0&lang=css& */ 270);
/* harmony import */ var _D_uiapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 11);

var renderjs





/* normalize component */

var component = Object(_D_uiapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _orderList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _orderList_vue_vue_type_template_id_40959460___WEBPACK_IMPORTED_MODULE_0__["render"],
  _orderList_vue_vue_type_template_id_40959460___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null,
  false,
  _orderList_vue_vue_type_template_id_40959460___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "pages/orderList/orderList.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 265:
/*!***********************************************************************************************************************!*\
  !*** C:/Users/weng/Desktop/自己/uniapp/mdmeimall - 最新修改版本/pages/orderList/orderList.vue?vue&type=template&id=40959460& ***!
  \***********************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_uiapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_uiapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_D_uiapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_uiapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_uiapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_uiapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_orderList_vue_vue_type_template_id_40959460___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./orderList.vue?vue&type=template&id=40959460& */ 266);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _D_uiapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_uiapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_D_uiapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_uiapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_uiapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_uiapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_orderList_vue_vue_type_template_id_40959460___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _D_uiapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_uiapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_D_uiapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_uiapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_uiapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_uiapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_orderList_vue_vue_type_template_id_40959460___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _D_uiapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_uiapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_D_uiapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_uiapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_uiapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_uiapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_orderList_vue_vue_type_template_id_40959460___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _D_uiapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_uiapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_D_uiapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_uiapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_uiapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_uiapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_orderList_vue_vue_type_template_id_40959460___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 266:
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/Users/weng/Desktop/自己/uniapp/mdmeimall - 最新修改版本/pages/orderList/orderList.vue?vue&type=template&id=40959460& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
try {
  components = {
    uTabs: function() {
      return Promise.all(/*! import() | uni_modules/uview-ui/components/u-tabs/u-tabs */[__webpack_require__.e("common/vendor"), __webpack_require__.e("uni_modules/uview-ui/components/u-tabs/u-tabs")]).then(__webpack_require__.bind(null, /*! @/uni_modules/uview-ui/components/u-tabs/u-tabs.vue */ 479))
    },
    uButton: function() {
      return Promise.all(/*! import() | uni_modules/uview-ui/components/u-button/u-button */[__webpack_require__.e("common/vendor"), __webpack_require__.e("uni_modules/uview-ui/components/u-button/u-button")]).then(__webpack_require__.bind(null, /*! @/uni_modules/uview-ui/components/u-button/u-button.vue */ 381))
    },
    uBackTop: function() {
      return Promise.all(/*! import() | uni_modules/uview-ui/components/u-back-top/u-back-top */[__webpack_require__.e("common/vendor"), __webpack_require__.e("uni_modules/uview-ui/components/u-back-top/u-back-top")]).then(__webpack_require__.bind(null, /*! @/uni_modules/uview-ui/components/u-back-top/u-back-top.vue */ 487))
    },
    uDivider: function() {
      return Promise.all(/*! import() | uni_modules/uview-ui/components/u-divider/u-divider */[__webpack_require__.e("common/vendor"), __webpack_require__.e("uni_modules/uview-ui/components/u-divider/u-divider")]).then(__webpack_require__.bind(null, /*! @/uni_modules/uview-ui/components/u-divider/u-divider.vue */ 349))
    },
    uModal: function() {
      return Promise.all(/*! import() | uni_modules/uview-ui/components/u-modal/u-modal */[__webpack_require__.e("common/vendor"), __webpack_require__.e("uni_modules/uview-ui/components/u-modal/u-modal")]).then(__webpack_require__.bind(null, /*! @/uni_modules/uview-ui/components/u-modal/u-modal.vue */ 495))
    }
  }
} catch (e) {
  if (
    e.message.indexOf("Cannot find module") !== -1 &&
    e.message.indexOf(".vue") !== -1
  ) {
    console.error(e.message)
    console.error("1. 排查组件名称拼写是否正确")
    console.error(
      "2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"
    )
    console.error(
      "3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件"
    )
  } else {
    throw e
  }
}
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 267:
/*!*****************************************************************************************************************!*\
  !*** C:/Users/weng/Desktop/自己/uniapp/mdmeimall - 最新修改版本/pages/orderList/orderList.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_uiapp_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_uiapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_uiapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_uiapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_uiapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_orderList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./orderList.vue?vue&type=script&lang=js& */ 268);
/* harmony import */ var _D_uiapp_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_uiapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_uiapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_uiapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_uiapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_orderList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_uiapp_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_uiapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_uiapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_uiapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_uiapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_orderList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_uiapp_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_uiapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_uiapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_uiapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_uiapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_orderList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_uiapp_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_uiapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_uiapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_uiapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_uiapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_orderList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_uiapp_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_uiapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_uiapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_uiapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_uiapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_orderList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 268:
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/Users/weng/Desktop/自己/uniapp/mdmeimall - 最新修改版本/pages/orderList/orderList.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _regenerator = _interopRequireDefault(__webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ 34));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {try {var info = gen[key](arg);var value = info.value;} catch (error) {reject(error);return;}if (info.done) {resolve(value);} else {Promise.resolve(value).then(_next, _throw);}}function _asyncToGenerator(fn) {return function () {var self = this,args = arguments;return new Promise(function (resolve, reject) {var gen = fn.apply(self, args);function _next(value) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);}function _throw(err) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);}_next(undefined);});};}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;} //
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
var _require =


__webpack_require__(/*! ../../api/order.js */ 269),fetchOrderList = _require.fetchOrderList,fetchCancelOrder = _require.fetchCancelOrder,fetchDeleteOrder = _require.fetchDeleteOrder,fetchPayAgain = _require.fetchPayAgain;var _default =
{
  data: function data() {var _ref;
    return _ref = {
      token: "", // 用户凭证
      skip: 0, //  默认第0页开始
      take: 10, // 每页的数量
      addressData: [], // 地址数据
      goodData: [], // 商品数据
      filterData: [], // 过滤数据
      // windowHeight: 0,
      isLoadFinish: true, // 是否加载完成,   // true 未加载完毕    false  加载完毕
      isPullRefresh: false, // 是否下拉刷新  
      iconStyle: {
        fontSize: '24rpx',
        color: '#fffff',
        opacity: 0.1 },

      scrollTop: 0,
      title: '提示',
      content: '确认删除订单？',
      show: false,
      scrollLeft: 0,
      list: [{
        name: '全部',
        status: 'all' },

      {
        name: '待付款',
        status: '0' },

      {
        name: '待发货',
        status: '1' },

      {
        name: '已发货',
        status: '2' },

      {
        name: '已完成',
        status: '3' },

      {
        name: '已关闭',
        status: '4' },

      {
        name: '无效订单',
        status: '5' }],


      indexs: [] }, _defineProperty(_ref, "skip",
    0), _defineProperty(_ref, "take",
    10), _ref;

  },
  onLoad: function onLoad() {var _this = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee() {return _regenerator.default.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:
              // 下拉刷新
              _this.isPullRefresh = true;
              _this.token = uni.getStorageSync('token');
              _this.OrderList();case 3:case "end":return _context.stop();}}}, _callee);}))();
  },
  methods: {
    OrderList: function OrderList() {var _this2 = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee2() {var _yield$fetchOrderList, code, data;return _regenerator.default.wrap(function _callee2$(_context2) {while (1) {switch (_context2.prev = _context2.next) {case 0:_context2.next = 2;return (



                  fetchOrderList(_this2.token, _this2.skip, _this2.take));case 2:_yield$fetchOrderList = _context2.sent;code = _yield$fetchOrderList.code;data = _yield$fetchOrderList.data;
                data.forEach(function (item) {
                  _this2.addressData.push(item);
                  var actualPrice = item.actualPrice;
                  var status = item.status;
                  item.orderItemlist.forEach(function (item) {
                    item.actualPrice = actualPrice; // 添加属性
                    item.status = status; // 添加属性
                    _this2.goodData.push(item);
                    _this2.filterData = _this2.goodData;
                  });
                });
                console.log(_this2.addressData, '232', _this2.goodData);case 7:case "end":return _context2.stop();}}}, _callee2);}))();
    },
    // 订单状态
    clickStatus: function clickStatus(order) {
      var status = order.status;
      if (status == "all") {
        return this.goodData = this.filterData;
      }
      return this.goodData = this.filterData.filter(function (item) {return item.status == status;});
    },
    // 上拉加载更多   页码++  然后再发送请求获取
    scrollLoadMore: function scrollLoadMore() {
      // 说明加载完毕就不再执行
      if (!this.isLoadFinish) {
        return;
      }
      this.skip++;
      this.OrderList();
      console.log('上拉加载更多');
    },
    // 下拉刷新  页码始终为第一页   
    pullToRefresh: function pullToRefresh() {
      this.isPullRefresh = false;
      this.skip = 0;
      this.goodData = []; // 清空才能保证唯一
      this.OrderList();
      console.log('下拉刷新');
    },
    onRestore: function onRestore() {
      this.isPullRefresh = 'restore'; // 需要重置
    },
    // 跳转详情
    jumpDetails: function jumpDetails(orderSn) {
      uni.navigateTo({
        url: "../orderDetails/orderDetails?orderSn=".concat(orderSn) });

    },
    // 待付款 
    obligationOrder: function obligationOrder(orderSn) {return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee3() {var result;return _regenerator.default.wrap(function _callee3$(_context3) {while (1) {switch (_context3.prev = _context3.next) {case 0:_context3.next = 2;return (
                  fetchPayAgain(orderSn));case 2:result = _context3.sent;
                console.log(result);case 4:case "end":return _context3.stop();}}}, _callee3);}))();
    },
    // 取消订单
    cancelOrder: function cancelOrder(orderSn) {var _this3 = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee4() {var _yield$fetchCancelOrd, code;return _regenerator.default.wrap(function _callee4$(_context4) {while (1) {switch (_context4.prev = _context4.next) {case 0:_context4.next = 2;return (
                  fetchCancelOrder(orderSn));case 2:_yield$fetchCancelOrd = _context4.sent;code = _yield$fetchCancelOrd.code;
                if (code === 1000) {
                  uni.showToast({
                    title: "取消成功" });

                  _this3.goodData = _this3.goodData.filter(function (item) {
                    return item.orderSn !== orderSn;
                  });
                }case 5:case "end":return _context4.stop();}}}, _callee4);}))();
    },
    // 删除订单
    deleteOrder: function deleteOrder(orderSn) {var _this4 = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee5() {var _yield$fetchCancelOrd2, code;return _regenerator.default.wrap(function _callee5$(_context5) {while (1) {switch (_context5.prev = _context5.next) {case 0:_context5.next = 2;return (
                  fetchCancelOrder(orderSn));case 2:_yield$fetchCancelOrd2 = _context5.sent;code = _yield$fetchCancelOrd2.code;
                if (code === 1000) {
                  uni.showToast({
                    title: "删除成功" });

                  _this4.goodData = _this4.goodData.filter(function (item) {
                    return item.orderSn !== orderSn;
                  });
                }case 5:case "end":return _context5.stop();}}}, _callee5);}))();
    },
    onPageScroll: function onPageScroll(e) {
      this.scrollTop = e.scrollTop;
    },
    cancel: function cancel(e) {
      this.show = false;
    },
    showModal: function showModal() {
      this.show = true;
    },
    confirm: function confirm(e) {
      this.show = false;
      // console.log('删除订单')
    },
    changeIndex: function changeIndex(index) {
      // console.log('改变了index:', index);
    },
    payment: function payment() {

    } } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 270:
/*!*************************************************************************************************************************!*\
  !*** C:/Users/weng/Desktop/自己/uniapp/mdmeimall - 最新修改版本/pages/orderList/orderList.vue?vue&type=style&index=0&lang=css& ***!
  \*************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_uiapp_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_D_uiapp_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_D_uiapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_uiapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_D_uiapp_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_uiapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_uiapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_orderList_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./orderList.vue?vue&type=style&index=0&lang=css& */ 271);
/* harmony import */ var _D_uiapp_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_D_uiapp_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_D_uiapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_uiapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_D_uiapp_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_uiapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_uiapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_orderList_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_uiapp_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_D_uiapp_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_D_uiapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_uiapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_D_uiapp_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_uiapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_uiapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_orderList_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_uiapp_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_D_uiapp_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_D_uiapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_uiapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_D_uiapp_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_uiapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_uiapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_orderList_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_uiapp_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_D_uiapp_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_D_uiapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_uiapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_D_uiapp_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_uiapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_uiapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_orderList_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_uiapp_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_D_uiapp_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_D_uiapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_uiapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_D_uiapp_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_uiapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_uiapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_orderList_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 271:
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/Users/weng/Desktop/自己/uniapp/mdmeimall - 最新修改版本/pages/orderList/orderList.vue?vue&type=style&index=0&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ })

},[[263,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/orderList/orderList.js.map