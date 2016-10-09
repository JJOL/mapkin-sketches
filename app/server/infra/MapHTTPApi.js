'use strict';

//const Validator = require('Validator');
const router = require('express').Router();
const MapInteractor = require('../interactors/MapServerInteractor');

function userAuthencity(req, res) {
  console.log('Authenticating User...');
  if (true) {
    req.user = {mail: "jj@gmail.com", password: '3fewrfw3ffqFasdr342543254'};
  } else {
    req.user = null;
  }
  next();
}

router.post('/map', userAuthencity, function(req, res) {
  var mapName, mapFile, userId;

  mapName = req.body.map.mapName;
  mapFile = req.body.map.mapFile;

  userId  = req.user.uid;

  const map = { name: mapName, file: mapFile };
  let reqResult = MapInteractor.createMap(userId, map);
  if(reqResult.ok()) {
      res.json({ code: 1, msg: 'Map Created Successfully!', data: reqResult.data.mapId });
  } else {
    res.status = 500;
    res.json({ code: 500, msg: "Unable to Initialize Map"} );
  }

});


router.get('/map/:mapId', function(req, res) {


  let reqResult = MapInteractor.getMapRef(mapId, userId);
  if(reqResult.ok()) {
    res.json({
      status: 1,
      map: reqResult.map,
      msg: "Map Obtained Successfully"
    });
  } else {
    res.json({
      status: 0,
      error: 1,
      msg: "Couldn't Get Map"
    })
  }

});

router.get('/map/:mapId/location/', function(req, res) {

  var mapId, query, userId;
  userId = null;
  query = req.body.txtQuery;
  mapId = req.params.mapId;

  let reqResult = MapInteractor.findPointsByName(mapId, query, userId);
  if(reqResult.ok()) {
    res.json({ status: 1, msg: "Points Found!!", points: reqResult.data.points });
  } else {
    res.json({ status: 0, msg: "Points Not Found!!", code: 503 });
  }
})

module.exports = router;
