// const onMapViewLoad = require('./handlers/map-view-load.js');
// const onMapPropsEdit = require('./handlers/map-props-edit.js');
// const onMapSettingsEdit = require('./handlers/map-settings-edit.js');
// const onUserSettingsEdit = require('./handlers/user-settings-edit.js');
// const onViewSwitch = require('./handlers/view-switch.js');
const handlers = {};
function add(eventName, cb) {
  handlers[eventName] = cb;
}

// Handlers

add('query-points', require('./handlers/query-points.js'));

// End Handlers

module.exports = handlers;
