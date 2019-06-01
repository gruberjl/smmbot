"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.twitterAutoFollow = void 0;

var _lib = require("./lib");

var dbName = 'twitterAutoFollow';
var twitterAutoFollow = {
  getCollection: _lib.getCollection,
  set: (0, _lib.set)(dbName),
  get: (0, _lib.get)(dbName),
  remove: (0, _lib.remove)(dbName),
  allDocs: (0, _lib.allDocs)(dbName)
};
exports.twitterAutoFollow = twitterAutoFollow;