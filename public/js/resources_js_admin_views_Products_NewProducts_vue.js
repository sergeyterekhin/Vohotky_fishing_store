"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_admin_views_Products_NewProducts_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/admin/components/Edit.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/admin/components/Edit.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  props: ['edit', 'CHeader', 'Cdata', 'otherData', 'error', 'droplist', 'image_folder'],
  methods: {
    submit: function submit() {
      this.$emit("CSave");
    },
    FileAdd: function FileAdd(data_file) {
      if (this.edit) document.querySelector("#oldimage").style.display = 'none';

      if (this.$refs.file[0].files.length != 0) {
        this.otherData[data_file] = this.$refs.file[0].files[0].type;
        this.$emit("getfile", this.$refs.file[0].files[0]);
      } else this.otherData[data_file] = null;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/admin/views/Products/NewProducts.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/admin/views/Products/NewProducts.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_Edit_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/Edit.vue */ "./resources/js/admin/components/Edit.vue");
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


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    Edit: _components_Edit_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      View_data: [{
        type: 'text',
        name_ru: 'Название товара',
        name_en: 'name'
      }, {
        type: 'textarea',
        name_ru: 'Характеристики товара',
        name_en: 'slug'
      }, {
        type: 'textarea',
        name_ru: 'Описание товара',
        name_en: 'description'
      }, {
        type: 'file',
        name_ru: 'Фотография',
        name_en: 'image_name'
      }, {
        type: 'drop',
        name_ru: 'Категория',
        name_en: 'category_id'
      }, {
        type: 'number',
        name_ru: 'Цена',
        name_en: 'price'
      }],
      photo: new FormData(),
      form: {
        name: "",
        slug: "",
        description: "",
        image_name: null,
        category_id: null,
        price: ""
      },
      CHeader: {
        name: 'Добавление Товара',
        desc: "Если категория отсутствует, её следует добавить во вкладке «Категории»"
      },
      errors: {}
    };
  },
  methods: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_1__.mapActions)({
    RequestCategory: 'category/RequestAllCategory',
    RequestAdd: 'products/RequestAddProduct'
  })), {}, {
    CreateProducts: function CreateProducts() {
      var _this = this;

      this.RequestAdd([this.form, this.photo]).then(function () {
        _this.form = {
          name: "",
          slug: "",
          description: "",
          image_name: null,
          category_id: null,
          price: ""
        };
        _this.photo = new FormData();
        _this.errors = {};
        document.querySelector("#image_name").value = "";
        M.toast({
          html: 'Данные успешно добавлены!',
          classes: 'rounded'
        });
      })["catch"](function (e) {
        _this.errors = e.response.data;
      });
    },
    imageProduct: function imageProduct(file) {
      this.photo.append('file', file);
    }
  }),
  computed: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_1__.mapGetters)({
    GetCategory: 'category/getCategory'
  })), {}, {
    getPrice: function getPrice() {
      return this.form.price;
    }
  }),
  mounted: function mounted() {
    this.RequestCategory();
  },
  watch: {
    getPrice: function getPrice() {
      if (this.getPrice < 0) this.form.price = this.form.price * -1;
    }
  }
});

/***/ }),

/***/ "./resources/js/admin/components/Edit.vue":
/*!************************************************!*\
  !*** ./resources/js/admin/components/Edit.vue ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Edit_vue_vue_type_template_id_3c6b85b5___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Edit.vue?vue&type=template&id=3c6b85b5& */ "./resources/js/admin/components/Edit.vue?vue&type=template&id=3c6b85b5&");
/* harmony import */ var _Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Edit.vue?vue&type=script&lang=js& */ "./resources/js/admin/components/Edit.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Edit_vue_vue_type_template_id_3c6b85b5___WEBPACK_IMPORTED_MODULE_0__.render,
  _Edit_vue_vue_type_template_id_3c6b85b5___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/admin/components/Edit.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/admin/views/Products/NewProducts.vue":
/*!***********************************************************!*\
  !*** ./resources/js/admin/views/Products/NewProducts.vue ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _NewProducts_vue_vue_type_template_id_46f82e38___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NewProducts.vue?vue&type=template&id=46f82e38& */ "./resources/js/admin/views/Products/NewProducts.vue?vue&type=template&id=46f82e38&");
/* harmony import */ var _NewProducts_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NewProducts.vue?vue&type=script&lang=js& */ "./resources/js/admin/views/Products/NewProducts.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _NewProducts_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _NewProducts_vue_vue_type_template_id_46f82e38___WEBPACK_IMPORTED_MODULE_0__.render,
  _NewProducts_vue_vue_type_template_id_46f82e38___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/admin/views/Products/NewProducts.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/admin/components/Edit.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./resources/js/admin/components/Edit.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Edit.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/admin/components/Edit.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/admin/views/Products/NewProducts.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./resources/js/admin/views/Products/NewProducts.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NewProducts_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./NewProducts.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/admin/views/Products/NewProducts.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NewProducts_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/admin/components/Edit.vue?vue&type=template&id=3c6b85b5&":
/*!*******************************************************************************!*\
  !*** ./resources/js/admin/components/Edit.vue?vue&type=template&id=3c6b85b5& ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_template_id_3c6b85b5___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_template_id_3c6b85b5___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_template_id_3c6b85b5___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Edit.vue?vue&type=template&id=3c6b85b5& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/admin/components/Edit.vue?vue&type=template&id=3c6b85b5&");


/***/ }),

/***/ "./resources/js/admin/views/Products/NewProducts.vue?vue&type=template&id=46f82e38&":
/*!******************************************************************************************!*\
  !*** ./resources/js/admin/views/Products/NewProducts.vue?vue&type=template&id=46f82e38& ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NewProducts_vue_vue_type_template_id_46f82e38___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NewProducts_vue_vue_type_template_id_46f82e38___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NewProducts_vue_vue_type_template_id_46f82e38___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./NewProducts.vue?vue&type=template&id=46f82e38& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/admin/views/Products/NewProducts.vue?vue&type=template&id=46f82e38&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/admin/components/Edit.vue?vue&type=template&id=3c6b85b5&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/admin/components/Edit.vue?vue&type=template&id=3c6b85b5& ***!
  \**********************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "row" }, [
    _c(
      "form",
      {
        staticClass: "col s12",
        on: {
          submit: function ($event) {
            $event.preventDefault()
            return _vm.submit.apply(null, arguments)
          },
        },
      },
      [
        _c("div", { staticClass: "card " }, [
          _c("div", { staticClass: "card-content center" }, [
            _c("span", { staticClass: "card-title" }, [
              _vm._v(_vm._s(_vm.CHeader.name)),
            ]),
            _vm._v(" "),
            _c("p", [_vm._v(_vm._s(_vm.CHeader.desc))]),
          ]),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "card-action" },
            [
              _vm._l(_vm.Cdata, function (inputData) {
                return _c("div", { key: inputData.id, staticClass: "row" }, [
                  inputData.type == "text" ||
                  inputData.type == "email" ||
                  inputData.type == "number"
                    ? _c("div", { staticClass: "input-field col s12" }, [
                        inputData.type === "checkbox"
                          ? _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.otherData[inputData.name_en],
                                  expression: "otherData[inputData.name_en]",
                                },
                              ],
                              class:
                                _vm.error[inputData.name_en] != null
                                  ? ["invalid"]
                                  : [],
                              attrs: {
                                disabled: inputData.disabled,
                                id: inputData.name_en,
                                type: "checkbox",
                              },
                              domProps: {
                                checked: Array.isArray(
                                  _vm.otherData[inputData.name_en]
                                )
                                  ? _vm._i(
                                      _vm.otherData[inputData.name_en],
                                      null
                                    ) > -1
                                  : _vm.otherData[inputData.name_en],
                              },
                              on: {
                                change: function ($event) {
                                  var $$a = _vm.otherData[inputData.name_en],
                                    $$el = $event.target,
                                    $$c = $$el.checked ? true : false
                                  if (Array.isArray($$a)) {
                                    var $$v = null,
                                      $$i = _vm._i($$a, $$v)
                                    if ($$el.checked) {
                                      $$i < 0 &&
                                        _vm.$set(
                                          _vm.otherData,
                                          inputData.name_en,
                                          $$a.concat([$$v])
                                        )
                                    } else {
                                      $$i > -1 &&
                                        _vm.$set(
                                          _vm.otherData,
                                          inputData.name_en,
                                          $$a
                                            .slice(0, $$i)
                                            .concat($$a.slice($$i + 1))
                                        )
                                    }
                                  } else {
                                    _vm.$set(
                                      _vm.otherData,
                                      inputData.name_en,
                                      $$c
                                    )
                                  }
                                },
                              },
                            })
                          : inputData.type === "radio"
                          ? _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.otherData[inputData.name_en],
                                  expression: "otherData[inputData.name_en]",
                                },
                              ],
                              class:
                                _vm.error[inputData.name_en] != null
                                  ? ["invalid"]
                                  : [],
                              attrs: {
                                disabled: inputData.disabled,
                                id: inputData.name_en,
                                type: "radio",
                              },
                              domProps: {
                                checked: _vm._q(
                                  _vm.otherData[inputData.name_en],
                                  null
                                ),
                              },
                              on: {
                                change: function ($event) {
                                  return _vm.$set(
                                    _vm.otherData,
                                    inputData.name_en,
                                    null
                                  )
                                },
                              },
                            })
                          : _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.otherData[inputData.name_en],
                                  expression: "otherData[inputData.name_en]",
                                },
                              ],
                              class:
                                _vm.error[inputData.name_en] != null
                                  ? ["invalid"]
                                  : [],
                              attrs: {
                                disabled: inputData.disabled,
                                id: inputData.name_en,
                                type: inputData.type,
                              },
                              domProps: {
                                value: _vm.otherData[inputData.name_en],
                              },
                              on: {
                                input: function ($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(
                                    _vm.otherData,
                                    inputData.name_en,
                                    $event.target.value
                                  )
                                },
                              },
                            }),
                        _vm._v(" "),
                        _c(
                          "label",
                          {
                            staticClass: "active",
                            attrs: { for: inputData.name_en },
                          },
                          [_vm._v(_vm._s(inputData.name_ru))]
                        ),
                        _vm._v(" "),
                        _vm.error[inputData.name_en] != null
                          ? _c("span", {
                              staticClass: "helper-text",
                              attrs: {
                                "data-error": _vm.error[inputData.name_en][0],
                              },
                            })
                          : _vm._e(),
                      ])
                    : inputData.type == "file"
                    ? _c("div", { staticClass: "file-field input-field" }, [
                        _c("div", { staticClass: "btn light-blue darken-3" }, [
                          _c("span", [_vm._v("File")]),
                          _vm._v(" "),
                          _c("input", {
                            ref: "file",
                            refInFor: true,
                            attrs: { type: "file" },
                            on: {
                              change: function ($event) {
                                return _vm.FileAdd(inputData.name_en)
                              },
                            },
                          }),
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "file-path-wrapper" }, [
                          _c("input", {
                            staticClass: "file-path",
                            class:
                              _vm.error[inputData.name_en] != null
                                ? ["invalid"]
                                : [],
                            attrs: {
                              id: inputData.name_en,
                              type: "text",
                              placeholder: "Загрузить изображение",
                            },
                          }),
                          _vm._v(" "),
                          _vm.error[inputData.name_en] != null
                            ? _c("span", {
                                staticClass: "helper-text",
                                attrs: {
                                  "data-error": _vm.error[inputData.name_en][0],
                                },
                              })
                            : _vm._e(),
                        ]),
                        _vm._v(" "),
                        _vm.edit
                          ? _c("div", { attrs: { id: "oldimage" } }, [
                              _c("img", {
                                attrs: {
                                  src:
                                    _vm.otherData[inputData.name_en] == null
                                      ? "/storage/products/none.png"
                                      : "/storage/" +
                                        _vm.image_folder +
                                        "/" +
                                        _vm.otherData[inputData.name_en],
                                  height: "200px",
                                  width: "200px",
                                  alt: "",
                                },
                              }),
                            ])
                          : _vm._e(),
                      ])
                    : inputData.type == "textarea"
                    ? _c("div", { staticClass: "input-field col s12" }, [
                        _c("textarea", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.otherData[inputData.name_en],
                              expression: "otherData[inputData.name_en]",
                            },
                          ],
                          staticClass: "materialize-textarea",
                          class:
                            _vm.error[inputData.name_en] != null
                              ? ["invalid"]
                              : [],
                          attrs: { id: inputData.name_en },
                          domProps: { value: _vm.otherData[inputData.name_en] },
                          on: {
                            input: function ($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.otherData,
                                inputData.name_en,
                                $event.target.value
                              )
                            },
                          },
                        }),
                        _vm._v(" "),
                        _c(
                          "label",
                          {
                            staticClass: "active",
                            attrs: { for: inputData.name_en },
                          },
                          [_vm._v(_vm._s(inputData.name_ru))]
                        ),
                        _vm._v(" "),
                        _vm.error[inputData.name_en] != null
                          ? _c("span", {
                              staticClass: "helper-text",
                              attrs: {
                                "data-error": _vm.error[inputData.name_en][0],
                              },
                            })
                          : _vm._e(),
                      ])
                    : inputData.type == "drop" && _vm.droplist
                    ? _c("div", { staticClass: " col s12" }, [
                        _c("label", [_vm._v(_vm._s(inputData.name_ru))]),
                        _vm._v(" "),
                        _c(
                          "select",
                          {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.otherData[inputData.name_en],
                                expression: "otherData[inputData.name_en]",
                              },
                            ],
                            staticClass:
                              "browser-default col s12 grey lighten-3",
                            on: {
                              change: function ($event) {
                                var $$selectedVal = Array.prototype.filter
                                  .call($event.target.options, function (o) {
                                    return o.selected
                                  })
                                  .map(function (o) {
                                    var val = "_value" in o ? o._value : o.value
                                    return val
                                  })
                                _vm.$set(
                                  _vm.otherData,
                                  inputData.name_en,
                                  $event.target.multiple
                                    ? $$selectedVal
                                    : $$selectedVal[0]
                                )
                              },
                            },
                          },
                          _vm._l(_vm.droplist, function (values) {
                            return _c(
                              "option",
                              {
                                key: values.id,
                                domProps: { value: values.id },
                              },
                              [_vm._v(_vm._s(values.name_ru))]
                            )
                          }),
                          0
                        ),
                        _vm._v(" "),
                        _vm.error[inputData.name_en] != null
                          ? _c(
                              "label",
                              {
                                staticClass: "col s12",
                                staticStyle: {
                                  color: "red",
                                  "border-top": "2px solid red",
                                },
                              },
                              [_vm._v(_vm._s(_vm.error[inputData.name_en][0]))]
                            )
                          : _vm._e(),
                      ])
                    : _vm._e(),
                ])
              }),
              _vm._v(" "),
              _c("input", {
                staticClass: "waves-effect light-blue darken-3 btn-large",
                attrs: { type: "submit", value: "Cохранить" },
              }),
            ],
            2
          ),
        ]),
      ]
    ),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/admin/views/Products/NewProducts.vue?vue&type=template&id=46f82e38&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/admin/views/Products/NewProducts.vue?vue&type=template&id=46f82e38& ***!
  \*********************************************************************************************************************************************************************************************************************************/
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
      _c("Edit", {
        attrs: {
          CHeader: this.CHeader,
          error: this.errors,
          otherData: this.form,
          droplist: _vm.GetCategory,
          Cdata: this.View_data,
          image_folder: "products",
        },
        on: { getfile: _vm.imageProduct, CSave: _vm.CreateProducts },
      }),
    ],
    1
  )
}
var staticRenderFns = []
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