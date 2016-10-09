'use strict';

require('es6-promise').polyfill();
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));


app.use('/api', require('./infra/MapHTTPApi'));

app.use(function(req, res) {
  console.log('Default Log' + ' req: ' + req.url)
  res.send('494')
});

app.listen(3000, function() {
  console.log("Listening on port 3000...!")
});
