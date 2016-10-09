module.exports = function(io) {


  io.on('connected', function(socket) {

    socket.on('load-map', function(data) {
      const obj = Serializer.unserialize(data);
      var mapId = data.mapId;
      MapInteractor.loadMap(mapId, function(result) {
        socket.emit('map-loaded', Serializer.serialize(result))
      });

    });


  });


}
