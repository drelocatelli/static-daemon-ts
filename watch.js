const chokidar = require('chokidar');
const socketio = require('socket.io');
const path = require('path');
const exec = require('child_process').exec;

function watch(server, port) {
    const io = socketio(server);
    server.listen(port, '0.0.0.0', () => {
        console.log(`Running at http://localhost:${port}`);
    });
    
    chokidar.watch('public').on('change', () => {
        exec('npm run build')
        io.sockets.emit('reload');
    });

}

module.exports = watch;