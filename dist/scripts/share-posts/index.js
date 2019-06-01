"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sharePosts = void 0;

var _moment = _interopRequireDefault(require("moment"));

var _lib = require("../../lib");

var _getAccountPosts = require("./get-account-posts");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var sharePosts =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee() {
    var accountPosts, i, _accountPosts$i, account, post, response;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return (0, _getAccountPosts.getAccountPosts)();

          case 2:
            accountPosts = _context.sent;
            i = 0;

          case 4:
            if (!(i < accountPosts.length)) {
              _context.next = 23;
              break;
            }

            _accountPosts$i = accountPosts[i], account = _accountPosts$i.account, post = _accountPosts$i.post;

            if (!(account.provider == 'twitter')) {
              _context.next = 20;
              break;
            }

            _context.next = 9;
            return _lib.twitter.tweet.post(account, post.message);

          case 9:
            response = _context.sent;

            if (!response.error) {
              _context.next = 14;
              break;
            }

            console.log(response.error);
            _context.next = 20;
            break;

          case 14:
            account.nextShare = (0, _moment["default"])().add(account.shareFrequency, 'minutes').toISOString();
            _context.next = 17;
            return _lib.db.accounts.set(account);

          case 17:
            post.posted = true;
            _context.next = 20;
            return _lib.db.posts.set(post);

          case 20:
            i++;
            _context.next = 4;
            break;

          case 23:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function sharePosts() {
    return _ref.apply(this, arguments);
  };
}();

exports.sharePosts = sharePosts;