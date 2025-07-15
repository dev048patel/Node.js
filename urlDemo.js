import url from 'url';

const urlString = 'https://www.google/com/search?q=helllo+world';

//URL string
const urlObj = new URL(urlString);
console.log(urlObj);

//format() 
console.log(url.format(urlObj));    

//import.meta.url
console.log(import.meta.url);

// fileURLTOPath()
console.log(url.fileURLToPath(import.meta.url));

//
const params = new URLSearchParams(urlObj.search);  
console.log(params);
console.log(params.get('q')); // get the value of 'q' parameter
params.append('limit', '10'); // append a new parameter with limit
params.delete('limit'); // delete the 'limit' parameter
console.log(params);
