"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/review/[movieid]",{

/***/ "./src/components/ReviewList.js":
/*!**************************************!*\
  !*** ./src/components/ReviewList.js ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var C_Users_Desktop_DevKor_Web_toy_project_toy_project_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var C_Users_Desktop_DevKor_Web_toy_project_toy_project_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_Desktop_DevKor_Web_toy_project_toy_project_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/shared/lib/styled-jsx */ \"./node_modules/next/dist/shared/lib/styled-jsx.js\");\n/* harmony import */ var next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_icons_cg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-icons/cg */ \"./node_modules/react-icons/cg/index.esm.js\");\n/* harmony import */ var react_simple_star_rating__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-simple-star-rating */ \"./node_modules/react-simple-star-rating/dist/index.js\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\n\nvar _this = undefined;\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar ReviewList = function(param) {\n    var movieId = param.movieId;\n    var _this1 = _this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]), /*#__PURE__*/ reviews = ref[0], setReviews = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null), error = ref1[0], setError = ref1[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function() {\n        var fetchReviews = function() {\n            var _ref = _asyncToGenerator(C_Users_Desktop_DevKor_Web_toy_project_toy_project_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n                var res;\n                return C_Users_Desktop_DevKor_Web_toy_project_toy_project_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                    while(1)switch(_ctx.prev = _ctx.next){\n                        case 0:\n                            _ctx.prev = 0;\n                            _ctx.next = 3;\n                            return axios__WEBPACK_IMPORTED_MODULE_4___default().get(\"http://localhost:8080/review/\" + movieId);\n                        case 3:\n                            res = _ctx.sent;\n                            setReviews(res.data);\n                            _ctx.next = 10;\n                            break;\n                        case 7:\n                            _ctx.prev = 7;\n                            _ctx.t0 = _ctx[\"catch\"](0);\n                            setError(_ctx.t0);\n                        case 10:\n                        case \"end\":\n                            return _ctx.stop();\n                    }\n                }, _callee, null, [\n                    [\n                        0,\n                        7\n                    ]\n                ]);\n            }));\n            return function fetchReviews() {\n                return _ref.apply(this, arguments);\n            };\n        }();\n        fetchReviews();\n    }, []);\n    if (error) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        children: \"ReviewList.js \\uC5D0\\uB7EC\"\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\\\uC774\\uC2B9\\uC6B0\\uD559\\uBD80\\uD734\\uD559\\uCEF4\\uD4E8\\uD130\\uD559\\uACFC\\\\Desktop\\\\\\uACE0\\uB824\\uB300\\uD559\\uAD50\\\\DevKor\\\\Web\\\\toy_project\\\\toy_project\\\\src\\\\components\\\\ReviewList.js\",\n        lineNumber: 23,\n        columnNumber: 21\n    }, _this);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: \"jsx-70779f1db85b860a\" + \" \" + \"container\",\n        children: [\n            reviews.length ? reviews.map(function(review) {\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                    className: \"jsx-70779f1db85b860a\" + \" \" + \"review-item\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                            className: \"jsx-70779f1db85b860a\" + \" \" + \"icon-area\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_icons_cg__WEBPACK_IMPORTED_MODULE_6__.CgUserlane, {\n                                size: 40,\n                                color: \"#342568\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\\\uC774\\uC2B9\\uC6B0\\uD559\\uBD80\\uD734\\uD559\\uCEF4\\uD4E8\\uD130\\uD559\\uACFC\\\\Desktop\\\\\\uACE0\\uB824\\uB300\\uD559\\uAD50\\\\DevKor\\\\Web\\\\toy_project\\\\toy_project\\\\src\\\\components\\\\ReviewList.js\",\n                                lineNumber: 31,\n                                columnNumber: 15\n                            }, _this1)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\\\uC774\\uC2B9\\uC6B0\\uD559\\uBD80\\uD734\\uD559\\uCEF4\\uD4E8\\uD130\\uD559\\uACFC\\\\Desktop\\\\\\uACE0\\uB824\\uB300\\uD559\\uAD50\\\\DevKor\\\\Web\\\\toy_project\\\\toy_project\\\\src\\\\components\\\\ReviewList.js\",\n                            lineNumber: 30,\n                            columnNumber: 13\n                        }, _this1),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                            className: \"jsx-70779f1db85b860a\" + \" \" + \"review-area\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"span\", {\n                                    className: \"jsx-70779f1db85b860a\" + \" \" + \"reviewer\",\n                                    children: review.userid.substring(0, review.userid.length - 2) + \"**\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\\\uC774\\uC2B9\\uC6B0\\uD559\\uBD80\\uD734\\uD559\\uCEF4\\uD4E8\\uD130\\uD559\\uACFC\\\\Desktop\\\\\\uACE0\\uB824\\uB300\\uD559\\uAD50\\\\DevKor\\\\Web\\\\toy_project\\\\toy_project\\\\src\\\\components\\\\ReviewList.js\",\n                                    lineNumber: 34,\n                                    columnNumber: 15\n                                }, _this1),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_simple_star_rating__WEBPACK_IMPORTED_MODULE_5__.Rating, {\n                                    readonly: true,\n                                    allowHalfIcon: true,\n                                    initialValue: review.score / 2,\n                                    fillColor: \"#342568\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\\\uC774\\uC2B9\\uC6B0\\uD559\\uBD80\\uD734\\uD559\\uCEF4\\uD4E8\\uD130\\uD559\\uACFC\\\\Desktop\\\\\\uACE0\\uB824\\uB300\\uD559\\uAD50\\\\DevKor\\\\Web\\\\toy_project\\\\toy_project\\\\src\\\\components\\\\ReviewList.js\",\n                                    lineNumber: 37,\n                                    columnNumber: 15\n                                }, _this1),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"span\", {\n                                    className: \"jsx-70779f1db85b860a\" + \" \" + \"review-text\",\n                                    children: review.text\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\\\uC774\\uC2B9\\uC6B0\\uD559\\uBD80\\uD734\\uD559\\uCEF4\\uD4E8\\uD130\\uD559\\uACFC\\\\Desktop\\\\\\uACE0\\uB824\\uB300\\uD559\\uAD50\\\\DevKor\\\\Web\\\\toy_project\\\\toy_project\\\\src\\\\components\\\\ReviewList.js\",\n                                    lineNumber: 43,\n                                    columnNumber: 15\n                                }, _this1),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"span\", {\n                                    className: \"jsx-70779f1db85b860a\" + \" \" + \"review-text review-date\",\n                                    children: review.time.substring(0, 10)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\\\uC774\\uC2B9\\uC6B0\\uD559\\uBD80\\uD734\\uD559\\uCEF4\\uD4E8\\uD130\\uD559\\uACFC\\\\Desktop\\\\\\uACE0\\uB824\\uB300\\uD559\\uAD50\\\\DevKor\\\\Web\\\\toy_project\\\\toy_project\\\\src\\\\components\\\\ReviewList.js\",\n                                    lineNumber: 44,\n                                    columnNumber: 15\n                                }, _this1)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\\\uC774\\uC2B9\\uC6B0\\uD559\\uBD80\\uD734\\uD559\\uCEF4\\uD4E8\\uD130\\uD559\\uACFC\\\\Desktop\\\\\\uACE0\\uB824\\uB300\\uD559\\uAD50\\\\DevKor\\\\Web\\\\toy_project\\\\toy_project\\\\src\\\\components\\\\ReviewList.js\",\n                            lineNumber: 33,\n                            columnNumber: 13\n                        }, _this1)\n                    ]\n                }, review.userid, true, {\n                    fileName: \"C:\\\\Users\\\\\\uC774\\uC2B9\\uC6B0\\uD559\\uBD80\\uD734\\uD559\\uCEF4\\uD4E8\\uD130\\uD559\\uACFC\\\\Desktop\\\\\\uACE0\\uB824\\uB300\\uD559\\uAD50\\\\DevKor\\\\Web\\\\toy_project\\\\toy_project\\\\src\\\\components\\\\ReviewList.js\",\n                    lineNumber: 29,\n                    columnNumber: 11\n                }, _this1);\n            }) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: \"jsx-70779f1db85b860a\" + \" \" + \"no-review\",\n                children: \"\\uC544\\uC9C1 \\uB4F1\\uB85D\\uB41C \\uB9AC\\uBDF0\\uAC00 \\uC5C6\\uC2B5\\uB2C8\\uB2E4.\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\\\uC774\\uC2B9\\uC6B0\\uD559\\uBD80\\uD734\\uD559\\uCEF4\\uD4E8\\uD130\\uD559\\uACFC\\\\Desktop\\\\\\uACE0\\uB824\\uB300\\uD559\\uAD50\\\\DevKor\\\\Web\\\\toy_project\\\\toy_project\\\\src\\\\components\\\\ReviewList.js\",\n                lineNumber: 51,\n                columnNumber: 9\n            }, _this),\n            (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_2___default()), {\n                id: \"70779f1db85b860a\",\n                children: \".container.jsx-70779f1db85b860a{width:100%;margin-top:30px}.no-review.jsx-70779f1db85b860a{width:100%;height:300px;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;font-size:25px;margin-top:90px}.review-item.jsx-70779f1db85b860a{width:100%;height:150px;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center}.icon-area.jsx-70779f1db85b860a{width:40px;height:40px;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center}.review-area.jsx-70779f1db85b860a{margin-left:60px;margin-right:30px;width:100%;padding:30px;background:#f8f8fa;-webkit-border-radius:4px;-moz-border-radius:4px;border-radius:4px;position:relative;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center}.reviewer.jsx-70779f1db85b860a{display:inline-block;width:120px;margin-right:40px;font-size:18px}.review-text.jsx-70779f1db85b860a{display:inline-block;width:200px;margin-left:40px;font-size:18px}.review-date.jsx-70779f1db85b860a{position:absolute;right:0;width:120px}\"\n            }, void 0, false, void 0, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\\\uC774\\uC2B9\\uC6B0\\uD559\\uBD80\\uD734\\uD559\\uCEF4\\uD4E8\\uD130\\uD559\\uACFC\\\\Desktop\\\\\\uACE0\\uB824\\uB300\\uD559\\uAD50\\\\DevKor\\\\Web\\\\toy_project\\\\toy_project\\\\src\\\\components\\\\ReviewList.js\",\n        lineNumber: 26,\n        columnNumber: 5\n    }, _this);\n};\n_s(ReviewList, \"H8+/0IR4vlwk0zYIoU2Xwgn4HR4=\");\n_c = ReviewList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ReviewList);\nvar _c;\n$RefreshReg$(_c, \"ReviewList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9SZXZpZXdMaXN0LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQTRDO0FBQ2xCO0FBQ2tCO0FBQ007O0FBRWxELElBQU1LLFVBQVUsR0FBRyxnQkFBaUI7UUFBZEMsT0FBTyxTQUFQQSxPQUFPOzs7SUFDM0IsSUFBOEJMLEdBQVksR0FBWkEsK0NBQVEsQ0FBQyxFQUFFLENBQUMsZ0JBTjVDLE9BTWdCLEdBQWdCQSxHQUFZLEdBQTVCLEVBTmhCLFVBTTRCLEdBQUlBLEdBQVksR0FBaEI7SUFDMUIsSUFBMEJBLElBQWMsR0FBZEEsK0NBQVEsQ0FBQyxJQUFJLENBQUMsRUFQMUMsS0FPYyxHQUFjQSxJQUFjLEdBQTVCLEVBUGQsUUFPd0IsR0FBSUEsSUFBYyxHQUFsQjtJQUV0QkQsZ0RBQVMsQ0FBQyxXQUFNO1FBQ2QsSUFBTVcsWUFBWTt1QkFBRyxtTUFBWTtvQkFFekJDLEdBQUc7Ozs7OzttQ0FBU1YsZ0RBQVMsQ0FBQywrQkFBK0IsR0FBR0ksT0FBTyxDQUFDOzs0QkFBaEVNLEdBQUcsWUFBNkQ7NEJBQ3BFSixVQUFVLENBQUNJLEdBQUcsQ0FBQ0UsSUFBSSxDQUFDLENBQUM7Ozs7Ozs0QkFFckJKLFFBQVEsU0FBRyxDQUFDOzs7Ozs7Ozs7OzthQUVmOzRCQVBLQyxZQUFZOzs7V0FPakI7UUFFREEsWUFBWSxFQUFFLENBQUM7S0FDaEIsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUVQLElBQUlGLEtBQUssRUFBRSxxQkFBTyw4REFBQ00sS0FBRztrQkFBQyw0QkFBZ0I7Ozs7O2FBQVUsQ0FBQztJQUU5QyxxQkFDRiw4REFBQ0EsS0FBRztrREFBVyxXQUFXOztZQUN2QlIsT0FBTyxDQUFDUyxNQUFNLEdBQ2JULE9BQU8sQ0FBQ1UsR0FBRyxDQUFDLFNBQUNDLE1BQU07cUNBQ2pCLDhEQUFDSCxLQUFHOzhEQUErQixhQUFhOztzQ0FDOUMsOERBQUNBLEtBQUc7c0VBQVcsV0FBVztzQ0FDeEIsNEVBQUNaLHNEQUFVO2dDQUFDZ0IsSUFBSSxFQUFFLEVBQUU7Z0NBQUVDLEtBQUssRUFBQyxTQUFTOzs7OztzQ0FBRzs7Ozs7a0NBQ3BDO3NDQUNOLDhEQUFDTCxLQUFHO3NFQUFXLGFBQWE7OzhDQUMxQiw4REFBQ00sTUFBSTs4RUFBVyxVQUFVOzhDQUN2QkgsTUFBTSxDQUFDSSxNQUFNLENBQUNDLFNBQVMsQ0FBQyxDQUFDLEVBQUVMLE1BQU0sQ0FBQ0ksTUFBTSxDQUFDTixNQUFNLEdBQUcsQ0FBQyxDQUFDLEdBQUcsSUFBSTs7Ozs7MENBQ3ZEOzhDQUNQLDhEQUFDWiw0REFBTTtvQ0FDTG9CLFFBQVEsRUFBRSxJQUFJO29DQUNkQyxhQUFhLEVBQUUsSUFBSTtvQ0FDbkJDLFlBQVksRUFBRVIsTUFBTSxDQUFDUyxLQUFLLEdBQUcsQ0FBQztvQ0FDOUJDLFNBQVMsRUFBQyxTQUFTOzs7OzswQ0FDbkI7OENBQ0YsOERBQUNQLE1BQUk7OEVBQVcsYUFBYTs4Q0FBRUgsTUFBTSxDQUFDVyxJQUFJOzs7OzswQ0FBUTs4Q0FDbEQsOERBQUNSLE1BQUk7OEVBQVcseUJBQXlCOzhDQUN0Q0gsTUFBTSxDQUFDWSxJQUFJLENBQUNQLFNBQVMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDOzs7OzswQ0FDeEI7Ozs7OztrQ0FDSDs7bUJBbEJFTCxNQUFNLENBQUNJLE1BQU07Ozs7MEJBbUJqQjthQUNQLENBQUMsaUJBRUYsOERBQUNQLEtBQUc7MERBQVcsV0FBVzswQkFBQyw4RUFBZ0I7Ozs7O3FCQUFNOzs7Ozs7Ozs7O2FBMkQvQyxDQUNOO0NBQ0g7R0ExR0tWLFVBQVU7QUFBVkEsS0FBQUEsVUFBVTtBQTRHaEIsK0RBQWVBLFVBQVUsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9SZXZpZXdMaXN0LmpzPzBiNWMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCB7IENnVXNlcmxhbmUgfSBmcm9tIFwicmVhY3QtaWNvbnMvY2dcIjtcclxuaW1wb3J0IHsgUmF0aW5nIH0gZnJvbSBcInJlYWN0LXNpbXBsZS1zdGFyLXJhdGluZ1wiO1xyXG5cclxuY29uc3QgUmV2aWV3TGlzdCA9ICh7IG1vdmllSWQgfSkgPT4ge1xyXG4gIGNvbnN0IFtyZXZpZXdzLCBzZXRSZXZpZXdzXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlKG51bGwpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgZmV0Y2hSZXZpZXdzID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGxldCByZXMgPSBhd2FpdCBheGlvcy5nZXQoXCJodHRwOi8vbG9jYWxob3N0OjgwODAvcmV2aWV3L1wiICsgbW92aWVJZCk7XHJcbiAgICAgICAgc2V0UmV2aWV3cyhyZXMuZGF0YSk7XHJcbiAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICBzZXRFcnJvcihlKTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBmZXRjaFJldmlld3MoKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIGlmIChlcnJvcikgcmV0dXJuIDxkaXY+UmV2aWV3TGlzdC5qcyDsl5Drn6w8L2Rpdj47XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICB7cmV2aWV3cy5sZW5ndGggPyAoXHJcbiAgICAgICAgcmV2aWV3cy5tYXAoKHJldmlldykgPT4gKFxyXG4gICAgICAgICAgPGRpdiBrZXk9e3Jldmlldy51c2VyaWR9IGNsYXNzTmFtZT1cInJldmlldy1pdGVtXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaWNvbi1hcmVhXCI+XHJcbiAgICAgICAgICAgICAgPENnVXNlcmxhbmUgc2l6ZT17NDB9IGNvbG9yPVwiIzM0MjU2OFwiIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJldmlldy1hcmVhXCI+XHJcbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicmV2aWV3ZXJcIj5cclxuICAgICAgICAgICAgICAgIHtyZXZpZXcudXNlcmlkLnN1YnN0cmluZygwLCByZXZpZXcudXNlcmlkLmxlbmd0aCAtIDIpICsgXCIqKlwifVxyXG4gICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICA8UmF0aW5nXHJcbiAgICAgICAgICAgICAgICByZWFkb25seT17dHJ1ZX1cclxuICAgICAgICAgICAgICAgIGFsbG93SGFsZkljb249e3RydWV9XHJcbiAgICAgICAgICAgICAgICBpbml0aWFsVmFsdWU9e3Jldmlldy5zY29yZSAvIDJ9XHJcbiAgICAgICAgICAgICAgICBmaWxsQ29sb3I9XCIjMzQyNTY4XCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInJldmlldy10ZXh0XCI+e3Jldmlldy50ZXh0fTwvc3Bhbj5cclxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJyZXZpZXctdGV4dCByZXZpZXctZGF0ZVwiPlxyXG4gICAgICAgICAgICAgICAge3Jldmlldy50aW1lLnN1YnN0cmluZygwLCAxMCl9XHJcbiAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICkpXHJcbiAgICAgICkgOiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuby1yZXZpZXdcIj7slYTsp4Eg65Ox66Gd65CcIOumrOu3sOqwgCDsl4bsirXri4jri6QuPC9kaXY+XHJcbiAgICAgICl9XHJcblxyXG4gICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgLmNvbnRhaW5lciB7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5uby1yZXZpZXcge1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICBoZWlnaHQ6IDMwMHB4O1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICAgICAgICAgIG1hcmdpbi10b3A6IDkwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5yZXZpZXctaXRlbSB7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIGhlaWdodDogMTUwcHg7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmljb24tYXJlYSB7XHJcbiAgICAgICAgICB3aWR0aDogNDBweDtcclxuICAgICAgICAgIGhlaWdodDogNDBweDtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5yZXZpZXctYXJlYSB7XHJcbiAgICAgICAgICBtYXJnaW4tbGVmdDogNjBweDtcclxuICAgICAgICAgIG1hcmdpbi1yaWdodDogMzBweDtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgcGFkZGluZzogMzBweDtcclxuICAgICAgICAgIGJhY2tncm91bmQ6ICNmOGY4ZmE7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnJldmlld2VyIHtcclxuICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgIHdpZHRoOiAxMjBweDtcclxuICAgICAgICAgIG1hcmdpbi1yaWdodDogNDBweDtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnJldmlldy10ZXh0IHtcclxuICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgIHdpZHRoOiAyMDBweDtcclxuICAgICAgICAgIG1hcmdpbi1sZWZ0OiA0MHB4O1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAucmV2aWV3LWRhdGUge1xyXG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgICAgICB3aWR0aDogMTIwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICBgfTwvc3R5bGU+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmV2aWV3TGlzdDtcclxuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiYXhpb3MiLCJDZ1VzZXJsYW5lIiwiUmF0aW5nIiwiUmV2aWV3TGlzdCIsIm1vdmllSWQiLCJyZXZpZXdzIiwic2V0UmV2aWV3cyIsImVycm9yIiwic2V0RXJyb3IiLCJmZXRjaFJldmlld3MiLCJyZXMiLCJnZXQiLCJkYXRhIiwiZGl2IiwibGVuZ3RoIiwibWFwIiwicmV2aWV3Iiwic2l6ZSIsImNvbG9yIiwic3BhbiIsInVzZXJpZCIsInN1YnN0cmluZyIsInJlYWRvbmx5IiwiYWxsb3dIYWxmSWNvbiIsImluaXRpYWxWYWx1ZSIsInNjb3JlIiwiZmlsbENvbG9yIiwidGV4dCIsInRpbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/ReviewList.js\n");

/***/ })

});