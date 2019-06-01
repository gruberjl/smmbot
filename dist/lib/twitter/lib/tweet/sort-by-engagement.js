"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sortByEngagement = void 0;

var sortByEngagement = function sortByEngagement(tweets) {
  return tweets.sort(function (a, b) {
    var engagementA = a.retweet_count + a.favorite_count;
    var engagementB = b.retweet_count + b.favorite_count;
    if (engagementA < engagementB) return 1;
    if (engagementA == engagementB) return 0;
    return -1;
  });
};

exports.sortByEngagement = sortByEngagement;