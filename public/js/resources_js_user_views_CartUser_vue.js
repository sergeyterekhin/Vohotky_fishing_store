"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_user_views_CartUser_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/user/views/CartUser.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/user/views/CartUser.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var vue_spinner_src_ClipLoader_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-spinner/src/ClipLoader.vue */ "./node_modules/vue-spinner/src/ClipLoader.vue");
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
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "Cart",
  components: {
    RingLoader: vue_spinner_src_ClipLoader_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    return {
      bflag: false,
      code: null,
      payment: "inshop"
    };
  },
  computed: _objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapGetters)({
    getCart: "cart/getProductinCart",
    totalSum: "cart/getHeaderCart",
    authenticated: "auth/authenticated"
  })),
  methods: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapActions)({
    CartUserssend: "cart/CartUsers",
    deleteOnCartuser: "cart/deleteOnCarts",
    quan: "cart/updateCartsUser",
    makeOrder: "cart/MakeOrder"
  })), {}, {
    addToOrder: function addToOrder() {
      var _this = this;

      this.bflag = true;
      this.makeOrder(this.payment).then(function (message) {
        console.log(message);

        switch (message.type) {
          case 400:
            _this.$notify({
              title: 'Ошибка',
              text: "\u041A\u043E\u0440\u0437\u0438\u043D\u0430 \u043F\u0443\u0441\u0442\u0430 \u0438\u043B\u0438 \u0441\u0443\u043C\u043C\u0430 \u043E\u0442\u0440\u0438\u0446\u0430\u0442\u0435\u043B\u044C\u043D\u0430",
              type: "error"
            });

            break;

          case 401:
            _this.$notify({
              title: 'Ошибка',
              text: "\u043F\u0440\u043E\u0431\u043B\u0435\u043C\u044B \u0441 \u043E\u0444\u043E\u0440\u043C\u043B\u0435\u043D\u0438\u0435\u043C \u0437\u0430\u043A\u0430\u0437\u0430!",
              type: "error"
            });

            break;

          case 200:
            _this.code = message.message;

            _this.CartUserssend();

            break;

          default:
            break;
        }

        _this.bflag = false;
      });
    },
    deleteProductfromCart: function deleteProductfromCart(id) {
      this.deleteOnCartuser(id);
    },
    minus: function minus(product) {
      if (product.quantity > 1) {
        var colvo = product.quantity - 1;
        this.quan({
          'id': product.id,
          'quantity': colvo
        }).then(function () {
          product.quantity--;
        })["catch"](function (error) {
          return console.log(error);
        });
      }
    },
    pluse: function pluse(product) {
      if (product.quantity < 5) {
        var colvo = product.quantity + 1;
        this.quan({
          'id': product.id,
          'quantity': colvo
        }).then(function () {
          product.quantity++;
        })["catch"](function (error) {
          return console.log(error);
        });
      }
    }
  })
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-8[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/vue-spinner/src/ClipLoader.vue?vue&type=style&index=0&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-8[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/vue-spinner/src/ClipLoader.vue?vue&type=style&index=0&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.v-spinner\n{\n/*\t  font-size: 10px; \n\n    width: 60px;\n    height: 40px;*/\n    /*margin: 25px auto;*/\n    text-align: center;\n}\n.v-spinner .v-clip\n{\n    -webkit-animation: v-clipDelay 0.75s 0s infinite linear;\n            animation: v-clipDelay 0.75s 0s infinite linear;\n    -webkit-animation-fill-mode: both;\n\t          animation-fill-mode: both;\n\n    display: inline-block;\n}\n@-webkit-keyframes v-clipDelay\n{\n0%\n    {\n        transform: rotate(0deg) scale(1);\n}\n50%\n    {\n        transform: rotate(180deg) scale(0.8);\n}\n100%\n    {\n        transform: rotate(360deg) scale(1);\n}\n}\n@keyframes v-clipDelay\n{\n0%\n    {\n        transform: rotate(0deg) scale(1);\n}\n50%\n    {\n        transform: rotate(180deg) scale(0.8);\n}\n100%\n    {\n        transform: rotate(360deg) scale(1);\n}\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-8[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/vue-spinner/src/ClipLoader.vue?vue&type=style&index=0&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-8[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/vue-spinner/src/ClipLoader.vue?vue&type=style&index=0&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_loader_dist_cjs_js_clonedRuleSet_8_0_rules_0_use_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_dist_cjs_js_clonedRuleSet_8_0_rules_0_use_2_vue_loader_lib_index_js_vue_loader_options_ClipLoader_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../css-loader/dist/cjs.js??clonedRuleSet-8[0].rules[0].use[1]!../../vue-loader/lib/loaders/stylePostLoader.js!../../postcss-loader/dist/cjs.js??clonedRuleSet-8[0].rules[0].use[2]!../../vue-loader/lib/index.js??vue-loader-options!./ClipLoader.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-8[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/vue-spinner/src/ClipLoader.vue?vue&type=style&index=0&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_css_loader_dist_cjs_js_clonedRuleSet_8_0_rules_0_use_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_dist_cjs_js_clonedRuleSet_8_0_rules_0_use_2_vue_loader_lib_index_js_vue_loader_options_ClipLoader_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_css_loader_dist_cjs_js_clonedRuleSet_8_0_rules_0_use_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_dist_cjs_js_clonedRuleSet_8_0_rules_0_use_2_vue_loader_lib_index_js_vue_loader_options_ClipLoader_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : 0;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/vue-spinner/src/ClipLoader.vue":
/*!*****************************************************!*\
  !*** ./node_modules/vue-spinner/src/ClipLoader.vue ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ClipLoader_vue_vue_type_template_id_35989352___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ClipLoader.vue?vue&type=template&id=35989352& */ "./node_modules/vue-spinner/src/ClipLoader.vue?vue&type=template&id=35989352&");
/* harmony import */ var _ClipLoader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ClipLoader.vue?vue&type=script&lang=js& */ "./node_modules/vue-spinner/src/ClipLoader.vue?vue&type=script&lang=js&");
/* harmony import */ var _ClipLoader_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ClipLoader.vue?vue&type=style&index=0&lang=css& */ "./node_modules/vue-spinner/src/ClipLoader.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _ClipLoader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ClipLoader_vue_vue_type_template_id_35989352___WEBPACK_IMPORTED_MODULE_0__.render,
  _ClipLoader_vue_vue_type_template_id_35989352___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "node_modules/vue-spinner/src/ClipLoader.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/vue-spinner/src/ClipLoader.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/vue-spinner/src/ClipLoader.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************/
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  
  name: 'ClipLoader',

  props: {
    loading: {
      type: Boolean,
      default: true
    },
  	color: { 
      type: String,
      default: '#5dc596'
    },
  	size: {
      type: String,
      default: '35px'
    },
    radius: {
      type: String,
      default: '100%'
    }
  },
  computed: {
    spinnerStyle () {
      return {
        height: this.size,
        width: this.size,
        borderWidth: '2px',
        borderStyle: 'solid',
        borderColor: this.color + ' ' + this.color + ' transparent',
        borderRadius: this.radius,
        background: 'transparent'
      }
    }
  }
});


/***/ }),

/***/ "./resources/js/user/views/CartUser.vue":
/*!**********************************************!*\
  !*** ./resources/js/user/views/CartUser.vue ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _CartUser_vue_vue_type_template_id_42581f62___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CartUser.vue?vue&type=template&id=42581f62& */ "./resources/js/user/views/CartUser.vue?vue&type=template&id=42581f62&");
/* harmony import */ var _CartUser_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CartUser.vue?vue&type=script&lang=js& */ "./resources/js/user/views/CartUser.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _CartUser_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CartUser_vue_vue_type_template_id_42581f62___WEBPACK_IMPORTED_MODULE_0__.render,
  _CartUser_vue_vue_type_template_id_42581f62___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/user/views/CartUser.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/user/views/CartUser.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./resources/js/user/views/CartUser.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CartUser_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CartUser.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/user/views/CartUser.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CartUser_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./node_modules/vue-spinner/src/ClipLoader.vue?vue&type=style&index=0&lang=css&":
/*!**************************************************************************************!*\
  !*** ./node_modules/vue-spinner/src/ClipLoader.vue?vue&type=style&index=0&lang=css& ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_loader_dist_cjs_js_css_loader_dist_cjs_js_clonedRuleSet_8_0_rules_0_use_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_dist_cjs_js_clonedRuleSet_8_0_rules_0_use_2_vue_loader_lib_index_js_vue_loader_options_ClipLoader_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../style-loader/dist/cjs.js!../../css-loader/dist/cjs.js??clonedRuleSet-8[0].rules[0].use[1]!../../vue-loader/lib/loaders/stylePostLoader.js!../../postcss-loader/dist/cjs.js??clonedRuleSet-8[0].rules[0].use[2]!../../vue-loader/lib/index.js??vue-loader-options!./ClipLoader.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-8[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/vue-spinner/src/ClipLoader.vue?vue&type=style&index=0&lang=css&");


/***/ }),

/***/ "./node_modules/vue-spinner/src/ClipLoader.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./node_modules/vue-spinner/src/ClipLoader.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _vue_loader_lib_index_js_vue_loader_options_ClipLoader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../vue-loader/lib/index.js??vue-loader-options!./ClipLoader.vue?vue&type=script&lang=js& */ "./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/vue-spinner/src/ClipLoader.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_vue_loader_lib_index_js_vue_loader_options_ClipLoader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./node_modules/vue-spinner/src/ClipLoader.vue?vue&type=template&id=35989352&":
/*!************************************************************************************!*\
  !*** ./node_modules/vue-spinner/src/ClipLoader.vue?vue&type=template&id=35989352& ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _vue_loader_lib_loaders_templateLoader_js_vue_loader_options_vue_loader_lib_index_js_vue_loader_options_ClipLoader_vue_vue_type_template_id_35989352___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _vue_loader_lib_loaders_templateLoader_js_vue_loader_options_vue_loader_lib_index_js_vue_loader_options_ClipLoader_vue_vue_type_template_id_35989352___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _vue_loader_lib_loaders_templateLoader_js_vue_loader_options_vue_loader_lib_index_js_vue_loader_options_ClipLoader_vue_vue_type_template_id_35989352___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../vue-loader/lib/index.js??vue-loader-options!./ClipLoader.vue?vue&type=template&id=35989352& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/vue-spinner/src/ClipLoader.vue?vue&type=template&id=35989352&");


/***/ }),

/***/ "./resources/js/user/views/CartUser.vue?vue&type=template&id=42581f62&":
/*!*****************************************************************************!*\
  !*** ./resources/js/user/views/CartUser.vue?vue&type=template&id=42581f62& ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CartUser_vue_vue_type_template_id_42581f62___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CartUser_vue_vue_type_template_id_42581f62___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CartUser_vue_vue_type_template_id_42581f62___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CartUser.vue?vue&type=template&id=42581f62& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/user/views/CartUser.vue?vue&type=template&id=42581f62&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/vue-spinner/src/ClipLoader.vue?vue&type=template&id=35989352&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/vue-spinner/src/ClipLoader.vue?vue&type=template&id=35989352& ***!
  \***************************************************************************************************************************************************************************************************************************/
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
    {
      directives: [
        {
          name: "show",
          rawName: "v-show",
          value: _vm.loading,
          expression: "loading",
        },
      ],
      staticClass: "v-spinner",
    },
    [_c("div", { staticClass: "v-clip", style: _vm.spinnerStyle })]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/user/views/CartUser.vue?vue&type=template&id=42581f62&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/user/views/CartUser.vue?vue&type=template&id=42581f62& ***!
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
  return _c("main", [
    _vm.getCart.length > 0
      ? _c("div", { staticClass: "ShowCart" }, [
          _c("h1", [_vm._v("Корзина товаров")]),
          _vm._v(" "),
          _c(
            "table",
            { attrs: { id: "shopping_cart_table" } },
            [
              _vm._m(0),
              _vm._v(" "),
              _vm._l(_vm.getCart, function (product_cart) {
                return _c("tbody", { key: product_cart.id }, [
                  _c("tr", { staticClass: "item" }, [
                    _c("td", { staticClass: "img" }, [
                      _c("img", {
                        attrs: {
                          src:
                            product_cart.image_name == null
                              ? "/storage/products/none.png"
                              : "/storage/products/" + product_cart.image_name,
                        },
                      }),
                    ]),
                    _vm._v(" "),
                    _c(
                      "td",
                      {},
                      [
                        _c(
                          "router-link",
                          {
                            attrs: {
                              to: {
                                name: "producthasone",
                                params: {
                                  catalog: product_cart.name_en,
                                  product: product_cart.name_url,
                                },
                              },
                            },
                          },
                          [
                            _vm._v(
                              "\n              " +
                                _vm._s(product_cart.name) +
                                "\n            "
                            ),
                          ]
                        ),
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c("td", { staticClass: "features" }, [
                      _c("div", {
                        staticClass: "item",
                        domProps: { innerHTML: _vm._s(product_cart.slug) },
                      }),
                    ]),
                    _vm._v(" "),
                    _c(
                      "td",
                      {
                        staticClass: "digit price",
                        staticStyle: { "text-align": "center" },
                      },
                      [
                        _c("span", { staticClass: "strong" }, [
                          _vm._v(_vm._s(product_cart.price) + " ₽"),
                        ]),
                      ]
                    ),
                    _vm._v(" "),
                    _c("td", { staticClass: "digit qt" }, [
                      _c("div", { staticClass: "buttons" }, [
                        _c("div", { staticClass: "qt" }, [
                          _c(
                            "button",
                            {
                              staticClass: "decr",
                              attrs: {
                                href: "#",
                                disabled: product_cart.quantity <= 1,
                              },
                              on: {
                                click: function ($event) {
                                  $event.preventDefault()
                                  return _vm.minus(product_cart)
                                },
                              },
                            },
                            [_vm._v("–")]
                          ),
                          _vm._v(" "),
                          _c("p", [_vm._v(_vm._s(product_cart.quantity))]),
                          _vm._v(" "),
                          _c(
                            "button",
                            {
                              staticClass: "incr",
                              attrs: {
                                href: "#",
                                disabled: product_cart.quantity >= 5,
                              },
                              on: {
                                click: function ($event) {
                                  $event.preventDefault()
                                  return _vm.pluse(product_cart)
                                },
                              },
                            },
                            [_vm._v("+")]
                          ),
                        ]),
                        _vm._v(" "),
                        _c(
                          "a",
                          {
                            staticClass: "del",
                            attrs: { href: "" },
                            on: {
                              click: function ($event) {
                                $event.preventDefault()
                                return _vm.deleteProductfromCart(
                                  product_cart.id
                                )
                              },
                            },
                          },
                          [_c("nobr", [_vm._v("Удалить")])],
                          1
                        ),
                      ]),
                    ]),
                    _vm._v(" "),
                    _c(
                      "td",
                      {
                        staticClass: "digit sum",
                        staticStyle: { "text-align": "center" },
                      },
                      [
                        _vm._v(
                          "\n            " +
                            _vm._s(product_cart.price * product_cart.quantity) +
                            " ₽\n          "
                        ),
                      ]
                    ),
                  ]),
                ])
              }),
              _vm._v(" "),
              _c("tr", { staticClass: "cartSum" }, [
                _c("td", { staticClass: "img noline" }),
                _vm._v(" "),
                _c("td", { staticClass: "features noline" }),
                _vm._v(" "),
                _vm._m(1),
                _vm._v(" "),
                _c("td", { staticClass: "digit noline" }, [
                  _c("strong", [
                    _vm.totalSum
                      ? _c("span", { attrs: { id: "cart_sum" } }, [
                          _vm._v(_vm._s(_vm.totalSum.total_price) + " ₽"),
                        ])
                      : _vm._e(),
                  ]),
                ]),
              ]),
            ],
            2
          ),
          _vm._v(" "),
          _c("div", { staticClass: "devider" }),
          _vm._v(" "),
          _c("div", { staticClass: "contain" }, [
            _c("div", { staticClass: "form_toggle" }, [
              _c("div", { staticClass: "form_toggle-item item-1" }, [
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.payment,
                      expression: "payment",
                    },
                  ],
                  attrs: {
                    id: "fid-1",
                    type: "radio",
                    name: "radio",
                    value: "online",
                  },
                  domProps: { checked: _vm._q(_vm.payment, "online") },
                  on: {
                    change: function ($event) {
                      _vm.payment = "online"
                    },
                  },
                }),
                _vm._v(" "),
                _c("label", { attrs: { for: "fid-1" } }, [_vm._v("Онлайн")]),
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "form_toggle-item item-2" }, [
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.payment,
                      expression: "payment",
                    },
                  ],
                  attrs: {
                    id: "fid-2",
                    type: "radio",
                    name: "radio",
                    value: "inshop",
                  },
                  domProps: { checked: _vm._q(_vm.payment, "inshop") },
                  on: {
                    change: function ($event) {
                      _vm.payment = "inshop"
                    },
                  },
                }),
                _vm._v(" "),
                _c("label", { attrs: { for: "fid-2" } }, [
                  _vm._v("В Магазине"),
                ]),
              ]),
              _vm._v(" "),
              _c("p", [_vm._v("Выберите тип оплаты")]),
            ]),
            _vm._v(" "),
            _c("form", { staticClass: "forms" }, [
              _c(
                "button",
                {
                  staticClass: "item submit",
                  attrs: { disabled: _vm.bflag },
                  on: {
                    click: function ($event) {
                      $event.preventDefault()
                      return _vm.addToOrder.apply(null, arguments)
                    },
                  },
                },
                [
                  !_vm.bflag
                    ? _c("div", [_vm._v("Отправить заказ")])
                    : _c("ring-loader", {
                        attrs: { size: "14px", color: "white" },
                      }),
                ],
                1
              ),
            ]),
          ]),
        ])
      : _vm.code != null
      ? _c("div", { staticClass: "ShowCart" }, [
          _c("h1", [_vm._v("Заказ успешно оформлен!")]),
          _vm._v(" "),
          _c("p", [_vm._v("Спасибо, что совершили у нас покупку!")]),
          _c("p", [
            _vm._v(
              " Мы свяжемся с вами по указаному при регистрации номеру телефона, когда товар будет готов к выдаче."
            ),
          ]),
          _vm._v(" "),
          _c("p", [_vm._v("При получении скажите этот код продавцу:")]),
          _vm._v(" "),
          _c("b", { staticStyle: { "font-size": "30px" } }, [
            _vm._v(_vm._s(this.code)),
          ]),
        ])
      : _c("div", { staticClass: "ShowCart" }, [
          _c("h1", [_vm._v("Корзина товаров")]),
          _vm._v(" "),
          _c("p", [
            _vm._v(
              "Ваша корзина пуста. Добавьте интересующий Вас товар на сайте в корзину, чтобы увидеть его."
            ),
          ]),
        ]),
  ])
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("tr", [
      _c("th", { staticClass: "img" }, [_vm._v("Фото")]),
      _vm._v(" "),
      _c("th", {}, [_vm._v("Наименование")]),
      _vm._v(" "),
      _c("th", { staticClass: "features" }, [_vm._v("Характеристики")]),
      _vm._v(" "),
      _c("th", {}, [_vm._v("Цена")]),
      _vm._v(" "),
      _c("th", {}, [_vm._v("Количество")]),
      _vm._v(" "),
      _c("th", {}, [_vm._v("Сумма")]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("td", { staticClass: "digit noline", attrs: { colspan: "3" } }, [
      _c("strong", [_vm._v("ИТОГО:")]),
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