"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888,842];
exports.modules = {

/***/ 4095:
/***/ (() => {

/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/grid-logo-new.5e424564.svg","height":160,"width":544});

/***/ }),

/***/ 4772:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: external "next/head"
const head_namespaceObject = require("next/head");
var head_default = /*#__PURE__*/__webpack_require__.n(head_namespaceObject);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
;// CONCATENATED MODULE: ./components/SeoHead.js



// Default value for some meta data
const defaultMeta = {
    title: "GridGamers",
    siteName: "GridGamers",
    description: "Made for Gamers by Gamers ",
    // change base url of your web (without '/' at the end)
    url: "https://gridgamers.com",
    type: "website",
    robots: "follow, index",
    // change with url of your image (recommended dimension = 1.91:1)
    // used in twitter, facebook, etc. card when link copied in tweet/status
    image: "https://gridgamers.com/assets/logo_2.webp",
    author: "GridGamers"
};
/**
 * Next Head component populated with necessary SEO tags and title
 * props field used:
 * - title
 * - siteName
 * - description
 * - url
 * - type
 * - robots
 * - image
 * - date
 * - author
 * - templateTitle
 * all field are optional (default value defined on defaultMeta)
 * @example
 * <SeoHead title="Page's Title" />
 */ const SeoHead = (props)=>{
    const router = (0,router_.useRouter)();
    const meta = {
        ...defaultMeta,
        ...props
    };
    // Use siteName if there is templateTitle
    // but show full title if there is none
    meta.title = props.templateTitle ? `${props.templateTitle} | ${meta.siteName}` : meta.title;
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("title", {
                children: meta.title
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                name: "robots",
                content: meta.robots
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                content: meta.description,
                name: "description"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                property: "og:url",
                content: `${meta.url}${router.asPath}`
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("link", {
                rel: "canonical",
                href: `${meta.url}${router.asPath}`
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                property: "og:type",
                content: meta.type
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                property: "og:site_name",
                content: meta.siteName
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                property: "og:description",
                content: meta.description
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                property: "og:title",
                content: meta.title
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                name: "image",
                property: "og:image",
                content: meta.image
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                name: "twitter:card",
                content: "summary_large_image"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                name: "twitter:site",
                content: "@F2aldi"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                name: "twitter:title",
                content: meta.title
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                name: "twitter:description",
                content: meta.description
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                name: "twitter:image",
                content: meta.image
            }),
            meta.date && /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        property: "article:published_time",
                        content: meta.date
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "publish_date",
                        property: "og:publish_date",
                        content: meta.date
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "author",
                        property: "article:author",
                        content: meta.author
                    })
                ]
            }),
            favicons.map((linkProps)=>/*#__PURE__*/ jsx_runtime_.jsx("link", {
                    ...linkProps
                }, linkProps.href)),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                name: "theme-color",
                content: "#F53838"
            })
        ]
    });
};
// Favicons, other icons, and manifest definition
const favicons = [
    {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        href: "/favicon/assets-dLDJtg6RBDMsg9InjgcdSiqSo.png"
    }, 
];
/* harmony default export */ const components_SeoHead = (SeoHead);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./public/assets/grid-logo-new.svg
var grid_logo_new = __webpack_require__(4095);
;// CONCATENATED MODULE: ./public/assets/Icon/facebook.svg
/* harmony default export */ const facebook = ({"src":"/_next/static/media/facebook.c626ac56.svg","height":24,"width":24});
;// CONCATENATED MODULE: ./public/assets/Icon/twitter.svg
/* harmony default export */ const twitter = ({"src":"/_next/static/media/twitter.b7515a8d.svg","height":24,"width":24});
;// CONCATENATED MODULE: ./public/assets/Icon/instagram.svg
/* harmony default export */ const instagram = ({"src":"/_next/static/media/instagram.edd68b60.svg","height":24,"width":24});
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./components/Layout/Footer.js







const Footer = ()=>{
    const openLinkfacebook = ()=>{
        window.open("https://www.facebook.com/gridgamersapp", "_blank");
    };
    const openLinkTwitter = ()=>{
        window.open("https://twitter.com/GRIDGamersApp", "_blank");
    };
    const openLinkInstagram = ()=>{
        window.open("https://www.instagram.com/gridgamers/", "_blank");
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "xs:px-4 lg:px-20 3xl:px-0 m-auto xs:max-w-screen-xs sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl ",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "py-20 grid xl:grid-rows-1 grid-flow-row xl:grid-flow-col grid-cols-3 xl:grid-cols-12 gap-4",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "row-span-2 col-span-12 xl:col-span-3 xl:col-start-1 xl:col-end-4 flex flex-col items-start ",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                className: "h-10 w-auto mb-6",
                                src: "/assets/grid_logo_dark3.png",
                                alt: "Grid Logo"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                className: "xl:mb-4 text-[black] w-full",
                                children: "Made for Gamers by Gamers"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: " row-span-1 col-span-12 xl:col-span-3 xl:col-start-7 xl:col-end-9 flex flex-col",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                className: " mt-[20px] lg:mt-0 text-[black] font-semibold xs:text-[20px] lg:text-[24px]",
                                children: "Quick Links"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                className: "text-[black] ",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: "/",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            className: "mt-[10px] xs:text-[16px] lg:text-[20px] hover:text-[#298be1] cursor-pointer transition-all text-[black]",
                                            children: "Home"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: "/Accessibility",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            className: "mt-[10px] xs:text-[16px] lg:text-[20px] hover:text-[#298be1] cursor-pointer transition-all text-[black]",
                                            children: "Accessibility"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: "/DevicesSafety",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            className: " mt-[10px] xs:text-[16px] lg:text-[20px] hover:text-[#298be1] cursor-pointer transition-all text-[black]",
                                            children: "Sustainability"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: "/TrademarkBrand",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            className: " mt-[10px] xs:text-[16px] lg:text-[20px] hover:text-[#298be1] cursor-pointer transition-all text-[black]",
                                            children: "Trademark Brand"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: "/GridPartners",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            className: " mt-[10px] xs:text-[16px] lg:text-[20px] hover:text-[#298be1] cursor-pointer transition-all text-[black]",
                                            children: "Grid Partners"
                                        })
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "row-span-1 col-span-12 xl:col-span-3 xl:col-start-9 xl:col-end-11 flex flex-col",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                className: "text-[black] mt-[20px] lg:mt-0 font-semibold xs:text-[20px] lg:text-[24px]",
                                children: "Contact us"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                className: "text-[black]",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: "/CareersPage",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            className: " mt-[10px] xs:text-[16px] lg:text-[20px] hover:text-[#298be1] cursor-pointer transition-all text-[black]",
                                            children: "Careers"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: "/Documentation",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            className: " mt-[10px] xs:text-[16px] lg:text-[20px] hover:text-[#298be1] cursor-pointer transition-all text-[black]",
                                            children: "FAQs"
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                        className: " mt-[10px] xs:text-[16px] lg:text-[20px] hover:text-[#298be1] cursor-pointer transition-all",
                                        children: [
                                            "info@gridgamers.com",
                                            " "
                                        ]
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "row-span-1 col-span-12 xl:col-span-3 xl:col-start-11 xl:col-end-13 flex flex-col",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                className: "text-[black] mt-[20px] lg:mt-0 font-semibold xs:text-[20px] lg:text-[24px]",
                                children: "Follow us"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "flex w-full mt-2 -mx-2",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        onClick: openLinkfacebook,
                                        className: "mx-2 bg-[#19BAEE] rounded-full items-center justify-center flex p-2 shadow-md",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                            src: "/assets/Icon/facebook.svg",
                                            className: "h-6 w-6 cursor-pointer"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        onClick: openLinkTwitter,
                                        className: "cursor-pointer mx-2 bg-[#19BAEE] rounded-full items-center justify-center flex p-2 shadow-md",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                            src: "/assets/Icon/twitter.svg",
                                            className: "h-6 w-6"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        onClick: openLinkInstagram,
                                        className: "cursor-pointer mx-2 bg-[#19BAEE] rounded-full items-center justify-center flex p-2 shadow-md",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                            src: "/assets/Icon/instagram.svg",
                                            className: "h-6 w-6"
                                        })
                                    })
                                ]
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "xs:max-w-screen-xs sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl border-b-[1px] border-b-black-500 mx-auto grid grid-flow-col py-[10px] xl:py-[20px]"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                className: "my-4 text-[black] text-[12px] xl:text-[18px] text-center pb-[50px] xl:pb-0",
                children: [
                    "Copyright \xa9 ",
                    new Date().getFullYear(),
                    ". Grid Platform Inc. All rights reserved."
                ]
            })
        ]
    });
};
/* harmony default export */ const Layout_Footer = (Footer);

// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
;// CONCATENATED MODULE: external "react-scroll"
const external_react_scroll_namespaceObject = require("react-scroll");
;// CONCATENATED MODULE: ./components/misc/ButtonOutline..js


const ButtonOutline_ButtonOutline = ({ children , onClick  })=>{
    return /*#__PURE__*/ _jsxs("button", {
        onClick: onClick,
        className: "font-medium tracking-wide py-2 px-5 text-[15px] lg:text-[20px] sm:px-8 border border-[#298be1] text-[#298be1] outline-none rounded-lg capitalize hover:bg-[#298be1] hover:text-white-500 transition-all ",
        children: [
            " ",
            children
        ]
    });
};
/* harmony default export */ const ButtonOutline_ = ((/* unused pure expression or super */ null && (ButtonOutline_ButtonOutline)));

;// CONCATENATED MODULE: ./public/assets/logo_2.webp
/* harmony default export */ const logo_2 = ({"src":"/_next/static/media/logo_2.c564fb9d.webp","height":546,"width":1187,"blurDataURL":"data:image/webp;base64,UklGRogAAABXRUJQVlA4WAoAAAAQAAAABwAAAwAAQUxQSCEAAAAAbZpiFiMYOxp1IFh4nmdnf6giz3x0e32AbL1jCQsUJhkAVlA4IEAAAADQAQCdASoIAAQAAkA4JZQC7AEUpC/O4AD++uBULOi04mgnJRM+Wf3ZYqAvt8YGtYPRPJajn4eOGXv7mUb+TAAA","blurWidth":8,"blurHeight":4});
;// CONCATENATED MODULE: ./components/Layout/Header.js




// Import react scroll





const Header = ()=>{
    const router = useRouter();
    const { 0: activeLink , 1: setActiveLink  } = useState("Home");
    useEffect(()=>{
        const path = router.pathname.split("/")[1];
        setActiveLink(path ? path.charAt(0).toUpperCase() + path.slice(1) : "Home");
    }, [
        router.pathname
    ]);
    const { 0: scrollActive , 1: setScrollActive  } = useState(false);
    useEffect(()=>{
        window.addEventListener("scroll", ()=>{
            setScrollActive(window.scrollY > 20);
        });
    }, []);
    return /*#__PURE__*/ _jsxs(_Fragment, {
        children: [
            /*#__PURE__*/ _jsx("header", {
                className: "hidden lg:block fixed  top-0 w-full h-[120px] lg:px-20 3xl:px-0 z-30 bg-[black] transition-all " + (scrollActive ? " shadow-md pt-0" : " pt-4"),
                children: /*#__PURE__*/ _jsxs("nav", {
                    className: "xs:max-w-screen-xs sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl border-b-[1px] w-full border-b-black-500 mx-auto grid grid-flow-col py-[50px] sm:py-[20px]",
                    children: [
                        /*#__PURE__*/ _jsx("div", {
                            className: "col-start-1 col-end-2 flex items-start",
                            children: /*#__PURE__*/ _jsx(LogoVPN, {
                                className: "h-[75px] w-[200px]"
                            })
                        }),
                        /*#__PURE__*/ _jsxs("ul", {
                            className: "hidden lg:flex col-start-6 col-end-6 text-white-300 items-center justify-center",
                            children: [
                                /*#__PURE__*/ _jsx(Link, {
                                    activeClass: "active",
                                    href: "/",
                                    children: /*#__PURE__*/ _jsx("p", {
                                        onClick: ()=>{
                                            setActiveLink("Home");
                                        },
                                        className: "px-4 py-2 mx-2 cursor-pointer text-[20px] font-semibold  inline-block relative" + (activeLink === "Home" ? " text-[#19BAEE] animation-active " : " text-white-300 hover:text-[#19BAEE] a"),
                                        children: "Home"
                                    })
                                }),
                                /*#__PURE__*/ _jsx(Link, {
                                    activeClass: "active",
                                    href: "/About",
                                    spy: true,
                                    smooth: true,
                                    duration: 1000,
                                    children: /*#__PURE__*/ _jsx("p", {
                                        onClick: ()=>{
                                            setActiveLink("About");
                                        },
                                        className: "px-4 py-2 mx-2 cursor-pointer text-[20px] font-semibold inline-block relative" + (activeLink === "About" ? " text-[#19BAEE] animation-active " : " text-white-300 hover:text-[#19BAEE] "),
                                        children: "About"
                                    })
                                }),
                                /*#__PURE__*/ _jsx(Link, {
                                    activeClass: "active",
                                    href: "/ConatctUs",
                                    spy: true,
                                    smooth: true,
                                    duration: 1000,
                                    children: /*#__PURE__*/ _jsxs("p", {
                                        onClick: ()=>{
                                            setActiveLink("ConatctUs");
                                        },
                                        className: "px-4 py-2 mx-2 cursor-pointer text-[20px] font-semibold inline-block relative" + (activeLink === "ConatctUs" ? " text-[#19BAEE] animation-active " : " text-white-300 hover:text-[#19BAEE] "),
                                        children: [
                                            "Contact Us",
                                            " "
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ _jsx(Link, {
                                    activeClass: "active",
                                    href: "/Documentation",
                                    spy: true,
                                    smooth: true,
                                    duration: 1000,
                                    children: /*#__PURE__*/ _jsxs("p", {
                                        onClick: ()=>{
                                            setActiveLink("Documentation");
                                        },
                                        className: "px-4 py-2 mx-2 cursor-pointer text-[20px] font-semibold inline-block relative" + (activeLink === "Documentation" ? " text-[#19BAEE] animation-active " : " text-white-300 hover:text-[#19BAEE] "),
                                        children: [
                                            "Documentation",
                                            " "
                                        ]
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ _jsx("div", {
                            className: "col-start-10 col-end-12 font-medium flex justify-end items-center",
                            children: /*#__PURE__*/ _jsx(ButtonOutline, {
                                onClick: ()=>window.open("https://portal.gridgamers.com/", "_self"),
                                children: "Become Hub"
                            })
                        })
                    ]
                })
            }),
            /*#__PURE__*/ _jsx("div", {
                className: "lg:hidden px-[15px] flex justify-center mt-[45px] relative",
                children: /*#__PURE__*/ _jsx(Image, {
                    src: LogoMobile,
                    layout: "fixed",
                    height: 38,
                    width: 80
                })
            }),
            /*#__PURE__*/ _jsx("div", {
                className: "lg:hidden flex justify-start mt-[45px] relative"
            }),
            /*#__PURE__*/ _jsx("nav", {
                className: "fixed lg:hidden w-full bottom-0 left-0 right-0 z-20 shadow-t ",
                children: /*#__PURE__*/ _jsx("div", {
                    className: "bg-[black] sm:px-3",
                    children: /*#__PURE__*/ _jsxs("ul", {
                        className: "flex w-full justify-center items-center text-white-300",
                        children: [
                            /*#__PURE__*/ _jsx(Link, {
                                activeClass: "active",
                                href: "/",
                                children: /*#__PURE__*/ _jsxs("div", {
                                    onClick: ()=>{
                                        setActiveLink("Home");
                                    },
                                    className: "w-[50%]  mx-1 sm:mx-2 px-3 sm:px-4 py-2 flex flex-col items-center text-xs border-t-2 transition-all " + (activeLink === "Home" ? "  border-[#19BAEE] text-[#19BAEE]" : " border-transparent"),
                                    children: [
                                        /*#__PURE__*/ _jsx("svg", {
                                            className: "w-6 h-6",
                                            fill: "none",
                                            stroke: "currentColor",
                                            viewBox: "0 0 24 24",
                                            xmlns: "http://www.w3.org/2000/svg",
                                            children: /*#__PURE__*/ _jsx("path", {
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                strokeWidth: 2,
                                                d: "M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                            })
                                        }),
                                        "Home"
                                    ]
                                })
                            }),
                            /*#__PURE__*/ _jsx(Link, {
                                href: "/About",
                                children: /*#__PURE__*/ _jsxs("div", {
                                    onClick: ()=>{
                                        setActiveLink("About");
                                    },
                                    className: "w-[50%] mx-1 sm:mx-2 px-3 sm:px-4 py-2 flex flex-col items-center text-xs border-t-2 transition-all " + (activeLink === "About" ? "  border-[#19BAEE] text-[#19BAEE]" : " border-transparent "),
                                    children: [
                                        /*#__PURE__*/ _jsx("svg", {
                                            className: "w-6 h-6",
                                            fill: "none",
                                            stroke: "currentColor",
                                            viewBox: "0 0 24 24",
                                            xmlns: "http://www.w3.org/2000/svg",
                                            children: /*#__PURE__*/ _jsx("path", {
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                strokeWidth: 2,
                                                d: "M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                                            })
                                        }),
                                        "About"
                                    ]
                                })
                            }),
                            /*#__PURE__*/ _jsx(Link, {
                                href: "/ConatctUs",
                                children: /*#__PURE__*/ _jsxs("div", {
                                    onClick: ()=>{
                                        setActiveLink("ConatctUs");
                                    },
                                    className: "w-[50%] mx-1 sm:mx-2 px-3 sm:px-4 py-2 flex flex-col items-center text-xs border-t-2 transition-all " + (activeLink === "ConatctUs" ? "  border-[#19BAEE] text-[#19BAEE]" : " border-transparent "),
                                    children: [
                                        /*#__PURE__*/ _jsx("svg", {
                                            xmlns: "http://www.w3.org/2000/svg",
                                            width: "24",
                                            height: "24",
                                            viewBox: "0 0 24 24",
                                            fill: "white",
                                            children: /*#__PURE__*/ _jsx("path", {
                                                d: "M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-.294-14.697h-.006a.999.999 0 0 0-.832.555l-1.893 4.447a1 1 0 0 0 .174 1.054c.169.2.42.315.682.315.126 0 .254-.026.378-.081l4.452-1.893a1.001 1.001 0 0 0 .555-.833v-.006a1 1 0 0 0-.338-.69L9.634 7.924a4.496 4.496 0 0 0-.803 1.375c-.073.186-.229.322-.424.371a.991.991 0 0 0-.725.951c.02.392.189.763.491 1.078l1.892 2.36a1 1 0 0 0 1.334.215c.256-.176.439-.437.491-.749.029-.137.089-.273.185-.394a3.498 3.498 0 0 1 1.006-1.007l2.359-1.892c.314-.302.686-.471 1.078-.491a.992.992 0 0 0 .951.725c.332-.041.631-.18.87-.408a4.497 4.497 0 0 0 1.375-.804l-2.358-2.358a.999.999 0 0 0-.69-.339z"
                                            })
                                        }),
                                        "Contact Us",
                                        " "
                                    ]
                                })
                            }),
                            /*#__PURE__*/ _jsx(Link, {
                                href: "/Documentation",
                                children: /*#__PURE__*/ _jsxs("div", {
                                    onClick: ()=>{
                                        setActiveLink("Documentation");
                                    },
                                    className: "w-[50%] mx-1 sm:mx-2 px-3 sm:px-4 py-2 flex flex-col items-center text-xs border-t-2 transition-all " + (activeLink === "Documentation" ? "  border-[#19BAEE] text-[#19BAEE]" : " border-transparent "),
                                    children: [
                                        /*#__PURE__*/ _jsx("svg", {
                                            className: "w-6 h-6",
                                            fill: "none",
                                            stroke: "currentColor",
                                            viewBox: "0 0 24 24",
                                            xmlns: "http://www.w3.org/2000/svg",
                                            children: /*#__PURE__*/ _jsx("path", {
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                strokeWidth: 2,
                                                d: "M12 14l9-5-9-5-9 5 9 5z"
                                            })
                                        }),
                                        "Documentation",
                                        " "
                                    ]
                                })
                            })
                        ]
                    })
                })
            })
        ]
    });
};
/* harmony default export */ const Layout_Header = ((/* unused pure expression or super */ null && (Header)));

;// CONCATENATED MODULE: ./components/Layout/Layout.js




const Layout = ({ children  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            children,
            /*#__PURE__*/ jsx_runtime_.jsx(Layout_Footer, {})
        ]
    });
};
/* harmony default export */ const Layout_Layout = (Layout);

;// CONCATENATED MODULE: ./pages/_app.js





function MyApp({ Component , pageProps  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(components_SeoHead, {
                title: "Grid Gamers"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Layout_Layout, {
                children: /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                    ...pageProps
                })
            })
        ]
    });
}
/* harmony default export */ const _app = (MyApp);


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
var __webpack_exports__ = __webpack_require__.X(0, [118,676,664,675], () => (__webpack_exec__(4772)));
module.exports = __webpack_exports__;

})();