
'use strict';


const Map = function(owner, perms, fileName, ops) {

  let points = {};
  let usersWhiteList  = [];
  let permissionsList = {};
  

  function createPoint(user, point) {

  }

  function lookPoint_ByText(query) {
    const result;
    var parts = query.split(' ');
    let points = [];
    parts.forEach(queryPart => {
      points.extend(getMatchPoints(queryPart));
    });

    if(points.length > 0) {
      result = Out.ok(Out.withCode(Codes.POINTS_FOUNDED, points));
    } else {
      result = Out.fail(Out.withCode(Codes.POINTS_NOT_FOUNDED));
    }

    return result;
  }

  function setPemissions() {

  }

  function setPermission() {

  }

  function hasPermission() {

  }

  function getOption() {

  }

  function getConfig() {

  }

  return {
    createPoint: createPoint,
    lookPoint_ByText: lookPoint_ByText,
    setPemissions: setPemissions,
    hasPermission: hasPermission,
    getOption: getOption,
    getConfig: getConfig
  };
}
