"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.article = void 0;

var _read = require("./read");

var _getDetails = require("./get-details");

var article = {
  read: _read.read,
  getDetails: _getDetails.getDetails
};
exports.article = article;