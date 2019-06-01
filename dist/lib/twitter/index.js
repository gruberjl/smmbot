"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.twitter = void 0;

var _lib = require("./lib");

var twitter = {
  getTwit: _lib.getTwit,
  followers: _lib.followers,
  tweet: _lib.tweet,
  user: _lib.user
};
exports.twitter = twitter;