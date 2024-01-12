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

// const homeBtn = document.createElement('button');
// homeBtn.textContent = 'Home';
// homeBtn.classList.toggle('homeBtn');
// homeBtn.addEventListener('click', () => {
//     clearPage();
//     homePage();
// });
const homeBtn = createBtn('Home');
content.appendChild(homeBtn);

// const menuBtn = document.createElement('button');
// menuBtn.textContent = 'Menu';
// menuBtn.classList.toggle('menuBtn');
// menuBtn.addEventListener('click', () => {
//     clearPage();
//     menuPage();
// });
const menuBtn = createBtn('Menu');
content.appendChild(menuBtn);

// const contactBtn = document.createElement('button');
// contactBtn.textContent = 'Contact';
// contactBtn.classList.toggle('contactBtn');
// contactBtn.addEventListener('click', () => {
//     clearPage();
//     contactPage();
// });
const contactBtn = createBtn('Contact');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxTQUFTOzs7Ozs7Ozs7Ozs7OztBQ0p4QjtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsV0FBVzs7Ozs7Ozs7Ozs7Ozs7O0FDSlE7O0FBRWxDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBSSwyQ0FBTzs7QUFFWDs7QUFFQSxpRUFBZSxRQUFROzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzQlc7QUFDQTtBQUNNO0FBQ0o7O0FBRXBDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLGNBQWM7QUFDMUMsa0NBQWtDLGtEQUFTO0FBQzNDO0FBQ0Esc0NBQXNDLGlEQUFRO0FBQzlDLE1BQU07QUFDTixzQ0FBc0MsaURBQVE7QUFDOUMsTUFBTTtBQUNOLHNDQUFzQyxvREFBVztBQUNqRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7O0FBRUEscURBQVE7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyRFI7QUFDQTtBQUNBOztBQUVBLGlFQUFlLFFBQVE7Ozs7OztVQ0p2QjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7VUVOQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9jbGVhclBhZ2UuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2NvbnRhY3RQYWdlLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9ob21lUGFnZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21lbnVQYWdlLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBjbGVhclBhZ2UoKSB7XG4gICAgY29uc29sZS5sb2coJ0NsZWFyJyk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsZWFyUGFnZTsiLCJmdW5jdGlvbiBjb250YWN0UGFnZSgpIHtcbiAgICBjb25zb2xlLmxvZygnQ29udGFjdCcpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjb250YWN0UGFnZTsiLCJpbXBvcnQgeyBjb250ZW50IH0gZnJvbSAnLi9pbmRleCc7XG5cbmZ1bmN0aW9uIGhvbWVQYWdlKCkge1xuXG4gICAgY29uc3QgaG9tZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIFxuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgICB0aXRsZS50ZXh0Q29udGVudCA9ICdUaGUgTG93LUNhcmIgUmVzdGF1cmFudCc7XG4gICAgdGl0bGUuY2xhc3NMaXN0LnRvZ2dsZSgndGl0bGUnKTtcbiAgICBob21lLmFwcGVuZENoaWxkKHRpdGxlKTtcblxuICAgIGNvbnN0IGltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgaW1hZ2Uuc3JjID0gJy4uL3NyYy9pbWFnZXMvaW1hZ2UuanBnJztcbiAgICBpbWFnZS5hbHQgPSAnVGhlIFBDT1MgUGxhbic7XG4gICAgaW1hZ2UuY2xhc3NMaXN0LnRvZ2dsZSgnaW1hZ2UnKTtcbiAgICBob21lLmFwcGVuZENoaWxkKGltYWdlKTtcblxuICAgIGNvbnN0IGhlYWRsaW5lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGhlYWRsaW5lLnRleHRDb250ZW50ID0gJ1ByZXZlbnQgYW5kIFJldmVyc2UgUG9seWN5c3RpYyBPdmFyeSBTeW5kcm9tZSAnXG4gICAgKyAndGhyb3VnaCBEaWV0IGFuZCBGYXN0aW5nJztcbiAgICBoZWFkbGluZS5jbGFzc0xpc3QudG9nZ2xlKCdoZWFkbGluZScpO1xuICAgIGhvbWUuYXBwZW5kQ2hpbGQoaGVhZGxpbmUpO1xuXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChob21lKTtcblxufVxuXG5leHBvcnQgZGVmYXVsdCBob21lUGFnZTsiLCJpbXBvcnQgaG9tZVBhZ2UgZnJvbSBcIi4vaG9tZVBhZ2VcIjtcbmltcG9ydCBtZW51UGFnZSBmcm9tIFwiLi9tZW51UGFnZVwiO1xuaW1wb3J0IGNvbnRhY3RQYWdlIGZyb20gXCIuL2NvbnRhY3RQYWdlXCI7XG5pbXBvcnQgY2xlYXJQYWdlIGZyb20gXCIuL2NsZWFyUGFnZVwiO1xuXG5jb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKTtcblxuZnVuY3Rpb24gY3JlYXRlQnRuKG5hbWUpIHtcbiAgICBsZXQgYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgYnRuLnRleHRDb250ZW50ID0gbmFtZTtcbiAgICBsZXQgbG93ZXJDYXNlTmFtZSA9IG5hbWUudG9Mb3dlckNhc2UoKTtcbiAgICBidG4uY2xhc3NMaXN0LnRvZ2dsZShgJHtsb3dlckNhc2VOYW1lfUJ0bmApO1xuICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsZWFyUGFnZSk7XG4gICAgaWYgKG5hbWUgPT09ICdIb21lJykge1xuICAgICAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBob21lUGFnZSk7XG4gICAgfSBlbHNlIGlmIChuYW1lID09PSAnTWVudScpIHtcbiAgICAgICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgbWVudVBhZ2UpO1xuICAgIH0gZWxzZSBpZiAobmFtZSA9PT0gJ0NvbnRhY3QnKSB7XG4gICAgICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNvbnRhY3RQYWdlKTtcbiAgICB9XG4gICAgcmV0dXJuIGJ0bjtcbn1cblxuLy8gY29uc3QgaG9tZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuLy8gaG9tZUJ0bi50ZXh0Q29udGVudCA9ICdIb21lJztcbi8vIGhvbWVCdG4uY2xhc3NMaXN0LnRvZ2dsZSgnaG9tZUJ0bicpO1xuLy8gaG9tZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbi8vICAgICBjbGVhclBhZ2UoKTtcbi8vICAgICBob21lUGFnZSgpO1xuLy8gfSk7XG5jb25zdCBob21lQnRuID0gY3JlYXRlQnRuKCdIb21lJyk7XG5jb250ZW50LmFwcGVuZENoaWxkKGhvbWVCdG4pO1xuXG4vLyBjb25zdCBtZW51QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4vLyBtZW51QnRuLnRleHRDb250ZW50ID0gJ01lbnUnO1xuLy8gbWVudUJ0bi5jbGFzc0xpc3QudG9nZ2xlKCdtZW51QnRuJyk7XG4vLyBtZW51QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuLy8gICAgIGNsZWFyUGFnZSgpO1xuLy8gICAgIG1lbnVQYWdlKCk7XG4vLyB9KTtcbmNvbnN0IG1lbnVCdG4gPSBjcmVhdGVCdG4oJ01lbnUnKTtcbmNvbnRlbnQuYXBwZW5kQ2hpbGQobWVudUJ0bik7XG5cbi8vIGNvbnN0IGNvbnRhY3RCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbi8vIGNvbnRhY3RCdG4udGV4dENvbnRlbnQgPSAnQ29udGFjdCc7XG4vLyBjb250YWN0QnRuLmNsYXNzTGlzdC50b2dnbGUoJ2NvbnRhY3RCdG4nKTtcbi8vIGNvbnRhY3RCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4vLyAgICAgY2xlYXJQYWdlKCk7XG4vLyAgICAgY29udGFjdFBhZ2UoKTtcbi8vIH0pO1xuY29uc3QgY29udGFjdEJ0biA9IGNyZWF0ZUJ0bignQ29udGFjdCcpO1xuY29udGVudC5hcHBlbmRDaGlsZChjb250YWN0QnRuKTtcblxuaG9tZVBhZ2UoKTtcblxuZXhwb3J0IHsgY29udGVudCB9OyIsImZ1bmN0aW9uIG1lbnVQYWdlKCkge1xuICAgIGNvbnNvbGUubG9nKCdNZW51Jylcbn1cblxuZXhwb3J0IGRlZmF1bHQgbWVudVBhZ2U7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==