'use strict';

const Storage       = require('../infra/storage');
const UserProvider  = require('../providers/UserProvider')(Storage);
const MapProvider   = require('../providers/MapProvider')(Storage);
const Provider      = require('../../app-core/helper/Provider')(UserProvider, MapProvider);

const MapInteractor = require('../../app-core/interactors/MapInteractor')(MapProvider);

/*
 * Moves all of the MapInteractor's methods to the MapServerInteractor
*/
/*Object.keys(MapInteractor).forEach(function(method) {
  module.exports[method] = function() {
    MapInteractor[method].apply(arguments);
  }
});*/
const MapServerInteractor = MapServerInteractor || {};

MapServerInteractor.findPointsByName = function() {
  MapInteractor.findPointsByName.apply(arguments);
}

MapServerInteractor.getMapRef = function() {
  MapInteractor.getMapRef.apply(arguments);
}

MapServerInteractor.createMap = function() {
  MapInteractor.createMap.apply(arguments);
}

MapServerInteractor.deleteMap = function() {
  MapInteractor.deleteMap.apply(arguments);
}

MapServerInteractor.updateMap = function() {
  MapInteractor.updateMap.apply(arguments);
}

module.exports = MapServerInteractor;
