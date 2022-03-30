"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_registration_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/registration.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/registration.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************/
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      errors: "",
      form: {
        email: "",
        phone: "",
        name: "",
        password: ""
      }
    };
  },
  methods: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapActions)({
    RegistrationUser: 'auth/regist'
  })), {}, {
    submit: function submit() {
      var _this = this;

      this.RegistrationUser(this.form).then(function () {
        console.log("good");
      })["catch"](function (e) {
        _this.errors = e.response.data;
      });
    }
  })
});

/***/ }),

/***/ "./resources/js/views/registration.vue":
/*!*********************************************!*\
  !*** ./resources/js/views/registration.vue ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _registration_vue_vue_type_template_id_435888b8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./registration.vue?vue&type=template&id=435888b8& */ "./resources/js/views/registration.vue?vue&type=template&id=435888b8&");
/* harmony import */ var _registration_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./registration.vue?vue&type=script&lang=js& */ "./resources/js/views/registration.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _registration_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _registration_vue_vue_type_template_id_435888b8___WEBPACK_IMPORTED_MODULE_0__.render,
  _registration_vue_vue_type_template_id_435888b8___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/registration.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/registration.vue?vue&type=script&lang=js&":
/*!**********************************************************************!*\
  !*** ./resources/js/views/registration.vue?vue&type=script&lang=js& ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_registration_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./registration.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/registration.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_registration_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/registration.vue?vue&type=template&id=435888b8&":
/*!****************************************************************************!*\
  !*** ./resources/js/views/registration.vue?vue&type=template&id=435888b8& ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_registration_vue_vue_type_template_id_435888b8___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_registration_vue_vue_type_template_id_435888b8___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_registration_vue_vue_type_template_id_435888b8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./registration.vue?vue&type=template&id=435888b8& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/registration.vue?vue&type=template&id=435888b8&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/registration.vue?vue&type=template&id=435888b8&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/registration.vue?vue&type=template&id=435888b8& ***!
  \*******************************************************************************************************************************************************************************************************************/
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
    _c("h1", [_vm._v("Регистрация нового пользователя")]),
    _vm._v(" "),
    _c("div", { staticClass: "devider" }),
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
        _c(
          "div",
          [
            _vm._v("Зарегистрированы на сайте? "),
            _c("router-link", { attrs: { to: "/auth" } }, [_vm._v("Войдите")]),
            _vm._v("."),
          ],
          1
        ),
        _vm._v(" "),
        _c("div", { staticClass: "item" }, [
          _c("div", { staticClass: "title" }, [_vm._v("E-mail")]),
          _vm._v(" "),
          _c("div", { staticClass: "input" }, [
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.form.email,
                  expression: "form.email",
                },
              ],
              attrs: { type: "email" },
              domProps: { value: _vm.form.email },
              on: {
                input: function ($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.$set(_vm.form, "email", $event.target.value)
                },
              },
            }),
          ]),
          _vm._v(" "),
          _vm._m(0),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "hinterror" },
            _vm._l(this.errors.email, function (error) {
              return _c("div", { key: error.id }, [_vm._v(_vm._s(error))])
            }),
            0
          ),
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "item" }, [
          _c("div", { staticClass: "title" }, [_vm._v("Номер телефона")]),
          _vm._v(" "),
          _c("div", { staticClass: "input" }, [
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.form.phone,
                  expression: "form.phone",
                },
              ],
              attrs: { type: "tel" },
              domProps: { value: _vm.form.phone },
              on: {
                input: function ($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.$set(_vm.form, "phone", $event.target.value)
                },
              },
            }),
          ]),
          _vm._v(" "),
          _vm._m(1),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "hinterror" },
            _vm._l(this.errors.phone, function (error) {
              return _c("div", { key: error.id }, [_vm._v(_vm._s(error) + " ")])
            }),
            0
          ),
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "item" }, [
          _c("div", { staticClass: "title" }, [_vm._v("Имя")]),
          _vm._v(" "),
          _c("div", { staticClass: "input" }, [
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.form.name,
                  expression: "form.name",
                },
              ],
              attrs: { type: "text" },
              domProps: { value: _vm.form.name },
              on: {
                input: function ($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.$set(_vm.form, "name", $event.target.value)
                },
              },
            }),
          ]),
          _vm._v(" "),
          _vm._m(2),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "hinterror" },
            _vm._l(this.errors.name, function (error) {
              return _c("div", { key: error.id }, [_vm._v(_vm._s(error))])
            }),
            0
          ),
        ]),
        _vm._v(" "),
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
          _vm._m(3),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "hinterror" },
            _vm._l(this.errors.password, function (error) {
              return _c("div", { key: error.id }, [_vm._v(_vm._s(error))])
            }),
            0
          ),
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "devider" }),
        _vm._v(" "),
        _vm._m(4),
      ]
    ),
  ])
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "hint" }, [
      _c("div", [
        _vm._v(
          "На указанный адрес будет выслано письмо для подтверждения регистрации"
        ),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "hint" }, [
      _c("div", [_vm._v("Пожалуйста, укажите ваш действующий номер")]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "hint" }, [_c("div")])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "hint" }, [_c("div")])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "item" }, [
      _c("input", { attrs: { type: "submit", value: "Зарегистрироваться" } }),
    ])
  },
]
render._withStripped = true



/***/ })

}]);