"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/use-sync-external-store";
exports.ids = ["vendor-chunks/use-sync-external-store"];
exports.modules = {

/***/ "(ssr)/./node_modules/use-sync-external-store/cjs/use-sync-external-store-shim.development.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/use-sync-external-store/cjs/use-sync-external-store-shim.development.js ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("/**\n * @license React\n * use-sync-external-store-shim.development.js\n *\n * Copyright (c) Meta Platforms, Inc. and affiliates.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n */\n\n\n true &&\n  (function () {\n    function is(x, y) {\n      return (x === y && (0 !== x || 1 / x === 1 / y)) || (x !== x && y !== y);\n    }\n    function useSyncExternalStore$2(subscribe, getSnapshot) {\n      didWarnOld18Alpha ||\n        void 0 === React.startTransition ||\n        ((didWarnOld18Alpha = !0),\n        console.error(\n          \"You are using an outdated, pre-release alpha of React 18 that does not support useSyncExternalStore. The use-sync-external-store shim will not work correctly. Upgrade to a newer pre-release.\"\n        ));\n      var value = getSnapshot();\n      if (!didWarnUncachedGetSnapshot) {\n        var cachedValue = getSnapshot();\n        objectIs(value, cachedValue) ||\n          (console.error(\n            \"The result of getSnapshot should be cached to avoid an infinite loop\"\n          ),\n          (didWarnUncachedGetSnapshot = !0));\n      }\n      cachedValue = useState({\n        inst: { value: value, getSnapshot: getSnapshot }\n      });\n      var inst = cachedValue[0].inst,\n        forceUpdate = cachedValue[1];\n      useLayoutEffect(\n        function () {\n          inst.value = value;\n          inst.getSnapshot = getSnapshot;\n          checkIfSnapshotChanged(inst) && forceUpdate({ inst: inst });\n        },\n        [subscribe, value, getSnapshot]\n      );\n      useEffect(\n        function () {\n          checkIfSnapshotChanged(inst) && forceUpdate({ inst: inst });\n          return subscribe(function () {\n            checkIfSnapshotChanged(inst) && forceUpdate({ inst: inst });\n          });\n        },\n        [subscribe]\n      );\n      useDebugValue(value);\n      return value;\n    }\n    function checkIfSnapshotChanged(inst) {\n      var latestGetSnapshot = inst.getSnapshot;\n      inst = inst.value;\n      try {\n        var nextValue = latestGetSnapshot();\n        return !objectIs(inst, nextValue);\n      } catch (error) {\n        return !0;\n      }\n    }\n    function useSyncExternalStore$1(subscribe, getSnapshot) {\n      return getSnapshot();\n    }\n    \"undefined\" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ &&\n      \"function\" ===\n        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart &&\n      __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());\n    var React = __webpack_require__(/*! react */ \"(ssr)/./node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js\"),\n      objectIs = \"function\" === typeof Object.is ? Object.is : is,\n      useState = React.useState,\n      useEffect = React.useEffect,\n      useLayoutEffect = React.useLayoutEffect,\n      useDebugValue = React.useDebugValue,\n      didWarnOld18Alpha = !1,\n      didWarnUncachedGetSnapshot = !1,\n      shim =\n        \"undefined\" === typeof window ||\n        \"undefined\" === typeof window.document ||\n        \"undefined\" === typeof window.document.createElement\n          ? useSyncExternalStore$1\n          : useSyncExternalStore$2;\n    exports.useSyncExternalStore =\n      void 0 !== React.useSyncExternalStore ? React.useSyncExternalStore : shim;\n    \"undefined\" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ &&\n      \"function\" ===\n        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop &&\n      __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());\n  })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvdXNlLXN5bmMtZXh0ZXJuYWwtc3RvcmUvY2pzL3VzZS1zeW5jLWV4dGVybmFsLXN0b3JlLXNoaW0uZGV2ZWxvcG1lbnQuanMiLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVhO0FBQ2IsS0FBcUM7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3REFBd0QsWUFBWTtBQUNwRSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3REFBd0QsWUFBWTtBQUNwRTtBQUNBLDBEQUEwRCxZQUFZO0FBQ3RFLFdBQVc7QUFDWCxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixtQkFBTyxDQUFDLHdHQUFPO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSw0QkFBNEI7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9haS1pbnRlcnZpZXctY2hhdC8uL25vZGVfbW9kdWxlcy91c2Utc3luYy1leHRlcm5hbC1zdG9yZS9janMvdXNlLXN5bmMtZXh0ZXJuYWwtc3RvcmUtc2hpbS5kZXZlbG9wbWVudC5qcz9mMDQ2Il0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2UgUmVhY3RcbiAqIHVzZS1zeW5jLWV4dGVybmFsLXN0b3JlLXNoaW0uZGV2ZWxvcG1lbnQuanNcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIE1ldGEgUGxhdGZvcm1zLCBJbmMuIGFuZCBhZmZpbGlhdGVzLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cblwidXNlIHN0cmljdFwiO1xuXCJwcm9kdWN0aW9uXCIgIT09IHByb2Nlc3MuZW52Lk5PREVfRU5WICYmXG4gIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gaXMoeCwgeSkge1xuICAgICAgcmV0dXJuICh4ID09PSB5ICYmICgwICE9PSB4IHx8IDEgLyB4ID09PSAxIC8geSkpIHx8ICh4ICE9PSB4ICYmIHkgIT09IHkpO1xuICAgIH1cbiAgICBmdW5jdGlvbiB1c2VTeW5jRXh0ZXJuYWxTdG9yZSQyKHN1YnNjcmliZSwgZ2V0U25hcHNob3QpIHtcbiAgICAgIGRpZFdhcm5PbGQxOEFscGhhIHx8XG4gICAgICAgIHZvaWQgMCA9PT0gUmVhY3Quc3RhcnRUcmFuc2l0aW9uIHx8XG4gICAgICAgICgoZGlkV2Fybk9sZDE4QWxwaGEgPSAhMCksXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXG4gICAgICAgICAgXCJZb3UgYXJlIHVzaW5nIGFuIG91dGRhdGVkLCBwcmUtcmVsZWFzZSBhbHBoYSBvZiBSZWFjdCAxOCB0aGF0IGRvZXMgbm90IHN1cHBvcnQgdXNlU3luY0V4dGVybmFsU3RvcmUuIFRoZSB1c2Utc3luYy1leHRlcm5hbC1zdG9yZSBzaGltIHdpbGwgbm90IHdvcmsgY29ycmVjdGx5LiBVcGdyYWRlIHRvIGEgbmV3ZXIgcHJlLXJlbGVhc2UuXCJcbiAgICAgICAgKSk7XG4gICAgICB2YXIgdmFsdWUgPSBnZXRTbmFwc2hvdCgpO1xuICAgICAgaWYgKCFkaWRXYXJuVW5jYWNoZWRHZXRTbmFwc2hvdCkge1xuICAgICAgICB2YXIgY2FjaGVkVmFsdWUgPSBnZXRTbmFwc2hvdCgpO1xuICAgICAgICBvYmplY3RJcyh2YWx1ZSwgY2FjaGVkVmFsdWUpIHx8XG4gICAgICAgICAgKGNvbnNvbGUuZXJyb3IoXG4gICAgICAgICAgICBcIlRoZSByZXN1bHQgb2YgZ2V0U25hcHNob3Qgc2hvdWxkIGJlIGNhY2hlZCB0byBhdm9pZCBhbiBpbmZpbml0ZSBsb29wXCJcbiAgICAgICAgICApLFxuICAgICAgICAgIChkaWRXYXJuVW5jYWNoZWRHZXRTbmFwc2hvdCA9ICEwKSk7XG4gICAgICB9XG4gICAgICBjYWNoZWRWYWx1ZSA9IHVzZVN0YXRlKHtcbiAgICAgICAgaW5zdDogeyB2YWx1ZTogdmFsdWUsIGdldFNuYXBzaG90OiBnZXRTbmFwc2hvdCB9XG4gICAgICB9KTtcbiAgICAgIHZhciBpbnN0ID0gY2FjaGVkVmFsdWVbMF0uaW5zdCxcbiAgICAgICAgZm9yY2VVcGRhdGUgPSBjYWNoZWRWYWx1ZVsxXTtcbiAgICAgIHVzZUxheW91dEVmZmVjdChcbiAgICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGluc3QudmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgICBpbnN0LmdldFNuYXBzaG90ID0gZ2V0U25hcHNob3Q7XG4gICAgICAgICAgY2hlY2tJZlNuYXBzaG90Q2hhbmdlZChpbnN0KSAmJiBmb3JjZVVwZGF0ZSh7IGluc3Q6IGluc3QgfSk7XG4gICAgICAgIH0sXG4gICAgICAgIFtzdWJzY3JpYmUsIHZhbHVlLCBnZXRTbmFwc2hvdF1cbiAgICAgICk7XG4gICAgICB1c2VFZmZlY3QoXG4gICAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBjaGVja0lmU25hcHNob3RDaGFuZ2VkKGluc3QpICYmIGZvcmNlVXBkYXRlKHsgaW5zdDogaW5zdCB9KTtcbiAgICAgICAgICByZXR1cm4gc3Vic2NyaWJlKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGNoZWNrSWZTbmFwc2hvdENoYW5nZWQoaW5zdCkgJiYgZm9yY2VVcGRhdGUoeyBpbnN0OiBpbnN0IH0pO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuICAgICAgICBbc3Vic2NyaWJlXVxuICAgICAgKTtcbiAgICAgIHVzZURlYnVnVmFsdWUodmFsdWUpO1xuICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH1cbiAgICBmdW5jdGlvbiBjaGVja0lmU25hcHNob3RDaGFuZ2VkKGluc3QpIHtcbiAgICAgIHZhciBsYXRlc3RHZXRTbmFwc2hvdCA9IGluc3QuZ2V0U25hcHNob3Q7XG4gICAgICBpbnN0ID0gaW5zdC52YWx1ZTtcbiAgICAgIHRyeSB7XG4gICAgICAgIHZhciBuZXh0VmFsdWUgPSBsYXRlc3RHZXRTbmFwc2hvdCgpO1xuICAgICAgICByZXR1cm4gIW9iamVjdElzKGluc3QsIG5leHRWYWx1ZSk7XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICByZXR1cm4gITA7XG4gICAgICB9XG4gICAgfVxuICAgIGZ1bmN0aW9uIHVzZVN5bmNFeHRlcm5hbFN0b3JlJDEoc3Vic2NyaWJlLCBnZXRTbmFwc2hvdCkge1xuICAgICAgcmV0dXJuIGdldFNuYXBzaG90KCk7XG4gICAgfVxuICAgIFwidW5kZWZpbmVkXCIgIT09IHR5cGVvZiBfX1JFQUNUX0RFVlRPT0xTX0dMT0JBTF9IT09LX18gJiZcbiAgICAgIFwiZnVuY3Rpb25cIiA9PT1cbiAgICAgICAgdHlwZW9mIF9fUkVBQ1RfREVWVE9PTFNfR0xPQkFMX0hPT0tfXy5yZWdpc3RlckludGVybmFsTW9kdWxlU3RhcnQgJiZcbiAgICAgIF9fUkVBQ1RfREVWVE9PTFNfR0xPQkFMX0hPT0tfXy5yZWdpc3RlckludGVybmFsTW9kdWxlU3RhcnQoRXJyb3IoKSk7XG4gICAgdmFyIFJlYWN0ID0gcmVxdWlyZShcInJlYWN0XCIpLFxuICAgICAgb2JqZWN0SXMgPSBcImZ1bmN0aW9uXCIgPT09IHR5cGVvZiBPYmplY3QuaXMgPyBPYmplY3QuaXMgOiBpcyxcbiAgICAgIHVzZVN0YXRlID0gUmVhY3QudXNlU3RhdGUsXG4gICAgICB1c2VFZmZlY3QgPSBSZWFjdC51c2VFZmZlY3QsXG4gICAgICB1c2VMYXlvdXRFZmZlY3QgPSBSZWFjdC51c2VMYXlvdXRFZmZlY3QsXG4gICAgICB1c2VEZWJ1Z1ZhbHVlID0gUmVhY3QudXNlRGVidWdWYWx1ZSxcbiAgICAgIGRpZFdhcm5PbGQxOEFscGhhID0gITEsXG4gICAgICBkaWRXYXJuVW5jYWNoZWRHZXRTbmFwc2hvdCA9ICExLFxuICAgICAgc2hpbSA9XG4gICAgICAgIFwidW5kZWZpbmVkXCIgPT09IHR5cGVvZiB3aW5kb3cgfHxcbiAgICAgICAgXCJ1bmRlZmluZWRcIiA9PT0gdHlwZW9mIHdpbmRvdy5kb2N1bWVudCB8fFxuICAgICAgICBcInVuZGVmaW5lZFwiID09PSB0eXBlb2Ygd2luZG93LmRvY3VtZW50LmNyZWF0ZUVsZW1lbnRcbiAgICAgICAgICA/IHVzZVN5bmNFeHRlcm5hbFN0b3JlJDFcbiAgICAgICAgICA6IHVzZVN5bmNFeHRlcm5hbFN0b3JlJDI7XG4gICAgZXhwb3J0cy51c2VTeW5jRXh0ZXJuYWxTdG9yZSA9XG4gICAgICB2b2lkIDAgIT09IFJlYWN0LnVzZVN5bmNFeHRlcm5hbFN0b3JlID8gUmVhY3QudXNlU3luY0V4dGVybmFsU3RvcmUgOiBzaGltO1xuICAgIFwidW5kZWZpbmVkXCIgIT09IHR5cGVvZiBfX1JFQUNUX0RFVlRPT0xTX0dMT0JBTF9IT09LX18gJiZcbiAgICAgIFwiZnVuY3Rpb25cIiA9PT1cbiAgICAgICAgdHlwZW9mIF9fUkVBQ1RfREVWVE9PTFNfR0xPQkFMX0hPT0tfXy5yZWdpc3RlckludGVybmFsTW9kdWxlU3RvcCAmJlxuICAgICAgX19SRUFDVF9ERVZUT09MU19HTE9CQUxfSE9PS19fLnJlZ2lzdGVySW50ZXJuYWxNb2R1bGVTdG9wKEVycm9yKCkpO1xuICB9KSgpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/use-sync-external-store/cjs/use-sync-external-store-shim.development.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/use-sync-external-store/shim/index.js":
/*!************************************************************!*\
  !*** ./node_modules/use-sync-external-store/shim/index.js ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\nif (false) {} else {\n  module.exports = __webpack_require__(/*! ../cjs/use-sync-external-store-shim.development.js */ \"(ssr)/./node_modules/use-sync-external-store/cjs/use-sync-external-store-shim.development.js\");\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvdXNlLXN5bmMtZXh0ZXJuYWwtc3RvcmUvc2hpbS9pbmRleC5qcyIsIm1hcHBpbmdzIjoiQUFBYTs7QUFFYixJQUFJLEtBQXFDLEVBQUUsRUFFMUMsQ0FBQztBQUNGLEVBQUUsOExBQThFO0FBQ2hGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYWktaW50ZXJ2aWV3LWNoYXQvLi9ub2RlX21vZHVsZXMvdXNlLXN5bmMtZXh0ZXJuYWwtc3RvcmUvc2hpbS9pbmRleC5qcz9jNDM1Il0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicpIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi9janMvdXNlLXN5bmMtZXh0ZXJuYWwtc3RvcmUtc2hpbS5wcm9kdWN0aW9uLmpzJyk7XG59IGVsc2Uge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uL2Nqcy91c2Utc3luYy1leHRlcm5hbC1zdG9yZS1zaGltLmRldmVsb3BtZW50LmpzJyk7XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/use-sync-external-store/shim/index.js\n");

/***/ })

};
;