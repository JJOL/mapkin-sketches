const eventStack = {};
let count_id = 0;

function pendEvent(event) {
  let _id = ++count_id;
  eventStack[_id] = event;
  return _id;
}

function clearEvent(_id) {
  if (eventStack[_id]) {
    eventStack[_id] = null;
    return true;
  } else {
    return false;
  }
}

function getPendingEvent(_id) {
  return eventStack[_id];
}

module.exports = {
  pendEvent: pendEvent,
  clearEvent: clearEvent,
  getPendingEvent: getPendingEvent

};
