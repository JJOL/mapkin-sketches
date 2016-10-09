module.exports = function(provider) {
  return {
    createMap: function (map, cb) {
      if (!map.map_name || !map.map_ownerid || !map.map_date) {
        return cb(new Error('Map Properites not valid'));
      }
      provider.mapProvider.save(map, cb);
    }
  };
}
