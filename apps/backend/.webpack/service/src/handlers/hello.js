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

eval("const dotenv = __webpack_require__(/*! dotenv */ \"dotenv\").config();\nconst sayHello = async function (context, req) {\n    var _a;\n    context.log(\"Typescript HTTP trigger function processed a request.\");\n    if (req.query.name || ((_a = req.body) === null || _a === void 0 ? void 0 : _a.name)) {\n        context.res = {\n            body: `Hello ${req.query.name || req.body.name}! ${process.env.project_id}`,\n        };\n    }\n    else {\n        context.res = {\n            status: 400,\n            body: \"Please pass a name on the query string or in the request body\",\n        };\n    }\n};\nmodule.exports.sayHello = sayHello;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaGFuZGxlcnMvaGVsbG8udHMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaGFuZGxlcnMvaGVsbG8udHM/YjAyMiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBenVyZUZ1bmN0aW9uLCBDb250ZXh0LCBIdHRwUmVxdWVzdCB9IGZyb20gXCJAYXp1cmUvZnVuY3Rpb25zXCI7XG5cbi8vQHRzLWlnbm9yZVxuY29uc3QgZG90ZW52ID0gcmVxdWlyZShcImRvdGVudlwiKS5jb25maWcoKTtcblxuY29uc3Qgc2F5SGVsbG86IEF6dXJlRnVuY3Rpb24gPSBhc3luYyBmdW5jdGlvbiAoXG4gIGNvbnRleHQ6IENvbnRleHQsXG4gIHJlcTogSHR0cFJlcXVlc3Rcbik6IFByb21pc2U8dm9pZD4ge1xuICBjb250ZXh0LmxvZyhcIlR5cGVzY3JpcHQgSFRUUCB0cmlnZ2VyIGZ1bmN0aW9uIHByb2Nlc3NlZCBhIHJlcXVlc3QuXCIpO1xuXG4gIGlmIChyZXEucXVlcnkubmFtZSB8fCByZXEuYm9keT8ubmFtZSkge1xuICAgIC8vIGNvbnNvbGUubG9nKENvbmZpZ3VyYXRpb25NYW5hZ2VyLkFwcFNldHRpbmdzW1wiQ3VzdG9tU2V0dGluZ1wiXSk7XG5cbiAgICBjb250ZXh0LnJlcyA9IHtcbiAgICAgIC8vIHN0YXR1czogMjAwLCAvKiBEZWZhdWx0cyB0byAyMDAgKi9cbiAgICAgIGJvZHk6IGBIZWxsbyAke3JlcS5xdWVyeS5uYW1lIHx8IHJlcS5ib2R5Lm5hbWV9ISAke1xuICAgICAgICBwcm9jZXNzLmVudi5wcm9qZWN0X2lkXG4gICAgICB9YCxcbiAgICB9O1xuICB9IGVsc2Uge1xuICAgIGNvbnRleHQucmVzID0ge1xuICAgICAgc3RhdHVzOiA0MDAsXG4gICAgICBib2R5OiBcIlBsZWFzZSBwYXNzIGEgbmFtZSBvbiB0aGUgcXVlcnkgc3RyaW5nIG9yIGluIHRoZSByZXF1ZXN0IGJvZHlcIixcbiAgICB9O1xuICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cy5zYXlIZWxsbyA9IHNheUhlbGxvO1xuIl0sIm1hcHBpbmdzIjoiQUFHQTtBQUVBOztBQUlBO0FBRUE7QUFHQTtBQUVBO0FBR0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/handlers/hello.ts\n");

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