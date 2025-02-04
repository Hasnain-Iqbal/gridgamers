"use strict";
(() => {
var exports = {};
exports.id = 103;
exports.ids = [103,842];
exports.modules = {

/***/ 9879:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Documentation)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./components/QuickLink.js
var QuickLink = __webpack_require__(9707);
;// CONCATENATED MODULE: external "prop-types"
const external_prop_types_namespaceObject = require("prop-types");
var external_prop_types_default = /*#__PURE__*/__webpack_require__.n(external_prop_types_namespaceObject);
;// CONCATENATED MODULE: ./components/ArticleContainer.js



const ArticleContainer = ({ href , numberOfArticles , title , imgSrc , text  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
        // flex grow overflow-hidden border border-solid no-underline transition ease-linear hover:border-primary items-center gap-6 px-6 py-6 border-[#e6e6e6] bg-white-300 rounded-[24px] hover:text-primary"
        className: "lg:flex xs:block grow items-center justify-center gap-6 px-6 py-6 hover:text-primary shadow-md hover:shadow-lg rounded-xl border-[1px] border-gray-500",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "order-1 xs:order-1 items-center justify-center bg-cover bg-center xs:mb-5 md:mb-0",
                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                    className: "h-[200px] rounded-xl border-[1px] border-gray-500 shadow-md",
                    src: imgSrc,
                    alt: "Placeholder"
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "order-2 xs:order-2 w-3/4 flex flex-col justify-between h-full",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "flex flex-col",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                className: "text-2xl font-bold mb-3",
                                children: title
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                className: "text-sm text-[#737373]",
                                children: numberOfArticles
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                        href: href,
                        className: "flex items-center gap-1 text-[#0067b8] text-md",
                        children: [
                            text,
                            /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                fill: "#0067b8",
                                height: "12px",
                                width: "12px",
                                version: "1.1",
                                id: "Layer_1",
                                viewBox: "0 0 330 330",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                    id: "XMLID_222_",
                                    d: "M250.606,154.389l-150-149.996c-5.857-5.858-15.355-5.858-21.213,0.001 c-5.857,5.858-5.857,15.355,0.001,21.213l139.393,139.39L79.393,304.394c-5.857,5.858-5.857,15.355,0.001,21.213 C82.322,328.536,86.161,330,90,330s7.678-1.464,10.607-4.394l149.999-150.004c2.814-2.813,4.394-6.628,4.394-10.606 C255,161.018,253.42,157.202,250.606,154.389z"
                                })
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
ArticleContainer.propTypes = {
    href: (external_prop_types_default()).string.isRequired,
    numberOfArticles: (external_prop_types_default()).number.isRequired,
    title: (external_prop_types_default()).string.isRequired,
    imgSrc: (external_prop_types_default()).string.isRequired,
    text: (external_prop_types_default()).string.isRequired
};
/* harmony default export */ const components_ArticleContainer = (ArticleContainer);

;// CONCATENATED MODULE: ./components/FAQ.js


const FAQ = ()=>{
    const faqs = [
        {
            question: "What is Microsoft Copilot?",
            answer: "Microsoft Copilot is an AI-powered digital assistant designed to engage in conversations and help people with a range of tasks and activities on their devices."
        },
        {
            question: "What are the latest changes to Copilot and Copilot Pro?",
            answer: "Here are the latest changes to Copilot and Copilot Pro..."
        },
        {
            question: "What can Copilot do?",
            answer: "Copilot can perform a wide range of tasks including..."
        },
        {
            question: "How should I talk to Copilot?",
            answer: "When talking to Copilot, use clear and concise commands."
        },
        {
            question: "How do I access Copilot?",
            answer: "You can access Copilot by navigating to..."
        },
        {
            question: "What is Visual Search in Copilot and how does it work?",
            answer: "Visual Search in Copilot allows users to..."
        },
        {
            question: "Where can I get answers to my Copilot Pro related questions?",
            answer: "You can get answers to your Copilot Pro questions at..."
        }, 
    ];
    const { 0: expanded , 1: setExpanded  } = (0,external_react_.useState)([]);
    const { 0: isAllExpanded , 1: setIsAllExpanded  } = (0,external_react_.useState)(false);
    const toggleItem = (index)=>{
        setExpanded((prev)=>prev.includes(index) ? prev.filter((i)=>i !== index) : [
                ...prev,
                index
            ]);
    };
    const expandAll = ()=>{
        setExpanded(faqs.map((_, index)=>index));
        setIsAllExpanded(true);
    };
    const collapseAll = ()=>{
        setExpanded([]);
        setIsAllExpanded(false);
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "w-full",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "flex justify-between items-center mb-4",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                        className: "text-2xl",
                        children: "Get the most out of Copilot"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "flex gap-4",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                onClick: expandAll,
                                className: "text-[#1a59c8] hover:underline",
                                disabled: isAllExpanded,
                                children: "Expand All"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                className: "text-gray-400",
                                children: " | "
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                onClick: collapseAll,
                                className: "text-[#1a59c8] hover:underline",
                                disabled: !isAllExpanded,
                                children: "Collapse All"
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "space-y-4",
                children: faqs.map((faq, index)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "border-b border-gray-400 border-dotted py-4",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                                className: "w-full flex gap-3 items-center text-left font-semibold text-[black]",
                                onClick: ()=>toggleItem(index),
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: "text-[#1a59c8]",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                            xmlns: "http://www.w3.org/2000/svg",
                                            viewBox: "0 0 5 7",
                                            height: "0.75em",
                                            width: "0.75em",
                                            className: `px-icon common-faq-item__icon ${expanded.includes(index) ? "rotate-90" : ""}`,
                                            tag: "span",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                xmlns: "http://www.w3.org/2000/svg",
                                                d: "M0 6.608V.392C0 .176.188 0 .42 0a.44.44 0 0 1 .263.086l4.16 3.108a.375.375 0 0 1 0 .612L.682 6.914a.44.44 0 0 1-.59-.061A.376.376 0 0 1 0 6.608Z",
                                                fill: "currentColor",
                                                "fill-rule": "nonzero"
                                            })
                                        })
                                    }),
                                    faq.question
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: `mt-2 text-[black] overflow-hidden transition-all duration-500 ease-in-out ${expanded.includes(index) ? "max-h-[200px] opacity-100 visible" : "max-h-0 opacity-0 invisible"}`,
                                children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    className: "mt-2 ml-6 text-[black] max-w-[750px]",
                                    children: faq.answer
                                })
                            })
                        ]
                    }, index))
            })
        ]
    });
};
/* harmony default export */ const components_FAQ = (FAQ);

// EXTERNAL MODULE: ./components/OtherNavbars.js
var OtherNavbars = __webpack_require__(1020);
// EXTERNAL MODULE: ./components/VideoModal.js
var VideoModal = __webpack_require__(1443);
// EXTERNAL MODULE: ./components/OtherHeader.js
var OtherHeader = __webpack_require__(8892);
;// CONCATENATED MODULE: ./pages/Documentation/index.js








const index = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "bg-[white]",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "bg-[white] py-5",
                children: /*#__PURE__*/ jsx_runtime_.jsx(OtherHeader/* default */.Z, {
                    text: ""
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                class: "hidden md:block",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "xs:max-w-screen-xs sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl 3xl:max-w-screen-3xl mx-auto",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "bg-[url('https://cxcs.microsoft.net/static/public/central/neutral/4ee76be2-dfde-4b30-9fd9-94e8aeb0cbf2/bf2d747a5c6d2b3fe0e445914944bf0d19ecd5b6.jpg')] bg-no-repeat p-24 bg-cover flex",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "bg-[white] w-[40%] p-10",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                    className: "text-start text-[black] font-semibold leading-tight text-3xl",
                                    children: "Frequently Asked Questions"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    style: {
                                        fontFamily: "Inter"
                                    },
                                    className: "text-[black] my-5 text-sm",
                                    children: "The sustainability of our products begins with their design."
                                })
                            ]
                        })
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                class: "block md:hidden",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl 3xl:max-w-screen-3xl mx-auto",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        class: "flex flex-col w-full",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "bg-[url('https://cxcs.microsoft.net/static/public/central/neutral/4ee76be2-dfde-4b30-9fd9-94e8aeb0cbf2/bf2d747a5c6d2b3fe0e445914944bf0d19ecd5b6.jpg')] bg-no-repeat p-24 bg-cover flex"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "mx-auto px-4 py-6 w-11/12 justify-center items-center text-center shadow-md",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                        className: "text-3xl font-semibold text-[black] mb-4 text-balance",
                                        children: "Frequently Asked Questions"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        className: "text-[black] text-md",
                                        children: "The sustainability of our products begins with their design"
                                    })
                                ]
                            })
                        ]
                    })
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: " xs:max-w-screen-xs sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl 3xl:max-w-screen-3xl mx-auto",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "bg-[white] w-full p-10",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                className: "text-center text-[black] font-semibold leading-tight text-3xl",
                                children: "Explore"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                className: "text-center text-[black] my-5 text-sm",
                                children: "The sustainability of our products begins with their design."
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "grid auto-rows-auto gap-x-4 sm:gap-x-6 gap-y-4 sm:gap-y-6 md:grid-cols-2 pb-12",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(components_ArticleContainer, {
                                href: "/Documentation/Welcome-to-Grid",
                                numberOfArticles: "Create amazing artwork with just a few words. Microsoft Paint Cocreator will help you unleash your creativity and make your own artworks with the help of AI.",
                                title: "Generate single stage tournament",
                                text: "Learn more",
                                imgSrc: "https://cxcs.microsoft.net/static/public/cross-app/neutral/2fcacd1f-1fc3-491b-a0a1-10efef238958/43d70089ab2c824e8a3fecba37cf3b839b362740.jpg"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(components_ArticleContainer, {
                                href: "#",
                                numberOfArticles: "Grid AI pro is the platform to provide centralized AI assistance. Learn how to achieve and create more with Copilot on Windows.",
                                title: "What is GRID AI Pro",
                                text: "Learn more",
                                imgSrc: "https://cxcs.microsoft.net/static/public/windows/neutral/82caca01-ad9b-4d44-bfd6-3274eae6cf04/6104754660f1c7290496e758e0706c7a7af5994a.jpg"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(components_ArticleContainer, {
                                href: "#",
                                numberOfArticles: "The Microsoft 365 Copilot app is your everyday productivity app for work and life. Your starting place to ask, create, and draft with Copilot, plus your favorite apps and content in one place.",
                                title: "The Microsoft 365 Copilot app is here",
                                text: "Learn more",
                                imgSrc: "https://cxcs.microsoft.net/static/public/cross-app/neutral/be822cca-c6ba-478d-8885-171897317c74/f3904449a66ad8e150ba67a58151c6d7527adf8f.png"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(components_ArticleContainer, {
                                href: "#",
                                numberOfArticles: "Get productive quickly with these Microsoft 365 videos, tutorials, and resources.",
                                title: "Microsoft 365 Training Center",
                                text: "Learn more",
                                imgSrc: "https://cxcs.microsoft.net/static/public/cross-app/neutral/e8353844-a8a1-4be1-8fca-18c6281bfb14/c7c64d5fb915b9ab342019d45e7482bc82d60606.jpg"
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "max-w-[95%] sm:max-w-[90%] md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl 3xl:max-w-screen-3xl m-auto xs:px-4 lg:px-20 3xl:px-0 py-[40px] lg:py-[100px] ",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "x-auto",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "flex items-start j justify-center pb-10 w-full px-[10px] xl:px-4 sm:w-auto mx-auto sm:mx-0",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: " mx-auto w-full ",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: `flex flex-col justify-center items-center transition-all duration-700 ease-in-out transform`,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        className: " text-center text-[black] font-medium leading-10 text-[2rem] md:text-[2.5rem]",
                                        children: "Powerful Tools Suite"
                                    })
                                })
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "rounded-lg w-full grid grid-flow-row md:grid-flow-row grid-cols-1 space-y-2 md:space-y-0 md:grid-cols-3 pb-9 xl:mt-0 ",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "border-2 border-[#f2f2f2] flex-start justify-center xl:mt-0 rounded-[24px] md:mx-3 w-auto p-5 shadow-sm",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "mx-auto w-full md:w-auto",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "flex items-center justify-center m-auto",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx(VideoModal/* default */.Z, {
                                                    thumb: "https://cxcs.microsoft.net/static/public/cross-app/neutral/e8353844-a8a1-4be1-8fca-18c6281bfb14/c7c64d5fb915b9ab342019d45e7482bc82d60606.jpg",
                                                    thumbWidth: "500px",
                                                    thumbHeight: "500px",
                                                    thumbAlt: "Video Thumbnail" // Video Height
                                                    ,
                                                    addThumNail: true
                                                })
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "flex flex-col justify-center items-center mt-[12px] xl:mt-[20px] ",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                        className: "text-[1.125rem] text-center text-[black] font-semibold",
                                                        children: "What is Grid?"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                        className: "text-[1rem] lg:px-8 xl:px-0 text-pretty text-center text-[black] mt-[12px] xl:mt-[20px]",
                                                        children: "GRID is a first of its kind mobile events and gaming app where you can meet other gamers and show your skills by attending events and tournaments."
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "border-2 border-[#f2f2f2] flex-start justify-center xl:mt-0 rounded-[24px] md:mx-3 w-auto p-5 shadow-sm",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "mx-auto w-full md:w-auto",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "flex items-center justify-center m-auto",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx(VideoModal/* default */.Z, {
                                                    thumb: "https://cxcs.microsoft.net/static/public/cross-app/neutral/2fcacd1f-1fc3-491b-a0a1-10efef238958/43d70089ab2c824e8a3fecba37cf3b839b362740.jpg",
                                                    thumbWidth: "500px",
                                                    thumbHeight: "500px",
                                                    thumbAlt: "Video Thumbnail" // Video Height
                                                    ,
                                                    addThumNail: true
                                                })
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "flex flex-col justify-center items-center mt-[12px] xl:mt-[20px] ",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                        className: "text-[1.125rem] text-center text-[black] font-semibold",
                                                        children: "What is Grid AI?"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                        className: "text-[1rem] lg:px-8 xl:px-0 text-center text-[black] mt-[12px] xl:mt-[20px]",
                                                        children: "GRID is a first of its kind mobile events and gaming app where you can meet other gamers and show your skills by attending events and tournaments."
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "border-2 border-[#f2f2f2] flex-start justify-center xl:mt-0 rounded-[24px] md:mx-3 w-auto p-5 shadow-sm",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "mx-auto w-full md:w-auto",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "flex items-center justify-center m-auto",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx(VideoModal/* default */.Z, {
                                                    thumb: "https://cxcs.microsoft.net/static/public/cross-app/neutral/be822cca-c6ba-478d-8885-171897317c74/f3904449a66ad8e150ba67a58151c6d7527adf8f.png",
                                                    thumbWidth: "500px",
                                                    thumbHeight: "500px",
                                                    thumbAlt: "Video Thumbnail",
                                                    addThumNail: true
                                                })
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "flex flex-col justify-center items-center mt-[12px] xl:mt-[20px] ",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                        className: "text-[1.125rem] text-center text-[black] font-semibold",
                                                        children: "What is Grid AI?"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                        className: "text-[1rem] lg:px-8 xl:px-0 text-center text-[black] mt-[12px] xl:mt-[20px]",
                                                        children: "GRID is a first of its kind mobile events and gaming app where you can meet other gamers and show your skills by attending events and tournaments."
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                })
                            ]
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "bg-[#f2f2f2] xs:max-w-screen-xs sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl 3xl:max-w-screen-3xl mx-auto",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "grid grid-cols-1 md:grid-cols-2 gap-12 mb-16 xs:p-4 lg:p-10",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "bg-[#f2f2f2] p-4",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                        className: "text-2xl md:text-3xl font-semibold text-[black] mb-6",
                                        children: "Achieve the extraordinary with a Grid AI Pro subscription"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        className: "text-[black] text-base mb-6",
                                        children: "Our grant program supports researchers, startups, nonprofits, and assistive technology companies around the world to develop innovative technologies that empower people living with disabilities."
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                        className: "text-[#0067b8] text-base font-medium",
                                        children: "Learn about"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                    className: "w-full h-auto rounded-lg",
                                    src: "https://cxcs.microsoft.net/static/public/cross-app/neutral/ba7b1ade-c3a1-4b8f-aae9-d4f524e937b5/4d8e204eb8b455737d30cfbf2d4059003452f9c2.png",
                                    alt: "Driving impact"
                                })
                            })
                        ]
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "xs:max-w-screen-xs sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl 3xl:max-w-screen-3xl mx-auto",
                children: /*#__PURE__*/ jsx_runtime_.jsx(components_FAQ, {})
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "xs:max-w-screen-xs sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl 3xl:max-w-screen-3xl mx-auto pb-10",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "relative w-full bg-[#e6e6e6]",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "m-auto xs:max-w-screen-xs sm:max-w-screen-sm md:max-w-screen-md xl:max-w-screen-xl 2xl:max-w-screen-2xl py-[28px] w-full mt-[44px]",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "flex flex-col items-center justify-center xl:w-[60%] m-auto",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    className: "text-4xl text-[black] text-center font-semibold xs:w-2/3 xs:leading-[30px] mt-[24px] lg:leading-10",
                                    children: "Contact us"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    className: "text-md text-center text-[black] leading-8 mb-3 mt-[20px] lg:mt-[24px]",
                                    children: "Questions? Send an inquiry to the Environmental Compliance team."
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                    className: "text-[#0067b8]",
                                    children: "Email our team"
                                })
                            ]
                        })
                    })
                })
            })
        ]
    });
};
/* harmony default export */ const Documentation = (index);


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
var __webpack_exports__ = __webpack_require__.X(0, [118,676,664,675,669,892,443,707], () => (__webpack_exec__(9879)));
module.exports = __webpack_exports__;

})();