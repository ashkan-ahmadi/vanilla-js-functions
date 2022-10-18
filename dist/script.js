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

/***/ "./functions/DOM/_DOM.js":
/*!*******************************!*\
  !*** ./functions/DOM/_DOM.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"$\": () => (/* reexport safe */ _other_js__WEBPACK_IMPORTED_MODULE_1__.$),\n/* harmony export */   \"$$\": () => (/* reexport safe */ _other_js__WEBPACK_IMPORTED_MODULE_1__.$$),\n/* harmony export */   \"addGlobalEventListener\": () => (/* reexport safe */ _other_js__WEBPACK_IMPORTED_MODULE_1__.addGlobalEventListener),\n/* harmony export */   \"copyTextToClipboard\": () => (/* reexport safe */ _copy_js__WEBPACK_IMPORTED_MODULE_0__.copyTextToClipboard),\n/* harmony export */   \"scrollToElementById\": () => (/* reexport safe */ _other_js__WEBPACK_IMPORTED_MODULE_1__.scrollToElementById),\n/* harmony export */   \"scrollToTopOfPage\": () => (/* reexport safe */ _other_js__WEBPACK_IMPORTED_MODULE_1__.scrollToTopOfPage)\n/* harmony export */ });\n/* harmony import */ var _copy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./copy.js */ \"./functions/DOM/copy.js\");\n/* harmony import */ var _other_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./other.js */ \"./functions/DOM/other.js\");\n\r\n\r\n\n\n//# sourceURL=webpack://vanilla-js-functions/./functions/DOM/_DOM.js?");

/***/ }),

/***/ "./functions/DOM/copy.js":
/*!*******************************!*\
  !*** ./functions/DOM/copy.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"copyTextToClipboard\": () => (/* binding */ copyTextToClipboard)\n/* harmony export */ });\nconst copyTextToClipboard = async text => {\r\n  /**\r\n   * Copy text to the clipboard\r\n   * You must use this function inside async function and await it\r\n   *\r\n   * @param {string} title - The text to be copied\r\n   * @return {undefined}\r\n   */\r\n\r\n  try {\r\n    return await navigator.clipboard.writeText(text)\r\n  } catch (error) {\r\n    console.error(`ERROR: copyTextToClipboard => ${error}`)\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://vanilla-js-functions/./functions/DOM/copy.js?");

/***/ }),

/***/ "./functions/DOM/other.js":
/*!********************************!*\
  !*** ./functions/DOM/other.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"$\": () => (/* binding */ $),\n/* harmony export */   \"$$\": () => (/* binding */ $$),\n/* harmony export */   \"addGlobalEventListener\": () => (/* binding */ addGlobalEventListener),\n/* harmony export */   \"scrollToElementById\": () => (/* binding */ scrollToElementById),\n/* harmony export */   \"scrollToTopOfPage\": () => (/* binding */ scrollToTopOfPage)\n/* harmony export */ });\nconst $ = target => document.querySelector(target)\r\n\r\nconst $$ = target => document.querySelectorAll(target)\r\n\r\nconst addGlobalEventListener = (type, selector, callback) => {\r\n  // https://www.youtube.com/watch?v=XF1_MlZ5l6M\r\n  document.addEventListener(type, e => {\r\n    if (e.target.matches(selector)) callback(e)\r\n  })\r\n}\r\n\r\nconst scrollToElementById = (id, options = {}) => {\r\n  //Finds y value of given object\r\n  //https://stackoverflow.com/a/11986374\r\n\r\n  /*\r\n   * Scrolls the page to an element based on its id\r\n   * @param id String the id of the element to scroll to\r\n   * @return undefined\r\n   */\r\n\r\n  const defaultOptions = {\r\n    topMargin: 10, // margin from the top of the viewport in pixels\r\n  }\r\n\r\n  const settings = { ...defaultOptions, ...options }\r\n\r\n  const { topMargin } = settings\r\n\r\n  const targetElement = document.getElementById(id)\r\n\r\n  if (!targetElement) throw new Error(`No element with id ${id} was found.`)\r\n\r\n  function findPos(obj) {\r\n    let curtop = 0\r\n    if (obj.offsetParent) {\r\n      do {\r\n        curtop += obj.offsetTop\r\n      } while ((obj = obj.offsetParent))\r\n      return [curtop] - topMargin\r\n    }\r\n  }\r\n\r\n  window.scroll(0, findPos(targetElement))\r\n}\r\n\r\nconst scrollToTopOfPage = () => {\r\n  window.scrollTo(0, 0)\r\n}\r\n\n\n//# sourceURL=webpack://vanilla-js-functions/./functions/DOM/other.js?");

/***/ }),

/***/ "./functions/array/_array.js":
/*!***********************************!*\
  !*** ./functions/array/_array.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"HasAllItems\": () => (/* reexport safe */ _has_js__WEBPACK_IMPORTED_MODULE_2__.HasAllItems),\n/* harmony export */   \"filterOutNegativeNumbers\": () => (/* reexport safe */ _filter_js__WEBPACK_IMPORTED_MODULE_0__.filterOutNegativeNumbers),\n/* harmony export */   \"getRandomItem\": () => (/* reexport safe */ _get_js__WEBPACK_IMPORTED_MODULE_1__.getRandomItem),\n/* harmony export */   \"hasItem\": () => (/* reexport safe */ _has_js__WEBPACK_IMPORTED_MODULE_2__.hasItem),\n/* harmony export */   \"isArray\": () => (/* reexport safe */ _is_js__WEBPACK_IMPORTED_MODULE_3__.isArray),\n/* harmony export */   \"removeDuplicates\": () => (/* reexport safe */ _remove_js__WEBPACK_IMPORTED_MODULE_5__.removeDuplicates),\n/* harmony export */   \"removeItemFromArray\": () => (/* reexport safe */ _remove_js__WEBPACK_IMPORTED_MODULE_5__.removeItemFromArray),\n/* harmony export */   \"removeNonNumberItems\": () => (/* reexport safe */ _remove_js__WEBPACK_IMPORTED_MODULE_5__.removeNonNumberItems),\n/* harmony export */   \"shuffleItems\": () => (/* reexport safe */ _shuffle_js__WEBPACK_IMPORTED_MODULE_4__.shuffleItems),\n/* harmony export */   \"shuffleNumbers\": () => (/* reexport safe */ _shuffle_js__WEBPACK_IMPORTED_MODULE_4__.shuffleNumbers),\n/* harmony export */   \"sortNumbers\": () => (/* reexport safe */ _sort_js__WEBPACK_IMPORTED_MODULE_6__.sortNumbers)\n/* harmony export */ });\n/* harmony import */ var _filter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./filter.js */ \"./functions/array/filter.js\");\n/* harmony import */ var _get_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./get.js */ \"./functions/array/get.js\");\n/* harmony import */ var _has_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./has.js */ \"./functions/array/has.js\");\n/* harmony import */ var _is_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./is.js */ \"./functions/array/is.js\");\n/* harmony import */ var _shuffle_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shuffle.js */ \"./functions/array/shuffle.js\");\n/* harmony import */ var _remove_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./remove.js */ \"./functions/array/remove.js\");\n/* harmony import */ var _sort_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sort.js */ \"./functions/array/sort.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://vanilla-js-functions/./functions/array/_array.js?");

/***/ }),

/***/ "./functions/array/filter.js":
/*!***********************************!*\
  !*** ./functions/array/filter.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"filterOutNegativeNumbers\": () => (/* binding */ filterOutNegativeNumbers)\n/* harmony export */ });\nconst filterOutNegativeNumbers = array => {\r\n  if (!Array.isArray(array)) throw new Error('Argument must be an array')\r\n  return array.filter(item => item >= 0)\r\n}\r\n\n\n//# sourceURL=webpack://vanilla-js-functions/./functions/array/filter.js?");

/***/ }),

/***/ "./functions/array/get.js":
/*!********************************!*\
  !*** ./functions/array/get.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getRandomItem\": () => (/* binding */ getRandomItem)\n/* harmony export */ });\nconst getRandomItem = array => {\r\n  if (!Array.isArray(array)) throw new Error('Argument must be an array')\r\n  return array[Math.floor(Math.random() * array.length)]\r\n}\r\n\n\n//# sourceURL=webpack://vanilla-js-functions/./functions/array/get.js?");

/***/ }),

/***/ "./functions/array/has.js":
/*!********************************!*\
  !*** ./functions/array/has.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"HasAllItems\": () => (/* binding */ HasAllItems),\n/* harmony export */   \"hasItem\": () => (/* binding */ hasItem)\n/* harmony export */ });\nconst hasItem = (item, array) => {\r\n  if (!Array.isArray(array)) throw new Error('Argument must be an array')\r\n\r\n  return array.includes(item)\r\n}\r\n\r\nconst HasAllItems = (subset, reference) => {\r\n  if (!Array.isArray(subset) || !Array.isArray(reference)) throw new Error('Argument must be an array')\r\n  if (subset.length > reference.length) throw new Error('The subset array is bigger than ')\r\n\r\n  for (let i = 0; i < subset.length; i++) {\r\n    const item = subset[i]\r\n    // return false is subset contains any item that doesn't exist in the reference array\r\n    if (!reference.includes(item)) return false\r\n  }\r\n\r\n  // return true if reference the items in the subset array are found in the reference array\r\n  return true\r\n}\r\n\n\n//# sourceURL=webpack://vanilla-js-functions/./functions/array/has.js?");

/***/ }),

/***/ "./functions/array/is.js":
/*!*******************************!*\
  !*** ./functions/array/is.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"isArray\": () => (/* binding */ isArray)\n/* harmony export */ });\nconst isArray = array => {\r\n  if (!Array.isArray(array)) throw new Error('Argument must be an array')\r\n  return Array.isArray(array)\r\n}\r\n\n\n//# sourceURL=webpack://vanilla-js-functions/./functions/array/is.js?");

/***/ }),

/***/ "./functions/array/remove.js":
/*!***********************************!*\
  !*** ./functions/array/remove.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"removeDuplicates\": () => (/* binding */ removeDuplicates),\n/* harmony export */   \"removeItemFromArray\": () => (/* binding */ removeItemFromArray),\n/* harmony export */   \"removeNonNumberItems\": () => (/* binding */ removeNonNumberItems)\n/* harmony export */ });\n/* harmony import */ var _math_is_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../math/is.js */ \"./functions/math/is.js\");\n\r\n\r\nconst removeDuplicates = array => {\r\n  if (!Array.isArray(array)) throw new Error('Argument must be an array')\r\n\r\n  return Array.from(new Set(array))\r\n}\r\n\r\nconst removeItemFromArray = (item, array, mutate = false) => {\r\n  if (!Array.isArray(array)) throw new Error('Argument must be an array')\r\n\r\n  const index = array.indexOf(item)\r\n\r\n  // if item not found in the array (-1), return false\r\n  if (index === -1) return false\r\n\r\n  if (mutate === true) {\r\n    // only splice array when item is found\r\n    array.splice(index, 1) // 2nd parameter means remove one item only\r\n    return array\r\n  }\r\n\r\n  return array.filter(ITEM => ITEM !== item)\r\n}\r\n\r\nconst removeNonNumberItems = array => {\r\n  if (!Array.isArray(array)) throw new Error('Argument must be an array')\r\n\r\n  return array.filter(item => (0,_math_is_js__WEBPACK_IMPORTED_MODULE_0__.isNumber)(item))\r\n}\r\n\n\n//# sourceURL=webpack://vanilla-js-functions/./functions/array/remove.js?");

/***/ }),

/***/ "./functions/array/shuffle.js":
/*!************************************!*\
  !*** ./functions/array/shuffle.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"shuffleItems\": () => (/* binding */ shuffleItems),\n/* harmony export */   \"shuffleNumbers\": () => (/* binding */ shuffleNumbers)\n/* harmony export */ });\n/* harmony import */ var _remove_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./remove.js */ \"./functions/array/remove.js\");\n\r\n\r\nconst shuffleItems = array => {\r\n  // The Fisher Yates Method: https://www.w3schools.com/js/js_array_sort.asp\r\n  if (!Array.isArray(array)) throw new Error('Argument must be an array')\r\n\r\n  const items = array\r\n\r\n  for (let i = items.length - 1; i > 0; i--) {\r\n    let j = Math.floor(Math.random() * (i + 1))\r\n    let k = items[i]\r\n    items[i] = items[j]\r\n    items[j] = k\r\n  }\r\n\r\n  return items\r\n}\r\n\r\nconst shuffleNumbers = array => {\r\n  // The Fisher Yates Method: https://www.w3schools.com/js/js_array_sort.asp\r\n  if (!Array.isArray(array)) throw new Error('Argument must be an array')\r\n\r\n  const items = (0,_remove_js__WEBPACK_IMPORTED_MODULE_0__.removeNonNumberItems)(array)\r\n\r\n  for (let i = items.length - 1; i > 0; i--) {\r\n    let j = Math.floor(Math.random() * (i + 1))\r\n    let k = items[i]\r\n    items[i] = items[j]\r\n    items[j] = k\r\n  }\r\n\r\n  return items\r\n}\r\n\n\n//# sourceURL=webpack://vanilla-js-functions/./functions/array/shuffle.js?");

/***/ }),

/***/ "./functions/array/sort.js":
/*!*********************************!*\
  !*** ./functions/array/sort.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"sortNumbers\": () => (/* binding */ sortNumbers)\n/* harmony export */ });\n/* harmony import */ var _math_is_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../math/is.js */ \"./functions/math/is.js\");\n/* harmony import */ var _remove_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./remove.js */ \"./functions/array/remove.js\");\n\r\n\r\n\r\nconst sortNumbers = (array, order = 'ASC') => {\r\n  if (!Array.isArray(array)) throw new Error('Argument must be an array')\r\n  if (order !== 'ASC' && order !== 'DESC') throw new Error('Invalid order. Use ASC (default) or DESC')\r\n\r\n  const numbersOnly = (0,_remove_js__WEBPACK_IMPORTED_MODULE_1__.removeNonNumberItems)(array)\r\n\r\n  return numbersOnly.sort((a, z) => {\r\n    return order === 'ASC' ? a - z : z - a\r\n  })\r\n}\r\n\n\n//# sourceURL=webpack://vanilla-js-functions/./functions/array/sort.js?");

/***/ }),

/***/ "./functions/cookie/_cookie.js":
/*!*************************************!*\
  !*** ./functions/cookie/_cookie.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getCookie\": () => (/* reexport safe */ _get_js__WEBPACK_IMPORTED_MODULE_0__.getCookie),\n/* harmony export */   \"setCookie\": () => (/* reexport safe */ _set_js__WEBPACK_IMPORTED_MODULE_1__.setCookie)\n/* harmony export */ });\n/* harmony import */ var _get_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./get.js */ \"./functions/cookie/get.js\");\n/* harmony import */ var _set_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./set.js */ \"./functions/cookie/set.js\");\n\r\n\r\n\n\n//# sourceURL=webpack://vanilla-js-functions/./functions/cookie/_cookie.js?");

/***/ }),

/***/ "./functions/cookie/get.js":
/*!*********************************!*\
  !*** ./functions/cookie/get.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getCookie\": () => (/* binding */ getCookie)\n/* harmony export */ });\nconst getCookie = cookieName => {\r\n  const name = cookieName + '='\r\n  const decodedCookie = decodeURIComponent(document.cookie)\r\n  const ca = decodedCookie.split(';')\r\n  for (let i = 0; i < ca.length; i++) {\r\n    let c = ca[i]\r\n    while (c.charAt(0) == ' ') {\r\n      c = c.substring(1)\r\n    }\r\n    if (c.indexOf(name) == 0) {\r\n      return c.substring(name.length, c.length)\r\n    }\r\n  }\r\n  return ''\r\n}\r\n\n\n//# sourceURL=webpack://vanilla-js-functions/./functions/cookie/get.js?");

/***/ }),

/***/ "./functions/cookie/set.js":
/*!*********************************!*\
  !*** ./functions/cookie/set.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"setCookie\": () => (/* binding */ setCookie)\n/* harmony export */ });\nconst setCookie = (cookieName, value, options = {}) => {\r\n  const defaults = {\r\n    expires: 'Thu, 18 Dec 2023 12:00:00 UTC',\r\n    path: '/',\r\n  }\r\n\r\n  const settings = { ...defaults, ...options }\r\n\r\n  const { expires, path } = settings\r\n\r\n  document.cookie = `${cookieName}=${value}; expires=${expires}; path=${path}`\r\n}\r\n\n\n//# sourceURL=webpack://vanilla-js-functions/./functions/cookie/set.js?");

/***/ }),

/***/ "./functions/functions.js":
/*!********************************!*\
  !*** ./functions/functions.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"$\": () => (/* reexport safe */ _DOM_DOM_js__WEBPACK_IMPORTED_MODULE_2__.$),\n/* harmony export */   \"$$\": () => (/* reexport safe */ _DOM_DOM_js__WEBPACK_IMPORTED_MODULE_2__.$$),\n/* harmony export */   \"HasAllItems\": () => (/* reexport safe */ _array_array_js__WEBPACK_IMPORTED_MODULE_0__.HasAllItems),\n/* harmony export */   \"addGlobalEventListener\": () => (/* reexport safe */ _DOM_DOM_js__WEBPACK_IMPORTED_MODULE_2__.addGlobalEventListener),\n/* harmony export */   \"calculateAreaOfCircle\": () => (/* reexport safe */ _math_math_js__WEBPACK_IMPORTED_MODULE_4__.calculateAreaOfCircle),\n/* harmony export */   \"calculateAreaOfRectangle\": () => (/* reexport safe */ _math_math_js__WEBPACK_IMPORTED_MODULE_4__.calculateAreaOfRectangle),\n/* harmony export */   \"calculateAverage\": () => (/* reexport safe */ _math_math_js__WEBPACK_IMPORTED_MODULE_4__.calculateAverage),\n/* harmony export */   \"calculateCorrelation\": () => (/* reexport safe */ _math_math_js__WEBPACK_IMPORTED_MODULE_4__.calculateCorrelation),\n/* harmony export */   \"calculateDeviationFromMean\": () => (/* reexport safe */ _math_math_js__WEBPACK_IMPORTED_MODULE_4__.calculateDeviationFromMean),\n/* harmony export */   \"calculateFactorial\": () => (/* reexport safe */ _math_math_js__WEBPACK_IMPORTED_MODULE_4__.calculateFactorial),\n/* harmony export */   \"calculateHypotenuse\": () => (/* reexport safe */ _math_math_js__WEBPACK_IMPORTED_MODULE_4__.calculateHypotenuse),\n/* harmony export */   \"calculateMedian\": () => (/* reexport safe */ _math_math_js__WEBPACK_IMPORTED_MODULE_4__.calculateMedian),\n/* harmony export */   \"calculateProduct\": () => (/* reexport safe */ _math_math_js__WEBPACK_IMPORTED_MODULE_4__.calculateProduct),\n/* harmony export */   \"calculateStandardDeviation\": () => (/* reexport safe */ _math_math_js__WEBPACK_IMPORTED_MODULE_4__.calculateStandardDeviation),\n/* harmony export */   \"calculateSum\": () => (/* reexport safe */ _math_math_js__WEBPACK_IMPORTED_MODULE_4__.calculateSum),\n/* harmony export */   \"capitalizeFirstLetter\": () => (/* reexport safe */ _string_string_js__WEBPACK_IMPORTED_MODULE_6__.capitalizeFirstLetter),\n/* harmony export */   \"convertToCamelCase\": () => (/* reexport safe */ _string_string_js__WEBPACK_IMPORTED_MODULE_6__.convertToCamelCase),\n/* harmony export */   \"copyTextToClipboard\": () => (/* reexport safe */ _DOM_DOM_js__WEBPACK_IMPORTED_MODULE_2__.copyTextToClipboard),\n/* harmony export */   \"filterOutNegativeNumbers\": () => (/* reexport safe */ _array_array_js__WEBPACK_IMPORTED_MODULE_0__.filterOutNegativeNumbers),\n/* harmony export */   \"generateHEXColor\": () => (/* reexport safe */ _math_math_js__WEBPACK_IMPORTED_MODULE_4__.generateHEXColor),\n/* harmony export */   \"generateRandomNumber\": () => (/* reexport safe */ _math_math_js__WEBPACK_IMPORTED_MODULE_4__.generateRandomNumber),\n/* harmony export */   \"generateRangeOfNumbers\": () => (/* reexport safe */ _math_math_js__WEBPACK_IMPORTED_MODULE_4__.generateRangeOfNumbers),\n/* harmony export */   \"getCookie\": () => (/* reexport safe */ _cookie_cookie_js__WEBPACK_IMPORTED_MODULE_1__.getCookie),\n/* harmony export */   \"getEvenNumbers\": () => (/* reexport safe */ _math_math_js__WEBPACK_IMPORTED_MODULE_4__.getEvenNumbers),\n/* harmony export */   \"getLargestNumber\": () => (/* reexport safe */ _math_math_js__WEBPACK_IMPORTED_MODULE_4__.getLargestNumber),\n/* harmony export */   \"getLocalStorage\": () => (/* reexport safe */ _localStorage_localStorage_js__WEBPACK_IMPORTED_MODULE_3__.getLocalStorage),\n/* harmony export */   \"getNegativeNumbers\": () => (/* reexport safe */ _math_math_js__WEBPACK_IMPORTED_MODULE_4__.getNegativeNumbers),\n/* harmony export */   \"getOddNumbers\": () => (/* reexport safe */ _math_math_js__WEBPACK_IMPORTED_MODULE_4__.getOddNumbers),\n/* harmony export */   \"getPositiveNumbers\": () => (/* reexport safe */ _math_math_js__WEBPACK_IMPORTED_MODULE_4__.getPositiveNumbers),\n/* harmony export */   \"getRandomItem\": () => (/* reexport safe */ _array_array_js__WEBPACK_IMPORTED_MODULE_0__.getRandomItem),\n/* harmony export */   \"getSmallestNumber\": () => (/* reexport safe */ _math_math_js__WEBPACK_IMPORTED_MODULE_4__.getSmallestNumber),\n/* harmony export */   \"hasBiggerThan\": () => (/* reexport safe */ _math_math_js__WEBPACK_IMPORTED_MODULE_4__.hasBiggerThan),\n/* harmony export */   \"hasEvenNumbers\": () => (/* reexport safe */ _math_math_js__WEBPACK_IMPORTED_MODULE_4__.hasEvenNumbers),\n/* harmony export */   \"hasItem\": () => (/* reexport safe */ _array_array_js__WEBPACK_IMPORTED_MODULE_0__.hasItem),\n/* harmony export */   \"hasKey\": () => (/* reexport safe */ _object_object_js__WEBPACK_IMPORTED_MODULE_5__.hasKey),\n/* harmony export */   \"hasNumbers\": () => (/* reexport safe */ _string_string_js__WEBPACK_IMPORTED_MODULE_6__.hasNumbers),\n/* harmony export */   \"hasOddNumbers\": () => (/* reexport safe */ _math_math_js__WEBPACK_IMPORTED_MODULE_4__.hasOddNumbers),\n/* harmony export */   \"hasSmallerThan\": () => (/* reexport safe */ _math_math_js__WEBPACK_IMPORTED_MODULE_4__.hasSmallerThan),\n/* harmony export */   \"hasZero\": () => (/* reexport safe */ _math_math_js__WEBPACK_IMPORTED_MODULE_4__.hasZero),\n/* harmony export */   \"isArray\": () => (/* reexport safe */ _array_array_js__WEBPACK_IMPORTED_MODULE_0__.isArray),\n/* harmony export */   \"isEvenNumber\": () => (/* reexport safe */ _math_math_js__WEBPACK_IMPORTED_MODULE_4__.isEvenNumber),\n/* harmony export */   \"isFloatNumber\": () => (/* reexport safe */ _math_math_js__WEBPACK_IMPORTED_MODULE_4__.isFloatNumber),\n/* harmony export */   \"isNegativeNumber\": () => (/* reexport safe */ _math_math_js__WEBPACK_IMPORTED_MODULE_4__.isNegativeNumber),\n/* harmony export */   \"isNumber\": () => (/* reexport safe */ _math_math_js__WEBPACK_IMPORTED_MODULE_4__.isNumber),\n/* harmony export */   \"isObject\": () => (/* reexport safe */ _object_object_js__WEBPACK_IMPORTED_MODULE_5__.isObject),\n/* harmony export */   \"isOddNumber\": () => (/* reexport safe */ _math_math_js__WEBPACK_IMPORTED_MODULE_4__.isOddNumber),\n/* harmony export */   \"isPalindrome\": () => (/* reexport safe */ _string_string_js__WEBPACK_IMPORTED_MODULE_6__.isPalindrome),\n/* harmony export */   \"isPositiveNumber\": () => (/* reexport safe */ _math_math_js__WEBPACK_IMPORTED_MODULE_4__.isPositiveNumber),\n/* harmony export */   \"isPrimeNumber\": () => (/* reexport safe */ _math_math_js__WEBPACK_IMPORTED_MODULE_4__.isPrimeNumber),\n/* harmony export */   \"isString\": () => (/* reexport safe */ _string_string_js__WEBPACK_IMPORTED_MODULE_6__.isString),\n/* harmony export */   \"isWholeNumber\": () => (/* reexport safe */ _math_math_js__WEBPACK_IMPORTED_MODULE_4__.isWholeNumber),\n/* harmony export */   \"removeDuplicates\": () => (/* reexport safe */ _array_array_js__WEBPACK_IMPORTED_MODULE_0__.removeDuplicates),\n/* harmony export */   \"removeItemFromArray\": () => (/* reexport safe */ _array_array_js__WEBPACK_IMPORTED_MODULE_0__.removeItemFromArray),\n/* harmony export */   \"removeNonNumberItems\": () => (/* reexport safe */ _array_array_js__WEBPACK_IMPORTED_MODULE_0__.removeNonNumberItems),\n/* harmony export */   \"removeNonStringItems\": () => (/* reexport safe */ _string_string_js__WEBPACK_IMPORTED_MODULE_6__.removeNonStringItems),\n/* harmony export */   \"roundNumber\": () => (/* reexport safe */ _math_math_js__WEBPACK_IMPORTED_MODULE_4__.roundNumber),\n/* harmony export */   \"scrollToElementById\": () => (/* reexport safe */ _DOM_DOM_js__WEBPACK_IMPORTED_MODULE_2__.scrollToElementById),\n/* harmony export */   \"scrollToTopOfPage\": () => (/* reexport safe */ _DOM_DOM_js__WEBPACK_IMPORTED_MODULE_2__.scrollToTopOfPage),\n/* harmony export */   \"setCookie\": () => (/* reexport safe */ _cookie_cookie_js__WEBPACK_IMPORTED_MODULE_1__.setCookie),\n/* harmony export */   \"setLocalStorage\": () => (/* reexport safe */ _localStorage_localStorage_js__WEBPACK_IMPORTED_MODULE_3__.setLocalStorage),\n/* harmony export */   \"shuffleItems\": () => (/* reexport safe */ _array_array_js__WEBPACK_IMPORTED_MODULE_0__.shuffleItems),\n/* harmony export */   \"shuffleNumbers\": () => (/* reexport safe */ _array_array_js__WEBPACK_IMPORTED_MODULE_0__.shuffleNumbers),\n/* harmony export */   \"sortNumbers\": () => (/* reexport safe */ _array_array_js__WEBPACK_IMPORTED_MODULE_0__.sortNumbers),\n/* harmony export */   \"sortStrings\": () => (/* reexport safe */ _string_string_js__WEBPACK_IMPORTED_MODULE_6__.sortStrings)\n/* harmony export */ });\n/* harmony import */ var _array_array_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./array/_array.js */ \"./functions/array/_array.js\");\n/* harmony import */ var _cookie_cookie_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cookie/_cookie.js */ \"./functions/cookie/_cookie.js\");\n/* harmony import */ var _DOM_DOM_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DOM/_DOM.js */ \"./functions/DOM/_DOM.js\");\n/* harmony import */ var _localStorage_localStorage_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./localStorage/_localStorage.js */ \"./functions/localStorage/_localStorage.js\");\n/* harmony import */ var _math_math_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./math/_math.js */ \"./functions/math/_math.js\");\n/* harmony import */ var _object_object_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./object/_object.js */ \"./functions/object/_object.js\");\n/* harmony import */ var _string_string_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./string/_string.js */ \"./functions/string/_string.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://vanilla-js-functions/./functions/functions.js?");

/***/ }),

/***/ "./functions/localStorage/_localStorage.js":
/*!*************************************************!*\
  !*** ./functions/localStorage/_localStorage.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getLocalStorage\": () => (/* reexport safe */ _get_js__WEBPACK_IMPORTED_MODULE_0__.getLocalStorage),\n/* harmony export */   \"setLocalStorage\": () => (/* reexport safe */ _set_js__WEBPACK_IMPORTED_MODULE_1__.setLocalStorage)\n/* harmony export */ });\n/* harmony import */ var _get_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./get.js */ \"./functions/localStorage/get.js\");\n/* harmony import */ var _set_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./set.js */ \"./functions/localStorage/set.js\");\n\r\n\r\n\n\n//# sourceURL=webpack://vanilla-js-functions/./functions/localStorage/_localStorage.js?");

/***/ }),

/***/ "./functions/localStorage/get.js":
/*!***************************************!*\
  !*** ./functions/localStorage/get.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getLocalStorage\": () => (/* binding */ getLocalStorage)\n/* harmony export */ });\nconst getLocalStorage = name => {\r\n  localStorage.getItem(name)\r\n}\r\n\n\n//# sourceURL=webpack://vanilla-js-functions/./functions/localStorage/get.js?");

/***/ }),

/***/ "./functions/localStorage/set.js":
/*!***************************************!*\
  !*** ./functions/localStorage/set.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"setLocalStorage\": () => (/* binding */ setLocalStorage)\n/* harmony export */ });\nconst setLocalStorage = (name, value) => {\r\n  localStorage.setItem(name, JSON.stringify(value))\r\n}\r\n\n\n//# sourceURL=webpack://vanilla-js-functions/./functions/localStorage/set.js?");

/***/ }),

/***/ "./functions/math/_math.js":
/*!*********************************!*\
  !*** ./functions/math/_math.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"calculateAreaOfCircle\": () => (/* reexport safe */ _calculate_js__WEBPACK_IMPORTED_MODULE_0__.calculateAreaOfCircle),\n/* harmony export */   \"calculateAreaOfRectangle\": () => (/* reexport safe */ _calculate_js__WEBPACK_IMPORTED_MODULE_0__.calculateAreaOfRectangle),\n/* harmony export */   \"calculateAverage\": () => (/* reexport safe */ _calculate_js__WEBPACK_IMPORTED_MODULE_0__.calculateAverage),\n/* harmony export */   \"calculateCorrelation\": () => (/* reexport safe */ _calculate_js__WEBPACK_IMPORTED_MODULE_0__.calculateCorrelation),\n/* harmony export */   \"calculateDeviationFromMean\": () => (/* reexport safe */ _calculate_js__WEBPACK_IMPORTED_MODULE_0__.calculateDeviationFromMean),\n/* harmony export */   \"calculateFactorial\": () => (/* reexport safe */ _calculate_js__WEBPACK_IMPORTED_MODULE_0__.calculateFactorial),\n/* harmony export */   \"calculateHypotenuse\": () => (/* reexport safe */ _calculate_js__WEBPACK_IMPORTED_MODULE_0__.calculateHypotenuse),\n/* harmony export */   \"calculateMedian\": () => (/* reexport safe */ _calculate_js__WEBPACK_IMPORTED_MODULE_0__.calculateMedian),\n/* harmony export */   \"calculateProduct\": () => (/* reexport safe */ _calculate_js__WEBPACK_IMPORTED_MODULE_0__.calculateProduct),\n/* harmony export */   \"calculateStandardDeviation\": () => (/* reexport safe */ _calculate_js__WEBPACK_IMPORTED_MODULE_0__.calculateStandardDeviation),\n/* harmony export */   \"calculateSum\": () => (/* reexport safe */ _calculate_js__WEBPACK_IMPORTED_MODULE_0__.calculateSum),\n/* harmony export */   \"generateHEXColor\": () => (/* reexport safe */ _generate_js__WEBPACK_IMPORTED_MODULE_1__.generateHEXColor),\n/* harmony export */   \"generateRandomNumber\": () => (/* reexport safe */ _generate_js__WEBPACK_IMPORTED_MODULE_1__.generateRandomNumber),\n/* harmony export */   \"generateRangeOfNumbers\": () => (/* reexport safe */ _generate_js__WEBPACK_IMPORTED_MODULE_1__.generateRangeOfNumbers),\n/* harmony export */   \"getEvenNumbers\": () => (/* reexport safe */ _get_js__WEBPACK_IMPORTED_MODULE_2__.getEvenNumbers),\n/* harmony export */   \"getLargestNumber\": () => (/* reexport safe */ _get_js__WEBPACK_IMPORTED_MODULE_2__.getLargestNumber),\n/* harmony export */   \"getNegativeNumbers\": () => (/* reexport safe */ _get_js__WEBPACK_IMPORTED_MODULE_2__.getNegativeNumbers),\n/* harmony export */   \"getOddNumbers\": () => (/* reexport safe */ _get_js__WEBPACK_IMPORTED_MODULE_2__.getOddNumbers),\n/* harmony export */   \"getPositiveNumbers\": () => (/* reexport safe */ _get_js__WEBPACK_IMPORTED_MODULE_2__.getPositiveNumbers),\n/* harmony export */   \"getSmallestNumber\": () => (/* reexport safe */ _get_js__WEBPACK_IMPORTED_MODULE_2__.getSmallestNumber),\n/* harmony export */   \"hasBiggerThan\": () => (/* reexport safe */ _has_js__WEBPACK_IMPORTED_MODULE_3__.hasBiggerThan),\n/* harmony export */   \"hasEvenNumbers\": () => (/* reexport safe */ _has_js__WEBPACK_IMPORTED_MODULE_3__.hasEvenNumbers),\n/* harmony export */   \"hasOddNumbers\": () => (/* reexport safe */ _has_js__WEBPACK_IMPORTED_MODULE_3__.hasOddNumbers),\n/* harmony export */   \"hasSmallerThan\": () => (/* reexport safe */ _has_js__WEBPACK_IMPORTED_MODULE_3__.hasSmallerThan),\n/* harmony export */   \"hasZero\": () => (/* reexport safe */ _has_js__WEBPACK_IMPORTED_MODULE_3__.hasZero),\n/* harmony export */   \"isEvenNumber\": () => (/* reexport safe */ _is_js__WEBPACK_IMPORTED_MODULE_4__.isEvenNumber),\n/* harmony export */   \"isFloatNumber\": () => (/* reexport safe */ _is_js__WEBPACK_IMPORTED_MODULE_4__.isFloatNumber),\n/* harmony export */   \"isNegativeNumber\": () => (/* reexport safe */ _is_js__WEBPACK_IMPORTED_MODULE_4__.isNegativeNumber),\n/* harmony export */   \"isNumber\": () => (/* reexport safe */ _is_js__WEBPACK_IMPORTED_MODULE_4__.isNumber),\n/* harmony export */   \"isOddNumber\": () => (/* reexport safe */ _is_js__WEBPACK_IMPORTED_MODULE_4__.isOddNumber),\n/* harmony export */   \"isPositiveNumber\": () => (/* reexport safe */ _is_js__WEBPACK_IMPORTED_MODULE_4__.isPositiveNumber),\n/* harmony export */   \"isPrimeNumber\": () => (/* reexport safe */ _is_js__WEBPACK_IMPORTED_MODULE_4__.isPrimeNumber),\n/* harmony export */   \"isWholeNumber\": () => (/* reexport safe */ _is_js__WEBPACK_IMPORTED_MODULE_4__.isWholeNumber),\n/* harmony export */   \"roundNumber\": () => (/* reexport safe */ _other_js__WEBPACK_IMPORTED_MODULE_5__.roundNumber)\n/* harmony export */ });\n/* harmony import */ var _calculate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./calculate.js */ \"./functions/math/calculate.js\");\n/* harmony import */ var _generate_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./generate.js */ \"./functions/math/generate.js\");\n/* harmony import */ var _get_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./get.js */ \"./functions/math/get.js\");\n/* harmony import */ var _has_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./has.js */ \"./functions/math/has.js\");\n/* harmony import */ var _is_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./is.js */ \"./functions/math/is.js\");\n/* harmony import */ var _other_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./other.js */ \"./functions/math/other.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://vanilla-js-functions/./functions/math/_math.js?");

/***/ }),

/***/ "./functions/math/calculate.js":
/*!*************************************!*\
  !*** ./functions/math/calculate.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"calculateAreaOfCircle\": () => (/* binding */ calculateAreaOfCircle),\n/* harmony export */   \"calculateAreaOfRectangle\": () => (/* binding */ calculateAreaOfRectangle),\n/* harmony export */   \"calculateAverage\": () => (/* binding */ calculateAverage),\n/* harmony export */   \"calculateCorrelation\": () => (/* binding */ calculateCorrelation),\n/* harmony export */   \"calculateDeviationFromMean\": () => (/* binding */ calculateDeviationFromMean),\n/* harmony export */   \"calculateFactorial\": () => (/* binding */ calculateFactorial),\n/* harmony export */   \"calculateHypotenuse\": () => (/* binding */ calculateHypotenuse),\n/* harmony export */   \"calculateMedian\": () => (/* binding */ calculateMedian),\n/* harmony export */   \"calculateProduct\": () => (/* binding */ calculateProduct),\n/* harmony export */   \"calculateStandardDeviation\": () => (/* binding */ calculateStandardDeviation),\n/* harmony export */   \"calculateSum\": () => (/* binding */ calculateSum)\n/* harmony export */ });\n/* harmony import */ var _functions_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../functions.js */ \"./functions/functions.js\");\n\r\n\r\nconst calculateAreaOfCircle = (radius = 1) => {\r\n  if (typeof radius !== 'number') throw new Error('Must provide a number type.')\r\n  return Math.PI * Math.pow(radius, 2)\r\n}\r\n\r\nconst calculateAreaOfRectangle = (width = 10, height = 1) => {\r\n  if (typeof width !== 'number' || typeof height !== 'number') throw new Error('Must provide a number type.')\r\n  return width * height\r\n}\r\n\r\nconst calculateAverage = array => {\r\n  if (!Array.isArray(array)) throw new Error('Argument must be an array')\r\n  const total = array.reduce((total, currentItem) => total + currentItem, 0)\r\n  const count = array.length\r\n  return total / count\r\n}\r\n\r\nconst calculateCorrelation = (x, y) => {\r\n  if (!Array.isArray(x) || !Array.isArray(y)) throw new Error('Argument must be an array')\r\n  if (x.length !== y.length) throw new Error('The arrays do not have the same length.')\r\n\r\n  // https://corporatefinanceinstitute.com/resources/knowledge/finance/correlation/\r\n  const length = x.length\r\n\r\n  // step 2: calculate means\r\n  const meanX = calculateAverage(x)\r\n  const meanY = calculateAverage(y)\r\n\r\n  // step 3: calculate deviation of each value\r\n  const a = x.map(number => number - meanX)\r\n  const b = y.map(number => number - meanY)\r\n\r\n  // step 4: cross-multiply and then sum\r\n  let multiplied = []\r\n  for (let i = 0; i < length; i++) {\r\n    multiplied.push(a[i] * b[i])\r\n  }\r\n  const sumMultiplied = calculateSum(multiplied)\r\n\r\n  // step 5: square each value\r\n  const a2 = a.map(number => number ** 2)\r\n  const b2 = b.map(number => number ** 2)\r\n  const suma2 = calculateSum(a2)\r\n  const sumb2 = calculateSum(b2)\r\n\r\n  return sumMultiplied / Math.sqrt(suma2 * sumb2)\r\n}\r\n\r\nconst calculateDeviationFromMean = (array, mean) => {\r\n  if (!Array.isArray(array)) throw new Error('Argument must be an array')\r\n  if (typeof mean !== 'number') throw new Error('Must provide a number type.')\r\n\r\n  return array.map(number => number - mean)\r\n}\r\n\r\nconst calculateFactorial = number => {\r\n  if (number < 0) throw new Error('Number provided cannot be negative')\r\n  if (number === 0 || number === 1) return 1\r\n  if (number !== Math.floor(number)) throw new Error('You must use whole numbers. Use the Gamma Function for demicals.')\r\n\r\n  // starting at 1\r\n  let total = 1\r\n\r\n  for (let i = 1; i <= number; i++) {\r\n    total = total * i\r\n  }\r\n\r\n  return total\r\n}\r\n\r\nconst calculateHypotenuse = (a, b) => {\r\n  if (typeof a !== 'number' || typeof b !== 'number') throw new Error('Must provide a number type.')\r\n  return Math.sqrt(a * a + b * b)\r\n}\r\n\r\nconst calculateMedian = array => {\r\n  // https://stackoverflow.com/a/45309555\r\n  if (!Array.isArray(array)) throw new Error('Argument must be an array')\r\n\r\n  if (array.length === 0) throw new Error('Array is empty')\r\n\r\n  const items = (0,_functions_js__WEBPACK_IMPORTED_MODULE_0__.removeNonNumberItems)([...array])\r\n\r\n  const sortedItems = (0,_functions_js__WEBPACK_IMPORTED_MODULE_0__.sortNumbers)(items)\r\n\r\n  const half = Math.floor(sortedItems.length / 2)\r\n\r\n  if (sortedItems.length % 2) return sortedItems[half]\r\n\r\n  return (sortedItems[half - 1] + sortedItems[half]) / 2.0\r\n}\r\n\r\nconst calculateProduct = array => {\r\n  if (!Array.isArray(array)) throw new Error('Argument must be an array')\r\n  return array.reduce((total, currentItem) => total * currentItem, 1)\r\n}\r\n\r\nconst calculateStandardDeviation = (array, sample = false) => {\r\n  if (!Array.isArray(array)) throw new Error('Argument must be an array')\r\n\r\n  // https://www.scribbr.com/statistics/standard-deviation/\r\n  const mean = calculateAverage(array)\r\n  const deviated = calculateDeviationFromMean(array, mean)\r\n  const squared = deviated.map(number => number ** 2)\r\n  const sum = calculateSum(squared)\r\n  const length = array.length\r\n  const variance = sample ? sum / (length - 1) : sum / length\r\n  return Math.sqrt(variance)\r\n}\r\n\r\nconst calculateSum = array => {\r\n  if (!Array.isArray(array)) throw new Error('Argument must be an array')\r\n\r\n  let count = 0\r\n\r\n  array.forEach(num => {\r\n    if ((0,_functions_js__WEBPACK_IMPORTED_MODULE_0__.isNumber)(num)) {\r\n      count = count + num\r\n    }\r\n  })\r\n\r\n  return count\r\n}\r\n\n\n//# sourceURL=webpack://vanilla-js-functions/./functions/math/calculate.js?");

/***/ }),

/***/ "./functions/math/generate.js":
/*!************************************!*\
  !*** ./functions/math/generate.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"generateHEXColor\": () => (/* binding */ generateHEXColor),\n/* harmony export */   \"generateRandomNumber\": () => (/* binding */ generateRandomNumber),\n/* harmony export */   \"generateRangeOfNumbers\": () => (/* binding */ generateRangeOfNumbers)\n/* harmony export */ });\nconst generateHEXColor = () => {\r\n  // source: https://vanillajstoolkit.com/helpers/createcolor/\r\n\r\n  const hex = ['a', 'b', 'c', 'd', 'e', 'f', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9']\r\n\r\n  /**\r\n   * Randomly shuffle an array\r\n   * https://stackoverflow.com/a/2450976/1293256\r\n   */\r\n  const shuffle = () => {\r\n    let currentIndex = hex.length\r\n    let temporaryValue, randomIndex\r\n\r\n    // While there remain elements to shuffle...\r\n    while (currentIndex !== 0) {\r\n      // Pick a remaining element...\r\n      randomIndex = Math.floor(Math.random() * currentIndex)\r\n      currentIndex -= 1\r\n\r\n      // And swap it with the current element.\r\n      temporaryValue = hex[currentIndex]\r\n      hex[currentIndex] = hex[randomIndex]\r\n      hex[randomIndex] = temporaryValue\r\n    }\r\n  }\r\n\r\n  /**\r\n   * Create a six-digit hex color\r\n   */\r\n  const hexColor = () => {\r\n    // Create the color\r\n    let color = '#'\r\n\r\n    // Shuffle the hex values and append\r\n    for (let i = 0; i < 6; i++) {\r\n      shuffle(hex)\r\n      color += hex[0]\r\n    }\r\n\r\n    return color\r\n  }\r\n\r\n  return hexColor()\r\n}\r\n\r\nconst generateRandomNumber = (min = 1, max = 100) => {\r\n  if (min > max) throw new Error('Minimum value cannot be bigger than maximum value')\r\n  min = Math.ceil(min)\r\n  max = Math.floor(max)\r\n  return Math.floor(Math.random() * (max - min) + min) // The maximum is exclusive and the minimum is inclusive\r\n}\r\n\r\nconst generateRangeOfNumbers = (min = 1, max = 10, step = 1) => {\r\n  if (min > max) throw new Error('Minimum value cannot be bigger than maximum value')\r\n  if (step > max - min) throw new Error('Step is bigger than the difference of min and max')\r\n\r\n  let result = []\r\n\r\n  const round = 1 / step // getting the rounding value dynamically\r\n\r\n  for (let i = min; i <= max; i = i + step) {\r\n    result.push(Math.round(i * round) / round) // rounding the numbers\r\n  }\r\n\r\n  return result\r\n}\r\n\n\n//# sourceURL=webpack://vanilla-js-functions/./functions/math/generate.js?");

/***/ }),

/***/ "./functions/math/get.js":
/*!*******************************!*\
  !*** ./functions/math/get.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getEvenNumbers\": () => (/* binding */ getEvenNumbers),\n/* harmony export */   \"getLargestNumber\": () => (/* binding */ getLargestNumber),\n/* harmony export */   \"getNegativeNumbers\": () => (/* binding */ getNegativeNumbers),\n/* harmony export */   \"getOddNumbers\": () => (/* binding */ getOddNumbers),\n/* harmony export */   \"getPositiveNumbers\": () => (/* binding */ getPositiveNumbers),\n/* harmony export */   \"getSmallestNumber\": () => (/* binding */ getSmallestNumber)\n/* harmony export */ });\nconst getEvenNumbers = array => {\r\n  if (!Array.isArray(array)) throw new Error('Argument must be an array')\r\n  return array.filter(number => number % 2 === 0)\r\n}\r\n\r\nconst getLargestNumber = array => {\r\n  if (!Array.isArray(array)) throw new Error('Argument must be an array')\r\n  return array.reduce((a, b) => Math.max(a, b), -Infinity)\r\n}\r\n\r\nconst getNegativeNumbers = array => {\r\n  if (!Array.isArray(array)) throw new Error('Argument must be an array')\r\n  return array.filter(number => number < 0)\r\n}\r\n\r\nconst getOddNumbers = array => {\r\n  if (!Array.isArray(array)) throw new Error('Argument must be an array')\r\n  return array.filter(number => number % 2 !== 0)\r\n}\r\n\r\nconst getPositiveNumbers = array => {\r\n  if (!Array.isArray(array)) throw new Error('Argument must be an array')\r\n  return array.filter(number => number >= 0)\r\n}\r\n\r\nconst getSmallestNumber = array => {\r\n  if (!Array.isArray(array)) throw new Error('Argument must be an array')\r\n  return Math.min(...array)\r\n}\r\n\n\n//# sourceURL=webpack://vanilla-js-functions/./functions/math/get.js?");

/***/ }),

/***/ "./functions/math/has.js":
/*!*******************************!*\
  !*** ./functions/math/has.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"hasBiggerThan\": () => (/* binding */ hasBiggerThan),\n/* harmony export */   \"hasEvenNumbers\": () => (/* binding */ hasEvenNumbers),\n/* harmony export */   \"hasOddNumbers\": () => (/* binding */ hasOddNumbers),\n/* harmony export */   \"hasSmallerThan\": () => (/* binding */ hasSmallerThan),\n/* harmony export */   \"hasZero\": () => (/* binding */ hasZero)\n/* harmony export */ });\n/* harmony import */ var _is_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./is.js */ \"./functions/math/is.js\");\n\r\n\r\nconst hasEvenNumbers = array => {\r\n  if (!Array.isArray(array)) throw new Error('Type error: must provide array')\r\n\r\n  for (let i = 0; i < array.length; i++) {\r\n    const number = array[i]\r\n    if ((0,_is_js__WEBPACK_IMPORTED_MODULE_0__.isEvenNumber)(number)) return true\r\n  }\r\n\r\n  return false\r\n}\r\n\r\nconst hasOddNumbers = array => {\r\n  if (!Array.isArray(array)) throw new Error('Type error: must provide array')\r\n\r\n  for (let i = 0; i < array.length; i++) {\r\n    const number = array[i]\r\n    if ((0,_is_js__WEBPACK_IMPORTED_MODULE_0__.isOddNumber)(number)) return true\r\n  }\r\n\r\n  return false\r\n}\r\n\r\nconst hasZero = array => {\r\n  if (!Array.isArray(array)) throw new Error('Type error: must provide array')\r\n\r\n  for (let i = 0; i < array.length; i++) {\r\n    const number = array[i]\r\n    if (number === 0) return true\r\n  }\r\n\r\n  return false\r\n}\r\n\r\nconst hasBiggerThan = (number, array) => {\r\n  if (!Array.isArray(array)) throw new Error('Type error: must provide array')\r\n  if (!(0,_is_js__WEBPACK_IMPORTED_MODULE_0__.isNumber)(number)) throw new Error('Type error: must provide number')\r\n\r\n  for (let i = 0; i < array.length; i++) {\r\n    const _number = array[i]\r\n    if (number < _number) return true\r\n  }\r\n\r\n  return false\r\n}\r\n\r\nconst hasSmallerThan = (number, array) => {\r\n  if (!Array.isArray(array)) throw new Error('Type error: must provide array')\r\n  if (!(0,_is_js__WEBPACK_IMPORTED_MODULE_0__.isNumber)(number)) throw new Error('Type error: must provide number')\r\n\r\n  for (let i = 0; i < array.length; i++) {\r\n    const _number = array[i]\r\n    if (number > _number) return true\r\n  }\r\n\r\n  return false\r\n}\r\n\n\n//# sourceURL=webpack://vanilla-js-functions/./functions/math/has.js?");

/***/ }),

/***/ "./functions/math/is.js":
/*!******************************!*\
  !*** ./functions/math/is.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"isEvenNumber\": () => (/* binding */ isEvenNumber),\n/* harmony export */   \"isFloatNumber\": () => (/* binding */ isFloatNumber),\n/* harmony export */   \"isNegativeNumber\": () => (/* binding */ isNegativeNumber),\n/* harmony export */   \"isNumber\": () => (/* binding */ isNumber),\n/* harmony export */   \"isOddNumber\": () => (/* binding */ isOddNumber),\n/* harmony export */   \"isPositiveNumber\": () => (/* binding */ isPositiveNumber),\n/* harmony export */   \"isPrimeNumber\": () => (/* binding */ isPrimeNumber),\n/* harmony export */   \"isWholeNumber\": () => (/* binding */ isWholeNumber)\n/* harmony export */ });\nconst isEvenNumber = number => {\r\n  if (typeof number !== 'number') throw new Error('Must provide a number type.')\r\n  return number % 2 === 0\r\n}\r\n\r\nconst isFloatNumber = number => {\r\n  if (typeof number !== 'number') throw new Error('Must provide a number type.')\r\n  return number !== Math.trunc(number)\r\n}\r\n\r\nconst isNegativeNumber = number => {\r\n  if (typeof number !== 'number') throw new Error('Must provide a number type.')\r\n  return number < 0\r\n}\r\n\r\nconst isNumber = (number, ignoreType = false) => {\r\n  // isNaN(1) === isNaN('1')\r\n  // typeof 1 !== typeof '1\r\n  return ignoreType ? !isNaN(number) : typeof number === 'number'\r\n}\r\n\r\nconst isOddNumber = number => {\r\n  if (typeof number !== 'number') throw new Error('Must provide a number type.')\r\n  return number % 2 !== 0\r\n}\r\n\r\nconst isPositiveNumber = number => {\r\n  if (typeof number !== 'number') throw new Error('Must provide a number type.')\r\n  return number >= 0\r\n}\r\n\r\nconst isPrimeNumber = number => {\r\n  if (typeof number !== 'number') throw new Error('Must provide a number type.')\r\n  if (number === 1) throw new Error('1 is neither prime nor composite number.')\r\n  if (number < 1) throw new Error('Only positive numbers bigger than 1 can be prime.')\r\n\r\n  let isPrime = true\r\n\r\n  for (let i = 2; i < number; i++) {\r\n    if (number % i == 0) {\r\n      isPrime = false\r\n      break\r\n    }\r\n  }\r\n\r\n  return isPrime\r\n}\r\n\r\nconst isWholeNumber = number => {\r\n  if (typeof number !== 'number') throw new Error('Must provide a number type.')\r\n  // Math.trunc returns the same as Math.floor\r\n  return number === Math.trunc(number)\r\n}\r\n\n\n//# sourceURL=webpack://vanilla-js-functions/./functions/math/is.js?");

/***/ }),

/***/ "./functions/math/other.js":
/*!*********************************!*\
  !*** ./functions/math/other.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"roundNumber\": () => (/* binding */ roundNumber)\n/* harmony export */ });\nconst roundNumber = (number, options = {}) => {\r\n  const defaultOptions = {\r\n    round: 'nearest',\r\n  }\r\n\r\n  const settings = { ...defaultOptions, ...options }\r\n  if (settings.round === 'nearest') return Math.round(number)\r\n  if (settings.round === 'up') return Math.ceil(number)\r\n  if (settings.round === 'down') return Math.floor(number)\r\n\r\n  throw new Error('Invalid option. You may use: nearest|up|down')\r\n}\r\n\n\n//# sourceURL=webpack://vanilla-js-functions/./functions/math/other.js?");

/***/ }),

/***/ "./functions/object/_object.js":
/*!*************************************!*\
  !*** ./functions/object/_object.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"hasKey\": () => (/* reexport safe */ _has_js__WEBPACK_IMPORTED_MODULE_0__.hasKey),\n/* harmony export */   \"isObject\": () => (/* reexport safe */ _is_js__WEBPACK_IMPORTED_MODULE_1__.isObject)\n/* harmony export */ });\n/* harmony import */ var _has_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./has.js */ \"./functions/object/has.js\");\n/* harmony import */ var _is_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./is.js */ \"./functions/object/is.js\");\n\r\n\r\n\n\n//# sourceURL=webpack://vanilla-js-functions/./functions/object/_object.js?");

/***/ }),

/***/ "./functions/object/has.js":
/*!*********************************!*\
  !*** ./functions/object/has.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"hasKey\": () => (/* binding */ hasKey)\n/* harmony export */ });\n/* harmony import */ var _functions_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../functions.js */ \"./functions/functions.js\");\n\r\n\r\nconst hasKey = (key = '', object = {}) => {\r\n  if (!(0,_functions_js__WEBPACK_IMPORTED_MODULE_0__.isObject)(object)) throw new Error('Type error: must provide object')\r\n  if (!(0,_functions_js__WEBPACK_IMPORTED_MODULE_0__.isString)(key)) throw new Error('Type error: must provide string')\r\n\r\n  const keys = Object.keys(object) // returns an array of keys in the object\r\n\r\n  return keys.includes(key)\r\n}\r\n\n\n//# sourceURL=webpack://vanilla-js-functions/./functions/object/has.js?");

/***/ }),

/***/ "./functions/object/is.js":
/*!********************************!*\
  !*** ./functions/object/is.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"isObject\": () => (/* binding */ isObject)\n/* harmony export */ });\nconst isObject = object => typeof object === 'object' && !Array.isArray(object) && object !== null\r\n\n\n//# sourceURL=webpack://vanilla-js-functions/./functions/object/is.js?");

/***/ }),

/***/ "./functions/string/_string.js":
/*!*************************************!*\
  !*** ./functions/string/_string.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"capitalizeFirstLetter\": () => (/* reexport safe */ _other_js__WEBPACK_IMPORTED_MODULE_3__.capitalizeFirstLetter),\n/* harmony export */   \"convertToCamelCase\": () => (/* reexport safe */ _convert_js__WEBPACK_IMPORTED_MODULE_0__.convertToCamelCase),\n/* harmony export */   \"hasNumbers\": () => (/* reexport safe */ _has_js__WEBPACK_IMPORTED_MODULE_1__.hasNumbers),\n/* harmony export */   \"isPalindrome\": () => (/* reexport safe */ _is_js__WEBPACK_IMPORTED_MODULE_2__.isPalindrome),\n/* harmony export */   \"isString\": () => (/* reexport safe */ _is_js__WEBPACK_IMPORTED_MODULE_2__.isString),\n/* harmony export */   \"removeNonStringItems\": () => (/* reexport safe */ _remove_js__WEBPACK_IMPORTED_MODULE_5__.removeNonStringItems),\n/* harmony export */   \"sortStrings\": () => (/* reexport safe */ _sort_js__WEBPACK_IMPORTED_MODULE_4__.sortStrings)\n/* harmony export */ });\n/* harmony import */ var _convert_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./convert.js */ \"./functions/string/convert.js\");\n/* harmony import */ var _has_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./has.js */ \"./functions/string/has.js\");\n/* harmony import */ var _is_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./is.js */ \"./functions/string/is.js\");\n/* harmony import */ var _other_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./other.js */ \"./functions/string/other.js\");\n/* harmony import */ var _sort_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sort.js */ \"./functions/string/sort.js\");\n/* harmony import */ var _remove_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./remove.js */ \"./functions/string/remove.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://vanilla-js-functions/./functions/string/_string.js?");

/***/ }),

/***/ "./functions/string/convert.js":
/*!*************************************!*\
  !*** ./functions/string/convert.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"convertToCamelCase\": () => (/* binding */ convertToCamelCase)\n/* harmony export */ });\n/* harmony import */ var _other_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./other.js */ \"./functions/string/other.js\");\n\r\n\r\nconst convertToCamelCase = string => {\r\n  if (typeof string !== 'string') throw new Error('Must provide a string')\r\n\r\n  let array = []\r\n\r\n  if (string.includes('-')) {\r\n    array = string.split('-')\r\n  } else if (string.includes('_')) {\r\n    array = string.split('_')\r\n  } else {\r\n    throw new Error('Unknown format')\r\n  }\r\n\r\n  const arrayWithCapitalLetters = array.map((item, index) => {\r\n    return index === 0 ? item : (0,_other_js__WEBPACK_IMPORTED_MODULE_0__.capitalizeFirstLetter)(item)\r\n  })\r\n\r\n  return arrayWithCapitalLetters.join('')\r\n}\r\n\n\n//# sourceURL=webpack://vanilla-js-functions/./functions/string/convert.js?");

/***/ }),

/***/ "./functions/string/has.js":
/*!*********************************!*\
  !*** ./functions/string/has.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"hasNumbers\": () => (/* binding */ hasNumbers)\n/* harmony export */ });\nconst hasNumbers = string => {\r\n  if (typeof string !== 'string') throw new Error('Must provide a string')\r\n  const regex = /\\d/g\r\n  return regex.test(string)\r\n}\r\n\n\n//# sourceURL=webpack://vanilla-js-functions/./functions/string/has.js?");

/***/ }),

/***/ "./functions/string/is.js":
/*!********************************!*\
  !*** ./functions/string/is.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"isPalindrome\": () => (/* binding */ isPalindrome),\n/* harmony export */   \"isString\": () => (/* binding */ isString)\n/* harmony export */ });\nconst isPalindrome = string => {\r\n  if (typeof string !== 'string') throw new Error('Must provide a string')\r\n  const regex = /[^A-Za-z0-9]/g\r\n  const lowered = string.toLowerCase()\r\n  const replaced = lowered.replace(regex, '')\r\n  const reverseString = replaced.split('').reverse().join('')\r\n  return replaced === reverseString\r\n}\r\n\r\nconst isString = string => typeof string === 'string'\r\n\n\n//# sourceURL=webpack://vanilla-js-functions/./functions/string/is.js?");

/***/ }),

/***/ "./functions/string/other.js":
/*!***********************************!*\
  !*** ./functions/string/other.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"capitalizeFirstLetter\": () => (/* binding */ capitalizeFirstLetter)\n/* harmony export */ });\nconst capitalizeFirstLetter = string => {\r\n  if (typeof string !== 'string') throw new Error('Must provide a string')\r\n\r\n  return string.charAt(0).toUpperCase() + string.slice(1)\r\n}\r\n\n\n//# sourceURL=webpack://vanilla-js-functions/./functions/string/other.js?");

/***/ }),

/***/ "./functions/string/remove.js":
/*!************************************!*\
  !*** ./functions/string/remove.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"removeNonStringItems\": () => (/* binding */ removeNonStringItems)\n/* harmony export */ });\n/* harmony import */ var _is_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./is.js */ \"./functions/string/is.js\");\n\r\n\r\nconst removeNonStringItems = array => {\r\n  if (!Array.isArray(array)) throw new Error('Argument must be an array')\r\n\r\n  return array.filter(item => (0,_is_js__WEBPACK_IMPORTED_MODULE_0__.isString)(item))\r\n}\r\n\n\n//# sourceURL=webpack://vanilla-js-functions/./functions/string/remove.js?");

/***/ }),

/***/ "./functions/string/sort.js":
/*!**********************************!*\
  !*** ./functions/string/sort.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"sortStrings\": () => (/* binding */ sortStrings)\n/* harmony export */ });\n/* harmony import */ var _remove_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./remove.js */ \"./functions/string/remove.js\");\n\r\n\r\nconst sortStrings = (array, order = 'ASC') => {\r\n  if (!Array.isArray(array)) throw new Error('Argument must be an array')\r\n  if (order !== 'ASC' && order !== 'DESC') throw new Error('Invalid order. Use ASC (default) or DESC')\r\n\r\n  const stringsOnly = (0,_remove_js__WEBPACK_IMPORTED_MODULE_0__.removeNonStringItems)(array)\r\n\r\n  return stringsOnly.sort()\r\n}\r\n\n\n//# sourceURL=webpack://vanilla-js-functions/./functions/string/sort.js?");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _functions_functions_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./functions/functions.js */ \"./functions/functions.js\");\n\r\n\r\nconst form = document.querySelector('#form')\r\nconst input = document.querySelector('#input')\r\nconst button = document.querySelector('#button')\r\nconst p = document.querySelector('#p')\r\n\r\nbutton.addEventListener('click', async e => {\r\n  e.preventDefault()\r\n  const result = await (0,_functions_functions_js__WEBPACK_IMPORTED_MODULE_0__.copyTextToClipboard)(input.value)\r\n  console.log(`Copied: ${result}`)\r\n  console.log(await navigator.clipboard.readText())\r\n})\r\n\n\n//# sourceURL=webpack://vanilla-js-functions/./index.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;