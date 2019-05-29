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
  regeneratorRuntime.mark(function _callee() {
    var browser, i, articleUrls, j, articleDetails;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _lib.chrome.build();

          case 2:
            browser = _context.sent;

            _lib.chrome.getCookies(browser, 'medium');

            i = 0;

          case 5:
            if (!(i < _publications.publications.length)) {
              _context.next = 25;
              break;
            }

            _context.next = 8;
            return _lib.medium.publication.getArticles(browser, _publications.publications[i].id);

          case 8:
            articleUrls = _context.sent;
            j = 0;

          case 10:
            if (!(j < articleUrls.length)) {
              _context.next = 22;
              break;
            }

            _context.next = 13;
            return _lib.medium.article.read(browser, articleUrls[j]);

          case 13:
            _context.next = 15;
            return _lib.medium.article.getDetails(browser, articleUrls[j]);

          case 15:
            articleDetails = _context.sent;
            articleDetails.publicationTwitter = _publications.publications[i].twitter;
            _context.next = 19;
            return (0, _saveTweet.saveTweet)(articleDetails);

          case 19:
            j++;
            _context.next = 10;
            break;

          case 22:
            i++;
            _context.next = 5;
            break;

          case 25:
            _context.next = 27;
            return _lib.chrome.destroy(browser);

          case 27:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function shareMediumArticles() {
    return _ref.apply(this, arguments);
  };
}();

exports.shareMediumArticles = shareMediumArticles;