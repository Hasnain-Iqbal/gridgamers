"use strict";
(() => {
var exports = {};
exports.id = 483;
exports.ids = [483];
exports.modules = {

/***/ 7940:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ConatctUs),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


function ConatctUs({ contactType  }) {
    const { 0: loading , 1: setLoading  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: success , 1: setSuccess  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: state , 1: setState  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
        fullName: "",
        emailAddeess: "",
        type: contactType.length ? contactType[0].code : "",
        mobileNumber: "",
        message: "",
        isChecked: null
    });
    const { 0: invalidState , 1: setInvalidState  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
        fullNameInvalid: false,
        EmailInvalid: false,
        mobileNumberInvalid: false,
        typeInvalid: false,
        messageInvalid: false,
        isCheckedInvalid: false
    });
    const validateEmail = (email)=>{
        return String(email).toLowerCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
    };
    const updateState = (val, prop, invalidProp)=>{
        setSuccess(false);
        setState((prvState)=>({
                ...prvState,
                [prop]: val
            }));
        if (invalidProp) {
            setInvalidState((prvState)=>({
                    ...prvState,
                    [invalidProp]: false
                }));
        }
    };
    const checks = ()=>{
        if (state.fullName === "" || state.fullName < 3) {
            setInvalidState((prvState)=>({
                    ...prvState,
                    fullNameInvalid: true
                }));
            return false;
        } else if (state.emailAddeess === "" || !validateEmail(state.emailAddeess)) {
            setInvalidState((prvState)=>({
                    ...prvState,
                    EmailInvalid: true
                }));
            return false;
        } else if (state.type === "") {
            setInvalidState((prvState)=>({
                    ...prvState,
                    typeInvalid: true
                }));
            return false;
        } else if (state.message === "") {
            setInvalidState((prvState)=>({
                    ...prvState,
                    messageInvalid: true
                }));
            return false;
        } else if (state.isChecked === false || state.isChecked === null || state.isChecked === undefined) {
            setInvalidState((prvState)=>({
                    ...prvState,
                    isCheckedInvalid: true
                }));
            return false;
        } else if (state.isChecked === false || state.isChecked === null) {
            setInvalidState((prvState)=>({
                    ...prvState,
                    isCheckedInvalid: true
                }));
            return false;
        }
        return true;
    };
    const onSubmit = ()=>{
        if (checks()) {
            setLoading(true);
            const requestOptions = {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(state)
            };
            fetch("https://userapi.gridgamers.com/api/v1/setting/contactus", requestOptions).then((response)=>response.json()).then((data)=>{
                setSuccess(true);
                setLoading(false);
                setState({
                    fullName: "",
                    emailAddeess: "",
                    type: contactType.length ? contactType[0].code : "",
                    mobileNumber: "",
                    message: ""
                });
            });
        // setTimeout(() => {
        //   setLoading(false);
        // }, 1000);
        }
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "xs:px-0 md:px-20 3xl:px-0 xs:max-w-screen-xs sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl py-0 md:py-16 mt-[40px] lg:mt-24 mx-auto",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                style: {
                    fontFamily: "Sigmar One"
                },
                className: " text-white-300 font-bold text-center text-[24px] lg:text-[32px] ",
                children: "Contact us"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                className: " text-white-300 text-center text-[14px] lg:text-[18px] ",
                children: "Get in Touch With Us"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "lg:w-1/2 xs:w-full m-auto mt-[50px] bg-transparent md:block p-2",
                children: [
                    success && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: " text-green-500 text-center mb-[10px] text-[14px] lg:text-[18px] ",
                        children: "Your message has been sent successfully.Our representative will conact you shortly,thanks!"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "grid grid-cols-1 lg:grid-cols-2 gap-4 ",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: " mb-4",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                        htmlFor: "name",
                                        className: "text-[16px] font-medium leading-[30px] text-white-300",
                                        children: "Full Name"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                        value: state.fullName,
                                        onChange: (e)=>updateState(e.target.value, "fullName", "fullNameInvalid"),
                                        style: {
                                            borderColor: invalidState.fullNameInvalid ? "red" : null
                                        },
                                        type: "text",
                                        id: "name",
                                        name: "name",
                                        className: "p-[12px] w-full leading-[30px] mt-[4px] border-[1px] text-white-300 border-[#C8C8C8] rounded-[15px] bg-transparent",
                                        placeholder: "Enter Your Full Name"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: " mb-4",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                        htmlFor: "message",
                                        className: "text-[16px] font-medium text-white-300 leading-[30px]",
                                        children: "Email"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                        style: {
                                            borderColor: invalidState.EmailInvalid ? "red" : null
                                        },
                                        value: state.emailAddeess,
                                        onChange: (e)=>updateState(e.target.value, "emailAddeess", "EmailInvalid"),
                                        type: "message",
                                        id: "Email",
                                        name: "Email",
                                        className: "p-[12px] leading-[30px] w-full mt-[4px] border-[1px] text-white-300 border-[#C8C8C8] rounded-[15px] bg-transparent",
                                        placeholder: "Enter Your Email Address"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: " mb-4",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                        htmlFor: "name",
                                        className: "text-[16px] font-medium leading-[30px] text-white-300",
                                        children: "Phone Number"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                        style: {
                                            borderColor: invalidState.mobileNumberInvalid ? "red" : null
                                        },
                                        value: state.mobileNumber,
                                        onChange: (e)=>updateState(e.target.value, "mobileNumber", "mobileNumberInvalid"),
                                        type: "tel",
                                        id: "name",
                                        name: "name",
                                        className: "p-[12px] w-full leading-[30px] mt-[4px] border-[1px] text-white-300 border-[#C8C8C8] rounded-[15px] bg-transparent",
                                        placeholder: "Enter Your Phone Number"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: " mb-4 ",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                        htmlFor: "message",
                                        className: "text-[16px] font-medium text-white-300 leading-[30px]",
                                        children: "Potential"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("select", {
                                        style: {
                                            borderColor: invalidState.typeInvalid ? "red" : null
                                        },
                                        value: state.type,
                                        onChange: (e)=>updateState(e.target.value, "type", "typeInvalid"),
                                        className: " classic p-[16px] w-full 0 leading-[30px] mt-[4px] border-[1px] text-white-300 border-[#C8C8C8] rounded-[15px] bg-transparent",
                                        children: contactType.map((x)=>{
                                            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                className: "rounded-[15px] bg-black-600",
                                                value: x.code,
                                                children: x.name
                                            }, x.id);
                                        })
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "w-full mb-4",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                htmlFor: "message",
                                className: "text-[16px] font-medium text-white-300 leading-[30px]",
                                children: "Message"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("textarea", {
                                style: {
                                    borderColor: invalidState.messageInvalid ? "red" : null
                                },
                                value: state.message,
                                onChange: (e)=>updateState(e.target.value, "message", "messageInvalid"),
                                id: "message",
                                name: "message",
                                className: "p-[20px] leading-[30px] h-[122px] w-full mt-[4px] border-[1px] text-white-300 border-[#C8C8C8] rounded-[15px] bg-transparent",
                                placeholder: "Type here..",
                                defaultValue: ""
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex w-full",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                style: {
                                    borderColor: invalidState.isCheckedInvalid ? "red" : null
                                },
                                type: "checkbox",
                                id: "vehicle3",
                                name: "vehicle3",
                                onClick: (e)=>{
                                    setState((prvState)=>({
                                            ...prvState,
                                            isChecked: !state.isChecked
                                        }));
                                    setInvalidState((prvState)=>({
                                            ...prvState,
                                            isCheckedInvalid: false
                                        }));
                                },
                                checked: state.isChecked
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                style: {
                                    color: invalidState.isCheckedInvalid ? "red" : null
                                },
                                color: "white",
                                className: "text-white-300 ml-5",
                                for: "vehicle2",
                                children: [
                                    " ",
                                    "By checking this box you agreed to receive an SMS from us"
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "p-[2px] w-full mt-[40px]",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                            onClick: onSubmit,
                            className: "w-full bg-[#298BE2] text-white-300 p-[20px] rounded-[15px]",
                            children: loading ? "Sending... Please wait..." : "Send Message"
                        })
                    })
                ]
            })
        ]
    });
}
async function getStaticProps() {
    // Call the fetch method and passing
    // the pokeAPI link
    const response = await fetch("https://userapi.gridgamers.com/api/v1/lookup/contact-type");
    // Parse the JSON
    const data = await (response === null || response === void 0 ? void 0 : response.json());
    // Finally we return the result
    // inside props as allPokemons
    return {
        props: {
            contactType: data === null || data === void 0 ? void 0 : data.response
        }
    };
}


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
var __webpack_exports__ = (__webpack_exec__(7940));
module.exports = __webpack_exports__;

})();