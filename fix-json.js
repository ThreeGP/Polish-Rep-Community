const fs = require("fs");

// Read the file
let content = fs.readFileSync("output.txt", "utf8");

// Add brackets and fix missing commas
content = "[" + content.replace(/}\s*{/g, "},\n{") + "]";

// Write back to file
fs.writeFileSync("output.txt", content);
