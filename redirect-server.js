const http = require('http');
const PORT = 8080
const server = http.createServer((req, res) => {
    console.log(`Received request for: ${req.url}`);
    const target = 'https://' + req.headers.host + req.url;
    console.log(`Redirecting to: ${target}`);  
    res.writeHead(301, { 'Location': target });
    res.end();
});

server.listen(PORT, () => {
    console.log(`HTTP server running on http://localhost:${PORT} and redirecting to HTTPS`);
});
