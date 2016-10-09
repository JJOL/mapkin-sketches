var mapDisplayerEl = document.getElementById('map-display-view'),
    searchInEl     = document.getElementById('search-input-el'),
    respEl = createResponseElement(document.querySelector('.container'));

function createResponseElement(root) {
  var respDiv = document.createElement("div");
  root.appendChild(respDiv);
  return {
    log: function(txt) {
      var prevTxt = respDiv.innerHTML;
      respDiv.innerHTML = prevTxt + txt + '<br/>';
    },
    clear: function() {
      respDiv.innerHTML = '';
    }
  }
}

function now() {
  return new Date().getTime();
}

function debounce(func, wait, immediate){
  var timeout, args, context, timestamp, result;
  if (null == wait) wait = 100;

  function later() {
    var last = now() - timestamp;

    if (last < wait && last > 0) {
      timeout = setTimeout(later, wait - last);
    } else {
      timeout = null;
      if (!immediate) {
        result = func.apply(context, args);
        context = args = null;
      }
    }
  };

  var debounced = function(){
    context = this;
    args = arguments;
    timestamp = now();
    var callNow = immediate && !timeout;
    if (!timeout) timeout = setTimeout(later, wait);
    if (callNow) {
      result = func.apply(context, args);
      context = args = null;
    }

    return result;
  };

  debounced.clear = function() {
    if (timeout) {
      clearTimeout(timeout);
      timeout = null;
    }
  };

  return debounced;
};

var inputDelate = debounce(function(e) {
  var eventId = callEvent({
    type: 'query-points',
    query: searchInEl.value
  });
  respEl.clear();
  respEl.log('Loading...');
}, 200);

worker.addEventListener('message', function(e) {
  var msg = e.data;
  if(msg.type == 'point-located') {
    var point = msg.point;
    respEl.log('Point Name: ' + point.label);
  }
});

var eventStack = {};
var stackCount = 0;
function callEvent(eve) {
  var eid = ++stackCount;
  eventStack[eid] = eve;
  worker.postMessage(eve);
  return eid;
}

searchInEl.addEventListener('input', inputDelate);
