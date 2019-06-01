"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.engage = void 0;

var _tweet = require("../tweet");

var _follow = require("./follow");

var _tweet2 = require("./tweet");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var engage =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(account, user_id) {
    var followUser,
        numOfLikes,
        results,
        tweets,
        sortedTweets,
        i,
        response,
        _args = arguments;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            followUser = _args.length > 2 && _args[2] !== undefined ? _args[2] : true;
            numOfLikes = _args.length > 3 && _args[3] !== undefined ? _args[3] : 3;
            results = {};

            if (!followUser) {
              _context.next = 13;
              break;
            }

            _context.prev = 4;
            _context.next = 7;
            return (0, _follow.follow)(account, user_id);

          case 7:
            results.follow = _context.sent;
            _context.next = 13;
            break;

          case 10:
            _context.prev = 10;
            _context.t0 = _context["catch"](4);
            results.follow = {
              error: _context.t0
            };

          case 13:
            _context.next = 15;
            return _tweet2.tweet.get(account, user_id);

          case 15:
            tweets = _context.sent;

            if (tweets.error) {
              results.likedTweets = {
                error: tweets.error
              };
            } else {
              results.likedTweets = [];
              sortedTweets = _tweet.tweet.sortByEngagement(tweets).slice(0, numOfLikes);

              for (i = 0; i < sortedTweets.length; i++) {
                response = _tweet.tweet.like(account, sortedTweets[i].id_str);
                results.likedTweets.push({
                  tweet: sortedTweets[i],
                  response: response
                });
              }
            }

            return _context.abrupt("return", {
              results: results
            });

          case 18:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[4, 10]]);
  }));

  return function engage(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.engage = engage;