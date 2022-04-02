"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_user_views_registrationANDSign_confirmemail_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/user/views/registrationANDSign/confirmemail.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/user/views/registrationANDSign/confirmemail.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../router */ "./resources/js/user/router.js");
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


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  created: function created() {
    var _this = this;

    this.verforchange(this.$route.params.verf)["catch"](function () {
      _router__WEBPACK_IMPORTED_MODULE_1__["default"].replace({
        name: 'PageNotFound',
        params: {
          pathMatch: ['registration', _this.$route.params.verf]
        }
      });
    });
  },
  data: function data() {
    return {
      errors: "",
      form: {
        password: "",
        password2: ""
      },
      status: {
        message: null,
        action: null,
        errors: null
      }
    };
  },
  methods: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapActions)({
    verforchange: "auth/confirmemail",
    changepassword: "auth/changepassword"
  })), {}, {
    submit: function submit() {
      if (this.form.password == this.form.password2 && this.form.password != "") {
        this.errors = "";
        this.changepassword({
          'password': this.form.password,
          'email': this.getStatus.message
        });
      } else {
        this.errors = "Поля не заполнены или не соответствуют друг другу";
      }
    }
  }),
  computed: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapGetters)({
    getStatus: "auth/status"
  })), {}, {
    passwords2: function passwords2() {
      return this.form.password2;
    }
  }),
  watch: {
    getStatus: function getStatus(news) {
      this.status = news;
    },
    passwords2: function passwords2() {
      if (this.form.password != this.form.password2) this.errors = "Пароли не совпадают";else if (this.form.password == this.form.password2) this.errors = "";
    }
  }
});

/***/ }),

/***/ "./resources/js/user/views/registrationANDSign/confirmemail.vue":
/*!**********************************************************************!*\
  !*** ./resources/js/user/views/registrationANDSign/confirmemail.vue ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _confirmemail_vue_vue_type_template_id_b4160432___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./confirmemail.vue?vue&type=template&id=b4160432& */ "./resources/js/user/views/registrationANDSign/confirmemail.vue?vue&type=template&id=b4160432&");
/* harmony import */ var _confirmemail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./confirmemail.vue?vue&type=script&lang=js& */ "./resources/js/user/views/registrationANDSign/confirmemail.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _confirmemail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _confirmemail_vue_vue_type_template_id_b4160432___WEBPACK_IMPORTED_MODULE_0__.render,
  _confirmemail_vue_vue_type_template_id_b4160432___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/user/views/registrationANDSign/confirmemail.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/user/views/registrationANDSign/confirmemail.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/user/views/registrationANDSign/confirmemail.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_confirmemail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./confirmemail.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/user/views/registrationANDSign/confirmemail.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_confirmemail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/user/views/registrationANDSign/confirmemail.vue?vue&type=template&id=b4160432&":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/user/views/registrationANDSign/confirmemail.vue?vue&type=template&id=b4160432& ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_confirmemail_vue_vue_type_template_id_b4160432___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_confirmemail_vue_vue_type_template_id_b4160432___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_confirmemail_vue_vue_type_template_id_b4160432___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./confirmemail.vue?vue&type=template&id=b4160432& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/user/views/registrationANDSign/confirmemail.vue?vue&type=template&id=b4160432&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/user/views/registrationANDSign/confirmemail.vue?vue&type=template&id=b4160432&":
/*!********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/user/views/registrationANDSign/confirmemail.vue?vue&type=template&id=b4160432& ***!
  \********************************************************************************************************************************************************************************************************************************************/
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
    this.status.action == 2
      ? _c("div", { staticClass: "confirm_email" }, [
          _c("h1", [_vm._v("Подтверждение аккаунта")]),
          _vm._v(" "),
          _c("p", [_vm._v("Ваша учетная запись подтверждена!")]),
          _vm._v(" "),
          _c("br"),
          _vm._v(" "),
          _c("p", [_vm._v("Теперь вы можете войти в свою учетную запись")]),
        ])
      : _vm._e(),
    _vm._v(" "),
    this.status.action == 1
      ? _c("div", { staticClass: "change_password" }, [
          _c("h1", [_vm._v("Смена пароля")]),
          _vm._v(" "),
          _c(
            "form",
            {
              staticClass: "forms",
              on: {
                submit: function ($event) {
                  $event.preventDefault()
                  return _vm.submit.apply(null, arguments)
                },
              },
            },
            [
              _c("div", { staticClass: "item" }, [
                _c("div", { staticClass: "title" }, [_vm._v("Пароль")]),
                _vm._v(" "),
                _c("div", { staticClass: "input" }, [
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.form.password,
                        expression: "form.password",
                      },
                    ],
                    attrs: { type: "password", autocomplete: "off" },
                    domProps: { value: _vm.form.password },
                    on: {
                      input: function ($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.form, "password", $event.target.value)
                      },
                    },
                  }),
                ]),
                _vm._v(" "),
                _vm._m(0),
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "item" }, [
                _c("div", { staticClass: "title" }, [
                  _vm._v("Повторите пароль"),
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "input" }, [
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.form.password2,
                        expression: "form.password2",
                      },
                    ],
                    attrs: { type: "password", autocomplete: "off" },
                    domProps: { value: _vm.form.password2 },
                    on: {
                      input: function ($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.form, "password2", $event.target.value)
                      },
                    },
                  }),
                ]),
                _vm._v(" "),
                _vm._m(1),
                _vm._v(" "),
                _c("div", { staticClass: "hinterror" }, [
                  _c("div", [_vm._v(_vm._s(this.errors))]),
                ]),
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "devider" }),
              _vm._v(" "),
              _c("div", { staticClass: "item" }, [
                _c("input", {
                  attrs: { type: "submit", value: "Зарегистрироваться" },
                }),
                _vm._v(" "),
                _c("div", { staticClass: "hinterror" }, [
                  this.status.errors != null
                    ? _c("div", [_vm._v(_vm._s(this.status.errors))])
                    : _vm._e(),
                ]),
              ]),
            ]
          ),
        ])
      : _vm._e(),
    _vm._v(" "),
    this.status.action == 3
      ? _c("div", { staticClass: "change_password" }, [
          _c("h1", [_vm._v("Смена пароля")]),
          _vm._v(" "),
          _c("p", [
            _vm._v(
              "Ваш пароль изменен, теперь вы можете зайти в учетную запись под новым паролем"
            ),
          ]),
        ])
      : _vm._e(),
  ])
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "hint" }, [
      _c("div", [_vm._v("Пожалуйста, запомните ваш пароль")]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "hint" }, [_c("div")])
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