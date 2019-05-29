"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.get = void 0;

var _getCollection = require("./get-collection");

var get = function get(dbName) {
  return function (id) {
    var collection = (0, _getCollection.getCollection)(dbName);
    return collection.doc(id).get().then(function (doc) {
      return doc.data();
    })["catch"](function (error) {
      return {
        error: error
      };
    });
  };
};

exports.get = get;