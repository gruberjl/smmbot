"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getDetails = void 0;

var _seleniumWebdriver = require("selenium-webdriver");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var getDetails =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(browser, url) {
    var isAlreadyOnUrl,
        title,
        authorTwitter,
        cleanUrl,
        image,
        tags,
        tagEls,
        i,
        _args = arguments;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            isAlreadyOnUrl = _args.length > 2 && _args[2] !== undefined ? _args[2] : false;

            if (isAlreadyOnUrl) {
              _context.next = 4;
              break;
            }

            _context.next = 4;
            return browser.get(url);

          case 4:
            _context.next = 6;
            return browser.findElement(_seleniumWebdriver.By.css('meta[name="title"]')).getAttribute('content')["catch"](function () {
              return undefined;
            });

          case 6:
            _context.t0 = _context.sent;

            if (_context.t0) {
              _context.next = 9;
              break;
            }

            _context.t0 = '';

          case 9:
            title = _context.t0;
            _context.next = 12;
            return browser.findElement(_seleniumWebdriver.By.css('meta[name="twitter:creator"]')).getAttribute('content')["catch"](function () {
              return undefined;
            });

          case 12:
            _context.t1 = _context.sent;

            if (_context.t1) {
              _context.next = 15;
              break;
            }

            _context.t1 = '';

          case 15:
            authorTwitter = _context.t1;
            _context.next = 18;
            return browser.findElement(_seleniumWebdriver.By.css('meta[property="og:url"]')).getAttribute('content')["catch"](function () {
              return undefined;
            });

          case 18:
            _context.t2 = _context.sent;

            if (_context.t2) {
              _context.next = 21;
              break;
            }

            _context.t2 = '';

          case 21:
            cleanUrl = _context.t2;
            _context.next = 24;
            return browser.findElement(_seleniumWebdriver.By.css('meta[property="og:image"]')).getAttribute('content')["catch"](function () {
              return undefined;
            });

          case 24:
            _context.t3 = _context.sent;

            if (_context.t3) {
              _context.next = 27;
              break;
            }

            _context.t3 = '';

          case 27:
            image = _context.t3;
            tags = [];
            _context.next = 31;
            return browser.findElements(_seleniumWebdriver.By.css('.tags li'))["catch"](function () {
              return undefined;
            });

          case 31:
            _context.t4 = _context.sent;

            if (_context.t4) {
              _context.next = 34;
              break;
            }

            _context.t4 = [];

          case 34:
            tagEls = _context.t4;
            i = 0;

          case 36:
            if (!(i < tagEls.length)) {
              _context.next = 45;
              break;
            }

            _context.t5 = tags;
            _context.next = 40;
            return tagEls[i].getText();

          case 40:
            _context.t6 = _context.sent;

            _context.t5.push.call(_context.t5, _context.t6);

          case 42:
            i++;
            _context.next = 36;
            break;

          case 45:
            return _context.abrupt("return", {
              title: title,
              authorTwitter: authorTwitter,
              url: cleanUrl,
              image: image,
              tags: tags
            });

          case 46:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function getDetails(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.getDetails = getDetails;