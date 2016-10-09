const worker = require('worker');

let callbacks = {};


function on(ev, cb) {
  callbacks[ev].push(cb);
}

worker.onMessage('user-logged-in', function(data) {
  
});

module.exports = {
  on: on
}
