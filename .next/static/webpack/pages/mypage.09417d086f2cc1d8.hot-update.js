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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ MyPage; }\n/* harmony export */ });\n/* harmony import */ var C_Users_Desktop_DevKor_Web_toy_project_toy_project_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var C_Users_Desktop_DevKor_Web_toy_project_toy_project_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_Desktop_DevKor_Web_toy_project_toy_project_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/shared/lib/styled-jsx */ \"./node_modules/next/dist/shared/lib/styled-jsx.js\");\n/* harmony import */ var next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _src_components_header__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../src/components/header */ \"./src/components/header.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-icons/bs */ \"./node_modules/react-icons/bs/index.esm.js\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\n\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction MyPage() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\"), /*#__PURE__*/ id1 = ref[0], setId = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null), user = ref1[0], setUser = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false), loading = ref2[0], setLoading = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null), error = ref3[0], setError = ref3[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function() {\n        if (sessionStorage.getItem(\"userid\") == null) {\n            alert(\"\\uB85C\\uADF8\\uC778\\uC774 \\uD544\\uC694\\uD55C \\uC11C\\uBE44\\uC2A4\\uC785\\uB2C8\\uB2E4.\");\n            next_router__WEBPACK_IMPORTED_MODULE_4___default().push(\"/login\");\n        } else {\n            setId(sessionStorage.getItem(\"userid\"));\n        }\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function() {\n        if (id1 == \"\") return;\n        var fetchUser = function() {\n            var _ref = _asyncToGenerator(C_Users_Desktop_DevKor_Web_toy_project_toy_project_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(id) {\n                var response;\n                return C_Users_Desktop_DevKor_Web_toy_project_toy_project_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                    while(1)switch(_ctx.prev = _ctx.next){\n                        case 0:\n                            _ctx.prev = 0;\n                            //요청이 시작할 때에는 user와 error를 초기화, loading은 True로 바꿔준다.\n                            setUser(null);\n                            setError(null);\n                            setLoading(true);\n                            _ctx.next = 6;\n                            return axios__WEBPACK_IMPORTED_MODULE_7___default().get(\"http://localhost:8080/user/\" + id);\n                        case 6:\n                            response = _ctx.sent;\n                            setUser(String(response.data.name));\n                            _ctx.next = 13;\n                            break;\n                        case 10:\n                            _ctx.prev = 10;\n                            _ctx.t0 = _ctx[\"catch\"](0);\n                            setError(_ctx.t0);\n                        case 13:\n                            setLoading(false);\n                        case 14:\n                        case \"end\":\n                            return _ctx.stop();\n                    }\n                }, _callee, null, [\n                    [\n                        0,\n                        10\n                    ]\n                ]);\n            }));\n            return function fetchUser(id) {\n                return _ref.apply(this, arguments);\n            };\n        }();\n        fetchUser(id1);\n    }, [\n        id1\n    ]);\n    if (loading) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        children: \"\\uB85C\\uB529\\uC911...\"\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\\\uC774\\uC2B9\\uC6B0\\uD559\\uBD80\\uD734\\uD559\\uCEF4\\uD4E8\\uD130\\uD559\\uACFC\\\\Desktop\\\\\\uACE0\\uB824\\uB300\\uD559\\uAD50\\\\DevKor\\\\Web\\\\toy_project\\\\toy_project\\\\pages\\\\mypage.js\",\n        lineNumber: 42,\n        columnNumber: 23\n    }, this);\n    if (error) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        children: \"\\uC5D0\\uB7EC\\uAC00 \\uBC1C\\uC0DD\\uD588\\uC2B5\\uB2C8\\uB2E4.\"\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\\\uC774\\uC2B9\\uC6B0\\uD559\\uBD80\\uD734\\uD559\\uCEF4\\uD4E8\\uD130\\uD559\\uACFC\\\\Desktop\\\\\\uACE0\\uB824\\uB300\\uD559\\uAD50\\\\DevKor\\\\Web\\\\toy_project\\\\toy_project\\\\pages\\\\mypage.js\",\n        lineNumber: 43,\n        columnNumber: 21\n    }, this);\n    if (!user) return null;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: \"jsx-e38e011af61ec3ff\" + \" \" + \"container\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_5___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"title\", {\n                        className: \"jsx-e38e011af61ec3ff\",\n                        children: \"MOV!E | My Page\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\\\uC774\\uC2B9\\uC6B0\\uD559\\uBD80\\uD734\\uD559\\uCEF4\\uD4E8\\uD130\\uD559\\uACFC\\\\Desktop\\\\\\uACE0\\uB824\\uB300\\uD559\\uAD50\\\\DevKor\\\\Web\\\\toy_project\\\\toy_project\\\\pages\\\\mypage.js\",\n                        lineNumber: 49,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\",\n                        className: \"jsx-e38e011af61ec3ff\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\\\uC774\\uC2B9\\uC6B0\\uD559\\uBD80\\uD734\\uD559\\uCEF4\\uD4E8\\uD130\\uD559\\uACFC\\\\Desktop\\\\\\uACE0\\uB824\\uB300\\uD559\\uAD50\\\\DevKor\\\\Web\\\\toy_project\\\\toy_project\\\\pages\\\\mypage.js\",\n                        lineNumber: 50,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\\\uC774\\uC2B9\\uC6B0\\uD559\\uBD80\\uD734\\uD559\\uCEF4\\uD4E8\\uD130\\uD559\\uACFC\\\\Desktop\\\\\\uACE0\\uB824\\uB300\\uD559\\uAD50\\\\DevKor\\\\Web\\\\toy_project\\\\toy_project\\\\pages\\\\mypage.js\",\n                lineNumber: 48,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_src_components_header__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                loginStatus: id1\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\\\uC774\\uC2B9\\uC6B0\\uD559\\uBD80\\uD734\\uD559\\uCEF4\\uD4E8\\uD130\\uD559\\uACFC\\\\Desktop\\\\\\uACE0\\uB824\\uB300\\uD559\\uAD50\\\\DevKor\\\\Web\\\\toy_project\\\\toy_project\\\\pages\\\\mypage.js\",\n                lineNumber: 53,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: \"jsx-e38e011af61ec3ff\" + \" \" + \"wrapper\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        className: \"jsx-e38e011af61ec3ff\" + \" \" + \"title-wrap\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h3\", {\n                            className: \"jsx-e38e011af61ec3ff\",\n                            children: \"\\uB0B4 \\uC815\\uBCF4 | My Page\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\\\uC774\\uC2B9\\uC6B0\\uD559\\uBD80\\uD734\\uD559\\uCEF4\\uD4E8\\uD130\\uD559\\uACFC\\\\Desktop\\\\\\uACE0\\uB824\\uB300\\uD559\\uAD50\\\\DevKor\\\\Web\\\\toy_project\\\\toy_project\\\\pages\\\\mypage.js\",\n                            lineNumber: 57,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\\\uC774\\uC2B9\\uC6B0\\uD559\\uBD80\\uD734\\uD559\\uCEF4\\uD4E8\\uD130\\uD559\\uACFC\\\\Desktop\\\\\\uACE0\\uB824\\uB300\\uD559\\uAD50\\\\DevKor\\\\Web\\\\toy_project\\\\toy_project\\\\pages\\\\mypage.js\",\n                        lineNumber: 56,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        className: \"jsx-e38e011af61ec3ff\" + \" \" + \"member-info-wrapper\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                className: \"jsx-e38e011af61ec3ff\" + \" \" + \"icon-area\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_icons_bs__WEBPACK_IMPORTED_MODULE_8__.BsPersonBadge, {\n                                    size: 80\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\\\uC774\\uC2B9\\uC6B0\\uD559\\uBD80\\uD734\\uD559\\uCEF4\\uD4E8\\uD130\\uD559\\uACFC\\\\Desktop\\\\\\uACE0\\uB824\\uB300\\uD559\\uAD50\\\\DevKor\\\\Web\\\\toy_project\\\\toy_project\\\\pages\\\\mypage.js\",\n                                    lineNumber: 61,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\\\uC774\\uC2B9\\uC6B0\\uD559\\uBD80\\uD734\\uD559\\uCEF4\\uD4E8\\uD130\\uD559\\uACFC\\\\Desktop\\\\\\uACE0\\uB824\\uB300\\uD559\\uAD50\\\\DevKor\\\\Web\\\\toy_project\\\\toy_project\\\\pages\\\\mypage.js\",\n                                lineNumber: 60,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                className: \"jsx-e38e011af61ec3ff\" + \" \" + \"info-row\",\n                                children: [\n                                    \"name: \",\n                                    user,\n                                    \", id: \",\n                                    id1\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\\\uC774\\uC2B9\\uC6B0\\uD559\\uBD80\\uD734\\uD559\\uCEF4\\uD4E8\\uD130\\uD559\\uACFC\\\\Desktop\\\\\\uACE0\\uB824\\uB300\\uD559\\uAD50\\\\DevKor\\\\Web\\\\toy_project\\\\toy_project\\\\pages\\\\mypage.js\",\n                                lineNumber: 63,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\\\uC774\\uC2B9\\uC6B0\\uD559\\uBD80\\uD734\\uD559\\uCEF4\\uD4E8\\uD130\\uD559\\uACFC\\\\Desktop\\\\\\uACE0\\uB824\\uB300\\uD559\\uAD50\\\\DevKor\\\\Web\\\\toy_project\\\\toy_project\\\\pages\\\\mypage.js\",\n                        lineNumber: 59,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\\\uC774\\uC2B9\\uC6B0\\uD559\\uBD80\\uD734\\uD559\\uCEF4\\uD4E8\\uD130\\uD559\\uACFC\\\\Desktop\\\\\\uACE0\\uB824\\uB300\\uD559\\uAD50\\\\DevKor\\\\Web\\\\toy_project\\\\toy_project\\\\pages\\\\mypage.js\",\n                lineNumber: 55,\n                columnNumber: 7\n            }, this),\n            (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_2___default()), {\n                id: \"55aee99913919a90\",\n                children: \".container.jsx-e38e011af61ec3ff{min-height:100vh;width:100vw;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}.wrapper.jsx-e38e011af61ec3ff{width:1400px;margin:0 auto}h3.jsx-e38e011af61ec3ff{font-size:36px;font-weight:500;color:#222;vertical-align:middle;margin:0}.title-wrap.jsx-e38e011af61ec3ff{height:60px;padding-top:30px;border-bottom:3px solid#241d1e;-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;line-height:55px}.member-info-wrapper.jsx-e38e011af61ec3ff{margin-top:60px;width:100%;height:300px;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center}.icon-area.jsx-e38e011af61ec3ff{width:80px;height:80px}.info-row.jsx-e38e011af61ec3ff{margin-left:30px;padding:30px;height:100%;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center}\"\n            }, void 0, false, void 0, this),\n            (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_2___default()), {\n                id: \"ea9baa125a120287\",\n                children: \"html,body{padding:0;margin:0;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif}*{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}\"\n            }, void 0, false, void 0, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\\\uC774\\uC2B9\\uC6B0\\uD559\\uBD80\\uD734\\uD559\\uCEF4\\uD4E8\\uD130\\uD559\\uACFC\\\\Desktop\\\\\\uACE0\\uB824\\uB300\\uD559\\uAD50\\\\DevKor\\\\Web\\\\toy_project\\\\toy_project\\\\pages\\\\mypage.js\",\n        lineNumber: 47,\n        columnNumber: 5\n    }, this);\n};\n_s(MyPage, \"j5yLddj9GZv4HSEOsOTJkIikkUs=\");\n_c = MyPage;\nvar _c;\n$RefreshReg$(_c, \"MyPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QVM7O2tDQUN0Qiw4REFBQ0EsS0FBRztrRUFBVyxZQUFZO2tDQUN6Qiw0RUFBQ00sSUFBRTs7c0NBQUMsK0JBQWM7Ozs7O2dDQUFLOzs7Ozs0QkFDbkI7a0NBQ04sOERBQUNOLEtBQUc7a0VBQVcscUJBQXFCOzswQ0FDbEMsOERBQUNBLEtBQUc7MEVBQVcsV0FBVzswQ0FDeEIsNEVBQUNwQix5REFBYTtvQ0FBQzJCLElBQUksRUFBRSxFQUFFOzs7Ozt3Q0FBSTs7Ozs7b0NBQ3ZCOzBDQUNOLDhEQUFDUCxLQUFHOzBFQUFXLFVBQVU7O29DQUFDLFFBQ2xCO29DQUFDaEIsSUFBSTtvQ0FBQyxRQUFNO29DQUFDRixHQUFFOzs7Ozs7b0NBQ2pCOzs7Ozs7NEJBQ0Y7Ozs7OztvQkFDRjs7Ozs7Ozs7Ozs7Ozs7WUFrRUYsQ0FDTjtDQUNIO0dBL0h1QkQsTUFBTTtBQUFOQSxLQUFBQSxNQUFNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL215cGFnZS5qcz9lOTY3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFJvdXRlciBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xyXG5pbXBvcnQgSGVhZGVyIGZyb20gXCIuLi9zcmMvY29tcG9uZW50cy9oZWFkZXJcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgeyBCc1BlcnNvbkJhZGdlIH0gZnJvbSBcInJlYWN0LWljb25zL2JzXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNeVBhZ2UoKSB7XHJcbiAgY29uc3QgW2lkLCBzZXRJZF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbdXNlciwgc2V0VXNlcl0gPSB1c2VTdGF0ZShudWxsKTtcclxuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZShudWxsKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKFwidXNlcmlkXCIpID09IG51bGwpIHtcclxuICAgICAgYWxlcnQoXCLroZzqt7jsnbjsnbQg7ZWE7JqU7ZWcIOyEnOu5hOyKpOyeheuLiOuLpC5cIik7XHJcbiAgICAgIFJvdXRlci5wdXNoKFwiL2xvZ2luXCIpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgc2V0SWQoc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShcInVzZXJpZFwiKSk7XHJcbiAgICB9XHJcbiAgfSwgW10pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKGlkID09IFwiXCIpIHJldHVybjtcclxuICAgIGNvbnN0IGZldGNoVXNlciA9IGFzeW5jIChpZCkgPT4ge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIC8v7JqU7LKt7J20IOyLnOyeke2VoCDrlYzsl5DripQgdXNlcuyZgCBlcnJvcuulvCDstIjquLDtmZQsIGxvYWRpbmfsnYAgVHJ1ZeuhnCDrsJTqv5TspIDri6QuXHJcbiAgICAgICAgc2V0VXNlcihudWxsKTtcclxuICAgICAgICBzZXRFcnJvcihudWxsKTtcclxuICAgICAgICBzZXRMb2FkaW5nKHRydWUpO1xyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KFwiaHR0cDovL2xvY2FsaG9zdDo4MDgwL3VzZXIvXCIgKyBpZCk7XHJcbiAgICAgICAgc2V0VXNlcihTdHJpbmcocmVzcG9uc2UuZGF0YS5uYW1lKSk7XHJcbiAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICBzZXRFcnJvcihlKTtcclxuICAgICAgfVxyXG4gICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgIH07XHJcblxyXG4gICAgZmV0Y2hVc2VyKGlkKTtcclxuICB9LCBbaWRdKTtcclxuXHJcbiAgaWYgKGxvYWRpbmcpIHJldHVybiA8ZGl2PuuhnOuUqeykkS4uLjwvZGl2PjtcclxuICBpZiAoZXJyb3IpIHJldHVybiA8ZGl2PuyXkOufrOqwgCDrsJzsg53tlojsirXri4jri6QuPC9kaXY+O1xyXG4gIGlmICghdXNlcikgcmV0dXJuIG51bGw7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICA8SGVhZD5cclxuICAgICAgICA8dGl0bGU+TU9WIUUgfCBNeSBQYWdlPC90aXRsZT5cclxuICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiIC8+XHJcbiAgICAgIDwvSGVhZD5cclxuXHJcbiAgICAgIDxIZWFkZXIgbG9naW5TdGF0dXM9e2lkfSAvPlxyXG5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3cmFwcGVyXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZS13cmFwXCI+XHJcbiAgICAgICAgICA8aDM+64K0IOygleuztCB8IE15IFBhZ2U8L2gzPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVtYmVyLWluZm8td3JhcHBlclwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpY29uLWFyZWFcIj5cclxuICAgICAgICAgICAgPEJzUGVyc29uQmFkZ2Ugc2l6ZT17ODB9IC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5mby1yb3dcIj5cclxuICAgICAgICAgICAgbmFtZToge3VzZXJ9LCBpZDoge2lkfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgLmNvbnRhaW5lciB7XHJcbiAgICAgICAgICBtaW4taGVpZ2h0OiAxMDB2aDtcclxuICAgICAgICAgIHdpZHRoOiAxMDB2dztcclxuICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAud3JhcHBlciB7XHJcbiAgICAgICAgICB3aWR0aDogMTQwMHB4O1xyXG4gICAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBoMyB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDM2cHg7XHJcbiAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgICAgY29sb3I6ICMyMjI7XHJcbiAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnRpdGxlLXdyYXAge1xyXG4gICAgICAgICAgaGVpZ2h0OiA2MHB4O1xyXG4gICAgICAgICAgcGFkZGluZy10b3A6IDMwcHg7XHJcbiAgICAgICAgICBib3JkZXItYm90dG9tOiAzcHggc29saWQgIzI0MWQxZTtcclxuICAgICAgICAgIGJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xyXG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDU1cHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAubWVtYmVyLWluZm8td3JhcHBlciB7XHJcbiAgICAgICAgICBtYXJnaW4tdG9wOiA2MHB4O1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICBoZWlnaHQ6IDMwMHB4O1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuaWNvbi1hcmVhIHtcclxuICAgICAgICAgIHdpZHRoOiA4MHB4O1xyXG4gICAgICAgICAgaGVpZ2h0OiA4MHB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmluZm8tcm93IHtcclxuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAzMHB4O1xyXG4gICAgICAgICAgcGFkZGluZzogMzBweDtcclxuICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgICBgfTwvc3R5bGU+XHJcblxyXG4gICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxyXG4gICAgICAgIGh0bWwsXHJcbiAgICAgICAgYm9keSB7XHJcbiAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgU2Vnb2UgVUksIFJvYm90byxcclxuICAgICAgICAgICAgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgRmlyYSBTYW5zLCBEcm9pZCBTYW5zLCBIZWx2ZXRpY2EgTmV1ZSxcclxuICAgICAgICAgICAgc2Fucy1zZXJpZjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICoge1xyXG4gICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgICB9XHJcbiAgICAgIGB9PC9zdHlsZT5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiUm91dGVyIiwiSGVhZCIsIkhlYWRlciIsImF4aW9zIiwiQnNQZXJzb25CYWRnZSIsIk15UGFnZSIsImlkIiwic2V0SWQiLCJ1c2VyIiwic2V0VXNlciIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwiZXJyb3IiLCJzZXRFcnJvciIsInNlc3Npb25TdG9yYWdlIiwiZ2V0SXRlbSIsImFsZXJ0IiwicHVzaCIsImZldGNoVXNlciIsInJlc3BvbnNlIiwiZ2V0IiwiU3RyaW5nIiwiZGF0YSIsIm5hbWUiLCJkaXYiLCJ0aXRsZSIsImxpbmsiLCJyZWwiLCJocmVmIiwibG9naW5TdGF0dXMiLCJoMyIsInNpemUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/mypage.js\n");

/***/ })

});