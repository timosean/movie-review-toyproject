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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ MyPage; }\n/* harmony export */ });\n/* harmony import */ var C_Users_Desktop_DevKor_Web_toy_project_toy_project_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var C_Users_Desktop_DevKor_Web_toy_project_toy_project_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_Desktop_DevKor_Web_toy_project_toy_project_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/shared/lib/styled-jsx */ \"./node_modules/next/dist/shared/lib/styled-jsx.js\");\n/* harmony import */ var next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _src_components_header__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../src/components/header */ \"./src/components/header.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_7__);\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction MyPage() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\"), /*#__PURE__*/ id1 = ref[0], setId = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null), user = ref1[0], setUser = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false), loading = ref2[0], setLoading = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null), error = ref3[0], setError = ref3[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function() {\n        if (sessionStorage.getItem(\"userid\") == null) {\n            alert(\"\\uB85C\\uADF8\\uC778\\uC774 \\uD544\\uC694\\uD55C \\uC11C\\uBE44\\uC2A4\\uC785\\uB2C8\\uB2E4.\");\n            next_router__WEBPACK_IMPORTED_MODULE_4___default().push(\"/login\");\n        } else {\n            setId(sessionStorage.getItem(\"userid\"));\n        }\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function() {\n        var fetchUser = function() {\n            var _ref = _asyncToGenerator(C_Users_Desktop_DevKor_Web_toy_project_toy_project_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(id) {\n                var response;\n                return C_Users_Desktop_DevKor_Web_toy_project_toy_project_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                    while(1)switch(_ctx.prev = _ctx.next){\n                        case 0:\n                            _ctx.prev = 0;\n                            //요청이 시작할 때에는 user와 error를 초기화, loading은 True로 바꿔준다.\n                            setUser(null);\n                            setError(null);\n                            setLoading(true);\n                            console.log(id);\n                            _ctx.next = 7;\n                            return axios__WEBPACK_IMPORTED_MODULE_7___default().get(\"http://localhost:8080/user/\" + id);\n                        case 7:\n                            response = _ctx.sent;\n                            console.log(response.data);\n                            _ctx.next = 11;\n                            return setUser(response.data);\n                        case 11:\n                            _ctx.next = 16;\n                            break;\n                        case 13:\n                            _ctx.prev = 13;\n                            _ctx.t0 = _ctx[\"catch\"](0);\n                            setError(_ctx.t0);\n                        case 16:\n                            setLoading(false);\n                        case 17:\n                        case \"end\":\n                            return _ctx.stop();\n                    }\n                }, _callee, null, [\n                    [\n                        0,\n                        13\n                    ]\n                ]);\n            }));\n            return function fetchUser(id) {\n                return _ref.apply(this, arguments);\n            };\n        }();\n        fetchUser(id1);\n    }, [\n        id1\n    ]);\n    if (loading) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        children: \"\\uB85C\\uB529\\uC911...\"\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\\\uC774\\uC2B9\\uC6B0\\uD559\\uBD80\\uD734\\uD559\\uCEF4\\uD4E8\\uD130\\uD559\\uACFC\\\\Desktop\\\\\\uACE0\\uB824\\uB300\\uD559\\uAD50\\\\DevKor\\\\Web\\\\toy_project\\\\toy_project\\\\pages\\\\mypage.js\",\n        lineNumber: 42,\n        columnNumber: 23\n    }, this);\n    if (error) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        children: \"\\uC5D0\\uB7EC\\uAC00 \\uBC1C\\uC0DD\\uD588\\uC2B5\\uB2C8\\uB2E4.\"\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\\\uC774\\uC2B9\\uC6B0\\uD559\\uBD80\\uD734\\uD559\\uCEF4\\uD4E8\\uD130\\uD559\\uACFC\\\\Desktop\\\\\\uACE0\\uB824\\uB300\\uD559\\uAD50\\\\DevKor\\\\Web\\\\toy_project\\\\toy_project\\\\pages\\\\mypage.js\",\n        lineNumber: 43,\n        columnNumber: 21\n    }, this);\n    if (!user) return null;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: \"jsx-a87bc15ec0b79a69\" + \" \" + \"container\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_5___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"title\", {\n                        className: \"jsx-a87bc15ec0b79a69\",\n                        children: \"MOV!E | My Page\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\\\uC774\\uC2B9\\uC6B0\\uD559\\uBD80\\uD734\\uD559\\uCEF4\\uD4E8\\uD130\\uD559\\uACFC\\\\Desktop\\\\\\uACE0\\uB824\\uB300\\uD559\\uAD50\\\\DevKor\\\\Web\\\\toy_project\\\\toy_project\\\\pages\\\\mypage.js\",\n                        lineNumber: 49,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\",\n                        className: \"jsx-a87bc15ec0b79a69\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\\\uC774\\uC2B9\\uC6B0\\uD559\\uBD80\\uD734\\uD559\\uCEF4\\uD4E8\\uD130\\uD559\\uACFC\\\\Desktop\\\\\\uACE0\\uB824\\uB300\\uD559\\uAD50\\\\DevKor\\\\Web\\\\toy_project\\\\toy_project\\\\pages\\\\mypage.js\",\n                        lineNumber: 50,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\\\uC774\\uC2B9\\uC6B0\\uD559\\uBD80\\uD734\\uD559\\uCEF4\\uD4E8\\uD130\\uD559\\uACFC\\\\Desktop\\\\\\uACE0\\uB824\\uB300\\uD559\\uAD50\\\\DevKor\\\\Web\\\\toy_project\\\\toy_project\\\\pages\\\\mypage.js\",\n                lineNumber: 48,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_src_components_header__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                loginStatus: id1\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\\\uC774\\uC2B9\\uC6B0\\uD559\\uBD80\\uD734\\uD559\\uCEF4\\uD4E8\\uD130\\uD559\\uACFC\\\\Desktop\\\\\\uACE0\\uB824\\uB300\\uD559\\uAD50\\\\DevKor\\\\Web\\\\toy_project\\\\toy_project\\\\pages\\\\mypage.js\",\n                lineNumber: 53,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: \"jsx-a87bc15ec0b79a69\" + \" \" + \"wrapper\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        className: \"jsx-a87bc15ec0b79a69\" + \" \" + \"title-wrap\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h3\", {\n                            className: \"jsx-a87bc15ec0b79a69\",\n                            children: \"\\uB0B4 \\uC815\\uBCF4 | My Page\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\\\uC774\\uC2B9\\uC6B0\\uD559\\uBD80\\uD734\\uD559\\uCEF4\\uD4E8\\uD130\\uD559\\uACFC\\\\Desktop\\\\\\uACE0\\uB824\\uB300\\uD559\\uAD50\\\\DevKor\\\\Web\\\\toy_project\\\\toy_project\\\\pages\\\\mypage.js\",\n                            lineNumber: 57,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\\\uC774\\uC2B9\\uC6B0\\uD559\\uBD80\\uD734\\uD559\\uCEF4\\uD4E8\\uD130\\uD559\\uACFC\\\\Desktop\\\\\\uACE0\\uB824\\uB300\\uD559\\uAD50\\\\DevKor\\\\Web\\\\toy_project\\\\toy_project\\\\pages\\\\mypage.js\",\n                        lineNumber: 56,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        className: \"jsx-a87bc15ec0b79a69\" + \" \" + \"member-info-wrapper\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                            className: \"jsx-a87bc15ec0b79a69\" + \" \" + \"info-row\",\n                            children: user\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\\\uC774\\uC2B9\\uC6B0\\uD559\\uBD80\\uD734\\uD559\\uCEF4\\uD4E8\\uD130\\uD559\\uACFC\\\\Desktop\\\\\\uACE0\\uB824\\uB300\\uD559\\uAD50\\\\DevKor\\\\Web\\\\toy_project\\\\toy_project\\\\pages\\\\mypage.js\",\n                            lineNumber: 60,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\\\uC774\\uC2B9\\uC6B0\\uD559\\uBD80\\uD734\\uD559\\uCEF4\\uD4E8\\uD130\\uD559\\uACFC\\\\Desktop\\\\\\uACE0\\uB824\\uB300\\uD559\\uAD50\\\\DevKor\\\\Web\\\\toy_project\\\\toy_project\\\\pages\\\\mypage.js\",\n                        lineNumber: 59,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\\\uC774\\uC2B9\\uC6B0\\uD559\\uBD80\\uD734\\uD559\\uCEF4\\uD4E8\\uD130\\uD559\\uACFC\\\\Desktop\\\\\\uACE0\\uB824\\uB300\\uD559\\uAD50\\\\DevKor\\\\Web\\\\toy_project\\\\toy_project\\\\pages\\\\mypage.js\",\n                lineNumber: 55,\n                columnNumber: 7\n            }, this),\n            (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_2___default()), {\n                id: \"a68614d4a72ae1d4\",\n                children: \".container.jsx-a87bc15ec0b79a69{min-height:100vh;width:100vw;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}.wrapper.jsx-a87bc15ec0b79a69{width:1400px;margin:0 auto}h3.jsx-a87bc15ec0b79a69{font-size:36px;font-weight:500;color:#222;vertical-align:middle;margin:0}.title-wrap.jsx-a87bc15ec0b79a69{height:60px;padding-top:30px;border-bottom:3px solid#241d1e;-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;line-height:55px}\"\n            }, void 0, false, void 0, this),\n            (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_2___default()), {\n                id: \"ea9baa125a120287\",\n                children: \"html,body{padding:0;margin:0;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif}*{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}\"\n            }, void 0, false, void 0, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\\\uC774\\uC2B9\\uC6B0\\uD559\\uBD80\\uD734\\uD559\\uCEF4\\uD4E8\\uD130\\uD559\\uACFC\\\\Desktop\\\\\\uACE0\\uB824\\uB300\\uD559\\uAD50\\\\DevKor\\\\Web\\\\toy_project\\\\toy_project\\\\pages\\\\mypage.js\",\n        lineNumber: 47,\n        columnNumber: 5\n    }, this);\n};\n_s(MyPage, \"j5yLddj9GZv4HSEOsOTJkIikkUs=\");\n_c = MyPage;\nvar _c;\n$RefreshReg$(_c, \"MyPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RTNCLDhEQUFDa0IsS0FBRzswREFBVyxTQUFTOztrQ0FDdEIsOERBQUNBLEtBQUc7a0VBQVcsWUFBWTtrQ0FDekIsNEVBQUNNLElBQUU7O3NDQUFDLCtCQUFjOzs7OztnQ0FBSzs7Ozs7NEJBQ25CO2tDQUNOLDhEQUFDTixLQUFHO2tFQUFXLHFCQUFxQjtrQ0FDbEMsNEVBQUNBLEtBQUc7c0VBQVcsVUFBVTtzQ0FBRWhCLElBQUk7Ozs7O2dDQUFPOzs7Ozs0QkFDbEM7Ozs7OztvQkFDRjs7Ozs7Ozs7Ozs7Ozs7WUE0Q0YsQ0FDTjtDQUNIO0dBckd1QkgsTUFBTTtBQUFOQSxLQUFBQSxNQUFNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL215cGFnZS5qcz9lOTY3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFJvdXRlciBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xyXG5pbXBvcnQgSGVhZGVyIGZyb20gXCIuLi9zcmMvY29tcG9uZW50cy9oZWFkZXJcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTXlQYWdlKCkge1xyXG4gIGNvbnN0IFtpZCwgc2V0SWRdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW3VzZXIsIHNldFVzZXJdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGUobnVsbCk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShcInVzZXJpZFwiKSA9PSBudWxsKSB7XHJcbiAgICAgIGFsZXJ0KFwi66Gc6re47J247J20IO2VhOyalO2VnCDshJzruYTsiqTsnoXri4jri6QuXCIpO1xyXG4gICAgICBSb3V0ZXIucHVzaChcIi9sb2dpblwiKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHNldElkKHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oXCJ1c2VyaWRcIikpO1xyXG4gICAgfVxyXG4gIH0sIFtdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGZldGNoVXNlciA9IGFzeW5jIChpZCkgPT4ge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIC8v7JqU7LKt7J20IOyLnOyeke2VoCDrlYzsl5DripQgdXNlcuyZgCBlcnJvcuulvCDstIjquLDtmZQsIGxvYWRpbmfsnYAgVHJ1ZeuhnCDrsJTqv5TspIDri6QuXHJcbiAgICAgICAgc2V0VXNlcihudWxsKTtcclxuICAgICAgICBzZXRFcnJvcihudWxsKTtcclxuICAgICAgICBzZXRMb2FkaW5nKHRydWUpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGlkKTtcclxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldChcImh0dHA6Ly9sb2NhbGhvc3Q6ODA4MC91c2VyL1wiICsgaWQpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlLmRhdGEpO1xyXG4gICAgICAgIGF3YWl0IHNldFVzZXIocmVzcG9uc2UuZGF0YSk7XHJcbiAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICBzZXRFcnJvcihlKTtcclxuICAgICAgfVxyXG4gICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgIH07XHJcblxyXG4gICAgZmV0Y2hVc2VyKGlkKTtcclxuICB9LCBbaWRdKTtcclxuXHJcbiAgaWYgKGxvYWRpbmcpIHJldHVybiA8ZGl2PuuhnOuUqeykkS4uLjwvZGl2PjtcclxuICBpZiAoZXJyb3IpIHJldHVybiA8ZGl2PuyXkOufrOqwgCDrsJzsg53tlojsirXri4jri6QuPC9kaXY+O1xyXG4gIGlmICghdXNlcikgcmV0dXJuIG51bGw7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICA8SGVhZD5cclxuICAgICAgICA8dGl0bGU+TU9WIUUgfCBNeSBQYWdlPC90aXRsZT5cclxuICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiIC8+XHJcbiAgICAgIDwvSGVhZD5cclxuXHJcbiAgICAgIDxIZWFkZXIgbG9naW5TdGF0dXM9e2lkfSAvPlxyXG5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3cmFwcGVyXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZS13cmFwXCI+XHJcbiAgICAgICAgICA8aDM+64K0IOygleuztCB8IE15IFBhZ2U8L2gzPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVtYmVyLWluZm8td3JhcHBlclwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbmZvLXJvd1wiPnt1c2VyfTwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgIC5jb250YWluZXIge1xyXG4gICAgICAgICAgbWluLWhlaWdodDogMTAwdmg7XHJcbiAgICAgICAgICB3aWR0aDogMTAwdnc7XHJcbiAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLndyYXBwZXIge1xyXG4gICAgICAgICAgd2lkdGg6IDE0MDBweDtcclxuICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaDMge1xyXG4gICAgICAgICAgZm9udC1zaXplOiAzNnB4O1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICAgIGNvbG9yOiAjMjIyO1xyXG4gICAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC50aXRsZS13cmFwIHtcclxuICAgICAgICAgIGhlaWdodDogNjBweDtcclxuICAgICAgICAgIHBhZGRpbmctdG9wOiAzMHB4O1xyXG4gICAgICAgICAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkICMyNDFkMWU7XHJcbiAgICAgICAgICBib3gtc2l6aW5nOiBjb250ZW50LWJveDtcclxuICAgICAgICAgIGxpbmUtaGVpZ2h0OiA1NXB4O1xyXG4gICAgICAgIH1cclxuICAgICAgYH08L3N0eWxlPlxyXG5cclxuICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcclxuICAgICAgICBodG1sLFxyXG4gICAgICAgIGJvZHkge1xyXG4gICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFNlZ29lIFVJLCBSb2JvdG8sXHJcbiAgICAgICAgICAgIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsIEZpcmEgU2FucywgRHJvaWQgU2FucywgSGVsdmV0aWNhIE5ldWUsXHJcbiAgICAgICAgICAgIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAqIHtcclxuICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgICAgfVxyXG4gICAgICBgfTwvc3R5bGU+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIlJvdXRlciIsIkhlYWQiLCJIZWFkZXIiLCJheGlvcyIsIk15UGFnZSIsImlkIiwic2V0SWQiLCJ1c2VyIiwic2V0VXNlciIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwiZXJyb3IiLCJzZXRFcnJvciIsInNlc3Npb25TdG9yYWdlIiwiZ2V0SXRlbSIsImFsZXJ0IiwicHVzaCIsImZldGNoVXNlciIsInJlc3BvbnNlIiwiY29uc29sZSIsImxvZyIsImdldCIsImRhdGEiLCJkaXYiLCJ0aXRsZSIsImxpbmsiLCJyZWwiLCJocmVmIiwibG9naW5TdGF0dXMiLCJoMyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/mypage.js\n");

/***/ })

});