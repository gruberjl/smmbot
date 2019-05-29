"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getCollection = void 0;

var _path = require("path");

var _firebaseAdmin = _interopRequireDefault(require("firebase-admin"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_firebaseAdmin["default"].initializeApp({
  credential: _firebaseAdmin["default"].credential.cert((0, _path.join)(__dirname, '..', '..', '..', '..', 'secret.json'))
});

var db = _firebaseAdmin["default"].firestore();

var collections = {};

var getCollection = function getCollection(collectionName) {
  if (!collections[collectionName]) collections[collectionName] = db.collection(collectionName);
  return collections[collectionName];
};

exports.getCollection = getCollection;