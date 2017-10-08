require("source-map-support").install();
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwYXRoXCI/NWIyYSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiIwLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicGF0aFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInBhdGhcIlxuLy8gbW9kdWxlIGlkID0gMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

eval("module.exports = require(\"fs\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmc1wiPzJlMDkiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiMS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImZzXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiZnNcIlxuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///1\n");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

eval("module.exports = {\"outputDest\":{\"dev\":\"output\",\"test\":\"test_output\"}}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29uZmlnL2NvbmZpZy5qc29uPzQyNDMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsa0JBQWtCLGNBQWMiLCJmaWxlIjoiMi5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0ge1wib3V0cHV0RGVzdFwiOntcImRldlwiOlwib3V0cHV0XCIsXCJ0ZXN0XCI6XCJ0ZXN0X291dHB1dFwifX1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9jb25maWcvY29uZmlnLmpzb25cbi8vIG1vZHVsZSBpZCA9IDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///2\n");

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* WEBPACK VAR INJECTION */(function(__dirname) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_path__ = __webpack_require__(0);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_path___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_path__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__application__ = __webpack_require__(4);\n\n\n\nconst settings = __webpack_require__(2);\nconst input = __WEBPACK_IMPORTED_MODULE_0_path___default.a.join(__dirname, './data/FundExport_20170825_112959.json');\nconst topLevelNodes = ['statistics.returns.valueDate'];\nconst settings = __webpack_require__(2);\nconst outputDir = settings.outputDest.dev;\n\nconst app = Object(__WEBPACK_IMPORTED_MODULE_1__application__[\"a\" /* NodeApp */])({ outputDir });\napp.extractAndWrite(input, topLevelNodes);\n\n\n\n/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, \"/\"))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXgtbm9kZS5qcz9lYmQzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQTtBQUNrQjs7QUFFbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxtRkFBcUIsWUFBWTtBQUNqQyIsImZpbGUiOiIzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHBhdGggZnJvbSBcInBhdGhcIjtcbmltcG9ydCB7IE5vZGVBcHAgfSBmcm9tIFwiLi9hcHBsaWNhdGlvblwiO1xuXG5jb25zdCBzZXR0aW5ncyA9IHJlcXVpcmUoJy4vY29uZmlnL2NvbmZpZy5qc29uJyk7XG5jb25zdCBpbnB1dCA9IHBhdGguam9pbihfX2Rpcm5hbWUsICcuL2RhdGEvRnVuZEV4cG9ydF8yMDE3MDgyNV8xMTI5NTkuanNvbicpO1xuY29uc3QgdG9wTGV2ZWxOb2RlcyA9IFsnc3RhdGlzdGljcy5yZXR1cm5zLnZhbHVlRGF0ZSddO1xuY29uc3Qgc2V0dGluZ3MgPSByZXF1aXJlKCcuL2NvbmZpZy9jb25maWcuanNvbicpO1xuY29uc3Qgb3V0cHV0RGlyID0gc2V0dGluZ3Mub3V0cHV0RGVzdC5kZXY7XG5cbmNvbnN0IGFwcCA9IE5vZGVBcHAoeyBvdXRwdXREaXIgfSk7XG5hcHAuZXh0cmFjdEFuZFdyaXRlKGlucHV0LCB0b3BMZXZlbE5vZGVzKTtcblxuXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9pbmRleC1ub2RlLmpzXG4vLyBtb2R1bGUgaWQgPSAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///3\n");

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_app__ = __webpack_require__(5);\n/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return __WEBPACK_IMPORTED_MODULE_0__node_app__[\"a\"]; });\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiI0LmpzIiwic291cmNlc0NvbnRlbnQiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///4\n");

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__application__ = __webpack_require__(6);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__application___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__application__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_fs__ = __webpack_require__(1);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_fs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_fs__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_path__ = __webpack_require__(0);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_path___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_path__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__json__ = __webpack_require__(7);\n\n\n\n\n\nclass NodeApp extends Appilication {\n    constructor(settings) {\n        super(settings);\n        this.extractAndWrite = this.extractAndWrite.bind(this);\n    }\n    /**\n    * \n    * @param {string} fileName the name of the file to be written.\n    * @param {object} source the source object to write.\n    */\n    extractAndWrite(sourcePath, nodesToExtract) {\n        Object(__WEBPACK_IMPORTED_MODULE_3__json__[\"extract\"])(sourcePath, nodesToExtract)\n            .then((output) => {\n                const absFileName = __WEBPACK_IMPORTED_MODULE_2_path___default.a.join(this.settings.outputDir, `${output.fileName}.json`);\n                __WEBPACK_IMPORTED_MODULE_1_fs___default.a.writeFileSync(\n                    absFileName,\n                    JSON.stringify(output.source, null, 4), { encoding: 'UTF8' }\n                );\n            }, (reason) => {\n                console.error(reason)\n            })\n    }\n\n}\n/* harmony export (immutable) */ __webpack_exports__[\"a\"] = NodeApp;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXBwbGljYXRpb24vbm9kZS1hcHAuanM/MDdmZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQXNCO0FBQ3RCO0FBQ0E7QUFDa0I7O0FBRWxCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYyxPQUFPO0FBQ3JCLGNBQWMsT0FBTztBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtIQUEwRSxnQkFBZ0I7QUFDMUY7QUFDQTtBQUNBLDZEQUE2RDtBQUM3RDtBQUNBLGFBQWE7QUFDYjtBQUNBLGFBQWE7QUFDYjs7QUFFQSxDIiwiZmlsZSI6IjUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcHBsaWNhdGlvbiB9IGZyb20gXCIuL2FwcGxpY2F0aW9uXCI7XG5pbXBvcnQgZnMgZnJvbSBcImZzXCI7XG5pbXBvcnQgcGF0aCBmcm9tIFwicGF0aFwiO1xuaW1wb3J0IHsgZXh0cmFjdCB9IGZyb20gXCIuLi9qc29uXCI7XG5cbmV4cG9ydCBjbGFzcyBOb2RlQXBwIGV4dGVuZHMgQXBwaWxpY2F0aW9uIHtcbiAgICBjb25zdHJ1Y3RvcihzZXR0aW5ncykge1xuICAgICAgICBzdXBlcihzZXR0aW5ncyk7XG4gICAgICAgIHRoaXMuZXh0cmFjdEFuZFdyaXRlID0gdGhpcy5leHRyYWN0QW5kV3JpdGUuYmluZCh0aGlzKTtcbiAgICB9XG4gICAgLyoqXG4gICAgKiBcbiAgICAqIEBwYXJhbSB7c3RyaW5nfSBmaWxlTmFtZSB0aGUgbmFtZSBvZiB0aGUgZmlsZSB0byBiZSB3cml0dGVuLlxuICAgICogQHBhcmFtIHtvYmplY3R9IHNvdXJjZSB0aGUgc291cmNlIG9iamVjdCB0byB3cml0ZS5cbiAgICAqL1xuICAgIGV4dHJhY3RBbmRXcml0ZShzb3VyY2VQYXRoLCBub2Rlc1RvRXh0cmFjdCkge1xuICAgICAgICBleHRyYWN0KHNvdXJjZVBhdGgsIG5vZGVzVG9FeHRyYWN0KVxuICAgICAgICAgICAgLnRoZW4oKG91dHB1dCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGFic0ZpbGVOYW1lID0gcGF0aC5qb2luKHRoaXMuc2V0dGluZ3Mub3V0cHV0RGlyLCBgJHtvdXRwdXQuZmlsZU5hbWV9Lmpzb25gKTtcbiAgICAgICAgICAgICAgICBmcy53cml0ZUZpbGVTeW5jKFxuICAgICAgICAgICAgICAgICAgICBhYnNGaWxlTmFtZSxcbiAgICAgICAgICAgICAgICAgICAgSlNPTi5zdHJpbmdpZnkob3V0cHV0LnNvdXJjZSwgbnVsbCwgNCksIHsgZW5jb2Rpbmc6ICdVVEY4JyB9XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0sIChyZWFzb24pID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKHJlYXNvbilcbiAgICAgICAgICAgIH0pXG4gICAgfVxuXG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYXBwbGljYXRpb24vbm9kZS1hcHAuanNcbi8vIG1vZHVsZSBpZCA9IDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///5\n");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

eval("class Application {\n    constructor(settings) {\n        this.settings = settings;\n    }\n}\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXBwbGljYXRpb24vYXBwbGljYXRpb24uanM/M2VlMiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6IjYuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBBcHBsaWNhdGlvbiB7XG4gICAgY29uc3RydWN0b3Ioc2V0dGluZ3MpIHtcbiAgICAgICAgdGhpcy5zZXR0aW5ncyA9IHNldHRpbmdzO1xuICAgIH1cbn1cblxuXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9hcHBsaWNhdGlvbi9hcHBsaWNhdGlvbi5qc1xuLy8gbW9kdWxlIGlkID0gNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///6\n");

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__extract__ = __webpack_require__(8);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__extract___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__extract__);\n/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_0__extract__, \"extract\")) __webpack_require__.d(__webpack_exports__, \"extract\", function() { return __WEBPACK_IMPORTED_MODULE_0__extract__[\"extract\"]; });\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiI3LmpzIiwic291cmNlc0NvbnRlbnQiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///7\n");

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

eval("const fs = __webpack_require__(1);\nconst path = __webpack_require__(0);\n\n/**\n * \n * @param {string} sourcePath the source data's absolute path\n * @param {string[]} nodesToExtract the top level nodes to extract into separate files. \n * Strings can be formatted with dot notation for nested nodes ex. \"topLevel.lowerLevel\"\n * @return {promise}\n */\nconst extractNode = (sourcePath, nodesToExtract) => {\n\n    return new Promise((resolve, reject) => {\n\n        try {\n            const sourceData = fs.readFileSync(sourcePath, {encoding: 'UTF8'});\n            const parsedData = JSON.parse(sourceData);\n            \n            for (identifier of nodesToExtract) {\n                const keys = identifier.split('.');\n                let objectToWrite = parsedData;\n                let index = 0;\n                let keysLength = keys.length;\n                for (key of keys) {\n                    objectToWrite = objectToWrite[key];\n                    if (index === keysLength - 1) {\n                        resolve({\n                            fileName: identifier, \n                            source: objectToWrite\n                        });\n                    } else {\n                        index++;\n                    }\n                }\n            }\n        } catch (e) {\n            reject(e);\n        }\n\n    });\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanNvbi9leHRyYWN0LmpzPzhhMWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsU0FBUztBQUNwQjtBQUNBLFlBQVk7QUFDWjtBQUNBOztBQUVBOztBQUVBO0FBQ0EsNERBQTRELGlCQUFpQjtBQUM3RTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBLEtBQUs7QUFDTCIsImZpbGUiOiI4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgZnMgPSByZXF1aXJlKCdmcycpO1xuY29uc3QgcGF0aCA9IHJlcXVpcmUoJ3BhdGgnKTtcblxuLyoqXG4gKiBcbiAqIEBwYXJhbSB7c3RyaW5nfSBzb3VyY2VQYXRoIHRoZSBzb3VyY2UgZGF0YSdzIGFic29sdXRlIHBhdGhcbiAqIEBwYXJhbSB7c3RyaW5nW119IG5vZGVzVG9FeHRyYWN0IHRoZSB0b3AgbGV2ZWwgbm9kZXMgdG8gZXh0cmFjdCBpbnRvIHNlcGFyYXRlIGZpbGVzLiBcbiAqIFN0cmluZ3MgY2FuIGJlIGZvcm1hdHRlZCB3aXRoIGRvdCBub3RhdGlvbiBmb3IgbmVzdGVkIG5vZGVzIGV4LiBcInRvcExldmVsLmxvd2VyTGV2ZWxcIlxuICogQHJldHVybiB7cHJvbWlzZX1cbiAqL1xuY29uc3QgZXh0cmFjdE5vZGUgPSAoc291cmNlUGF0aCwgbm9kZXNUb0V4dHJhY3QpID0+IHtcblxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IHNvdXJjZURhdGEgPSBmcy5yZWFkRmlsZVN5bmMoc291cmNlUGF0aCwge2VuY29kaW5nOiAnVVRGOCd9KTtcbiAgICAgICAgICAgIGNvbnN0IHBhcnNlZERhdGEgPSBKU09OLnBhcnNlKHNvdXJjZURhdGEpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBmb3IgKGlkZW50aWZpZXIgb2Ygbm9kZXNUb0V4dHJhY3QpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBrZXlzID0gaWRlbnRpZmllci5zcGxpdCgnLicpO1xuICAgICAgICAgICAgICAgIGxldCBvYmplY3RUb1dyaXRlID0gcGFyc2VkRGF0YTtcbiAgICAgICAgICAgICAgICBsZXQgaW5kZXggPSAwO1xuICAgICAgICAgICAgICAgIGxldCBrZXlzTGVuZ3RoID0ga2V5cy5sZW5ndGg7XG4gICAgICAgICAgICAgICAgZm9yIChrZXkgb2Yga2V5cykge1xuICAgICAgICAgICAgICAgICAgICBvYmplY3RUb1dyaXRlID0gb2JqZWN0VG9Xcml0ZVtrZXldO1xuICAgICAgICAgICAgICAgICAgICBpZiAoaW5kZXggPT09IGtleXNMZW5ndGggLSAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxlTmFtZTogaWRlbnRpZmllciwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc291cmNlOiBvYmplY3RUb1dyaXRlXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGluZGV4Kys7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIHJlamVjdChlKTtcbiAgICAgICAgfVxuXG4gICAgfSk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvanNvbi9leHRyYWN0LmpzXG4vLyBtb2R1bGUgaWQgPSA4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///8\n");

/***/ })
/******/ ]);