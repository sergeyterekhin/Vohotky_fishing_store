"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_products_shop_pageproductid_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/product_block/News.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/product_block/News.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../router */ "./resources/js/router.js");
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
//


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "News",
  props: ["getProductsNew"],
  data: function data() {
    return {
      cart: []
    };
  },
  methods: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapActions)({
    addToCartuser: "cart/addToCarts",
    deleteOnCartuser: "cart/deleteOnCarts"
  })), {}, {
    submit: function submit(product) {
      if (!this.authenticated) {
        _router__WEBPACK_IMPORTED_MODULE_1__["default"].replace({
          name: "auth"
        });
      } else {
        this.begincart.find(function (tovar) {
          return tovar.id == product.id;
        }) != undefined ? this.DeleteOnCart(product.id) : this.AddToCart(product);
      }
    },
    AddToCart: function AddToCart(product) {
      var modal = $modal({
        title: "Добавлен в корзину",
        content: "<p>\u0422\u043E\u0432\u0430\u0440 <strong>".concat(product.name, "</strong> \u0414\u043E\u0431\u0430\u0432\u043B\u0435\u043D</p>")
      });
      var dataAdded = {
        id: product.id,
        name: product.name,
        price: product.price,
        quantity: 1,
        total: product.price
      };
      this.addToCartuser(dataAdded).then(function () {
        // this.cart.push(dataAdded);
        modal.showTime();
      })["catch"](function (e) {
        console.log(e);
      });
    },
    DeleteOnCart: function DeleteOnCart(product) {
      this.deleteOnCartuser(product).then(function () {//  this.cart = this.cart.filter((producted) => producted.id != product.id);
      })["catch"](function (e) {});
    }
  }),
  computed: _objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapGetters)({
    authenticated: "auth/authenticated",
    begincart: "cart/getProductinCart"
  })),
  watch: {}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/products_shop/pageproductid.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/products_shop/pageproductid.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_product_block_News_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/product_block/News.vue */ "./resources/js/components/product_block/News.vue");
/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../router */ "./resources/js/router.js");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
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
  computed: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_2__.mapGetters)({
    getProduct: "product/getProductforSinglepage",
    authenticated: "auth/authenticated",
    begincart: "cart/getProductinCart"
  })), {}, {
    thistimeurl: function thistimeurl() {
      return this.$route.params.product;
    }
  }),
  methods: _objectSpread(_objectSpread({
    submit: function submit(product) {
      if (!this.authenticated) {
        _router__WEBPACK_IMPORTED_MODULE_1__["default"].replace({
          name: "auth"
        });
      } else {
        this.begincart.find(function (tovar) {
          return tovar.id == product.id;
        }) != undefined ? this.DeleteOnCart(product.id) : this.AddToCart(product);
      }
    },
    AddToCart: function AddToCart(product) {
      var _this = this;

      var modal = $modal({
        title: "Добавлен в корзину",
        content: "<p>\u0422\u043E\u0432\u0430\u0440 <strong>".concat(product.name, "</strong> \u0414\u043E\u0431\u0430\u0432\u043B\u0435\u043D</p>")
      });
      if (this.countproduct < 1) this.countproduct = 1;else if (this.countproduct > 5) this.countproduct = 5;
      var dataAdded = {
        id: product.id,
        quantity: this.countproduct
      };
      this.addToCartuser(dataAdded).then(function () {
        _this.countproduct = 1;
        modal.showTime();
      });
    },
    DeleteOnCart: function DeleteOnCart(product) {
      this.deleteOnCartuser(product).then(function () {});
    }
  }, (0,vuex__WEBPACK_IMPORTED_MODULE_2__.mapActions)({
    getProducts: "product/ajaxProductForSinglePage",
    addToCartuser: "cart/addToCarts",
    deleteOnCartuser: "cart/deleteOnCarts"
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

/***/ "./resources/js/views/products_shop/pageproductid.vue":
/*!************************************************************!*\
  !*** ./resources/js/views/products_shop/pageproductid.vue ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _pageproductid_vue_vue_type_template_id_db2ff964___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pageproductid.vue?vue&type=template&id=db2ff964& */ "./resources/js/views/products_shop/pageproductid.vue?vue&type=template&id=db2ff964&");
/* harmony import */ var _pageproductid_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pageproductid.vue?vue&type=script&lang=js& */ "./resources/js/views/products_shop/pageproductid.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _pageproductid_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _pageproductid_vue_vue_type_template_id_db2ff964___WEBPACK_IMPORTED_MODULE_0__.render,
  _pageproductid_vue_vue_type_template_id_db2ff964___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/products_shop/pageproductid.vue"
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

/***/ "./resources/js/views/products_shop/pageproductid.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./resources/js/views/products_shop/pageproductid.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_pageproductid_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./pageproductid.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/products_shop/pageproductid.vue?vue&type=script&lang=js&");
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

/***/ "./resources/js/views/products_shop/pageproductid.vue?vue&type=template&id=db2ff964&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/views/products_shop/pageproductid.vue?vue&type=template&id=db2ff964& ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_pageproductid_vue_vue_type_template_id_db2ff964___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_pageproductid_vue_vue_type_template_id_db2ff964___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_pageproductid_vue_vue_type_template_id_db2ff964___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./pageproductid.vue?vue&type=template&id=db2ff964& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/products_shop/pageproductid.vue?vue&type=template&id=db2ff964&");


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
    { staticClass: "products_buy" },
    _vm._l(_vm.getProductsNew, function (productdata) {
      return _c("div", { key: productdata.id, staticClass: "goods_wrapper" }, [
        _c(
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
                      catalog: productdata.name_en,
                      product: productdata.name_url,
                    },
                  },
                },
              },
              [
                _c("img", {
                  attrs: {
                    src: productdata.image_name,
                    width: "180",
                    height: "180",
                  },
                }),
                _vm._v(" "),
                _c("span", { staticClass: "name" }, [
                  _vm._v(_vm._s(productdata.name)),
                ]),
              ]
            ),
            _vm._v(" "),
            _c("div", { staticClass: "price" }, [
              _vm._v("\n        " + _vm._s(productdata.price) + "\n        "),
              _c("span", { staticClass: "rouble" }, [_vm._v("₽")]),
            ]),
            _vm._v(" "),
            _c("form", [
              _c(
                "a",
                {
                  staticClass: "buy",
                  attrs: {
                    id: _vm.begincart.find(function (id) {
                      return id.id == productdata.id
                    })
                      ? "selected"
                      : "noselected",
                    href: "#",
                  },
                  on: {
                    click: function ($event) {
                      $event.preventDefault()
                      return _vm.submit(productdata)
                    },
                  },
                },
                [
                  _c("i", {
                    class: _vm.begincart.find(function (id) {
                      return id.id == productdata.id
                    })
                      ? ["fa-solid", "fa-check"]
                      : ["fa-solid", "fa-basket-shopping"],
                  }),
                ]
              ),
            ]),
          ],
          1
        ),
      ])
    }),
    0
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/products_shop/pageproductid.vue?vue&type=template&id=db2ff964&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/products_shop/pageproductid.vue?vue&type=template&id=db2ff964& ***!
  \**********************************************************************************************************************************************************************************************************************************/
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
                    _vm._v(_vm._s(product.price * _vm.countproduct) + " ₽"),
                  ]),
                  _vm._v(" "),
                  _vm.begincart.find(function (id) {
                    return id.id == product.id
                  })
                    ? _c("span", [
                        _vm._v(
                          "\n                (В корзине " +
                            _vm._s(
                              _vm.begincart.find(function (item) {
                                return item.id == product.id
                              }).quantity
                            ) +
                            " шт.)\n            "
                        ),
                      ])
                    : _vm._e(),
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "buttons" }, [
                  !_vm.begincart.find(function (id) {
                    return id.id == product.id
                  })
                    ? _c("div", { staticClass: "qt" }, [
                        _c(
                          "button",
                          {
                            staticClass: "decr",
                            attrs: { disabled: _vm.countproduct == 1 },
                            on: {
                              click: function ($event) {
                                $event.preventDefault()
                                return _vm.btnminus.apply(null, arguments)
                              },
                            },
                          },
                          [_vm._v("\n                –\n              ")]
                        ),
                        _vm._v(" "),
                        _c("p", [_vm._v(_vm._s(_vm.countproduct))]),
                        _vm._v(" "),
                        _c(
                          "button",
                          {
                            staticClass: "incr",
                            attrs: { disabled: _vm.countproduct == 5 },
                            on: {
                              click: function ($event) {
                                $event.preventDefault()
                                return _vm.btnplus.apply(null, arguments)
                              },
                            },
                          },
                          [_vm._v("\n                +\n              ")]
                        ),
                      ])
                    : _vm._e(),
                  _vm._v(" "),
                  _c(
                    "form",
                    {
                      on: {
                        submit: function ($event) {
                          $event.preventDefault()
                          return _vm.submit(product)
                        },
                      },
                    },
                    [
                      _c("div", { staticClass: "buy_btn_cont" }, [
                        _c("input", {
                          attrs: { type: "submit" },
                          domProps: {
                            value: _vm.begincart.find(function (id) {
                              return id.id == product.id
                            })
                              ? "Удалить"
                              : "Купить",
                          },
                        }),
                      ]),
                    ]
                  ),
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
          _c("News", { attrs: { getProductsNew: _vm.getProduct.other } }),
        ],
        1
      ),
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);