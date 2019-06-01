"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.db = void 0;

var _apps = require("./apps");

var _accounts = require("./accounts");

var _posts = require("./posts");

var _twitterAutoFollow = require("./twitter-auto-follow");

var _users = require("./users");

var db = {
  apps: _apps.apps,
  accounts: _accounts.accounts,
  posts: _posts.posts,
  twitterAutoFollow: _twitterAutoFollow.twitterAutoFollow,
  users: _users.users
};
exports.db = db;