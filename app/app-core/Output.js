'use strict';


function resultStatus(status) {
  return function(res) {
    let r = res || {};
    r.ok = status;
    return r;
  }
}

function withCode(code, res) {
  let r = res || {};
  r.code = code;
  return r;
}



module.exports = {
  ok: resultStatus(1),
  fail: resultStatus(0),
  withCode: withCode
}
