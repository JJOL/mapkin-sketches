const router = require('express').Router(),
      fs = require('fs'),
      path = require('path'),
      bodyParser = require('body-parser')
      config = require('../../config/config.js'),
      serverProvider = require(config.root+'/server/provider')
      mapInteractor = require(config.root+'/app/map-interactor')(serverProvider);

const partials = {};
partials['map-creator'] = path.join(config.root, 'public', 'map-creator/index.html');
const pagesRoot = path.join(config.root, 'public');
console.log('PagesRoute: ', pagesRoot);

router.get('/', (req, res) => {

});

router.get('/login', (req, res) => {

});

router.get('/register', (req, res) => {

});

router.get('/dashboard', (req, res) => {

});

router.get('/my-maps', (req, res) => {

});

router.get('/my-friends', (req, res) => {

});

router.get('/create-map', (req, res) => {
  if(req.query.partial)
    fs.readFile(partials['map-creator'], (err, file) => {
      if(err)
        return res.send(err);
      res.send(file.toString('utf-8'));
    });
  //res.sendFile('map-creator/index.html', {root: pagesRoot});
});

router.post('/create-map', bodyParser.urlencoded({extended: false}), (req, res) => {
  var map = req.body;
  console.log('Map To Create: ', map)
  mapInteractor.createMap(map, (err, mapId) => {
    if(err) {
      //return res.sendFile('error/', { root: pagesRoot });
      return res.send(err.message);

    }
    res.redirect('/edit-map/' + mapId);

  })
});

router.get('/edit-map/:mapid', (req, res) => {
  res.sendFile('map-editor/index.html', {root: pagesRoot});
});

router.post('/edit-map/:mapid', (req, res) => {
  mapInteractor.saveMap(map, (err) => {
    if(err) {
      return res.sendFile('error/', { root: pagesRoot });
    }
    res.redirect('view-map/' + map.ownerName + map.name);
  })
})

router.get('/view-map/:owner/:mapname', (req, res) => {

});

module.exports = router;
