//import fs from 'fs';
import fs from 'fs/promises';

// readFile() -- callback -- asynchronous version
// fs.readFile('./test.txt', 'utf-8', (err, data) => {
//     if (err) throw err;
//     console.log(data);
// });

// readFileSync() -- synchronous version
// const data = fs.readFileSync('./test.txt', 'utf-8');
// console.log(data);

// readFile() -- promise .then()
// fs.readFile('./test.txt', 'utf8')
//     .then( (data) => console.log(data) )
//     .catch((err) => console.error( err));


// readfile() -- promise async/await
const readFile = async () => {
    try{
     const data =  await fs.readFile('./test.txt', 'utf-8');
        console.log(data);
    } catch(error){
        console.log(error);
    }
};
// appendFile() -- promise async/await
const appendFile = async () => {
    try {
        await fs.appendFile('./test.txt', '\n This is appended text!', 'utf-8');
        console.log('File appended successfully.');
    } catch (error) {
        console.error(error);
    }
};

// writeFile() -- promise async/await
const writeFile = async () => {
    try {
        await fs.writeFile('./test.txt', 'Hello, World!', 'utf-8');
        console.log('File written successfully to..');
    } catch (error) {
        console.error(error);
    }
};
writeFile();
appendFile();
readFile();