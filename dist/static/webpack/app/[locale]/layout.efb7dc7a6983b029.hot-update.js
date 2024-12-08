"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/[locale]/layout",{

/***/ "(app-pages-browser)/./src/components/header/header.tsx":
/*!******************************************!*\
  !*** ./src/components/header/header.tsx ***!
  \******************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Header: () => (/* binding */ Header)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _components_containers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/containers */ \"(app-pages-browser)/./src/components/containers/index.ts\");\n/* harmony import */ var _components_navbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/navbar */ \"(app-pages-browser)/./src/components/navbar/index.ts\");\n/* harmony import */ var _hooks_use_media_query__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/hooks/use-media-query */ \"(app-pages-browser)/./src/hooks/use-media-query.ts\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* __next_internal_client_entry_do_not_use__ Header auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nfunction Header() {\n    _s();\n    const { isMobile } = (0,_hooks_use_media_query__WEBPACK_IMPORTED_MODULE_3__.useMediaQuery)();\n    const [isScrolled, setIsScrolled] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)({\n        \"Header.useEffect\": ()=>{\n            const handleScroll = {\n                \"Header.useEffect.handleScroll\": ()=>{\n                    setIsScrolled(window.scrollY > 50);\n                }\n            }[\"Header.useEffect.handleScroll\"];\n            window.addEventListener('scroll', handleScroll);\n            return ({\n                \"Header.useEffect\": ()=>{\n                    window.removeEventListener('scroll', handleScroll);\n                }\n            })[\"Header.useEffect\"];\n        }\n    }[\"Header.useEffect\"], [\n        window.scrollY\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n        className: \"fixed top-0 min-w-full h-[15vh] flex justify-evenly items-center duration-300 z-10 \".concat(isScrolled ? 'bg-black bg-opacity-60' : 'bg-transparent'),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_containers__WEBPACK_IMPORTED_MODULE_1__.Container, {\n                justify: \"center\",\n                items: \"center\",\n                className: \"w-[50vw] md:w-[20vw]\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_navbar__WEBPACK_IMPORTED_MODULE_2__.ContactNavbar, {}, void 0, false, {\n                    fileName: \"/home/node/app/src/components/header/header.tsx\",\n                    lineNumber: 34,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/node/app/src/components/header/header.tsx\",\n                lineNumber: 29,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_containers__WEBPACK_IMPORTED_MODULE_1__.Container, {\n                justify: \"center\",\n                items: \"center\",\n                className: \"w-[35vw] md:w-[60vw] gap-5\",\n                children: isMobile ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_navbar__WEBPACK_IMPORTED_MODULE_2__.MobileNavbar, {}, void 0, false, {\n                    fileName: \"/home/node/app/src/components/header/header.tsx\",\n                    lineNumber: 41,\n                    columnNumber: 21\n                }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_navbar__WEBPACK_IMPORTED_MODULE_2__.MainNavbar, {}, void 0, false, {\n                    fileName: \"/home/node/app/src/components/header/header.tsx\",\n                    lineNumber: 41,\n                    columnNumber: 40\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/node/app/src/components/header/header.tsx\",\n                lineNumber: 36,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/node/app/src/components/header/header.tsx\",\n        lineNumber: 24,\n        columnNumber: 5\n    }, this);\n}\n_s(Header, \"pA+bIIDEgxnQn0y/Gx6Tg6hmsOc=\", false, function() {\n    return [\n        _hooks_use_media_query__WEBPACK_IMPORTED_MODULE_3__.useMediaQuery\n    ];\n});\n_c = Header;\nvar _c;\n$RefreshReg$(_c, \"Header\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUNvRDtBQUMwQjtBQUN0QjtBQUNaO0FBRXJDLFNBQVNPOztJQUNkLE1BQU0sRUFBRUMsUUFBUSxFQUFFLEdBQUdKLHFFQUFhQTtJQUNsQyxNQUFNLENBQUNLLFlBQVlDLGNBQWMsR0FBR0osK0NBQVFBLENBQVU7SUFFdERELGdEQUFTQTs0QkFBQztZQUNSLE1BQU1NO2lEQUFlO29CQUNuQkQsY0FBY0UsT0FBT0MsT0FBTyxHQUFHO2dCQUNqQzs7WUFFQUQsT0FBT0UsZ0JBQWdCLENBQUMsVUFBVUg7WUFFbEM7b0NBQU87b0JBQ0xDLE9BQU9HLG1CQUFtQixDQUFDLFVBQVVKO2dCQUN2Qzs7UUFDRjsyQkFBRztRQUFDQyxPQUFPQyxPQUFPO0tBQUM7SUFFbkIscUJBQ0UsOERBQUNHO1FBQ0NDLFdBQVcsc0ZBRVYsT0FEQ1IsYUFBYSwyQkFBMkI7OzBCQUcxQyw4REFBQ1QsNkRBQVNBO2dCQUNSa0IsU0FBUTtnQkFDUkMsT0FBTTtnQkFDTkYsV0FBVTswQkFFViw0RUFBQ2hCLDZEQUFhQTs7Ozs7Ozs7OzswQkFFaEIsOERBQUNELDZEQUFTQTtnQkFDUmtCLFNBQVE7Z0JBQ1JDLE9BQU07Z0JBQ05GLFdBQVU7MEJBRVRULHlCQUFXLDhEQUFDTCw0REFBWUE7Ozs7eUNBQU0sOERBQUNELDBEQUFVQTs7Ozs7Ozs7Ozs7Ozs7OztBQUlsRDtHQXRDZ0JLOztRQUNPSCxpRUFBYUE7OztLQURwQkciLCJzb3VyY2VzIjpbIi9ob21lL25vZGUvYXBwL3NyYy9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIudHN4Il0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50JztcbmltcG9ydCB7IENvbnRhaW5lciB9IGZyb20gJ0AvY29tcG9uZW50cy9jb250YWluZXJzJztcbmltcG9ydCB7IENvbnRhY3ROYXZiYXIsIE1haW5OYXZiYXIsIE1vYmlsZU5hdmJhciB9IGZyb20gJ0AvY29tcG9uZW50cy9uYXZiYXInO1xuaW1wb3J0IHsgdXNlTWVkaWFRdWVyeSB9IGZyb20gJ0AvaG9va3MvdXNlLW1lZGlhLXF1ZXJ5JztcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5cbmV4cG9ydCBmdW5jdGlvbiBIZWFkZXIoKSB7XG4gIGNvbnN0IHsgaXNNb2JpbGUgfSA9IHVzZU1lZGlhUXVlcnkoKTtcbiAgY29uc3QgW2lzU2Nyb2xsZWQsIHNldElzU2Nyb2xsZWRdID0gdXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgaGFuZGxlU2Nyb2xsID0gKCkgPT4ge1xuICAgICAgc2V0SXNTY3JvbGxlZCh3aW5kb3cuc2Nyb2xsWSA+IDUwKTtcbiAgICB9O1xuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGhhbmRsZVNjcm9sbCk7XG5cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGhhbmRsZVNjcm9sbCk7XG4gICAgfTtcbiAgfSwgW3dpbmRvdy5zY3JvbGxZXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8aGVhZGVyXG4gICAgICBjbGFzc05hbWU9e2BmaXhlZCB0b3AtMCBtaW4tdy1mdWxsIGgtWzE1dmhdIGZsZXgganVzdGlmeS1ldmVubHkgaXRlbXMtY2VudGVyIGR1cmF0aW9uLTMwMCB6LTEwICR7XG4gICAgICAgIGlzU2Nyb2xsZWQgPyAnYmctYmxhY2sgYmctb3BhY2l0eS02MCcgOiAnYmctdHJhbnNwYXJlbnQnXG4gICAgICB9YH1cbiAgICA+XG4gICAgICA8Q29udGFpbmVyXG4gICAgICAgIGp1c3RpZnk9XCJjZW50ZXJcIlxuICAgICAgICBpdGVtcz1cImNlbnRlclwiXG4gICAgICAgIGNsYXNzTmFtZT1cInctWzUwdnddIG1kOnctWzIwdnddXCJcbiAgICAgID5cbiAgICAgICAgPENvbnRhY3ROYXZiYXIgLz5cbiAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgPENvbnRhaW5lclxuICAgICAgICBqdXN0aWZ5PVwiY2VudGVyXCJcbiAgICAgICAgaXRlbXM9XCJjZW50ZXJcIlxuICAgICAgICBjbGFzc05hbWU9XCJ3LVszNXZ3XSBtZDp3LVs2MHZ3XSBnYXAtNVwiXG4gICAgICA+XG4gICAgICAgIHtpc01vYmlsZSA/IDxNb2JpbGVOYXZiYXIgLz4gOiA8TWFpbk5hdmJhciAvPn1cbiAgICAgIDwvQ29udGFpbmVyPlxuICAgIDwvaGVhZGVyPlxuICApO1xufVxuIl0sIm5hbWVzIjpbIkNvbnRhaW5lciIsIkNvbnRhY3ROYXZiYXIiLCJNYWluTmF2YmFyIiwiTW9iaWxlTmF2YmFyIiwidXNlTWVkaWFRdWVyeSIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiSGVhZGVyIiwiaXNNb2JpbGUiLCJpc1Njcm9sbGVkIiwic2V0SXNTY3JvbGxlZCIsImhhbmRsZVNjcm9sbCIsIndpbmRvdyIsInNjcm9sbFkiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImhlYWRlciIsImNsYXNzTmFtZSIsImp1c3RpZnkiLCJpdGVtcyJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/header/header.tsx\n"));

/***/ })

});