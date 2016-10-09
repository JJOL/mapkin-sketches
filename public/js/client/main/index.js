/*
  Init File

  Client files are code scripts running on the browser to bootstrap the application and communicate with the worker and service worker,
  the worker files are the app business logic and the service worker is the handler

  Client Files are in charged of rendering elements, binding to elements and reacting to events to be processed by the service worker
*/

require('../shared/worker.js');
require('./menu.js');
require('./search-bar.js');
require('./map-points-viewer.js')
