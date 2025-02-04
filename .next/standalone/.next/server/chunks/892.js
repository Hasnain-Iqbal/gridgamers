"use strict";
exports.id = 892;
exports.ids = [892];
exports.modules = {

/***/ 8892:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _OtherNavbars__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1020);
/* harmony import */ var _HiddenNavbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8669);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);






const OtherHeader = ({ text  })=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();
    const { 0: activeLink , 1: setActiveLink  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)("Home");
    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{
        const path = router.pathname.split("/")[1];
        setActiveLink(path ? path.charAt(0).toUpperCase() + path.slice(1) : "Home");
    }, [
        router.pathname
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "bg-[white] w-[95%] mx-auto max-w-screen-2xl",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "relative bg-[white] z-20 flex items-center justify-between",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "flex items-center space-x-4",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                            href: "/",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                src: "assets/grid_logo_dark3.png",
                                alt: "Grid Logo",
                                className: "h-12"
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            className: "text-gray-400",
                            children: "|"
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("nav", {
                            className: "hidden md:flex items-center space-x-2 lg:space-x-6",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "relative group",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "flex items-center",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    className: "text-[black]",
                                                    children: "For Individuals"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                    className: "mx-2",
                                                    src: "/assets/dropdown_img.png",
                                                    height: "10px",
                                                    width: "15px"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "bg-[#f2f2f2] absolute lg:w-[200px] left-0 mt-2 shadow-lg z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300",
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                                className: "py-2 text-black",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                                            href: "/GridAI",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                className: "block text-sm px-1 lg:px-4 py-2 hover:bg-[#E6E6E6]",
                                                                onClick: ()=>setActiveLink("GridAI"),
                                                                children: "Grid AI"
                                                            })
                                                        })
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                                            href: "/GridAI",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                className: "block text-sm px-1 lg:px-4 py-2 hover:bg-[#E6E6E6]",
                                                                onClick: ()=>setActiveLink("GridAI"),
                                                                children: "Grid Mobile"
                                                            })
                                                        })
                                                    })
                                                ]
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "relative group",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "flex items-center",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    className: "text-[black]",
                                                    children: "For Organizations"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                    className: "mx-2",
                                                    src: "/assets/dropdown_img.png",
                                                    height: "10px",
                                                    width: "15px"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "bg-[#f2f2f2] absolute lg:w-[200px] left-0 mt-2 shadow-lg z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300",
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                                className: "py-2 text-black",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                                            href: "/GridAI",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                className: "block px-4 py-2 text-sm hover:bg-[#E6E6E6]",
                                                                onClick: ()=>setActiveLink("GridAI"),
                                                                children: "Grid AI Pro"
                                                            })
                                                        })
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                                            href: "/GridAI",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                className: "block px-4 py-2 text-sm hover:bg-[#E6E6E6]",
                                                                onClick: ()=>setActiveLink("GridAI"),
                                                                children: "Grid Web"
                                                            })
                                                        })
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                                            href: "#",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                className: "block px-4 py-2 text-sm hover:bg-[#E6E6E6]",
                                                                onClick: ()=>setActiveLink(""),
                                                                children: "GRID Scheduler"
                                                            })
                                                        })
                                                    })
                                                ]
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "relative group",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "flex items-center",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    className: "text-[black]",
                                                    children: "Company"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                    className: "mx-2",
                                                    src: "/assets/dropdown_img.png",
                                                    height: "10px",
                                                    width: "15px"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "bg-[#f2f2f2] absolute lg:w-[200px] left-0 mt-2 shadow-lg z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300",
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                                className: "py-2 text-black",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                                            href: "/CareersPage",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                className: "block px-4 py-2 text-sm hover:bg-[#E6E6E6]",
                                                                onClick: ()=>setActiveLink("CareersPage"),
                                                                children: "Careers"
                                                            })
                                                        })
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                                            href: "/Accessibility",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                className: "block px-4 py-2 text-sm hover:bg-[#E6E6E6]",
                                                                onClick: ()=>setActiveLink("Accessibility"),
                                                                children: "Accessibility"
                                                            })
                                                        })
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                                            href: "/DevicesSafety",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                className: "block px-4 py-2 text-sm hover:bg-[#E6E6E6]",
                                                                onClick: ()=>setActiveLink("DevicesSafety"),
                                                                children: "Sustainability"
                                                            })
                                                        })
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                                            href: "/AccessibilityNewPg",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                className: "block px-4 py-2 text-sm hover:bg-[#E6E6E6]",
                                                                onClick: ()=>setActiveLink("AccessibilityNewPg"),
                                                                children: "New page"
                                                            })
                                                        })
                                                    })
                                                ]
                                            })
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_HiddenNavbar__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {})
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "hidden xsm:flex items-center space-x-4",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                        href: "https://adminweb.stage.gridgamers.com/#/auth/sign-in/default",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                            className: "bg-[black] text-white-300 px-4 py-2 font-medium hover:bg-gray-800 rounded-md",
                            children: "Sign in"
                        })
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (OtherHeader);


/***/ }),

/***/ 1020:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);



const OtherNavbar = ({ text  })=>{
    const { 0: isDropdownOpen , 1: setIsDropdownOpen  } = useState(false);
    const { 0: isPersonalUseDropdownOpen , 1: setIsPersonalUseDropdownOpen  } = useState(false);
    const { 0: isOrganizationDropdownOpen , 1: setIsOrganizationDropdownOpen  } = useState(false);
    const toggleDropdown = ()=>{
        setIsDropdownOpen(!isDropdownOpen);
    };
    const togglePersonalUseDropdown = ()=>{
        setIsPersonalUseDropdownOpen(!isPersonalUseDropdownOpen);
    };
    const toggleOrganizationDropdown = ()=>{
        setIsOrganizationDropdownOpen(!isOrganizationDropdownOpen);
    };
    const closeDropdown = ()=>{
        setIsDropdownOpen(false);
        setIsPersonalUseDropdownOpen(false);
        setIsOrganizationDropdownOpen(false);
    };
    useEffect(()=>{
        const handleClickOutside = (event)=>{
            const navbar = document.querySelector(".relative");
            if (navbar && !navbar.contains(event.target)) {
                closeDropdown();
            }
        };
        const handleScroll = ()=>{
            closeDropdown();
        };
        document.addEventListener("click", handleClickOutside);
        window.addEventListener("scroll", handleScroll);
        return ()=>{
            document.removeEventListener("click", handleClickOutside);
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    return /*#__PURE__*/ _jsx("nav", {
        className: "",
        children: /*#__PURE__*/ _jsxs("div", {
            className: "relative",
            children: [
                /*#__PURE__*/ _jsxs("div", {
                    className: "flex items-center cursor-pointer",
                    onClick: toggleDropdown,
                    children: [
                        /*#__PURE__*/ _jsxs("div", {
                            className: "flex items-center space-x-4 text-[black] ml-3 text-lg",
                            children: [
                                /*#__PURE__*/ _jsx("p", {
                                    className: "text-[black] font-semibold",
                                    children: "GRID"
                                }),
                                /*#__PURE__*/ _jsx("p", {
                                    className: "text-[black]",
                                    children: "|"
                                }),
                                /*#__PURE__*/ _jsx("p", {
                                    className: "text-[black] ",
                                    children: text
                                })
                            ]
                        }),
                        /*#__PURE__*/ _jsx("img", {
                            className: "mx-2",
                            src: "/assets/dropdown_img.png",
                            alt: "Dropdown Icon",
                            height: "10px",
                            width: "15px"
                        })
                    ]
                }),
                isDropdownOpen && /*#__PURE__*/ _jsxs("div", {
                    className: "bg-[#f2f2f2] fixed left-0 w-screen mt-5 shadow-lg z-50",
                    children: [
                        /*#__PURE__*/ _jsxs("ul", {
                            className: "pb-1 text-[black]",
                            children: [
                                /*#__PURE__*/ _jsxs("li", {
                                    className: "border-b border-[#e6e6e6]",
                                    children: [
                                        /*#__PURE__*/ _jsxs("div", {
                                            className: "flex justify-between items-center text-sm px-4 py-3 cursor-pointer hover:bg-[#E6E6E6]",
                                            onClick: togglePersonalUseDropdown,
                                            children: [
                                                "For Personal Use",
                                                /*#__PURE__*/ _jsx("img", {
                                                    src: "/assets/dropdown_img.png",
                                                    alt: "Dropdown Icon",
                                                    height: "10px",
                                                    width: "15px",
                                                    className: isPersonalUseDropdownOpen ? "rotate-180" : "rotate-0"
                                                })
                                            ]
                                        }),
                                        isPersonalUseDropdownOpen && /*#__PURE__*/ _jsxs("ul", {
                                            className: "",
                                            children: [
                                                /*#__PURE__*/ _jsx("li", {
                                                    className: " border-[#e6e6e6] ",
                                                    children: /*#__PURE__*/ _jsx(Link, {
                                                        href: "/GridAI",
                                                        children: /*#__PURE__*/ _jsx("a", {
                                                            className: "block hover:bg-[#E6E6E6]",
                                                            onClick: ()=>setActiveLink("GridAI"),
                                                            children: /*#__PURE__*/ _jsx("p", {
                                                                className: "text-sm mx-10 border-t border-[#e6e6e6] py-3 text-[black] ",
                                                                children: "Grid AI"
                                                            })
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ _jsx("li", {
                                                    className: " border-[#e6e6e6] ",
                                                    children: /*#__PURE__*/ _jsx(Link, {
                                                        href: "/GridAI",
                                                        children: /*#__PURE__*/ _jsx("a", {
                                                            className: "block hover:bg-[#E6E6E6]",
                                                            onClick: ()=>setActiveLink("GridAI"),
                                                            children: /*#__PURE__*/ _jsx("p", {
                                                                className: "text-sm mx-10 border-t border-[#e6e6e6] py-3 text-[black] ",
                                                                children: "Grid Mobile"
                                                            })
                                                        })
                                                    })
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ _jsxs("li", {
                                    className: "border-b border-[#e6e6e6]",
                                    children: [
                                        /*#__PURE__*/ _jsxs("div", {
                                            className: "flex justify-between items-center text-sm px-4 py-3 cursor-pointer hover:bg-[#E6E6E6]",
                                            onClick: toggleOrganizationDropdown,
                                            children: [
                                                "For Organizations",
                                                /*#__PURE__*/ _jsx("img", {
                                                    src: "/assets/dropdown_img.png",
                                                    alt: "Dropdown Icon",
                                                    height: "10px",
                                                    width: "15px",
                                                    className: isOrganizationDropdownOpen ? "rotate-180" : "rotate-0"
                                                })
                                            ]
                                        }),
                                        isOrganizationDropdownOpen && /*#__PURE__*/ _jsx("ul", {
                                            className: "",
                                            children: /*#__PURE__*/ _jsx("li", {
                                                className: " border-[#e6e6e6] ",
                                                children: /*#__PURE__*/ _jsx(Link, {
                                                    href: "/GridOrganizations",
                                                    children: /*#__PURE__*/ _jsx("a", {
                                                        className: "block hover:bg-[#E6E6E6]",
                                                        onClick: ()=>setActiveLink("GridAI"),
                                                        children: /*#__PURE__*/ _jsx("p", {
                                                            className: "text-sm mx-10 border-t border-[#e6e6e6] py-3 text-[black] ",
                                                            children: "Grid Web"
                                                        })
                                                    })
                                                })
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ _jsx("li", {
                                    children: /*#__PURE__*/ _jsx(Link, {
                                        href: "/#",
                                        children: /*#__PURE__*/ _jsx("a", {
                                            className: "block text-sm px-4 py-3 hover:bg-[#E6E6E6]",
                                            onClick: closeDropdown,
                                            children: "FAQs"
                                        })
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ _jsx("div", {
                            className: "h-[1px] bg-[black] mx-4"
                        }),
                        /*#__PURE__*/ _jsxs("div", {
                            className: "py-4 flex flex-col mx-4 space-y-2",
                            children: [
                                /*#__PURE__*/ _jsx("button", {
                                    className: "bg-[black] text-white-300 px-4 py-2 rounded-lg font-medium hover:bg-blue-800",
                                    children: "Download the app"
                                }),
                                /*#__PURE__*/ _jsx("button", {
                                    className: "border border-blue-900 text-blue-900 px-4 py-2 rounded-lg font-medium hover:bg-blue-900 hover:text-white",
                                    children: "Try Copilot"
                                })
                            ]
                        })
                    ]
                })
            ]
        })
    });
};
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (OtherNavbar)));


/***/ })

};
;