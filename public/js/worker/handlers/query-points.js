module.exports = function(msg) {
  const eventId = msg.eventId;
  var done = new ObservableStream();
  MapProvider.getActiveMap()
    .searchPointsByName(msg.query.text)
    .forEach(item => {
      postMessage({
        type: 'point-located',
        eventId: eventId,
        point: item
      })
    }, err => {

    }, () => {
      postMessage({
        type: 'finished-event',
        eventId: eventId
      })
      done.sendLastItem(1, null);
      done.terminate();
    })
    .waitUntil(done);
}
