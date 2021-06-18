webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/IconAction.tsx":
/*!***************************************!*\
  !*** ./src/components/IconAction.tsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


var _jsxFileName = "D:\\Personal\\portfolio\\src\\components\\IconAction.tsx",
    _this = undefined,
    _s = $RefreshSig$();



var ColoredIcon = function ColoredIcon(props) {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      isHover = _useState[0],
      setIsHover = _useState[1];

  var Icon = props.Icon,
      IconMono = props.IconMono,
      className = props.className,
      title = props.title;
  var Component;

  if (isHover) {
    console.log("hover ".concat(title));

    if (Icon === undefined) {
      Component = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(IconMono, {
        className: className
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 19
      }, _this);
    } else {
      Component = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Icon, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 19
      }, _this);
    }
  } else {
    console.log("hover ".concat(title));
    Component = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(IconMono, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 17
    }, _this);
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "group flex-center flex-col h-12 w-10 sm:w-14 sm:h-auto lg:w-16",
    onMouseEnter: function onMouseEnter() {
      return setIsHover(true);
    },
    onMouseLeave: function onMouseLeave() {
      return setIsHover(false);
    },
    children: [Component, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      className: "pt-1 text-sm sm:text-base invisible group-hover:visible whitespace-nowrap",
      children: title
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 30,
    columnNumber: 5
  }, _this);
};

_s(ColoredIcon, "FTC8EpIspi2qaDtU9gFRhqZT02A=");

_c = ColoredIcon;
/* harmony default export */ __webpack_exports__["default"] = (ColoredIcon);

var _c;

$RefreshReg$(_c, "ColoredIcon");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvSWNvbkFjdGlvbi50c3giXSwibmFtZXMiOlsiQ29sb3JlZEljb24iLCJwcm9wcyIsInVzZVN0YXRlIiwiaXNIb3ZlciIsInNldElzSG92ZXIiLCJJY29uIiwiSWNvbk1vbm8iLCJjbGFzc05hbWUiLCJ0aXRsZSIsIkNvbXBvbmVudCIsImNvbnNvbGUiLCJsb2ciLCJ1bmRlZmluZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQVNBLElBQU1BLFdBQXVELEdBQUcsU0FBMURBLFdBQTBELENBQzlEQyxLQUQ4RCxFQUUzRDtBQUFBOztBQUFBLGtCQUMyQkMsc0RBQVEsQ0FBQyxLQUFELENBRG5DO0FBQUEsTUFDSUMsT0FESjtBQUFBLE1BQ2FDLFVBRGI7O0FBQUEsTUFFS0MsSUFGTCxHQUUwQ0osS0FGMUMsQ0FFS0ksSUFGTDtBQUFBLE1BRVdDLFFBRlgsR0FFMENMLEtBRjFDLENBRVdLLFFBRlg7QUFBQSxNQUVxQkMsU0FGckIsR0FFMENOLEtBRjFDLENBRXFCTSxTQUZyQjtBQUFBLE1BRWdDQyxLQUZoQyxHQUUwQ1AsS0FGMUMsQ0FFZ0NPLEtBRmhDO0FBSUgsTUFBSUMsU0FBSjs7QUFDQSxNQUFJTixPQUFKLEVBQWE7QUFDWE8sV0FBTyxDQUFDQyxHQUFSLGlCQUFxQkgsS0FBckI7O0FBQ0EsUUFBSUgsSUFBSSxLQUFLTyxTQUFiLEVBQXdCO0FBQ3RCSCxlQUFTLGdCQUFHLHFFQUFDLFFBQUQ7QUFBVSxpQkFBUyxFQUFFRjtBQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBQVo7QUFDRCxLQUZELE1BRU87QUFDTEUsZUFBUyxnQkFBRyxxRUFBQyxJQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFBWjtBQUNEO0FBQ0YsR0FQRCxNQU9PO0FBQ0xDLFdBQU8sQ0FBQ0MsR0FBUixpQkFBcUJILEtBQXJCO0FBQ0FDLGFBQVMsZ0JBQUcscUVBQUMsUUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBQVo7QUFDRDs7QUFFRCxzQkFDRTtBQUNFLGFBQVMsRUFBQyxnRUFEWjtBQUVFLGdCQUFZLEVBQUU7QUFBQSxhQUFNTCxVQUFVLENBQUMsSUFBRCxDQUFoQjtBQUFBLEtBRmhCO0FBR0UsZ0JBQVksRUFBRTtBQUFBLGFBQU1BLFVBQVUsQ0FBQyxLQUFELENBQWhCO0FBQUEsS0FIaEI7QUFBQSxlQUtHSyxTQUxILGVBTUU7QUFBRyxlQUFTLEVBQUMsMkVBQWI7QUFBQSxnQkFDR0Q7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBTkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFZRCxDQS9CRDs7R0FBTVIsVzs7S0FBQUEsVztBQWlDU0EsMEVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMjU5MzIyOTg3Njk0ZWMxN2UxMWQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuXG5leHBvcnQgaW50ZXJmYWNlIENvbG9yZWRJY29uc1Byb3BzIHtcbiAgSWNvbk1vbm86IFJlYWN0LkZDPFJlYWN0LlNWR1Byb3BzPFNWR1NWR0VsZW1lbnQ+PlxuICBJY29uPzogUmVhY3QuRkM8UmVhY3QuU1ZHUHJvcHM8U1ZHU1ZHRWxlbWVudD4+XG4gIGNsYXNzTmFtZT86IHN0cmluZ1xuICB0aXRsZTogc3RyaW5nXG59XG5cbmNvbnN0IENvbG9yZWRJY29uOiBSZWFjdC5GdW5jdGlvbkNvbXBvbmVudDxDb2xvcmVkSWNvbnNQcm9wcz4gPSAoXG4gIHByb3BzOiBDb2xvcmVkSWNvbnNQcm9wc1xuKSA9PiB7XG4gIGNvbnN0IFtpc0hvdmVyLCBzZXRJc0hvdmVyXSA9IHVzZVN0YXRlKGZhbHNlKVxuICBjb25zdCB7IEljb24sIEljb25Nb25vLCBjbGFzc05hbWUsIHRpdGxlIH0gPSBwcm9wc1xuXG4gIGxldCBDb21wb25lbnRcbiAgaWYgKGlzSG92ZXIpIHtcbiAgICBjb25zb2xlLmxvZyhgaG92ZXIgJHt0aXRsZX1gKVxuICAgIGlmIChJY29uID09PSB1bmRlZmluZWQpIHtcbiAgICAgIENvbXBvbmVudCA9IDxJY29uTW9ubyBjbGFzc05hbWU9e2NsYXNzTmFtZX0gLz5cbiAgICB9IGVsc2Uge1xuICAgICAgQ29tcG9uZW50ID0gPEljb24gLz5cbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgY29uc29sZS5sb2coYGhvdmVyICR7dGl0bGV9YClcbiAgICBDb21wb25lbnQgPSA8SWNvbk1vbm8gLz5cbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgICAgY2xhc3NOYW1lPVwiZ3JvdXAgZmxleC1jZW50ZXIgZmxleC1jb2wgaC0xMiB3LTEwIHNtOnctMTQgc206aC1hdXRvIGxnOnctMTZcIlxuICAgICAgb25Nb3VzZUVudGVyPXsoKSA9PiBzZXRJc0hvdmVyKHRydWUpfVxuICAgICAgb25Nb3VzZUxlYXZlPXsoKSA9PiBzZXRJc0hvdmVyKGZhbHNlKX1cbiAgICA+XG4gICAgICB7Q29tcG9uZW50fVxuICAgICAgPHAgY2xhc3NOYW1lPVwicHQtMSB0ZXh0LXNtIHNtOnRleHQtYmFzZSBpbnZpc2libGUgZ3JvdXAtaG92ZXI6dmlzaWJsZSB3aGl0ZXNwYWNlLW5vd3JhcFwiPlxuICAgICAgICB7dGl0bGV9XG4gICAgICA8L3A+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgQ29sb3JlZEljb25cbiJdLCJzb3VyY2VSb290IjoiIn0=