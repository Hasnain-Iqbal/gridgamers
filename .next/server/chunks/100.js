"use strict";
exports.id = 100;
exports.ids = [100];
exports.modules = {

/***/ 3100:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _QuickLink__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9707);




const ArticleDirectory = ()=>{
    const { 0: structure , 1: setStructure  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    const currentUrl = router.asPath;
    function getPathElements(url) {
        let docIndex = url.indexOf("/Documentation/");
        if (docIndex !== -1) {
            let path = url.slice(docIndex + 1);
            let pathElements = path.split("/");
            return pathElements.map((el)=>el.replace(/-/g, " "));
        }
        return [];
    }
    const wd = getPathElements(currentUrl);
    console.log(wd.join("/").replace(/\s+/g, "-"));
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const fetchStructure = async ()=>{
            const res = await fetch(`/api/getDocumentationStructure?dir=/${wd.join("/").replace(/\s+/g, "-")}`);
            const data = await res.json();
            setStructure(data);
        };
        fetchStructure();
    }, [
        currentUrl
    ]);
    // Recursive function to render directories and files
    const renderStructure = (structure, isTopLevel = true)=>{
        // Separate directories from files
        const directories = structure.filter((item)=>item.type === "directory");
        const files = structure.filter((item)=>item.type === "file");
        // Render files as QuickLink only at the top level if no directories
        if (isTopLevel && directories.length === 0 && files.length > 0) {
            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "flex flex-col rounded-[24px] border border-solid border-[#e6e6e6] bg-[#fefefe] p-2 sm:p-3 mb-4",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "p-3 text-black-900",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                            className: "text-2xl font-bold no-underline pb-6",
                            children: "Available Files"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("hr", {
                            className: "mt-0 border-0 border-t border-solid border-[#e6e6e6]"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "ml-4",
                            children: files.map((file, index)=>{
                                const fullPath = `${currentUrl}/${file.path}`;
                                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_QuickLink__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                    link: fullPath,
                                    text: file.name.replace(/-/g, " ")
                                }, index);
                            })
                        })
                    ]
                })
            });
        }
        // Recursively render directories and files within directories
        return structure.map((item, index)=>{
            if (item.type === "directory") {
                return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "flex flex-col rounded-[24px] border border-solid border-[#e6e6e6] bg-[#fefefe] p-2 sm:p-3 mb-4 shadow-lg",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "p-3 text-black-900",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                    className: "text-2xl font-bold no-underline pb-6",
                                    children: item.name.replace(/-/g, " ")
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("hr", {
                                    className: "mt-0 border-0 border-t border-solid border-[#e6e6e6]"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "ml-4",
                            children: [
                                renderStructure(item.children, false),
                                " "
                            ]
                        })
                    ]
                }, index);
            }
            if (item.type === "file") {
                const fullPath = `${currentUrl}/${item.path}`;
                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_QuickLink__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                    link: fullPath,
                    text: item.name.replace(/-/g, " ")
                }, index);
            }
        });
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "bg-[white]",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "w-4/5 md:w-1/2 mx-auto ",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "flex space-x-2 py-4",
                    children: wd.map((item, index)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), {
                            children: [
                                index < wd.length - 1 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                    href: `/${wd.slice(0, index + 1).join("/").replace(/\s+/g, "-")}`,
                                    className: "text-[black] hover:text-gray-400",
                                    children: item.replace(/-/g, " ")
                                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: "text-[#298be1]",
                                    children: item.replace(/-/g, " ")
                                }),
                                index < wd.length - 1 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: "text-[#298be1]",
                                    children: ">"
                                })
                            ]
                        }, index))
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "flex justify-center mt-4 mb-8 relative group",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "absolute top-1/3 -left-1 pointer-events-none flex items-center fill-white-300 ps-5 group-focus-within:fill-black",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                width: "22",
                                height: "21",
                                viewBox: "0 0 22 21",
                                xmlns: "http://www.w3.org/2000/svg",
                                className: "group-focus-within:fill-black-600",
                                fill: "black",
                                "aria-hidden": "true",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                    fillRule: "evenodd",
                                    clipRule: "evenodd",
                                    d: "M3.27485 8.7001C3.27485 5.42781 5.92757 2.7751 9.19985 2.7751C12.4721 2.7751 15.1249 5.42781 15.1249 8.7001C15.1249 11.9724 12.4721 14.6251 9.19985 14.6251C5.92757 14.6251 3.27485 11.9724 3.27485 8.7001ZM9.19985 0.225098C4.51924 0.225098 0.724854 4.01948 0.724854 8.7001C0.724854 13.3807 4.51924 17.1751 9.19985 17.1751C11.0802 17.1751 12.8176 16.5627 14.2234 15.5265L19.0981 20.4013C19.5961 20.8992 20.4033 20.8992 20.9013 20.4013C21.3992 19.9033 21.3992 19.0961 20.9013 18.5981L16.0264 13.7233C17.0625 12.3176 17.6749 10.5804 17.6749 8.7001C17.6749 4.01948 13.8805 0.225098 9.19985 0.225098Z"
                                })
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                            className: "w-full rounded-[10px] border border-[#000000cc] bg-[#ffffff33] p-4 ps-12 text-lg text-[#ffffff] shadow-sm outline-none transition ease-linear hover:bg-[#ffffff44] focus:border-transparent focus:bg-white-300 focus:text-black-600 placeholder:focus:text-black-600 hover:shadow-search-bar-hover focus:shadow-search-bar-focused peer",
                            type: "text",
                            placeholder: "Search for articles..."
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                    className: "text-4xl font-bold text-black-300 my-8",
                    children: wd[wd.length - 1].replace(/-/g, " ")
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "flex flex-col",
                    children: renderStructure(structure)
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ArticleDirectory);


/***/ })

};
;