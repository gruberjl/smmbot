"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.set = void 0;

var _getCollection = require("./get-collection");

var set = function set(dbName) {
  return function (data) {
    var collection = (0, _getCollection.getCollection)(dbName);
    return collection.doc(data.id).set(data).then(function () {
      return data;
    })["catch"](function (error) {
      return {
        error: error
      };
    });
  };
};

exports.set = set;