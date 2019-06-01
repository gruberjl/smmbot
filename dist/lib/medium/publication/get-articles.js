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
        excludePremium,
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
            excludePremium = _args.length > 3 && _args[3] !== undefined ? _args[3] : false;
            _context.next = 5;
            return browser.get("https://medium.com/".concat(publication, "/latest"));

          case 5:
            _context.next = 7;
            return browser.findElements(_seleniumWebdriver.By.className('postArticle'));

          case 7:
            posts = _context.sent;
            urls = [];
            i = 0;

          case 10:
            if (!(i < posts.length)) {
              _context.next = 30;
              break;
            }

            if (!excludePremium) {
              _context.next = 17;
              break;
            }

            _context.next = 14;
            return posts[i].findElement(_seleniumWebdriver.By.className('svgIcon--star'))["catch"](function () {
              return undefined;
            });

          case 14:
            premium = _context.sent;

            if (!premium) {
              _context.next = 17;
              break;
            }

            return _context.abrupt("continue", 27);

          case 17:
            _context.next = 19;
            return posts[i].findElement(_seleniumWebdriver.By.css('time')).getAttribute('datetime')["catch"](function () {
              return undefined;
            });

          case 19:
            date = _context.sent;

            if (!(filter === 'today')) {
              _context.next = 23;
              break;
            }

            if ((0, _moment["default"])(date).add(1, "days").isSame(new Date(), 'day')) {
              _context.next = 23;
              break;
            }

            return _context.abrupt("continue", 27);

          case 23:
            _context.next = 25;
            return posts[i].findElement(_seleniumWebdriver.By.css('.postArticle-readMore a')).getAttribute('href')["catch"](function () {
              return undefined;
            });

          case 25:
            url = _context.sent;
            if (url) urls.push(url);

          case 27:
            i++;
            _context.next = 10;
            break;

          case 30:
            return _context.abrupt("return", urls);

          case 31:
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