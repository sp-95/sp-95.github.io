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
    console.log('no hover');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvSWNvbkFjdGlvbi50c3giXSwibmFtZXMiOlsiQ29sb3JlZEljb24iLCJwcm9wcyIsInVzZVN0YXRlIiwiaXNIb3ZlciIsInNldElzSG92ZXIiLCJJY29uIiwiSWNvbk1vbm8iLCJjbGFzc05hbWUiLCJ0aXRsZSIsIkNvbXBvbmVudCIsImNvbnNvbGUiLCJsb2ciLCJ1bmRlZmluZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQVNBLElBQU1BLFdBQXVELEdBQUcsU0FBMURBLFdBQTBELENBQzlEQyxLQUQ4RCxFQUUzRDtBQUFBOztBQUFBLGtCQUMyQkMsc0RBQVEsQ0FBQyxLQUFELENBRG5DO0FBQUEsTUFDSUMsT0FESjtBQUFBLE1BQ2FDLFVBRGI7O0FBQUEsTUFFS0MsSUFGTCxHQUUwQ0osS0FGMUMsQ0FFS0ksSUFGTDtBQUFBLE1BRVdDLFFBRlgsR0FFMENMLEtBRjFDLENBRVdLLFFBRlg7QUFBQSxNQUVxQkMsU0FGckIsR0FFMENOLEtBRjFDLENBRXFCTSxTQUZyQjtBQUFBLE1BRWdDQyxLQUZoQyxHQUUwQ1AsS0FGMUMsQ0FFZ0NPLEtBRmhDO0FBSUgsTUFBSUMsU0FBSjs7QUFDQSxNQUFJTixPQUFKLEVBQWE7QUFDWE8sV0FBTyxDQUFDQyxHQUFSLGlCQUFxQkgsS0FBckI7O0FBQ0EsUUFBSUgsSUFBSSxLQUFLTyxTQUFiLEVBQXdCO0FBQ3RCSCxlQUFTLGdCQUFHLHFFQUFDLFFBQUQ7QUFBVSxpQkFBUyxFQUFFRjtBQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBQVo7QUFDRCxLQUZELE1BRU87QUFDTEUsZUFBUyxnQkFBRyxxRUFBQyxJQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFBWjtBQUNEO0FBQ0YsR0FQRCxNQU9PO0FBQ0xDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZLFVBQVo7QUFDQUYsYUFBUyxnQkFBRyxxRUFBQyxRQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFBWjtBQUNEOztBQUVELHNCQUNFO0FBQ0UsYUFBUyxFQUFDLGdFQURaO0FBRUUsZ0JBQVksRUFBRTtBQUFBLGFBQU1MLFVBQVUsQ0FBQyxJQUFELENBQWhCO0FBQUEsS0FGaEI7QUFHRSxnQkFBWSxFQUFFO0FBQUEsYUFBTUEsVUFBVSxDQUFDLEtBQUQsQ0FBaEI7QUFBQSxLQUhoQjtBQUFBLGVBS0dLLFNBTEgsZUFNRTtBQUFHLGVBQVMsRUFBQywyRUFBYjtBQUFBLGdCQUNHRDtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFORjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQVlELENBL0JEOztHQUFNUixXOztLQUFBQSxXO0FBaUNTQSwwRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5mZDkzNmQ4M2Y4MjVkZmNmMTMyMi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5cbmV4cG9ydCBpbnRlcmZhY2UgQ29sb3JlZEljb25zUHJvcHMge1xuICBJY29uTW9ubzogUmVhY3QuRkM8UmVhY3QuU1ZHUHJvcHM8U1ZHU1ZHRWxlbWVudD4+XG4gIEljb24/OiBSZWFjdC5GQzxSZWFjdC5TVkdQcm9wczxTVkdTVkdFbGVtZW50Pj5cbiAgY2xhc3NOYW1lPzogc3RyaW5nXG4gIHRpdGxlOiBzdHJpbmdcbn1cblxuY29uc3QgQ29sb3JlZEljb246IFJlYWN0LkZ1bmN0aW9uQ29tcG9uZW50PENvbG9yZWRJY29uc1Byb3BzPiA9IChcbiAgcHJvcHM6IENvbG9yZWRJY29uc1Byb3BzXG4pID0+IHtcbiAgY29uc3QgW2lzSG92ZXIsIHNldElzSG92ZXJdID0gdXNlU3RhdGUoZmFsc2UpXG4gIGNvbnN0IHsgSWNvbiwgSWNvbk1vbm8sIGNsYXNzTmFtZSwgdGl0bGUgfSA9IHByb3BzXG5cbiAgbGV0IENvbXBvbmVudFxuICBpZiAoaXNIb3Zlcikge1xuICAgIGNvbnNvbGUubG9nKGBob3ZlciAke3RpdGxlfWApXG4gICAgaWYgKEljb24gPT09IHVuZGVmaW5lZCkge1xuICAgICAgQ29tcG9uZW50ID0gPEljb25Nb25vIGNsYXNzTmFtZT17Y2xhc3NOYW1lfSAvPlxuICAgIH0gZWxzZSB7XG4gICAgICBDb21wb25lbnQgPSA8SWNvbiAvPlxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBjb25zb2xlLmxvZygnbm8gaG92ZXInKVxuICAgIENvbXBvbmVudCA9IDxJY29uTW9ubyAvPlxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICBjbGFzc05hbWU9XCJncm91cCBmbGV4LWNlbnRlciBmbGV4LWNvbCBoLTEyIHctMTAgc206dy0xNCBzbTpoLWF1dG8gbGc6dy0xNlwiXG4gICAgICBvbk1vdXNlRW50ZXI9eygpID0+IHNldElzSG92ZXIodHJ1ZSl9XG4gICAgICBvbk1vdXNlTGVhdmU9eygpID0+IHNldElzSG92ZXIoZmFsc2UpfVxuICAgID5cbiAgICAgIHtDb21wb25lbnR9XG4gICAgICA8cCBjbGFzc05hbWU9XCJwdC0xIHRleHQtc20gc206dGV4dC1iYXNlIGludmlzaWJsZSBncm91cC1ob3Zlcjp2aXNpYmxlIHdoaXRlc3BhY2Utbm93cmFwXCI+XG4gICAgICAgIHt0aXRsZX1cbiAgICAgIDwvcD5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBDb2xvcmVkSWNvblxuIl0sInNvdXJjZVJvb3QiOiIifQ==