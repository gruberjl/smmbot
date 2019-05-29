"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createTweet = void 0;
var maxTweetLength = 280;
var urlLength = 28;

var createTweet = function createTweet(articleDetails) {
  var title = articleDetails.title,
      authorTwitter = articleDetails.authorTwitter,
      url = articleDetails.url,
      publicationTwitter = articleDetails.publicationTwitter;
  var tweet = '';
  if (publicationTwitter) tweet = "@".concat(publicationTwitter.replace('@', ''), " ").concat(tweet);
  if (authorTwitter) tweet = "@".concat(authorTwitter.replace('@', ''), " ").concat(tweet);
  tweet += "#".concat(articleDetails.tags.map(function (t) {
    return t.replace(' ', '');
  }).join(' #'), " ");
  tweet = "".concat(title.substring(0, maxTweetLength - urlLength - tweet.length), " ").concat(tweet);
  tweet += url;
  return tweet;
};

exports.createTweet = createTweet;