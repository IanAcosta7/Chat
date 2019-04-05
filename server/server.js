const express = require('express');
const socketIO = require('socket.io');
const http = require('http');

const path = require('path');

const app = express();
let server = http.createServer(app);

const port = 3000;

app.use(express.static(path.resolve(__dirname, '../public')));

server.listen(port, (err) => {
    if (err) throw new Error(err);

    console.log('Server started in port: ' + port);
});

