"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.tweet = void 0;

var _post = require("./post");

var _search = require("./search");

var _like = require("./like");

var _sortByEngagement = require("./sort-by-engagement");

var tweet = {
  post: _post.post,
  search: _search.search,
  like: _like.like,
  sortByEngagement: _sortByEngagement.sortByEngagement
};
exports.tweet = tweet;