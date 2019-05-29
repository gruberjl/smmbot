"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.snapshotToDocs = void 0;

var snapshotToDocs = function snapshotToDocs(snapshot) {
  var docs = [];
  snapshot.forEach(function (doc) {
    docs.push(doc.data());
  });
  return docs;
};

exports.snapshotToDocs = snapshotToDocs;