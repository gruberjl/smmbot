"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.saveTweet = void 0;

var _moment = _interopRequireDefault(require("moment"));

var _lib = require("../../lib");

var _createTweet = require("./create-tweet");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var createId = function createId() {
  var date = (0, _moment["default"])().format("YYYY-MM-DD");
  var platform = 'tw';
  var random = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
  return "".concat(date, "-").concat(platform, "-").concat(random);
};

var saveTweet =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(articleDetails) {
    var message;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            message = (0, _createTweet.createTweet)(articleDetails);
            _context.next = 3;
            return _lib.db.posts.set({
              account: 'twitter',
              id: createId(),
              message: message,
              postAt: (0, _moment["default"])().toISOString(),
              posted: false
            });

          case 3:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function saveTweet(_x) {
    return _ref.apply(this, arguments);
  };
}();

exports.saveTweet = saveTweet;