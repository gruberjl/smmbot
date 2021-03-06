"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getTwit = void 0;

var _twit = _interopRequireDefault(require("twit"));

var _ = require("../..");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var twit;

var getTwit =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(account) {
    var doc;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (twit) {
              _context.next = 5;
              break;
            }

            _context.next = 3;
            return _.db.apps.get('twitter');

          case 3:
            doc = _context.sent;
            twit = new _twit["default"]({
              consumer_key: doc.apiToken,
              consumer_secret: doc.apiSecret,
              access_token: account.accessToken,
              access_token_secret: account.secret
            });

          case 5:
            return _context.abrupt("return", twit);

          case 6:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function getTwit(_x) {
    return _ref.apply(this, arguments);
  };
}();

exports.getTwit = getTwit;