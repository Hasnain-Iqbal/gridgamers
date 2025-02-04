"use strict";
(() => {
var exports = {};
exports.id = 904;
exports.ids = [904,842,863,147,313];
exports.modules = {

/***/ 4436:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/mic-icon.4e2dbcc3.svg","height":22,"width":23});

/***/ }),

/***/ 3733:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _public_assets_Icon_mic_icon_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4436);
/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3015);
/* harmony import */ var swiper_modules__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2184);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _AIDropdown__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(212);
/* harmony import */ var _ImageCarousel__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(9435);
/* harmony import */ var _ArrToCaro__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(2436);
/* harmony import */ var _ContainerCarousel__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(3807);
/* harmony import */ var components_HiddenNavbar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(8669);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swiper_react__WEBPACK_IMPORTED_MODULE_5__, swiper_modules__WEBPACK_IMPORTED_MODULE_6__]);
([swiper_react__WEBPACK_IMPORTED_MODULE_5__, swiper_modules__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




// Import Swiper styles












const GridAI = ({})=>{
    const sectionRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const { 0: isSticky , 1: setIsSticky  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    const { 0: activeLink , 1: setActiveLink  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("Home");
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const path = router.pathname.split("/")[1];
        setActiveLink(path ? path.charAt(0).toUpperCase() + path.slice(1) : "Home");
    }, [
        router.pathname
    ]);
    const headingPhrases = [
        "Craft prompts for any task",
        "Simplify your work",
        "Unlock your creativity", 
    ];
    const placeholderPhrases = [
        "Create an image of a dog running through a grossy field during sunset",
        "Write a story with mythical creatures that teaches a lesson about bravery",
        "Plan a meal with chocolate dessert that goes well with water",
        "Teach me about quantum physics and explain it like I'm 5 years old", 
    ];
    // States for heading animation
    const { 0: headingText , 1: setHeadingText  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const { 0: isDeletingHeading , 1: setIsDeletingHeading  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: currentHeadingIndex , 1: setCurrentHeadingIndex  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    const { 0: isTypingAnimationActive , 1: setIsTypingAnimationActive  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
    // States for placeholder animation
    const { 0: placeholderText , 1: setPlaceholderText  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const { 0: isDeletingPlaceholder , 1: setIsDeletingPlaceholder  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: currentPlaceholderIndex , 1: setCurrentPlaceholderIndex  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    const { 0: text , 1: setText  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    // Typing speeds
    const typingSpeed = 40;
    const deletingSpeed = 40;
    const calculateWidth = (text)=>{
        const spaceCount = (text.match(/ /g) || []).length; // Count spaces in the string
        const percentage = spaceCount / 12 * 100; // Example: 12 spaces = 100%
        return `${Math.min(percentage, 100)}%`; // Cap the width at 100%
    };
    const { 0: width , 1: setWidth  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(calculateWidth(placeholderText));
    // Typing effect for the heading
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const handleTyping = ()=>{
            const currentPhrase = headingPhrases[currentHeadingIndex];
            if (isDeletingHeading) {
                setHeadingText((prev)=>prev.slice(0, -1));
            } else {
                setHeadingText((prev)=>currentPhrase.slice(0, prev.length + 1));
            }
            if (!isDeletingHeading && headingText === currentPhrase) {
                setTimeout(()=>setIsDeletingHeading(true), 1000);
            } else if (isDeletingHeading && headingText === "") {
                setIsDeletingHeading(false);
                setCurrentHeadingIndex((prev)=>(prev + 1) % headingPhrases.length);
            }
        };
        const timer = setTimeout(handleTyping, isDeletingHeading ? deletingSpeed : typingSpeed);
        return ()=>clearTimeout(timer);
    }, [
        headingText,
        isDeletingHeading,
        currentHeadingIndex,
        headingPhrases
    ]);
    // Typing effect for the placeholder
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const handleTyping = ()=>{
            const currentPhrase = placeholderPhrases[currentPlaceholderIndex];
            if (isDeletingPlaceholder) {
                setPlaceholderText((prev)=>prev.slice(0, -1));
            } else {
                setPlaceholderText((prev)=>currentPhrase.slice(0, prev.length + 1));
            }
            if (!isDeletingPlaceholder && placeholderText === currentPhrase) {
                setTimeout(()=>setIsDeletingPlaceholder(true), 3000);
            } else if (isDeletingPlaceholder && placeholderText === "") {
                setIsDeletingPlaceholder(false);
                setCurrentPlaceholderIndex((prev)=>(prev + 1) % placeholderPhrases.length);
            }
        };
        setWidth(calculateWidth(placeholderText));
        const timer = setTimeout(handleTyping, isDeletingPlaceholder ? deletingSpeed : typingSpeed);
        return ()=>clearTimeout(timer);
    }, [
        placeholderText,
        isDeletingPlaceholder,
        currentPlaceholderIndex,
        placeholderPhrases, 
    ]);
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
    const FeaturesArr = [
        {
            icon: "/assets/Icon/mdi_explore.svg",
            title: "Discover",
            body: "Explore upcoming sports events, news, and trending gaming content effortlessly",
            image: "https://edgestatic.azureedge.net/shared/cms/lrs1c69a1j/section-images/da7b20d7e2784d4bb4f75f4a525c84f9.png"
        },
        {
            icon: "/assets/Icon/clarity_connect.svg",
            title: "Connect",
            body: "Stay connected with fellow gamers, create teams, and chat",
            image: "https://edgestatic.azureedge.net/shared/cms/lrs1c69a1j/section-images/fd81deb9dcb34ae79c50f0b3f689d45d.png"
        },
        {
            icon: "/assets/Icon/pixelarticons_tournament.svg",
            title: "Tournament Management",
            body: "Organize, schedule and promote eSports tournaments with powerful event management tools",
            image: "https://edgestatic.azureedge.net/shared/cms/lrs1c69a1j/section-images/e72fbed7d85d422c93fbf7e0d0141967.png"
        },
        {
            icon: "/assets/Icon/fluent_people.svg",
            title: "Team Creation",
            body: "Assemble and manage sports teams efficiently, enhancing your competitve gaming experience",
            image: "https://edgestatic.azureedge.net/shared/cms/lrs1c69a1j/section-images/ade197b5265444938f6935b647d4b1aa.png"
        },
        {
            icon: "/assets/Icon/entypo_gameController.svg",
            title: "Gaming Database",
            body: "Access a vast repository of games including, stats, guides and eSports insights",
            image: "https://edgestatic.azureedge.net/shared/cms/lrs1c69a1j/section-images/3610cb6f40a4455c8d536866aac3bd33.png"
        },
        {
            icon: "/assets/Icon/mingcute_brackets.svg",
            title: "Dynamic Bracketology",
            body: "Experience real-time bracket updates and results for your favorite eSports tournaments",
            image: "https://edgestatic.azureedge.net/shared/cms/lrs1c69a1j/section-images/3b9c71567e2d41eaa5fce37aea631b63.png"
        }, 
    ];
    const LastArr = [
        {
            icon: "/assets/Icon/mdi_explore.svg",
            title: "Shape the future of AI with Copilot Labs",
            body: "Be among the first to try new Copilot features and help us shape the future of AI. Copilot Pro grants you access to experimental AI features before they are generally available. Including features like Copilot Vision and Think Deeper.",
            image: "https://edgestatic.azureedge.net/shared/cms/lrs1c69a1j/section-images/6ab6c535d3de4a1c8488506aaf8cf851.png"
        },
        {
            icon: "/assets/Icon/clarity_connect.svg",
            title: "Talk about what’s on your mind,​ whenever you want",
            body: "When you want to talk, Copilot is ready. Having a conversation with Copilot feels natural — whether you're prepping for an interview, debating playoff matchups, or practicing for a tricky conversation. Simply click icon to get started.",
            image: "https://edgestatic.azureedge.net/shared/cms/lrs1c69a1j/section-images/d7dd0439529c4c1f906806643aaebfd2.png"
        },
        {
            icon: "/assets/Icon/pixelarticons_tournament.svg",
            title: "Start your day in the know​",
            body: "Copilot Daily is the perfect way to start your day. Personalized news, weather, sports, reminders for upcoming events, and more — coffee not included.",
            image: "https://edgestatic.azureedge.net/shared/cms/lrs1c69a1j/section-images/2f36efb598d041ed9edff6f7ace6b05f.png"
        },
        {
            icon: "/assets/Icon/fluent_people.svg",
            title: "@Copilot, only in Edge",
            body: "Now it’s even easier to access Copilot directly from the Microsoft Edge browser by simply typing @copilot into the address bar.",
            image: "https://edgestatic.azureedge.net/shared/cms/lrs1c69a1j/section-images/1a54e77578f14ec39e089a49afbd9596.png"
        },
        {
            icon: "/assets/Icon/entypo_gameController.svg",
            title: "Browse smarter with contextual search and summaries",
            body: "Copilot is here to help while you're browsing. It can quickly summarize the article you're reading or answer questions the content may spark.",
            image: "https://edgestatic.azureedge.net/shared/cms/lrs1c69a1j/section-images/6ab6c535d3de4a1c8488506aaf8cf851.png"
        },
        {
            icon: "/assets/Icon/mingcute_brackets.svg",
            title: "From your mind to a masterpiece",
            body: "Dream it. Create it. Copilot can help you turn your big ideas into real images — whether that’s a birthday card, a poster, or maybe just an image of turtles in a marching band. Why not? Whatever you’re imagining, let Copilot bring it to life.",
            image: "https://edgestatic.azureedge.net/shared/cms/lrs1c69a1j/section-images/78cb6fa6d47549959c268b5d0779dead.png"
        }, 
    ];
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
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
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                                href: "/GridAI",
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                    className: "block text-sm px-1 lg:px-4 py-2 hover:bg-[#E6E6E6]",
                                                                    onClick: ()=>setActiveLink("GridAI"),
                                                                    children: "Grid AI"
                                                                })
                                                            })
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
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
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                                href: "/GridAI",
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                    className: "block px-4 py-2 text-sm hover:bg-[#E6E6E6]",
                                                                    onClick: ()=>setActiveLink("GridAI"),
                                                                    children: "Grid AI Pro"
                                                                })
                                                            })
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                                href: "/GridAI",
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                    className: "block px-4 py-2 text-sm hover:bg-[#E6E6E6]",
                                                                    onClick: ()=>setActiveLink("GridAI"),
                                                                    children: "Grid Web"
                                                                })
                                                            })
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
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
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                                href: "/CareersPage",
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                    className: "block px-4 py-2 text-sm hover:bg-[#E6E6E6]",
                                                                    onClick: ()=>setActiveLink("CareersPage"),
                                                                    children: "Careers"
                                                                })
                                                            })
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                                href: "/Accessibility",
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                    className: "block px-4 py-2 text-sm hover:bg-[#E6E6E6]",
                                                                    onClick: ()=>setActiveLink("Accessibility"),
                                                                    children: "Accessibility"
                                                                })
                                                            })
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                                href: "/DevicesSafety",
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                    className: "block px-4 py-2 text-sm hover:bg-[#E6E6E6]",
                                                                    onClick: ()=>setActiveLink("DevicesSafety"),
                                                                    children: "Sustainability"
                                                                })
                                                            })
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
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
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_HiddenNavbar__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {})
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
                    backgroundImage: "linear-gradient(180deg, #FFFAE3, #FFFFFF 80%)"
                },
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: `max-w-7xl mx-auto px-6 lg:h-[80vh] md:h-[50vh] lg:px-12 flex flex-col justify-center items-center text-center transition-all duration-700 ease-in-out transform`,
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                            src: "https://edgestatic.azureedge.net/shared/cms/lrs1c69a1j/section-images/11ba1dd49a7f4edbb1eebe9556f8859e.png",
                            height: "100px",
                            width: "100px"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                            className: "text-5xl lg:text-7xl font-semibold text-gray-900 my-8",
                            children: "Hi, I'm Copilot in Edge!"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "flex items-center h-10 justify-center mb-10",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "w-max",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    className: "overflow-hidden whitespace-nowrap border-r-4 border-r-white pr-2 text-3xl text-[black]",
                                    children: headingText
                                })
                            })
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "bg-[#f2f2f2] flex px-4 py-2 rounded-[40px] jutify-between items-center shadow-xl",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                    className: "mx-2",
                                    src: "https://edgestatic.azureedge.net/shared/cms/lrs1c69a1j/section-images/11ba1dd49a7f4edbb1eebe9556f8859e.png",
                                    height: "5px",
                                    width: "30px"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: "text-3xl font-light",
                                    children: "+"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                    className: "bg-[white] rounded-3xl px-2 mx-3 h-10",
                                    placeholder: "Message Copliot...",
                                    disabled: true
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_public_assets_Icon_mic_icon_svg__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {})
                            ]
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        ref: sectionRef,
                        className: "relative bg-[white] min-[1490px]:px-40",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "hidden min-[1140px]:flex justify-between items-center px-6 lg:px-12 py-4",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "flex items-center space-x-8",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                                                onClick: ()=>document.getElementById("Copilot-in-Edge").scrollIntoView({
                                                        behavior: "smooth"
                                                    }),
                                                className: "text-gray-800 font-medium hover:text-blue-600 relative",
                                                children: [
                                                    "Copilot in Edge",
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "absolute left-0 right-0 h-[2px] bg-blue-600 mt-1 rounded-full"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                onClick: ()=>document.getElementById("Discover-Cards").scrollIntoView({
                                                        behavior: "smooth"
                                                    }),
                                                className: "text-gray-600 hover:text-blue-600",
                                                children: "Discover Cards"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                onClick: ()=>document.getElementById("Prompt-Builder").scrollIntoView({
                                                        behavior: "smooth"
                                                    }),
                                                className: "text-gray-600 hover:text-blue-600",
                                                children: "Prompt Builder"
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                                                onClick: ()=>document.getElementById("Scenarios").scrollIntoView({
                                                        behavior: "smooth"
                                                    }),
                                                className: "text-gray-800 font-medium hover:text-blue-600 relative",
                                                children: [
                                                    "Scenarios",
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "absolute left-0 right-0 h-[2px] bg-blue-600 mt-1 rounded-full"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                onClick: ()=>document.getElementById("Features").scrollIntoView({
                                                        behavior: "smooth"
                                                    }),
                                                className: "text-gray-600 hover:text-blue-600",
                                                children: "Features"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                //   onClick={() =>
                                                //     document.getElementById("Copilot-Pro").scrollIntoView({
                                                //       behavior: "smooth",
                                                //     })
                                                //   }
                                                className: "text-gray-600 hover:text-blue-600",
                                                children: "Copilot Pro"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "flex items-center space-x-4",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                className: "bg-[black] text-white-300 px-4 py-2 rounded-lg font-medium hover:bg-blue-800",
                                                children: "Download the app"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                className: "border border-blue-900 text-blue-900 px-4 py-2 rounded-lg font-medium hover:bg-blue-900 hover:text-white",
                                                children: "Try Copilot"
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "flex min-[1140px]:hidden bg-[white] ",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_AIDropdown__WEBPACK_IMPORTED_MODULE_8__["default"], {})
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: `${isSticky ? "fixed top-0 left-0 w-full bg-[white] z-50 " : "hidden"} transition-all duration-300`,
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "hidden min-[1140px]:flex justify-between items-center px-6 py-4",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "flex items-center space-x-8",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                                                onClick: ()=>document.getElementById("Copilot-in-Edge").scrollIntoView({
                                                        behavior: "smooth"
                                                    }),
                                                className: "text-gray-800 font-medium hover:text-blue-600 relative",
                                                children: [
                                                    "Copilot in Edge",
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "absolute left-0 right-0 h-[2px] bg-blue-600 mt-1 rounded-full"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                onClick: ()=>document.getElementById("Discover-Cards").scrollIntoView({
                                                        behavior: "smooth"
                                                    }),
                                                className: "text-gray-600 hover:text-blue-600",
                                                children: "Discover Cards"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                onClick: ()=>document.getElementById("Prompt-Builder").scrollIntoView({
                                                        behavior: "smooth"
                                                    }),
                                                className: "text-gray-600 hover:text-blue-600",
                                                children: "Prompt Builder"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                onClick: ()=>document.getElementById("Scenarios").scrollIntoView({
                                                        behavior: "smooth"
                                                    }),
                                                className: "text-gray-600 hover:text-blue-600",
                                                children: "Scenarios"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                onClick: ()=>document.getElementById("Features").scrollIntoView({
                                                        behavior: "smooth"
                                                    }),
                                                className: "text-gray-600 hover:text-blue-600",
                                                children: "Features"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                //   onClick={() =>
                                                //     document.getElementById("Copilot-Pro").scrollIntoView({
                                                //       behavior: "smooth",
                                                //     })
                                                //   }
                                                className: "text-gray-600 hover:text-blue-600",
                                                children: "Copilot Pro"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "flex items-center space-x-4",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                className: "bg-[black] text-white-300 px-4 py-2 rounded-lg font-medium hover:bg-blue-800",
                                                children: "Download the app"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                className: "border border-blue-900 text-blue-900 px-4 py-2 rounded-lg font-medium hover:bg-blue-900 hover:text-white",
                                                children: "Try Copilot"
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "flex min-[1140px]:hidden bg-[white] ",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_AIDropdown__WEBPACK_IMPORTED_MODULE_8__["default"], {})
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                style: {
                    backgroundImage: "linear-gradient(180deg, #F5F0EE, #F5F6F6, #D5ECF5)"
                },
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        id: "Copilot-in-Edge",
                        className: `max-w-7xl mx-auto md:py-[120px] flex flex-col justify-center items-center text-center transition-all duration-700 ease-in-out transform px-4`,
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                className: "text-5xl lg:text-5xl font-semibold text-gray-900 my-8",
                                children: "What is Copilot in Edge?"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: "text-[black] text-2xl mb-6 ",
                                children: "With Microsoft Edge, Copilot is built right into your browser, ready to help. Whether you're reading an article, watching a video, or exploring a website, you can ask Copilot anything and get quick, relevant answers without ever leaving the page. Simply click to get started."
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "px-8",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                    className: "shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]",
                                    src: "https://edgestatic.azureedge.net/shared/cms/lrs1c69a1j/section-images/1989a4365b9a45fda5b1e14a3ee8e785.png"
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        id: "Discover-Cards",
                        className: "py-14 text-center m-auto 2xl:max-w-screen-2xl justify-center items-center ",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h1", {
                                className: "text-5xl lg:text-5xl font-semibold text-gray-900 my-8 w-[95%] mx-auto pb-4 md:pb-0",
                                children: [
                                    "Explore with personalized",
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                    " discover cards designed just for you"
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                className: "text-center text-[black] font-normal text-2xl w-[95%] mx-auto pb-3 md:pb-0",
                                children: [
                                    "Use discover cards as a little spark of inspiration tailored just for you. The more you use Copilot,",
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                    " the more helpful it will be. Explore some of Copilot’s most popular asks.​"
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ImageCarousel__WEBPACK_IMPORTED_MODULE_9__["default"], {
                                imageArr: FeaturesArr
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        id: "Prompt-Builder",
                        className: "py-14 text-center m-auto xs:max-w-screen-xs sm:max-w-screen-sm md:max-w-screen-md xl:max-w-screen-xl 2xl:max-w-screen-2xl justify-center items-center ",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                className: "text-5xl lg:text-5xl font-semibold text-gray-900 my-8",
                                children: "Craft prompts for any task"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: "text-center text-[black] font-normal text-2xl my-8",
                                children: "From straight forward questions to intricate plans. Do it all with Microsoft Copilot in Edge."
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: " bg-[white] rounded-[70px] ",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "flex justify-center space-x-4 py-10",
                                        children: [
                                            "Create",
                                            "Write",
                                            "Plan",
                                            "Learn"
                                        ].map((item, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                                className: `text-lg font-medium text-gray-900 pb-2 ${index === 0 ? "border-b-2 border-black" : "border-b-2 border-transparent"}`,
                                                children: item
                                            }, index))
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("textarea", {
                                        className: "bg-[#f8f8f8] rounded-[60px] text-[#1a1a1a] border-none p-7 outline-none text-5xl resize-none",
                                        style: {
                                            fontSize: "2.6rem",
                                            lineHeight: "1.5",
                                            width: "80%"
                                        },
                                        rows: "4",
                                        placeholder: isTypingAnimationActive ? placeholderText : "",
                                        onFocus: ()=>setIsTypingAnimationActive(false),
                                        onBlur: ()=>setIsTypingAnimationActive(true),
                                        value: text,
                                        onChange: (e)=>setText(e.target.value)
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "flex justify-center pt-8",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "w-1/4 bg-[#f8f8f8] rounded-full dark:bg-gray-700",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "bg-blue-600 rounded-full",
                                                style: {
                                                    height: "8px",
                                                    width: `${isTypingAnimationActive ? width : calculateWidth(text)}`,
                                                    onFocus: `${calculateWidth(width)}`,
                                                    transition: "width 0.5s ease",
                                                    backgroundImage: "linear-gradient(90deg, #02a8d9, #24b9c2, #44caab)"
                                                }
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "flex justify-center",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "flex w-1/4 justify-between",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    className: "text-[black] font-bold",
                                                    children: "Basic"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    className: "text-[black] font-bold",
                                                    children: "Advanced"
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                        href: "https://chatbot-new-ui.netlify.app/#/admin/dashboard",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                            className: "bg-[black] text-white-300 px-12 py-3 my-8 rounded-3xl font-bold hover:bg-blue-800",
                                            children: "Go"
                                        })
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        id: "Scenarios",
                        className: `max-w-7xl mx-auto my-14 flex flex-col justify-center items-center text-center transition-all duration-700 ease-in-out transform`,
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                className: "text-5xl lg:text-5xl font-semibold text-gray-900 my-8",
                                children: "Use Copilot for any task, any idea"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: "text-[black] text-2xl mb-6 ",
                                children: "Explore these different scenarios to discover how Copilot can assist with any task or idea, enhancing your work with seamless, intuitive conversations. Try it now and see what Copilot can do for you."
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ArrToCaro__WEBPACK_IMPORTED_MODULE_10__["default"], {})
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        id: "Features",
                        className: "py-14 text-center m-auto w-full 2xl:max-w-screen-2xl justify-center items-center ",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ContainerCarousel__WEBPACK_IMPORTED_MODULE_11__["default"], {
                            imageArr: LastArr
                        })
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GridAI);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

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

/***/ 8096:
/***/ ((module) => {

module.exports = require("react-slick");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

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
var __webpack_exports__ = __webpack_require__.X(0, [118,676,664,675,669,807,436,212,435], () => (__webpack_exec__(3733)));
module.exports = __webpack_exports__;

})();