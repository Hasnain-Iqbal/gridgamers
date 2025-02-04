"use strict";
(() => {
var exports = {};
exports.id = 12;
exports.ids = [12,842];
exports.modules = {

/***/ 8942:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ pages_CareersPage)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./components/HiddenNavbar.js
var HiddenNavbar = __webpack_require__(8669);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./public/assets/Icon/search_icon.svg
var search_icon = __webpack_require__(3352);
// EXTERNAL MODULE: ./components/DropdownSearch.js
var DropdownSearch = __webpack_require__(8013);
;// CONCATENATED MODULE: ./public/assets/FindJob.svg
/* harmony default export */ const FindJob = ({"src":"/_next/static/media/FindJob.a2396f42.svg","height":230,"width":231});
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
;// CONCATENATED MODULE: ./pages/CareersPage.js








const CareersPage = ()=>{
    const { 0: clickedJob , 1: setClickedJob  } = (0,external_react_.useState)();
    const router = (0,router_.useRouter)();
    const { 0: activeLink , 1: setActiveLink  } = (0,external_react_.useState)("Home");
    (0,external_react_.useEffect)(()=>{
        const path = router.pathname.split("/")[1];
        setActiveLink(path ? path.charAt(0).toUpperCase() + path.slice(1) : "Home");
    }, [
        router.pathname
    ]);
    const style = {
        background: `linear-gradient(90.71deg, rgba(169, 124, 196, 0.33) 1.08%, rgba(117, 219, 255, 0.33) 100%), 
                 linear-gradient(0deg, rgb(238, 234, 243), rgb(238, 234, 243))`
    };
    const promotingDisability = [
        {
            title: "Senior Software Engineer",
            time: "Today",
            location: "Redmond, Washington",
            jobNum: 2413432,
            workSite: "Remote",
            detail: "The AI Frameworks team at Microsoft develops AI software that enables running AI models everywhere, from world's fastest AI supercomputers, to servers, desktops, mobile phones, IoT devices, and internet browsers.",
            btn: "See details"
        },
        {
            title: "Member of Technical Staff - Data Infrastructure Engineer",
            time: "2 days ago",
            location: "Redmond, Washington",
            jobNum: 6543345,
            workSite: "On-Site",
            detail: "As Microsoft continues to push the boundaries of AI, we are on the lookout for passionate individuals to work with us on the most interesting and challenging AI questions of our time. Our vision is bold and broad — to build systems that have true artificial intelligence across agents, applications, services, and infrastructure.",
            btn: "See details"
        },
        {
            title: "Product Marketing Manager",
            time: "3 days ago",
            location: "Redmond, Washington",
            jobNum: 5685445,
            workSite: "Remote",
            detail: 'Do you like to think in pictures? Do you look at a communication asset and think, "That can be simplified and elevated with a more visual approach?" If so, the Microsoft Edge for Business go-to-market team is looking for you.',
            btn: "See details"
        }, 
    ];
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "bg-[white]",
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
                                    className: "h-12"
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
                                                                    className: "block px-4 py-2 text-sm hover:bg-[#E6E6E6]",
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
                                                                    children: "GRID Scheduler"
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
                style: style,
                className: "w-full",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "bg-no-repeat p-4 md:p-12 bg-cover flex justify-center",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "bg-[white] w-full md:w-[90%] lg:w-[80%] p-4 md:p-10",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "flex flex-col md:flex-row justify-between mb-3 space-y-4 md:space-y-0 md:space-x-4",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 w-full",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "relative w-full md:w-auto",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx(search_icon/* default */.Z, {})
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                        className: "shadow-md w-full md:w-[22vw] p-3 pl-10 rounded-md text-sm border border-[#E7ECF1] focus:outline-none focus:ring-[1px] focus:border-[black]",
                                                        placeholder: "Search by job title, ID, or keyword"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "relative w-full md:w-auto",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx(search_icon/* default */.Z, {})
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                        className: "shadow-md w-full md:w-[22vw] p-3 pl-10 rounded-md text-sm border border-[#E7ECF1] focus:outline-none focus:ring-[1px] focus:border-[black]",
                                                        placeholder: "City, state, or country/region"
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                        className: "bg-[#1A59C8] rounded-md text-white-300 px-4 py-2 font-medium hover:bg-gray-800 w-full md:w-auto",
                                        children: "Find Jobs"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(DropdownSearch/* default */.Z, {
                                        component: "careers",
                                        name: "Experience"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(DropdownSearch/* default */.Z, {
                                        component: "careers",
                                        name: "Profession"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(DropdownSearch/* default */.Z, {
                                        component: "careers",
                                        name: "Employment type"
                                    })
                                ]
                            })
                        ]
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "max-w-7xl mx-auto px-4 py-14",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "grid grid-cols-1 lg:grid-cols-12 gap-4",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "lg:col-span-4 bg-[#fafafa] shadow-lg",
                            children: promotingDisability.map((listUsers, index)=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "flex-start justify-center border-b-[1px] border-gray-400 hover:bg-[white] bg-[#fafafa] px-3 w-auto cursor-pointer",
                                    onClick: ()=>setClickedJob(listUsers),
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "mx-auto w-full",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "flex flex-col justify-start items-start p-4",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                    className: "text-md text-[black] font-semibold",
                                                    children: listUsers.title
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                    className: "text-sm font-light text-[black] mt-3",
                                                    children: listUsers.detail
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                                    className: "text-[#0067b8] text-sm mt-3",
                                                    children: listUsers.btn
                                                })
                                            ]
                                        })
                                    })
                                }, index))
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "lg:col-span-8",
                            children: clickedJob ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "bg-[#fafafa] shadow-lg p-4 md:p-5",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                        className: "text-xl md:text-2xl font-bold mb-3 text-[black]",
                                        children: clickedJob.title
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        className: "text-gray-400 text-sm mb-5",
                                        children: clickedJob.location
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "flex items-center space-x-4",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                            className: "bg-[#1A59C8] rounded-md text-white-300 px-4 py-1 font-medium hover:bg-gray-800",
                                            children: "Apply"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "mt-14",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "grid grid-cols-1 md:grid-cols-3 gap-4",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                        className: "text-gray-400 text-sm",
                                                        children: [
                                                            "Date posted ",
                                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                className: "text-[black] px-12 font-semibold",
                                                                children: clickedJob.time
                                                            })
                                                        ]
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                        className: "text-gray-400 text-sm",
                                                        children: [
                                                            "Job number ",
                                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                className: "text-[black] px-12 font-semibold",
                                                                children: clickedJob.jobNum
                                                            })
                                                        ]
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                        className: "text-gray-400 text-sm",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                className: "pr-3",
                                                                children: "Work site"
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                className: "text-[black] font-semibold",
                                                                children: clickedJob.workSite
                                                            })
                                                        ]
                                                    })
                                                })
                                            ]
                                        })
                                    })
                                ]
                            }) : /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "flex w-full justify-center items-center min-h-[50vh]",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "text-center",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx(FindJob, {}),
                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                            className: "text-2xl font-bold text-[black] mb-3",
                                            children: "Select a job"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                            className: "text-sm text-[black]",
                                            children: "Nothing is selected"
                                        })
                                    ]
                                })
                            })
                        })
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ const pages_CareersPage = (CareersPage);


/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

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
var __webpack_exports__ = __webpack_require__.X(0, [118,676,664,669,87], () => (__webpack_exec__(8942)));
module.exports = __webpack_exports__;

})();