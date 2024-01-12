/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/clearPage.js":
/*!**************************!*\
  !*** ./src/clearPage.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function clearPage() {

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (clearPage);

/***/ }),

/***/ "./src/contactPage.js":
/*!****************************!*\
  !*** ./src/contactPage.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function contactPage() {

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (contactPage);

/***/ }),

/***/ "./src/homePage.js":
/*!*************************!*\
  !*** ./src/homePage.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ "./src/index.js");


function homePage() {

    const home = document.createElement('div');
    
    const title = document.createElement('h1');
    title.textContent = 'The Low-Carb Restaurant';
    title.classList.toggle('title');
    home.appendChild(title);

    const image = document.createElement('img');
    image.src = '../src/images/image.jpg';
    image.alt = 'The PCOS Plan';
    image.classList.toggle('image');
    home.appendChild(image);

    const headline = document.createElement('p');
    headline.textContent = 'Prevent and Reverse Polycystic Ovary Syndrome '
    + 'through Diet and Fasting';
    headline.classList.toggle('headline');
    home.appendChild(headline);

    _index__WEBPACK_IMPORTED_MODULE_0__.content.appendChild(home);

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (homePage);

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   content: () => (/* binding */ content)
/* harmony export */ });
/* harmony import */ var _homePage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./homePage */ "./src/homePage.js");
/* harmony import */ var _menuPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menuPage */ "./src/menuPage.js");
/* harmony import */ var _contactPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contactPage */ "./src/contactPage.js");
/* harmony import */ var _clearPage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./clearPage */ "./src/clearPage.js");





const content = document.querySelector('#content');

function createBtn(button) {
    let btn = document.createElement('button');
    btn.textContent = button;
    let lowerCase = button.toLowerCase();
    btn.classList.toggle(`${lowerCase}Btn`);
    btn.addEventListener('click', () => {
        (0,_clearPage__WEBPACK_IMPORTED_MODULE_3__["default"])();
        `${lowerCase}Page`();
    });
}

const homeBtn = document.createElement('button');
homeBtn.textContent = 'Home';
homeBtn.classList.toggle('homeBtn');
homeBtn.addEventListener('click', () => {
    (0,_clearPage__WEBPACK_IMPORTED_MODULE_3__["default"])();
    (0,_homePage__WEBPACK_IMPORTED_MODULE_0__["default"])();
});
content.appendChild(homeBtn);

const menuBtn = document.createElement('button');
menuBtn.textContent = 'Menu';
menuBtn.classList.toggle('menuBtn');
menuBtn.addEventListener('click', () => {
    (0,_clearPage__WEBPACK_IMPORTED_MODULE_3__["default"])();
    (0,_menuPage__WEBPACK_IMPORTED_MODULE_1__["default"])();
});
content.appendChild(menuBtn);

const contactBtn = document.createElement('button');
contactBtn.textContent = 'Contact';
contactBtn.classList.toggle('contactBtn');
contactBtn.addEventListener('click', () => {
    (0,_clearPage__WEBPACK_IMPORTED_MODULE_3__["default"])();
    (0,_contactPage__WEBPACK_IMPORTED_MODULE_2__["default"])();
});
content.appendChild(contactBtn);

(0,_homePage__WEBPACK_IMPORTED_MODULE_0__["default"])();



/***/ }),

/***/ "./src/menuPage.js":
/*!*************************!*\
  !*** ./src/menuPage.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function menuPage() {

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menuPage);

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
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBOztBQUVBOztBQUVBLGlFQUFlLFNBQVM7Ozs7Ozs7Ozs7Ozs7O0FDSnhCOztBQUVBOztBQUVBLGlFQUFlLFdBQVc7Ozs7Ozs7Ozs7Ozs7OztBQ0pROztBQUVsQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQUksMkNBQU87O0FBRVg7O0FBRUEsaUVBQWUsUUFBUTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDM0JXO0FBQ0E7QUFDTTtBQUNKOztBQUVwQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixVQUFVO0FBQ3RDO0FBQ0EsUUFBUSxzREFBUztBQUNqQixXQUFXLFVBQVU7QUFDckIsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxzREFBUztBQUNiLElBQUkscURBQVE7QUFDWixDQUFDO0FBQ0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLHNEQUFTO0FBQ2IsSUFBSSxxREFBUTtBQUNaLENBQUM7QUFDRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksc0RBQVM7QUFDYixJQUFJLHdEQUFXO0FBQ2YsQ0FBQztBQUNEOztBQUVBLHFEQUFROzs7Ozs7Ozs7Ozs7Ozs7O0FDN0NSOztBQUVBOztBQUVBLGlFQUFlLFFBQVE7Ozs7OztVQ0p2QjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7VUVOQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9jbGVhclBhZ2UuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2NvbnRhY3RQYWdlLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9ob21lUGFnZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21lbnVQYWdlLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBjbGVhclBhZ2UoKSB7XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xlYXJQYWdlOyIsImZ1bmN0aW9uIGNvbnRhY3RQYWdlKCkge1xuXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbnRhY3RQYWdlOyIsImltcG9ydCB7IGNvbnRlbnQgfSBmcm9tICcuL2luZGV4JztcblxuZnVuY3Rpb24gaG9tZVBhZ2UoKSB7XG5cbiAgICBjb25zdCBob21lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgXG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgIHRpdGxlLnRleHRDb250ZW50ID0gJ1RoZSBMb3ctQ2FyYiBSZXN0YXVyYW50JztcbiAgICB0aXRsZS5jbGFzc0xpc3QudG9nZ2xlKCd0aXRsZScpO1xuICAgIGhvbWUuYXBwZW5kQ2hpbGQodGl0bGUpO1xuXG4gICAgY29uc3QgaW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBpbWFnZS5zcmMgPSAnLi4vc3JjL2ltYWdlcy9pbWFnZS5qcGcnO1xuICAgIGltYWdlLmFsdCA9ICdUaGUgUENPUyBQbGFuJztcbiAgICBpbWFnZS5jbGFzc0xpc3QudG9nZ2xlKCdpbWFnZScpO1xuICAgIGhvbWUuYXBwZW5kQ2hpbGQoaW1hZ2UpO1xuXG4gICAgY29uc3QgaGVhZGxpbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgaGVhZGxpbmUudGV4dENvbnRlbnQgPSAnUHJldmVudCBhbmQgUmV2ZXJzZSBQb2x5Y3lzdGljIE92YXJ5IFN5bmRyb21lICdcbiAgICArICd0aHJvdWdoIERpZXQgYW5kIEZhc3RpbmcnO1xuICAgIGhlYWRsaW5lLmNsYXNzTGlzdC50b2dnbGUoJ2hlYWRsaW5lJyk7XG4gICAgaG9tZS5hcHBlbmRDaGlsZChoZWFkbGluZSk7XG5cbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGhvbWUpO1xuXG59XG5cbmV4cG9ydCBkZWZhdWx0IGhvbWVQYWdlOyIsImltcG9ydCBob21lUGFnZSBmcm9tIFwiLi9ob21lUGFnZVwiO1xuaW1wb3J0IG1lbnVQYWdlIGZyb20gXCIuL21lbnVQYWdlXCI7XG5pbXBvcnQgY29udGFjdFBhZ2UgZnJvbSBcIi4vY29udGFjdFBhZ2VcIjtcbmltcG9ydCBjbGVhclBhZ2UgZnJvbSBcIi4vY2xlYXJQYWdlXCI7XG5cbmNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpO1xuXG5mdW5jdGlvbiBjcmVhdGVCdG4oYnV0dG9uKSB7XG4gICAgbGV0IGJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGJ0bi50ZXh0Q29udGVudCA9IGJ1dHRvbjtcbiAgICBsZXQgbG93ZXJDYXNlID0gYnV0dG9uLnRvTG93ZXJDYXNlKCk7XG4gICAgYnRuLmNsYXNzTGlzdC50b2dnbGUoYCR7bG93ZXJDYXNlfUJ0bmApO1xuICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgY2xlYXJQYWdlKCk7XG4gICAgICAgIGAke2xvd2VyQ2FzZX1QYWdlYCgpO1xuICAgIH0pO1xufVxuXG5jb25zdCBob21lQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG5ob21lQnRuLnRleHRDb250ZW50ID0gJ0hvbWUnO1xuaG9tZUJ0bi5jbGFzc0xpc3QudG9nZ2xlKCdob21lQnRuJyk7XG5ob21lQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGNsZWFyUGFnZSgpO1xuICAgIGhvbWVQYWdlKCk7XG59KTtcbmNvbnRlbnQuYXBwZW5kQ2hpbGQoaG9tZUJ0bik7XG5cbmNvbnN0IG1lbnVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbm1lbnVCdG4udGV4dENvbnRlbnQgPSAnTWVudSc7XG5tZW51QnRuLmNsYXNzTGlzdC50b2dnbGUoJ21lbnVCdG4nKTtcbm1lbnVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgY2xlYXJQYWdlKCk7XG4gICAgbWVudVBhZ2UoKTtcbn0pO1xuY29udGVudC5hcHBlbmRDaGlsZChtZW51QnRuKTtcblxuY29uc3QgY29udGFjdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuY29udGFjdEJ0bi50ZXh0Q29udGVudCA9ICdDb250YWN0JztcbmNvbnRhY3RCdG4uY2xhc3NMaXN0LnRvZ2dsZSgnY29udGFjdEJ0bicpO1xuY29udGFjdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBjbGVhclBhZ2UoKTtcbiAgICBjb250YWN0UGFnZSgpO1xufSk7XG5jb250ZW50LmFwcGVuZENoaWxkKGNvbnRhY3RCdG4pO1xuXG5ob21lUGFnZSgpO1xuXG5leHBvcnQgeyBjb250ZW50IH07IiwiZnVuY3Rpb24gbWVudVBhZ2UoKSB7XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgbWVudVBhZ2U7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==