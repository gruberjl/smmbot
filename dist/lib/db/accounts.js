"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.accounts = void 0;

var _moment = _interopRequireDefault(require("moment"));

var _lib = require("./lib");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var dbName = 'accounts'; // const isReadyToShare = (account) => {
//   const nextShare = moment(account.lastShare).add(account.nextShare, 'minutes')
//   return nextShare.isSameOrBefore(moment())
// }

var getReadyToShare = function getReadyToShare() {
  var collection = (0, _lib.getCollection)(dbName);
  return collection.where('nextShare', '<=', (0, _moment["default"])().toISOString()).get().then(_lib.snapshotToDocs)["catch"](function (error) {
    return {
      error: error
    };
  });
};

var accounts = {
  getCollection: _lib.getCollection,
  set: (0, _lib.set)(dbName),
  get: (0, _lib.get)(dbName),
  remove: (0, _lib.remove)(dbName),
  allDocs: (0, _lib.allDocs)(dbName),
  getReadyToShare: getReadyToShare
};
exports.accounts = accounts;