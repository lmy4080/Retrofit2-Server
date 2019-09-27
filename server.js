const http = require('http');
const app = require('./app');

// Create Server, Port Number: 3000
const port = process.env.PORT || 3000;
const server = http.createServer(app);

// Start Server
server.listen(port);