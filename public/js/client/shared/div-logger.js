module.exports = createResponseElement = function (root) {
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
