const worker = require('../shared/worker.js'),
      $      = require('../shared/utils.js').doq,

      mapEl  = $('map')

function drawPoints(points) {
  mapEl.innerHTML = '';
  points.forEach((point, index) => {
    var pointEl = pointElements[index];

    pointEl.label = point.label;
    pointEl.style.transform = 'translate('+ point.dx +'px,' + point.dy + 'px)';



    pointElements[index] = pointEl;
  })
}

worker.listen((e) => {
  if(e.type != 'points-found')
    return;

  var points = e.points;
  drawPoints(points);
});
