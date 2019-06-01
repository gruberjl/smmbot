"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.shareMediumArticles = void 0;

var _lib = require("../../lib");

var _publications = require("./publications");

var _saveTweet = require("./save-tweet");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var shareMediumArticles =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(accountId) {
    var account, browser, i, articleUrls, j, articleDetails;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _lib.db.accounts.get(accountId);

          case 2:
            account = _context.sent;
            _context.next = 5;
            return _lib.chrome.build();

          case 5:
            browser = _context.sent;

            _lib.chrome.addCookiesToBrowser(browser, account.cookies);

            i = 0;

          case 8:
            if (!(i < _publications.publications.length)) {
              _context.next = 28;
              break;
            }

            _context.next = 11;
            return _lib.medium.publication.getArticles(browser, _publications.publications[i].id);

          case 11:
            articleUrls = _context.sent;
            j = 0;

          case 13:
            if (!(j < articleUrls.length)) {
              _context.next = 25;
              break;
            }

            _context.next = 16;
            return _lib.medium.article.read(browser, articleUrls[j]);

          case 16:
            _context.next = 18;
            return _lib.medium.article.getDetails(browser, articleUrls[j]);

          case 18:
            articleDetails = _context.sent;
            articleDetails.publicationTwitter = _publications.publications[i].twitter;
            _context.next = 22;
            return (0, _saveTweet.saveTweet)(account.user, accountId, articleDetails);

          case 22:
            j++;
            _context.next = 13;
            break;

          case 25:
            i++;
            _context.next = 8;
            break;

          case 28:
            _context.next = 30;
            return _lib.chrome.destroy(browser);

          case 30:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function shareMediumArticles(_x) {
    return _ref.apply(this, arguments);
  };
}();

exports.shareMediumArticles = shareMediumArticles;