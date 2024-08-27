const fs = require('fs');
const https = require('https');
const PORT = 443

const options = {
    key: fs.readFileSync('key.pem'),
    cert: fs.readFileSync('cert.pem')
};

const server = https.createServer(options, (req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('<h1>Hello, this is served over HTTPS!</h1>');
});

server.listen(PORT, () => {
    console.log('Server is running on https://localhost');
});
