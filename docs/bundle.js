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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_nav__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/nav */ \"./src/modules/nav.js\");\n/* harmony import */ var _modules_typewriter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/typewriter */ \"./src/modules/typewriter.js\");\n /* >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>*/\n/* >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> NAV FUNCTIONALITY >>>>>><<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<*/\n/* <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<>><<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<*/\n\n// JQUERY CONSTANTS\n\nconst $nav = $('nav');\nconst $nav_button = $('.nav_button');     //* colection of button with class=\"nav_button\"\nconst $div_tab = $('.div_tab');   // *collection of divs with class=\"div_tab\nconst $hamburger = $('.hamburger') // ! collection of buttons with class=\"hamburger\", should I leave a unique hamburger button\nconst $exit_menu = $('#exit_menu') \n\n\n;\n\nwindow.onload = (0,_modules_nav__WEBPACK_IMPORTED_MODULE_0__.setSuitableNav)();\n\n$(window).on('resize', () => {(0,_modules_nav__WEBPACK_IMPORTED_MODULE_0__.resizeNav)()});\n\n$hamburger.click( () => {\n    (0,_modules_nav__WEBPACK_IMPORTED_MODULE_0__.hamburgerFunctionality)()});\n\n$exit_menu.click(() => {\n    (0,_modules_nav__WEBPACK_IMPORTED_MODULE_0__.exit_menuFunctionality)()});\n\n$nav_button.not($exit_menu).click((e) => {\n    (0,_modules_nav__WEBPACK_IMPORTED_MODULE_0__.nav_buttonsFunctionality)(e)});\n\n\n\n\n\n/* >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>*/\n/* >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> NAV FUNCTIONALITY >>>>>><<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<*/\n/* <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<>><<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<*/\n\n\n// * INDEX.JS\n\nlet mouseCursor = document.querySelector(\"#cursor\");\nlet index = document.querySelector(\"#index\");\n\nwindow.addEventListener(\"mousemove\", cursor);\n\n\nfunction cursor (e){\n    mouseCursor.style.top = e.pageY + \"px\";\n    mouseCursor.style.left = e.pageX + \"px\";\n}\n\n\nindex.addEventListener(\"mouseover\", () => {mouseCursor.classList.add('cursor_index')});\n    \nindex.addEventListener(\"mouseleave\", () => {mouseCursor.classList.remove('cursor_index')});\n\n\n// * CONTACT_ME.JS\n\n\n//Movement Animation to happen\nconst cards = document.querySelectorAll('.contact_card');\nconst circle_backgroun = document.querySelector('.circle_background');\nconst title = document.querySelector('.title');\nconst contact_logo = document.querySelector('.contact_logo img');\n\n// Moving Animation Event\n// card.addEventListener('mouseover', (e) => {\n//   let xAxis = (window.innerWidth / 2 - e.pageX) / 25;\n//   let yAxis = (window.innerHeight / 2 - e.pageY) / 25;\n//   card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;\n// });\n\n\n// Animate In\ncards.forEach(card => {\n    card.addEventListener(\"mouseenter\", (e) => {\n        // card.style.transform = `rotateY(25deg) rotateX(25deg)`;\n        // //Pop out\n        // title.style.transform = \"translateZ(150px)\";\n        contact_logo.style.transform = \"translateZ(200px) rotateZ( -45deg)\";\n    });\n});\n\n\ncards.forEach(card => {\n    card.addEventListener(\"mouseleave\", (e) => {\n        // card.style.transition = \"all 0.5a ease\";\n        // card.style.transform = `rotateY(0deg) rotateX(0deg)`;\n        // //Pop back\n        // title.style.transform = \"translateZ(0px)\";\n        contact_logo.style.transform = \"translateZ(0px) rotateZ( 0deg)\";\n    });\n});\n\n\n//Animate Out\n// card.addEventListener('mouseleave', (e) => {\n//   card.style.transition = \"all 0.5a ease\";\n//   card.style.transform = `rotateY(0deg) rotateX(0deg)`;\n//   //Pop back\n//   title.style.transform = \"translateZ(0px)\";\n//   contact_logo.style.transform = \"translateZ(0px) rotateZ( 0deg)\";\n// });\n\n//  * PROJECTS.JS\n\nconst $moreInfo= $('.moreInfo');\nconst $lessInfo = $('.lessInfo');\nconst $github_repo = $('.github_repo');\nconst $description = $('.description');\nconst $fingerTouch = $('.fingerTouch');\nconst $project_entry = $('.project_entry');\n\nconst project_entry = document.querySelector('.project_entry');\n\n\n\n\n\n\n// * _-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_- more info button functionaliy-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_- \n$moreInfo.click(function(){\n    $(this).addClass('hidden');\n    if( $project_entry.find('.columnLeft').length === 0 ){ \n        console.log($(this).parent().find('.extraInfo'));               // check if has to go one or two levels up to target the parent\n        $(this).parent().find('.extraInfo').removeClass('hidden');    \n    } else { \n        $(this).parent().parent().find('.extraInfo').removeClass('hidden');\n        $(this).parent().parent().addClass('expand_extra_info');\n    }\n   \n});\n\n\n// * _-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_- less info button functionaliy-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_- \n$lessInfo.click(function(){\n    $(this).siblings('.moreInfo').removeClass('hidden');\n    if( $project_entry.find('.columnLeft').length === 0 ){            // check if has to go one or two levels up to target the parent\n        $(this).parent().find('.extraInfo').addClass('hidden');    \n    } else { \n        $(this).parent().parent().find('.extraInfo').addClass('hidden');\n        $(this).parent().parent().removeClass('expand_extra_info');\n    }\n});\n\n\n// * on loading and resize check the viewport orientation and if it is landscape show Extra information in the project card._-_-_-_-_-_-_-_-_-_-_-_-_-_\n\n$(window).on('load resize' , function() {       \n    if  (($(window).width() < $(window).height() && $(window).width() < 700 )\n    || ($(window).width() > $(window).height() && $(window).width() < 860 ))\n    {   \n                $moreInfo.removeClass('hidden');\n                $description.addClass('hidden');\n                $github_repo.addClass('hidden');\n                \n    } else {\n                $moreInfo.addClass('hidden');\n                $description.removeClass('hidden');\n                $github_repo.removeClass('hidden');\n    }\n});\n\n// * on loading and resize \n// * if the screen if big enough:\n// * check if there is not any .columnLeft and then \n// * add two .columnLeft divs to project_entry div and insert .columnLeft_element to .columnLeft div\n// * otherwise detach .columnLeft_element from .columnLeft and remove .columnLeft.\n\n// * otherwise detach .columnLeft_element from .columnLeft and remove .columnLeft\n\n$(window).on('load resize' , function() {       \n    if ( $(window).width() >= 700 || ($(window).width() > $(window).height()) ) {\n        if( $project_entry.find('.columnLeft').length === 0 ){\n            $project_entry.prepend('<div class=\"columnLeft\"></div>','<div class=\"columnRight\"></div>');\n            $project_entry.each(function(index) {\n                $(this).children().filter('.columnLeft').prepend($(this).children().filter('.columnLeft_element'));\n                $(this).children().filter('.columnRight').prepend($(this).children().filter('.columnRight_element'));\n            });\n        } \n    }\n    else {\n        if($project_entry.find('.columnLeft').length !== 0){\n            $('.columnLeft_element').unwrap();\n            $('.columnRight_element').unwrap();\n        }\n    }\n});\n\n\n// * on loading and resize check whether the device is touchable adding or removing the fingerTouch icon._-_-_-_-_-_-_-_-_-_-_-_-_-_\nfunction isTouchDevice(Device) {\n    return (('ontouchstart' in window) ||\n       (navigator.maxTouchPoints > 0) ||\n       (navigator.msMaxTouchPoints > 0));\n  }\n\n  $(window).on('load resize' , function() {       \n    if( isTouchDevice($(window))) { $fingerTouch.removeClass('hidden')} \n    else {$fingerTouch.addClass('hidden')}\n});\n\n// * TYPEWRITER.JS \n\n\n\nwindow.onload = (0,_modules_typewriter__WEBPACK_IMPORTED_MODULE_1__.typewritePlaying)();\n\n\n\n//# sourceURL=webpack://portfolio/./src/index.js?");

/***/ }),

/***/ "./src/modules/nav.js":
/*!****************************!*\
  !*** ./src/modules/nav.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"setSuitableNav\": () => (/* binding */ setSuitableNav),\n/* harmony export */   \"resizeNav\": () => (/* binding */ resizeNav),\n/* harmony export */   \"hamburgerFunctionality\": () => (/* binding */ hamburgerFunctionality),\n/* harmony export */   \"exit_menuFunctionality\": () => (/* binding */ exit_menuFunctionality),\n/* harmony export */   \"nav_buttonsFunctionality\": () => (/* binding */ nav_buttonsFunctionality)\n/* harmony export */ });\n\n\nconst $nav = $('nav');\nconst $nav_button = $('.nav_button');     //* colection of button with class=\"nav_button\"\nconst $div_tab = $('.div_tab');   // *collection of divs with class=\"div_tab\nconst $hamburger = $('.hamburger') // ! collection of buttons with class=\"hamburger\", should I leave a unique hamburger button\nconst $exit_menu = $('#exit_menu') \n\nlet WidthGreaterThan1000 = $(window).width() > 1000;\n\nfunction setSuitableNav() {          //on loading set the nav with the class hidden or grid depending on the window viewport width\n    if ($(window).width() >= 1000) {\n        setTabFitting()\n        $nav.removeClass('hidden').addClass('nav_landscape');\n        $hamburger.addClass('hidden');\n    } \n}\n\nfunction resizeNav(){\n        if ( !WidthGreaterThan1000 && $(window).width() > 1000){\n            $nav.addClass('nav_landscape').removeClass('hidden nav_portrait');\n            $hamburger.addClass('hidden');\n            $exit_menu.addClass('hidden');\n        } \n        if (WidthGreaterThan1000 && $(window).width() < 1000){\n            $nav.addClass('hidden').removeClass('nav_landscape');\n            $hamburger.removeClass('hidden');\n        }\n    \n        WidthGreaterThan1000 = $(window).width() > 1000;\n}\n\nfunction hamburgerFunctionality(){\n    $(this).addClass('hidden');\n    $exit_menu.removeClass('hidden');\n    $('nav').removeClass('hidden').addClass('nav_portrait');\n}\n\nfunction exit_menuFunctionality(){\n    $(this).addClass('hidden');\n    $('nav').removeClass('nav_portrait').addClass('hidden');\n    $('.hamburger').removeClass('hidden');\n}\n\n\nfunction setTabFitting(){\n    let currentTab = $div_tab.not('.hidden');\n    if(($(window).height() * 1.2) < $(document).height()) {               // I multiply the window height by 1.2 as I still want to set\n        currentTab.addClass('alignself');                             // the tab fitting in the screen to the following\n    } else {currentTab.addClass('height100');}\n}\n\nfunction nav_buttonsFunctionality(e){\n    if($nav.hasClass('nav_portrait')){\n        $nav.addClass('hidden').removeClass('nav_portrait');// * Check if nav has class nav_portrait and it hides it.\n    }  \n    $div_tab.not('.hidden').addClass('hidden').removeClass('height100 alignself'); // * hide the previous tab\n    $nav_button.filter('.hidden').not('#exit_menu').removeClass('hidden'); // * shows the previous button\n    let buttonID = e.target.id;\n    $(`#${buttonID}`).addClass('hidden'); // * Add class \"hidden\" to the currently selected button  \n    let tabID = buttonID.replace('_button', '');\n    $(`#${tabID}`).removeClass('hidden'); // * Remove class \"hidden\" to the currently selected tab \n    setTabFitting();\n}\n\n\n\n\n\n//# sourceURL=webpack://portfolio/./src/modules/nav.js?");

/***/ }),

/***/ "./src/modules/typewriter.js":
/*!***********************************!*\
  !*** ./src/modules/typewriter.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"typewritePlaying\": () => (/* binding */ typewritePlaying)\n/* harmony export */ });\n// * TYPEWRITER.JS \n\nvar TxtType = function(el, toRotate, period) {\n    this.toRotate = toRotate;\n    this.el = el;\n    this.loopNum = 0;\n    this.period = parseInt(period, 10) || 2000;\n    this.txt = '';\n    this.tick();\n    this.isDeleting = false;\n};\n\nTxtType.prototype.tick = function() {\n    var i = this.loopNum % this.toRotate.length;\n    var fullTxt = this.toRotate[i];\n\n    if (this.isDeleting) {\n    this.txt = fullTxt.substring(0, this.txt.length - 1);\n    } else {\n    this.txt = fullTxt.substring(0, this.txt.length + 1);\n    }\n\n    this.el.innerHTML = '<span class=\"wrap\">'+this.txt+'</span>';\n\n    var that = this;\n    var delta = 200 - Math.random() * 100;\n\n    if (this.isDeleting) { delta /= 2; }\n\n    if (!this.isDeleting && this.txt === fullTxt) {\n    delta = this.period;\n    this.isDeleting = true;\n    } else if (this.isDeleting && this.txt === '') {\n    this.isDeleting = false;\n    this.loopNum++;\n    delta = 500;\n    }\n\n    setTimeout(function() {\n    that.tick();\n    }, delta);\n};\n\nfunction typewritePlaying() {\n    var elements = document.getElementsByClassName('typewrite');\n    for (var i=0; i<elements.length; i++) {\n        var toRotate = elements[i].getAttribute('data-type');\n        var period = elements[i].getAttribute('data-period');\n        if (toRotate) {\n          new TxtType(elements[i], JSON.parse(toRotate), period);\n        }\n    }\n    // INJECT CSS\n    var css = document.createElement(\"style\");\n    css.type = \"text/css\";\n    css.innerHTML = \".typewrite > .wrap { border-right: 0.08em solid #fff}\";\n    document.body.appendChild(css);\n};\n\n\n\n//# sourceURL=webpack://portfolio/./src/modules/typewriter.js?");

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