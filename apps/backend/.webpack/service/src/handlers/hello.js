(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/handlers/hello.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/handlers/hello.ts":
/*!*******************************!*\
  !*** ./src/handlers/hello.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const dotenv = __webpack_require__(/*! dotenv */ \"dotenv\").config();\r\nconst sayHello = async function (context, req) {\r\n    var _a;\r\n    context.log(\"Typescript HTTP trigger function processed a request.\");\r\n    if (req.query.name || ((_a = req.body) === null || _a === void 0 ? void 0 : _a.name)) {\r\n        context.res = {\r\n            body: `Hello ${req.query.name || req.body.name}! ${process.env.test}`,\r\n        };\r\n    }\r\n    else {\r\n        context.res = {\r\n            status: 400,\r\n            body: \"Please pass a name on the query string or in the request body\",\r\n        };\r\n    }\r\n};\r\nmodule.exports.sayHello = sayHello;\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaGFuZGxlcnMvaGVsbG8udHMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaGFuZGxlcnMvaGVsbG8udHM/YjAyMiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBenVyZUZ1bmN0aW9uLCBDb250ZXh0LCBIdHRwUmVxdWVzdCB9IGZyb20gXCJAYXp1cmUvZnVuY3Rpb25zXCI7XHJcblxyXG4vL0B0cy1pZ25vcmVcclxuY29uc3QgZG90ZW52ID0gcmVxdWlyZShcImRvdGVudlwiKS5jb25maWcoKTtcclxuXHJcbmNvbnN0IHNheUhlbGxvOiBBenVyZUZ1bmN0aW9uID0gYXN5bmMgZnVuY3Rpb24gKFxyXG4gIGNvbnRleHQ6IENvbnRleHQsXHJcbiAgcmVxOiBIdHRwUmVxdWVzdFxyXG4pOiBQcm9taXNlPHZvaWQ+IHtcclxuICBjb250ZXh0LmxvZyhcIlR5cGVzY3JpcHQgSFRUUCB0cmlnZ2VyIGZ1bmN0aW9uIHByb2Nlc3NlZCBhIHJlcXVlc3QuXCIpO1xyXG5cclxuICBpZiAocmVxLnF1ZXJ5Lm5hbWUgfHwgcmVxLmJvZHk/Lm5hbWUpIHtcclxuICAgIGNvbnRleHQucmVzID0ge1xyXG4gICAgICAvLyBzdGF0dXM6IDIwMCwgLyogRGVmYXVsdHMgdG8gMjAwICovXHJcbiAgICAgIGJvZHk6IGBIZWxsbyAke3JlcS5xdWVyeS5uYW1lIHx8IHJlcS5ib2R5Lm5hbWV9ISAke3Byb2Nlc3MuZW52LnRlc3R9YCxcclxuICAgIH07XHJcbiAgfSBlbHNlIHtcclxuICAgIGNvbnRleHQucmVzID0ge1xyXG4gICAgICBzdGF0dXM6IDQwMCxcclxuICAgICAgYm9keTogXCJQbGVhc2UgcGFzcyBhIG5hbWUgb24gdGhlIHF1ZXJ5IHN0cmluZyBvciBpbiB0aGUgcmVxdWVzdCBib2R5XCIsXHJcbiAgICB9O1xyXG4gIH1cclxufTtcclxuXHJcbm1vZHVsZS5leHBvcnRzLnNheUhlbGxvID0gc2F5SGVsbG87XHJcbiJdLCJtYXBwaW5ncyI6IkFBR0E7QUFFQTs7QUFJQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/handlers/hello.ts\n");

/***/ }),

/***/ "dotenv":
/*!*************************!*\
  !*** external "dotenv" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"dotenv\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG90ZW52LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZG90ZW52XCI/ZTcwZiJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJkb3RlbnZcIik7Il0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///dotenv\n");

/***/ })

/******/ })));