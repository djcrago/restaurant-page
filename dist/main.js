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
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ "./src/index.js");


function contactPage() {

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

/***/ "./src/createMenuItem.js":
/*!*******************************!*\
  !*** ./src/createMenuItem.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function createMenuItem(name, description) {

    const item = document.createElement('div');
    item.textContent = `${name}: ${description}`;
    item.classList.toggle('menuItem');

    return item;

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createMenuItem);

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
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ "./src/index.js");
/* harmony import */ var _createMenuItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createMenuItem */ "./src/createMenuItem.js");



function menuPage() {

    const menu = document.createElement('div');

    const title = document.createElement('h1');
    title.textContent = 'The Low-Carb Menu';
    title.classList.toggle('title');
    menu.appendChild(title);

    const itemOne = (0,_createMenuItem__WEBPACK_IMPORTED_MODULE_1__["default"])('name one', 'description one');
    const itemTwo = (0,_createMenuItem__WEBPACK_IMPORTED_MODULE_1__["default"])('name two', 'description two');
    const itemThree = (0,_createMenuItem__WEBPACK_IMPORTED_MODULE_1__["default"])('name three', 'description three');

    menu.appendChild(itemOne);
    menu.appendChild(itemTwo);
    menu.appendChild(itemThree);

    _index__WEBPACK_IMPORTED_MODULE_0__.content.appendChild(menu);
    
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBa0M7O0FBRWxDO0FBQ0EsSUFBSSwyQ0FBTztBQUNYO0FBQ0E7O0FBRUEsaUVBQWUsU0FBUzs7Ozs7Ozs7Ozs7Ozs7O0FDUFU7O0FBRWxDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBSSwyQ0FBTzs7QUFFWDs7QUFFQSxpRUFBZSxXQUFXOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzQlE7QUFDQTtBQUNNO0FBQ0o7O0FBRXBDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLGNBQWM7QUFDMUMsa0NBQWtDLGtEQUFTO0FBQzNDO0FBQ0Esc0NBQXNDLGlEQUFRO0FBQzlDLE1BQU07QUFDTixzQ0FBc0MsaURBQVE7QUFDOUMsTUFBTTtBQUNOLHNDQUFzQyxvREFBVztBQUNqRDtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsU0FBUzs7Ozs7Ozs7Ozs7Ozs7QUNyQnhCOztBQUVBO0FBQ0EsMEJBQTBCLEtBQUssSUFBSSxZQUFZO0FBQy9DOztBQUVBOztBQUVBOztBQUVBLGlFQUFlLGNBQWM7Ozs7Ozs7Ozs7Ozs7OztBQ1ZLOztBQUVsQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQUksMkNBQU87O0FBRVg7O0FBRUEsaUVBQWUsUUFBUTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzNCYTtBQUNGO0FBQ0E7QUFDTTtBQUNKOztBQUVwQztBQUNBOztBQUVBO0FBQ0E7O0FBRUEsZ0JBQWdCLHNEQUFTO0FBQ3pCOztBQUVBLGdCQUFnQixzREFBUztBQUN6Qjs7QUFFQSxtQkFBbUIsc0RBQVM7QUFDNUI7O0FBRUEscURBQVE7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3JCMEI7QUFDWTs7QUFFOUM7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsb0JBQW9CLDJEQUFjO0FBQ2xDLG9CQUFvQiwyREFBYztBQUNsQyxzQkFBc0IsMkRBQWM7O0FBRXBDO0FBQ0E7QUFDQTs7QUFFQSxJQUFJLDJDQUFPO0FBQ1g7QUFDQTs7QUFFQSxpRUFBZSxRQUFROzs7Ozs7VUN4QnZCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztVRU5BO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2NsZWFyUGFnZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvY29udGFjdFBhZ2UuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2NyZWF0ZUJ0bi5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvY3JlYXRlTWVudUl0ZW0uanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2hvbWVQYWdlLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbWVudVBhZ2UuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNvbnRlbnQgfSBmcm9tICcuL2luZGV4JztcblxuZnVuY3Rpb24gY2xlYXJQYWdlKCkge1xuICAgIGNvbnRlbnQuaW5uZXJIVE1MID0gJyc7XG4gICAgY29uc29sZS5sb2coJ0NsZWFyJyk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsZWFyUGFnZTsiLCJpbXBvcnQgeyBjb250ZW50IH0gZnJvbSAnLi9pbmRleCc7XG5cbmZ1bmN0aW9uIGNvbnRhY3RQYWdlKCkge1xuXG4gICAgY29uc3QgaG9tZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIFxuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgICB0aXRsZS50ZXh0Q29udGVudCA9ICdUaGUgTG93LUNhcmIgUmVzdGF1cmFudCc7XG4gICAgdGl0bGUuY2xhc3NMaXN0LnRvZ2dsZSgndGl0bGUnKTtcbiAgICBob21lLmFwcGVuZENoaWxkKHRpdGxlKTtcblxuICAgIGNvbnN0IGltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgaW1hZ2Uuc3JjID0gJy4uL3NyYy9pbWFnZXMvaW1hZ2UuanBnJztcbiAgICBpbWFnZS5hbHQgPSAnVGhlIFBDT1MgUGxhbic7XG4gICAgaW1hZ2UuY2xhc3NMaXN0LnRvZ2dsZSgnaW1hZ2UnKTtcbiAgICBob21lLmFwcGVuZENoaWxkKGltYWdlKTtcblxuICAgIGNvbnN0IGhlYWRsaW5lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGhlYWRsaW5lLnRleHRDb250ZW50ID0gJ1ByZXZlbnQgYW5kIFJldmVyc2UgUG9seWN5c3RpYyBPdmFyeSBTeW5kcm9tZSAnXG4gICAgKyAndGhyb3VnaCBEaWV0IGFuZCBGYXN0aW5nJztcbiAgICBoZWFkbGluZS5jbGFzc0xpc3QudG9nZ2xlKCdoZWFkbGluZScpO1xuICAgIGhvbWUuYXBwZW5kQ2hpbGQoaGVhZGxpbmUpO1xuXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChob21lKTtcblxufVxuXG5leHBvcnQgZGVmYXVsdCBjb250YWN0UGFnZTsiLCJpbXBvcnQgaG9tZVBhZ2UgZnJvbSBcIi4vaG9tZVBhZ2VcIjtcbmltcG9ydCBtZW51UGFnZSBmcm9tIFwiLi9tZW51UGFnZVwiO1xuaW1wb3J0IGNvbnRhY3RQYWdlIGZyb20gXCIuL2NvbnRhY3RQYWdlXCI7XG5pbXBvcnQgY2xlYXJQYWdlIGZyb20gXCIuL2NsZWFyUGFnZVwiO1xuXG5mdW5jdGlvbiBjcmVhdGVCdG4obmFtZSkge1xuICAgIGxldCBidG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBidG4udGV4dENvbnRlbnQgPSBuYW1lO1xuICAgIGxldCBsb3dlckNhc2VOYW1lID0gbmFtZS50b0xvd2VyQ2FzZSgpO1xuICAgIGJ0bi5jbGFzc0xpc3QudG9nZ2xlKGAke2xvd2VyQ2FzZU5hbWV9QnRuYCk7XG4gICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xlYXJQYWdlKTtcbiAgICBpZiAobmFtZSA9PT0gJ0hvbWUnKSB7XG4gICAgICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhvbWVQYWdlKTtcbiAgICB9IGVsc2UgaWYgKG5hbWUgPT09ICdNZW51Jykge1xuICAgICAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBtZW51UGFnZSk7XG4gICAgfSBlbHNlIGlmIChuYW1lID09PSAnQ29udGFjdCcpIHtcbiAgICAgICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY29udGFjdFBhZ2UpO1xuICAgIH1cbiAgICByZXR1cm4gYnRuO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVCdG47IiwiZnVuY3Rpb24gY3JlYXRlTWVudUl0ZW0obmFtZSwgZGVzY3JpcHRpb24pIHtcblxuICAgIGNvbnN0IGl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBpdGVtLnRleHRDb250ZW50ID0gYCR7bmFtZX06ICR7ZGVzY3JpcHRpb259YDtcbiAgICBpdGVtLmNsYXNzTGlzdC50b2dnbGUoJ21lbnVJdGVtJyk7XG5cbiAgICByZXR1cm4gaXRlbTtcblxufVxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVNZW51SXRlbTsiLCJpbXBvcnQgeyBjb250ZW50IH0gZnJvbSAnLi9pbmRleCc7XG5cbmZ1bmN0aW9uIGhvbWVQYWdlKCkge1xuXG4gICAgY29uc3QgaG9tZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIFxuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgICB0aXRsZS50ZXh0Q29udGVudCA9ICdUaGUgTG93LUNhcmIgUmVzdGF1cmFudCc7XG4gICAgdGl0bGUuY2xhc3NMaXN0LnRvZ2dsZSgndGl0bGUnKTtcbiAgICBob21lLmFwcGVuZENoaWxkKHRpdGxlKTtcblxuICAgIGNvbnN0IGltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgaW1hZ2Uuc3JjID0gJy4uL3NyYy9pbWFnZXMvaW1hZ2UuanBnJztcbiAgICBpbWFnZS5hbHQgPSAnVGhlIFBDT1MgUGxhbic7XG4gICAgaW1hZ2UuY2xhc3NMaXN0LnRvZ2dsZSgnaW1hZ2UnKTtcbiAgICBob21lLmFwcGVuZENoaWxkKGltYWdlKTtcblxuICAgIGNvbnN0IGhlYWRsaW5lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGhlYWRsaW5lLnRleHRDb250ZW50ID0gJ1ByZXZlbnQgYW5kIFJldmVyc2UgUG9seWN5c3RpYyBPdmFyeSBTeW5kcm9tZSAnXG4gICAgKyAndGhyb3VnaCBEaWV0IGFuZCBGYXN0aW5nJztcbiAgICBoZWFkbGluZS5jbGFzc0xpc3QudG9nZ2xlKCdoZWFkbGluZScpO1xuICAgIGhvbWUuYXBwZW5kQ2hpbGQoaGVhZGxpbmUpO1xuXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChob21lKTtcblxufVxuXG5leHBvcnQgZGVmYXVsdCBob21lUGFnZTsiLCJpbXBvcnQgY3JlYXRlQnRuIGZyb20gXCIuL2NyZWF0ZUJ0blwiO1xuaW1wb3J0IGhvbWVQYWdlIGZyb20gXCIuL2hvbWVQYWdlXCI7XG5pbXBvcnQgbWVudVBhZ2UgZnJvbSBcIi4vbWVudVBhZ2VcIjtcbmltcG9ydCBjb250YWN0UGFnZSBmcm9tIFwiLi9jb250YWN0UGFnZVwiO1xuaW1wb3J0IGNsZWFyUGFnZSBmcm9tIFwiLi9jbGVhclBhZ2VcIjtcblxuY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcbmNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpO1xuXG5jb25zdCBidXR0b25zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5ib2R5Lmluc2VydEJlZm9yZShidXR0b25zLCBjb250ZW50KTtcblxuY29uc3QgaG9tZUJ0biA9IGNyZWF0ZUJ0bignSG9tZScpO1xuYnV0dG9ucy5hcHBlbmRDaGlsZChob21lQnRuKTtcblxuY29uc3QgbWVudUJ0biA9IGNyZWF0ZUJ0bignTWVudScpO1xuYnV0dG9ucy5hcHBlbmRDaGlsZChtZW51QnRuKTtcblxuY29uc3QgY29udGFjdEJ0biA9IGNyZWF0ZUJ0bignQ29udGFjdCcpO1xuYnV0dG9ucy5hcHBlbmRDaGlsZChjb250YWN0QnRuKTtcblxuaG9tZVBhZ2UoKTtcblxuZXhwb3J0IHsgY29udGVudCB9OyIsImltcG9ydCB7IGNvbnRlbnQgfSBmcm9tICcuL2luZGV4JztcbmltcG9ydCBjcmVhdGVNZW51SXRlbSBmcm9tICcuL2NyZWF0ZU1lbnVJdGVtJztcblxuZnVuY3Rpb24gbWVudVBhZ2UoKSB7XG5cbiAgICBjb25zdCBtZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgdGl0bGUudGV4dENvbnRlbnQgPSAnVGhlIExvdy1DYXJiIE1lbnUnO1xuICAgIHRpdGxlLmNsYXNzTGlzdC50b2dnbGUoJ3RpdGxlJyk7XG4gICAgbWVudS5hcHBlbmRDaGlsZCh0aXRsZSk7XG5cbiAgICBjb25zdCBpdGVtT25lID0gY3JlYXRlTWVudUl0ZW0oJ25hbWUgb25lJywgJ2Rlc2NyaXB0aW9uIG9uZScpO1xuICAgIGNvbnN0IGl0ZW1Ud28gPSBjcmVhdGVNZW51SXRlbSgnbmFtZSB0d28nLCAnZGVzY3JpcHRpb24gdHdvJyk7XG4gICAgY29uc3QgaXRlbVRocmVlID0gY3JlYXRlTWVudUl0ZW0oJ25hbWUgdGhyZWUnLCAnZGVzY3JpcHRpb24gdGhyZWUnKTtcblxuICAgIG1lbnUuYXBwZW5kQ2hpbGQoaXRlbU9uZSk7XG4gICAgbWVudS5hcHBlbmRDaGlsZChpdGVtVHdvKTtcbiAgICBtZW51LmFwcGVuZENoaWxkKGl0ZW1UaHJlZSk7XG5cbiAgICBjb250ZW50LmFwcGVuZENoaWxkKG1lbnUpO1xuICAgIFxufVxuXG5leHBvcnQgZGVmYXVsdCBtZW51UGFnZTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9