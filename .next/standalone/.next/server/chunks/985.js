"use strict";
exports.id = 985;
exports.ids = [985];
exports.modules = {

/***/ 8985:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _QRCodeModal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2149);




const BodyNavbar = ()=>{
    const { 0: isDropdownOpen , 1: setIsDropdownOpen  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const toggleDropdown = ()=>{
        setIsDropdownOpen((prev)=>!prev);
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const handleScroll = ()=>{
            setIsDropdownOpen(false);
        };
        window.addEventListener("scroll", handleScroll);
        return ()=>{
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("nav", {
        className: "",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "relative",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "flex items-center cursor-pointer px-6 justify-between",
                    onClick: toggleDropdown,
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            className: "text-[black] font-medium",
                            children: "What is Grid"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                            className: "mx-2",
                            src: "/assets/dropdown_img.png",
                            alt: "Dropdown Icon",
                            height: "10px",
                            width: "15px"
                        })
                    ]
                }),
                isDropdownOpen && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "bg-[white] absolute left-0 w-screen mt-4 shadow-lg z-50",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                            className: "pb-2 text-[black]",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                        className: "block text-sm px-12 font-medium py-3 hover:bg-[#E6E6E6]",
                                        onClick: ()=>document.getElementById("what-is-GRID").scrollIntoView({
                                                behavior: "smooth"
                                            }),
                                        children: "What is Grid"
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                    className: "",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                        className: "block text-sm px-12 font-medium py-3 hover:bg-[#E6E6E6]",
                                        onClick: ()=>document.getElementById("Solutions").scrollIntoView({
                                                behavior: "smooth"
                                            }),
                                        children: "How it works"
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                    className: "",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                        className: "block text-sm px-12 font-medium py-3 hover:bg-[#E6E6E6]",
                                        onClick: ()=>document.getElementById("Next-steps").scrollIntoView({
                                                behavior: "smooth"
                                            }),
                                        children: "Future of Esports"
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "h-[1px] bg-[black] mx-4"
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "py-4 flex flex-col items-center mx-4 space-y-2",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_QRCodeModal__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {}),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                    className: `w-44 border border-blue-900 mx-4 py-2 rounded-lg font-medium hover:bg-blue-800`,
                                    children: "Try Grid AI"
                                })
                            ]
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BodyNavbar);


/***/ }),

/***/ 2149:
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
/* harmony import */ var _components_AndroidSVGComponent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1490);
/* harmony import */ var _public_assets_ApplePlayButton_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5442);





const QRCodeModal = (props)=>{
    const {} = props;
    const { 0: modalOpen , 1: setModalOpen  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const openLinkAndroid = ()=>{
        window.open("https://play.google.com/store/apps/details?id=com.esolutions.grid", "_blank");
    };
    const openLinkIOS = ()=>{
        window.open("https://apps.apple.com/us/app/grid-tournaments-events/id6447766313", "_blank");
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "flex justify-center",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                className: "border border-blue-900 mx-4 px-4 py-2 rounded-lg font-medium hover:bg-blue-800",
                onClick: ()=>setModalOpen(true),
                "aria-label": "Watch the video",
                children: "Download the app"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_modal__WEBPACK_IMPORTED_MODULE_2___default()), {
                isOpen: modalOpen,
                onRequestClose: ()=>setModalOpen(false),
                className: "fixed inset-0 flex items-center justify-center px-4 py-6 z-[1000]",
                overlayClassName: "fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-[999]",
                ariaHideApp: false,
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "relative max-w-2xl w-full lg:p-10 xs:p-6 bg-[#f2f2f2] rounded-xl",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                            onClick: ()=>setModalOpen(false),
                            className: "absolute top-2 right-2 bg-white text-2xl text-black rounded-lg lg:p-2 xs:p-0",
                            children: "✕"
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "bg-[#f2f2f2] text-center rounded-xl",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                    className: "text-xl font-semibold",
                                    children: "Download Grid Mobile"
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: " flex flex-wrap m-5 justify-around items-center",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "flex flex-col items-center justify-center xs:mb-4 md:mb-0 p-5 border-[1px] border-gray-400 rounded-2xl",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                    className: "mb-5 xs:hidden md:block",
                                                    width: "200px",
                                                    height: "200px",
                                                    alt: "app-store-img",
                                                    src: "/assets/play-code-img.png"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                    className: "cursor-pointer",
                                                    src: "../assets/GooglePlayButton.png",
                                                    onClick: openLinkAndroid,
                                                    width: "200px",
                                                    height: "100px"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "flex flex-col items-center justify-center p-5 border-[1px] border-gray-400 rounded-2xl",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                    className: "mb-5 xs:hidden md:block",
                                                    width: "200px",
                                                    height: "200px",
                                                    alt: "app-store-img",
                                                    src: "/assets/app-store-code.png"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_public_assets_ApplePlayButton_svg__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                                    onClick: openLinkIOS,
                                                    className: "cursor-pointer"
                                                })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (QRCodeModal);


/***/ })

};
;