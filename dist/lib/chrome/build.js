"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.build = void 0;

var _seleniumWebdriver = _interopRequireDefault(require("selenium-webdriver"));

var _chrome = _interopRequireDefault(require("selenium-webdriver/chrome"));

var _chromedriver = _interopRequireDefault(require("chromedriver"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var build =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee() {
    var disableNotifications,
        options,
        browser,
        _args = arguments;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            disableNotifications = _args.length > 0 && _args[0] !== undefined ? _args[0] : true;
            options = new _chrome["default"].Options();
            if (disableNotifications) options.addArguments('--disable-notifications');

            _chrome["default"].setDefaultService(new _chrome["default"].ServiceBuilder(_chromedriver["default"].path).build());

            browser = new _seleniumWebdriver["default"].Builder().forBrowser('chrome').withCapabilities(options).build();
            _context.next = 7;
            return browser.get('http://gitbit.org');

          case 7:
            return _context.abrupt("return", browser);

          case 8:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function build() {
    return _ref.apply(this, arguments);
  };
}();

exports.build = build;