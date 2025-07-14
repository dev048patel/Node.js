import {createServer} from 'http';
const PORT = process.env.PORT; // Using env port variable

const users = [
    {id: 1, name: 'Alice'},
    {id: 2, name: 'Bob'},
    {id: 3, name: 'Charlie'}
];

// Logger middleware
const Logger = (req, res, next) => {
    console.log(`${req.method} ${req.url}`); 
    next(); // this will tell the server that this is done and move to next middleware
}
// JSON middleware
const jsonMiddleware = (req, res, next) => { // As we are using same "application/json" everywhere so we can crate a middleware for it
    res.setHeader('Content-Type', 'application/json');
    next();
};
// Route handler for GET /api/users
const getUsersHandler = (req, res) => {
    res.write(JSON.stringify(users));
    res.end();
};

//Router handler for GET /api/users/id
const getUSerByIdHandler = (req, res)  =>  {
    const userId = req.url.split('/')[3]; // Extract user ID from URL
    const user = users.find( (user) => user.id === parseInt(userId) ); // Find user by ID 
    if(user){ // If the user exists
        res.write(JSON.stringify(user));
    }else{ // if the user does not exists
        res.statusCode = 404;
        res.write(JSON.stringify({message: 'User not found'}));
    }
    res.end();
}

// Not found handler
const notFoundHandler = (req, res) => {
    res.statusCode = 404;
     res.setHeader('Content-Type', 'text/plain');
    res.write(JSON.stringify({message: 'Route not found'}));
    res.end(); 
};

const server = createServer((req,res) => {
    Logger (req,res,() => {
        jsonMiddleware (req, res,() => {
            if(req.url === 'api/users' && req.method === 'GET'){
                getUsersHandler(req, res);
            } else if(req.url.match(/\/api\/users\/([0-9]+)/) && req.method === 'GET') {
                getUSerByIdHandler(req, res);
            }else{
                notFoundHandler(req, res);
            }
        })
    });
    
});

// Listen server on port 8000
server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});