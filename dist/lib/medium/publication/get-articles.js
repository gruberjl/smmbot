"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getArticles = void 0;

var _seleniumWebdriver = require("selenium-webdriver");

var _moment = _interopRequireDefault(require("moment"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var getArticles =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(browser) {
    var publication,
        filter,
        posts,
        urls,
        i,
        premium,
        date,
        url,
        _args = arguments;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            publication = _args.length > 1 && _args[1] !== undefined ? _args[1] : 'the-mission';
            filter = _args.length > 2 && _args[2] !== undefined ? _args[2] : 'today';
            _context.next = 4;
            return browser.get("https://medium.com/".concat(publication, "/latest"));

          case 4:
            _context.next = 6;
            return browser.findElements(_seleniumWebdriver.By.className('postArticle'));

          case 6:
            posts = _context.sent;
            urls = [];
            i = 0;

          case 9:
            if (!(i < posts.length)) {
              _context.next = 28;
              break;
            }

            _context.next = 12;
            return posts[i].findElement(_seleniumWebdriver.By.className('svgIcon--star'))["catch"](function () {
              return undefined;
            });

          case 12:
            premium = _context.sent;
            _context.next = 15;
            return posts[i].findElement(_seleniumWebdriver.By.css('time')).getAttribute('datetime')["catch"](function () {
              return undefined;
            });

          case 15:
            date = _context.sent;

            if (!premium) {
              _context.next = 18;
              break;
            }

            return _context.abrupt("continue", 25);

          case 18:
            if (!(filter === 'today')) {
              _context.next = 21;
              break;
            }

            if ((0, _moment["default"])(date).add(1, "days").isSame(new Date(), 'day')) {
              _context.next = 21;
              break;
            }

            return _context.abrupt("continue", 25);

          case 21:
            _context.next = 23;
            return posts[i].findElement(_seleniumWebdriver.By.css('.postArticle-readMore a')).getAttribute('href')["catch"](function () {
              return undefined;
            });

          case 23:
            url = _context.sent;
            if (url) urls.push(url);

          case 25:
            i++;
            _context.next = 9;
            break;

          case 28:
            return _context.abrupt("return", urls);

          case 29:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function getArticles(_x) {
    return _ref.apply(this, arguments);
  };
}();

exports.getArticles = getArticles;