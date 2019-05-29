"use strict";

var _ = require("./..");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var addCookies =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(driver, cookies) {
    var i;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            i = 0;

          case 1:
            if (!(i < cookies.length)) {
              _context.next = 7;
              break;
            }

            _context.next = 4;
            return driver.manage().addCookie(cookies[i]);

          case 4:
            i++;
            _context.next = 1;
            break;

          case 7:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function addCookies(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

var getCookies =
/*#__PURE__*/
function () {
  var _ref2 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee2(browser, docId) {
    var doc;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return _.db.accounts.get(docId);

          case 2:
            doc = _context2.sent;

            if (!doc.cookies) {
              _context2.next = 6;
              break;
            }

            _context2.next = 6;
            return addCookies(browser, doc.cookies);

          case 6:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function getCookies(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

module.exports = {
  getCookies: getCookies
};