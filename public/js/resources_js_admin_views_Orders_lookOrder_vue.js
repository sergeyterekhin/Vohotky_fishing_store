"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_admin_views_Orders_lookOrder_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/admin/views/Orders/lookOrder.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/admin/views/Orders/lookOrder.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
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
//
//
//
//
//
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
      TabsFlag: 1,
      order_status: null,
      loader: false
    };
  },
  mounted: function mounted() {
    var _this = this;

    this.RequestOrder(this.$route.params.id).then(function () {
      return _this.loader = true;
    });
  },
  computed: _objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapGetters)({
    GetOrder: 'order/getOrder'
  })),
  methods: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapActions)({
    RequestOrder: 'order/OneOrder',
    SaveCO: 'order/updateOrder'
  })), {}, {
    changeCategory: function changeCategory(value) {
      this.order_status = value;
    },
    SaveChanges: function SaveChanges() {
      var _this2 = this;

      this.loader = false;
      this.TabsFlag = 1;
      this.SaveCO({
        code: this.$route.params.id,
        status: this.order_status
      }).then(function () {
        _this2.loader = true;
        M.toast({
          html: 'Статус заказа изменён!',
          classes: 'rounded'
        });
      });
    },
    ChangeTabs: function ChangeTabs(num) {
      this.order_status = null;
      var st = document.querySelector("#vi" + this.TabsFlag);
      st.classList.remove("active");
      st = document.querySelector("#vi" + num);
      st.classList.add("active");
      this.TabsFlag = num;
    }
  })
});

/***/ }),

/***/ "./resources/js/admin/views/Orders/lookOrder.vue":
/*!*******************************************************!*\
  !*** ./resources/js/admin/views/Orders/lookOrder.vue ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lookOrder_vue_vue_type_template_id_42695e24___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lookOrder.vue?vue&type=template&id=42695e24& */ "./resources/js/admin/views/Orders/lookOrder.vue?vue&type=template&id=42695e24&");
/* harmony import */ var _lookOrder_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lookOrder.vue?vue&type=script&lang=js& */ "./resources/js/admin/views/Orders/lookOrder.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _lookOrder_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _lookOrder_vue_vue_type_template_id_42695e24___WEBPACK_IMPORTED_MODULE_0__.render,
  _lookOrder_vue_vue_type_template_id_42695e24___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/admin/views/Orders/lookOrder.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/admin/views/Orders/lookOrder.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/admin/views/Orders/lookOrder.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_lookOrder_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./lookOrder.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/admin/views/Orders/lookOrder.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_lookOrder_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/admin/views/Orders/lookOrder.vue?vue&type=template&id=42695e24&":
/*!**************************************************************************************!*\
  !*** ./resources/js/admin/views/Orders/lookOrder.vue?vue&type=template&id=42695e24& ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_lookOrder_vue_vue_type_template_id_42695e24___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_lookOrder_vue_vue_type_template_id_42695e24___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_lookOrder_vue_vue_type_template_id_42695e24___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./lookOrder.vue?vue&type=template&id=42695e24& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/admin/views/Orders/lookOrder.vue?vue&type=template&id=42695e24&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/admin/views/Orders/lookOrder.vue?vue&type=template&id=42695e24&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/admin/views/Orders/lookOrder.vue?vue&type=template&id=42695e24& ***!
  \*****************************************************************************************************************************************************************************************************************************/
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
  return _c("main", [
    _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col s12" }, [
        _c("div", { staticClass: "card " }, [
          _c("div", { staticClass: "card-content center" }, [
            _c("span", { staticClass: "card-title" }, [
              _vm._v("Данные заказа"),
            ]),
            _vm._v(" "),
            _c("p", [_vm._v("Заказ " + _vm._s(this.$route.params.id))]),
          ]),
          _vm._v(" "),
          _vm.loader == true || _vm.loader == null
            ? _c("div", { attrs: { id: "content_table" } }, [
                _c("div", { staticClass: "card-action" }, [
                  _c(
                    "a",
                    {
                      staticClass: "vkladka active",
                      attrs: { id: "vi1", href: "" },
                      on: {
                        click: function ($event) {
                          $event.preventDefault()
                          return _vm.ChangeTabs(1)
                        },
                      },
                    },
                    [_vm._v("Cодержимое заказа")]
                  ),
                  _vm._v(" "),
                  _c(
                    "a",
                    {
                      staticClass: "vkladka",
                      attrs: { id: "vi2", href: "" },
                      on: {
                        click: function ($event) {
                          $event.preventDefault()
                          return _vm.ChangeTabs(2)
                        },
                      },
                    },
                    [_vm._v("Информация по заказу")]
                  ),
                  _vm._v(" "),
                  _c(
                    "a",
                    {
                      staticClass: "vkladka",
                      attrs: { id: "vi3", href: "" },
                      on: {
                        click: function ($event) {
                          $event.preventDefault()
                          return _vm.ChangeTabs(3)
                        },
                      },
                    },
                    [_vm._v("Сменить статус заказа")]
                  ),
                ]),
                _vm._v(" "),
                _vm.TabsFlag == 1
                  ? _c("div", { attrs: { id: "test4" } }, [
                      _c("div", { staticClass: "card-action" }, [
                        _c(
                          "table",
                          { staticClass: "highlight" },
                          [
                            _vm._m(0),
                            _vm._v(" "),
                            _vm._l(_vm.GetOrder.products, function (dataOrder) {
                              return _c("tr", { key: dataOrder.key }, [
                                _c("td", [_vm._v(_vm._s(dataOrder.key))]),
                                _vm._v(" "),
                                _c("td", [
                                  _c("img", {
                                    attrs: {
                                      src:
                                        dataOrder.image_name == null
                                          ? "/storage/products/none.png"
                                          : "/storage/products/" +
                                            dataOrder.image_name,
                                      height: "100px",
                                      width: "100px",
                                      alt: "",
                                    },
                                  }),
                                ]),
                                _vm._v(" "),
                                _c("td", [_vm._v(_vm._s(dataOrder.name))]),
                                _vm._v(" "),
                                _c("td", [
                                  _vm._v(_vm._s(dataOrder.price) + " ₽"),
                                ]),
                                _vm._v(" "),
                                _c("td", [
                                  _vm._v(_vm._s(dataOrder.quantity) + " шт."),
                                ]),
                                _vm._v(" "),
                                _c("td", [
                                  _vm._v(
                                    _vm._s(
                                      dataOrder.quantity * dataOrder.price
                                    ) + " ₽"
                                  ),
                                ]),
                              ])
                            }),
                          ],
                          2
                        ),
                        _vm._v(" "),
                        _c("p", [
                          _vm._v("Итоговая стоимость: "),
                          _c("b", { staticStyle: { color: "green" } }, [
                            _vm._v(_vm._s(_vm.GetOrder.total_price) + " ₽ "),
                          ]),
                        ]),
                      ]),
                    ])
                  : _vm.TabsFlag == 2
                  ? _c("div", { attrs: { id: "test5" } }, [
                      _c("div", { staticClass: "card-action" }, [
                        _c("p", [
                          _c("b", [_vm._v("Имя пользователя:")]),
                          _vm._v(" " + _vm._s(_vm.GetOrder.user.name)),
                        ]),
                        _vm._v(" "),
                        _c("p", [
                          _c("b", [_vm._v("Почта пользователя:")]),
                          _vm._v(" " + _vm._s(_vm.GetOrder.user.email)),
                        ]),
                        _vm._v(" "),
                        _c("p", [
                          _c("b", [_vm._v("Номер телефона:")]),
                          _vm._v(" " + _vm._s(_vm.GetOrder.user.phone)),
                        ]),
                        _vm._v(" "),
                        _c("p", [
                          _c("b", [_vm._v("Код заказа:")]),
                          _vm._v(" " + _vm._s(_vm.GetOrder.code)),
                        ]),
                        _vm._v(" "),
                        _c("p", [
                          _c("b", [_vm._v("Дата заказа:")]),
                          _vm._v(
                            " " +
                              _vm._s(
                                Date(_vm.GetOrder.created_at).toLocaleString()
                              )
                          ),
                        ]),
                        _vm._v(" "),
                        _c("p", [
                          _c("b", [_vm._v("Итоговая стоимость:")]),
                          _vm._v(" "),
                          _c("b", { staticStyle: { color: "#9c9e1e" } }, [
                            _vm._v(_vm._s(_vm.GetOrder.total_price) + "  ₽"),
                          ]),
                        ]),
                        _vm._v(" "),
                        _c("p", [
                          _c("b", [_vm._v("Статус оплаты:")]),
                          _vm._v(" "),
                          _c(
                            "b",
                            {
                              style:
                                _vm.GetOrder.status_payment == "Не оплачено"
                                  ? "color:red"
                                  : "color:green",
                            },
                            [_vm._v(_vm._s(_vm.GetOrder.status_payment))]
                          ),
                        ]),
                        _vm._v(" "),
                        _c("p", [
                          _c("b", [_vm._v("Статус заказа:")]),
                          _vm._v(" "),
                          _c(
                            "b",
                            {
                              style:
                                _vm.GetOrder.status_order == 3
                                  ? "color:red"
                                  : _vm.GetOrder.status_order == 2
                                  ? "color:orange"
                                  : "color:green",
                            },
                            [_vm._v(_vm._s(_vm.GetOrder.status_order_ru))]
                          ),
                        ]),
                      ]),
                    ])
                  : _vm.TabsFlag == 3
                  ? _c("div", { attrs: { id: "test6" } }, [
                      _c("div", { staticClass: "card-action" }, [
                        _c("form", { attrs: { action: "" } }, [
                          _c("p", [
                            _c("label", [
                              _c("input", {
                                attrs: { name: "group1", type: "radio" },
                                domProps: {
                                  checked: _vm.GetOrder.status_order == 1,
                                },
                                on: {
                                  click: function ($event) {
                                    return _vm.changeCategory(1)
                                  },
                                },
                              }),
                              _c("span", [_vm._v("Процесс комплектации")]),
                            ]),
                          ]),
                          _vm._v(" "),
                          _c("p", [
                            _c("label", [
                              _c("input", {
                                attrs: { name: "group1", type: "radio" },
                                domProps: {
                                  checked: _vm.GetOrder.status_order == 2,
                                },
                                on: {
                                  click: function ($event) {
                                    return _vm.changeCategory(2)
                                  },
                                },
                              }),
                              _c("span", [_vm._v("Ожидает выдачи")]),
                            ]),
                          ]),
                          _vm._v(" "),
                          _c("p", [
                            _c("label", [
                              _c("input", {
                                attrs: { name: "group1", type: "radio" },
                                domProps: {
                                  checked: _vm.GetOrder.status_order == 3,
                                },
                                on: {
                                  click: function ($event) {
                                    return _vm.changeCategory(3)
                                  },
                                },
                              }),
                              _c("span", [_vm._v("Заказ выдан")]),
                            ]),
                          ]),
                        ]),
                        _vm._v(" "),
                        _c(
                          "a",
                          {
                            staticClass: "light-blue darken-3 btn-large",
                            style:
                              _vm.GetOrder.status_order == _vm.order_status ||
                              _vm.order_status == null
                                ? "display:none"
                                : "display:inline-block",
                            attrs: { id: "change_status_order" },
                            on: {
                              click: function ($event) {
                                $event.preventDefault()
                                return _vm.SaveChanges.apply(null, arguments)
                              },
                            },
                          },
                          [_vm._v("Сохранить")]
                        ),
                      ]),
                    ])
                  : _vm._e(),
              ])
            : _c("div", [_vm._m(1)]),
        ]),
      ]),
    ]),
  ])
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", [_vm._v("№")]),
        _vm._v(" "),
        _c("th", [_vm._v("Фотография")]),
        _vm._v(" "),
        _c("th", [_vm._v("Название")]),
        _vm._v(" "),
        _c("th", [_vm._v("Цена за шт.")]),
        _vm._v(" "),
        _c("th", [_vm._v("Колличество")]),
        _vm._v(" "),
        _c("th", [_vm._v("Итоговая сумма")]),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "progress" }, [
      _c("div", { staticClass: "indeterminate" }),
    ])
  },
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js":
/*!********************************************************************!*\
  !*** ./node_modules/vue-loader/lib/runtime/componentNormalizer.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ normalizeComponent)
/* harmony export */ });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
        injectStyles.call(
          this,
          (options.functional ? this.parent : this).$root.$options.shadowRoot
        )
      }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ })

}]);