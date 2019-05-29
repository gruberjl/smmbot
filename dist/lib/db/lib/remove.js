"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.remove = void 0;

var _getCollection = require("./get-collection");

var remove = function remove(dbName) {
  return function (doc) {
    var collection = (0, _getCollection.getCollection)(dbName);
    return collection.doc(doc.id)["delete"]().then(function () {
      return doc;
    })["catch"](function (error) {
      return {
        error: error
      };
    });
  };
};

exports.remove = remove;