"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_products_vue"],{

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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/product_block/pagination.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/product_block/pagination.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************************/
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "Vpagination",
  props: ["page", "listpage"],
  methods: {
    selectpage: function selectpage(page) {
      switch (page) {
        case "»":
          page = Number(this.page) + 1;
          break;

        case "«":
          page = Number(this.page) - 1;
          break;
      }

      this.$emit("changepage", page);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/product_block/sort.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/product_block/sort.vue?vue&type=script&lang=js& ***!
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      sortType: this.sortselect
    };
  },
  name: "Vsort",
  props: ['sortOptions', 'sortselect'],
  methods: {
    OrderbySort: function OrderbySort() {
      this.$emit('sort', this.sortType);
    }
  },
  watch: {
    $route: function $route(old, news) {
      if (old.params.catalog != news.params.catalog) this.sortType = "sort";
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/products.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/products.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_product_block_News_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/product_block/News.vue */ "./resources/js/components/product_block/News.vue");
/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../router */ "./resources/js/router.js");
/* harmony import */ var _components_product_block_sort_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/product_block/sort.vue */ "./resources/js/components/product_block/sort.vue");
/* harmony import */ var _components_product_block_pagination_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/product_block/pagination.vue */ "./resources/js/components/product_block/pagination.vue");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
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





/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "Products",
  components: {
    News: _components_product_block_News_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    Vsort: _components_product_block_sort_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    Vpagination: _components_product_block_pagination_vue__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  data: function data() {
    return {
      sortType: "sort",
      page: 1,
      queryparams: "",
      sortOptions: [{
        id: 0,
        text: 'по умолчанию',
        value: "sort"
      }, {
        id: 1,
        text: 'по наименованию ▲',
        value: 'nameup'
      }, {
        id: 2,
        text: 'по наименованию ▼',
        value: 'namedown'
      }, {
        id: 3,
        text: 'по цене ▲',
        value: 'priceup'
      }, {
        id: 4,
        text: 'по цене ▼',
        value: 'pricedown'
      }]
    };
  },
  mounted: function mounted() {
    this.actionproduct();
  },
  methods: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_4__.mapActions)({
    ajaxproduct: 'product/ajaxProductsbyCategoryFromDB'
  })), {}, {
    sortBy: function sortBy(sort) {
      this.page = 1;
      this.sortType = sort;
      this.queryparams = '?sort=' + this.sortType;
    },
    pageBy: function pageBy(page) {
      this.page = page;
      if (this.sortType == 'sort') this.queryparams = '?page=' + this.page;else this.queryparams = '?sort=' + this.sortType + '&page=' + this.page;
    },
    actionproduct: function actionproduct() {
      var catalog = this.$route.params.catalog; //Если на страницу зашли с квери параметрами

      if (Object.keys(this.$route.query).length != 0) {
        catalog = catalog + "?";

        if ("sort" in this.$route.query) {
          this.sortType = this.$route.query.sort;
          catalog = catalog + "sort=" + this.sortType + "&";
        }

        if ("page" in this.$route.query) {
          this.page = this.$route.query.page;
          catalog = catalog + "page=" + this.$route.query.page;
        }
      } //=======================================


      this.ajaxproduct(catalog);
    }
  }),
  computed: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_4__.mapGetters)({
    getProductsbyCategory: 'product/getProductsbyCategory'
  })), {}, {
    thistimeurl: function thistimeurl() {
      return this.$route.params.catalog;
    },
    thisurlquery: function thisurlquery() {
      return this.$route.query;
    }
  }),
  watch: {
    thistimeurl: function thistimeurl() {
      this.sortType = "sort";
      this.page = "1";
      this.queryparams = "";
      this.actionproduct();
    },
    thisurlquery: function thisurlquery(news) {
      if (!Object.keys(news).length == 0) {
        this.actionproduct();
      }
    },
    queryparams: function queryparams(news) {
      if (news != "") _router__WEBPACK_IMPORTED_MODULE_1__["default"].push('/catalog/' + this.$route.params.catalog + this.queryparams);
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

/***/ "./resources/js/components/product_block/pagination.vue":
/*!**************************************************************!*\
  !*** ./resources/js/components/product_block/pagination.vue ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _pagination_vue_vue_type_template_id_96795e12___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pagination.vue?vue&type=template&id=96795e12& */ "./resources/js/components/product_block/pagination.vue?vue&type=template&id=96795e12&");
/* harmony import */ var _pagination_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pagination.vue?vue&type=script&lang=js& */ "./resources/js/components/product_block/pagination.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _pagination_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _pagination_vue_vue_type_template_id_96795e12___WEBPACK_IMPORTED_MODULE_0__.render,
  _pagination_vue_vue_type_template_id_96795e12___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/product_block/pagination.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/product_block/sort.vue":
/*!********************************************************!*\
  !*** ./resources/js/components/product_block/sort.vue ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _sort_vue_vue_type_template_id_2bf6368a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sort.vue?vue&type=template&id=2bf6368a& */ "./resources/js/components/product_block/sort.vue?vue&type=template&id=2bf6368a&");
/* harmony import */ var _sort_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sort.vue?vue&type=script&lang=js& */ "./resources/js/components/product_block/sort.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _sort_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _sort_vue_vue_type_template_id_2bf6368a___WEBPACK_IMPORTED_MODULE_0__.render,
  _sort_vue_vue_type_template_id_2bf6368a___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/product_block/sort.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/products.vue":
/*!*****************************************!*\
  !*** ./resources/js/views/products.vue ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _products_vue_vue_type_template_id_7ed12f63___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./products.vue?vue&type=template&id=7ed12f63& */ "./resources/js/views/products.vue?vue&type=template&id=7ed12f63&");
/* harmony import */ var _products_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./products.vue?vue&type=script&lang=js& */ "./resources/js/views/products.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _products_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _products_vue_vue_type_template_id_7ed12f63___WEBPACK_IMPORTED_MODULE_0__.render,
  _products_vue_vue_type_template_id_7ed12f63___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/products.vue"
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

/***/ "./resources/js/components/product_block/pagination.vue?vue&type=script&lang=js&":
/*!***************************************************************************************!*\
  !*** ./resources/js/components/product_block/pagination.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_pagination_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./pagination.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/product_block/pagination.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_pagination_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/product_block/sort.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/js/components/product_block/sort.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_sort_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./sort.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/product_block/sort.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_sort_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/products.vue?vue&type=script&lang=js&":
/*!******************************************************************!*\
  !*** ./resources/js/views/products.vue?vue&type=script&lang=js& ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_products_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./products.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/products.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_products_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

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

/***/ "./resources/js/components/product_block/pagination.vue?vue&type=template&id=96795e12&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/components/product_block/pagination.vue?vue&type=template&id=96795e12& ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_pagination_vue_vue_type_template_id_96795e12___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_pagination_vue_vue_type_template_id_96795e12___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_pagination_vue_vue_type_template_id_96795e12___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./pagination.vue?vue&type=template&id=96795e12& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/product_block/pagination.vue?vue&type=template&id=96795e12&");


/***/ }),

/***/ "./resources/js/components/product_block/sort.vue?vue&type=template&id=2bf6368a&":
/*!***************************************************************************************!*\
  !*** ./resources/js/components/product_block/sort.vue?vue&type=template&id=2bf6368a& ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_sort_vue_vue_type_template_id_2bf6368a___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_sort_vue_vue_type_template_id_2bf6368a___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_sort_vue_vue_type_template_id_2bf6368a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./sort.vue?vue&type=template&id=2bf6368a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/product_block/sort.vue?vue&type=template&id=2bf6368a&");


/***/ }),

/***/ "./resources/js/views/products.vue?vue&type=template&id=7ed12f63&":
/*!************************************************************************!*\
  !*** ./resources/js/views/products.vue?vue&type=template&id=7ed12f63& ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_products_vue_vue_type_template_id_7ed12f63___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_products_vue_vue_type_template_id_7ed12f63___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_products_vue_vue_type_template_id_7ed12f63___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./products.vue?vue&type=template&id=7ed12f63& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/products.vue?vue&type=template&id=7ed12f63&");


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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/product_block/pagination.vue?vue&type=template&id=96795e12&":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/product_block/pagination.vue?vue&type=template&id=96795e12& ***!
  \************************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "pagination" },
    _vm._l(_vm.listpage, function (curentpage) {
      return _c(
        "button",
        {
          key: curentpage.label,
          class: { active: curentpage.label == _vm.page },
          attrs: {
            disabled: curentpage.url == null || curentpage.label == _vm.page,
          },
          on: {
            click: function ($event) {
              return _vm.selectpage(curentpage.label)
            },
          },
        },
        [_vm._v(_vm._s(curentpage.label))]
      )
    }),
    0
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/product_block/sort.vue?vue&type=template&id=2bf6368a&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/product_block/sort.vue?vue&type=template&id=2bf6368a& ***!
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
    "select",
    {
      directives: [
        {
          name: "model",
          rawName: "v-model",
          value: _vm.sortType,
          expression: "sortType",
        },
      ],
      on: {
        change: [
          function ($event) {
            var $$selectedVal = Array.prototype.filter
              .call($event.target.options, function (o) {
                return o.selected
              })
              .map(function (o) {
                var val = "_value" in o ? o._value : o.value
                return val
              })
            _vm.sortType = $event.target.multiple
              ? $$selectedVal
              : $$selectedVal[0]
          },
          function ($event) {
            return _vm.OrderbySort()
          },
        ],
      },
    },
    _vm._l(_vm.sortOptions, function (item) {
      return _c("option", { key: item.id, domProps: { value: item.value } }, [
        _vm._v(_vm._s(item.text)),
      ])
    }),
    0
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/products.vue?vue&type=template&id=7ed12f63&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/products.vue?vue&type=template&id=7ed12f63& ***!
  \***************************************************************************************************************************************************************************************************************/
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
      this.$route.params.catalog == "news"
        ? _c("h1", [_vm._v("Новинки")])
        : _vm.getProductsbyCategory.data
        ? _c("div", [
            _c("h1", [
              _vm._v(_vm._s(_vm.getProductsbyCategory.data[0].name_ru)),
            ]),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "sorting" },
              [
                _vm._v("\n                Сортировать:\n               "),
                _c("Vsort", {
                  attrs: {
                    sortOptions: _vm.sortOptions,
                    sortselect: _vm.sortType,
                  },
                  on: { sort: _vm.sortBy },
                }),
              ],
              1
            ),
          ])
        : _vm._e(),
      _vm._v(" "),
      _c(
        "section",
        { staticClass: "goods_set" },
        _vm._l(_vm.getProductsbyCategory.data, function (product) {
          return _c(
            "div",
            { key: product.id, staticClass: "goods_wrapper" },
            [_c("News", { attrs: { productdata: product } })],
            1
          )
        }),
        0
      ),
      _vm._v(" "),
      1 != _vm.getProductsbyCategory.last_page
        ? _c("Vpagination", {
            attrs: {
              listpage: _vm.getProductsbyCategory.links,
              page: this.page,
            },
            on: { changepage: _vm.pageBy },
          })
        : _vm._e(),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);