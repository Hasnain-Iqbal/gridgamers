"use strict";
exports.id = 807;
exports.ids = [807];
exports.modules = {

/***/ 3807:
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
            viewBox: "0 0 100 100",
            style: {
                fill: "black"
            },
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M25 93.704c0-1.708.61-3.172 1.83-4.392L66.142 50 26.83 10.688C25.61 9.468 25 8.004 25 6.296c0-1.708.598-3.185 1.794-4.43C27.989.623 29.466 0 31.223 0c1.708 0 3.172.61 4.392 1.83l43.777 43.778c1.22 1.22 1.83 2.684 1.83 4.392 0 1.708-.61 3.172-1.83 4.392L35.615 98.17c-1.22 1.22-2.684 1.83-4.392 1.83-1.757 0-3.234-.622-4.43-1.867C25.599 96.89 25 95.413 25 93.704Z"
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
            viewBox: "0 0 100 100",
            style: {
                fill: "black"
            },
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M19 50c0-1.708.61-3.172 1.83-4.392L64.608 1.83C65.828.61 67.292 0 69 0c.878 0 1.696.17 2.452.512a6.618 6.618 0 0 1 1.977 1.355 6.618 6.618 0 0 1 1.354 1.976c.342.757.513 1.574.513 2.453 0 1.66-.635 3.123-1.904 4.392L34.081 50l39.311 39.312c.635.634 1.11 1.293 1.428 1.976.317.684.476 1.489.476 2.416 0 .879-.171 1.696-.513 2.453a6.618 6.618 0 0 1-1.354 1.976 6.618 6.618 0 0 1-1.977 1.355A5.888 5.888 0 0 1 69 100c-1.708 0-3.172-.61-4.392-1.83L20.83 54.392C19.61 53.172 19 51.708 19 50Z"
            })
        })
    });
}
const ContainerCarousel = ({ imageArr  })=>{
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(NextArrow, {}),
        prevArrow: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(PrevArrow, {})
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "relative w-full",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "slider-container w-[100%] 2xl:max-w-screen-2xl mx-auto border-0 bg-[#f1f8fa] rounded-[50px] px-[20px]",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_slick__WEBPACK_IMPORTED_MODULE_2___default()), {
                ...settings,
                children: imageArr === null || imageArr === void 0 ? void 0 : imageArr.map((data, i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "flex items-center justify-center h-full py-10",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "rounded-3xl px-[60px] my-auto p-4 flex flex-col-reverse md:flex-row gap-4",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "flex flex-col justify-center items-start text-start",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            className: "text-[black] mt-[30px] mb-6 text-md font-semibold px-6 py-1 rounded-2xl bg-[#D8ECA3]",
                                            children: "Copilot"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                            className: "text-3xl font-semibold text-black",
                                            children: data.title
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            style: {
                                                fontFamily: "Inter"
                                            },
                                            className: "text-[black] mt-[30px] mb-6 text-[16px]",
                                            children: data.body
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "flex justify-end",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                        className: "rounded-xl w-full h-full object-cover shadow-xl",
                                        src: data.image,
                                        alt: "Image"
                                    })
                                })
                            ]
                        })
                    }, i))
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ContainerCarousel);


/***/ })

};
;