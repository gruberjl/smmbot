"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.flip = void 0;

var _seleniumWebdriver = require("selenium-webdriver");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var openCompose =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(browser) {
    var btns, i, composeIcon;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return browser.findElements(_seleniumWebdriver.By.css('.tab-item'));

          case 2:
            btns = _context.sent;
            i = 0;

          case 4:
            if (!(i < btns.length)) {
              _context.next = 17;
              break;
            }

            _context.next = 7;
            return btns[i].findElement(_seleniumWebdriver.By.css('.compose-icon'))["catch"](function () {
              return undefined;
            });

          case 7:
            composeIcon = _context.sent;

            if (!composeIcon) {
              _context.next = 14;
              break;
            }

            _context.next = 11;
            return btns[i].click();

          case 11:
            _context.next = 13;
            return browser.sleep(1000);

          case 13:
            return _context.abrupt("return", true);

          case 14:
            i++;
            _context.next = 4;
            break;

          case 17:
            return _context.abrupt("return", false);

          case 18:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function openCompose(_x) {
    return _ref.apply(this, arguments);
  };
}();

var selectMagazine =
/*#__PURE__*/
function () {
  var _ref2 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee2(browser, magazineTitle) {
    var magazines, i, title;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return browser.findElements(_seleniumWebdriver.By.css('.magazine-selection__magazine'));

          case 2:
            magazines = _context2.sent;
            i = 0;

          case 4:
            if (!(i < magazines.length)) {
              _context2.next = 15;
              break;
            }

            _context2.next = 7;
            return magazines[i].getText();

          case 7:
            title = _context2.sent;

            if (!(title == magazineTitle)) {
              _context2.next = 12;
              break;
            }

            _context2.next = 11;
            return magazines[i].click();

          case 11:
            return _context2.abrupt("return", true);

          case 12:
            i++;
            _context2.next = 4;
            break;

          case 15:
            return _context2.abrupt("return", false);

          case 16:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function selectMagazine(_x2, _x3) {
    return _ref2.apply(this, arguments);
  };
}();

var setUrl =
/*#__PURE__*/
function () {
  var _ref3 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee3(browser, url) {
    var textBox;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return browser.findElement(_seleniumWebdriver.By.css('textarea.share-flip__input'));

          case 2:
            textBox = _context3.sent;
            _context3.next = 5;
            return textBox.sendKeys(url);

          case 5:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function setUrl(_x4, _x5) {
    return _ref3.apply(this, arguments);
  };
}();

var setDescription =
/*#__PURE__*/
function () {
  var _ref4 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee4(browser, description) {
    var textBoxes;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return browser.findElements(_seleniumWebdriver.By.css('textarea.share-flip__input'));

          case 2:
            textBoxes = _context4.sent;

            if (!(textBoxes.length == 2)) {
              _context4.next = 6;
              break;
            }

            _context4.next = 6;
            return textBoxes[1].sendKeys(description);

          case 6:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));

  return function setDescription(_x6, _x7) {
    return _ref4.apply(this, arguments);
  };
}();

var submitFlip =
/*#__PURE__*/
function () {
  var _ref5 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee5(browser) {
    var btn;
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.next = 2;
            return browser.findElement(_seleniumWebdriver.By.css('.share-flip__button-primary'));

          case 2:
            btn = _context5.sent;
            _context5.next = 5;
            return btn.click();

          case 5:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));

  return function submitFlip(_x8) {
    return _ref5.apply(this, arguments);
  };
}();

var flip =
/*#__PURE__*/
function () {
  var _ref6 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee6(browser, url) {
    var magazineTitle,
        description,
        modalOpen,
        magazineSelected,
        _args6 = arguments;
    return regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            magazineTitle = _args6.length > 2 && _args6[2] !== undefined ? _args6[2] : 'Transform and Improve Your Life';
            description = _args6.length > 3 ? _args6[3] : undefined;
            _context6.next = 4;
            return browser.get('https://flipboard.com/');

          case 4:
            _context6.next = 6;
            return openCompose(browser);

          case 6:
            modalOpen = _context6.sent;

            if (modalOpen) {
              _context6.next = 9;
              break;
            }

            return _context6.abrupt("return");

          case 9:
            _context6.next = 11;
            return selectMagazine(browser, magazineTitle);

          case 11:
            magazineSelected = _context6.sent;

            if (magazineSelected) {
              _context6.next = 14;
              break;
            }

            return _context6.abrupt("return");

          case 14:
            _context6.next = 16;
            return setUrl(browser, url);

          case 16:
            if (!description) {
              _context6.next = 19;
              break;
            }

            _context6.next = 19;
            return setDescription(browser, description);

          case 19:
            _context6.next = 21;
            return submitFlip(browser);

          case 21:
            _context6.next = 23;
            return browser.sleep(1500);

          case 23:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6);
  }));

  return function flip(_x9, _x10) {
    return _ref6.apply(this, arguments);
  };
}();

exports.flip = flip;