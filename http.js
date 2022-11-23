const http = require('http');

//First param represents incoming request, res represents the response.
const server = http.createServer((req, res) => {
    if(req.url === '/') {
        res.end('Welcome to our home page')
        return
    }
    if(req.url === '/about') {
        res.end('Here is our short history')
        return
    } 
    res.end(`
    <h1>Oops!</h1>
    <p>We can't find the page you're looking for</p>
    <a href="/">Go back home</a>
    `);
    return
});

server.listen(4001); 