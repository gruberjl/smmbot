"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.followOnTwitter = void 0;

var _moment = _interopRequireDefault(require("moment"));

var _lib = require("../../lib");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var followOnTwitter =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(accountId) {
    var numOfFollower,
        account,
        allTweets,
        notSensitiveTweets,
        tweets,
        i,
        tweet,
        followed,
        _args = arguments;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            numOfFollower = _args.length > 1 && _args[1] !== undefined ? _args[1] : 10;
            _context.next = 3;
            return _lib.db.accounts.get(accountId);

          case 3:
            account = _context.sent;
            _context.next = 6;
            return _lib.twitter.tweet.search(account, 'medium.com productive');

          case 6:
            allTweets = _context.sent;
            notSensitiveTweets = allTweets.filter(function (tweet) {
              return !tweet.possibly_sensitive;
            });
            tweets = _lib.twitter.tweet.sortByEngagement(notSensitiveTweets).slice(0, numOfFollower);
            i = 0;

          case 10:
            if (!(i < tweets.length)) {
              _context.next = 19;
              break;
            }

            tweet = tweets[i];
            _context.next = 14;
            return _lib.twitter.tweet.like(account, tweet.id_str);

          case 14:
            _context.next = 16;
            return _lib.twitter.user.engage(account, tweet.user.id_str);

          case 16:
            i++;
            _context.next = 10;
            break;

          case 19:
            followed = tweets.map(function (tweet) {
              return tweet.user.id_str;
            });
            _context.next = 22;
            return _lib.db.twitterAutoFollow.set({
              id: "".concat(accountId.user, "-").concat((0, _moment["default"])().format("YYYY-MM-DD")),
              provider: 'twitter',
              ranOn: (0, _moment["default"])().format("YYYY-MM-DD"),
              user: accountId.user,
              account: accountId,
              followed: followed
            });

          case 22:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function followOnTwitter(_x) {
    return _ref.apply(this, arguments);
  };
}();

exports.followOnTwitter = followOnTwitter;