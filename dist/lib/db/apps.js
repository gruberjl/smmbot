"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.apps = void 0;

var _lib = require("./lib");

var dbName = 'apps';
var apps = {
  getCollection: _lib.getCollection,
  set: (0, _lib.set)(dbName),
  get: (0, _lib.get)(dbName),
  remove: (0, _lib.remove)(dbName),
  allDocs: (0, _lib.allDocs)(dbName)
};
exports.apps = apps;