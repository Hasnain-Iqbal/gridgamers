"use strict";
exports.id = 443;
exports.ids = [443];
exports.modules = {

/***/ 1443:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9931);
/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_modal__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_youtube__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9294);
/* harmony import */ var react_youtube__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_youtube__WEBPACK_IMPORTED_MODULE_4__);





const VideoModal = ({ addThumNail , thumb , thumbWidth , thumbHeight , thumbAlt , video , videoWidth , videoHeight ,  })=>{
    const { 0: modalOpen , 1: setModalOpen  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const videoRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "flex justify-center",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                className: "group relative flex items-center justify-center rounded-3xl focus:outline-none focus-visible:ring focus-visible:ring-indigo-300",
                onClick: ()=>setModalOpen(true),
                "aria-label": "Watch the video",
                children: [
                    addThumNail && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                        className: "rounded-3xl shadow-2xl transition-shadow duration-300 ease-in-out text-transparent",
                        src: thumb,
                        width: thumbWidth,
                        height: thumbHeight,
                        alt: "img"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
                        className: "pointer-events-none absolute transition-transform duration-300 ease-in-out group-hover:scale-110",
                        xmlns: "http://www.w3.org/2000/svg",
                        width: "72",
                        height: "72",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("circle", {
                                cx: "36",
                                cy: "36",
                                r: "36",
                                fill: "white" // Force white fill
                                ,
                                fillOpacity: ".9" // Ensure it's fully opaque
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                className: "fill-indigo-500 drop-shadow-2xl",
                                d: "M44 36a.999.999 0 0 0-.427-.82l-10-7A1 1 0 0 0 32 29V43a.999.999 0 0 0 1.573.82l10-7A.995.995 0 0 0 44 36V36c0 .001 0 .001 0 0Z"
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_modal__WEBPACK_IMPORTED_MODULE_2___default()), {
                isOpen: modalOpen,
                onRequestClose: ()=>setModalOpen(false),
                className: "fixed inset-0 flex items-center justify-center px-4 py-6",
                overlayClassName: "fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm",
                ariaHideApp: false,
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "relative max-w-5xl w-full lg:p-10 xs:p-6 bg-[#f2f2f2] rounded-lg",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                            onClick: ()=>setModalOpen(false),
                            className: "absolute top-2 right-2 bg-white text-2xl text-black rounded-lg lg:p-2 xs:p-0",
                            children: "✕"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_youtube__WEBPACK_IMPORTED_MODULE_4___default()), {
                            videoId: "tKK1W3ADNCA",
                            id: "tKK1W3ADNCA",
                            style: {
                                outline: "none",
                                border: "none",
                                boxShadow: "none"
                            },
                            className: "container rounded-md",
                            iframeClassName: "responsive-iframe",
                            loading: "eager"
                        })
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (VideoModal);


/***/ })

};
;