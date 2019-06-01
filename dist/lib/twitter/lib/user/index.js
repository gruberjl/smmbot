"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.user = void 0;

var _tweet = require("./tweet");

var _follow = require("./follow");

var _engage = require("./engage");

var user = {
  tweet: _tweet.tweet,
  follow: _follow.follow,
  engage: _engage.engage
};
exports.user = user;