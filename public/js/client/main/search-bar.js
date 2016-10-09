const worker         = require('../shared/worker.js'),
      debounce       = require('debounce'),
      $              = requre('../shared/utils.js')
      searchInputEl  = $('#search-input'),
      appRouter = {location: 'app-viewer'};

// worker.addEventListener('message', function(e) {
//   var msg = e.data;
//   if(msg.type == 'point-located') {
//     var point = msg.point;
//     respEl.log('Point Name: ' + point.label);
//   }
// });

searchInputEl.addEventListener('input', debounce(function(e) {
  let queryType;
  switch (appRouter.location) {
    case 'app-viewer':
      queryType = 'query-points';
      break;
    case 'friends-view':
      queryType = 'query-friends';
      break;
    case 'user-maps':
      queryType = 'query-user-maps';
      break;
    default:
      queryType = 'query-maps';
  }
  
  worker.call({
    type: queryType,
    query: searchInputEl.value
  });

  respEl.clear();
  respEl.log('Loading...');
}, 200));
