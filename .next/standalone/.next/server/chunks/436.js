"use strict";
exports.id = 436;
exports.ids = [436];
exports.modules = {

/***/ 2436:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8096);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_2__);





function NextArrow(props) {
    const { onClick  } = props;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        onClick: onClick,
        className: "absolute top-1/2 right-0 transform -translate-y-1/2 z-10 bg-white rounded-full w-10 h-10 flex items-center justify-center shadow-md hover:bg-gray-100 cursor-pointer",
        style: {
            maxWidth: "40px",
            maxHeight: "40px"
        },
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 120 100",
            style: {
                fill: "black"
            },
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "m70.2373565 0c1.6990435 0 3.1569652.61020408 4.3707131 1.82959184l43.5708004 43.77857146c1.213747 1.2183673 1.82113 2.6836734 1.82113 4.3918367s-.607383 3.172449-1.82113 4.3918367l-43.5708004 43.7785715c-1.2137479 1.2193877-2.6696348 1.8295918-4.3707131 1.8295918-1.749913 0-3.2190261-.622449-4.4093739-1.8673469-1.188313-1.2428572-1.7845043-2.7193878-1.7845043-4.4285715 0-1.7081632.6073826-3.1724489 1.8211304-4.3918367l33.0326609-33.1897959h-92.79292177c-3.37133822 0-6.10434783-2.7411138-6.10434783-6.122449s2.73300961-6.122449 6.10434783-6.122449h92.79292177l-33.0326609-33.1897959c-1.2137478-1.21836734-1.8211304-2.68367347-1.8211304-4.39183673 0-1.70816327.5951739-3.18469388 1.7855217-4.42959184 1.1893304-1.24387755 2.6594609-1.86632653 4.4083565-1.86632653z"
            })
        })
    });
}
function PrevArrow(props) {
    const { onClick  } = props;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        onClick: onClick,
        className: "absolute top-1/2 left-0 transform -translate-y-1/2 z-10 bg-white rounded-full w-10 h-10 flex items-center justify-center shadow-md hover:bg-gray-100 cursor-pointer",
        style: {
            maxWidth: "40px",
            maxHeight: "40px"
        },
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 120 100",
            style: {
                fill: "black"
            },
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "m49.7626435 0c-1.6990435 0-3.1569652.61020408-4.3707131 1.82959184l-43.57079997 43.77857146c-1.21374782 1.2183673-1.82113043 2.6836734-1.82113043 4.3918367s.60738261 3.172449 1.82113043 4.3918367l43.57079997 43.7785715c1.2137479 1.2193877 2.6696348 1.8295918 4.3707131 1.8295918 1.749913 0 3.2190261-.622449 4.4093739-1.8673469 1.188313-1.2428572 1.7845043-2.7193878 1.7845043-4.4285715 0-1.7081632-.6073826-3.1724489-1.8211304-4.3918367l-33.0326609-33.1897959h92.7929216c3.371338 0 6.104348-2.7411138 6.104348-6.122449s-2.73301-6.122449-6.104348-6.122449h-92.7929216l33.0326609-33.1897959c1.2137478-1.21836734 1.8211304-2.68367347 1.8211304-4.39183673 0-1.70816327-.5951739-3.18469388-1.7855217-4.42959184-1.1893304-1.24387755-2.6594609-1.86632653-4.4083565-1.86632653z"
            })
        })
    });
}
function ArrToCaro({ imageArr  }) {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(NextArrow, {}),
        prevArrow: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(PrevArrow, {})
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "relative w-full",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "slider-container w-full max-w-[500px] mx-auto mt-8 md:hidden",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_slick__WEBPACK_IMPORTED_MODULE_2___default()), {
                    ...settings,
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                    src: "https://edgestatic.azureedge.net/shared/cms/lrs1c69a1j/section-images/b2d8b087d1c44d46a3610ba4da6cb290.png",
                                    className: "max-w-[450px] max-h-[450px] mx-auto w-full px-[40px]"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    className: "text-[black] text-3xl mt-4 font-bold",
                                    children: "Prepare for a pet"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                    src: "https://edgestatic.azureedge.net/shared/cms/lrs1c69a1j/section-images/fa28de91a3c1429e8c52fec3b1376816.png",
                                    className: "max-w-[450px] max-h-[450px] mx-auto w-full px-[40px]"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    className: "text-[black] text-3xl mt-4 font-bold",
                                    children: "Get a pros vs. cons list"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                    src: "https://edgestatic.azureedge.net/shared/cms/lrs1c69a1j/section-images/bf2da9b421774258afd238777c007cd9.png",
                                    className: "max-w-[450px] max-h-[450px] mx-auto w-full px-[40px]"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    className: "text-[black] text-3xl mt-4 font-bold",
                                    children: "Plan a trip"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                    src: "https://edgestatic.azureedge.net/shared/cms/lrs1c69a1j/section-images/d0dcb72a360a4879b569f3f0eb74664f.png",
                                    className: "max-w-[450px] max-h-[450px] mx-auto w-full px-[40px]"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    className: "text-[black] text-3xl mt-4 font-bold",
                                    children: "Write something"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                    src: "https://edgestatic.azureedge.net/shared/cms/lrs1c69a1j/section-images/63b0cf4b50514ecaac0ac9b8b51ae40f.png",
                                    className: "max-w-[450px] max-h-[450px] mx-auto w-full px-[40px]"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    className: "text-[black] text-3xl mt-4 font-bold",
                                    children: "Ask for feedback"
                                })
                            ]
                        })
                    ]
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "hidden md:flex",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "flex p-8 bg-[white] rounded-[50px] w-full justify-between",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                    src: "https://edgestatic.azureedge.net/shared/cms/lrs1c69a1j/section-images/b2d8b087d1c44d46a3610ba4da6cb290.png",
                                    height: "200px",
                                    width: "200px"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    className: "text-[black] font-bold",
                                    children: "Prepare for a pet"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                    src: "https://edgestatic.azureedge.net/shared/cms/lrs1c69a1j/section-images/fa28de91a3c1429e8c52fec3b1376816.png",
                                    height: "200px",
                                    width: "200px"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    className: "text-[black] font-bold",
                                    children: "Get a pros vs. cons list"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                    src: "https://edgestatic.azureedge.net/shared/cms/lrs1c69a1j/section-images/bf2da9b421774258afd238777c007cd9.png",
                                    height: "200px",
                                    width: "200px"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    className: "text-[black] font-bold",
                                    children: "Plan a trip"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                    src: "https://edgestatic.azureedge.net/shared/cms/lrs1c69a1j/section-images/d0dcb72a360a4879b569f3f0eb74664f.png",
                                    height: "200px",
                                    width: "200px"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    className: "text-[black] font-bold",
                                    children: "Write something"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                    src: "https://edgestatic.azureedge.net/shared/cms/lrs1c69a1j/section-images/63b0cf4b50514ecaac0ac9b8b51ae40f.png",
                                    height: "200px",
                                    width: "200px"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    className: "text-[black] font-bold",
                                    children: "Ask for feedback"
                                })
                            ]
                        })
                    ]
                })
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ArrToCaro);


/***/ })

};
;