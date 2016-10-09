const handlers = require('./event-handlers.js');

const handlers = getEventHandlers();

module.exports = function(msg) {
  var type = msg.type.trim();
  switch(msg.type) {
    case 'query-point':
      onQueryPoints(msg);
      break;
    case 'map-load':
      onQueryPoints(msg);
      break;
    case 'map-unload':
      break;
    case 'query-maps':
      break;
    case 'map-edit-props':
      break;
    case 'switch-view':
      break;
    case '':
    default:
      sendEventError({error: 'No Case Found for your Petition!'});
  }

  confirmEventRecieved(msg);
}

function confirmEventRecieved(msg) {
  self.postMessage({
    type: 'event-received',
    eventId: msg.eventId || -1
  });
}
