"use strict";
(() => {
var exports = {};
exports.id = 396;
exports.ids = [396];
exports.modules = {

/***/ 8442:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Home),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

function Home({ privacyPolicy  }) {
    console.log({
        privacyPolicy
    });
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "xs:px-0 md:px-20 3xl:px-0 xs:max-w-screen-xs sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl py-0 md:py-16 mt-[40px] lg:mt-24 mx-auto",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                className: " text-center text-[#298be1] font-semibold mt-[24px] leading-10 xs:text-[18px] lg:text-[32px]",
                children: "Privacy Policy"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "text-[#fff] text-justify",
                dangerouslySetInnerHTML: {
                    __html: privacyPolicy
                }
            })
        ]
    });
}
async function getStaticProps() {
    // Call the fetch method and passing
    // the pokeAPI link
    const response = await fetch("https://hubapi.gridgamers.com/api/v1/setting/privacypolicy-termscondition?SubCatagoryId=12");
    // Parse the JSON
    const data = await (response === null || response === void 0 ? void 0 : response.json());
    // Finally we return the result
    // inside props as allPokemons
    return {
        props: {
            privacyPolicy: data === null || data === void 0 ? void 0 : data.response.subCategoryDescription
        }
    };
}


/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(8442));
module.exports = __webpack_exports__;

})();