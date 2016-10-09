//const io = require('socket.io-client');
//const socket = io();

// WebWorker Handlers
const messageHandler = require('./message-handler.js');



// WebWorker Message Handler
function onMessage(message) {
  messageHandler(message);
}

// Socket Handlers


// Listen to Itself
self.addEventListener('message', function(e) {
  var message = e.data;
  onMessage(message);
});
