import path from 'path';
import url from 'url';

const filePath = './dir1/dir2/test.txt';

// basename()
console.log(path.basename(filePath)); // Output: test.txt

// di5rname()
console.log(path.dirname(filePath)); // Output: ./dir1/dir2

// extname()
console.log(path.extname(filePath)); // Output: .txt

// parse()
console.log(path.parse(filePath));

// __filename
const __filename = url.fileURLToPath(import.meta.url);
// __dirname
const __dirname = path.dirname(__filename);
console.log(__filename); // Output: Absolute path to this file
console.log(__dirname); // Output: Absolute path to the directory containing this file

// join()
const filepath2 = path.join(__dirname, 'dir1', 'dir2', 'test.txt');
console.log(filepath2);

// resolve() -- just as join() but resolves to an absolute path
const filepath3 = path.resolve('dir1', 'dir2', 'test.txt');
console.log(filepath3); // Output: Absolute path to the file based on the current working directory