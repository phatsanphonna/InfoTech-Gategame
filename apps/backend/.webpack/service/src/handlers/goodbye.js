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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/handlers/goodbye.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/handlers/goodbye.ts":
/*!*********************************!*\
  !*** ./src/handlers/goodbye.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const sayGoodbye = async function (context, req) {\r\n    var _a;\r\n    context.log('Typescript HTTP trigger function processed a request.');\r\n    if (req.query.name || ((_a = req.body) === null || _a === void 0 ? void 0 : _a.name)) {\r\n        context.res = {\r\n            body: `Goodbye ${(req.query.name || req.body.name)}`,\r\n        };\r\n    }\r\n    else {\r\n        context.res = {\r\n            status: 400,\r\n            body: 'Please pass a name on the query string or in the request body',\r\n        };\r\n    }\r\n};\r\nmodule.exports.sayGoodbye = sayGoodbye;\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaGFuZGxlcnMvZ29vZGJ5ZS50cy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9oYW5kbGVycy9nb29kYnllLnRzPzc3YWYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXp1cmVGdW5jdGlvbiwgQ29udGV4dCwgSHR0cFJlcXVlc3QgfSBmcm9tICdAYXp1cmUvZnVuY3Rpb25zJztcblxuY29uc3Qgc2F5R29vZGJ5ZTogQXp1cmVGdW5jdGlvbiA9IGFzeW5jIGZ1bmN0aW9uIChjb250ZXh0OiBDb250ZXh0LCByZXE6IEh0dHBSZXF1ZXN0KSB7XG4gIGNvbnRleHQubG9nKCdUeXBlc2NyaXB0IEhUVFAgdHJpZ2dlciBmdW5jdGlvbiBwcm9jZXNzZWQgYSByZXF1ZXN0LicpO1xuXG4gIGlmIChyZXEucXVlcnkubmFtZSB8fCAocmVxLmJvZHk/Lm5hbWUpKSB7XG4gICAgY29udGV4dC5yZXMgPSB7XG4gICAgICAvLyBzdGF0dXM6IDIwMCwgLyogRGVmYXVsdHMgdG8gMjAwICovXG4gICAgICBib2R5OiBgR29vZGJ5ZSAkeyhyZXEucXVlcnkubmFtZSB8fCByZXEuYm9keS5uYW1lKX1gLFxuICAgIH07XG4gIH0gZWxzZSB7XG4gICAgY29udGV4dC5yZXMgPSB7XG4gICAgICBzdGF0dXM6IDQwMCxcbiAgICAgIGJvZHk6ICdQbGVhc2UgcGFzcyBhIG5hbWUgb24gdGhlIHF1ZXJ5IHN0cmluZyBvciBpbiB0aGUgcmVxdWVzdCBib2R5JyxcbiAgICB9O1xuICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cy5zYXlHb29kYnllID0gc2F5R29vZGJ5ZTsiXSwibWFwcGluZ3MiOiJBQUVBOztBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/handlers/goodbye.ts\n");

/***/ })

/******/ })));