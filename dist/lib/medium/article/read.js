"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.read = void 0;

var _seleniumWebdriver = require("selenium-webdriver");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var isBottomOfPage =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(driver) {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return driver.executeScript('if (document.body.scrollHeight == window.innerHeight + window.scrollY) { return true; } else { return false; }');

          case 2:
            return _context.abrupt("return", _context.sent);

          case 3:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function isBottomOfPage(_x) {
    return _ref.apply(this, arguments);
  };
}();

var randomNum = function randomNum(low, high) {
  return Math.floor(Math.random() * (high - low + 1) + low);
};

var readUntilEnd = function readUntilEnd(driver) {
  var waitMin = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  var waitMax = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 3;
  return new Promise(
  /*#__PURE__*/
  function () {
    var _ref2 = _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee2(res) {
      var timeout, body, isBottom;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              timeout = new Date().getTime() + 1000 * 60;
              _context2.next = 3;
              return driver.findElement(_seleniumWebdriver.By.css('body'));

            case 3:
              body = _context2.sent;
              isBottom = false;

            case 5:
              if (isBottom) {
                _context2.next = 16;
                break;
              }

              _context2.next = 8;
              return driver.sleep(randomNum(waitMin, waitMax) * 1000);

            case 8:
              _context2.next = 10;
              return body.sendKeys(_seleniumWebdriver.Key.PAGE_DOWN);

            case 10:
              _context2.next = 12;
              return isBottomOfPage(driver);

            case 12:
              isBottom = _context2.sent;
              if (new Date().getTime() > timeout) isBottom = true;
              _context2.next = 5;
              break;

            case 16:
              res();

            case 17:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function (_x2) {
      return _ref2.apply(this, arguments);
    };
  }());
};

var clap =
/*#__PURE__*/
function () {
  var _ref3 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee3(driver) {
    var clapMin,
        clapMax,
        times,
        url,
        clapBtn,
        body,
        i,
        _url,
        _args3 = arguments;

    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            clapMin = _args3.length > 1 && _args3[1] !== undefined ? _args3[1] : 10;
            clapMax = _args3.length > 2 && _args3[2] !== undefined ? _args3[2] : 25;
            _context3.prev = 2;
            times = randomNum(clapMin, clapMax);
            _context3.next = 6;
            return driver.getCurrentUrl().toString();

          case 6:
            url = _context3.sent;

            if (!url.includes('/topics/')) {
              _context3.next = 9;
              break;
            }

            return _context3.abrupt("return");

          case 9:
            _context3.next = 11;
            return driver.findElement(_seleniumWebdriver.By.css('.postActions .clapButton'));

          case 11:
            clapBtn = _context3.sent;
            _context3.next = 14;
            return driver.executeScript('(document.getElementsByClassName(\'clapButton\')[0]).scrollIntoView()');

          case 14:
            _context3.next = 16;
            return driver.findElement(_seleniumWebdriver.By.css('body'));

          case 16:
            body = _context3.sent;
            _context3.next = 19;
            return body.sendKeys(_seleniumWebdriver.Key.ARROW_UP);

          case 19:
            _context3.next = 21;
            return body.sendKeys(_seleniumWebdriver.Key.ARROW_UP);

          case 21:
            _context3.next = 23;
            return body.sendKeys(_seleniumWebdriver.Key.ARROW_UP);

          case 23:
            _context3.next = 25;
            return body.sendKeys(_seleniumWebdriver.Key.ARROW_UP);

          case 25:
            _context3.next = 27;
            return body.sendKeys(_seleniumWebdriver.Key.ARROW_UP);

          case 27:
            i = 0;

          case 28:
            if (!(i < times)) {
              _context3.next = 36;
              break;
            }

            _context3.next = 31;
            return driver.sleep(250);

          case 31:
            _context3.next = 33;
            return clapBtn.click();

          case 33:
            i++;
            _context3.next = 28;
            break;

          case 36:
            _context3.next = 38;
            return driver.sleep(1000);

          case 38:
            _context3.next = 46;
            break;

          case 40:
            _context3.prev = 40;
            _context3.t0 = _context3["catch"](2);
            _context3.next = 44;
            return driver.getCurrentUrl();

          case 44:
            _url = _context3.sent;
            console.log("Error clapping on ".concat(_url, "."));

          case 46:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[2, 40]]);
  }));

  return function clap(_x3) {
    return _ref3.apply(this, arguments);
  };
}();

var followAuthor =
/*#__PURE__*/
function () {
  var _ref4 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee4(browser) {
    var btn, txt;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return browser.findElement(_seleniumWebdriver.By.css('.js-cardUser .button--follow'))["catch"](function () {
              return undefined;
            });

          case 2:
            btn = _context4.sent;

            if (btn) {
              _context4.next = 5;
              break;
            }

            return _context4.abrupt("return");

          case 5:
            _context4.next = 7;
            return btn.getText();

          case 7:
            txt = _context4.sent;

            if (!(txt == 'Follow')) {
              _context4.next = 16;
              break;
            }

            _context4.prev = 9;
            _context4.next = 12;
            return btn.click();

          case 12:
            _context4.next = 16;
            break;

          case 14:
            _context4.prev = 14;
            _context4.t0 = _context4["catch"](9);

          case 16:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[9, 14]]);
  }));

  return function followAuthor(_x4) {
    return _ref4.apply(this, arguments);
  };
}();

var read =
/*#__PURE__*/
function () {
  var _ref5 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee5(browser, url, numOfClaps) {
    var doFollowAuthor,
        _args5 = arguments;
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            doFollowAuthor = _args5.length > 3 && _args5[3] !== undefined ? _args5[3] : true;
            _context5.next = 3;
            return browser.get(url);

          case 3:
            _context5.next = 5;
            return readUntilEnd(browser);

          case 5:
            _context5.next = 7;
            return clap(browser, numOfClaps, numOfClaps);

          case 7:
            if (!doFollowAuthor) {
              _context5.next = 10;
              break;
            }

            _context5.next = 10;
            return followAuthor(browser);

          case 10:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));

  return function read(_x5, _x6, _x7) {
    return _ref5.apply(this, arguments);
  };
}();

exports.read = read;