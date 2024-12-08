"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/[locale]/(home)/page",{

/***/ "(app-pages-browser)/./src/app/[locale]/(home)/components/home.tsx":
/*!*****************************************************!*\
  !*** ./src/app/[locale]/(home)/components/home.tsx ***!
  \*****************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   HomeSection: () => (/* binding */ HomeSection)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _components_containers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/containers */ \"(app-pages-browser)/./src/components/containers/index.ts\");\n/* harmony import */ var _components_section__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/section */ \"(app-pages-browser)/./src/components/section/index.ts\");\n/* harmony import */ var _components_texts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/texts */ \"(app-pages-browser)/./src/components/texts/index.ts\");\n/* harmony import */ var _hooks_use_media_query__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/hooks/use-media-query */ \"(app-pages-browser)/./src/hooks/use-media-query.ts\");\n/* harmony import */ var next_intl__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next-intl */ \"(app-pages-browser)/./node_modules/next-intl/dist/development/index.react-client.js\");\n/* harmony import */ var next_intl__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_intl__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! swr */ \"(app-pages-browser)/./node_modules/swr/dist/core/index.mjs\");\n/* __next_internal_client_entry_do_not_use__ HomeSection auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction HomeSection() {\n    _s();\n    const translate = (0,next_intl__WEBPACK_IMPORTED_MODULE_7__.useTranslations)('HomePage.HomeSection');\n    const { isMobile } = (0,_hooks_use_media_query__WEBPACK_IMPORTED_MODULE_4__.useMediaQuery)();\n    const fetcher = (url)=>fetch(url).then((res)=>res.blob()).then((blob)=>URL.createObjectURL(blob));\n    const { data: imageUrl } = (0,swr__WEBPACK_IMPORTED_MODULE_6__[\"default\"])('/assets/home-banner.gif', fetcher, {\n        revalidateOnFocus: false,\n        dedupingInterval: 60 * 60 * 1000\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_section__WEBPACK_IMPORTED_MODULE_2__.Section, {\n        id: \"home\",\n        className: \"min-h-[80vh] md:min-h-[60vh]\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_section__WEBPACK_IMPORTED_MODULE_2__.SectionContent, {\n                className: \"justify-evenly\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_containers__WEBPACK_IMPORTED_MODULE_1__.Container, {\n                        direction: \"column\",\n                        justify: \"center\",\n                        items: \"center\",\n                        className: \"relative w-full md:w-[40vw] min-h-[50vh] md:min-h-[50vh] gap-5\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_texts__WEBPACK_IMPORTED_MODULE_3__.Title, {\n                                size: \"5xl\",\n                                color: \"white\",\n                                className: \"absolute md:relative top-[40px] md:top-auto left-10 md:left-auto\",\n                                children: translate.rich(isMobile ? 'title-mobile' : 'title', {\n                                    br: (chunks)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                                    fileName: \"/home/node/app/src/app/[locale]/(home)/components/home.tsx\",\n                                                    lineNumber: 45,\n                                                    columnNumber: 19\n                                                }, this),\n                                                chunks\n                                            ]\n                                        }, void 0, true)\n                                })\n                            }, void 0, false, {\n                                fileName: \"/home/node/app/src/app/[locale]/(home)/components/home.tsx\",\n                                lineNumber: 37,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_texts__WEBPACK_IMPORTED_MODULE_3__.Paragraph, {\n                                size: \"4xl\",\n                                color: \"dark-orange\",\n                                className: \"absolute md:relative top-[280px] md:top-auto left-10 md:left-auto\",\n                                children: translate.rich(isMobile ? 'subtitle-mobile' : 'subtitle', {\n                                    br: (chunks)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                                    fileName: \"/home/node/app/src/app/[locale]/(home)/components/home.tsx\",\n                                                    lineNumber: 59,\n                                                    columnNumber: 19\n                                                }, this),\n                                                chunks\n                                            ]\n                                        }, void 0, true)\n                                })\n                            }, void 0, false, {\n                                fileName: \"/home/node/app/src/app/[locale]/(home)/components/home.tsx\",\n                                lineNumber: 51,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/node/app/src/app/[locale]/(home)/components/home.tsx\",\n                        lineNumber: 31,\n                        columnNumber: 9\n                    }, this),\n                    !isMobile && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_containers__WEBPACK_IMPORTED_MODULE_1__.Container, {\n                        justify: \"center\",\n                        items: \"center\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                            src: \"/assets/profile-blob.webp\",\n                            alt: \"profile-blob.webp\",\n                            width: 500,\n                            height: 500,\n                            className: \"object-cover min-w-[10vw] h-auto\"\n                        }, void 0, false, {\n                            fileName: \"/home/node/app/src/app/[locale]/(home)/components/home.tsx\",\n                            lineNumber: 69,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/home/node/app/src/app/[locale]/(home)/components/home.tsx\",\n                        lineNumber: 68,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/node/app/src/app/[locale]/(home)/components/home.tsx\",\n                lineNumber: 30,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_section__WEBPACK_IMPORTED_MODULE_2__.SectionBackground, {\n                src: !imageUrl ? '/assets/home-banner-loading.webp' : imageUrl,\n                alt: \"about-banner\"\n            }, void 0, false, {\n                fileName: \"/home/node/app/src/app/[locale]/(home)/components/home.tsx\",\n                lineNumber: 80,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/node/app/src/app/[locale]/(home)/components/home.tsx\",\n        lineNumber: 29,\n        columnNumber: 5\n    }, this);\n}\n_s(HomeSection, \"9jJyPhejtBbdoX+SchiV2+oMnlE=\", false, function() {\n    return [\n        next_intl__WEBPACK_IMPORTED_MODULE_7__.useTranslations,\n        _hooks_use_media_query__WEBPACK_IMPORTED_MODULE_4__.useMediaQuery,\n        swr__WEBPACK_IMPORTED_MODULE_6__[\"default\"]\n    ];\n});\n_c = HomeSection;\nvar _c;\n$RefreshReg$(_c, \"HomeSection\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvW2xvY2FsZV0vKGhvbWUpL2NvbXBvbmVudHMvaG9tZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQ29EO0FBS3RCO0FBQ3dCO0FBQ0U7QUFDWjtBQUNiO0FBQ047QUFFbEIsU0FBU1U7O0lBQ2QsTUFBTUMsWUFBWUosMERBQWVBLENBQUM7SUFDbEMsTUFBTSxFQUFFSyxRQUFRLEVBQUUsR0FBR04scUVBQWFBO0lBRWxDLE1BQU1PLFVBQVUsQ0FBQ0MsTUFDZkMsTUFBTUQsS0FDSEUsSUFBSSxDQUFDLENBQUNDLE1BQVFBLElBQUlDLElBQUksSUFDdEJGLElBQUksQ0FBQyxDQUFDRSxPQUFTQyxJQUFJQyxlQUFlLENBQUNGO0lBRXhDLE1BQU0sRUFBRUcsTUFBTUMsUUFBUSxFQUFFLEdBQUdiLCtDQUFNQSxDQUFDLDJCQUEyQkksU0FBUztRQUNwRVUsbUJBQW1CO1FBQ25CQyxrQkFBa0IsS0FBSyxLQUFLO0lBQzlCO0lBRUEscUJBQ0UsOERBQUN2Qix3REFBT0E7UUFBQ3dCLElBQUc7UUFBT0MsV0FBVTs7MEJBQzNCLDhEQUFDdkIsK0RBQWNBO2dCQUFDdUIsV0FBVTs7a0NBQ3hCLDhEQUFDMUIsNkRBQVNBO3dCQUNSMkIsV0FBVTt3QkFDVkMsU0FBUTt3QkFDUkMsT0FBTTt3QkFDTkgsV0FBVTs7MENBRVYsOERBQUNyQixvREFBS0E7Z0NBQ0p5QixNQUFLO2dDQUNMQyxPQUFNO2dDQUNOTCxXQUFVOzBDQUVUZixVQUFVcUIsSUFBSSxDQUFDcEIsV0FBVyxpQkFBaUIsU0FBUztvQ0FDbkRxQixJQUFJLENBQUNDLHVCQUNIOzs4REFDRSw4REFBQ0Q7Ozs7O2dEQUNBQzs7O2dDQUdQOzs7Ozs7MENBRUYsOERBQUM5Qix3REFBU0E7Z0NBQ1IwQixNQUFLO2dDQUNMQyxPQUFNO2dDQUNOTCxXQUFVOzBDQUVUZixVQUFVcUIsSUFBSSxDQUFDcEIsV0FBVyxvQkFBb0IsWUFBWTtvQ0FDekRxQixJQUFJLENBQUNDLHVCQUNIOzs4REFDRSw4REFBQ0Q7Ozs7O2dEQUNBQzs7O2dDQUdQOzs7Ozs7Ozs7Ozs7b0JBSUgsQ0FBQ3RCLDBCQUNBLDhEQUFDWiw2REFBU0E7d0JBQUM0QixTQUFRO3dCQUFTQyxPQUFNO2tDQUNoQyw0RUFBQ3JCLGtEQUFLQTs0QkFDSjJCLEtBQUk7NEJBQ0pDLEtBQUk7NEJBQ0pDLE9BQU87NEJBQ1BDLFFBQVE7NEJBQ1JaLFdBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQU1sQiw4REFBQ3hCLGtFQUFpQkE7Z0JBQ2hCaUMsS0FBSyxDQUFDYixXQUFXLHFDQUFxQ0E7Z0JBQ3REYyxLQUFJOzs7Ozs7Ozs7Ozs7QUFJWjtHQXhFZ0IxQjs7UUFDSUgsc0RBQWVBO1FBQ1pELGlFQUFhQTtRQU9QRywyQ0FBTUE7OztLQVRuQkMiLCJzb3VyY2VzIjpbIi9ob21lL25vZGUvYXBwL3NyYy9hcHAvW2xvY2FsZV0vKGhvbWUpL2NvbXBvbmVudHMvaG9tZS50c3giXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnO1xuaW1wb3J0IHsgQ29udGFpbmVyIH0gZnJvbSAnQC9jb21wb25lbnRzL2NvbnRhaW5lcnMnO1xuaW1wb3J0IHtcbiAgU2VjdGlvbixcbiAgU2VjdGlvbkJhY2tncm91bmQsXG4gIFNlY3Rpb25Db250ZW50LFxufSBmcm9tICdAL2NvbXBvbmVudHMvc2VjdGlvbic7XG5pbXBvcnQgeyBQYXJhZ3JhcGgsIFRpdGxlIH0gZnJvbSAnQC9jb21wb25lbnRzL3RleHRzJztcbmltcG9ydCB7IHVzZU1lZGlhUXVlcnkgfSBmcm9tICdAL2hvb2tzL3VzZS1tZWRpYS1xdWVyeSc7XG5pbXBvcnQgeyB1c2VUcmFuc2xhdGlvbnMgfSBmcm9tICduZXh0LWludGwnO1xuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnO1xuaW1wb3J0IHVzZVNXUiBmcm9tICdzd3InO1xuXG5leHBvcnQgZnVuY3Rpb24gSG9tZVNlY3Rpb24oKSB7XG4gIGNvbnN0IHRyYW5zbGF0ZSA9IHVzZVRyYW5zbGF0aW9ucygnSG9tZVBhZ2UuSG9tZVNlY3Rpb24nKTtcbiAgY29uc3QgeyBpc01vYmlsZSB9ID0gdXNlTWVkaWFRdWVyeSgpO1xuXG4gIGNvbnN0IGZldGNoZXIgPSAodXJsOiBzdHJpbmcpID0+XG4gICAgZmV0Y2godXJsKVxuICAgICAgLnRoZW4oKHJlcykgPT4gcmVzLmJsb2IoKSlcbiAgICAgIC50aGVuKChibG9iKSA9PiBVUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpKTtcblxuICBjb25zdCB7IGRhdGE6IGltYWdlVXJsIH0gPSB1c2VTV1IoJy9hc3NldHMvaG9tZS1iYW5uZXIuZ2lmJywgZmV0Y2hlciwge1xuICAgIHJldmFsaWRhdGVPbkZvY3VzOiBmYWxzZSxcbiAgICBkZWR1cGluZ0ludGVydmFsOiA2MCAqIDYwICogMTAwMCxcbiAgfSk7XG5cbiAgcmV0dXJuIChcbiAgICA8U2VjdGlvbiBpZD1cImhvbWVcIiBjbGFzc05hbWU9XCJtaW4taC1bODB2aF0gbWQ6bWluLWgtWzYwdmhdXCI+XG4gICAgICA8U2VjdGlvbkNvbnRlbnQgY2xhc3NOYW1lPVwianVzdGlmeS1ldmVubHlcIj5cbiAgICAgICAgPENvbnRhaW5lclxuICAgICAgICAgIGRpcmVjdGlvbj1cImNvbHVtblwiXG4gICAgICAgICAganVzdGlmeT1cImNlbnRlclwiXG4gICAgICAgICAgaXRlbXM9XCJjZW50ZXJcIlxuICAgICAgICAgIGNsYXNzTmFtZT1cInJlbGF0aXZlIHctZnVsbCBtZDp3LVs0MHZ3XSBtaW4taC1bNTB2aF0gbWQ6bWluLWgtWzUwdmhdIGdhcC01XCJcbiAgICAgICAgPlxuICAgICAgICAgIDxUaXRsZVxuICAgICAgICAgICAgc2l6ZT1cIjV4bFwiXG4gICAgICAgICAgICBjb2xvcj1cIndoaXRlXCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImFic29sdXRlIG1kOnJlbGF0aXZlIHRvcC1bNDBweF0gbWQ6dG9wLWF1dG8gbGVmdC0xMCBtZDpsZWZ0LWF1dG9cIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIHt0cmFuc2xhdGUucmljaChpc01vYmlsZSA/ICd0aXRsZS1tb2JpbGUnIDogJ3RpdGxlJywge1xuICAgICAgICAgICAgICBicjogKGNodW5rcykgPT4gKFxuICAgICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgICAgIHtjaHVua3N9XG4gICAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICB9KX1cbiAgICAgICAgICA8L1RpdGxlPlxuICAgICAgICAgIDxQYXJhZ3JhcGhcbiAgICAgICAgICAgIHNpemU9XCI0eGxcIlxuICAgICAgICAgICAgY29sb3I9XCJkYXJrLW9yYW5nZVwiXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJhYnNvbHV0ZSBtZDpyZWxhdGl2ZSB0b3AtWzI4MHB4XSBtZDp0b3AtYXV0byBsZWZ0LTEwIG1kOmxlZnQtYXV0b1wiXG4gICAgICAgICAgPlxuICAgICAgICAgICAge3RyYW5zbGF0ZS5yaWNoKGlzTW9iaWxlID8gJ3N1YnRpdGxlLW1vYmlsZScgOiAnc3VidGl0bGUnLCB7XG4gICAgICAgICAgICAgIGJyOiAoY2h1bmtzKSA9PiAoXG4gICAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICAgICAge2NodW5rc31cbiAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIH0pfVxuICAgICAgICAgIDwvUGFyYWdyYXBoPlxuICAgICAgICA8L0NvbnRhaW5lcj5cblxuICAgICAgICB7IWlzTW9iaWxlICYmIChcbiAgICAgICAgICA8Q29udGFpbmVyIGp1c3RpZnk9XCJjZW50ZXJcIiBpdGVtcz1cImNlbnRlclwiPlxuICAgICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICAgIHNyYz1cIi9hc3NldHMvcHJvZmlsZS1ibG9iLndlYnBcIlxuICAgICAgICAgICAgICBhbHQ9XCJwcm9maWxlLWJsb2Iud2VicFwiXG4gICAgICAgICAgICAgIHdpZHRoPXs1MDB9XG4gICAgICAgICAgICAgIGhlaWdodD17NTAwfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJvYmplY3QtY292ZXIgbWluLXctWzEwdnddIGgtYXV0b1wiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgICApfVxuICAgICAgPC9TZWN0aW9uQ29udGVudD5cblxuICAgICAgPFNlY3Rpb25CYWNrZ3JvdW5kXG4gICAgICAgIHNyYz17IWltYWdlVXJsID8gJy9hc3NldHMvaG9tZS1iYW5uZXItbG9hZGluZy53ZWJwJyA6IGltYWdlVXJsfVxuICAgICAgICBhbHQ9XCJhYm91dC1iYW5uZXJcIlxuICAgICAgLz5cbiAgICA8L1NlY3Rpb24+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiQ29udGFpbmVyIiwiU2VjdGlvbiIsIlNlY3Rpb25CYWNrZ3JvdW5kIiwiU2VjdGlvbkNvbnRlbnQiLCJQYXJhZ3JhcGgiLCJUaXRsZSIsInVzZU1lZGlhUXVlcnkiLCJ1c2VUcmFuc2xhdGlvbnMiLCJJbWFnZSIsInVzZVNXUiIsIkhvbWVTZWN0aW9uIiwidHJhbnNsYXRlIiwiaXNNb2JpbGUiLCJmZXRjaGVyIiwidXJsIiwiZmV0Y2giLCJ0aGVuIiwicmVzIiwiYmxvYiIsIlVSTCIsImNyZWF0ZU9iamVjdFVSTCIsImRhdGEiLCJpbWFnZVVybCIsInJldmFsaWRhdGVPbkZvY3VzIiwiZGVkdXBpbmdJbnRlcnZhbCIsImlkIiwiY2xhc3NOYW1lIiwiZGlyZWN0aW9uIiwianVzdGlmeSIsIml0ZW1zIiwic2l6ZSIsImNvbG9yIiwicmljaCIsImJyIiwiY2h1bmtzIiwic3JjIiwiYWx0Iiwid2lkdGgiLCJoZWlnaHQiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/[locale]/(home)/components/home.tsx\n"));

/***/ })

});