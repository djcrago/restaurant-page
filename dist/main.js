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
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ "./src/index.js");


function clearPage() {
    _index__WEBPACK_IMPORTED_MODULE_0__.content.innerHTML = '';
    console.log('Clear');
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
    console.log('Contact');
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (contactPage);

/***/ }),

/***/ "./src/createBtn.js":
/*!**************************!*\
  !*** ./src/createBtn.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _homePage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./homePage */ "./src/homePage.js");
/* harmony import */ var _menuPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menuPage */ "./src/menuPage.js");
/* harmony import */ var _contactPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contactPage */ "./src/contactPage.js");
/* harmony import */ var _clearPage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./clearPage */ "./src/clearPage.js");





function createBtn(name) {
    let btn = document.createElement('button');
    btn.textContent = name;
    let lowerCaseName = name.toLowerCase();
    btn.classList.toggle(`${lowerCaseName}Btn`);
    btn.addEventListener('click', _clearPage__WEBPACK_IMPORTED_MODULE_3__["default"]);
    if (name === 'Home') {
        btn.addEventListener('click', _homePage__WEBPACK_IMPORTED_MODULE_0__["default"]);
    } else if (name === 'Menu') {
        btn.addEventListener('click', _menuPage__WEBPACK_IMPORTED_MODULE_1__["default"]);
    } else if (name === 'Contact') {
        btn.addEventListener('click', _contactPage__WEBPACK_IMPORTED_MODULE_2__["default"]);
    }
    return btn;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createBtn);

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
/* harmony import */ var _createBtn__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createBtn */ "./src/createBtn.js");
/* harmony import */ var _homePage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./homePage */ "./src/homePage.js");
/* harmony import */ var _menuPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menuPage */ "./src/menuPage.js");
/* harmony import */ var _contactPage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contactPage */ "./src/contactPage.js");
/* harmony import */ var _clearPage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./clearPage */ "./src/clearPage.js");






const body = document.querySelector('body');
const content = document.querySelector('#content');

const buttons = document.createElement('div');
body.insertBefore(buttons, content);

const homeBtn = (0,_createBtn__WEBPACK_IMPORTED_MODULE_0__["default"])('Home');
buttons.appendChild(homeBtn);

const menuBtn = (0,_createBtn__WEBPACK_IMPORTED_MODULE_0__["default"])('Menu');
buttons.appendChild(menuBtn);

const contactBtn = (0,_createBtn__WEBPACK_IMPORTED_MODULE_0__["default"])('Contact');
buttons.appendChild(contactBtn);

(0,_homePage__WEBPACK_IMPORTED_MODULE_1__["default"])();



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
    console.log('Menu')
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBa0M7O0FBRWxDO0FBQ0EsSUFBSSwyQ0FBTztBQUNYO0FBQ0E7O0FBRUEsaUVBQWUsU0FBUzs7Ozs7Ozs7Ozs7Ozs7QUNQeEI7QUFDQTtBQUNBOztBQUVBLGlFQUFlLFdBQVc7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0pRO0FBQ0E7QUFDTTtBQUNKOztBQUVwQztBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixjQUFjO0FBQzFDLGtDQUFrQyxrREFBUztBQUMzQztBQUNBLHNDQUFzQyxpREFBUTtBQUM5QyxNQUFNO0FBQ04sc0NBQXNDLGlEQUFRO0FBQzlDLE1BQU07QUFDTixzQ0FBc0Msb0RBQVc7QUFDakQ7QUFDQTtBQUNBOztBQUVBLGlFQUFlLFNBQVM7Ozs7Ozs7Ozs7Ozs7OztBQ3JCVTs7QUFFbEM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFJLDJDQUFPOztBQUVYOztBQUVBLGlFQUFlLFFBQVE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzQmE7QUFDRjtBQUNBO0FBQ007QUFDSjs7QUFFcEM7QUFDQTs7QUFFQTtBQUNBOztBQUVBLGdCQUFnQixzREFBUztBQUN6Qjs7QUFFQSxnQkFBZ0Isc0RBQVM7QUFDekI7O0FBRUEsbUJBQW1CLHNEQUFTO0FBQzVCOztBQUVBLHFEQUFROzs7Ozs7Ozs7Ozs7Ozs7O0FDckJSO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxRQUFROzs7Ozs7VUNKdkI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1VFTkE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvY2xlYXJQYWdlLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9jb250YWN0UGFnZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvY3JlYXRlQnRuLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9ob21lUGFnZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21lbnVQYWdlLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjb250ZW50IH0gZnJvbSAnLi9pbmRleCc7XG5cbmZ1bmN0aW9uIGNsZWFyUGFnZSgpIHtcbiAgICBjb250ZW50LmlubmVySFRNTCA9ICcnO1xuICAgIGNvbnNvbGUubG9nKCdDbGVhcicpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjbGVhclBhZ2U7IiwiZnVuY3Rpb24gY29udGFjdFBhZ2UoKSB7XG4gICAgY29uc29sZS5sb2coJ0NvbnRhY3QnKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY29udGFjdFBhZ2U7IiwiaW1wb3J0IGhvbWVQYWdlIGZyb20gXCIuL2hvbWVQYWdlXCI7XG5pbXBvcnQgbWVudVBhZ2UgZnJvbSBcIi4vbWVudVBhZ2VcIjtcbmltcG9ydCBjb250YWN0UGFnZSBmcm9tIFwiLi9jb250YWN0UGFnZVwiO1xuaW1wb3J0IGNsZWFyUGFnZSBmcm9tIFwiLi9jbGVhclBhZ2VcIjtcblxuZnVuY3Rpb24gY3JlYXRlQnRuKG5hbWUpIHtcbiAgICBsZXQgYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgYnRuLnRleHRDb250ZW50ID0gbmFtZTtcbiAgICBsZXQgbG93ZXJDYXNlTmFtZSA9IG5hbWUudG9Mb3dlckNhc2UoKTtcbiAgICBidG4uY2xhc3NMaXN0LnRvZ2dsZShgJHtsb3dlckNhc2VOYW1lfUJ0bmApO1xuICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsZWFyUGFnZSk7XG4gICAgaWYgKG5hbWUgPT09ICdIb21lJykge1xuICAgICAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBob21lUGFnZSk7XG4gICAgfSBlbHNlIGlmIChuYW1lID09PSAnTWVudScpIHtcbiAgICAgICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgbWVudVBhZ2UpO1xuICAgIH0gZWxzZSBpZiAobmFtZSA9PT0gJ0NvbnRhY3QnKSB7XG4gICAgICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNvbnRhY3RQYWdlKTtcbiAgICB9XG4gICAgcmV0dXJuIGJ0bjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlQnRuOyIsImltcG9ydCB7IGNvbnRlbnQgfSBmcm9tICcuL2luZGV4JztcblxuZnVuY3Rpb24gaG9tZVBhZ2UoKSB7XG5cbiAgICBjb25zdCBob21lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgXG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgIHRpdGxlLnRleHRDb250ZW50ID0gJ1RoZSBMb3ctQ2FyYiBSZXN0YXVyYW50JztcbiAgICB0aXRsZS5jbGFzc0xpc3QudG9nZ2xlKCd0aXRsZScpO1xuICAgIGhvbWUuYXBwZW5kQ2hpbGQodGl0bGUpO1xuXG4gICAgY29uc3QgaW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBpbWFnZS5zcmMgPSAnLi4vc3JjL2ltYWdlcy9pbWFnZS5qcGcnO1xuICAgIGltYWdlLmFsdCA9ICdUaGUgUENPUyBQbGFuJztcbiAgICBpbWFnZS5jbGFzc0xpc3QudG9nZ2xlKCdpbWFnZScpO1xuICAgIGhvbWUuYXBwZW5kQ2hpbGQoaW1hZ2UpO1xuXG4gICAgY29uc3QgaGVhZGxpbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgaGVhZGxpbmUudGV4dENvbnRlbnQgPSAnUHJldmVudCBhbmQgUmV2ZXJzZSBQb2x5Y3lzdGljIE92YXJ5IFN5bmRyb21lICdcbiAgICArICd0aHJvdWdoIERpZXQgYW5kIEZhc3RpbmcnO1xuICAgIGhlYWRsaW5lLmNsYXNzTGlzdC50b2dnbGUoJ2hlYWRsaW5lJyk7XG4gICAgaG9tZS5hcHBlbmRDaGlsZChoZWFkbGluZSk7XG5cbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGhvbWUpO1xuXG59XG5cbmV4cG9ydCBkZWZhdWx0IGhvbWVQYWdlOyIsImltcG9ydCBjcmVhdGVCdG4gZnJvbSBcIi4vY3JlYXRlQnRuXCI7XG5pbXBvcnQgaG9tZVBhZ2UgZnJvbSBcIi4vaG9tZVBhZ2VcIjtcbmltcG9ydCBtZW51UGFnZSBmcm9tIFwiLi9tZW51UGFnZVwiO1xuaW1wb3J0IGNvbnRhY3RQYWdlIGZyb20gXCIuL2NvbnRhY3RQYWdlXCI7XG5pbXBvcnQgY2xlYXJQYWdlIGZyb20gXCIuL2NsZWFyUGFnZVwiO1xuXG5jb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xuY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50Jyk7XG5cbmNvbnN0IGJ1dHRvbnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbmJvZHkuaW5zZXJ0QmVmb3JlKGJ1dHRvbnMsIGNvbnRlbnQpO1xuXG5jb25zdCBob21lQnRuID0gY3JlYXRlQnRuKCdIb21lJyk7XG5idXR0b25zLmFwcGVuZENoaWxkKGhvbWVCdG4pO1xuXG5jb25zdCBtZW51QnRuID0gY3JlYXRlQnRuKCdNZW51Jyk7XG5idXR0b25zLmFwcGVuZENoaWxkKG1lbnVCdG4pO1xuXG5jb25zdCBjb250YWN0QnRuID0gY3JlYXRlQnRuKCdDb250YWN0Jyk7XG5idXR0b25zLmFwcGVuZENoaWxkKGNvbnRhY3RCdG4pO1xuXG5ob21lUGFnZSgpO1xuXG5leHBvcnQgeyBjb250ZW50IH07IiwiZnVuY3Rpb24gbWVudVBhZ2UoKSB7XG4gICAgY29uc29sZS5sb2coJ01lbnUnKVxufVxuXG5leHBvcnQgZGVmYXVsdCBtZW51UGFnZTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9