"use strict";
(() => {
var exports = {};
exports.id = 65;
exports.ids = [65];
exports.modules = {

/***/ 180:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);



const departments = [
    "View all",
    "Development",
    "Design",
    "Marketing",
    "Customer Service",
    "Operations",
    "Finance",
    "Management", 
];
// Add more job objects here
const careers = [
    {
        id: "1",
        title: "Product Designer",
        department: "Design",
        location: "Remote",
        type: "Full-Time",
        description: "We're looking for a mid-level product designer to join our team.",
        tags: []
    },
    {
        id: "2",
        title: "Engineering Manager",
        department: "Engineering",
        location: "Remote",
        type: "Full-Time",
        description: "We're looking for an experienced engineering manager to join our team.",
        tags: []
    },
    {
        id: "3",
        title: "Customer Success Manager",
        department: "Customer Service",
        location: "Dallas, TX",
        type: "Full-Time",
        description: "We're looking for a customer success manager to join our team.",
        tags: []
    },
    {
        id: "4",
        title: "Cool Guy",
        department: "Customer Service",
        location: "Dallas, TX",
        type: "Part-Time",
        description: "We're looking for a customer success manager to join our team.",
        tags: [
            "Is Cool"
        ]
    }, 
];
const locations = [
    "View all",
    ...new Set(careers.map((career)=>career.location)), 
];
const employmentTypes = [
    "View all",
    ...new Set(careers.map((career)=>career.type)), 
];
const icons = {
    Remote: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
        className: "w-4 h-4 mr-2",
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        stroke: "currentColor",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: "2",
            d: "M12 11c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zM12 12c-4.418 0-8 1.79-8 4v2h16v-2c0-2.21-3.582-4-8-4z"
        })
    }),
    "Full-Time": /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
        className: "w-4 h-4 mr-2",
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        stroke: "currentColor",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: "2",
            d: "M3 9H21M9 15L11 17L15 13M7 3V5M17 3V5M6.2 21H17.8C18.9201 21 19.4802 21 19.908 20.782C20.2843 20.5903 20.5903 20.2843 20.782 19.908C21 19.4802 21 18.9201 21 17.8V8.2C21 7.07989 21 6.51984 20.782 6.09202C20.5903 5.71569 20.2843 5.40973 19.908 5.21799C19.4802 5 18.9201 5 17.8 5H6.2C5.0799 5 4.51984 5 4.09202 5.21799C3.71569 5.40973 3.40973 5.71569 3.21799 6.09202C3 6.51984 3 7.07989 3 8.2V17.8C3 18.9201 3 19.4802 3.21799 19.908C3.40973 20.2843 3.71569 20.5903 4.09202 20.782C4.51984 21 5.07989 21 6.2 21Z"
        })
    }),
    "Part-Time": /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
        className: "w-4 h-4 mr-2",
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        stroke: "currentColor",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: "2",
            d: "M12 7V12L14.5 13.5M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
        })
    }),
    Contract: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
        className: "w-4 h-4 mr-2",
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        stroke: "currentColor",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: "2",
            d: "M5 3L19 3M7 5H17M9 21H15M3 8H21M7 15H17M5 12H19M7 18H17"
        })
    }),
    Internship: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
        className: "w-4 h-4 mr-2",
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        stroke: "currentColor",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: "2",
            d: "M12 3C10.6739 3 9.40215 3.52678 8.46447 4.46447C7.52678 5.40215 7 6.67392 7 8C7 9.32608 7.52678 10.5979 8.46447 11.5355C9.40215 12.4732 10.6739 13 12 13C13.3261 13 14.5979 12.4732 15.5355 11.5355C16.4732 10.5979 17 9.32608 17 8C17 6.67392 16.4732 5.40215 15.5355 4.46447C14.5979 3.52678 13.3261 3 12 3ZM12 15C8.68629 15 6 17.6863 6 21H18C18 17.6863 15.3137 15 12 15Z"
        })
    }),
    Freelance: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
        className: "w-4 h-4 mr-2",
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        stroke: "currentColor",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: "2",
            d: "M5 3L5.70711 2.29289C5.31658 1.90237 4.68342 1.90237 4.29289 2.29289L5 3ZM4 9C4 9.55228 4.44772 10 5 10C5.55228 10 6 9.55228 6 9H4ZM2.29289 4.29289C1.90237 4.68342 1.90237 5.31658 2.29289 5.70711C2.68342 6.09763 3.31658 6.09763 3.70711 5.70711L2.29289 4.29289ZM6.29289 5.70711C6.68342 6.09763 7.31658 6.09763 7.70711 5.70711C8.09763 5.31658 8.09763 4.68342 7.70711 4.29289L6.29289 5.70711ZM11 3C10.4477 3 10 3.44772 10 4C10 4.55228 10.4477 5 11 5V3ZM20 16C20 16.5523 20.4477 17 21 17C21.5523 17 22 16.5523 22 16H20ZM19.908 4.21799L19.454 5.10899V5.10899L19.908 4.21799ZM20.782 5.09202L19.891 5.54601V5.54601L20.782 5.09202ZM2 16C2 16.5523 2.44772 17 3 17C3.55228 17 4 16.5523 4 16H2ZM4 13C4 12.4477 3.55228 12 3 12C2.44772 12 2 12.4477 2 13H4ZM2 16V15C1.44772 15 1 15.4477 1 16H2ZM22 16H23C23 15.4477 22.5523 15 22 15V16ZM3.09202 19.782L3.54601 18.891L3.09202 19.782ZM2.21799 18.908L3.10899 18.454L2.21799 18.908ZM21.782 18.908L20.891 18.454L21.782 18.908ZM20.908 19.782L20.454 18.891L20.908 19.782ZM4 3V9H6V3H4ZM3.70711 5.70711L5.70711 3.70711L4.29289 2.29289L2.29289 4.29289L3.70711 5.70711ZM4.29289 3.70711L6.29289 5.70711L7.70711 4.29289L5.70711 2.29289L4.29289 3.70711ZM11 5H17.8V3H11V5ZM20 7.2V16H22V7.2H20ZM17.8 5C18.3766 5 18.7488 5.00078 19.0322 5.02393C19.3038 5.04612 19.4045 5.0838 19.454 5.10899L20.362 3.32698C19.9836 3.13419 19.5904 3.06287 19.195 3.03057C18.8114 2.99922 18.3436 3 17.8 3V5ZM22 7.2C22 6.65645 22.0008 6.18864 21.9694 5.80497C21.9371 5.40963 21.8658 5.01641 21.673 4.63803L19.891 5.54601C19.9162 5.59545 19.9539 5.69617 19.9761 5.96784C19.9992 6.25117 20 6.62345 20 7.2H22ZM19.454 5.10899C19.6422 5.20487 19.7951 5.35785 19.891 5.54601L21.673 4.63803C21.3854 4.07354 20.9265 3.6146 20.362 3.32698L19.454 5.10899ZM4 16V13H2V16H4ZM2 17H22V15H2V17ZM21 16V16.8H23V16H21ZM18.8 19H5.2V21H18.8V19ZM3 16.8V16H1V16.8H3ZM5.2 19C4.62345 19 4.25117 18.9992 3.96784 18.9761C3.69617 18.9539 3.59545 18.9162 3.54601 18.891L2.63803 20.673C3.01641 20.8658 3.40963 20.9371 3.80497 20.9694C4.18864 21.0008 4.65645 21 5.2 21V19ZM1 16.8C1 17.3436 0.999222 17.8114 1.03057 18.195C1.06287 18.5904 1.13419 18.9836 1.32698 19.362L3.10899 18.454C3.0838 18.4045 3.04612 18.3038 3.02393 18.0322C3.00078 17.7488 3 17.3766 3 16.8H1ZM3.54601 18.891C3.35785 18.7951 3.20487 18.6422 3.10899 18.454L1.32698 19.362C1.6146 19.9265 2.07354 20.3854 2.63803 20.673L3.54601 18.891ZM21 16.8C21 17.3766 20.9992 17.7488 20.9761 18.0322C20.9539 18.3038 20.9162 18.4045 20.891 18.454L22.673 19.362C22.8658 18.9836 22.9371 18.5904 22.9694 18.195C23.0008 17.8114 23 17.3436 23 16.8H21ZM18.8 21C19.3436 21 19.8114 21.0008 20.195 20.9694C20.5904 20.9371 20.9836 20.8658 21.362 20.673L20.454 18.891C20.4045 18.9162 20.3038 18.9539 20.0322 18.9761C19.7488 18.9992 19.3766 19 18.8 19V21ZM20.891 18.454C20.7951 18.6422 20.6422 18.7951 20.454 18.891L21.362 20.673C21.9265 20.3854 22.3854 19.9265 22.673 19.362L20.891 18.454Z"
        })
    })
};
function CareerPage() {
    const { 0: selectedCareer , 1: setSelectedCareer  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const { 0: selectedDepartment , 1: setSelectedDepartment  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("View all");
    const { 0: selectedLocation , 1: setSelectedLocation  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("View all");
    const { 0: selectedEmploymentType , 1: setSelectedEmploymentType  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("View all");
    const filteredCareers = careers.filter((career)=>(selectedDepartment === "View all" || career.department === selectedDepartment) && (selectedLocation === "View all" || career.location === selectedLocation) && (selectedEmploymentType === "View all" || career.type === selectedEmploymentType));
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "p-8 pb-16 text-white-500 bg-[#141212] min-h-screen",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                className: " py-[3.75rem]"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "w-[55%] h-[125vh] mx-auto flex items-center justify-center",
                style: {
                    fontFamily: "Montserrat"
                },
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "text-center text-[6vw] font-[600] flex-col space-y-16",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            children: "Career at GRID"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                            className: "rounded-lg w-full",
                            src: "https://placehold.co/375x250"
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
                className: "max-w-6xl mx-auto text-center mb-8",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                        className: "text-4xl font-bold mb-4",
                        children: "Be part of our mission"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: "text-lg mb-4",
                        children: "We're looking for passionate people to join us on our mission. We value flat hierarchies, clear communication, and full ownership and responsibility."
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
                className: "max-w-6xl mx-auto flex flex-wrap gap-4 justify-center mb-8",
                children: departments.map((department, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        className: `py-2 px-4 rounded-full  ${selectedDepartment === department ? "bg-primary text-black-900" : "bg-[#43424d] text-white-500"}`,
                        onClick: ()=>setSelectedDepartment(department),
                        children: department
                    }, index))
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
                className: "max-w-6xl mx-auto flex flex-wrap gap-12 justify-evenly items-center mb-12",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex flex-col items-center",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                className: "text-lg font-semibold mb-2",
                                htmlFor: "location-filter",
                                children: "Select Location"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("select", {
                                id: "location-filter",
                                value: selectedLocation,
                                onChange: (e)=>setSelectedLocation(e.target.value),
                                className: "py-4 px-8 rounded bg-[#17171a] text-white-500 w-96 text-lg border border-gray-500",
                                children: locations.map((location, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                        value: location,
                                        children: location
                                    }, index))
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex flex-col items-center",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                className: "text-lg font-semibold mb-2",
                                htmlFor: "employment-type-filter",
                                children: "Select Employment Type"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("select", {
                                id: "employment-type-filter",
                                value: selectedEmploymentType,
                                onChange: (e)=>setSelectedEmploymentType(e.target.value),
                                className: "py-4 px-8 rounded bg-[#17171a] text-white-500 w-96 text-lg border border-gray-500",
                                children: employmentTypes.map((type, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                        value: type,
                                        children: type
                                    }, index))
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
                className: "max-w-6xl mx-auto px-6 rounded-md shadow-md",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                    children: filteredCareers.map((career, index)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                            className: `flex justify-between py-5  ${index !== 0 ? "border-t border-gray-500 mt-2" : ""}`,
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                            className: "text-3xl font-semibold text-[#433bff] mb-1",
                                            children: career.title
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            className: "text-sm text-gray-500 mb-3",
                                            children: career.department
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            className: "text-md text-white-500 mb-2",
                                            children: career.location === "Remote" ? "" : career.location
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            className: "text-sm text-white-500 mb-4",
                                            children: career.description
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "flex",
                                            children: [
                                                career.location === "Remote" && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                                                    className: "bg-[#43424d] text-white-500 my-auto mr-2 px-4 py-1 rounded-full flex items-center pointer-events-none",
                                                    children: [
                                                        icons[career.location],
                                                        career.location
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                                                    className: "bg-[#43424d] text-white-500 my-auto mr-2 px-4 py-1 rounded-full flex items-center pointer-events-none",
                                                    children: [
                                                        icons[career.type],
                                                        career.type
                                                    ]
                                                }),
                                                career.tags.map((tag, idx)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                                                        className: "bg-[#43424d] text-white-500 my-auto mr-2 px-4 py-1 rounded-full flex items-center pointer-events-none",
                                                        children: [
                                                            icons[tag],
                                                            tag
                                                        ]
                                                    }, idx))
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                    href: `career/apply/${career.id}`,
                                    className: "text-[#433bff] font-bold text-2xl hover:underline",
                                    children: "Apply ↗"
                                })
                            ]
                        }, index))
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
                className: "max-w-6xl mx-auto text-center mt-12",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                        className: "text-3xl font-bold mb-4",
                        children: "Have any questions? "
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex justify-center gap-4",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                href: "https://www.linkedin.com/company/yourcompany",
                                target: "_blank",
                                rel: "noopener noreferrer",
                                className: "text-[#0A66C2] font-bold text-xl hover:underline",
                                children: "LinkedIn"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                href: "https://twitter.com/yourcompany",
                                target: "_blank",
                                rel: "noopener noreferrer",
                                className: "text-[#1DA1F2] font-bold text-xl hover:underline",
                                children: "Twitter"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                href: "https://www.facebook.com/yourcompany",
                                target: "_blank",
                                rel: "noopener noreferrer",
                                className: "text-[#4267B2] font-bold text-xl hover:underline",
                                children: "Facebook"
                            })
                        ]
                    })
                ]
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CareerPage);


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
var __webpack_exports__ = (__webpack_exec__(180));
module.exports = __webpack_exports__;

})();