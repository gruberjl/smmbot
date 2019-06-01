"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.chromeLogin = void 0;

var _lib = require("../../lib");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var chromeLogin =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(accountId, provider, username, delayInMs) {
    var browser, account, cookies;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _lib.chrome.build();

          case 2:
            browser = _context.sent;
            _context.next = 5;
            return browser.sleep(delayInMs);

          case 5:
            _context.next = 7;
            return _lib.db.accounts.get(accountId);

          case 7:
            account = _context.sent;

            if (account.error) {
              account = {
                id: accountId,
                provider: provider,
                username: username
              };
            }

            _context.next = 11;
            return _lib.chrome.getCookiesFromBrowser(browser);

          case 11:
            cookies = _context.sent;
            account.cookies = cookies;
            _context.next = 15;
            return _lib.db.accounts.set(account);

          case 15:
            _context.next = 17;
            return browser.quit();

          case 17:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function chromeLogin(_x, _x2, _x3, _x4) {
    return _ref.apply(this, arguments);
  };
}();

exports.chromeLogin = chromeLogin;