"use strict";
(() => {
var exports = {};
exports.id = 980;
exports.ids = [980,842];
exports.modules = {

/***/ 4342:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _public_assets_Icon_search_icon_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3352);
/* harmony import */ var _components_DropdownSearch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8013);
/* harmony import */ var components_OtherHeader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8892);





const GridPartners = ({})=>{
    const { 0: checkedTitles , 1: setCheckedTitles  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const { 0: searchText , 1: setSearchText  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const handleCheckboxChange = (title, isChecked)=>{
        setCheckedTitles((prev)=>isChecked ? [
                ...prev,
                title
            ] : prev.filter((t)=>t !== title));
    };
    const gridPartnerslist = [
        {
            icon: "https://content.partnerpage.io/eyJidWNrZXQiOiJwYXJ0bmVycGFnZS5wcm9kIiwia2V5IjoibWVkaWEvZGlyZWN0b3JpZXMvaW1hZ2VzL2MxODlkZTM3LWU3ODQtNDljYS1iM2E0LTc1MjU4MWZmNjc5Ny9lNWI3OTNhZS1jOTFiLTQyMDItODBlZS0wNGZlYzRhODNiZGIucG5nIiwiZWRpdHMiOnsidG9Gb3JtYXQiOiJ3ZWJwIiwicmVzaXplIjp7IndpZHRoIjoxNTAsImhlaWdodCI6MzAsImZpdCI6Imluc2lkZSIsImJhY2tncm91bmQiOnsiciI6MjU1LCJnIjoyNTUsImIiOjI1NSwiYWxwaGEiOjB9LCJwb3NpdGlvbiI6ImNlbnRyZSJ9fX0=",
            title: "Myers Holum",
            detail: "Accelerate your online transactions using Stripe with Myers-Holum expert services. Experts in Stripe Payments, Billing & Connect, NetSuite, Boomi, & Google Cloud Platform",
            btn: [
                "Specialized partner",
                "ERP"
            ]
        },
        {
            icon: "https://content.partnerpage.io/eyJidWNrZXQiOiJwYXJ0bmVycGFnZS5wcm9kIiwia2V5IjoibWVkaWEvZGlyZWN0b3JpZXMvaW1hZ2VzLzk5YjUxZTEwLThiMDAtNGQ4YS05MDFiLTczYmZkMDViZjFjNi83MzU4ZDA2Ni1hMDNjLTQzMzEtODk3OS02OTk1NzRiZTI2NjcucG5nIiwiZWRpdHMiOnsidG9Gb3JtYXQiOiJ3ZWJwIiwicmVzaXplIjp7IndpZHRoIjoxNTAsImhlaWdodCI6MzAsImZpdCI6Imluc2lkZSIsImJhY2tncm91bmQiOnsiciI6MjU1LCJnIjoyNTUsImIiOjI1NSwiYWxwaGEiOjB9LCJwb3NpdGlvbiI6ImNlbnRyZSJ9fX0=",
            title: "Square 1 Software",
            detail: "Accelerate your online transactions using Stripe with Myers-Holum expert services. Experts in Stripe Payments, Billing & Connect, NetSuite, Boomi, & Google Cloud Platform",
            btn: [
                "Specialized partner",
                "Ecommerce"
            ]
        },
        {
            icon: "https://content.partnerpage.io/eyJidWNrZXQiOiJwYXJ0bmVycGFnZS5wcm9kIiwia2V5IjoibWVkaWEvZGlyZWN0b3JpZXMvaW1hZ2VzL2MxODlkZTM3LWU3ODQtNDljYS1iM2E0LTc1MjU4MWZmNjc5Ny9lNWI3OTNhZS1jOTFiLTQyMDItODBlZS0wNGZlYzRhODNiZGIucG5nIiwiZWRpdHMiOnsidG9Gb3JtYXQiOiJ3ZWJwIiwicmVzaXplIjp7IndpZHRoIjoxNTAsImhlaWdodCI6MzAsImZpdCI6Imluc2lkZSIsImJhY2tncm91bmQiOnsiciI6MjU1LCJnIjoyNTUsImIiOjI1NSwiYWxwaGEiOjB9LCJwb3NpdGlvbiI6ImNlbnRyZSJ9fX0=",
            title: "Klarna",
            detail: "Accelerate your online transactions using Stripe with Myers-Holum expert services. Experts in Stripe Payments, Billing & Connect, NetSuite, Boomi, & Google Cloud Platform",
            btn: [
                "CRM"
            ]
        },
        {
            icon: "https://content.partnerpage.io/eyJidWNrZXQiOiJwYXJ0bmVycGFnZS5wcm9kIiwia2V5IjoibWVkaWEvZGlyZWN0b3JpZXMvaW1hZ2VzL2FiOGEzOGE1LTlhY2MtNDIxMi04NjQ4LTk4ZWMwZmVlNWNiNi82YzQ2ZWYxNS1mZjMwLTQ3ZmItYWNiOS0xYmJlNDZhNDdlMTIucG5nIiwiZWRpdHMiOnsidG9Gb3JtYXQiOiJ3ZWJwIiwicmVzaXplIjp7IndpZHRoIjoxNTAsImhlaWdodCI6MzAsImZpdCI6Imluc2lkZSIsImJhY2tncm91bmQiOnsiciI6MjU1LCJnIjoyNTUsImIiOjI1NSwiYWxwaGEiOjB9LCJwb3NpdGlvbiI6ImNlbnRyZSJ9fX0=",
            title: "Amazon Web Services",
            detail: "Accelerate your online transactions using Stripe with Myers-Holum expert services. Experts in Stripe Payments, Billing & Connect, NetSuite, Boomi, & Google Cloud Platform",
            btn: [
                "Data and analytics"
            ]
        }, 
    ];
    const { 0: filteredPartners , 1: setFilteredPartners  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(gridPartnerslist);
    const handleSearchText = (data)=>{
        setSearchText(data);
        const filtered = gridPartnerslist.filter((item)=>item.title.toLowerCase().includes(data.toLowerCase()));
        console.log("\uD83D\uDE80 ~ handleSearchText ~ filteredasdfsdf214343:", filtered);
        setFilteredPartners(filtered);
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const filteredList = checkedTitles.length === 0 ? gridPartnerslist : gridPartnerslist.filter((item)=>checkedTitles.includes(item.title));
        setFilteredPartners(filteredList);
    }, [
        checkedTitles
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "bg-[white] py-5",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_OtherHeader__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                    text: "Grid Partners"
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "bg-[#F6F9FC] p-8",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        class: "hidden md:block",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "xs:max-w-screen-xs sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl 3xl:max-w-screen-3xl mx-auto",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "h-[500px] p-20 flex justify-between items-center gap-4",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        class: "flex max-w-[500px] flex-col gap-y-4 xl:max-w-[700px]",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                                class: "text-5xl font-bold leading-tight",
                                                children: "Find a Stripe partner with the solution or services you need"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                class: "z-20 typography-base-public",
                                                children: "Work with experts that specialize in solving your business problems."
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                className: "my-10",
                                                src: "https://content.partnerpage.io/eyJidWNrZXQiOiJwYXJ0bmVycGFnZS5wcm9kIiwia2V5IjoibWVkaWEvZGlyZWN0b3JpZXMvaW1hZ2VzL2FiOGEzOGE1LTlhY2MtNDIxMi04NjQ4LTk4ZWMwZmVlNWNiNi82YzQ2ZWYxNS1mZjMwLTQ3ZmItYWNiOS0xYmJlNDZhNDdlMTIucG5nIiwiZWRpdHMiOnsidG9Gb3JtYXQiOiJ3ZWJwIiwicmVzaXplIjp7IndpZHRoIjoxNTAsImhlaWdodCI6MzAsImZpdCI6Imluc2lkZSIsImJhY2tncm91bmQiOnsiciI6MjU1LCJnIjoyNTUsImIiOjI1NSwiYWxwaGEiOjB9LCJwb3NpdGlvbiI6ImNlbnRyZSJ9fX0="
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                className: "my-10",
                                                src: "https://content.partnerpage.io/eyJidWNrZXQiOiJwYXJ0bmVycGFnZS5wcm9kIiwia2V5IjoibWVkaWEvZGlyZWN0b3JpZXMvaW1hZ2VzL2I1MjcxMDBiLTE4NjMtNGUzOS05ZGVjLTlkMTE5MDIyNmMyMC82MjA0ZmYwNy1lMmIwLTRjYzItYWQ2MC03OTY5YWQ4MjljZGUucG5nIiwiZWRpdHMiOnsidG9Gb3JtYXQiOiJ3ZWJwIiwicmVzaXplIjp7IndpZHRoIjoxNTAsImhlaWdodCI6MzAsImZpdCI6Imluc2lkZSIsImJhY2tncm91bmQiOnsiciI6MjU1LCJnIjoyNTUsImIiOjI1NSwiYWxwaGEiOjB9LCJwb3NpdGlvbiI6ImNlbnRyZSJ9fX0="
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                className: "my-10",
                                                src: "https://content.partnerpage.io/eyJidWNrZXQiOiJwYXJ0bmVycGFnZS5wcm9kIiwia2V5IjoibWVkaWEvZGlyZWN0b3JpZXMvaW1hZ2VzLzI3NTYwZmY3LWNiNTgtNDU0Ni1hNTdlLTg1NmJkYTBiZWRjYy83Yjg0Y2U5NS03NjM0LTRmZGItYjRlNS1jMWQ0NWNkMmQ2YWEucG5nIiwiZWRpdHMiOnsidG9Gb3JtYXQiOiJ3ZWJwIiwicmVzaXplIjp7IndpZHRoIjoxNTAsImhlaWdodCI6MzAsImZpdCI6Imluc2lkZSIsImJhY2tncm91bmQiOnsiciI6MjU1LCJnIjoyNTUsImIiOjI1NSwiYWxwaGEiOjB9LCJwb3NpdGlvbiI6ImNlbnRyZSJ9fX0="
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                className: "my-10",
                                                src: "https://content.partnerpage.io/eyJidWNrZXQiOiJwYXJ0bmVycGFnZS5wcm9kIiwia2V5IjoibWVkaWEvZGlyZWN0b3JpZXMvaW1hZ2VzL2QyZDg2MmQ5LTMwZTAtNDA1NC1hMjU3LTVkYTgyZWNhYTY5NS80YmIzNDkyMC1jNDQ4LTQyNzctYThiMC1mYjdiMzI4MzgwNTQucG5nIiwiZWRpdHMiOnsidG9Gb3JtYXQiOiJ3ZWJwIiwicmVzaXplIjp7IndpZHRoIjoxNTAsImhlaWdodCI6MzAsImZpdCI6Imluc2lkZSIsImJhY2tncm91bmQiOnsiciI6MjU1LCJnIjoyNTUsImIiOjI1NSwiYWxwaGEiOjB9LCJwb3NpdGlvbiI6ImNlbnRyZSJ9fX0="
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                className: "my-10",
                                                src: "https://content.partnerpage.io/eyJidWNrZXQiOiJwYXJ0bmVycGFnZS5wcm9kIiwia2V5IjoibWVkaWEvZGlyZWN0b3JpZXMvaW1hZ2VzLzAzNDNiYmM4LTdiNWQtNDU2YS04MDFmLTU0YjQ1NzZhOGVkNi8wNTJhY2M3Yi05MTI3LTRkNjktYjBlMy1mOWIxNTY3ZGE2N2MucG5nIiwiZWRpdHMiOnsidG9Gb3JtYXQiOiJ3ZWJwIiwicmVzaXplIjp7IndpZHRoIjoxNTAsImhlaWdodCI6MzAsImZpdCI6Imluc2lkZSIsImJhY2tncm91bmQiOnsiciI6MjU1LCJnIjoyNTUsImIiOjI1NSwiYWxwaGEiOjB9LCJwb3NpdGlvbiI6ImNlbnRyZSJ9fX0="
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                className: "my-10",
                                                src: "https://content.partnerpage.io/eyJidWNrZXQiOiJwYXJ0bmVycGFnZS5wcm9kIiwia2V5IjoibWVkaWEvZGlyZWN0b3JpZXMvaW1hZ2VzL2U2NTNkMTk5LWE5ZGUtNGE0My1hZmFiLTc0OTI4ZGI1MTM5ZS9kZmRmZWRiMy02NzBlLTQ1ZGMtODI5Yi1mMmUyYjQwYWI0NDMucG5nIiwiZWRpdHMiOnsidG9Gb3JtYXQiOiJ3ZWJwIiwicmVzaXplIjp7IndpZHRoIjoxNTAsImhlaWdodCI6MzAsImZpdCI6Imluc2lkZSIsImJhY2tncm91bmQiOnsiciI6MjU1LCJnIjoyNTUsImIiOjI1NSwiYWxwaGEiOjB9LCJwb3NpdGlvbiI6ImNlbnRyZSJ9fX0="
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                className: "my-10",
                                                src: "https://content.partnerpage.io/eyJidWNrZXQiOiJwYXJ0bmVycGFnZS5wcm9kIiwia2V5IjoibWVkaWEvZGlyZWN0b3JpZXMvaW1hZ2VzL2Q4ZWIwOWEzLWE1NjEtNGIzYy04Yjg4LTkwOGUwYmU1ZWJmNC85Y2RjOTA5ZS1lNTE4LTQ4MWItODEzMy01OTM2ZDllZGFiZTMucG5nIiwiZWRpdHMiOnsidG9Gb3JtYXQiOiJ3ZWJwIiwicmVzaXplIjp7IndpZHRoIjoxNTAsImhlaWdodCI6MzAsImZpdCI6Imluc2lkZSIsImJhY2tncm91bmQiOnsiciI6MjU1LCJnIjoyNTUsImIiOjI1NSwiYWxwaGEiOjB9LCJwb3NpdGlvbiI6ImNlbnRyZSJ9fX0="
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                className: "my-10",
                                                src: "https://content.partnerpage.io/eyJidWNrZXQiOiJwYXJ0bmVycGFnZS5wcm9kIiwia2V5IjoibWVkaWEvZGlyZWN0b3JpZXMvaW1hZ2VzLzhlYzI2YzYzLTQ5OWItNDg3ZS05NzM4LTRlYzgwOGMwMWNlYS8yMjU3N2JmNC00N2NhLTRkODAtODg3Zi1hZDU2YmIxY2Y0MmEuc3ZnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjoxNTAsImhlaWdodCI6MzAsImZpdCI6Imluc2lkZSIsImJhY2tncm91bmQiOnsiciI6MjU1LCJnIjoyNTUsImIiOjI1NSwiYWxwaGEiOjB9LCJwb3NpdGlvbiI6ImNlbnRyZSJ9fX0="
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                className: "my-10",
                                                src: "https://content.partnerpage.io/eyJidWNrZXQiOiJwYXJ0bmVycGFnZS5wcm9kIiwia2V5IjoibWVkaWEvZGlyZWN0b3JpZXMvaW1hZ2VzLzg0ODRmNjlmLTMxOTgtNDZlOS05OGMzLTdkOWNlZDZlMTVjYy9kYjI2ODQ0MS1kNjI1LTQxYTktYTM5OS1hNWJkZDU5OTlhN2EucG5nIiwiZWRpdHMiOnsidG9Gb3JtYXQiOiJ3ZWJwIiwicmVzaXplIjp7IndpZHRoIjoxNTAsImhlaWdodCI6MzAsImZpdCI6Imluc2lkZSIsImJhY2tncm91bmQiOnsiciI6MjU1LCJnIjoyNTUsImIiOjI1NSwiYWxwaGEiOjB9LCJwb3NpdGlvbiI6ImNlbnRyZSJ9fX0="
                                            })
                                        ]
                                    })
                                ]
                            })
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        class: "block md:hidden",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "xs:max-w-screen-xs sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl 3xl:max-w-screen-3xl mx-auto",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                class: "flex max-w-[500px] flex-col gap-y-4 xl:max-w-[700px]",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                        class: "md:text-5xl xs:text-3xl font-bold leading-tight",
                                        children: "Find a Stripe partner with the solution or services you need"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        class: "z-20 typography-base-public",
                                        children: "Work with experts that specialize in solving your business problems."
                                    })
                                ]
                            })
                        })
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "bg-[white] py-10",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "xs:max-w-screen-xs sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl mx-auto",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "mx-auto w-full mb-10",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "flex flex-col justify-start",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    className: "text-start text-[black] font-bold text-2xl",
                                    children: "Specialized partners"
                                })
                            })
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "rounded-lg w-full grid grid-flow-row md:grid-flow-row grid-cols-1 md:grid-cols-2 gap-4 pb-9 mt-[40px] xl:mt-0",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "bg-[white] flex mx-2 rounded-3xl shadow-md hover:shadow-xl h-full",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                    className: "rounded-xl",
                                                    src: "https://assets.partnerpage.io/Stripe/services-implementation.png",
                                                    alt: "Image"
                                                })
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "p-5",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        className: "text-md font-semibold text-[black]",
                                                        children: "Services implementation partners"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        style: {
                                                            fontFamily: "Inter"
                                                        },
                                                        className: "text-[black] mt-[30px] mb-6 text-sm",
                                                        children: "These partners specialize in implementing Stripe payments across broad use cases and industries. They have achieved Stripe's highest levels of technical and business requirements as a Specialized partner."
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                        className: "text-[#0067b8] font-semibold",
                                                        children: "View partners"
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "bg-[white] flex mx-2 rounded-3xl shadow-md hover:shadow-xl h-full",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                    style: {
                                                        width: "-webkit-fill-available"
                                                    },
                                                    className: "rounded-xl",
                                                    src: "https://assets.partnerpage.io/Stripe/billing.png",
                                                    alt: "Image"
                                                })
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "p-5",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        className: "text-md font-semibold text-[black]",
                                                        children: "Billing partners"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        style: {
                                                            fontFamily: "Inter"
                                                        },
                                                        className: "text-[black] mt-[30px] mb-6 text-sm",
                                                        children: "These partners specialize in implementing Stripe payments across broad use cases and industries. They have achieved Stripe's highest levels of technical and business requirements as a Specialized partner."
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                        className: "text-[#0067b8] font-semibold",
                                                        children: "View partners"
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
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "bg-[#F6F9FC] pb-14",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "xs:max-w-screen-xs sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl mx-auto",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "mx-auto w-full py-10",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "flex flex-col justify-start",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    className: "text-start text-[black] font-bold text-2xl",
                                    children: "Find partners"
                                })
                            })
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    class: "hidden md:block",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "grid grid-cols-12 gap-4",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "col-span-3 px-3",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "mb-10",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_DropdownSearch__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                                            component: "careers",
                                                            name: "Category",
                                                            data: gridPartnerslist,
                                                            selectedData: handleCheckboxChange,
                                                            checkedTitles: checkedTitles
                                                        })
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_DropdownSearch__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                                            component: "careers",
                                                            name: "Locations",
                                                            data: gridPartnerslist,
                                                            selectedData: handleCheckboxChange,
                                                            checkedTitles: checkedTitles
                                                        })
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "col-span-9",
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "flex items-center rounded border bg-surface border-transparent shadow-2dp grow mb-10 relative",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                className: "absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500",
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_public_assets_Icon_search_icon_svg__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {})
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                                className: "shadow-md p-2 pl-10 rounded-md text-sm w-3/4 border border-[#E7ECF1] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
                                                                placeholder: "Search Partners",
                                                                value: searchText,
                                                                onChange: (e)=>handleSearchText(e.target.value)
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "rounded-lg w-full grid grid-flow-row md:grid-flow-row grid-cols-1 space-y-2 md:space-y-0 md:grid-cols-3 gap-5",
                                                        children: filteredPartners.map((data, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                className: "flex-start justify-center bg-[white] rounded-[24px] p-2 w-auto shadow-md hover:shadow-xl",
                                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                    className: " mx-auto w-full md:w-auto",
                                                                    children: [
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                            className: "flex items-center h-[68px] justify-center m-auto border-b-[1px] border-[#E7ECf6]",
                                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                                src: data.icon
                                                                            })
                                                                        }),
                                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                            className: "flex flex-col justify-start items-start p-3",
                                                                            children: [
                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                                    className: "text-md text-[black] font-semibold mt-2",
                                                                                    children: data.title
                                                                                }),
                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                                    className: "text-sm font-normal xl:px-0 text-[black] mt-3",
                                                                                    children: data.detail
                                                                                }),
                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                                    className: "flex flex-wrap gap-2 mt-5 text-sm ",
                                                                                    children: data.btn.map((x)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                                            className: "px-2 bg-[#E7ECF1] rounded-xl",
                                                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                                                className: "text-[black]",
                                                                                                children: x
                                                                                            })
                                                                                        }))
                                                                                })
                                                                            ]
                                                                        })
                                                                    ]
                                                                })
                                                            }, index))
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    class: "block md:hidden",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "flex flex-col gap-4 focus:outline-none",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_public_assets_Icon_search_icon_svg__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {})
                                            }),
                                            "                            ",
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_DropdownSearch__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                                name: "Category"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_DropdownSearch__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                                name: "Locations"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                className: "shadow-md p-2 pl-10 rounded-md text-sm w-full border border-[#E7ECF1] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
                                                placeholder: "Search Partners"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "rounded-lg w-full grid grid-flow-row md:grid-flow-row grid-cols-1 space-y-2 md:space-y-0 md:grid-cols-3 gap-5",
                                                children: gridPartnerslist.map((data, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "flex-start justify-center bg-[white] rounded-[24px] p-2 w-auto shadow-md hover:shadow-xl",
                                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            className: " mx-auto w-full md:w-auto",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                    className: "flex items-center h-[68px] justify-center m-auto border-b-[1px] border-[#E7ECf6]",
                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                        src: data.icon
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                    className: "flex flex-col justify-start items-start p-3",
                                                                    children: [
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                            className: "text-md text-[black] font-semibold mt-2",
                                                                            children: data.title
                                                                        }),
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                            className: "text-sm font-normal xl:px-0 text-[black] mt-3",
                                                                            children: data.detail
                                                                        }),
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                            className: "flex flex-wrap gap-2 mt-5 text-sm ",
                                                                            children: data.btn.map((x)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                                    className: "px-2 bg-[#E7ECF1] rounded-xl",
                                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                                        className: "text-[black]",
                                                                                        children: x
                                                                                    })
                                                                                }))
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
                            ]
                        })
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GridPartners);


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
var __webpack_exports__ = __webpack_require__.X(0, [118,676,664,669,892,87], () => (__webpack_exec__(4342)));
module.exports = __webpack_exports__;

})();