"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.db = void 0;

var _accounts = require("./accounts");

var _posts = require("./posts");

var db = {
  accounts: _accounts.accounts,
  posts: _posts.posts
};
exports.db = db;