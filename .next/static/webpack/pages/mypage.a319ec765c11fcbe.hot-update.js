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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ MyPage; }\n/* harmony export */ });\n/* harmony import */ var C_Users_Desktop_DevKor_Web_toy_project_toy_project_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var C_Users_Desktop_DevKor_Web_toy_project_toy_project_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_Desktop_DevKor_Web_toy_project_toy_project_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/shared/lib/styled-jsx */ \"./node_modules/next/dist/shared/lib/styled-jsx.js\");\n/* harmony import */ var next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _src_components_header__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../src/components/header */ \"./src/components/header.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_7__);\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction MyPage() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\"), /*#__PURE__*/ id1 = ref[0], setId = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null), username = ref1[0], setUsername = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false), loading = ref2[0], setLoading = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null), error = ref3[0], setError = ref3[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function() {\n        if (sessionStorage.getItem(\"userid\") == null) {\n            alert(\"\\uB85C\\uADF8\\uC778\\uC774 \\uD544\\uC694\\uD55C \\uC11C\\uBE44\\uC2A4\\uC785\\uB2C8\\uB2E4.\");\n            next_router__WEBPACK_IMPORTED_MODULE_4___default().push(\"/login\");\n        } else {\n            setId(sessionStorage.getItem(\"userid\"));\n        }\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function() {\n        if (id1 == \"\") return;\n        var fetchUser = function() {\n            var _ref = _asyncToGenerator(C_Users_Desktop_DevKor_Web_toy_project_toy_project_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(id) {\n                var response;\n                return C_Users_Desktop_DevKor_Web_toy_project_toy_project_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                    while(1)switch(_ctx.prev = _ctx.next){\n                        case 0:\n                            _ctx.prev = 0;\n                            //요청이 시작할 때에는 user와 error를 초기화, loading은 True로 바꿔준다.\n                            setUser(null);\n                            setError(null);\n                            setLoading(true);\n                            _ctx.next = 6;\n                            return axios__WEBPACK_IMPORTED_MODULE_7___default().get(\"http://localhost:8080/user/\" + id);\n                        case 6:\n                            response = _ctx.sent;\n                            setUsername(JSON.stringify(response.data.name));\n                            _ctx.next = 13;\n                            break;\n                        case 10:\n                            _ctx.prev = 10;\n                            _ctx.t0 = _ctx[\"catch\"](0);\n                            setError(_ctx.t0);\n                        case 13:\n                            setLoading(false);\n                        case 14:\n                        case \"end\":\n                            return _ctx.stop();\n                    }\n                }, _callee, null, [\n                    [\n                        0,\n                        10\n                    ]\n                ]);\n            }));\n            return function fetchUser(id) {\n                return _ref.apply(this, arguments);\n            };\n        }();\n        fetchUser(id1);\n    }, [\n        id1\n    ]);\n    if (loading) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        children: \"\\uB85C\\uB529\\uC911...\"\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\\\uC774\\uC2B9\\uC6B0\\uD559\\uBD80\\uD734\\uD559\\uCEF4\\uD4E8\\uD130\\uD559\\uACFC\\\\Desktop\\\\\\uACE0\\uB824\\uB300\\uD559\\uAD50\\\\DevKor\\\\Web\\\\toy_project\\\\toy_project\\\\pages\\\\mypage.js\",\n        lineNumber: 41,\n        columnNumber: 23\n    }, this);\n    if (error) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        children: \"\\uC5D0\\uB7EC\\uAC00 \\uBC1C\\uC0DD\\uD588\\uC2B5\\uB2C8\\uB2E4.\"\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\\\uC774\\uC2B9\\uC6B0\\uD559\\uBD80\\uD734\\uD559\\uCEF4\\uD4E8\\uD130\\uD559\\uACFC\\\\Desktop\\\\\\uACE0\\uB824\\uB300\\uD559\\uAD50\\\\DevKor\\\\Web\\\\toy_project\\\\toy_project\\\\pages\\\\mypage.js\",\n        lineNumber: 42,\n        columnNumber: 21\n    }, this);\n    if (!username) return null;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: \"jsx-a87bc15ec0b79a69\" + \" \" + \"container\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_5___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"title\", {\n                        className: \"jsx-a87bc15ec0b79a69\",\n                        children: \"MOV!E | My Page\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\\\uC774\\uC2B9\\uC6B0\\uD559\\uBD80\\uD734\\uD559\\uCEF4\\uD4E8\\uD130\\uD559\\uACFC\\\\Desktop\\\\\\uACE0\\uB824\\uB300\\uD559\\uAD50\\\\DevKor\\\\Web\\\\toy_project\\\\toy_project\\\\pages\\\\mypage.js\",\n                        lineNumber: 48,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\",\n                        className: \"jsx-a87bc15ec0b79a69\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\\\uC774\\uC2B9\\uC6B0\\uD559\\uBD80\\uD734\\uD559\\uCEF4\\uD4E8\\uD130\\uD559\\uACFC\\\\Desktop\\\\\\uACE0\\uB824\\uB300\\uD559\\uAD50\\\\DevKor\\\\Web\\\\toy_project\\\\toy_project\\\\pages\\\\mypage.js\",\n                        lineNumber: 49,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\\\uC774\\uC2B9\\uC6B0\\uD559\\uBD80\\uD734\\uD559\\uCEF4\\uD4E8\\uD130\\uD559\\uACFC\\\\Desktop\\\\\\uACE0\\uB824\\uB300\\uD559\\uAD50\\\\DevKor\\\\Web\\\\toy_project\\\\toy_project\\\\pages\\\\mypage.js\",\n                lineNumber: 47,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_src_components_header__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                loginStatus: id1\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\\\uC774\\uC2B9\\uC6B0\\uD559\\uBD80\\uD734\\uD559\\uCEF4\\uD4E8\\uD130\\uD559\\uACFC\\\\Desktop\\\\\\uACE0\\uB824\\uB300\\uD559\\uAD50\\\\DevKor\\\\Web\\\\toy_project\\\\toy_project\\\\pages\\\\mypage.js\",\n                lineNumber: 52,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: \"jsx-a87bc15ec0b79a69\" + \" \" + \"wrapper\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        className: \"jsx-a87bc15ec0b79a69\" + \" \" + \"title-wrap\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h3\", {\n                            className: \"jsx-a87bc15ec0b79a69\",\n                            children: \"\\uB0B4 \\uC815\\uBCF4 | My Page\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\\\uC774\\uC2B9\\uC6B0\\uD559\\uBD80\\uD734\\uD559\\uCEF4\\uD4E8\\uD130\\uD559\\uACFC\\\\Desktop\\\\\\uACE0\\uB824\\uB300\\uD559\\uAD50\\\\DevKor\\\\Web\\\\toy_project\\\\toy_project\\\\pages\\\\mypage.js\",\n                            lineNumber: 56,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\\\uC774\\uC2B9\\uC6B0\\uD559\\uBD80\\uD734\\uD559\\uCEF4\\uD4E8\\uD130\\uD559\\uACFC\\\\Desktop\\\\\\uACE0\\uB824\\uB300\\uD559\\uAD50\\\\DevKor\\\\Web\\\\toy_project\\\\toy_project\\\\pages\\\\mypage.js\",\n                        lineNumber: 55,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        className: \"jsx-a87bc15ec0b79a69\" + \" \" + \"member-info-wrapper\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                            className: \"jsx-a87bc15ec0b79a69\" + \" \" + \"info-row\",\n                            children: user\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\\\uC774\\uC2B9\\uC6B0\\uD559\\uBD80\\uD734\\uD559\\uCEF4\\uD4E8\\uD130\\uD559\\uACFC\\\\Desktop\\\\\\uACE0\\uB824\\uB300\\uD559\\uAD50\\\\DevKor\\\\Web\\\\toy_project\\\\toy_project\\\\pages\\\\mypage.js\",\n                            lineNumber: 59,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\\\uC774\\uC2B9\\uC6B0\\uD559\\uBD80\\uD734\\uD559\\uCEF4\\uD4E8\\uD130\\uD559\\uACFC\\\\Desktop\\\\\\uACE0\\uB824\\uB300\\uD559\\uAD50\\\\DevKor\\\\Web\\\\toy_project\\\\toy_project\\\\pages\\\\mypage.js\",\n                        lineNumber: 58,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\\\uC774\\uC2B9\\uC6B0\\uD559\\uBD80\\uD734\\uD559\\uCEF4\\uD4E8\\uD130\\uD559\\uACFC\\\\Desktop\\\\\\uACE0\\uB824\\uB300\\uD559\\uAD50\\\\DevKor\\\\Web\\\\toy_project\\\\toy_project\\\\pages\\\\mypage.js\",\n                lineNumber: 54,\n                columnNumber: 7\n            }, this),\n            (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_2___default()), {\n                id: \"a68614d4a72ae1d4\",\n                children: \".container.jsx-a87bc15ec0b79a69{min-height:100vh;width:100vw;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}.wrapper.jsx-a87bc15ec0b79a69{width:1400px;margin:0 auto}h3.jsx-a87bc15ec0b79a69{font-size:36px;font-weight:500;color:#222;vertical-align:middle;margin:0}.title-wrap.jsx-a87bc15ec0b79a69{height:60px;padding-top:30px;border-bottom:3px solid#241d1e;-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;line-height:55px}\"\n            }, void 0, false, void 0, this),\n            (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_2___default()), {\n                id: \"ea9baa125a120287\",\n                children: \"html,body{padding:0;margin:0;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif}*{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}\"\n            }, void 0, false, void 0, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\\\uC774\\uC2B9\\uC6B0\\uD559\\uBD80\\uD734\\uD559\\uCEF4\\uD4E8\\uD130\\uD559\\uACFC\\\\Desktop\\\\\\uACE0\\uB824\\uB300\\uD559\\uAD50\\\\DevKor\\\\Web\\\\toy_project\\\\toy_project\\\\pages\\\\mypage.js\",\n        lineNumber: 46,\n        columnNumber: 5\n    }, this);\n};\n_s(MyPage, \"j5yLddj9GZv4HSEOsOTJkIikkUs=\");\n_c = MyPage;\nvar _c;\n$RefreshReg$(_c, \"MyPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QVcsU0FBUzs7a0NBQ3RCLDhEQUFDQSxLQUFHO2tFQUFXLFlBQVk7a0NBQ3pCLDRFQUFDTSxJQUFFOztzQ0FBQywrQkFBYzs7Ozs7Z0NBQUs7Ozs7OzRCQUNuQjtrQ0FDTiw4REFBQ04sS0FBRztrRUFBVyxxQkFBcUI7a0NBQ2xDLDRFQUFDQSxLQUFHO3NFQUFXLFVBQVU7c0NBQUVPLElBQUk7Ozs7O2dDQUFPOzs7Ozs0QkFDbEM7Ozs7OztvQkFDRjs7Ozs7Ozs7Ozs7Ozs7WUE0Q0YsQ0FDTjtDQUNIO0dBcEd1QjVCLE1BQU07QUFBTkEsS0FBQUEsTUFBTSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9teXBhZ2UuanM/ZTk2NyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBSb3V0ZXIgZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcclxuaW1wb3J0IEhlYWRlciBmcm9tIFwiLi4vc3JjL2NvbXBvbmVudHMvaGVhZGVyXCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE15UGFnZSgpIHtcclxuICBjb25zdCBbaWQsIHNldElkXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFt1c2VybmFtZSwgc2V0VXNlcm5hbWVdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGUobnVsbCk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShcInVzZXJpZFwiKSA9PSBudWxsKSB7XHJcbiAgICAgIGFsZXJ0KFwi66Gc6re47J247J20IO2VhOyalO2VnCDshJzruYTsiqTsnoXri4jri6QuXCIpO1xyXG4gICAgICBSb3V0ZXIucHVzaChcIi9sb2dpblwiKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHNldElkKHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oXCJ1c2VyaWRcIikpO1xyXG4gICAgfVxyXG4gIH0sIFtdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChpZCA9PSBcIlwiKSByZXR1cm47XHJcbiAgICBjb25zdCBmZXRjaFVzZXIgPSBhc3luYyAoaWQpID0+IHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICAvL+yalOyyreydtCDsi5zsnpHtlaAg65WM7JeQ64qUIHVzZXLsmYAgZXJyb3Lrpbwg7LSI6riw7ZmULCBsb2FkaW5n7J2AIFRydWXroZwg67CU6r+U7KSA64ukLlxyXG4gICAgICAgIHNldFVzZXIobnVsbCk7XHJcbiAgICAgICAgc2V0RXJyb3IobnVsbCk7XHJcbiAgICAgICAgc2V0TG9hZGluZyh0cnVlKTtcclxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldChcImh0dHA6Ly9sb2NhbGhvc3Q6ODA4MC91c2VyL1wiICsgaWQpO1xyXG4gICAgICAgIHNldFVzZXJuYW1lKEpTT04uc3RyaW5naWZ5KHJlc3BvbnNlLmRhdGEubmFtZSkpO1xyXG4gICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgc2V0RXJyb3IoZSk7XHJcbiAgICAgIH1cclxuICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGZldGNoVXNlcihpZCk7XHJcbiAgfSwgW2lkXSk7XHJcblxyXG4gIGlmIChsb2FkaW5nKSByZXR1cm4gPGRpdj7roZzrlKnspJEuLi48L2Rpdj47XHJcbiAgaWYgKGVycm9yKSByZXR1cm4gPGRpdj7sl5Drn6zqsIAg67Cc7IOd7ZaI7Iq164uI64ukLjwvZGl2PjtcclxuICBpZiAoIXVzZXJuYW1lKSByZXR1cm4gbnVsbDtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICAgIDx0aXRsZT5NT1YhRSB8IE15IFBhZ2U8L3RpdGxlPlxyXG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24uaWNvXCIgLz5cclxuICAgICAgPC9IZWFkPlxyXG5cclxuICAgICAgPEhlYWRlciBsb2dpblN0YXR1cz17aWR9IC8+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIndyYXBwZXJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlLXdyYXBcIj5cclxuICAgICAgICAgIDxoMz7rgrQg7KCV67O0IHwgTXkgUGFnZTwvaDM+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZW1iZXItaW5mby13cmFwcGVyXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImluZm8tcm93XCI+e3VzZXJ9PC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgLmNvbnRhaW5lciB7XHJcbiAgICAgICAgICBtaW4taGVpZ2h0OiAxMDB2aDtcclxuICAgICAgICAgIHdpZHRoOiAxMDB2dztcclxuICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAud3JhcHBlciB7XHJcbiAgICAgICAgICB3aWR0aDogMTQwMHB4O1xyXG4gICAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBoMyB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDM2cHg7XHJcbiAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgICAgY29sb3I6ICMyMjI7XHJcbiAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnRpdGxlLXdyYXAge1xyXG4gICAgICAgICAgaGVpZ2h0OiA2MHB4O1xyXG4gICAgICAgICAgcGFkZGluZy10b3A6IDMwcHg7XHJcbiAgICAgICAgICBib3JkZXItYm90dG9tOiAzcHggc29saWQgIzI0MWQxZTtcclxuICAgICAgICAgIGJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xyXG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDU1cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICBgfTwvc3R5bGU+XHJcblxyXG4gICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxyXG4gICAgICAgIGh0bWwsXHJcbiAgICAgICAgYm9keSB7XHJcbiAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgU2Vnb2UgVUksIFJvYm90byxcclxuICAgICAgICAgICAgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgRmlyYSBTYW5zLCBEcm9pZCBTYW5zLCBIZWx2ZXRpY2EgTmV1ZSxcclxuICAgICAgICAgICAgc2Fucy1zZXJpZjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICoge1xyXG4gICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgICB9XHJcbiAgICAgIGB9PC9zdHlsZT5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiUm91dGVyIiwiSGVhZCIsIkhlYWRlciIsImF4aW9zIiwiTXlQYWdlIiwiaWQiLCJzZXRJZCIsInVzZXJuYW1lIiwic2V0VXNlcm5hbWUiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsImVycm9yIiwic2V0RXJyb3IiLCJzZXNzaW9uU3RvcmFnZSIsImdldEl0ZW0iLCJhbGVydCIsInB1c2giLCJmZXRjaFVzZXIiLCJyZXNwb25zZSIsInNldFVzZXIiLCJnZXQiLCJKU09OIiwic3RyaW5naWZ5IiwiZGF0YSIsIm5hbWUiLCJkaXYiLCJ0aXRsZSIsImxpbmsiLCJyZWwiLCJocmVmIiwibG9naW5TdGF0dXMiLCJoMyIsInVzZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/mypage.js\n");

/***/ })

});