const express = require('express');
const http = require('http');
const path = require('path');

const app = express();

const server = http.createServer(app);
const config = require('./config/config.js');
// Setup and Configure

app.use(express.static(path.join(__dirname, 'public')));

var socketiopath = path.join(__dirname, 'node_modules', 'socket.io-client', 'socket.io.js');

//const appInterface = require('./server/app-interface.js')

// Access

app.get('/libs/socket.io.js', (req, res) => {
  res.sendFile(socketiopath);
});

// Website Pages

app.use(require('./server/routes/page-routes'));


// REST API

//app.use(require())

// Setup Socket IO Handler

const socketIO = require('socket.io');
const io = socketIO(server);
//const userSocketHandler = require('./server/user-socket-handler.js')(appInterface);

io.on('connection', (socket) => {
  //userSocketHandler.handleSocket(socket);
  socket.on('login', (data) => {
    console.log('We have gotten a socket io petition!');
    socket.emit('confirm-login', {status:'good', msg: 'Welcome ' + data.user +'!'});
  });

});//*/



server.listen(3000, () => {
  console.log('Listening in port 3000');
})
