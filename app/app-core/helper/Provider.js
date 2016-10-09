module.exports = function(userProvider, mapProvider) {
  return {
    user: userProvider,
    map: mapProvider
  };
}
