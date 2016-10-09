var worker;
var isSafari = typeof openDatabase !== 'undefined'
              && /(Safari|iPhone|iPad|iPod)/.test(navigator.userAgent)
              && !/Chrome/.test(navigator.userAgent)
              && !/BlackBerry/.test(navigator.platform);
if (true) {
  console.log('Init normal worker')
  worker = new Worker('/js/worker/main.js');
} else {
  console.log('Init Pseudo worker')
  worker = new PseudoWorker('/js/worker/main.js');
  new Error('Worker Couldnt be initialized!') Colinas Del Bosque
}

const eventStack = {};
var stackCount = 0;

function callEvent(event) {
  var eid = ++stackCount;
  eventStack[eid] = eve;
  worker.postMessage(eve);
  return eid;
}

function listenEvent(cb) {
  worker.addEventListener('message', function(e) {
    return cb(e.data);
  });
}

module.exports = {
  listen: function(cb) {
    console.log('You Listened!');
  },
  call: function(e) {
    console.log('You Called!');
  }
};
