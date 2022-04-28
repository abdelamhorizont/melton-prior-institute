"use strict";
exports.id = "component---src-pages-index-js";
exports.ids = ["component---src-pages-index-js"];
exports.modules = {

/***/ "./src/components/articleBody/articleBody.module.scss":
/*!************************************************************!*\
  !*** ./src/components/articleBody/articleBody.module.scss ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "articleBody": () => (/* binding */ articleBody)
/* harmony export */ });
// Exports
var articleBody = "articleBody-module--articleBody--O5VX3";


/***/ }),

/***/ "./src/components/articleTitle/articleTitle.module.scss":
/*!**************************************************************!*\
  !*** ./src/components/articleTitle/articleTitle.module.scss ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "articleTitle": () => (/* binding */ articleTitle)
/* harmony export */ });
// Exports
var articleTitle = "articleTitle-module--articleTitle--9t-0-";


/***/ }),

/***/ "./src/components/layout/layout.module.scss":
/*!**************************************************!*\
  !*** ./src/components/layout/layout.module.scss ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "categories": () => (/* binding */ categories)
/* harmony export */ });
// Exports
var categories = "layout-module--categories--dzDsR";


/***/ }),

/***/ "./src/components/section/section.module.scss":
/*!****************************************************!*\
  !*** ./src/components/section/section.module.scss ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "section": () => (/* binding */ section)
/* harmony export */ });
// Exports
var section = "section-module--section--YiRvb";


/***/ }),

/***/ "./src/pages/index.module.scss":
/*!*************************************!*\
  !*** ./src/pages/index.module.scss ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "categories_lists": () => (/* binding */ categories_lists)
/* harmony export */ });
// Exports
var categories_lists = "index-module--categories_lists--VUILn";


/***/ }),

/***/ "./src/components/articleBody/articleBody.js":
/*!***************************************************!*\
  !*** ./src/components/articleBody/articleBody.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");
/* harmony import */ var _articleBody_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./articleBody.module.scss */ "./src/components/articleBody/articleBody.module.scss");




const ArticleBody = () => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: _articleBody_module_scss__WEBPACK_IMPORTED_MODULE_2__.articleBody
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis necessitatibus, hic molestias cum quasi eum sit obcaecati fuga accusantium quos magni, tempora voluptatem tempore! Laboriosam quas debitis nemo nulla iure!"));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ArticleBody);

/***/ }),

/***/ "./src/components/articleTitle/articleTitle.js":
/*!*****************************************************!*\
  !*** ./src/components/articleTitle/articleTitle.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");
/* harmony import */ var _articleTitle_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./articleTitle.module.scss */ "./src/components/articleTitle/articleTitle.module.scss");




const ArticleTitle = props => {
  if (props.path) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: _articleTitle_module_scss__WEBPACK_IMPORTED_MODULE_2__.articleTitle
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, props.path.author.node.name, " ]"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "[ ", props.path.date), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h1", null, props.path.title)));
  } else {
    return null;
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ArticleTitle);

/***/ }),

/***/ "./src/components/layout/layout.js":
/*!*****************************************!*\
  !*** ./src/components/layout/layout.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");
/* harmony import */ var _layout_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./layout.module.scss */ "./src/components/layout/layout.module.scss");




const Layout = ({
  children
}) => {
  // const data = useStaticQuery(graphql`
  // query {
  //     site {
  //       siteMetadata {
  //         title
  //       }
  //     }
  //   }
  // `)
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: _layout_module_scss__WEBPACK_IMPORTED_MODULE_2__.layout
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("header", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("nav", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(gatsby__WEBPACK_IMPORTED_MODULE_1__.Link, {
    to: "/"
  }, " Melton Prior Institute")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(gatsby__WEBPACK_IMPORTED_MODULE_1__.Link, {
    to: "/meta/about"
  }, "About")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(gatsby__WEBPACK_IMPORTED_MODULE_1__.Link, {
    to: "/meta/contact"
  }, "Contact")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", null, "DE"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", null, "EN"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul", {
    className: _layout_module_scss__WEBPACK_IMPORTED_MODULE_2__.categories
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(gatsby__WEBPACK_IMPORTED_MODULE_1__.Link, {
    to: "/content/features"
  }, "Features")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(gatsby__WEBPACK_IMPORTED_MODULE_1__.Link, {
    to: "/content/pictorials"
  }, "Pictorials")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(gatsby__WEBPACK_IMPORTED_MODULE_1__.Link, {
    to: "/content/collections"
  }, "Collections"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(gatsby__WEBPACK_IMPORTED_MODULE_1__.Link, {
    to: "/"
  }, "search"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
    type: "text"
  }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("main", null, children), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("footer", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(gatsby__WEBPACK_IMPORTED_MODULE_1__.Link, {
    to: "/meta/imprint"
  }, "Imprint")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(gatsby__WEBPACK_IMPORTED_MODULE_1__.Link, {
    to: "/meta/agb"
  }, "AGB")))));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Layout);

/***/ }),

/***/ "./src/components/section/section.js":
/*!*******************************************!*\
  !*** ./src/components/section/section.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");
/* harmony import */ var _section_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./section.module.scss */ "./src/components/section/section.module.scss");




const Section = ({
  children,
  title
}) => {
  // const data = useStaticQuery(graphql`
  // query {
  //     site {
  //       siteMetadata {
  //         title
  //       }
  //     }
  //   }
  // `)
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: _section_module_scss__WEBPACK_IMPORTED_MODULE_2__.section
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h1", null, title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, "]")), children);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Section);

/***/ }),

/***/ "./src/pages/index.js":
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _public_page_data_sq_d_317956085_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../public/page-data/sq/d/317956085.json */ "./public/page-data/sq/d/317956085.json");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");
/* harmony import */ var _components_layout_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/layout/layout */ "./src/components/layout/layout.js");
/* harmony import */ var _components_section_section__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/section/section */ "./src/components/section/section.js");
/* harmony import */ var _components_articleTitle_articleTitle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/articleTitle/articleTitle */ "./src/components/articleTitle/articleTitle.js");
/* harmony import */ var _components_articleBody_articleBody__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/articleBody/articleBody */ "./src/components/articleBody/articleBody.js");
/* harmony import */ var _index_module_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./index.module.scss */ "./src/pages/index.module.scss");









const Homepage = () => {
  const data = _public_page_data_sq_d_317956085_json__WEBPACK_IMPORTED_MODULE_0__.data;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_components_layout_layout__WEBPACK_IMPORTED_MODULE_3__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_components_section_section__WEBPACK_IMPORTED_MODULE_4__["default"], {
    title: "Showcase"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_components_articleTitle_articleTitle__WEBPACK_IMPORTED_MODULE_5__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_components_articleBody_articleBody__WEBPACK_IMPORTED_MODULE_6__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    className: _index_module_scss__WEBPACK_IMPORTED_MODULE_7__.categories_lists
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_components_section_section__WEBPACK_IMPORTED_MODULE_4__["default"], {
    title: "features"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("ul", null, data.allWpPost.edges.map(edge => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(gatsby__WEBPACK_IMPORTED_MODULE_2__.Link, {
    to: `/content${edge.node.uri}`
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_components_articleTitle_articleTitle__WEBPACK_IMPORTED_MODULE_5__["default"], {
    path: edge.node
  })))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_components_section_section__WEBPACK_IMPORTED_MODULE_4__["default"], {
    title: "pictorials"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("ul", null, data.allWpPost.edges.map(edge => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(gatsby__WEBPACK_IMPORTED_MODULE_2__.Link, {
    to: `/content${edge.node.uri}`
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_components_articleTitle_articleTitle__WEBPACK_IMPORTED_MODULE_5__["default"], {
    path: edge.node
  })))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_components_section_section__WEBPACK_IMPORTED_MODULE_4__["default"], {
    title: "collections"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("ul", null, data.allWpPost.edges.map(edge => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(gatsby__WEBPACK_IMPORTED_MODULE_2__.Link, {
    to: `/content${edge.node.uri}`
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_components_articleTitle_articleTitle__WEBPACK_IMPORTED_MODULE_5__["default"], {
    path: edge.node
  }))))))));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Homepage);

/***/ }),

/***/ "./public/page-data/sq/d/317956085.json":
/*!**********************************************!*\
  !*** ./public/page-data/sq/d/317956085.json ***!
  \**********************************************/
/***/ ((module) => {

module.exports = JSON.parse('{"data":{"allWpPost":{"edges":[{"node":{"id":"cG9zdDo3ODgw","categories":{"nodes":[{"name":"features"}]},"title":"Ausbrüche: William Hogarth und die Folgen I: Das Porträt. ( Alexander Roob)","date":"November 1, 2017","author":{"node":{"name":"julius"}},"uri":"/nicht-uebersetzt-alexander-roob-6"}},{"node":{"id":"cG9zdDo4MTM1","categories":{"nodes":[{"name":"features"}]},"title":"Mit dem Stein arbeiten III (Xiaopeng Zhou)","date":"August 2, 2017","author":{"node":{"name":"julius"}},"uri":"/nicht-uebersetzt-xiaopeng-zhou-3"}},{"node":{"id":"cG9zdDo4MTE3","categories":{"nodes":[{"name":"features"}]},"title":"Mit dem Stein arbeiten II (Xiaopeng Zhou)","date":"June 4, 2017","author":{"node":{"name":"julius"}},"uri":"/nicht-uebersetzt-xiaopeng-zhou-2"}}]}}}');

/***/ })

};
;
//# sourceMappingURL=component---src-pages-index-js.js.map