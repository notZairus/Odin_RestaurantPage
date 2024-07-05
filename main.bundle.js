"use strict";
(self["webpackChunkodin_restaurantpage"] = self["webpackChunkodin_restaurantpage"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style/main.css":
/*!******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style/main.css ***!
  \******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/home-bg.jpg */ "./src/assets/home-bg.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Nunito+Sans:ital,opsz,wght@0,6..12,200..1000;1,6..12,200..1000&display=swap);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:root {
  --primary-color: #FFF7F1;
  --secondary-color: #FFE4C9;
  font-size: 16px;
  font-family: "Nunito Sans";
}

body {
  margin: 0px;
  height: 100dvh;
  display: flex;
  flex-direction: column;
  position: relative;
}

header {
  background-color: var(--secondary-color);
  height: 100px;
  width: 100%;
  border-bottom: 3px solid rgb(0, 0, 0, 0.15);
  box-sizing: border-box;
  display: flex;
  align-items: center;
  padding: 0px 40px;
}

header div {
  flex: 1;
}

header .logo-container p {
  font-size: 3rem;
  font-weight: 900;
}

header nav {
  flex: 2;
}

header nav ul {
  list-style: none;
  display: flex;
  justify-content: center;
  gap: 30px;
  padding: 0px;
}

nav ul button {
  font-size: 2rem;
  border: none;
  background-color: transparent;
  padding: 5px 20px;
  cursor: pointer;
  transition: all 0.5s;
}

nav ul button:hover {
  color: var(--secondary-color);
  background-color: black;
  border-radius: 2rem;
}

#content {
  flex:1;
  display: flex;
}

#home {
  flex: 1;
  background: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
  background-size: cover;
  background-position: center;
  background-attachment: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

nav .active {
  color: var(--secondary-color);
  background-color: black;
  border-radius: 2rem;
}

.text-container {
  color: var(--secondary-color);
  background-color: rgb(0, 0, 0, 0.5);
  padding: 30px 40px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.text-container h1,
.text-container h2,
.text-container p {
  margin: 0px;
  text-align: center;
}

.text-container h1{
  font-size: 6rem;
  font-weight: 900;
  margin: 0px;
}

.text-container h2 {
  font-size: 2.5rem;
}

.text-container button {
  margin-top: 20px;
  font-size: 2rem;
  border: 2px solid var(--primary-color);
  padding: 5px 20px;
  border-radius: 2rem;
  background-color: transparent;
  color: var(--secondary-color); 
  cursor: pointer;

  transition:  all 0.5s;
}

.text-container button:hover {
  background-color: var(--secondary-color);
  color: black;
}

.text-container button:active {
  transition: all 0s;
  background-color: black;
  color: var(--secondary-color);
}

#menu {
  flex: 1;
  background-color: var(--primary-color);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 50px;
}

#menu h1 {
  text-align: center;
  font-size: 2.5rem;
}

.menu-container {
  background-color: var(--secondary-color);
  border: 1px solid rgb(0, 0, 0, 0.2);
  width: 80%;
  padding: 10px 20px 25px;
  border-radius: 1rem;
  
}

.menu-container h2 {
  font-size: 2.5rem;
  margin: 5px 0px;
}

.menu-container .ic-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
}

.ic-container > div {
  background-color: white;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  box-sizing: border-box;
  gap: 20px;
}

.ic-container div .product-img-container {
  height: 80%;
}

.ic-container div .product-img-container img {
  height: 100%;
  max-height: 250px;
  border-radius: 2rem;
  background-color: transparent;
  background-size: cover;
}

.product-info-container p {
  margin: 0px;
}

.product-info-container .product-name {
  font-weight: 700;
  text-align: center;
  font-size: 1.5rem;
}

.product-info-container .product-price {
  font-weight: 700;
  text-align: center;
  font-size: 1.1rem;
  margin-top: 5px;
}

#contact {
  background-color: var(--primary-color);
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-bottom: 50px;
}

#contact h1 {
  font-size: 2.5rem;
}

#contact .contact-container {
  background-color: var(--secondary-color);
  width: 50%;
  border: 1px solid rgb(0, 0, 0, 0.3);
  border-radius: 2rem;
}

.contact-container h2{
  font-size: 2rem;
  text-align: center;
}`, "",{"version":3,"sources":["webpack://./src/style/main.css"],"names":[],"mappings":"AAEA;EACE,wBAAwB;EACxB,0BAA0B;EAC1B,eAAe;EACf,0BAA0B;AAC5B;;AAEA;EACE,WAAW;EACX,cAAc;EACd,aAAa;EACb,sBAAsB;EACtB,kBAAkB;AACpB;;AAEA;EACE,wCAAwC;EACxC,aAAa;EACb,WAAW;EACX,2CAA2C;EAC3C,sBAAsB;EACtB,aAAa;EACb,mBAAmB;EACnB,iBAAiB;AACnB;;AAEA;EACE,OAAO;AACT;;AAEA;EACE,eAAe;EACf,gBAAgB;AAClB;;AAEA;EACE,OAAO;AACT;;AAEA;EACE,gBAAgB;EAChB,aAAa;EACb,uBAAuB;EACvB,SAAS;EACT,YAAY;AACd;;AAEA;EACE,eAAe;EACf,YAAY;EACZ,6BAA6B;EAC7B,iBAAiB;EACjB,eAAe;EACf,oBAAoB;AACtB;;AAEA;EACE,6BAA6B;EAC7B,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,MAAM;EACN,aAAa;AACf;;AAEA;EACE,OAAO;EACP,mDAAsC;EACtC,sBAAsB;EACtB,2BAA2B;EAC3B,6BAA6B;EAC7B,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,uBAAuB;AACzB;;AAEA;EACE,6BAA6B;EAC7B,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,6BAA6B;EAC7B,mCAAmC;EACnC,kBAAkB;EAClB,mBAAmB;EACnB,aAAa;EACb,sBAAsB;EACtB,mBAAmB;AACrB;;AAEA;;;EAGE,WAAW;EACX,kBAAkB;AACpB;;AAEA;EACE,eAAe;EACf,gBAAgB;EAChB,WAAW;AACb;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,gBAAgB;EAChB,eAAe;EACf,sCAAsC;EACtC,iBAAiB;EACjB,mBAAmB;EACnB,6BAA6B;EAC7B,6BAA6B;EAC7B,eAAe;;EAEf,qBAAqB;AACvB;;AAEA;EACE,wCAAwC;EACxC,YAAY;AACd;;AAEA;EACE,kBAAkB;EAClB,uBAAuB;EACvB,6BAA6B;AAC/B;;AAEA;EACE,OAAO;EACP,sCAAsC;EACtC,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,oBAAoB;AACtB;;AAEA;EACE,kBAAkB;EAClB,iBAAiB;AACnB;;AAEA;EACE,wCAAwC;EACxC,mCAAmC;EACnC,UAAU;EACV,uBAAuB;EACvB,mBAAmB;;AAErB;;AAEA;EACE,iBAAiB;EACjB,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,2DAA2D;EAC3D,SAAS;AACX;;AAEA;EACE,uBAAuB;EACvB,mBAAmB;EACnB,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,aAAa;EACb,sBAAsB;EACtB,SAAS;AACX;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,YAAY;EACZ,iBAAiB;EACjB,mBAAmB;EACnB,6BAA6B;EAC7B,sBAAsB;AACxB;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,gBAAgB;EAChB,kBAAkB;EAClB,iBAAiB;AACnB;;AAEA;EACE,gBAAgB;EAChB,kBAAkB;EAClB,iBAAiB;EACjB,eAAe;AACjB;;AAEA;EACE,sCAAsC;EACtC,OAAO;EACP,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,uBAAuB;EACvB,oBAAoB;AACtB;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,wCAAwC;EACxC,UAAU;EACV,mCAAmC;EACnC,mBAAmB;AACrB;;AAEA;EACE,eAAe;EACf,kBAAkB;AACpB","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:ital,opsz,wght@0,6..12,200..1000;1,6..12,200..1000&display=swap');\r\n\r\n:root {\r\n  --primary-color: #FFF7F1;\r\n  --secondary-color: #FFE4C9;\r\n  font-size: 16px;\r\n  font-family: \"Nunito Sans\";\r\n}\r\n\r\nbody {\r\n  margin: 0px;\r\n  height: 100dvh;\r\n  display: flex;\r\n  flex-direction: column;\r\n  position: relative;\r\n}\r\n\r\nheader {\r\n  background-color: var(--secondary-color);\r\n  height: 100px;\r\n  width: 100%;\r\n  border-bottom: 3px solid rgb(0, 0, 0, 0.15);\r\n  box-sizing: border-box;\r\n  display: flex;\r\n  align-items: center;\r\n  padding: 0px 40px;\r\n}\r\n\r\nheader div {\r\n  flex: 1;\r\n}\r\n\r\nheader .logo-container p {\r\n  font-size: 3rem;\r\n  font-weight: 900;\r\n}\r\n\r\nheader nav {\r\n  flex: 2;\r\n}\r\n\r\nheader nav ul {\r\n  list-style: none;\r\n  display: flex;\r\n  justify-content: center;\r\n  gap: 30px;\r\n  padding: 0px;\r\n}\r\n\r\nnav ul button {\r\n  font-size: 2rem;\r\n  border: none;\r\n  background-color: transparent;\r\n  padding: 5px 20px;\r\n  cursor: pointer;\r\n  transition: all 0.5s;\r\n}\r\n\r\nnav ul button:hover {\r\n  color: var(--secondary-color);\r\n  background-color: black;\r\n  border-radius: 2rem;\r\n}\r\n\r\n#content {\r\n  flex:1;\r\n  display: flex;\r\n}\r\n\r\n#home {\r\n  flex: 1;\r\n  background: url(../assets/home-bg.jpg);\r\n  background-size: cover;\r\n  background-position: center;\r\n  background-attachment: center;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n\r\nnav .active {\r\n  color: var(--secondary-color);\r\n  background-color: black;\r\n  border-radius: 2rem;\r\n}\r\n\r\n.text-container {\r\n  color: var(--secondary-color);\r\n  background-color: rgb(0, 0, 0, 0.5);\r\n  padding: 30px 40px;\r\n  border-radius: 20px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n}\r\n\r\n.text-container h1,\r\n.text-container h2,\r\n.text-container p {\r\n  margin: 0px;\r\n  text-align: center;\r\n}\r\n\r\n.text-container h1{\r\n  font-size: 6rem;\r\n  font-weight: 900;\r\n  margin: 0px;\r\n}\r\n\r\n.text-container h2 {\r\n  font-size: 2.5rem;\r\n}\r\n\r\n.text-container button {\r\n  margin-top: 20px;\r\n  font-size: 2rem;\r\n  border: 2px solid var(--primary-color);\r\n  padding: 5px 20px;\r\n  border-radius: 2rem;\r\n  background-color: transparent;\r\n  color: var(--secondary-color); \r\n  cursor: pointer;\r\n\r\n  transition:  all 0.5s;\r\n}\r\n\r\n.text-container button:hover {\r\n  background-color: var(--secondary-color);\r\n  color: black;\r\n}\r\n\r\n.text-container button:active {\r\n  transition: all 0s;\r\n  background-color: black;\r\n  color: var(--secondary-color);\r\n}\r\n\r\n#menu {\r\n  flex: 1;\r\n  background-color: var(--primary-color);\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  padding-bottom: 50px;\r\n}\r\n\r\n#menu h1 {\r\n  text-align: center;\r\n  font-size: 2.5rem;\r\n}\r\n\r\n.menu-container {\r\n  background-color: var(--secondary-color);\r\n  border: 1px solid rgb(0, 0, 0, 0.2);\r\n  width: 80%;\r\n  padding: 10px 20px 25px;\r\n  border-radius: 1rem;\r\n  \r\n}\r\n\r\n.menu-container h2 {\r\n  font-size: 2.5rem;\r\n  margin: 5px 0px;\r\n}\r\n\r\n.menu-container .ic-container {\r\n  display: grid;\r\n  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\r\n  gap: 30px;\r\n}\r\n\r\n.ic-container > div {\r\n  background-color: white;\r\n  border-radius: 1rem;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  padding: 10px;\r\n  box-sizing: border-box;\r\n  gap: 20px;\r\n}\r\n\r\n.ic-container div .product-img-container {\r\n  height: 80%;\r\n}\r\n\r\n.ic-container div .product-img-container img {\r\n  height: 100%;\r\n  max-height: 250px;\r\n  border-radius: 2rem;\r\n  background-color: transparent;\r\n  background-size: cover;\r\n}\r\n\r\n.product-info-container p {\r\n  margin: 0px;\r\n}\r\n\r\n.product-info-container .product-name {\r\n  font-weight: 700;\r\n  text-align: center;\r\n  font-size: 1.5rem;\r\n}\r\n\r\n.product-info-container .product-price {\r\n  font-weight: 700;\r\n  text-align: center;\r\n  font-size: 1.1rem;\r\n  margin-top: 5px;\r\n}\r\n\r\n#contact {\r\n  background-color: var(--primary-color);\r\n  flex: 1;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: center;\r\n  padding-bottom: 50px;\r\n}\r\n\r\n#contact h1 {\r\n  font-size: 2.5rem;\r\n}\r\n\r\n#contact .contact-container {\r\n  background-color: var(--secondary-color);\r\n  width: 50%;\r\n  border: 1px solid rgb(0, 0, 0, 0.3);\r\n  border-radius: 2rem;\r\n}\r\n\r\n.contact-container h2{\r\n  font-size: 2rem;\r\n  text-align: center;\r\n}"],"sourceRoot":""}]);
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
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style/main.css":
/*!****************************!*\
  !*** ./src/style/main.css ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./main.css */ "./node_modules/css-loader/dist/cjs.js!./src/style/main.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
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
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
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
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/js/components.js":
/*!******************************!*\
  !*** ./src/js/components.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   content: () => (/* binding */ content),
/* harmony export */   menubtn: () => (/* binding */ menubtn),
/* harmony export */   navigations: () => (/* binding */ navigations)
/* harmony export */ });
const navigations = document.getElementById('navigations');
const menubtn = document.getElementById('menu-btn');
const content = document.getElementById('content');

/***/ }),

/***/ "./src/js/contact.js":
/*!***************************!*\
  !*** ./src/js/contact.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   attachContact: () => (/* binding */ attachContact)
/* harmony export */ });

function attachContact() {

  let contact = document.createElement('div');
  contact.id = 'contact';

  let h1 = document.createElement('h1');
  h1.textContent = "Contact";
  contact.appendChild(h1);

  let contactContainer = document.createElement('div');
  contactContainer.classList.add('contact-container');
  contact.appendChild(contactContainer);

  let name = document.createElement('h2');
  name.textContent = "Zairus Bermillo";

  let fb = document.createElement('h2');
  fb.textContent = "Facebook:";
  contactContainer.appendChild(fb);
  contactContainer.appendChild(name);
  
  let ig = document.createElement('h2');
  ig.textContent = "Instagram:";
  contactContainer.appendChild(ig);
  contactContainer.appendChild(name);

  let gh = document.createElement('h2');
  gh.textContent = "Github:";
  contactContainer.appendChild(gh);

  let un = document.createElement('h2');
  gh.textContent = "!Zairus";
  contactContainer.appendChild(un);

  return contact;
}

/***/ }),

/***/ "./src/js/home.js":
/*!************************!*\
  !*** ./src/js/home.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   attachHome: () => (/* binding */ attachHome)
/* harmony export */ });
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu */ "./src/js/menu.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components */ "./src/js/components.js");


//components



function attachHome() {
  let home = document.createElement('div');
  home.id = 'home';

  let homee = document.createElement('div');
  homee.classList.add('home');
  home.appendChild(homee);

  let textContainer = document.createElement('div');
  textContainer.classList.add('text-container');
  homee.appendChild(textContainer);

  let h1 = document.createElement('h1');
  h1.textContent = "Adam's Ice Cream";
  textContainer.appendChild(h1);

  let h2 = document.createElement('h2');
  h2.textContent = "Tasty Yet Affordable Ice Creams!";
  textContainer.appendChild(h2);

  let menuBtn = document.createElement('button');
  menuBtn.id = "menu-btn";
  menuBtn.textContent = "Menu";
  textContainer.appendChild(menuBtn);

  menuBtn.addEventListener('click', () => {
    _components__WEBPACK_IMPORTED_MODULE_1__.navigations.querySelectorAll('button').forEach((button) => {
      button.classList.remove('active');
  
      if (button.textContent === "Menu") {
        button.classList.add('active');
      }
    })

    while (_components__WEBPACK_IMPORTED_MODULE_1__.content.firstChild) {
      _components__WEBPACK_IMPORTED_MODULE_1__.content.removeChild(_components__WEBPACK_IMPORTED_MODULE_1__.content.firstChild);
    }

    _components__WEBPACK_IMPORTED_MODULE_1__.content.appendChild((0,_menu__WEBPACK_IMPORTED_MODULE_0__.attachMenu)());
    
  })

  return home;
}



/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_main_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../style/main.css */ "./src/style/main.css");
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home */ "./src/js/home.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu */ "./src/js/menu.js");
/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact */ "./src/js/contact.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components */ "./src/js/components.js");


//sections to attach base on nav-btn




//components




_components__WEBPACK_IMPORTED_MODULE_4__.content.appendChild((0,_home__WEBPACK_IMPORTED_MODULE_1__.attachHome)());

_components__WEBPACK_IMPORTED_MODULE_4__.navigations.addEventListener('click', (event) => {
  let target = event.target;

  if (target.textContent != 'Home' && target.textContent != 'Menu' && target.textContent != 'Contact') {
    return;
  }
  
  _components__WEBPACK_IMPORTED_MODULE_4__.navigations.querySelectorAll('button').forEach((button) => {
    button.classList.remove('active');
  })

  target.classList.add('active');

  if (target.textContent == 'Home') {
    while (_components__WEBPACK_IMPORTED_MODULE_4__.content.firstChild) {
      _components__WEBPACK_IMPORTED_MODULE_4__.content.removeChild(_components__WEBPACK_IMPORTED_MODULE_4__.content.firstChild);
    }
    _components__WEBPACK_IMPORTED_MODULE_4__.content.appendChild((0,_home__WEBPACK_IMPORTED_MODULE_1__.attachHome)());
  }
  else if (target.textContent == 'Menu') {
    while (_components__WEBPACK_IMPORTED_MODULE_4__.content.firstChild) {
      _components__WEBPACK_IMPORTED_MODULE_4__.content.removeChild(_components__WEBPACK_IMPORTED_MODULE_4__.content.firstChild);
    }
    _components__WEBPACK_IMPORTED_MODULE_4__.content.appendChild((0,_menu__WEBPACK_IMPORTED_MODULE_2__.attachMenu)());
  }
  else if (target.textContent == 'Contact') {
    while (_components__WEBPACK_IMPORTED_MODULE_4__.content.firstChild) {
      _components__WEBPACK_IMPORTED_MODULE_4__.content.removeChild(_components__WEBPACK_IMPORTED_MODULE_4__.content.firstChild);
    }
    _components__WEBPACK_IMPORTED_MODULE_4__.content.appendChild((0,_contact__WEBPACK_IMPORTED_MODULE_3__.attachContact)());
  }
})

/***/ }),

/***/ "./src/js/menu.js":
/*!************************!*\
  !*** ./src/js/menu.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   attachMenu: () => (/* binding */ attachMenu)
/* harmony export */ });
/* harmony import */ var _assets_chocolate_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/chocolate.jpg */ "./src/assets/chocolate.jpg");
/* harmony import */ var _assets_banana_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/banana.jpg */ "./src/assets/banana.jpg");
/* harmony import */ var _assets_pineapple_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/pineapple.jpg */ "./src/assets/pineapple.jpg");
/* harmony import */ var _assets_vanilla_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/vanilla.jpg */ "./src/assets/vanilla.jpg");
/* harmony import */ var _assets_blackcherry_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/blackcherry.jpg */ "./src/assets/blackcherry.jpg");
/* harmony import */ var _assets_cookiesncream_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../assets/cookiesncream.jpg */ "./src/assets/cookiesncream.jpg");
/* harmony import */ var _assets_butterbrittle_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../assets/butterbrittle.jpg */ "./src/assets/butterbrittle.jpg");
/* harmony import */ var _assets_caramelcollision_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../assets/caramelcollision.jpg */ "./src/assets/caramelcollision.jpg");










function attachMenu() {
  let menu = document.createElement('div');
  menu.id = 'menu';

  let h1 = document.createElement('h1');
  h1.textContent = "Menu";
  menu.appendChild(h1);

  let menuContainer = document.createElement('div');
  menuContainer.classList.add('menu-container');
  menu.appendChild(menuContainer);

  let icContainer = document.createElement('div');
  icContainer.classList.add('ic-container');
  menuContainer.appendChild(icContainer);

  icContainer.appendChild(addProduct(_assets_chocolate_jpg__WEBPACK_IMPORTED_MODULE_0__, 'Chocolate', '25.00'));
  icContainer.appendChild(addProduct(_assets_banana_jpg__WEBPACK_IMPORTED_MODULE_1__, 'Banana', '25.00'));
  icContainer.appendChild(addProduct(_assets_pineapple_jpg__WEBPACK_IMPORTED_MODULE_2__, 'Pineapple', '25.00'));
  icContainer.appendChild(addProduct(_assets_vanilla_jpg__WEBPACK_IMPORTED_MODULE_3__, 'Vanilla', '25.00'));
  icContainer.appendChild(addProduct(_assets_blackcherry_jpg__WEBPACK_IMPORTED_MODULE_4__, 'Black Cherry', '28.00'));
  icContainer.appendChild(addProduct(_assets_cookiesncream_jpg__WEBPACK_IMPORTED_MODULE_5__, 'Cookies & Cream', '28.00'));
  icContainer.appendChild(addProduct(_assets_butterbrittle_jpg__WEBPACK_IMPORTED_MODULE_6__, 'Butter Brittle', '30.00'));
  icContainer.appendChild(addProduct(_assets_caramelcollision_jpg__WEBPACK_IMPORTED_MODULE_7__, 'Caramel Collision', '30.00'));

  return menu;
}

function addProduct(imgSrc, flavor, price) {

  let product = document.createElement('div');
  product.classList.add('product');

  let imgContainer = document.createElement('div');
  imgContainer.classList.add('product-img-container');
  product.appendChild(imgContainer);

  let productImg = document.createElement('img');
  productImg.src = imgSrc;
  imgContainer.append(productImg);

  let infoContainer = document.createElement('div');
  infoContainer.classList.add('product-info-container');
  product.appendChild(infoContainer);

  let productName = document.createElement('p');
  productName.classList.add('product-name');
  productName.textContent = flavor + " Ice Cream";
  infoContainer.appendChild(productName);

  let productPrice = document.createElement('p');
  productPrice.classList.add('product-price');
  productPrice.textContent = "Php " + price;
  infoContainer.appendChild(productPrice);

  return product;
}

/***/ }),

/***/ "./src/assets/banana.jpg":
/*!*******************************!*\
  !*** ./src/assets/banana.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7e188448dff155fc97c5.jpg";

/***/ }),

/***/ "./src/assets/blackcherry.jpg":
/*!************************************!*\
  !*** ./src/assets/blackcherry.jpg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "932ba6d203276b59c6c2.jpg";

/***/ }),

/***/ "./src/assets/butterbrittle.jpg":
/*!**************************************!*\
  !*** ./src/assets/butterbrittle.jpg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "6ad35d55585d89359e18.jpg";

/***/ }),

/***/ "./src/assets/caramelcollision.jpg":
/*!*****************************************!*\
  !*** ./src/assets/caramelcollision.jpg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e9448ab274fb61c30e50.jpg";

/***/ }),

/***/ "./src/assets/chocolate.jpg":
/*!**********************************!*\
  !*** ./src/assets/chocolate.jpg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4f0d1eb44d52ad67f0f4.jpg";

/***/ }),

/***/ "./src/assets/cookiesncream.jpg":
/*!**************************************!*\
  !*** ./src/assets/cookiesncream.jpg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "cb22198b94e2440034a0.jpg";

/***/ }),

/***/ "./src/assets/home-bg.jpg":
/*!********************************!*\
  !*** ./src/assets/home-bg.jpg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e0e62afc0bad8309cf39.jpg";

/***/ }),

/***/ "./src/assets/pineapple.jpg":
/*!**********************************!*\
  !*** ./src/assets/pineapple.jpg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7e188448dff155fc97c5.jpg";

/***/ }),

/***/ "./src/assets/vanilla.jpg":
/*!********************************!*\
  !*** ./src/assets/vanilla.jpg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "68c2d744c44a41749cfb.jpg";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/js/main.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzZHO0FBQ2pCO0FBQ087QUFDbkcsNENBQTRDLHNIQUF3QztBQUNwRiw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLDRJQUE0SSxnQ0FBZ0M7QUFDNUsseUNBQXlDLHNGQUErQjtBQUN4RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixtQ0FBbUM7QUFDdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsT0FBTyxxRkFBcUYsWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8s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QUFDSTtBQUNRO0FBQ047QUFDRztBQUNyRDtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUNBQXFDLGtEQUFTO0FBQzlDLHFDQUFxQywrQ0FBTTtBQUMzQyxxQ0FBcUMsa0RBQVM7QUFDOUMscUNBQXFDLGdEQUFPO0FBQzVDLHFDQUFxQyxvREFBTztBQUM1QyxxQ0FBcUMsc0RBQWE7QUFDbEQscUNBQXFDLHNEQUFPO0FBQzVDLHFDQUFxQyx5REFBTztBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnRwYWdlLy4vc3JjL3N0eWxlL21haW4uY3NzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudHBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudHBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudHBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnRwYWdlLy4vc3JjL3N0eWxlL21haW4uY3NzPzgzMzEiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50cGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnRwYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnRwYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudHBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50cGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudHBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnRwYWdlLy4vc3JjL2pzL2NvbXBvbmVudHMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50cGFnZS8uL3NyYy9qcy9jb250YWN0LmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudHBhZ2UvLi9zcmMvanMvaG9tZS5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnRwYWdlLy4vc3JjL2pzL21haW4uanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50cGFnZS8uL3NyYy9qcy9tZW51LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuLi9hc3NldHMvaG9tZS1iZy5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU51bml0bytTYW5zOml0YWwsb3Bzeix3Z2h0QDAsNi4uMTIsMjAwLi4xMDAwOzEsNi4uMTIsMjAwLi4xMDAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYDpyb290IHtcclxuICAtLXByaW1hcnktY29sb3I6ICNGRkY3RjE7XHJcbiAgLS1zZWNvbmRhcnktY29sb3I6ICNGRkU0Qzk7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGZvbnQtZmFtaWx5OiBcIk51bml0byBTYW5zXCI7XHJcbn1cclxuXHJcbmJvZHkge1xyXG4gIG1hcmdpbjogMHB4O1xyXG4gIGhlaWdodDogMTAwZHZoO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbmhlYWRlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTtcclxuICBoZWlnaHQ6IDEwMHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCByZ2IoMCwgMCwgMCwgMC4xNSk7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgcGFkZGluZzogMHB4IDQwcHg7XHJcbn1cclxuXHJcbmhlYWRlciBkaXYge1xyXG4gIGZsZXg6IDE7XHJcbn1cclxuXHJcbmhlYWRlciAubG9nby1jb250YWluZXIgcCB7XHJcbiAgZm9udC1zaXplOiAzcmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XHJcbn1cclxuXHJcbmhlYWRlciBuYXYge1xyXG4gIGZsZXg6IDI7XHJcbn1cclxuXHJcbmhlYWRlciBuYXYgdWwge1xyXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBnYXA6IDMwcHg7XHJcbiAgcGFkZGluZzogMHB4O1xyXG59XHJcblxyXG5uYXYgdWwgYnV0dG9uIHtcclxuICBmb250LXNpemU6IDJyZW07XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIHBhZGRpbmc6IDVweCAyMHB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC41cztcclxufVxyXG5cclxubmF2IHVsIGJ1dHRvbjpob3ZlciB7XHJcbiAgY29sb3I6IHZhcigtLXNlY29uZGFyeS1jb2xvcik7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgYm9yZGVyLXJhZGl1czogMnJlbTtcclxufVxyXG5cclxuI2NvbnRlbnQge1xyXG4gIGZsZXg6MTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG4jaG9tZSB7XHJcbiAgZmxleDogMTtcclxuICBiYWNrZ3JvdW5kOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSk7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBjZW50ZXI7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbm5hdiAuYWN0aXZlIHtcclxuICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICBib3JkZXItcmFkaXVzOiAycmVtO1xyXG59XHJcblxyXG4udGV4dC1jb250YWluZXIge1xyXG4gIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAwLCAwLCAwLjUpO1xyXG4gIHBhZGRpbmc6IDMwcHggNDBweDtcclxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4udGV4dC1jb250YWluZXIgaDEsXHJcbi50ZXh0LWNvbnRhaW5lciBoMixcclxuLnRleHQtY29udGFpbmVyIHAge1xyXG4gIG1hcmdpbjogMHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLnRleHQtY29udGFpbmVyIGgxe1xyXG4gIGZvbnQtc2l6ZTogNnJlbTtcclxuICBmb250LXdlaWdodDogOTAwO1xyXG4gIG1hcmdpbjogMHB4O1xyXG59XHJcblxyXG4udGV4dC1jb250YWluZXIgaDIge1xyXG4gIGZvbnQtc2l6ZTogMi41cmVtO1xyXG59XHJcblxyXG4udGV4dC1jb250YWluZXIgYnV0dG9uIHtcclxuICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gIGZvbnQtc2l6ZTogMnJlbTtcclxuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcclxuICBwYWRkaW5nOiA1cHggMjBweDtcclxuICBib3JkZXItcmFkaXVzOiAycmVtO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY29sb3IpOyBcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG4gIHRyYW5zaXRpb246ICBhbGwgMC41cztcclxufVxyXG5cclxuLnRleHQtY29udGFpbmVyIGJ1dHRvbjpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTtcclxuICBjb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcbi50ZXh0LWNvbnRhaW5lciBidXR0b246YWN0aXZlIHtcclxuICB0cmFuc2l0aW9uOiBhbGwgMHM7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgY29sb3I6IHZhcigtLXNlY29uZGFyeS1jb2xvcik7XHJcbn1cclxuXHJcbiNtZW51IHtcclxuICBmbGV4OiAxO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHBhZGRpbmctYm90dG9tOiA1MHB4O1xyXG59XHJcblxyXG4jbWVudSBoMSB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogMi41cmVtO1xyXG59XHJcblxyXG4ubWVudS1jb250YWluZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeS1jb2xvcik7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiKDAsIDAsIDAsIDAuMik7XHJcbiAgd2lkdGg6IDgwJTtcclxuICBwYWRkaW5nOiAxMHB4IDIwcHggMjVweDtcclxuICBib3JkZXItcmFkaXVzOiAxcmVtO1xyXG4gIFxyXG59XHJcblxyXG4ubWVudS1jb250YWluZXIgaDIge1xyXG4gIGZvbnQtc2l6ZTogMi41cmVtO1xyXG4gIG1hcmdpbjogNXB4IDBweDtcclxufVxyXG5cclxuLm1lbnUtY29udGFpbmVyIC5pYy1jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgzMDBweCwgMWZyKSk7XHJcbiAgZ2FwOiAzMHB4O1xyXG59XHJcblxyXG4uaWMtY29udGFpbmVyID4gZGl2IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICBib3JkZXItcmFkaXVzOiAxcmVtO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBnYXA6IDIwcHg7XHJcbn1cclxuXHJcbi5pYy1jb250YWluZXIgZGl2IC5wcm9kdWN0LWltZy1jb250YWluZXIge1xyXG4gIGhlaWdodDogODAlO1xyXG59XHJcblxyXG4uaWMtY29udGFpbmVyIGRpdiAucHJvZHVjdC1pbWctY29udGFpbmVyIGltZyB7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIG1heC1oZWlnaHQ6IDI1MHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDJyZW07XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxufVxyXG5cclxuLnByb2R1Y3QtaW5mby1jb250YWluZXIgcCB7XHJcbiAgbWFyZ2luOiAwcHg7XHJcbn1cclxuXHJcbi5wcm9kdWN0LWluZm8tY29udGFpbmVyIC5wcm9kdWN0LW5hbWUge1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xyXG59XHJcblxyXG4ucHJvZHVjdC1pbmZvLWNvbnRhaW5lciAucHJvZHVjdC1wcmljZSB7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiAxLjFyZW07XHJcbiAgbWFyZ2luLXRvcDogNXB4O1xyXG59XHJcblxyXG4jY29udGFjdCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XHJcbiAgZmxleDogMTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBwYWRkaW5nLWJvdHRvbTogNTBweDtcclxufVxyXG5cclxuI2NvbnRhY3QgaDEge1xyXG4gIGZvbnQtc2l6ZTogMi41cmVtO1xyXG59XHJcblxyXG4jY29udGFjdCAuY29udGFjdC1jb250YWluZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeS1jb2xvcik7XHJcbiAgd2lkdGg6IDUwJTtcclxuICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMCwgMCwgMCwgMC4zKTtcclxuICBib3JkZXItcmFkaXVzOiAycmVtO1xyXG59XHJcblxyXG4uY29udGFjdC1jb250YWluZXIgaDJ7XHJcbiAgZm9udC1zaXplOiAycmVtO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6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Q0FBc0M7RUFDdEMsT0FBTztFQUNQLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSx3Q0FBd0M7RUFDeEMsVUFBVTtFQUNWLG1DQUFtQztFQUNuQyxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxlQUFlO0VBQ2Ysa0JBQWtCO0FBQ3BCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU51bml0bytTYW5zOml0YWwsb3Bzeix3Z2h0QDAsNi4uMTIsMjAwLi4xMDAwOzEsNi4uMTIsMjAwLi4xMDAwJmRpc3BsYXk9c3dhcCcpO1xcclxcblxcclxcbjpyb290IHtcXHJcXG4gIC0tcHJpbWFyeS1jb2xvcjogI0ZGRjdGMTtcXHJcXG4gIC0tc2Vjb25kYXJ5LWNvbG9yOiAjRkZFNEM5O1xcclxcbiAgZm9udC1zaXplOiAxNnB4O1xcclxcbiAgZm9udC1mYW1pbHk6IFxcXCJOdW5pdG8gU2Fuc1xcXCI7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgbWFyZ2luOiAwcHg7XFxyXFxuICBoZWlnaHQ6IDEwMGR2aDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbn1cXHJcXG5cXHJcXG5oZWFkZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTtcXHJcXG4gIGhlaWdodDogMTAwcHg7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCByZ2IoMCwgMCwgMCwgMC4xNSk7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBwYWRkaW5nOiAwcHggNDBweDtcXHJcXG59XFxyXFxuXFxyXFxuaGVhZGVyIGRpdiB7XFxyXFxuICBmbGV4OiAxO1xcclxcbn1cXHJcXG5cXHJcXG5oZWFkZXIgLmxvZ28tY29udGFpbmVyIHAge1xcclxcbiAgZm9udC1zaXplOiAzcmVtO1xcclxcbiAgZm9udC13ZWlnaHQ6IDkwMDtcXHJcXG59XFxyXFxuXFxyXFxuaGVhZGVyIG5hdiB7XFxyXFxuICBmbGV4OiAyO1xcclxcbn1cXHJcXG5cXHJcXG5oZWFkZXIgbmF2IHVsIHtcXHJcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBnYXA6IDMwcHg7XFxyXFxuICBwYWRkaW5nOiAwcHg7XFxyXFxufVxcclxcblxcclxcbm5hdiB1bCBidXR0b24ge1xcclxcbiAgZm9udC1zaXplOiAycmVtO1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxuICBwYWRkaW5nOiA1cHggMjBweDtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIHRyYW5zaXRpb246IGFsbCAwLjVzO1xcclxcbn1cXHJcXG5cXHJcXG5uYXYgdWwgYnV0dG9uOmhvdmVyIHtcXHJcXG4gIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxyXFxuICBib3JkZXItcmFkaXVzOiAycmVtO1xcclxcbn1cXHJcXG5cXHJcXG4jY29udGVudCB7XFxyXFxuICBmbGV4OjE7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbn1cXHJcXG5cXHJcXG4jaG9tZSB7XFxyXFxuICBmbGV4OiAxO1xcclxcbiAgYmFja2dyb3VuZDogdXJsKC4uL2Fzc2V0cy9ob21lLWJnLmpwZyk7XFxyXFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcclxcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcclxcbiAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBjZW50ZXI7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxubmF2IC5hY3RpdmUge1xcclxcbiAgY29sb3I6IHZhcigtLXNlY29uZGFyeS1jb2xvcik7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDJyZW07XFxyXFxufVxcclxcblxcclxcbi50ZXh0LWNvbnRhaW5lciB7XFxyXFxuICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAwLCAwLCAwLjUpO1xcclxcbiAgcGFkZGluZzogMzBweCA0MHB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnRleHQtY29udGFpbmVyIGgxLFxcclxcbi50ZXh0LWNvbnRhaW5lciBoMixcXHJcXG4udGV4dC1jb250YWluZXIgcCB7XFxyXFxuICBtYXJnaW46IDBweDtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnRleHQtY29udGFpbmVyIGgxe1xcclxcbiAgZm9udC1zaXplOiA2cmVtO1xcclxcbiAgZm9udC13ZWlnaHQ6IDkwMDtcXHJcXG4gIG1hcmdpbjogMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4udGV4dC1jb250YWluZXIgaDIge1xcclxcbiAgZm9udC1zaXplOiAyLjVyZW07XFxyXFxufVxcclxcblxcclxcbi50ZXh0LWNvbnRhaW5lciBidXR0b24ge1xcclxcbiAgbWFyZ2luLXRvcDogMjBweDtcXHJcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXHJcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLXByaW1hcnktY29sb3IpO1xcclxcbiAgcGFkZGluZzogNXB4IDIwcHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiAycmVtO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxuICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTsgXFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuXFxyXFxuICB0cmFuc2l0aW9uOiAgYWxsIDAuNXM7XFxyXFxufVxcclxcblxcclxcbi50ZXh0LWNvbnRhaW5lciBidXR0b246aG92ZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTtcXHJcXG4gIGNvbG9yOiBibGFjaztcXHJcXG59XFxyXFxuXFxyXFxuLnRleHQtY29udGFpbmVyIGJ1dHRvbjphY3RpdmUge1xcclxcbiAgdHJhbnNpdGlvbjogYWxsIDBzO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxyXFxuICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTtcXHJcXG59XFxyXFxuXFxyXFxuI21lbnUge1xcclxcbiAgZmxleDogMTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgcGFkZGluZy1ib3R0b206IDUwcHg7XFxyXFxufVxcclxcblxcclxcbiNtZW51IGgxIHtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGZvbnQtc2l6ZTogMi41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudS1jb250YWluZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYigwLCAwLCAwLCAwLjIpO1xcclxcbiAgd2lkdGg6IDgwJTtcXHJcXG4gIHBhZGRpbmc6IDEwcHggMjBweCAyNXB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcXHJcXG4gIFxcclxcbn1cXHJcXG5cXHJcXG4ubWVudS1jb250YWluZXIgaDIge1xcclxcbiAgZm9udC1zaXplOiAyLjVyZW07XFxyXFxuICBtYXJnaW46IDVweCAwcHg7XFxyXFxufVxcclxcblxcclxcbi5tZW51LWNvbnRhaW5lciAuaWMtY29udGFpbmVyIHtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDMwMHB4LCAxZnIpKTtcXHJcXG4gIGdhcDogMzBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmljLWNvbnRhaW5lciA+IGRpdiB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gIGdhcDogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmljLWNvbnRhaW5lciBkaXYgLnByb2R1Y3QtaW1nLWNvbnRhaW5lciB7XFxyXFxuICBoZWlnaHQ6IDgwJTtcXHJcXG59XFxyXFxuXFxyXFxuLmljLWNvbnRhaW5lciBkaXYgLnByb2R1Y3QtaW1nLWNvbnRhaW5lciBpbWcge1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgbWF4LWhlaWdodDogMjUwcHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiAycmVtO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvZHVjdC1pbmZvLWNvbnRhaW5lciBwIHtcXHJcXG4gIG1hcmdpbjogMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvZHVjdC1pbmZvLWNvbnRhaW5lciAucHJvZHVjdC1uYW1lIHtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBmb250LXNpemU6IDEuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2R1Y3QtaW5mby1jb250YWluZXIgLnByb2R1Y3QtcHJpY2Uge1xcclxcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xcclxcbiAgbWFyZ2luLXRvcDogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4jY29udGFjdCB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcXHJcXG4gIGZsZXg6IDE7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIHBhZGRpbmctYm90dG9tOiA1MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4jY29udGFjdCBoMSB7XFxyXFxuICBmb250LXNpemU6IDIuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuI2NvbnRhY3QgLmNvbnRhY3QtY29udGFpbmVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeS1jb2xvcik7XFxyXFxuICB3aWR0aDogNTAlO1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiKDAsIDAsIDAsIDAuMyk7XFxyXFxuICBib3JkZXItcmFkaXVzOiAycmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGFjdC1jb250YWluZXIgaDJ7XFxyXFxuICBmb250LXNpemU6IDJyZW07XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tYWluLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xub3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21haW4uY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJleHBvcnQgY29uc3QgbmF2aWdhdGlvbnMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmF2aWdhdGlvbnMnKTtcclxuZXhwb3J0IGNvbnN0IG1lbnVidG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWVudS1idG4nKTtcclxuZXhwb3J0IGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpOyIsIlxyXG5leHBvcnQgZnVuY3Rpb24gYXR0YWNoQ29udGFjdCgpIHtcclxuXHJcbiAgbGV0IGNvbnRhY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBjb250YWN0LmlkID0gJ2NvbnRhY3QnO1xyXG5cclxuICBsZXQgaDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xyXG4gIGgxLnRleHRDb250ZW50ID0gXCJDb250YWN0XCI7XHJcbiAgY29udGFjdC5hcHBlbmRDaGlsZChoMSk7XHJcblxyXG4gIGxldCBjb250YWN0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgY29udGFjdENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdjb250YWN0LWNvbnRhaW5lcicpO1xyXG4gIGNvbnRhY3QuYXBwZW5kQ2hpbGQoY29udGFjdENvbnRhaW5lcik7XHJcblxyXG4gIGxldCBuYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcclxuICBuYW1lLnRleHRDb250ZW50ID0gXCJaYWlydXMgQmVybWlsbG9cIjtcclxuXHJcbiAgbGV0IGZiID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcclxuICBmYi50ZXh0Q29udGVudCA9IFwiRmFjZWJvb2s6XCI7XHJcbiAgY29udGFjdENvbnRhaW5lci5hcHBlbmRDaGlsZChmYik7XHJcbiAgY29udGFjdENvbnRhaW5lci5hcHBlbmRDaGlsZChuYW1lKTtcclxuICBcclxuICBsZXQgaWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xyXG4gIGlnLnRleHRDb250ZW50ID0gXCJJbnN0YWdyYW06XCI7XHJcbiAgY29udGFjdENvbnRhaW5lci5hcHBlbmRDaGlsZChpZyk7XHJcbiAgY29udGFjdENvbnRhaW5lci5hcHBlbmRDaGlsZChuYW1lKTtcclxuXHJcbiAgbGV0IGdoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcclxuICBnaC50ZXh0Q29udGVudCA9IFwiR2l0aHViOlwiO1xyXG4gIGNvbnRhY3RDb250YWluZXIuYXBwZW5kQ2hpbGQoZ2gpO1xyXG5cclxuICBsZXQgdW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xyXG4gIGdoLnRleHRDb250ZW50ID0gXCIhWmFpcnVzXCI7XHJcbiAgY29udGFjdENvbnRhaW5lci5hcHBlbmRDaGlsZCh1bik7XHJcblxyXG4gIHJldHVybiBjb250YWN0O1xyXG59IiwiaW1wb3J0IHsgYXR0YWNoTWVudSB9IGZyb20gXCIuL21lbnVcIjtcclxuXHJcbi8vY29tcG9uZW50c1xyXG5pbXBvcnQgeyBjb250ZW50IH0gZnJvbSAnLi9jb21wb25lbnRzJztcclxuaW1wb3J0IHsgbmF2aWdhdGlvbnMgfSBmcm9tICcuL2NvbXBvbmVudHMnO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGF0dGFjaEhvbWUoKSB7XHJcbiAgbGV0IGhvbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBob21lLmlkID0gJ2hvbWUnO1xyXG5cclxuICBsZXQgaG9tZWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBob21lZS5jbGFzc0xpc3QuYWRkKCdob21lJyk7XHJcbiAgaG9tZS5hcHBlbmRDaGlsZChob21lZSk7XHJcblxyXG4gIGxldCB0ZXh0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgdGV4dENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCd0ZXh0LWNvbnRhaW5lcicpO1xyXG4gIGhvbWVlLmFwcGVuZENoaWxkKHRleHRDb250YWluZXIpO1xyXG5cclxuICBsZXQgaDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xyXG4gIGgxLnRleHRDb250ZW50ID0gXCJBZGFtJ3MgSWNlIENyZWFtXCI7XHJcbiAgdGV4dENvbnRhaW5lci5hcHBlbmRDaGlsZChoMSk7XHJcblxyXG4gIGxldCBoMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XHJcbiAgaDIudGV4dENvbnRlbnQgPSBcIlRhc3R5IFlldCBBZmZvcmRhYmxlIEljZSBDcmVhbXMhXCI7XHJcbiAgdGV4dENvbnRhaW5lci5hcHBlbmRDaGlsZChoMik7XHJcblxyXG4gIGxldCBtZW51QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgbWVudUJ0bi5pZCA9IFwibWVudS1idG5cIjtcclxuICBtZW51QnRuLnRleHRDb250ZW50ID0gXCJNZW51XCI7XHJcbiAgdGV4dENvbnRhaW5lci5hcHBlbmRDaGlsZChtZW51QnRuKTtcclxuXHJcbiAgbWVudUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgIG5hdmlnYXRpb25zLnF1ZXJ5U2VsZWN0b3JBbGwoJ2J1dHRvbicpLmZvckVhY2goKGJ1dHRvbikgPT4ge1xyXG4gICAgICBidXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcbiAgXHJcbiAgICAgIGlmIChidXR0b24udGV4dENvbnRlbnQgPT09IFwiTWVudVwiKSB7XHJcbiAgICAgICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG4gICAgICB9XHJcbiAgICB9KVxyXG5cclxuICAgIHdoaWxlIChjb250ZW50LmZpcnN0Q2hpbGQpIHtcclxuICAgICAgY29udGVudC5yZW1vdmVDaGlsZChjb250ZW50LmZpcnN0Q2hpbGQpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoYXR0YWNoTWVudSgpKTtcclxuICAgIFxyXG4gIH0pXHJcblxyXG4gIHJldHVybiBob21lO1xyXG59XHJcblxyXG4iLCJpbXBvcnQgJy4uL3N0eWxlL21haW4uY3NzJztcclxuXHJcbi8vc2VjdGlvbnMgdG8gYXR0YWNoIGJhc2Ugb24gbmF2LWJ0blxyXG5pbXBvcnQgeyBhdHRhY2hIb21lIH0gZnJvbSAnLi9ob21lJztcclxuaW1wb3J0IHsgYXR0YWNoTWVudSB9IGZyb20gJy4vbWVudSc7XHJcbmltcG9ydCB7IGF0dGFjaENvbnRhY3QgfSBmcm9tICcuL2NvbnRhY3QnO1xyXG5cclxuLy9jb21wb25lbnRzXHJcbmltcG9ydCB7IGNvbnRlbnQgfSBmcm9tICcuL2NvbXBvbmVudHMnO1xyXG5pbXBvcnQgeyBuYXZpZ2F0aW9ucyB9IGZyb20gJy4vY29tcG9uZW50cyc7XHJcblxyXG5cclxuY29udGVudC5hcHBlbmRDaGlsZChhdHRhY2hIb21lKCkpO1xyXG5cclxubmF2aWdhdGlvbnMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcclxuICBsZXQgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0O1xyXG5cclxuICBpZiAodGFyZ2V0LnRleHRDb250ZW50ICE9ICdIb21lJyAmJiB0YXJnZXQudGV4dENvbnRlbnQgIT0gJ01lbnUnICYmIHRhcmdldC50ZXh0Q29udGVudCAhPSAnQ29udGFjdCcpIHtcclxuICAgIHJldHVybjtcclxuICB9XHJcbiAgXHJcbiAgbmF2aWdhdGlvbnMucXVlcnlTZWxlY3RvckFsbCgnYnV0dG9uJykuZm9yRWFjaCgoYnV0dG9uKSA9PiB7XHJcbiAgICBidXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcbiAgfSlcclxuXHJcbiAgdGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG5cclxuICBpZiAodGFyZ2V0LnRleHRDb250ZW50ID09ICdIb21lJykge1xyXG4gICAgd2hpbGUgKGNvbnRlbnQuZmlyc3RDaGlsZCkge1xyXG4gICAgICBjb250ZW50LnJlbW92ZUNoaWxkKGNvbnRlbnQuZmlyc3RDaGlsZCk7XHJcbiAgICB9XHJcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGF0dGFjaEhvbWUoKSk7XHJcbiAgfVxyXG4gIGVsc2UgaWYgKHRhcmdldC50ZXh0Q29udGVudCA9PSAnTWVudScpIHtcclxuICAgIHdoaWxlIChjb250ZW50LmZpcnN0Q2hpbGQpIHtcclxuICAgICAgY29udGVudC5yZW1vdmVDaGlsZChjb250ZW50LmZpcnN0Q2hpbGQpO1xyXG4gICAgfVxyXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChhdHRhY2hNZW51KCkpO1xyXG4gIH1cclxuICBlbHNlIGlmICh0YXJnZXQudGV4dENvbnRlbnQgPT0gJ0NvbnRhY3QnKSB7XHJcbiAgICB3aGlsZSAoY29udGVudC5maXJzdENoaWxkKSB7XHJcbiAgICAgIGNvbnRlbnQucmVtb3ZlQ2hpbGQoY29udGVudC5maXJzdENoaWxkKTtcclxuICAgIH1cclxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoYXR0YWNoQ29udGFjdCgpKTtcclxuICB9XHJcbn0pIiwiXHJcbmltcG9ydCBjaG9jb2xhdGUgZnJvbSAnLi4vYXNzZXRzL2Nob2NvbGF0ZS5qcGcnO1xyXG5pbXBvcnQgYmFuYW5hIGZyb20gJy4uL2Fzc2V0cy9iYW5hbmEuanBnJztcclxuaW1wb3J0IHBpbmVhcHBsZSBmcm9tICcuLi9hc3NldHMvcGluZWFwcGxlLmpwZyc7XHJcbmltcG9ydCB2YW5pbGxhIGZyb20gJy4uL2Fzc2V0cy92YW5pbGxhLmpwZyc7XHJcbmltcG9ydCBiY2hlcnJ5IGZyb20gJy4uL2Fzc2V0cy9ibGFja2NoZXJyeS5qcGcnO1xyXG5pbXBvcnQgY29va2llc25jcmVhbSBmcm9tICcuLi9hc3NldHMvY29va2llc25jcmVhbS5qcGcnO1xyXG5pbXBvcnQgYnJpdHRsZSBmcm9tICcuLi9hc3NldHMvYnV0dGVyYnJpdHRsZS5qcGcnO1xyXG5pbXBvcnQgY2FyYW1lbCBmcm9tICcuLi9hc3NldHMvY2FyYW1lbGNvbGxpc2lvbi5qcGcnO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGF0dGFjaE1lbnUoKSB7XHJcbiAgbGV0IG1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBtZW51LmlkID0gJ21lbnUnO1xyXG5cclxuICBsZXQgaDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xyXG4gIGgxLnRleHRDb250ZW50ID0gXCJNZW51XCI7XHJcbiAgbWVudS5hcHBlbmRDaGlsZChoMSk7XHJcblxyXG4gIGxldCBtZW51Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgbWVudUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdtZW51LWNvbnRhaW5lcicpO1xyXG4gIG1lbnUuYXBwZW5kQ2hpbGQobWVudUNvbnRhaW5lcik7XHJcblxyXG4gIGxldCBpY0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGljQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2ljLWNvbnRhaW5lcicpO1xyXG4gIG1lbnVDb250YWluZXIuYXBwZW5kQ2hpbGQoaWNDb250YWluZXIpO1xyXG5cclxuICBpY0NvbnRhaW5lci5hcHBlbmRDaGlsZChhZGRQcm9kdWN0KGNob2NvbGF0ZSwgJ0Nob2NvbGF0ZScsICcyNS4wMCcpKTtcclxuICBpY0NvbnRhaW5lci5hcHBlbmRDaGlsZChhZGRQcm9kdWN0KGJhbmFuYSwgJ0JhbmFuYScsICcyNS4wMCcpKTtcclxuICBpY0NvbnRhaW5lci5hcHBlbmRDaGlsZChhZGRQcm9kdWN0KHBpbmVhcHBsZSwgJ1BpbmVhcHBsZScsICcyNS4wMCcpKTtcclxuICBpY0NvbnRhaW5lci5hcHBlbmRDaGlsZChhZGRQcm9kdWN0KHZhbmlsbGEsICdWYW5pbGxhJywgJzI1LjAwJykpO1xyXG4gIGljQ29udGFpbmVyLmFwcGVuZENoaWxkKGFkZFByb2R1Y3QoYmNoZXJyeSwgJ0JsYWNrIENoZXJyeScsICcyOC4wMCcpKTtcclxuICBpY0NvbnRhaW5lci5hcHBlbmRDaGlsZChhZGRQcm9kdWN0KGNvb2tpZXNuY3JlYW0sICdDb29raWVzICYgQ3JlYW0nLCAnMjguMDAnKSk7XHJcbiAgaWNDb250YWluZXIuYXBwZW5kQ2hpbGQoYWRkUHJvZHVjdChicml0dGxlLCAnQnV0dGVyIEJyaXR0bGUnLCAnMzAuMDAnKSk7XHJcbiAgaWNDb250YWluZXIuYXBwZW5kQ2hpbGQoYWRkUHJvZHVjdChjYXJhbWVsLCAnQ2FyYW1lbCBDb2xsaXNpb24nLCAnMzAuMDAnKSk7XHJcblxyXG4gIHJldHVybiBtZW51O1xyXG59XHJcblxyXG5mdW5jdGlvbiBhZGRQcm9kdWN0KGltZ1NyYywgZmxhdm9yLCBwcmljZSkge1xyXG5cclxuICBsZXQgcHJvZHVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIHByb2R1Y3QuY2xhc3NMaXN0LmFkZCgncHJvZHVjdCcpO1xyXG5cclxuICBsZXQgaW1nQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgaW1nQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3Byb2R1Y3QtaW1nLWNvbnRhaW5lcicpO1xyXG4gIHByb2R1Y3QuYXBwZW5kQ2hpbGQoaW1nQ29udGFpbmVyKTtcclxuXHJcbiAgbGV0IHByb2R1Y3RJbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuICBwcm9kdWN0SW1nLnNyYyA9IGltZ1NyYztcclxuICBpbWdDb250YWluZXIuYXBwZW5kKHByb2R1Y3RJbWcpO1xyXG5cclxuICBsZXQgaW5mb0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGluZm9Db250YWluZXIuY2xhc3NMaXN0LmFkZCgncHJvZHVjdC1pbmZvLWNvbnRhaW5lcicpO1xyXG4gIHByb2R1Y3QuYXBwZW5kQ2hpbGQoaW5mb0NvbnRhaW5lcik7XHJcblxyXG4gIGxldCBwcm9kdWN0TmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICBwcm9kdWN0TmFtZS5jbGFzc0xpc3QuYWRkKCdwcm9kdWN0LW5hbWUnKTtcclxuICBwcm9kdWN0TmFtZS50ZXh0Q29udGVudCA9IGZsYXZvciArIFwiIEljZSBDcmVhbVwiO1xyXG4gIGluZm9Db250YWluZXIuYXBwZW5kQ2hpbGQocHJvZHVjdE5hbWUpO1xyXG5cclxuICBsZXQgcHJvZHVjdFByaWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gIHByb2R1Y3RQcmljZS5jbGFzc0xpc3QuYWRkKCdwcm9kdWN0LXByaWNlJyk7XHJcbiAgcHJvZHVjdFByaWNlLnRleHRDb250ZW50ID0gXCJQaHAgXCIgKyBwcmljZTtcclxuICBpbmZvQ29udGFpbmVyLmFwcGVuZENoaWxkKHByb2R1Y3RQcmljZSk7XHJcblxyXG4gIHJldHVybiBwcm9kdWN0O1xyXG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9