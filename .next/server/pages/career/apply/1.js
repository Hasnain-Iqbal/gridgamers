"use strict";
(() => {
var exports = {};
exports.id = 275;
exports.ids = [275];
exports.modules = {

/***/ 8622:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Y": () => (/* binding */ ApplicationForm)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9648);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_2__]);
axios__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



function ApplicationForm({ jobTitle , jobId  }) {
    const { 0: formData , 1: setFormData  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
        name: "",
        email: "",
        coverLetter: "",
        resume: null
    });
    const { 0: errors , 1: setErrors  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});
    const { 0: loading , 1: setLoading  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const handleChange = (e)=>{
        const { name , value  } = e.target;
        setFormData((prev)=>({
                ...prev,
                [name]: value
            }));
    };
    const handleFileChange = (e)=>{
        setFormData((prev)=>({
                ...prev,
                resume: e.target.files[0]
            }));
    };
    const validateForm = ()=>{
        let validationErrors = {};
        if (!formData.name.trim()) {
            validationErrors.name = "Full Name is required.";
        }
        if (!formData.email.trim()) {
            validationErrors.email = "Email Address is required.";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            validationErrors.email = "Email Address is invalid.";
        }
        if (!formData.resume) {
            validationErrors.resume = "Resume is required.";
        } else if (![
            "application/pdf",
            "application/msword",
            "application/vnd.openxmlformats-officedocument.wordprocessingml.document", 
        ].includes(formData.resume.type)) {
            validationErrors.resume = "Resume must be a PDF or Word document.";
        } else if (formData.resume.size > 5 * 1024 * 1024) {
            validationErrors.resume = "Resume must be less than 5 MB.";
        }
        return validationErrors;
    };
    const sendEmail = async (e)=>{
        e.preventDefault();
        const validationErrors = validateForm();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }
        setLoading(true);
        setErrors({});
        const data = new FormData();
        data.append("name", formData.name);
        data.append("email", formData.email);
        data.append("jobTitle", jobTitle);
        data.append("jobId", jobId);
        data.append("coverLetter", formData.coverLetter);
        data.append("resume", formData.resume);
        try {
            await axios__WEBPACK_IMPORTED_MODULE_2__["default"].post("/api/send-email", data, {
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            });
            alert("Application submitted successfully!");
        } catch (error) {
            console.error("Error submitting application:", error);
            alert("An error occurred, please try again.");
        } finally{
            setLoading(false);
        }
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
        onSubmit: sendEmail,
        className: "w-full bg-[#02070c] p-12 rounded-md mt-8",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                type: "hidden",
                name: "job_title",
                value: jobTitle
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                type: "hidden",
                name: "job_id",
                value: jobId
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "mb-6",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                        className: "block text-2xl font-semibold mb-3",
                        htmlFor: "name",
                        children: "Full Name"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                        type: "text",
                        name: "name",
                        value: formData.name,
                        onChange: handleChange,
                        id: "name",
                        className: `w-full p-4 rounded bg-[#17171a] text-white-500 border text-xl ${errors.name ? "border-[#EF4444]" : "border-gray-500"}`,
                        required: true
                    }),
                    errors.name && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: "text-[#EF4444] mt-1",
                        children: errors.name
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "mb-6",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                        className: "block text-2xl font-semibold mb-3",
                        htmlFor: "email",
                        children: "Email Address"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                        type: "email",
                        name: "email",
                        value: formData.email,
                        onChange: handleChange,
                        id: "email",
                        className: `w-full p-4 rounded bg-[#17171a] text-white-500 border text-xl ${errors.email ? "border-[#EF4444]" : "border-gray-500"}`,
                        required: true
                    }),
                    errors.email && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: "text-[#EF4444] mt-1",
                        children: errors.email
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "mb-6",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                        className: "block text-2xl font-semibold mb-3",
                        htmlFor: "resume",
                        children: "Upload Resume (PDF or Word, less than 5 MB)"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                        type: "file",
                        name: "resume",
                        onChange: handleFileChange,
                        id: "resume",
                        className: `w-full p-4 rounded bg-[#17171a] text-white-500 border text-xl ${errors.resume ? "border-[#EF4444]" : "border-gray-500"}`,
                        required: true
                    }),
                    errors.resume && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: "text-[#EF4444] mt-1",
                        children: errors.resume
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "mb-10",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                        className: "block text-2xl font-semibold mb-3",
                        htmlFor: "cover-letter",
                        children: "Cover Letter (optional)"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("textarea", {
                        name: "coverLetter",
                        value: formData.coverLetter,
                        onChange: handleChange,
                        id: "cover-letter",
                        className: "w-full p-4 rounded bg-[#17171a] text-white-500 border border-gray-500 text-xl",
                        rows: "8"
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                type: "submit",
                className: "w-full py-4 rounded bg-primary text-black-900 text-2xl font-bold hover:bg-opacity-90",
                disabled: loading,
                children: loading ? "Submitting..." : "Submit Application"
            })
        ]
    });
}


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8836:
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
/* harmony import */ var _components_CarrerComponents__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8622);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_CarrerComponents__WEBPACK_IMPORTED_MODULE_2__]);
_components_CarrerComponents__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



function ApplyJobPage() {
    const career = {
        title: "Product Designer",
        department: "Design",
        location: "Remote",
        type: "Full-Time",
        description: "We're looking for a mid-level product designer to join our team. You will work on creating beautiful and user-friendly interfaces, collaborating closely with product managers, engineers, and other designers to deliver exceptional user experiences."
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "p-16 text-white-500 bg-black-900 bg-opacity-65 min-h-screen",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                className: " py-[3.75rem]"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "max-w-7xl mx-auto",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "mb-16",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                className: "text-6xl font-bold mb-4 text-white-500",
                                children: career.title
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                className: "text-2xl text-gray-400",
                                children: [
                                    career.department,
                                    " in ",
                                    career.location
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "my-10",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                            className: "bg-primary text-black-900 py-4 px-8 text-2xl font-bold rounded hover:bg-opacity-90",
                            children: "Apply Now"
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
                        className: "mb-16",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                className: "text-4xl font-semibold mb-6 text-white-500",
                                children: "About the Role"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: "text-lg text-white-500 mb-4",
                                children: career.description
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
                        className: "mb-16",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                className: "text-4xl font-semibold mb-6 text-white-500",
                                children: "What the Candidate Will Do"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                className: "list-disc list-inside text-lg text-white-500",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                        className: "mb-4",
                                        children: "Collaborate with product managers and engineers to define and implement innovative solutions for the product direction, visuals, and experience."
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                        className: "mb-4",
                                        children: "Execute all visual design stages from concept to final hand-off to engineering."
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                        className: "mb-4",
                                        children: "Conceptualize original ideas that bring simplicity and user friendliness to complex design roadblocks."
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                        className: "mb-4",
                                        children: "Create wireframes, storyboards, user flows, process flows, and site maps to effectively communicate interaction and design ideas."
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
                        className: "mb-16",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                className: "text-4xl font-semibold mb-6 text-white-500",
                                children: "Requirements"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                className: "list-disc list-inside text-lg text-white-500",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                        className: "mb-4",
                                        children: "3+ years of experience in product design."
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                        className: "mb-4",
                                        children: "Strong portfolio showcasing user-centered design solutions and experience with modern design tools."
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                        className: "mb-4",
                                        children: "Experience in creating wireframes, storyboards, user flows, and site maps."
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                        className: "mb-4",
                                        children: "Excellent visual design skills with sensitivity to user-system interaction."
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
                        className: "mb-16",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                className: "text-4xl font-semibold mb-6 text-white-500",
                                children: "Additional Information"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: "text-lg text-white-500 mb-4",
                                children: "We value diversity and inclusion and encourage people from all backgrounds to apply. We strive to create an environment where everyone can thrive."
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: "text-lg text-white-500",
                                children: "This is a full-time position, and we offer competitive compensation and benefits."
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_CarrerComponents__WEBPACK_IMPORTED_MODULE_2__/* .ApplicationForm */ .Y, {
                        jobTitle: career.title,
                        jobId: 1
                    })
                ]
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ApplyJobPage);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 9648:
/***/ ((module) => {

module.exports = import("axios");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(8836));
module.exports = __webpack_exports__;

})();