/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _js_main_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/main.js */ \"./src/js/main.js\");\n//js\n\n//img\n\n//sass\n// import \"./sass/index.sass\";\n// //css\n// import \"./css/index.min.css\"\n\n//# sourceURL=webpack://pagecrm/./src/index.js?");

/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _header_hamburger_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header/hamburger.mjs */ \"./src/js/header/hamburger.mjs\");\n/* harmony import */ var _modal_application_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modal/application.mjs */ \"./src/js/modal/application.mjs\");\n/* harmony import */ var _map_map_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./map/map.mjs */ \"./src/js/map/map.mjs\");\n\n\n\ndocument.addEventListener('DOMContentLoaded', () => {\n  (0,_modal_application_mjs__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n  const hamburger = document.querySelector('.hamburger');\n  hamburger.addEventListener('click', () => {\n    (0,_header_hamburger_mjs__WEBPACK_IMPORTED_MODULE_0__.effectHamburger)(hamburger);\n  });\n  (0,_map_map_mjs__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n});\n\n//# sourceURL=webpack://pagecrm/./src/js/main.js?");

/***/ }),

/***/ "./src/js/header/hamburger.mjs":
/*!*************************************!*\
  !*** ./src/js/header/hamburger.mjs ***!
  \*************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   effectHamburger: () => (/* binding */ effectHamburger)\n/* harmony export */ });\nconst nav = document.getElementById(\"nav\");\r\n\r\nconst effectHamburger = (hamburger) => {\r\n    if (nav.className === \"header__nav\") {\r\n        nav.className += \" responsive\";\r\n    } else {\r\n        nav.className = \"header__nav\";\r\n    }\r\n    hamburger.classList.toggle('hamburger_active');\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://pagecrm/./src/js/header/hamburger.mjs?");

/***/ }),

/***/ "./src/js/map/map.mjs":
/*!****************************!*\
  !*** ./src/js/map/map.mjs ***!
  \****************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nymaps.ready(init);\r\nfunction init(ymaps){\r\n    const myMap = new ymaps.Map(\"map\", {\r\n        center: [59.907478, 30.324395],\r\n        zoom: 15\r\n    });\r\n    const myPlacemark = new ymaps.Placemark([59.907478, 30.324395], {\r\n        hintContent: 'Это место!',\r\n        balloonContent: 'Здесь'\r\n    }, {\r\n        iconLayout: 'default#image',\r\n        iconImageHref: './img/icons/union.svg',\r\n        iconImageSize: [30, 42],\r\n        iconImageOffset: [-15, -42] \r\n    });\r\n\r\n    myMap.geoObjects.add(myPlacemark);\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (init);\r\n\n\n//# sourceURL=webpack://pagecrm/./src/js/map/map.mjs?");

/***/ }),

/***/ "./src/js/modal/application.mjs":
/*!**************************************!*\
  !*** ./src/js/modal/application.mjs ***!
  \**************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// const tariff = document.querySelector('.tariff__modal');\r\nconst tariffThx = document.querySelector('.tariff__modal_thanks');\r\nconst tariff = document.querySelector('.tariff__modal_formWrapper');\r\nconst activeF = 'activeF';\r\nconst activeB = 'activeB';\r\n\r\nconst dataTariff = () => {\r\n    const openModal = (block, active) => {\r\n        block.classList.add(active);\r\n    }\r\n    const closeModal = (block, active) => {\r\n        block.classList.remove(active);\r\n    }\r\n\r\n    window.addEventListener('click', (e) => {\r\n        // thx\r\n        if (e.target.dataset.application === \"\") {\r\n            openModal(tariffThx, activeB);\r\n        } else if (!tariff.contains(e.target) || !tariffThx.contains(e.target)) {\r\n            closeModal(tariffThx, activeB);\r\n        }\r\n\r\n        // tariff form\r\n        if (e.target.dataset.tariff) {\r\n            openModal(tariff, activeF);\r\n        } else if (!tariff.contains(e.target) || e.target.classList.contains('close') || e.target.dataset.application === \"\") {\r\n            closeModal(tariff, activeF);\r\n        }\r\n    });\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (dataTariff);\r\n\n\n//# sourceURL=webpack://pagecrm/./src/js/modal/application.mjs?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;