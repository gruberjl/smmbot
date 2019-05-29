"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.accounts = void 0;

var _moment = _interopRequireDefault(require("moment"));

var _lib = require("./lib");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var dbName = 'accounts';

var isReadyToShare = function isReadyToShare(account) {
  var nextShare = (0, _moment["default"])(account.lastShare).add(account.nextShare, 'minutes');
  return nextShare.isSameOrBefore((0, _moment["default"])());
};

var accounts = {
  getCollection: _lib.getCollection,
  set: (0, _lib.set)(dbName),
  get: (0, _lib.get)(dbName),
  remove: (0, _lib.remove)(dbName),
  allDocs: (0, _lib.allDocs)(dbName),
  isReadyToShare: isReadyToShare
};
exports.accounts = accounts;