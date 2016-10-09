'use strict';

const Storage       = require('./infra/storage');
const UserProvider  = require('./providers/UserProvider')(Storage);
const Provider      = require('../app-core/helper/Provider')(UserProvider, MapProvider);

const UserInteractor = require('../app-core/interactors/UserInteractor')(Provider);

/*
 * Moves all of the MapInteractor's methods to the MapServerInteractor
*/
/*Object.keys(MapInteractor).forEach(function(method) {
  module.exports[method] = function() {
    MapInteractor[method].apply(arguments);
  }
});*/
const UserServerInteractor = UserServerInteractor || {};

UserServerInteractor.findPointsByName = function() {
  UserInteractor.findPointsByName.apply(arguments);
}

UserServerInteractor.getUserRef = function() {
  UserInteractor.getUserRef.apply(arguments);
}

UserServerInteractor.createUser = function() {
  UserInteractor.createUser.apply(arguments);
}

UserServerInteractor.deleteUser = function() {
  UserInteractor.deleteUser.apply(arguments);
}

UserServerInteractor.updateUser = function() {
  UserInteractor.updateUser.apply(arguments);
}

module.exports = UserServerInteractor;
