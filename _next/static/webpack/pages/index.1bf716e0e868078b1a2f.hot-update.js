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
    if (Icon === undefined) {
      Component = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(IconMono, {
        className: className
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 19
      }, _this);
    } else {
      Component = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Icon, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 19
      }, _this);
    }
  } else {
    console.log('no hover');
    Component = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(IconMono, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 25,
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
      lineNumber: 35,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 29,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvSWNvbkFjdGlvbi50c3giXSwibmFtZXMiOlsiQ29sb3JlZEljb24iLCJwcm9wcyIsInVzZVN0YXRlIiwiaXNIb3ZlciIsInNldElzSG92ZXIiLCJJY29uIiwiSWNvbk1vbm8iLCJjbGFzc05hbWUiLCJ0aXRsZSIsIkNvbXBvbmVudCIsInVuZGVmaW5lZCIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQVNBLElBQU1BLFdBQXVELEdBQUcsU0FBMURBLFdBQTBELENBQzlEQyxLQUQ4RCxFQUUzRDtBQUFBOztBQUFBLGtCQUMyQkMsc0RBQVEsQ0FBQyxLQUFELENBRG5DO0FBQUEsTUFDSUMsT0FESjtBQUFBLE1BQ2FDLFVBRGI7O0FBQUEsTUFFS0MsSUFGTCxHQUUwQ0osS0FGMUMsQ0FFS0ksSUFGTDtBQUFBLE1BRVdDLFFBRlgsR0FFMENMLEtBRjFDLENBRVdLLFFBRlg7QUFBQSxNQUVxQkMsU0FGckIsR0FFMENOLEtBRjFDLENBRXFCTSxTQUZyQjtBQUFBLE1BRWdDQyxLQUZoQyxHQUUwQ1AsS0FGMUMsQ0FFZ0NPLEtBRmhDO0FBSUgsTUFBSUMsU0FBSjs7QUFDQSxNQUFJTixPQUFKLEVBQWE7QUFDWCxRQUFJRSxJQUFJLEtBQUtLLFNBQWIsRUFBd0I7QUFDdEJELGVBQVMsZ0JBQUcscUVBQUMsUUFBRDtBQUFVLGlCQUFTLEVBQUVGO0FBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFBWjtBQUNELEtBRkQsTUFFTztBQUNMRSxlQUFTLGdCQUFHLHFFQUFDLElBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUFaO0FBQ0Q7QUFDRixHQU5ELE1BTU87QUFDTEUsV0FBTyxDQUFDQyxHQUFSLENBQVksVUFBWjtBQUNBSCxhQUFTLGdCQUFHLHFFQUFDLFFBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUFaO0FBQ0Q7O0FBRUQsc0JBQ0U7QUFDRSxhQUFTLEVBQUMsZ0VBRFo7QUFFRSxnQkFBWSxFQUFFO0FBQUEsYUFBTUwsVUFBVSxDQUFDLElBQUQsQ0FBaEI7QUFBQSxLQUZoQjtBQUdFLGdCQUFZLEVBQUU7QUFBQSxhQUFNQSxVQUFVLENBQUMsS0FBRCxDQUFoQjtBQUFBLEtBSGhCO0FBQUEsZUFLR0ssU0FMSCxlQU1FO0FBQUcsZUFBUyxFQUFDLDJFQUFiO0FBQUEsZ0JBQ0dEO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQU5GO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBWUQsQ0E5QkQ7O0dBQU1SLFc7O0tBQUFBLFc7QUFnQ1NBLDBFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjFiZjcxNmUwZTg2ODA3OGIxYTJmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcblxuZXhwb3J0IGludGVyZmFjZSBDb2xvcmVkSWNvbnNQcm9wcyB7XG4gIEljb25Nb25vOiBSZWFjdC5GQzxSZWFjdC5TVkdQcm9wczxTVkdTVkdFbGVtZW50Pj5cbiAgSWNvbj86IFJlYWN0LkZDPFJlYWN0LlNWR1Byb3BzPFNWR1NWR0VsZW1lbnQ+PlxuICBjbGFzc05hbWU/OiBzdHJpbmdcbiAgdGl0bGU6IHN0cmluZ1xufVxuXG5jb25zdCBDb2xvcmVkSWNvbjogUmVhY3QuRnVuY3Rpb25Db21wb25lbnQ8Q29sb3JlZEljb25zUHJvcHM+ID0gKFxuICBwcm9wczogQ29sb3JlZEljb25zUHJvcHNcbikgPT4ge1xuICBjb25zdCBbaXNIb3Zlciwgc2V0SXNIb3Zlcl0gPSB1c2VTdGF0ZShmYWxzZSlcbiAgY29uc3QgeyBJY29uLCBJY29uTW9ubywgY2xhc3NOYW1lLCB0aXRsZSB9ID0gcHJvcHNcblxuICBsZXQgQ29tcG9uZW50XG4gIGlmIChpc0hvdmVyKSB7XG4gICAgaWYgKEljb24gPT09IHVuZGVmaW5lZCkge1xuICAgICAgQ29tcG9uZW50ID0gPEljb25Nb25vIGNsYXNzTmFtZT17Y2xhc3NOYW1lfSAvPlxuICAgIH0gZWxzZSB7XG4gICAgICBDb21wb25lbnQgPSA8SWNvbiAvPlxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBjb25zb2xlLmxvZygnbm8gaG92ZXInKVxuICAgIENvbXBvbmVudCA9IDxJY29uTW9ubyAvPlxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICBjbGFzc05hbWU9XCJncm91cCBmbGV4LWNlbnRlciBmbGV4LWNvbCBoLTEyIHctMTAgc206dy0xNCBzbTpoLWF1dG8gbGc6dy0xNlwiXG4gICAgICBvbk1vdXNlRW50ZXI9eygpID0+IHNldElzSG92ZXIodHJ1ZSl9XG4gICAgICBvbk1vdXNlTGVhdmU9eygpID0+IHNldElzSG92ZXIoZmFsc2UpfVxuICAgID5cbiAgICAgIHtDb21wb25lbnR9XG4gICAgICA8cCBjbGFzc05hbWU9XCJwdC0xIHRleHQtc20gc206dGV4dC1iYXNlIGludmlzaWJsZSBncm91cC1ob3Zlcjp2aXNpYmxlIHdoaXRlc3BhY2Utbm93cmFwXCI+XG4gICAgICAgIHt0aXRsZX1cbiAgICAgIDwvcD5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBDb2xvcmVkSWNvblxuIl0sInNvdXJjZVJvb3QiOiIifQ==