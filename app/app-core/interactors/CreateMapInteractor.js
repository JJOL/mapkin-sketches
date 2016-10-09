const Map = require('Map');
const UserService = require('UserService');
const Output = require(Output);

inPromise function(func, params) {

}
function(owner, fileName) {

  var user = UserService.getUser(owner);
  if(!user.canCreateMap()) {
    return Output.result({
      ok: false,
      code: LACK_OF_FEATURE
    });
    return cb(Output.result({ok: false,
                            code: Codes.LACK_OF_FEATURE,
                            data: data}));

    return cb(Output.result(false, Codes.LACK_OF_FEATURE, data));

    return cb(Output.ok(Output.withCode(Codes.LACK_OF_FEATURE, data)));

    return cb(Output.ok(Output.withCode(Codes.LACK_OF_FEATURE), data));

    return cb(Output.result(Output.ok(Output.withCode(Codes.LACK_OF_FEATURE)), data));

  }

  user.getMaps().forEach(map => {

  });
  const map = Map(ownerId, mapName);

}

MapInteractor = {
  createMap:, // return map Id
  findMap:
}


module.exports = {
};
