require('dotenv').config();
const fs = require('fs');
const express = require('express');
const http = require('http');
const chokidar = require('chokidar');
const socketio = require('socket.io');
const path = require('path');
const router = require('./route');
const exec = require('child_process').exec;

const app = express();
const server = http.createServer(app);
const route = new router(app);

app.use('/', express.static('public'));

route.get('/', '/public/index.html', {teste: 'true'});

const io = socketio(server);
server.listen(process.env.PORT, '0.0.0.0', () => {
    console.log(`Running at http://localhost:${process.env.PORT}`);
});

chokidar.watch('public').on('change', () => {
    exec('npm run build')
    io.sockets.emit('reload');
});