"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/auth/[...nextauth]";
exports.ids = ["pages/api/auth/[...nextauth]"];
exports.modules = {

/***/ "next-auth":
/*!****************************!*\
  !*** external "next-auth" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next-auth");

/***/ }),

/***/ "next-auth/providers/credentials":
/*!**************************************************!*\
  !*** external "next-auth/providers/credentials" ***!
  \**************************************************/
/***/ ((module) => {

module.exports = require("next-auth/providers/credentials");

/***/ }),

/***/ "next-auth/providers/github":
/*!*********************************************!*\
  !*** external "next-auth/providers/github" ***!
  \*********************************************/
/***/ ((module) => {

module.exports = require("next-auth/providers/github");

/***/ }),

/***/ "next-auth/providers/google":
/*!*********************************************!*\
  !*** external "next-auth/providers/google" ***!
  \*********************************************/
/***/ ((module) => {

module.exports = require("next-auth/providers/google");

/***/ }),

/***/ "(api)/./pages/api/auth/[...nextauth].ts":
/*!*****************************************!*\
  !*** ./pages/api/auth/[...nextauth].ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"authOptions\": () => (/* binding */ authOptions),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ \"next-auth\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_providers_github__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/providers/github */ \"next-auth/providers/github\");\n/* harmony import */ var next_auth_providers_github__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_github__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_auth_providers_google__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/providers/google */ \"next-auth/providers/google\");\n/* harmony import */ var next_auth_providers_google__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_google__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-auth/providers/credentials */ \"next-auth/providers/credentials\");\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nconst authOptions = {\n    secret: process.env.SECRET,\n    providers: [\n        next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_3___default()({\n            name: \"Credentials\",\n            credentials: {\n                email: {\n                    label: \"E-mail\",\n                    type: \"email\"\n                },\n                password: {\n                    label: \"Password\",\n                    type: \"password\"\n                }\n            },\n            authorize (credentials) {\n                const user = {\n                    id: \"1\",\n                    name: \"John Doe\",\n                    email: \"test@test.com\",\n                    image: \"null\"\n                };\n                if (credentials?.email === \"test@test.com\" && credentials.password === \"test\") return user;\n                return null;\n            }\n        }),\n        next_auth_providers_github__WEBPACK_IMPORTED_MODULE_1___default()({\n            clientId: process.env.GITHUB_ID,\n            clientSecret: process.env.GITHUB_SECRET\n        }),\n        next_auth_providers_google__WEBPACK_IMPORTED_MODULE_2___default()({\n            clientId: process.env.GOOGLE_CLIENT_ID,\n            clientSecret: process.env.GOOGLE_CLIENT_SECRET\n        }), \n    ],\n    callbacks: {\n        redirect: async ({ url , baseUrl  })=>{\n            if (url.startsWith(\"/\")) return `${baseUrl}${url}`;\n            else if (new URL(url).origin === baseUrl) return url;\n            return baseUrl;\n        }\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (next_auth__WEBPACK_IMPORTED_MODULE_0___default()(authOptions));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBNEQ7QUFDSjtBQUNBO0FBQ1U7QUFFM0QsTUFBTUksV0FBVyxHQUFvQjtJQUMxQ0MsTUFBTSxFQUFFQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0MsTUFBTTtJQUMxQkMsU0FBUyxFQUFFO1FBQ1ROLHNFQUFtQixDQUFDO1lBQ2xCTyxJQUFJLEVBQUUsYUFBYTtZQUNuQkMsV0FBVyxFQUFFO2dCQUNYQyxLQUFLLEVBQUU7b0JBQUVDLEtBQUssRUFBRSxRQUFRO29CQUFFQyxJQUFJLEVBQUUsT0FBTztpQkFBRTtnQkFDekNDLFFBQVEsRUFBRTtvQkFBRUYsS0FBSyxFQUFFLFVBQVU7b0JBQUVDLElBQUksRUFBRSxVQUFVO2lCQUFFO2FBQ2xEO1lBRURFLFNBQVMsRUFBQ0wsV0FBVyxFQUFFO2dCQUNyQixNQUFNTSxJQUFJLEdBQVM7b0JBQ2pCQyxFQUFFLEVBQUUsR0FBRztvQkFDUFIsSUFBSSxFQUFFLFVBQVU7b0JBQ2hCRSxLQUFLLEVBQUUsZUFBZTtvQkFDdEJPLEtBQUssRUFBRSxNQUFNO2lCQUNkO2dCQUVELElBQ0VSLFdBQVcsRUFBRUMsS0FBSyxLQUFLLGVBQWUsSUFDdENELFdBQVcsQ0FBQ0ksUUFBUSxLQUFLLE1BQU0sRUFFL0IsT0FBT0UsSUFBSSxDQUFDO2dCQUNkLE9BQU8sSUFBSSxDQUFDO1lBQ2QsQ0FBQztTQUNGLENBQUM7UUFDRmhCLGlFQUFjLENBQUM7WUFDYm1CLFFBQVEsRUFBRWQsT0FBTyxDQUFDQyxHQUFHLENBQUNjLFNBQVM7WUFDL0JDLFlBQVksRUFBRWhCLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDZ0IsYUFBYTtTQUN4QyxDQUFDO1FBQ0ZyQixpRUFBYyxDQUFDO1lBQ2JrQixRQUFRLEVBQUVkLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDaUIsZ0JBQWdCO1lBQ3RDRixZQUFZLEVBQUVoQixPQUFPLENBQUNDLEdBQUcsQ0FBQ2tCLG9CQUFvQjtTQUMvQyxDQUFDO0tBQ0g7SUFDREMsU0FBUyxFQUFFO1FBQ1RDLFFBQVEsRUFBRSxPQUFPLEVBQUVDLEdBQUcsR0FBRUMsT0FBTyxHQUFFLEdBQUs7WUFDcEMsSUFBSUQsR0FBRyxDQUFDRSxVQUFVLENBQUMsR0FBRyxDQUFDLEVBQUUsT0FBTyxDQUFDLEVBQUVELE9BQU8sQ0FBQyxFQUFFRCxHQUFHLENBQUMsQ0FBQyxDQUFDO2lCQUU5QyxJQUFJLElBQUlHLEdBQUcsQ0FBQ0gsR0FBRyxDQUFDLENBQUNJLE1BQU0sS0FBS0gsT0FBTyxFQUFFLE9BQU9ELEdBQUcsQ0FBQztZQUNyRCxPQUFPQyxPQUFPLENBQUM7UUFDakIsQ0FBQztLQUNGO0NBQ0YsQ0FBQztBQUNGLGlFQUFlN0IsZ0RBQVEsQ0FBQ0ksV0FBVyxDQUFDLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3BhZ2VzL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0udHM/MmU4YiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTmV4dEF1dGgsIHsgTmV4dEF1dGhPcHRpb25zLCBVc2VyIH0gZnJvbSBcIm5leHQtYXV0aFwiO1xyXG5pbXBvcnQgR2l0aHViUHJvdmlkZXIgZnJvbSBcIm5leHQtYXV0aC9wcm92aWRlcnMvZ2l0aHViXCI7XHJcbmltcG9ydCBHb29nbGVQcm92aWRlciBmcm9tIFwibmV4dC1hdXRoL3Byb3ZpZGVycy9nb29nbGVcIjtcclxuaW1wb3J0IENyZWRlbnRpYWxzUHJvdmlkZXIgZnJvbSBcIm5leHQtYXV0aC9wcm92aWRlcnMvY3JlZGVudGlhbHNcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBhdXRoT3B0aW9uczogTmV4dEF1dGhPcHRpb25zID0ge1xyXG4gIHNlY3JldDogcHJvY2Vzcy5lbnYuU0VDUkVULFxyXG4gIHByb3ZpZGVyczogW1xyXG4gICAgQ3JlZGVudGlhbHNQcm92aWRlcih7XHJcbiAgICAgIG5hbWU6IFwiQ3JlZGVudGlhbHNcIixcclxuICAgICAgY3JlZGVudGlhbHM6IHtcclxuICAgICAgICBlbWFpbDogeyBsYWJlbDogXCJFLW1haWxcIiwgdHlwZTogXCJlbWFpbFwiIH0sXHJcbiAgICAgICAgcGFzc3dvcmQ6IHsgbGFiZWw6IFwiUGFzc3dvcmRcIiwgdHlwZTogXCJwYXNzd29yZFwiIH0sXHJcbiAgICAgIH0sXHJcblxyXG4gICAgICBhdXRob3JpemUoY3JlZGVudGlhbHMpIHtcclxuICAgICAgICBjb25zdCB1c2VyOiBVc2VyID0ge1xyXG4gICAgICAgICAgaWQ6IFwiMVwiLFxyXG4gICAgICAgICAgbmFtZTogXCJKb2huIERvZVwiLFxyXG4gICAgICAgICAgZW1haWw6IFwidGVzdEB0ZXN0LmNvbVwiLFxyXG4gICAgICAgICAgaW1hZ2U6IFwibnVsbFwiLFxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGlmIChcclxuICAgICAgICAgIGNyZWRlbnRpYWxzPy5lbWFpbCA9PT0gXCJ0ZXN0QHRlc3QuY29tXCIgJiZcclxuICAgICAgICAgIGNyZWRlbnRpYWxzLnBhc3N3b3JkID09PSBcInRlc3RcIlxyXG4gICAgICAgIClcclxuICAgICAgICAgIHJldHVybiB1c2VyO1xyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICB9LFxyXG4gICAgfSksXHJcbiAgICBHaXRodWJQcm92aWRlcih7XHJcbiAgICAgIGNsaWVudElkOiBwcm9jZXNzLmVudi5HSVRIVUJfSUQhLFxyXG4gICAgICBjbGllbnRTZWNyZXQ6IHByb2Nlc3MuZW52LkdJVEhVQl9TRUNSRVQhLFxyXG4gICAgfSksXHJcbiAgICBHb29nbGVQcm92aWRlcih7XHJcbiAgICAgIGNsaWVudElkOiBwcm9jZXNzLmVudi5HT09HTEVfQ0xJRU5UX0lEISxcclxuICAgICAgY2xpZW50U2VjcmV0OiBwcm9jZXNzLmVudi5HT09HTEVfQ0xJRU5UX1NFQ1JFVCEsXHJcbiAgICB9KSxcclxuICBdLFxyXG4gIGNhbGxiYWNrczoge1xyXG4gICAgcmVkaXJlY3Q6IGFzeW5jICh7IHVybCwgYmFzZVVybCB9KSA9PiB7XHJcbiAgICAgIGlmICh1cmwuc3RhcnRzV2l0aChcIi9cIikpIHJldHVybiBgJHtiYXNlVXJsfSR7dXJsfWA7XHJcbiAgICAgIC8vIEFsbG93cyBjYWxsYmFjayBVUkxzIG9uIHRoZSBzYW1lIG9yaWdpblxyXG4gICAgICBlbHNlIGlmIChuZXcgVVJMKHVybCkub3JpZ2luID09PSBiYXNlVXJsKSByZXR1cm4gdXJsO1xyXG4gICAgICByZXR1cm4gYmFzZVVybDtcclxuICAgIH0sXHJcbiAgfSxcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgTmV4dEF1dGgoYXV0aE9wdGlvbnMpO1xyXG4iXSwibmFtZXMiOlsiTmV4dEF1dGgiLCJHaXRodWJQcm92aWRlciIsIkdvb2dsZVByb3ZpZGVyIiwiQ3JlZGVudGlhbHNQcm92aWRlciIsImF1dGhPcHRpb25zIiwic2VjcmV0IiwicHJvY2VzcyIsImVudiIsIlNFQ1JFVCIsInByb3ZpZGVycyIsIm5hbWUiLCJjcmVkZW50aWFscyIsImVtYWlsIiwibGFiZWwiLCJ0eXBlIiwicGFzc3dvcmQiLCJhdXRob3JpemUiLCJ1c2VyIiwiaWQiLCJpbWFnZSIsImNsaWVudElkIiwiR0lUSFVCX0lEIiwiY2xpZW50U2VjcmV0IiwiR0lUSFVCX1NFQ1JFVCIsIkdPT0dMRV9DTElFTlRfSUQiLCJHT09HTEVfQ0xJRU5UX1NFQ1JFVCIsImNhbGxiYWNrcyIsInJlZGlyZWN0IiwidXJsIiwiYmFzZVVybCIsInN0YXJ0c1dpdGgiLCJVUkwiLCJvcmlnaW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/auth/[...nextauth].ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/auth/[...nextauth].ts"));
module.exports = __webpack_exports__;

})();