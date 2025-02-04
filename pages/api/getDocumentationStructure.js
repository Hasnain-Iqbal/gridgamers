import fs from "fs";
import path from "path";

export default function handler(req, res) {
  const { dir } = req.query; // Get the directory from the query string

  // Default to the 'Welcome-to-Grid' directory if no directory is provided
  const articleDirPath = path.join(
    process.cwd(),
    "pages",
    dir || "/Documentation/Welcome-to-Grid" // Use the provided directory or fallback
  );

  // Function to read all directories and articles, tracking the relative path
  const getStructure = (dir, currentPath = "") => {
    const items = fs.readdirSync(dir, { withFileTypes: true });

    return items
      .map((item) => {
        const itemPath = path.join(dir, item.name);
        const relativePath = path.join(
          currentPath,
          item.name.replace(".js", "")
        ); // Remove .js from the path

        // If it's a directory, recursively read its contents
        if (item.isDirectory()) {
          return {
            type: "directory",
            name: item.name,
            path: relativePath, // Save the current directory path
            children: getStructure(itemPath, relativePath),
          };
        }

        // If it's a file (and ends with .js), treat it as an article
        if (
          item.isFile() &&
          item.name.endsWith(".js") &&
          item.name !== "index.js"
        ) {
          return {
            type: "file",
            name: item.name.replace(".js", ""), // Remove .js from the name
            path: relativePath, // Use the path without .js
          };
        }
      })
      .filter(Boolean); // Filter out any undefined entries
  };

  // Ensure the directory exists before proceeding
  if (!fs.existsSync(articleDirPath)) {
    return res.status(404).json({ error: "Directory not found" });
  }

  // Fetch structure for directories under the specified path
  const documentationStructure = getStructure(articleDirPath);

  res.status(200).json(documentationStructure);
}
