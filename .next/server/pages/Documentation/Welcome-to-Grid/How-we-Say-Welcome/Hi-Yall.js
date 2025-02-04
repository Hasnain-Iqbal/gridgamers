"use strict";
(() => {
var exports = {};
exports.id = 871;
exports.ids = [871];
exports.modules = {

/***/ 6083:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Hi_Yall)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
;// CONCATENATED MODULE: ./components/LayoutPage.js



/**
 * LayoutPage Component
 * Main layout component that handles page structure, navigation, and table of contents
 */ const LayoutPage = ({ mainContent  })=>{
    // State Management
    const { 0: rawToc , 1: setRawToc  } = (0,external_react_.useState)([]); // Stores raw TOC data
    const { 0: activeSection , 1: setActiveSection  } = (0,external_react_.useState)(null); // Currently visible section
    const { 0: mobileMenuOpen , 1: setMobileMenuOpen  } = (0,external_react_.useState)(false); // Mobile menu state
    const router = (0,router_.useRouter)();
    const currentUrl = router.asPath;
    /**
   * Registers a section in the table of contents
   * @param {string} id - Section identifier
   * @param {string} title - Section title
   * @param {number} level - Heading level
   */ const registerSection = (id, title, level)=>{
        setRawToc((prevRawToc)=>{
            if (!prevRawToc.find((section)=>section.id === id)) {
                return [
                    ...prevRawToc,
                    {
                        id,
                        title,
                        level
                    }
                ];
            }
            return prevRawToc;
        });
    };
    /**
   * Builds hierarchical TOC structure
   * Uses memoization to prevent unnecessary recalculations
   */ const tocHierarchy = (0,external_react_.useMemo)(()=>{
        const tocHierarchy = [];
        const parentStack = [];
        let childStack = [];
        rawToc.forEach((section)=>{
            if (section.level === 1) {
                tocHierarchy.push({
                    ...section,
                    children: childStack
                });
                childStack = [];
                parentStack.push(section);
            } else if (section.level > 1) {
                if (childStack.length > 0) {
                    if (section.level < childStack[childStack.length - 1].level) {
                        parentStack[parentStack.length - 1].children.push({
                            ...section,
                            children: childStack
                        });
                        childStack = [
                            section
                        ];
                    } else {
                        childStack.push(section);
                    }
                } else {
                    childStack.push(section);
                }
            }
        });
        return tocHierarchy;
    }, [
        rawToc
    ]);
    /**
   * Scroll handling with offset for fixed header
   */ const handleClick = (e, id)=>{
        e.preventDefault();
        const element = document.getElementById(id);
        const yOffset = -150;
        const yPosition = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({
            top: yPosition,
            behavior: "smooth"
        });
    };
    /**
   * Renders TOC items recursively
   * Handles both parent and child items with proper styling
   */ const renderTOCHierarchy = (tocHierarchy)=>{
        return tocHierarchy.map((parent)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                className: "mb-2",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        href: `#${parent.id}`,
                        onClick: (e)=>handleClick(e, parent.id),
                        className: `no-underline ${parent.id === activeSection ? "font-bold text-[#2B7FEA]" : "text-[#1B2559]"}`,
                        children: parent.title
                    }),
                    parent.children && parent.children.length > 0 && /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                        className: "list-none pl-4",
                        children: parent.children.map((child)=>/*#__PURE__*/ jsx_runtime_.jsx("li", {
                                className: `mb-2 ${child.id === activeSection ? "font-bold text-[#2B7FEA]" : "text-[#1B2559]"}`,
                                style: {
                                    marginLeft: `${(child.level - 1) * 20}px`
                                },
                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    href: `#${child.id}`,
                                    onClick: (e)=>handleClick(e, child.id),
                                    className: "no-underline hover:text-[#2B7FEA]",
                                    children: child.title
                                })
                            }, child.id))
                    })
                ]
            }, parent.id));
    };
    /**
   * Recursively clones children and passes registerSection prop
   */ const cloneChildrenWithRegister = (children)=>{
        return external_react_default().Children.map(children, (child)=>{
            if (/*#__PURE__*/ external_react_default().isValidElement(child)) {
                const newProps = {
                    registerSection
                };
                const clonedChild = /*#__PURE__*/ (0,external_react_.cloneElement)(child, newProps, cloneChildrenWithRegister(child.props.children));
                return clonedChild;
            }
            return child;
        });
    };
    /**
   * Extracts path elements from URL for breadcrumb
   */ function getPathElements(url) {
        const cleanUrl = url.split("#")[0];
        let docIndex = cleanUrl.indexOf("/Documentation/");
        if (docIndex !== -1) {
            let path = cleanUrl.slice(docIndex + 1);
            let pathElements = path.split("/");
            return pathElements.map((el)=>el.replace(/-/g, " "));
        }
        return [];
    }
    // Set up intersection observer for active section tracking
    (0,external_react_.useEffect)(()=>{
        const observerOptions = {
            root: null,
            rootMargin: "0px",
            threshold: 0.6
        };
        const observerCallback = (entries)=>{
            entries.forEach((entry)=>{
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        };
        const observer = new IntersectionObserver(observerCallback, observerOptions);
        // Observe all sections
        rawToc.forEach((section)=>{
            const element = document.getElementById(section.id);
            if (element) {
                observer.observe(element);
            }
        });
        // Cleanup observer
        return ()=>{
            rawToc.forEach((section)=>{
                const element = document.getElementById(section.id);
                if (element) {
                    observer.unobserve(element);
                }
            });
        };
    }, [
        rawToc
    ]);
    const wd = getPathElements(currentUrl);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "w-full min-h-screen bg-[white]",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                className: "fixed right-4 bottom-4 z-50 lg:hidden bg-[#2B7FEA] text-white p-3 rounded-full shadow-lg",
                onClick: ()=>setMobileMenuOpen(!mobileMenuOpen),
                children: mobileMenuOpen ? "Close" : "Menu"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: `fixed inset-y-0 right-0 w-64 bg-white shadow-lg transform ${mobileMenuOpen ? "translate-x-0" : "translate-x-full"} transition-transform duration-200 ease-in-out lg:hidden z-40`,
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "p-4",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                            className: "font-bold text-[#1B2559] mb-4 ml-3",
                            children: "Table of Contents"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                            className: "list-none pl-2",
                            children: renderTOCHierarchy(tocHierarchy)
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "w-full px-4 lg:px-0 lg:max-w-[90%] py-4 lg:py-[40px] mb-6 mx-auto",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "grid grid-cols-1 lg:grid-cols-[minmax(200px,_300px)_minmax(600px,_1fr)_minmax(200px,_350px)] gap-4",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("aside", {
                            className: "hidden lg:block p-4"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("main", {
                            className: "bg-[#F7F8FF] p-4 md:p-6 lg:p-8 rounded shadow-md",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "flex flex-wrap gap-2 mt-4 py-4 text-sm md:text-base",
                                    children: wd.map((item, index)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)((external_react_default()).Fragment, {
                                            children: [
                                                index < wd.length - 1 ? /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    href: `/${wd.slice(0, index + 1).join("/").replace(/\s+/g, "-")}`,
                                                    className: "text-[#1B2559] hover:text-[#2B7FEA] no-underline truncate max-w-[150px] md:max-w-none",
                                                    children: item.replace(/-/g, " ")
                                                }) : /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    className: "text-[#1B2559] truncate max-w-[150px] md:max-w-none",
                                                    children: item.replace(/-/g, " ")
                                                }),
                                                index < wd.length - 1 && /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    className: "text-[#1B2559]",
                                                    children: ">"
                                                })
                                            ]
                                        }, index))
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "prose max-w-none",
                                    children: cloneChildrenWithRegister(mainContent.props.children)
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("aside", {
                            className: "hidden lg:block p-4",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "sticky top-20 border-l-2 border-gray-300 pr-4",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                        className: "font-bold text-[#1B2559] mb-4 ml-1",
                                        children: "Table of Contents"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                        className: "list-none pl-2",
                                        children: renderTOCHierarchy(tocHierarchy)
                                    })
                                ]
                            })
                        })
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ const components_LayoutPage = (LayoutPage);

;// CONCATENATED MODULE: ./components/Section.js


/**
 * Section Component
 * Renders a section of content with a heading and optional divider
 * 
 * @param {string} id - Unique identifier for the section
 * @param {string} title - Section heading text
 * @param {number} level - Heading level (h1-h6)
 * @param {React.ReactNode} children - Section content
 * @param {Function} registerSection - Callback to register section in TOC
 * @param {boolean} showDivider - Whether to show dividing line
 * @param {boolean} centered - Whether to center the heading
 * @param {string} className - Additional CSS classes
 */ const Section = ({ id , title , level =1 , children , registerSection , showDivider =false , centered =false , className =""  })=>{
    // Register section in TOC when mounted
    (0,external_react_.useEffect)(()=>{
        if (registerSection) {
            registerSection(id, title, level);
        }
    }, [
        id,
        title,
        level,
        registerSection
    ]);
    // Dynamically choose heading tag based on level
    const Tag = `h${level}`;
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        id: id,
        className: `my-4 md:my-6 lg:my-8 side-block w-full px-4 md:px-6 lg:px-8 ${className}`,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Tag, {
                className: `font-bold text-lg md:text-xl lg:text-2xl mb-3 md:mb-4 ${centered ? "text-center" : ""} ${className}`,
                children: title
            }),
            showDivider && /*#__PURE__*/ jsx_runtime_.jsx("hr", {
                className: "border-t border-gray-300 mb-4"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: `mt-4 space-y-4 ${className}`,
                children: children
            })
        ]
    });
};
/* harmony default export */ const components_Section = (Section);

;// CONCATENATED MODULE: ./pages/Documentation/Welcome-to-Grid/How-we-Say-Welcome/Hi-Yall.js




/**
 * Renders the GRID Gamers welcome and setup guide
 */ const Page1 = ()=>{
    const mainContent = /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "space-y-8 md:space-y-12",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(components_Section, {
                title: "Welcome to GRID Gamers!",
                id: "welcome",
                level: 1,
                centered: true,
                className: "text-[#2B7FEA]",
                children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                    className: "text-[#1B2559] text-base md:text-lg max-w-3xl mx-auto",
                    children: "We are excited to welcome you to the esports global community! As part of the GRID Gamers network, your school will soon be hosting and organizing esports tournaments, building a strong community of gamers, and providing students with exciting opportunities. This welcome package will guide you through everything you need to get started."
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(components_Section, {
                title: "How to Get Started",
                id: "how-to-get-started",
                level: 1,
                className: "text-[#2B7FEA]",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        className: "text-[#1B2559] text-base md:text-lg mb-4",
                        children: "Each school needs to designate a Tournament Organizer (TO), who will manage your school's esports program. The TO will:"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                        className: "text-[#1B2559] list-disc pl-4 md:pl-6 space-y-2",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                children: "Establish a school league"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                children: "Host tournaments"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                children: "Set up a gaming facility (GC)"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                children: "Select the gaming consoles and games"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                children: "Manage student signups, training, and tournament events"
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(components_Section, {
                title: "Steps for the Tournament Organizer (TO)",
                id: "steps-for-TO",
                level: 1,
                className: "text-[#2B7FEA]",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ol", {
                    className: "list-decimal pl-4 md:pl-16 space-y-8 ml-3",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(components_Section, {
                                title: "Download the GRID Gamers App",
                                id: "download-app",
                                level: 2,
                                className: "text-[#1B2559]",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        className: "text-[#1B2559] mb-4",
                                        children: "Start by downloading our tournament management app on your mobile device."
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                        src: "/iOSGRID.png",
                                        alt: "Screenshot of the GRID Gamers mobile app download page",
                                        className: "w-full max-w-2xl mx-auto rounded-lg shadow-md"
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(components_Section, {
                                title: "Sign Up as a Player",
                                id: "sign-up-player",
                                level: 2,
                                className: "text-[#1B2559]",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        className: "text-[#1B2559] mb-4",
                                        children: "Once the app is installed, sign up as a player."
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "grid grid-cols-1 sm:grid-cols-2 gap-4",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "flex justify-center items-center",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                    src: "/DocumentImages/IMG_1559.PNG",
                                                    alt: "Sign up process step 1",
                                                    className: "w-full h-auto object-cover rounded-lg shadow-md"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "flex justify-center items-center",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                    src: "/DocumentImages/IMG_1560.PNG",
                                                    alt: "Sign up process step 2",
                                                    className: "w-full h-auto object-cover rounded-lg shadow-md"
                                                })
                                            })
                                        ]
                                    })
                                ]
                            })
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(components_Section, {
                title: "Setting Up a Gaming Facility (GC)",
                id: "setup-gaming-facility",
                level: 1,
                className: "text-[#2B7FEA]",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                    className: "space-y-8",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(components_Section, {
                                title: "Choose a Location",
                                id: "choose-location",
                                level: 2,
                                className: "text-[#1B2559]",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        className: "text-[#1B2559] mb-4",
                                        children: "Identify where the gaming center will be."
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                        src: "/DocumentImages/Venues.png",
                                        alt: "Gaming facility locations",
                                        className: "w-full md:w-1/2 mx-auto rounded-lg shadow-md"
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(components_Section, {
                                title: "Equip the Facility",
                                id: "equip-facility",
                                level: 2,
                                className: "text-[#1B2559]",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        className: "text-[#1B2559] mb-4",
                                        children: "Ensure the facility has the necessary power and internet capacity."
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                        src: "/DocumentImages/energy.webp",
                                        alt: "Facility equipment setup",
                                        className: "w-full md:w-1/2 mx-auto rounded-lg shadow-md"
                                    })
                                ]
                            })
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(components_Section, {
                title: "Scheduling the First Event",
                id: "schedule-event",
                level: 1,
                className: "text-[#2B7FEA]",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        className: "text-[#1B2559] mb-6",
                        children: "Now that everything is set up, you're ready to create your first tournament event! Use the Scheduler to plan the event based on your facility's setup and availability."
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "flex justify-center items-center",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                    src: "/DocumentImages/Schedule1.png",
                                    alt: "Event scheduling step 1",
                                    className: "w-full h-auto object-cover rounded-lg shadow-md"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "flex justify-center items-center",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                    src: "/DocumentImages/Schedule2.png",
                                    alt: "Event scheduling step 2",
                                    className: "w-full h-auto object-cover rounded-lg shadow-md"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "flex justify-center items-center",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                    src: "/DocumentImages/Schedule3.png",
                                    alt: "Event scheduling step 3",
                                    className: "w-full h-auto object-cover rounded-lg shadow-md"
                                })
                            })
                        ]
                    })
                ]
            })
        ]
    });
    return /*#__PURE__*/ jsx_runtime_.jsx(components_LayoutPage, {
        mainContent: mainContent
    });
};
/* harmony default export */ const Hi_Yall = (Page1);


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
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(6083));
module.exports = __webpack_exports__;

})();