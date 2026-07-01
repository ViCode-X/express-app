//====
//raw-server.js

const http = require('http');

const server = http.createServer((req, res) => {
 if (req.method === 'GET' && req.url === '/about') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello, World! from raw node\n');
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Not Found\n');
    }
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Raw Server is running on http://localhost:${PORT}`);
});