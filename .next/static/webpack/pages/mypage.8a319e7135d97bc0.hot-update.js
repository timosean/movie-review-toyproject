"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/mypage",{

/***/ "./pages/mypage.js":
/*!*************************!*\
  !*** ./pages/mypage.js ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ MyPage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _src_components_header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/components/header */ \"./src/components/header.js\");\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction MyPage() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), text = ref[0], setText = ref[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        if (sessionStorage.getItem(\"userid\") == null) {\n            alert(\"\\uB85C\\uADF8\\uC778\\uC774 \\uD544\\uC694\\uD55C \\uC11C\\uBE44\\uC2A4\\uC785\\uB2C8\\uB2E4.\");\n            next_router__WEBPACK_IMPORTED_MODULE_2___default().push(\"/login\");\n        } else {\n            setText(sessionStorage.getItem(\"userid\"));\n        }\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"container\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"MOV!E | My Page\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\\\uC774\\uC2B9\\uC6B0\\uD559\\uBD80\\uD734\\uD559\\uCEF4\\uD4E8\\uD130\\uD559\\uACFC\\\\Desktop\\\\\\uACE0\\uB824\\uB300\\uD559\\uAD50\\\\DevKor\\\\Web\\\\toy_project\\\\toy_project\\\\pages\\\\mypage.js\",\n                        lineNumber: 21,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\\\uC774\\uC2B9\\uC6B0\\uD559\\uBD80\\uD734\\uD559\\uCEF4\\uD4E8\\uD130\\uD559\\uACFC\\\\Desktop\\\\\\uACE0\\uB824\\uB300\\uD559\\uAD50\\\\DevKor\\\\Web\\\\toy_project\\\\toy_project\\\\pages\\\\mypage.js\",\n                        lineNumber: 22,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\\\uC774\\uC2B9\\uC6B0\\uD559\\uBD80\\uD734\\uD559\\uCEF4\\uD4E8\\uD130\\uD559\\uACFC\\\\Desktop\\\\\\uACE0\\uB824\\uB300\\uD559\\uAD50\\\\DevKor\\\\Web\\\\toy_project\\\\toy_project\\\\pages\\\\mypage.js\",\n                lineNumber: 20,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_components_header__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                loginStatus: text\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\\\uC774\\uC2B9\\uC6B0\\uD559\\uBD80\\uD734\\uD559\\uCEF4\\uD4E8\\uD130\\uD559\\uACFC\\\\Desktop\\\\\\uACE0\\uB824\\uB300\\uD559\\uAD50\\\\DevKor\\\\Web\\\\toy_project\\\\toy_project\\\\pages\\\\mypage.js\",\n                lineNumber: 25,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: [\n                    \"\\uB2F9\\uC2E0\\uC758 id\\uB294? \",\n                    text\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\\\uC774\\uC2B9\\uC6B0\\uD559\\uBD80\\uD734\\uD559\\uCEF4\\uD4E8\\uD130\\uD559\\uACFC\\\\Desktop\\\\\\uACE0\\uB824\\uB300\\uD559\\uAD50\\\\DevKor\\\\Web\\\\toy_project\\\\toy_project\\\\pages\\\\mypage.js\",\n                lineNumber: 27,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\\\uC774\\uC2B9\\uC6B0\\uD559\\uBD80\\uD734\\uD559\\uCEF4\\uD4E8\\uD130\\uD559\\uACFC\\\\Desktop\\\\\\uACE0\\uB824\\uB300\\uD559\\uAD50\\\\DevKor\\\\Web\\\\toy_project\\\\toy_project\\\\pages\\\\mypage.js\",\n        lineNumber: 19,\n        columnNumber: 5\n    }, this);\n};\n_s(MyPage, \"X84oG7rPwBW3Op/2mv/xhVbwveQ=\");\n_c = MyPage;\nvar _c;\n$RefreshReg$(_c, \"MyPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9teXBhZ2UuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0FBQTRDO0FBQ1g7QUFDSjtBQUNpQjs7QUFFL0IsU0FBU0ssTUFBTSxHQUFHOztJQUMvQixJQUF3QkosR0FBWSxHQUFaQSwrQ0FBUSxDQUFDLEVBQUUsQ0FBQyxFQU50QyxJQU1hLEdBQWFBLEdBQVksR0FBekIsRUFOYixPQU1zQixHQUFJQSxHQUFZLEdBQWhCO0lBRXBCRCxnREFBUyxDQUFDLFdBQU07UUFDZCxJQUFJUSxjQUFjLENBQUNDLE9BQU8sQ0FBQyxRQUFRLENBQUMsSUFBSSxJQUFJLEVBQUU7WUFDNUNDLEtBQUssQ0FBQyxtRkFBa0IsQ0FBMkIsQ0FBQztZQUMxQlIsdURBQWYsQ0FBQyxRQUFRLENBQUMsQ0FBQztTQUN2QixNQUFNO1lBQ0xLLE9BQU8sQ0FBQ0MsY0FBYyxDQUFDQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztTQUMzQztLQUNGLENBQUMsQ0FBQztJQUVILHFCQUNFLDhEQUFDRyxLQUFHO1FBQUNDLFNBQVMsRUFBQyxXQUFXOzswQkFDeEIsOERBQUNWLGtEQUFJOztrQ0FDSCw4REFBQ1csT0FBSztrQ0FBQyxpQkFBZTs7Ozs7NEJBQVE7a0NBQzlCLDhEQUFDQyxNQUFJO3dCQUFDQyxHQUFHLEVBQUMsTUFBTTt3QkFBQ0MsSUFBSSxFQUFDLGNBQWM7Ozs7OzRCQUFHOzs7Ozs7b0JBQ2xDOzBCQUVQLDhEQUFDYiw4REFBTTtnQkFBQ2MsV0FBVyxFQUFFWixJQUFJOzs7OztvQkFBSTswQkFFN0IsOERBQUNhLEdBQUM7O29CQUFDLCtCQUFTO29CQUFDYixJQUFJOzs7Ozs7b0JBQUs7Ozs7OztZQUNsQixDQUNOO0NBQ0g7R0F4QnVCRCxNQUFNO0FBQU5BLEtBQUFBLE1BQU0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbXlwYWdlLmpzP2U5NjciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XHJcbmltcG9ydCBIZWFkZXIgZnJvbSBcIi4uL3NyYy9jb21wb25lbnRzL2hlYWRlclwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTXlQYWdlKCkge1xyXG4gIGNvbnN0IFt0ZXh0LCBzZXRUZXh0XSA9IHVzZVN0YXRlKFwiXCIpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oXCJ1c2VyaWRcIikgPT0gbnVsbCkge1xyXG4gICAgICBhbGVydChcIuuhnOq3uOyduOydtCDtlYTsmpTtlZwg7ISc67mE7Iqk7J6F64uI64ukLlwiKTtcclxuICAgICAgUm91dGVyLnB1c2goXCIvbG9naW5cIik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBzZXRUZXh0KHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oXCJ1c2VyaWRcIikpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPHRpdGxlPk1PViFFIHwgTXkgUGFnZTwvdGl0bGU+XHJcbiAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIiAvPlxyXG4gICAgICA8L0hlYWQ+XHJcblxyXG4gICAgICA8SGVhZGVyIGxvZ2luU3RhdHVzPXt0ZXh0fSAvPlxyXG5cclxuICAgICAgPHA+64u57Iug7J2YIGlk64qUPyB7dGV4dH08L3A+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIlJvdXRlciIsIkhlYWQiLCJIZWFkZXIiLCJNeVBhZ2UiLCJ0ZXh0Iiwic2V0VGV4dCIsInNlc3Npb25TdG9yYWdlIiwiZ2V0SXRlbSIsImFsZXJ0IiwicHVzaCIsImRpdiIsImNsYXNzTmFtZSIsInRpdGxlIiwibGluayIsInJlbCIsImhyZWYiLCJsb2dpblN0YXR1cyIsInAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/mypage.js\n");

/***/ })

});