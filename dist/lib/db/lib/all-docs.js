"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.allDocs = void 0;

var _getCollection = require("./get-collection");

var _snapshotToDocs = require("./snapshot-to-docs");

var allDocs = function allDocs(dbName) {
  return function () {
    var collection = (0, _getCollection.getCollection)(dbName);
    return collection.get().then(_snapshotToDocs.snapshotToDocs)["catch"](function (error) {
      return {
        error: error
      };
    });
  };
};

exports.allDocs = allDocs;