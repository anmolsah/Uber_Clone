const http = require('http');
const app = require('./index');
const {initializeSocket} = require('./socket');
const port = process.env.PORT || 1111;



const server = http.createServer(app);

initializeSocket(server);

server.listen(port, () => {
    console.log('Server running on port ' + port);
});