'use strict';

module.exports = function(mapProvider) {

  if (!mapProvider) {
    throw new Error("MapInteractors didn't recieve any MapProvider!!!");
  }

  const MapInteractor = MapInteractor || {};

  MapInteractor.createMap(userId, map) {
    return new Promise((resolve, reject) => {

      UserProvider.getUser(userId)
        .then(result => {
          if (result.ok()) {
            const user = result.data.user;
            if (user.isMember) {

            }
          }
        });
    });

  }

  MapInteractor.loadMap = function(mapId, user, cb) {

    MapInteractor.get(mapId, function(result) {
      if(!result.ok) {
        return cb(result);
      }

      if(!map.isPublic()) {

        if(!user) {
          // No User Logged
          return cb(Out.fail(Out.withCode(Codes.USER_NOT_LOGGED)));
        }
        if(!map.whiteList.containes(user.name)) {
          // The Map Doesn't has the User in its whitelist
          return cb(Out.fail(Out.withCode(Codes.USER_NOT_WHITELISTED)));
        }

      }

      var data = {
        mapName: map.getName,
        mapFile: map.getFile
      };
      return cb(Out.ok(Out.withCode(Codes.MAP_LOADED, data)));

    });
  }


  return MapInteractor;
}
