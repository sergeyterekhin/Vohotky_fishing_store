"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_pageproductid_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/product_block/News.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/product_block/News.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "News",
  props: ['productdata']
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/pageproductid.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/pageproductid.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_product_block_News_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/product_block/News.vue */ "./resources/js/components/product_block/News.vue");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "pageproduct",
  components: {
    News: _components_product_block_News_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      countproduct: 1
    };
  },
  mounted: function mounted() {
    this.getProducts(this.$route.params);
  },
  computed: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_1__.mapGetters)({
    getProduct: 'product/getProductforSinglepage'
  })), {}, {
    thistimeurl: function thistimeurl() {
      return this.$route.params.product;
    }
  }),
  methods: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_1__.mapActions)({
    getProducts: 'product/ajaxProductForSinglePage'
  })), {}, {
    btnplus: function btnplus() {
      if (this.countproduct < 5) this.countproduct = this.countproduct + 1;
    },
    btnminus: function btnminus() {
      if (this.countproduct > 0) this.countproduct = this.countproduct - 1;
    }
  }),
  watch: {
    thistimeurl: function thistimeurl() {
      this.countproduct = 1;
      this.getProducts(this.$route.params);
    }
  }
});

/***/ }),

/***/ "./resources/js/components/product_block/News.vue":
/*!********************************************************!*\
  !*** ./resources/js/components/product_block/News.vue ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _News_vue_vue_type_template_id_441588e0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./News.vue?vue&type=template&id=441588e0& */ "./resources/js/components/product_block/News.vue?vue&type=template&id=441588e0&");
/* harmony import */ var _News_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./News.vue?vue&type=script&lang=js& */ "./resources/js/components/product_block/News.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _News_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _News_vue_vue_type_template_id_441588e0___WEBPACK_IMPORTED_MODULE_0__.render,
  _News_vue_vue_type_template_id_441588e0___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/product_block/News.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/pageproductid.vue":
/*!**********************************************!*\
  !*** ./resources/js/views/pageproductid.vue ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _pageproductid_vue_vue_type_template_id_3896bea8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pageproductid.vue?vue&type=template&id=3896bea8& */ "./resources/js/views/pageproductid.vue?vue&type=template&id=3896bea8&");
/* harmony import */ var _pageproductid_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pageproductid.vue?vue&type=script&lang=js& */ "./resources/js/views/pageproductid.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _pageproductid_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _pageproductid_vue_vue_type_template_id_3896bea8___WEBPACK_IMPORTED_MODULE_0__.render,
  _pageproductid_vue_vue_type_template_id_3896bea8___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/pageproductid.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/product_block/News.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/js/components/product_block/News.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_News_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./News.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/product_block/News.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_News_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/pageproductid.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./resources/js/views/pageproductid.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_pageproductid_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./pageproductid.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/pageproductid.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_pageproductid_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/product_block/News.vue?vue&type=template&id=441588e0&":
/*!***************************************************************************************!*\
  !*** ./resources/js/components/product_block/News.vue?vue&type=template&id=441588e0& ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_News_vue_vue_type_template_id_441588e0___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_News_vue_vue_type_template_id_441588e0___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_News_vue_vue_type_template_id_441588e0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./News.vue?vue&type=template&id=441588e0& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/product_block/News.vue?vue&type=template&id=441588e0&");


/***/ }),

/***/ "./resources/js/views/pageproductid.vue?vue&type=template&id=3896bea8&":
/*!*****************************************************************************!*\
  !*** ./resources/js/views/pageproductid.vue?vue&type=template&id=3896bea8& ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_pageproductid_vue_vue_type_template_id_3896bea8___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_pageproductid_vue_vue_type_template_id_3896bea8___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_pageproductid_vue_vue_type_template_id_3896bea8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./pageproductid.vue?vue&type=template&id=3896bea8& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/pageproductid.vue?vue&type=template&id=3896bea8&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/product_block/News.vue?vue&type=template&id=441588e0&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/product_block/News.vue?vue&type=template&id=441588e0& ***!
  \******************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "goods" },
    [
      _c(
        "router-link",
        {
          attrs: {
            to: {
              name: "producthasone",
              params: {
                catalog: this.productdata.name_en,
                product: this.productdata.name_url,
              },
            },
          },
        },
        [
          _c("img", {
            attrs: {
              src: this.productdata.image_name,
              width: "180",
              height: "180",
            },
          }),
          _vm._v(" "),
          _c("span", { staticClass: "name" }, [
            _vm._v(_vm._s(this.productdata.name)),
          ]),
        ]
      ),
      _vm._v(" "),
      _c("div", { staticClass: "price" }, [
        _vm._v("\n" + _vm._s(this.productdata.price) + " \n"),
        _c("span", { staticClass: "rouble" }, [_vm._v("Р")]),
      ]),
      _vm._m(0),
    ],
    1
  )
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("a", { staticClass: "buy", attrs: { href: "" } }, [
      _c("i", { staticClass: "fa-solid fa-basket-shopping" }),
    ])
  },
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/pageproductid.vue?vue&type=template&id=3896bea8&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/pageproductid.vue?vue&type=template&id=3896bea8& ***!
  \********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "main",
    [
      _vm._l(_vm.getProduct.product, function (product) {
        return _c("div", { key: product.id }, [
          _c("h1", [_vm._v(_vm._s(product.name))]),
          _vm._v(" "),
          _c("div", { attrs: { id: "shop_goods" } }, [
            _c("div", { staticClass: "goods-card" }, [
              _c("div", { staticClass: "gallery" }, [
                _c("div", { staticClass: "middle" }, [
                  _c("img", { attrs: { src: product.image_name } }),
                ]),
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "right" }, [
                _c("div", { staticClass: "features" }, [
                  _c("h4", [_vm._v("Характеристики товара")]),
                  _vm._v(" "),
                  _c("div", {
                    staticClass: "item",
                    domProps: { innerHTML: _vm._s(product.slug) },
                  }),
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "price" }, [
                  _c("span", [
                    _vm._v(_vm._s(product.price * _vm.countproduct) + " руб."),
                  ]),
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "buttons" }, [
                  _c("div", { staticClass: "qt" }, [
                    _c(
                      "button",
                      {
                        staticClass: "decr",
                        attrs: { disabled: _vm.countproduct == 1 },
                        on: { click: _vm.btnminus },
                      },
                      [_vm._v("–")]
                    ),
                    _vm._v(" "),
                    _c("p", [_vm._v(_vm._s(_vm.countproduct))]),
                    _vm._v(" "),
                    _c(
                      "button",
                      {
                        staticClass: "incr",
                        attrs: { disabled: _vm.countproduct == 5 },
                        on: { click: _vm.btnplus },
                      },
                      [_vm._v("+")]
                    ),
                  ]),
                  _vm._v(" "),
                  _vm._m(0, true),
                ]),
                _vm._v(" "),
                _c("div", { attrs: { id: "goods_desc" } }, [
                  _c("div", { staticClass: "content tab-0 current" }, [
                    _c("p", [_vm._v(_vm._s(product.description))]),
                  ]),
                ]),
              ]),
            ]),
          ]),
        ])
      }),
      _vm._v(" "),
      _c(
        "section",
        { staticClass: "goods_set" },
        [
          _c("h4", [_vm._v("Похожие товары")]),
          _vm._v(" "),
          _vm._l(_vm.getProduct.other, function (product) {
            return _c(
              "div",
              { key: product.id, staticClass: "goods_wrapper" },
              [_c("News", { attrs: { productdata: product } })],
              1
            )
          }),
        ],
        2
      ),
    ],
    2
  )
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("form", [
      _c("div", { staticClass: "buy_btn_cont" }, [
        _c("input", { attrs: { type: "submit", value: "Купить" } }),
      ]),
    ])
  },
]
render._withStripped = true



/***/ })

}]);