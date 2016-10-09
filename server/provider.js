'use strict';
const maps = {};
let uid = 0;

const mapProvider = {
  save: function(map, cb) {
    let newId = uid++;
    maps[newId] = map;
    return cb(null, newId);
  },
  get: function(_id, cb) {
    if(maps[_id]) {
      return cb(null, maps[_id]);
    } else {
      return cb(new Error('Map ('+_id+') Not Found!'));
    }

  }
}


module.exports = {
  mapProvider: mapProvider
}
