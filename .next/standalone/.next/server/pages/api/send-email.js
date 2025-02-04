"use strict";
(() => {
var exports = {};
exports.id = 957;
exports.ids = [957];
exports.modules = {

/***/ 3595:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "config": () => (/* binding */ config),
  "default": () => (/* binding */ handler)
});

;// CONCATENATED MODULE: external "nodemailer"
const external_nodemailer_namespaceObject = require("nodemailer");
var external_nodemailer_default = /*#__PURE__*/__webpack_require__.n(external_nodemailer_namespaceObject);
;// CONCATENATED MODULE: external "multer"
const external_multer_namespaceObject = require("multer");
var external_multer_default = /*#__PURE__*/__webpack_require__.n(external_multer_namespaceObject);
;// CONCATENATED MODULE: external "util"
const external_util_namespaceObject = require("util");
;// CONCATENATED MODULE: ./pages/api/send-email.js



const upload = external_multer_default()({
    storage: external_multer_default().memoryStorage()
});
// Middleware to handle multipart form data
const uploadMiddleware = (0,external_util_namespaceObject.promisify)(upload.single("resume"));
// Main handler function
async function handler(req, res) {
    if (req.method !== "POST") {
        return res.status(405).json({
            message: "Method Not Allowed"
        });
    }
    try {
        // Process multipart form data using multer
        await uploadMiddleware(req, res);
        const { name , email , jobTitle , jobId , coverLetter  } = req.body;
        const resume = req.file;
        // Configure SMTP transporter for Gmail
        let transporter = external_nodemailer_default().createTransport({
            service: "gmail",
            auth: {
                user: "info@gridgamers.com",
                pass: "rjxz maqk avms emat"
            }
        });
        let mailOptions = {
            from: `Job application for ${jobTitle}, ${jobId} <${email}>`,
            to: "info@gridgamers.com",
            subject: `New Job Application for ${jobTitle}`,
            html: `
        <h3>New Job Application</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Job Title:</strong> ${jobTitle}</p>
        <p><strong>Job ID:</strong> ${jobId}</p>
        <p><strong>Cover Letter:</strong></p>
        <p>${coverLetter}</p>
      `,
            attachments: [
                {
                    filename: resume.originalname,
                    content: resume.buffer
                }, 
            ]
        };
        // Send email
        await transporter.sendMail(mailOptions);
        res.status(200).json({
            message: "Email sent successfully"
        });
    } catch (error) {
        console.error("Error sending email:", error);
        res.status(500).json({
            message: "Error sending email",
            error: error.message
        });
    }
}
const config = {
    api: {
        bodyParser: false
    }
};


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(3595));
module.exports = __webpack_exports__;

})();