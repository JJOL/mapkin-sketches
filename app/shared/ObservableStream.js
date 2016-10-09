function ObservableStream () {
  this.canProcess = true;
  this._terminateFn = function() {
  }
  this._pipe = function(item, err, last) {
    this.terminate();
  }
}

ObservableStream.prototype.terminate = function() {
  if(this.canProcess) {
    this.sendLastItem(null, null);
    this.canProcess = false;
    this._terminateFn();
    this._terminateFn = null;
    this._pipe = null;
  }
}

ObservableStream.prototype.onTerminated = function(terminateFn) {
  this._terminateFn = terminateFn;
}

ObservableStream.prototype.sendLastItem = function(item, err) {
  this.sendItem(item, err, true);
}

ObservableStream.prototype.sendItem = function(item, err, last) {
  last = last || false;
  if(this.canProcess) {
      this._pipe(item, err, last);
  }
}

ObservableStream.prototype.forEachRaw = function(onHandle) {
  this._pipe = onHandle;
}

ObservableStream.prototype.forEach = function(onItem, onError, onEnd) {
  this._pipe = function(item, err, last) {
    onItem(item);
    onError(err);
    if(last) {
      onEnd();
    }
  }
  return this;
}

ObservableStream.prototype.map = function(transformFn) {
  const newStream = new ObservableStream();
  this.forEachRaw(function(item, err, last) {
    newStream.sendItem(transformFn(item), err, last);
  });
  newStream.onTerminated(() => this.terminate());
  return newStream;
}

ObservableStream.prototype.filter = function(filterFn) {
  const newStream = new ObservableStream();
  this.forEachRaw(function(item, err, last) {
    if(filterFn(item)) {
        newStream.sendItem(item, err, last);
    } else if(last) {
      newStream.sendItem(null, new Error("Last item was filtered out!"), last);
    }
  });
  newStream.onTerminated(() => this.terminate());
  return newStream;
}

ObservableStream.prototype.reduce = function() {

}

ObservableStream.prototype.collectAll = function() {

}

ObservableStream.prototype.takeUntil = function(stream) {
  stream.forEach(item => this.terminate(), err => {}, () => {});
}


module.exports = ObservableStream;
