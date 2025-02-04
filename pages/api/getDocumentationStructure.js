// import fs from "fs";
// import path from "path";

// export default function handler(req, res) {
//   const { dir } = req.query; // Get the directory from the query string

//   // Default to the 'Welcome-to-Grid' directory if no directory is provided
//   const articleDirPath = path.join(
//     process.cwd(),
//     "pages",
//     dir || "/Documentation/Welcome-to-Grid" // Use the provided directory or fallback
//   );

//   // Function to read all directories and articles, tracking the relative path
//   const getStructure = (dir, currentPath = "") => {
//     const items = fs.readdirSync(dir, { withFileTypes: true });

//     return items
//       .map((item) => {
//         const itemPath = path.join(dir, item.name);
//         const relativePath = path.join(
//           currentPath,
//           item.name.replace(".js", "")
//         ); // Remove .js from the path

//         // If it's a directory, recursively read its contents
//         if (item.isDirectory()) {
//           return {
//             type: "directory",
//             name: item.name,
//             path: relativePath, // Save the current directory path
//             children: getStructure(itemPath, relativePath),
//           };
//         }

//         // If it's a file (and ends with .js), treat it as an article
//         if (
//           item.isFile() &&
//           item.name.endsWith(".js") &&
//           item.name !== "index.js"
//         ) {
//           return {
//             type: "file",
//             name: item.name.replace(".js", ""), // Remove .js from the name
//             path: relativePath, // Use the path without .js
//           };
//         }
//       })
//       .filter(Boolean); // Filter out any undefined entries
//   };

//   // Ensure the directory exists before proceeding
//   if (!fs.existsSync(articleDirPath)) {
//     return res.status(404).json({ error: "Directory not found" });
//   }

//   // Fetch structure for directories under the specified path
//   const documentationStructure = getStructure(articleDirPath);

//   res.status(200).json(documentationStructure);
// }

// pages/api/documentation.js
import documentationStructure from "../../public/documentation.json";

export default function handler(req, res) {
  const { dir } = req.query;
  // Use the provided directory or default to '/Documentation/Welcome-to-Grid'
  const targetDir = dir || "/Documentation/Welcome-to-Grid";

  // Recursively search for the node that matches the target path.
  function findNode(nodes, targetPath) {
    for (const node of nodes) {
      if (node.path === targetPath) {
        return node;
      }
      if (node.children) {
        const found = findNode(node.children, targetPath);
        if (found) return found;
      }
    }
    return null;
  }

  // Given a node and its parent's path, strip the parent's path prefix
  // from the node's full path, and do so recursively for any children.
  function stripBasePath(node, basePath) {
    let relativePath = node.path;
    if (relativePath.startsWith(basePath)) {
      // Remove the basePath part from the full path.
      relativePath = relativePath.slice(basePath.length);
    }
    // Remove any leading slash to get a clean relative path.
    if (relativePath.startsWith("/")) {
      relativePath = relativePath.slice(1);
    }
    // Create a new node with the relative path.
    const newNode = { ...node, path: relativePath };
    if (node.children) {
      newNode.children = node.children.map((child) =>
        stripBasePath(child, basePath)
      );
    }
    return newNode;
  }

  // Find the node corresponding to the requested directory.
  const foundNode = findNode(documentationStructure, targetDir);

  if (!foundNode) {
    return res.status(404).json({ error: "Directory not found" });
  }

  if (foundNode.type === "directory") {
    // For directories, map over the children and strip the base path.
    const children = (foundNode.children || []).map((child) =>
      stripBasePath(child, foundNode.path)
    );
    return res.status(200).json(children);
  } else {
    // For a file, you might also want to adjust the path if needed.
    const relativeFile = stripBasePath(foundNode, targetDir);
    return res.status(200).json(relativeFile);
  }
}
