import {createServer} from 'http';
const PORT = process.env.PORT; // Using env port variable

const users = [
    {id: 1, name: 'Alice'},
    {id: 2, name: 'Bob'},
    {id: 3, name: 'Charlie'}
];

const server = createServer((req,res) => {
    if(req.url === '/api/users' && req.method === 'GET'){
        res.setHeader('Content-Type', 'application/json');
        res.write(JSON.stringify(users));
        res.end();
    } else if(req.url.match(/\/api\/users\/[0-9]+/) && req.method === 'GET'){
        const userId = req.url.split('/')[3]; // Extract user ID from URL
        const user = users.find( (user) => user.id === parseInt(userId) ); // Find user by ID 
        res.setHeader('Content-Type', 'text/plain');

        if(user){ // If the user exists
            res.write(JSON.stringify(user));
        }else{ // if the user does not exists
            res.statusCode = 404;
            res.write(JSON.stringify({message: 'User not found'}));
        }
        res.end(); 
     } else{
        res.statusCode = 404;
        res.setHeader('Content-Type', 'text/plain');
        res.write(JSON.stringify({message: 'Route not found'}));
        res.end(); 
    }
});

// Listen server on port 8000
server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});