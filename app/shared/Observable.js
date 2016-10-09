const ObservableStream = require('./ObservableStream.js');

function Observable() {
  
}

Observable.prototype.subscribe = function() {
  var stream = new ObservableStream();

  return stream;
}

return Observable;
