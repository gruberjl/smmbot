"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.chromeLogin = void 0;

var _lib = require("../../lib");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var accountId = 'flipboard'; // Id for the database doc that will be created

var delay = 10 * 1000 * 60; // number of milliseconds before closing browser

var createDoc =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee() {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _lib.db.accounts.set({
              id: accountId,
              cookies: []
            });

          case 2:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function createDoc() {
    return _ref.apply(this, arguments);
  };
}();

var chromeLogin =
/*#__PURE__*/
function () {
  var _ref2 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee2() {
    var doc, browser;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return _lib.db.accounts.get(accountId);

          case 2:
            doc = _context2.sent;

            if (!doc.error) {
              _context2.next = 6;
              break;
            }

            _context2.next = 6;
            return createDoc();

          case 6:
            _context2.next = 8;
            return _lib.chrome.build();

          case 8:
            browser = _context2.sent;
            _context2.next = 11;
            return browser.sleep(delay);

          case 11:
            _context2.next = 13;
            return _lib.chrome.saveCookies(browser, accountId);

          case 13:
            _context2.next = 15;
            return browser.quit();

          case 15:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function chromeLogin() {
    return _ref2.apply(this, arguments);
  };
}();

exports.chromeLogin = chromeLogin;