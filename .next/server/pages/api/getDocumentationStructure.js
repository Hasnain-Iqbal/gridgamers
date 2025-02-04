"use strict";
(() => {
var exports = {};
exports.id = 856;
exports.ids = [856];
exports.modules = {

/***/ 1921:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ handler)
});

;// CONCATENATED MODULE: external "fs"
const external_fs_namespaceObject = require("fs");
var external_fs_default = /*#__PURE__*/__webpack_require__.n(external_fs_namespaceObject);
;// CONCATENATED MODULE: external "path"
const external_path_namespaceObject = require("path");
var external_path_default = /*#__PURE__*/__webpack_require__.n(external_path_namespaceObject);
;// CONCATENATED MODULE: ./pages/api/getDocumentationStructure.js


function handler(req, res) {
    const { dir  } = req.query; // Get the directory from the query string
    // Default to the 'Welcome-to-Grid' directory if no directory is provided
    const articleDirPath = external_path_default().join(process.cwd(), "pages", dir || "/Documentation/Welcome-to-Grid" // Use the provided directory or fallback
    );
    // Function to read all directories and articles, tracking the relative path
    const getStructure = (dir, currentPath = "")=>{
        const items = external_fs_default().readdirSync(dir, {
            withFileTypes: true
        });
        return items.map((item)=>{
            const itemPath = external_path_default().join(dir, item.name);
            const relativePath = external_path_default().join(currentPath, item.name.replace(".js", "")); // Remove .js from the path
            // If it's a directory, recursively read its contents
            if (item.isDirectory()) {
                return {
                    type: "directory",
                    name: item.name,
                    path: relativePath,
                    children: getStructure(itemPath, relativePath)
                };
            }
            // If it's a file (and ends with .js), treat it as an article
            if (item.isFile() && item.name.endsWith(".js") && item.name !== "index.js") {
                return {
                    type: "file",
                    name: item.name.replace(".js", ""),
                    path: relativePath
                };
            }
        }).filter(Boolean); // Filter out any undefined entries
    };
    // Ensure the directory exists before proceeding
    if (!external_fs_default().existsSync(articleDirPath)) {
        return res.status(404).json({
            error: "Directory not found"
        });
    }
    // Fetch structure for directories under the specified path
    const documentationStructure = getStructure(articleDirPath);
    res.status(200).json(documentationStructure);
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(1921));
module.exports = __webpack_exports__;

})();