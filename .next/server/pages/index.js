"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405,842];
exports.modules = {

/***/ 5827:
/***/ (() => {

/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/grid_logo_dark2.3be50f26.png","height":1108,"width":3773,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAYAAABllJ3tAAAATUlEQVR4nAFCAL3/ASOc0WYI4ff1Br2cBf0oLPUB390B/PP1vw0VDu/59/oEATIxXHb7AAAEAg4P2AICAgD+/PwD////2AQGA/v//v8CJGYf69roh40AAAAASUVORK5CYII=","blurWidth":8,"blurHeight":2});

/***/ }),

/***/ 7758:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _misc_ButtonPrimary__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9117);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6197);
/* harmony import */ var _utils_getScrollAnimation__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(9813);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _HiddenNavbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8669);
/* harmony import */ var _BodyNavbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(8985);
/* harmony import */ var _public_assets_grid_logo_dark2_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(5827);
/* harmony import */ var _components_AndroidSVGComponent__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(1490);
/* harmony import */ var _public_assets_ApplePlayButton_svg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(5442);
/* harmony import */ var swiper_modules__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(2184);
/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(3015);
/* harmony import */ var react_youtube__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(9294);
/* harmony import */ var react_youtube__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react_youtube__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var react_player__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(8924);
/* harmony import */ var react_player__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(react_player__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(567);
/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(react_icons_bs__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _VideoModal__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(1443);
/* harmony import */ var _QRCodeModal__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(2149);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_4__, swiper_modules__WEBPACK_IMPORTED_MODULE_12__, swiper_react__WEBPACK_IMPORTED_MODULE_13__]);
([framer_motion__WEBPACK_IMPORTED_MODULE_4__, swiper_modules__WEBPACK_IMPORTED_MODULE_12__, swiper_react__WEBPACK_IMPORTED_MODULE_13__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);











// import div from "./Layout/div";
// import Android from "../public/assets/Googleplaybutton.svg";


// import Apple from "../public/assets/ApplePlayButton.svg";
// import { Pagination, Navigation } from "swiper/modules ";





// Import Swiper styles





const Home = ({ listUser =[
    {
        name: "Learn, grow, and gain confidence. GRID breaks down complex concepts and helps you make sense of it all.",
        number: "Try GRID AI",
        icon: "https://s7d2.scene7.com/is/content/microsoftcorp/373238-Copilot-Feature-Card-01"
    },
    {
        name: "When you need answers, advice, or insights, GRID is in your corner—helping you navigate the everyday.",
        number: "Download Mobile App",
        icon: "https://s7d2.scene7.com/is/content/microsoftcorp/373238-Copilot-Feature-Card-02"
    },
    {
        name: "Transform ideas into stunning visuals, simplify dense information into clear insights, and polish your writing so your voice shines.",
        number: "Demo Business Portal",
        icon: "https://s7d2.scene7.com/is/content/microsoftcorp/373238-Copilot-Feature-Card-03"
    }, 
] ,  })=>{
    const { 0: isSticky , 1: setIsSticky  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const sectionRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter)();
    const { 0: animate , 1: setAnimate  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: activeLink , 1: setActiveLink  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("Home");
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const path = router.pathname.split("/")[1];
        setActiveLink(path ? path.charAt(0).toUpperCase() + path.slice(1) : "Home");
    }, [
        router.pathname
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        // Trigger animation after the component mounts
        const timeout = setTimeout(()=>setAnimate(true), 100); // Small delay for better effect
        return ()=>clearTimeout(timeout);
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const handleScroll = ()=>{
            if (sectionRef.current) {
                const sectionTop = sectionRef.current.getBoundingClientRect().top;
                setIsSticky(sectionTop <= 0);
            }
        };
        window.addEventListener("scroll", handleScroll);
        return ()=>window.removeEventListener("scroll", handleScroll);
    }, []);
    const scrollAnimation = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>(0,_utils_getScrollAnimation__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .Z)(), []);
    const FeaturesArr = [
        {
            icon: "/assets/Icon/mdi_explore.svg",
            title: "Discover",
            body: "Explore upcoming sports events, news, and trending gaming content effortlessly",
            image: "/assets/test/discovery.webp"
        },
        {
            icon: "/assets/Icon/clarity_connect.svg",
            title: "Connect",
            body: "Stay connected with fellow gamers, create teams, and chat",
            image: "/assets/test/connect.webp"
        },
        {
            icon: "/assets/Icon/pixelarticons_tournament.svg",
            title: "Tournament Management",
            body: "Organize, schedule and promote eSports tournaments with powerful event management tools",
            image: "/assets/test/TournamentManagement.webp"
        },
        {
            icon: "/assets/Icon/fluent_people.svg",
            title: "Team Creation",
            body: "Assemble and manage sports teams efficiently, enhancing your competitve gaming experience",
            image: "/assets/test/TeamCreation.webp"
        },
        {
            icon: "/assets/Icon/entypo_gameController.svg",
            title: "Gaming Database",
            body: "Access a vast repository of games including, stats, guides and eSports insights",
            image: "/assets/test/Games1.webp"
        },
        {
            icon: "/assets/Icon/mingcute_brackets.svg",
            title: "Dynamic Bracketology",
            body: "Experience real-time bracket updates and results for your favorite eSports tournaments",
            image: "/assets/test/DynamicBracketology1.webp"
        }, 
    ];
    const aiCompanionlist = [
        {
            name: "Understand Esports like never before. GRID AI helps make sense of it all.",
            number: "GRID AI",
            // icon: "https://s7d2.scene7.com/is/content/microsoftcorp/373238-Copilot-Feature-Card-01",
            icon: "https://s7d2.scene7.com/is/content/microsoftcorp/card-business-advanced-ai-331170"
        },
        {
            name: "Build, Manage and Run your events like never before.",
            number: "GRID Mobile",
            // icon: "https://s7d2.scene7.com/is/content/microsoftcorp/373238-Copilot-Feature-Card-02",
            icon: "https://s7d2.scene7.com/is/content/microsoftcorp/card-business-seamlessly-integrated-331170"
        },
        {
            name: "Manage your business, organization, teams and players to the max. Quality insights will shape your business like never before.",
            number: "GRID Enterprise",
            // icon: "https://s7d2.scene7.com/is/content/microsoftcorp/373238-Copilot-Feature-Card-03",
            icon: "https://s7d2.scene7.com/is/content/microsoftcorp/card-business-enterprise-grade-security-331170"
        }, 
    ];
    const copilotMeetlist = [
        {
            name: "GRID Mobile",
            textHeading: "Build local events with old and new friends, find events near you, manage events in minutes and explore games and communities like never before.",
            heading: "Everything you need, in one place",
            icon: "https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Copilot-Solutions-Get-priority-access-4000x2250?resMode=sharp2&op_usm=1.5,0.65,15,0&wid=2000&hei=1150&qlt=100&fit=constrain",
            btn: "Explore GRID Mobile"
        },
        {
            name: "GRID AI",
            textHeading: "Search for information, data & stats, find news, videos and images of what you need, in seconds.",
            heading: "A better way to gain game knowledge",
            icon: "https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Copilot-Solutions-Discover-4000x2250?resMode=sharp2&op_usm=1.5,0.65,15,0&wid=2000&hei=1125&qlt=100&fit=constrain",
            btn: "Explore GRID AI"
        },
        {
            name: "GRID Platform",
            textHeading: "Boost your skills with GRID tools, perform and scale your events in ways that have never been done in Esports.",
            heading: "Be an elite Host",
            icon: "https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Copilot-Solutions-Power-up-4000x2250?resMode=sharp2&op_usm=1.5,0.65,15,0&wid=2000&hei=1125&qlt=100&fit=constrain",
            // icon: "https://s7d2.scene7.com/is/content/microsoftcorp/373238-copilot-neutral-life-hero-v2-01"
            btn: "Explore GRID Platform"
        }, 
    ];
    const { 0: selectedFeature , 1: setSlectedFeature  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
        icon: "/assets/Icon/mdi_explore.svg",
        title: "Discover",
        body: "Explore upcoming sports events, news, and trending gaming content efforlessly",
        image: "/assets/test/discovery.webp"
    });
    const openLinkAndroid = ()=>{
        window.open("https://play.google.com/store/apps/details?id=com.esolutions.grid", "_blank");
    };
    const openLinkIOS = ()=>{
        window.open("https://apps.apple.com/us/app/grid-tournaments-events/id6447766313", "_blank");
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: " ",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "relative bg-[white] z-20 flex items-center justify-between px-6 xl:px-40 py-4",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "flex items-center space-x-4",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                        href: "/",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                            src: "assets/grid_logo_dark3.png",
                                            alt: "Grid Logo",
                                            className: "w-full lg:max-w-[100px] xs:max-w-[80px] h-auto mb-3"
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
                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {
                                                                        href: "/GridAI",
                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                            className: "block text-sm px-1 lg:px-4 py-2 hover:bg-[#E6E6E6]",
                                                                            onClick: ()=>setActiveLink("GridAI"),
                                                                            children: "Grid AI"
                                                                        })
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {
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
                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {
                                                                        href: "/GridAI",
                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                            className: "block px-4 py-2 text-sm hover:bg-[#E6E6E6]",
                                                                            onClick: ()=>setActiveLink("GridAI"),
                                                                            children: "Grid AI Pro"
                                                                        })
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {
                                                                        href: "/GridAI",
                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                            className: "block px-4 py-2 text-sm hover:bg-[#E6E6E6]",
                                                                            onClick: ()=>setActiveLink("GridAI"),
                                                                            children: "Grid Web"
                                                                        })
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {
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
                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {
                                                                        href: "/CareersPage",
                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                            className: "block px-4 py-2 text-sm hover:bg-[#E6E6E6]",
                                                                            onClick: ()=>setActiveLink("CareersPage"),
                                                                            children: "Careers"
                                                                        })
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {
                                                                        href: "/Accessibility",
                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                            className: "block px-4 py-2 text-sm hover:bg-[#E6E6E6]",
                                                                            onClick: ()=>setActiveLink("Accessibility"),
                                                                            children: "Accessibility"
                                                                        })
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {
                                                                        href: "/DevicesSafety",
                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                            className: "block px-4 py-2 text-sm hover:bg-[#E6E6E6]",
                                                                            onClick: ()=>setActiveLink("DevicesSafety"),
                                                                            children: "Sustainability"
                                                                        })
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {
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
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_HiddenNavbar__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {})
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
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        style: {
                            width: "100%"
                        },
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("video", {
                            className: " block md:absolute top-0 left-0 w-full h-full object-cover",
                            src: "https://s7d2.scene7.com/is/content/microsoftcorp/373238-copilot-neutral-life-hero-v2-01",
                            autoPlay: true,
                            muted: true,
                            loop: false
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: `relative max-w-7xl mx-auto px-6 md:py-16 xs:py-10 md:py-0 md:h-[85vh] md:px-12 flex flex-col justify-center items-center text-center transition-all duration-700 ease-in-out transform ${animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`,
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                className: " hidden md:block text-5xl lg:text-6xl font-semibold text-gray-900 lg:mb-4 xs:mb-2",
                                children: "Tournaments Made Simple"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                src: "assets/grid_logo_dark2.png",
                                alt: "logo",
                                className: "w-full max-w-[230px] h-auto mb-3"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                className: " block md:hidden text-4xl lg:text-6xl font-semibold text-gray-900 mb-4",
                                children: "Tackle any challenge with GRID"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: "text-[black] text-lg mb-6 max-w-3xl text-balance leading-relaxed",
                                children: "The Ultimate Solution for Gaming, Sports, and Hobby Events."
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "lg:mb-10 xs:mb-6",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "my-5",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_VideoModal__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {
                                            addThumNail: true
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        "ocr-component-name": "icon",
                                        className: "ocr-icon d-inline-flex",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            className: "glyph-prepend glyph-prepend-play-solid",
                                            role: "presentation",
                                            "aria-hidden": "true"
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: " flex-col sm:flex-row flex px-2 py-2 bg-[white] rounded-[2.5rem] sm:rounded-[12.5rem] ",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                        className: "bg-[black] text-white-300 px-14 py-6 font-medium hover:bg-gray-200",
                                        style: {
                                            borderRadius: "12.5rem"
                                        },
                                        children: "For Individuals"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {
                                        activeClass: "active",
                                        href: "/Organization",
                                        spy: true,
                                        smooth: true,
                                        duration: 1000,
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            onClick: ()=>{
                                                setActiveLink("Organization");
                                            },
                                            className: "bg-[white] text-gray-700 px-14 py-6 font-medium hover:bg-gray-100" + (activeLink === "Organization" ? " text-[#19BAEE] animation-active " : " text-[black] hover:text-[black] "),
                                            style: {
                                                borderRadius: "12.5rem",
                                                cursor: "pointer"
                                            },
                                            children: "For Organizations"
                                        })
                                    })
                                ]
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        ref: sectionRef,
                        className: "relative bg-[white] xl:px-40",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: " hidden md:flex justify-between items-center px-6 lg:px-12 py-4",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "flex items-center space-x-8",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                                                onClick: ()=>document.getElementById("what-is-GRID").scrollIntoView({
                                                        behavior: "smooth"
                                                    }),
                                                className: "text-gray-800 font-medium hover:text-blue-600 relative",
                                                children: [
                                                    "What is Grid",
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "absolute left-0 right-0 h-[2px] bg-blue-600 mt-1 rounded-full"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                onClick: ()=>document.getElementById("Solutions").scrollIntoView({
                                                        behavior: "smooth"
                                                    }),
                                                className: "text-gray-600 hover:text-blue-600",
                                                children: "How it works"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                onClick: ()=>document.getElementById("Next-steps").scrollIntoView({
                                                        behavior: "smooth"
                                                    }),
                                                className: "text-gray-600 hover:text-blue-600",
                                                children: "Future of Esports"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "flex items-center space-x-4",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_QRCodeModal__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z, {}),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                href: "https://chatbot-new-ui.netlify.app/#/admin/dashboard",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                    className: "border border-blue-900 text-blue-900 px-4 py-2 rounded-lg font-medium hover:bg-blue-900 hover:text-white",
                                                    children: "Try GRID AI"
                                                })
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "md:hidden py-4",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_BodyNavbar__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {})
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: `${isSticky ? "fixed top-0 left-0 w-full bg-[white] z-50 lg:px-40" : "hidden"} transition-all duration-300`,
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "hidden md:flex justify-between items-center px-6 lg:px-12 py-4",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "flex items-center space-x-8",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                                                onClick: ()=>document.getElementById("what-is-GRID").scrollIntoView({
                                                        behavior: "smooth"
                                                    }),
                                                className: "text-gray-800 font-medium hover:text-blue-600 relative",
                                                children: [
                                                    "What is Grid",
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "absolute left-0 right-0 h-[2px] bg-blue-600 mt-1 rounded-full"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                onClick: ()=>document.getElementById("Solutions").scrollIntoView({
                                                        behavior: "smooth"
                                                    }),
                                                className: "text-gray-600 hover:text-blue-600",
                                                children: "How it works"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                onClick: ()=>document.getElementById("Next-steps").scrollIntoView({
                                                        behavior: "smooth"
                                                    }),
                                                className: "text-gray-600 hover:text-blue-600",
                                                children: "Future of Esports"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "flex items-center space-x-4",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_QRCodeModal__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z, {}),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                href: "https://chatbot-new-ui.netlify.app/#/admin/dashboard",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                    className: "border border-blue-900 text-blue-900 px-4 py-2 rounded-lg font-medium hover:bg-blue-900 hover:text-white",
                                                    children: "Try GRID AI"
                                                })
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "md:hidden py-4",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_BodyNavbar__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {})
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "bg-[url('/assets/bg_sec1.avif')] bg-repeat-round",
                id: "what-is-GRID",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "max-w-[95%] sm:max-w-[90%] md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl m-auto xs:px-4 lg:px-20 3xl:px-0 py-[40px] lg:py-[100px] ",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "x-auto",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "flex items-start j justify-center pb-10 w-full px-[10px] xl:px-4 sm:w-auto mx-auto sm:mx-0",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: " mx-auto w-full ",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: `flex flex-col justify-center items-center transition-all duration-700 ease-in-out transform ${animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`,
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            className: " text-center text-[black] font-medium leading-10 text-[2rem] md:text-[2.5rem]",
                                            children: "Powerful Tools Suite"
                                        })
                                    })
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "rounded-lg w-full grid grid-flow-row md:grid-flow-row grid-cols-1 space-y-2 md:space-y-0 md:grid-cols-3 pb-9 xl:mt-0 ",
                                children: aiCompanionlist.map((listUsers, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "flex-start justify-center xl:mt-0 bg-[white] rounded-[24px] md:mx-3 w-auto p-5 shadow-sm",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: " mx-auto w-full md:w-auto",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "flex items-center justify-center m-auto",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("video", {
                                                        className: "top-0 left-0 w-full h-full rounded-xl",
                                                        src: listUsers.icon,
                                                        autoPlay: true,
                                                        muted: true,
                                                        loop: false
                                                    })
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "flex flex-col justify-center items-center mt-[12px] xl:mt-[20px] ",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                            className: "text-[1.125rem] text-center text-[black] font-semibold",
                                                            children: listUsers.number
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
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
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "bg-[url('/assets/bg_sec2.avif')] bg-repeat-round",
                id: "Solutions",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "mx-4 min-[540px]:mx-20 2xl:max-w-screen-xl 2xl:mx-auto py-[40px] xl:py-[100px]",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "x-auto",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "flex items-start j justify-center pb-10 w-full px-[10px] xl:px-4 sm:w-auto mx-auto sm:mx-0",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: " mx-auto w-full ",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "flex flex-col justify-center items-center ",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            className: " text-center text-[black] font-medium text-5xl",
                                            children: "Create better tournament experiences"
                                        })
                                    })
                                })
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "bg-[white] rounded-3xl shadow-lg gap-16 p-4 mb-8 flex flex-col-reverse md:grid grid-rows-2 md:grid-flow-col md:grid-cols-4 md:grid-rows-1 ",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: " flex flex-col col-span-2 w-full justify-between items-start row-start-2 md:row-start-1",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "border border-[#e6f2fb] p-3 rounded-lg",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                    src: "assets/just-G-logo.png",
                                                    width: "30px"
                                                })
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        style: {
                                                            fontFamily: "Inter"
                                                        },
                                                        className: "text-[black] mt-[30px] mb-6 text-[11px]",
                                                        children: "GRID"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                                        // style={{ fontFamily: "Sigmar One" }}
                                                        className: "2xl:text-3xl text-2xl font-semibold text-black",
                                                        children: "GRID AI helps you find events near you, connect with like-minded individuals, and focus on the games"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        style: {
                                                            fontFamily: "Inter"
                                                        },
                                                        className: "text-[black] mt-[30px] mb-6 text-[16px]",
                                                        children: "Answers to any gaming questions, at a moments notice."
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "flex max-w-[470px] justify-between items-start",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                        href: "https://chatbot-new-ui.netlify.app/#/admin/dashboard",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                            className: " bg-[black] text-[white] px-4 py-2 rounded-lg font-medium hover:bg-blue-900 hover:text-white",
                                                            children: "Try GRID AI"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_QRCodeModal__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z, {})
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: " flex col-span-2 justify-end ",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                            className: "rounded-xl md:object-cover",
                                            src: "/assets/cat_sec2_img.avif",
                                            alt: "Image"
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "rounded-lg w-full grid grid-flow-row md:grid-flow-row grid-cols-1 space-y-2 md:space-y-0 md:grid-cols-3 pb-9 mt-[40px] xl:mt-0 ",
                                children: copilotMeetlist.map((listUsers, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "flex-start justify-center bg-[white] rounded-[24px] md:mx-3 w-auto p-2 shadow-sm",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: " mx-auto w-full md:w-auto",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "flex items-center justify-center m-auto",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                        className: "top-0 left-0 w-full h-full rounded-xl",
                                                        src: listUsers.icon
                                                    })
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "flex flex-col justify-start items-start mt-[12px] xl:mt-[20px] p-3",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                            className: "text-[0.75rem] font-normal xl:px-0 text-[black]",
                                                            children: listUsers.name
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                            className: "text-[1.125rem] text-[black] font-semibold mt-[12px] xl:mt-[20px]",
                                                            children: listUsers.heading
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                            className: "text-[1rem] font-normal xl:px-0 text-[black] mt-[12px] xl:mt-[20px]",
                                                            children: listUsers.textHeading
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: " mt-[12px] text-[0.875rem] font-semibold xl:mt-[20px]",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
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
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "bg-[url('/assets/bg_sec3.avif')] bg-repeat-round",
                id: "Next-steps",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "mx-4 min-[540px]:mx-16 2xl:max-w-screen-xl 2xl:mx-auto lg:px-20 3xl:px-0 py-[40px] xl:py-[100px] ",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "x-auto",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "flex items-start j justify-center pb-10 w-full px-[10px] xl:px-4 sm:w-auto mx-auto sm:mx-0",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: " mx-auto w-full ",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "flex flex-col justify-center items-center ",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            className: " text-center text-[black] font-medium text-[3rem]",
                                            children: "The first dedicated Esports AI\xa0"
                                        })
                                    })
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "bg-[url('/assets/bg_sec2.avif')] rounded-3xl shadow-lg p-4 mb-8",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: " flex flex-col col-span-2 p-8 w-full justify-between items-center row-start-2 sm:row-start-1",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                                    // style={{ fontFamily: "Sigmar One" }}
                                                    className: "text-3xl font-semibold text-black my-5 text-center",
                                                    children: "Easy to use and very capable"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    style: {
                                                        fontFamily: "Inter"
                                                    },
                                                    className: "text-[black] mb-6 text-[16px] text-center",
                                                    children: "Features that help you improve your daily lives, save you time, help you grow and make you money."
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "flex max-w-[470px] justify-between items-start",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_QRCodeModal__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z, {})
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "rounded-lg w-full grid grid-flow-row md:grid-flow-row grid-cols-1 md:grid-cols-2 gap-4 pb-9 mt-[40px] xl:mt-0",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "bg-[white] flex flex-col mx-2 rounded-3xl shadow-lg h-full",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "flex flex-col-reverse md:grid grid-rows-2 md:grid-flow-col md:grid-cols-2 md:grid-rows-1 p-4 h-full gap-8",
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "flex flex-col col-span-1 w-full justify-between items-start row-start-2 sm:row-start-1 h-full",
                                                    children: [
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            className: "flex-grow",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                    className: "mb-4",
                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                        src: "assets/just-G-logo.png",
                                                                        height: "32px",
                                                                        width: "32px"
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                                                    className: "text-xl font-semibold text-black",
                                                                    children: "Current Offerings"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                    style: {
                                                                        fontFamily: "Inter"
                                                                    },
                                                                    className: "text-[black] mt-[30px] mb-6 text-sm",
                                                                    children: "Find out everything you can do with the GRID App right now – Brackets, Events Management, Player & Event Search and more."
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: "mt-auto",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                                className: "border border-blue-900 px-4 py-2 rounded-lg font-medium hover:bg-[black] hover:text-[white]",
                                                                children: "Learn More"
                                                            })
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "flex col-span-1 justify-end",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                        className: "rounded-xl object-cover",
                                                        src: "https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/364825-media2-vp1?resMode=sharp2&op_usm=1.5,0.65,15,0&wid=624&hei=468&qlt=100&fmt=png-alpha&fit=constrain",
                                                        alt: "Image"
                                                    })
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "bg-[white] flex flex-col mx-2 rounded-3xl shadow-lg h-full",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "flex flex-col-reverse md:grid grid-rows-2 md:grid-flow-col md:grid-cols-2 md:grid-rows-1 p-4 h-full gap-8",
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "flex flex-col col-span-1 w-full justify-between items-start row-start-2 sm:row-start-1 h-full",
                                                    children: [
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            className: "flex-grow",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                    className: "mb-4",
                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                        src: "assets/just-G-logo.png",
                                                                        height: "32px",
                                                                        width: "32px"
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                                                    className: "text-xl font-semibold text-black",
                                                                    children: "Do more with AI"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                    style: {
                                                                        fontFamily: "Inter"
                                                                    },
                                                                    className: "text-[black] mt-[30px] mb-6 text-sm",
                                                                    children: "Learn as you go. Your personal dedicated concierge for all things gaming. Never not know."
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: "mt-auto",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                                className: "border border-blue-900 px-4 py-2 rounded-lg font-medium hover:bg-[black] hover:text-[white]",
                                                                children: "Learn More"
                                                            })
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "flex col-span-1 justify-end",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                        className: "rounded-xl object-cover",
                                                        src: "https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/373238-ai-Journey-tile-3?resMode=sharp2&op_usm=1.5,0.65,15,0&wid=640&hei=796&qlt=100&fmt=png-alpha&fit=constrain",
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9117:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const ButtonPrimary = ({ children , addClass  })=>{
    return /*#__PURE__*/ _jsx("button", {
        className: "py-3 lg:py-4 px-12 lg:px-16 text-white-500 font-semibold rounded-lg border-[0.5px] hover:border-[0.5px] border-black-600 hover:border-white-300 transition-all outline-none " + addClass,
        children: children
    });
};
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (ButtonPrimary)));


/***/ }),

/***/ 3678:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Index),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7758);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_Home__WEBPACK_IMPORTED_MODULE_1__]);
_components_Home__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
// import Hubs from "../components/Hubs";
// import Gamers from "../components/Gamers";


// import About from "../components/About";
// import Layout from "../components/Layout/Layout";
// import SeoHead from "../components/SeoHead";
function Index() {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Home__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {});
}
async function getStaticProps() {
    // Data fetching
    return {
        // data added inside props will be
        // received by page component as `props`
        props: {}
    };
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9813:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ getScrollAnimation)
/* harmony export */ });
function getScrollAnimation() {
    return {
        offscreen: {
            y: 150,
            opacity: 0
        },
        onscreen: ({ duration =1  } = {})=>({
                y: 0,
                opacity: 1,
                transition: {
                    type: "spring",
                    duration
                }
            })
    };
}


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

/***/ 567:
/***/ ((module) => {

module.exports = require("react-icons/bs");

/***/ }),

/***/ 9931:
/***/ ((module) => {

module.exports = require("react-modal");

/***/ }),

/***/ 8924:
/***/ ((module) => {

module.exports = require("react-player");

/***/ }),

/***/ 9294:
/***/ ((module) => {

module.exports = require("react-youtube");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 6197:
/***/ ((module) => {

module.exports = import("framer-motion");;

/***/ }),

/***/ 2184:
/***/ ((module) => {

module.exports = import("swiper/modules");;

/***/ }),

/***/ 3015:
/***/ ((module) => {

module.exports = import("swiper/react");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [118,676,664,675,669,38,443,985], () => (__webpack_exec__(3678)));
module.exports = __webpack_exports__;

})();