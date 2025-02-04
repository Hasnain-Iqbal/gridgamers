"use strict";
(() => {
var exports = {};
exports.id = 76;
exports.ids = [76,842];
exports.modules = {

/***/ 4095:
/***/ (() => {

/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/grid-logo-new.5e424564.svg","height":160,"width":544});

/***/ }),

/***/ 5673:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ pages_Organization)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: ./components/HiddenNavbar.js
var HiddenNavbar = __webpack_require__(8669);
// EXTERNAL MODULE: ./public/assets/grid-logo-new.svg
var grid_logo_new = __webpack_require__(4095);
// EXTERNAL MODULE: ./components/BodyNavbar.js
var BodyNavbar = __webpack_require__(8985);
// EXTERNAL MODULE: ./components/VideoModal.js
var VideoModal = __webpack_require__(1443);
// EXTERNAL MODULE: ./components/QRCodeModal.js
var QRCodeModal = __webpack_require__(2149);
;// CONCATENATED MODULE: ./components/OrgBodyNavbar.js




const OrgBodyNavbar = ()=>{
    const { 0: isDropdownOpen , 1: setIsDropdownOpen  } = (0,external_react_.useState)(false);
    const toggleDropdown = ()=>{
        setIsDropdownOpen((prev)=>!prev);
    };
    (0,external_react_.useEffect)(()=>{
        const handleScroll = ()=>{
            setIsDropdownOpen(false);
        };
        window.addEventListener("scroll", handleScroll);
        return ()=>{
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    return /*#__PURE__*/ jsx_runtime_.jsx("nav", {
        className: "",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "relative",
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "flex items-center cursor-pointer px-6 justify-between",
                    onClick: toggleDropdown,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            className: "text-[black] font-medium",
                            children: "What is Grid"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("img", {
                            className: "mx-2",
                            src: "/assets/dropdown_img.png",
                            alt: "Dropdown Icon",
                            height: "10px",
                            width: "15px"
                        })
                    ]
                }),
                isDropdownOpen && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "bg-[white] absolute left-0 w-screen mt-4 shadow-lg z-50",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                            className: "pb-2 text-[black]",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                        className: "block text-sm px-12 font-medium py-3 hover:bg-[#E6E6E6]",
                                        onClick: ()=>document.getElementById("what-is-GRID").scrollIntoView({
                                                behavior: "smooth"
                                            }),
                                        children: "What is Grid"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    className: "",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                        className: "block text-sm px-12 font-medium py-3 hover:bg-[#E6E6E6]",
                                        onClick: ()=>document.getElementById("Solutions").scrollIntoView({
                                                behavior: "smooth"
                                            }),
                                        children: "We work for you"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    className: "",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                        className: "block text-sm px-12 font-medium py-3 hover:bg-[#E6E6E6]",
                                        onClick: ()=>document.getElementById("Next-steps").scrollIntoView({
                                                behavior: "smooth"
                                            }),
                                        children: "Grow with us"
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "h-[1px] bg-[black] mx-4"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "py-4 flex flex-col items-center mx-4 space-y-2",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                    className: `w-60 border border-blue-900 mx-4 py-2 rounded-lg font-medium hover:bg-blue-800`,
                                    children: "Try Grid Enterprise Portal"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                    className: "bg-[black] text-white-300 px-4 py-2 rounded-lg font-medium hover:bg-blue-800",
                                    children: "Try Grid AI Pro (Comming Soon)"
                                })
                            ]
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const components_OrgBodyNavbar = (OrgBodyNavbar);

;// CONCATENATED MODULE: ./pages/Organization.js




// Import Swiper styles








const Organization = ({})=>{
    const { 0: isSticky , 1: setIsSticky  } = (0,external_react_.useState)(false);
    const sectionRef = (0,external_react_.useRef)(null);
    const router = (0,router_.useRouter)();
    const { 0: animate , 1: setAnimate  } = (0,external_react_.useState)(false);
    const { 0: activeLink , 1: setActiveLink  } = (0,external_react_.useState)("Home");
    (0,external_react_.useEffect)(()=>{
        const path = router.pathname.split("/")[1];
        setActiveLink(path ? path.charAt(0).toUpperCase() + path.slice(1) : "Home");
    }, [
        router.pathname
    ]);
    (0,external_react_.useEffect)(()=>{
        // Trigger animation after the component mounts
        const timeout = setTimeout(()=>setAnimate(true), 100); // Small delay for better effect
        return ()=>clearTimeout(timeout);
    }, []);
    (0,external_react_.useEffect)(()=>{
        const handleScroll = ()=>{
            if (sectionRef.current) {
                const sectionTop = sectionRef.current.getBoundingClientRect().top;
                setIsSticky(sectionTop <= 0);
            }
        };
        window.addEventListener("scroll", handleScroll);
        return ()=>window.removeEventListener("scroll", handleScroll);
    }, []);
    const aiCompanionlist = [
        {
            name: "Be confident in growing your business or managing your organizations needs. GRID AI does the hard work, so you don’t have to.",
            number: "Simplify your life",
            // icon: "https://s7d2.scene7.com/is/content/microsoftcorp/373238-Copilot-Feature-Card-01",
            icon: "https://s7d2.scene7.com/is/content/microsoftcorp/card-business-advanced-ai-331170"
        },
        {
            name: "Questions needs fast answers in todays world, let us help you navigate your day with the right answers and insights.",
            number: "Getting help without the wait",
            // icon: "https://s7d2.scene7.com/is/content/microsoftcorp/373238-Copilot-Feature-Card-02",
            icon: "https://s7d2.scene7.com/is/content/microsoftcorp/card-business-seamlessly-integrated-331170"
        },
        {
            name: " Transform manual efforts into simple and quick solutions. Ease of use is the name of the game.",
            number: "Tools you didn’t even know you needed",
            // icon: "https://s7d2.scene7.com/is/content/microsoftcorp/373238-Copilot-Feature-Card-03",
            icon: "https://s7d2.scene7.com/is/content/microsoftcorp/card-business-enterprise-grade-security-331170"
        }, 
    ];
    const copilotMeetlist = [
        {
            name: "GRID AI Pro",
            textHeading: "Drive traffic to your events, utilize analytics to earn directly, manage hundreds of people at a moments notice; the power of knowledge personalized to your needs.",
            heading: "Get priority access",
            icon: "https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Copilot-Solutions-Get-priority-access-4000x2250?resMode=sharp2&op_usm=1.5,0.65,15,0&wid=2000&hei=1150&qlt=100&fit=constrain",
            btn: "Explore GRID AI Pro (Coming Soon)"
        },
        {
            name: "GRID Enterprise Portal",
            textHeading: "Oversee multiple facilities, utilize analytics to boost profits and reduce costs, boost visibility and grow to new heights.",
            heading: "Evolving events management with faster solutions.",
            icon: "https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Copilot-Solutions-Discover-4000x2250?resMode=sharp2&op_usm=1.5,0.65,15,0&wid=2000&hei=1125&qlt=100&fit=constrain",
            btn: "Explore GRID Enterprise Portal"
        },
        {
            name: "GRID + Scheduler",
            textHeading: "Know what your players want, when they want it and we calculate what’s needed to make it work. Convenience of an all-in-one system, to help you succeed.",
            heading: "Start your events right",
            icon: "https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Copilot-Solutions-Power-up-4000x2250?resMode=sharp2&op_usm=1.5,0.65,15,0&wid=2000&hei=1125&qlt=100&fit=constrain",
            // icon: "https://s7d2.scene7.com/is/content/microsoftcorp/373238-copilot-neutral-life-hero-v2-01"
            btn: "Explore GRID + Scheduler"
        }, 
    ];
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: " ",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "relative bg-[white] z-20 flex items-center justify-between px-6 xl:px-40 py-4",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "flex items-center space-x-4",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        href: "/",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                            src: "assets/grid_logo_dark3.png",
                                            alt: "Grid Logo",
                                            className: "w-full lg:max-w-[100px] xs:max-w-[80px] h-auto mb-3"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: "text-gray-400",
                                        children: "|"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("nav", {
                                        className: "hidden md:flex items-center space-x-2 lg:space-x-6",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "relative group",
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        className: "flex items-center",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                className: "text-[black]",
                                                                children: "For Individuals"
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                className: "mx-2",
                                                                src: "/assets/dropdown_img.png",
                                                                height: "10px",
                                                                width: "15px"
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "bg-[#f2f2f2] absolute lg:w-[200px] left-0 mt-2 shadow-lg z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300",
                                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                            className: "py-2 text-black",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                        href: "/GridAI",
                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                            className: "block text-sm px-1 lg:px-4 py-2 hover:bg-[#E6E6E6]",
                                                                            onClick: ()=>setActiveLink("GridAI"),
                                                                            children: "Grid AI"
                                                                        })
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                        href: "/GridAI",
                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
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
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "relative group",
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        className: "flex items-center",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                className: "text-[black]",
                                                                children: "For Organizations"
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                className: "mx-2",
                                                                src: "/assets/dropdown_img.png",
                                                                height: "10px",
                                                                width: "15px"
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "bg-[#f2f2f2] absolute lg:w-[200px] left-0 mt-2 shadow-lg z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300",
                                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                            className: "py-2 text-black",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                        href: "/GridAI",
                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                            className: "block text-sm px-1 lg:px-4 py-2 hover:bg-[#E6E6E6]",
                                                                            onClick: ()=>setActiveLink("GridAI"),
                                                                            children: "Grid AI Pro"
                                                                        })
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                        href: "/GridAI",
                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                            className: "block px-4 py-2 text-sm hover:bg-[#E6E6E6]",
                                                                            onClick: ()=>setActiveLink("GridAI"),
                                                                            children: "Grid Web"
                                                                        })
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                        href: "#",
                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                            className: "block px-4 py-2 text-sm hover:bg-[#E6E6E6]",
                                                                            onClick: ()=>setActiveLink(""),
                                                                            children: "Launch Scheduler"
                                                                        })
                                                                    })
                                                                })
                                                            ]
                                                        })
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "relative group",
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        className: "flex items-center",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                className: "text-[black]",
                                                                children: "Company"
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                className: "mx-2",
                                                                src: "/assets/dropdown_img.png",
                                                                height: "10px",
                                                                width: "15px"
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "bg-[#f2f2f2] absolute lg:w-[200px] left-0 mt-2 shadow-lg z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300",
                                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                            className: "py-2 text-black",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                        href: "/CareersPage",
                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                            className: "block px-4 py-2 text-sm hover:bg-[#E6E6E6]",
                                                                            onClick: ()=>setActiveLink("CareersPage"),
                                                                            children: "Careers"
                                                                        })
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                        href: "/Accessibility",
                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                            className: "block px-4 py-2 text-sm hover:bg-[#E6E6E6]",
                                                                            onClick: ()=>setActiveLink("Accessibility"),
                                                                            children: "Accessibility"
                                                                        })
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                        href: "/DevicesSafety",
                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                            className: "block px-4 py-2 text-sm hover:bg-[#E6E6E6]",
                                                                            onClick: ()=>setActiveLink("DevicesSafety"),
                                                                            children: "Sustainability"
                                                                        })
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                        href: "/AccessibilityNewPg",
                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
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
                                    /*#__PURE__*/ jsx_runtime_.jsx(HiddenNavbar/* default */.Z, {})
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "hidden xsm:flex items-center space-x-4",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    href: "https://adminweb.stage.gridgamers.com/#/auth/sign-in/default",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                        className: "bg-[black] text-white-300 px-4 py-2 font-medium hover:bg-gray-800 rounded-md",
                                        children: "Sign in"
                                    })
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        style: {
                            width: "100%"
                        },
                        children: /*#__PURE__*/ jsx_runtime_.jsx("video", {
                            className: " block md:absolute top-0 left-0 w-full h-full object-cover",
                            src: "https://s7d2.scene7.com/is/content/microsoftcorp/copilot-neutral-business-hero-331170",
                            autoPlay: true,
                            muted: true,
                            loop: false
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: `relative max-w-7xl mx-auto px-6 md:py-16 xs:py-10 md:h-[85vh] md:px-12 flex flex-col justify-center items-center text-center transition-all duration-700 ease-in-out transform ${animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                className: " hidden md:block text-5xl lg:text-6xl font-semibold text-gray-900 mb-4",
                                children: "Empower your organization"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                src: "assets/grid_logo_dark2.png",
                                alt: "logo",
                                className: "w-full max-w-[230px] h-auto mb-3"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                className: " block md:hidden text-5xl lg:text-6xl font-semibold text-gray-900 mb-4",
                                children: "Tackle any challenge with GRID"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                className: "text-[black] text-lg mb-6 max-w-3xl text-balance leading-relaxed",
                                children: "The Ultimate Solution for Gaming, Sports, and Hobby Events."
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "mb-10",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "my-5",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(VideoModal/* default */.Z, {
                                            addThumNail: true
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        "ocr-component-name": "icon",
                                        className: "ocr-icon d-inline-flex",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            className: "glyph-prepend glyph-prepend-play-solid",
                                            role: "presentation",
                                            "aria-hidden": "true"
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: " flex-col sm:flex-row flex px-2 py-2 bg-[white] rounded-[2.5rem] sm:rounded-[12.5rem] ",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        activeClass: "active",
                                        href: "/",
                                        spy: true,
                                        smooth: true,
                                        duration: 1000,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                            onClick: ()=>{
                                                setActiveLink("Home");
                                            },
                                            className: "bg-[white] text-[black] px-14 py-6 font-medium hover:bg-gray-100" + (activeLink === "Home" ? " text-[#19BAEE] animation-active " : " text-[black] hover:text-[black] "),
                                            style: {
                                                borderRadius: "12.5rem",
                                                cursor: "pointer"
                                            },
                                            children: "For Individuals"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                        className: "bg-[black] text-white-300 px-14 py-6 font-medium hover:bg-gray-200",
                                        style: {
                                            borderRadius: "12.5rem"
                                        },
                                        children: "For Organizations"
                                    })
                                ]
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        ref: sectionRef,
                        className: "relative bg-[white] xl:px-40",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: " hidden md:flex justify-between items-center px-6 lg:px-12 py-4",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "flex items-center space-x-8",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                                                onClick: ()=>document.getElementById("what-is-GRID").scrollIntoView({
                                                        behavior: "smooth"
                                                    }),
                                                className: "text-gray-800 font-medium hover:text-blue-600 relative",
                                                children: [
                                                    "What is Grid",
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "absolute left-0 right-0 h-[2px] bg-blue-600 mt-1 rounded-full"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                                onClick: ()=>document.getElementById("Solutions").scrollIntoView({
                                                        behavior: "smooth"
                                                    }),
                                                className: "text-gray-600 hover:text-blue-600",
                                                children: "We work for you"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                                onClick: ()=>document.getElementById("Next-steps").scrollIntoView({
                                                        behavior: "smooth"
                                                    }),
                                                className: "text-gray-600 hover:text-blue-600",
                                                children: "Grow with us"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "flex items-center space-x-4",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                href: "#",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                                    className: "bg-[black] text-white-300 px-4 py-2 rounded-lg font-medium hover:bg-blue-800",
                                                    children: "Try GRID Enterprise Portal"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                href: "https://chatbot-new-ui.netlify.app/#/admin/dashboard",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                                    className: "border border-blue-900 text-blue-900 px-4 py-2 rounded-lg font-medium hover:bg-blue-900 hover:text-white",
                                                    children: "Try GRID AI Pro (coming soon)"
                                                })
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "md:hidden py-4",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(components_OrgBodyNavbar, {})
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: `${isSticky ? "fixed top-0 left-0 w-full bg-[white] z-50 lg:px-40" : "hidden"} transition-all duration-300`,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "hidden md:flex justify-between items-center px-6 lg:px-12 py-4",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "flex items-center space-x-8",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                                                onClick: ()=>document.getElementById("what-is-GRID").scrollIntoView({
                                                        behavior: "smooth"
                                                    }),
                                                className: "text-gray-800 font-medium hover:text-blue-600 relative",
                                                children: [
                                                    "What is Grid",
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "absolute left-0 right-0 h-[2px] bg-blue-600 mt-1 rounded-full"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                                onClick: ()=>document.getElementById("Solutions").scrollIntoView({
                                                        behavior: "smooth"
                                                    }),
                                                className: "text-gray-600 hover:text-blue-600",
                                                children: "We work for you"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                                onClick: ()=>document.getElementById("Next-steps").scrollIntoView({
                                                        behavior: "smooth"
                                                    }),
                                                className: "text-gray-600 hover:text-blue-600",
                                                children: "Grow with us"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "flex items-center space-x-4",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                                    className: "bg-[black] text-white-300 px-4 py-2 rounded-lg font-medium hover:bg-blue-800",
                                                    children: "Try GRID Enterprise Portal"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                                    className: "border border-blue-900 text-blue-900 px-4 py-2 rounded-lg font-medium hover:bg-blue-900 hover:text-white",
                                                    children: "Try GRID AI Pro (coming soon)"
                                                })
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "md:hidden py-4",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(components_OrgBodyNavbar, {})
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "bg-[url('/assets/org_sec1.avif')] bg-repeat-round",
                id: "what-is-GRID",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "max-w-[95%] sm:max-w-[90%] md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl m-auto xs:px-4 lg:px-20 3xl:px-0 py-[40px] lg:py-[100px] ",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "x-auto",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "flex items-start j justify-center pb-10 w-full px-[10px] xl:px-4 sm:w-auto mx-auto sm:mx-0",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: " mx-auto w-full ",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: `flex flex-col justify-center items-center transition-all duration-700 ease-in-out transform ${animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                            className: " text-center text-[black] font-medium leading-10 text-[2rem] md:text-[2.5rem]",
                                            children: "Comprehensive Business Essentials"
                                        })
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "rounded-lg w-full grid grid-flow-row md:grid-flow-row grid-cols-1 space-y-2 md:space-y-0 md:grid-cols-3 pb-9 xl:mt-0 ",
                                children: aiCompanionlist.map((listUsers, index)=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "flex-start justify-center xl:mt-0 bg-[white] rounded-[24px] md:mx-3 w-auto p-5 shadow-sm",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: " mx-auto w-full md:w-auto",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "flex items-center justify-center m-auto",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("video", {
                                                        className: "top-0 left-0 w-full h-full rounded-xl",
                                                        src: listUsers.icon,
                                                        autoPlay: true,
                                                        muted: true,
                                                        loop: false
                                                    })
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "flex flex-col justify-center items-center mt-[12px] xl:mt-[20px] ",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                            className: "text-[1.125rem] text-center text-[black] font-semibold",
                                                            children: listUsers.number
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                            className: "text-[1rem] lg:px-8 xl:px-0 text-center text-[black] mt-[12px] xl:mt-[20px]",
                                                            children: listUsers.name
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    }, index))
                            })
                        ]
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "bg-[url('/assets/org_sec2.avif')] bg-repeat-round",
                id: "Solutions",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "mx-4 min-[540px]:mx-20 2xl:max-w-screen-xl 2xl:mx-auto py-[40px] xl:py-[100px]",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "x-auto",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "flex items-start j justify-center pb-10 w-full px-[10px] xl:px-4 sm:w-auto mx-auto sm:mx-0",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: " mx-auto w-full ",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "flex flex-col justify-center items-center ",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                            className: " text-center text-[black] font-medium text-5xl",
                                            children: "GRID transforms how you manage events."
                                        })
                                    })
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "bg-[white] rounded-3xl shadow-lg gap-16 p-4 mb-8 flex flex-col-reverse md:grid grid-rows-2 md:grid-flow-col md:grid-cols-4 md:grid-rows-1 ",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: " flex flex-col col-span-2 w-full justify-between items-start row-start-2 md:row-start-1",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "border border-[#e6f2fb] p-3 rounded-lg",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                    src: "assets/just-G-logo.png",
                                                    width: "30px"
                                                })
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                        style: {
                                                            fontFamily: "Inter"
                                                        },
                                                        className: "text-[black] mt-[30px] mb-6 text-[11px]",
                                                        children: "GRID"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                                        // style={{ fontFamily: "Sigmar One" }}
                                                        className: "2xl:text-3xl text-2xl font-semibold text-black",
                                                        children: "GRID AI PRO brings cutting edge search with quality insights, for optimal resulting. The first of its kind, a tool for the ages."
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                        style: {
                                                            fontFamily: "Inter"
                                                        },
                                                        className: "text-[black] mt-[30px] mb-6 text-[16px]",
                                                        children: "Powerful, Personal, and always ready to solve for your needs."
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "flex max-w-[470px] justify-between items-start",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                                            className: " bg-[black] text-[white] px-4 py-2 rounded-lg font-medium hover:bg-blue-900 hover:text-white",
                                                            children: "Waitlist"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                                            className: "border border-blue-900 mx-4 px-4 py-2 rounded-lg font-medium hover:bg-blue-800",
                                                            children: "GRID AI Pro (Coming Soon)"
                                                        })
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: " flex col-span-2 justify-end ",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("video", {
                                            className: "top-0 left-0 w-full h-full rounded-xl",
                                            src: "https://s7d2.scene7.com/is/content/microsoftcorp/Desktop-zoom-web",
                                            autoPlay: true,
                                            muted: true,
                                            loop: false
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "rounded-lg w-full grid grid-flow-row md:grid-flow-row grid-cols-1 space-y-2 md:space-y-0 md:grid-cols-3 pb-9 mt-[40px] xl:mt-0 ",
                                children: copilotMeetlist.map((listUsers, index)=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "flex-start justify-center bg-[white] rounded-[24px] md:mx-3 w-auto p-2 shadow-lg",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: " mx-auto w-full md:w-auto",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "flex items-center justify-center m-auto",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                        className: "top-0 left-0 w-full h-full rounded-xl",
                                                        src: listUsers.icon
                                                    })
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "flex flex-col justify-start items-start mt-[12px] xl:mt-[20px] p-3",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                            className: "text-[0.75rem] font-normal xl:px-0 text-[black]",
                                                            children: listUsers.name
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                            className: "text-[1.125rem] text-[black] font-semibold mt-[12px] xl:mt-[20px]",
                                                            children: listUsers.heading
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                            className: "text-[1rem] font-normal xl:px-0 text-[black] mt-[12px] xl:mt-[20px]",
                                                            children: listUsers.textHeading
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            className: " mt-[12px] text-[0.875rem] font-semibold xl:mt-[20px]",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                                                children: listUsers.btn
                                                            })
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    }, index))
                            })
                        ]
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "bg-[url('/assets/bg_sec3.avif')] bg-repeat-round",
                id: "Next-steps",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "mx-4 min-[540px]:mx-16 2xl:max-w-screen-xl 2xl:mx-auto lg:px-20 3xl:px-0 py-[40px] xl:py-[100px]",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: " x-auto",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "flex items-start j justify-center pb-10 w-full px-[10px] xl:px-4 sm:w-auto mx-auto sm:mx-0",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: " mx-auto w-full ",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "flex flex-col justify-center items-center ",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                            className: " text-center text-[black] font-medium text-[3rem]",
                                            children: "Reach the pinnacle of gaming excellence"
                                        })
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "bg-[url('/assets/bg_sec1.avif')] rounded-3xl shadow-lg p-4 mb-8",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: " flex flex-col col-span-2 p-8 w-full justify-between items-center row-start-2 sm:row-start-1",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                                    // style={{ fontFamily: "Sigmar One" }}
                                                    className: "text-3xl font-semibold text-black my-5 text-center",
                                                    children: "Redesigned and redefined systems"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                    style: {
                                                        fontFamily: "Inter"
                                                    },
                                                    className: "text-[black] mb-6 text-[16px] text-center",
                                                    children: "GRIDs end-to-end approach reduces efforts, so you can start your events sooner."
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "flex max-w-[470px] justify-between items-start",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                                    className: "bg-[black] text-[white] mx-4 px-4 py-2 rounded-lg font-medium hover:bg-blue-800",
                                                    children: "Request access today"
                                                })
                                            })
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "rounded-lg w-full grid grid-flow-row md:grid-flow-row grid-cols-1 md:grid-cols-2 gap-4 pb-9 mt-[40px] xl:mt-0",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "bg-[white] flex flex-col mx-2 rounded-3xl shadow-lg h-full",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "flex flex-col-reverse md:grid grid-rows-2 md:grid-flow-col md:grid-cols-2 md:grid-rows-1 p-4 h-full gap-8",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "flex flex-col col-span-1 w-full justify-between items-start row-start-2 sm:row-start-1 h-full gap-16",
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                            className: "flex-grow",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                    className: "mb-4",
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                        src: "assets/just-G-logo.png",
                                                                        height: "32px",
                                                                        width: "32px"
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                                                    className: "text-xl font-semibold text-black",
                                                                    children: "Dive deeper"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                    style: {
                                                                        fontFamily: "Inter"
                                                                    },
                                                                    className: "text-[black] mt-[30px] mb-6 text-sm",
                                                                    children: "Speak to GRID AI and define any parameters for an event. Let GRID do the work for you, as your personal concierge."
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            className: "mt-auto",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                                                className: "border border-blue-900 px-4 py-2 rounded-lg font-medium hover:bg-[black] hover:text-[white]",
                                                                children: "Learn More"
                                                            })
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "flex col-span-1 justify-end",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                        className: "rounded-xl object-cover",
                                                        src: "https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/card-2-desktop-331170?resMode=sharp2&op_usm=1.5,0.65,15,0&wid=624&hei=468&qlt=100&fmt=png-alpha&fit=constrain",
                                                        alt: "Image"
                                                    })
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "bg-[white] flex flex-col mx-2 rounded-3xl shadow-lg h-full",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "flex flex-col-reverse md:grid grid-rows-2 md:grid-flow-col md:grid-cols-2 md:grid-rows-1 p-4 h-full gap-8",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "flex flex-col col-span-1 w-full justify-between items-start row-start-2 sm:row-start-1 h-full gap-16",
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                            className: "flex-grow",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                    className: "mb-4",
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                        src: "assets/just-G-logo.png",
                                                                        height: "32px",
                                                                        width: "32px"
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                                                    className: "text-xl font-semibold text-black",
                                                                    children: "Do more with AI"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                    style: {
                                                                        fontFamily: "Inter"
                                                                    },
                                                                    className: "text-[black] mt-[30px] mb-6 text-sm",
                                                                    children: "Build a community and compete against others, earn more and help your business flourish, its all possible with GRID Enterprise solutions."
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            className: "mt-auto",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                                                className: "border border-blue-900 px-4 py-2 rounded-lg font-medium hover:bg-[black] hover:text-[white]",
                                                                children: "Learn More"
                                                            })
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "flex col-span-1 justify-end",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                        className: "rounded-xl object-cover",
                                                        src: "https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/card-3-desktop-3311701?resMode=sharp2&op_usm=1.5,0.65,15,0&wid=624&hei=468&qlt=100&fmt=png-alpha&fit=constrain",
                                                        alt: "Image"
                                                    })
                                                })
                                            ]
                                        })
                                    })
                                ]
                            })
                        ]
                    })
                })
            })
        ]
    });
};
/* harmony default export */ const pages_Organization = (Organization);


/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1897:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-bot.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 9931:
/***/ ((module) => {

module.exports = require("react-modal");

/***/ }),

/***/ 9294:
/***/ ((module) => {

module.exports = require("react-youtube");

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
var __webpack_exports__ = __webpack_require__.X(0, [118,676,664,675,669,38,443,985], () => (__webpack_exec__(5673)));
module.exports = __webpack_exports__;

})();