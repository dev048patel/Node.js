import path from 'path';
import { fileURLToPath } from 'url';

// Get the current file path
const __filename = fileURLToPath(import.meta.url);

// Base file name
console.log(path.basename(__filename)); // Outputs: path_demo.js

// Directory name
console.log(path.dirname(__filename)); // Outputs: Node_course/reference