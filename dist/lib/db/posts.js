"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.posts = void 0;

var _moment = _interopRequireDefault(require("moment"));

var _lib = require("./lib");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var dbName = 'posts';

var readyToPost =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee() {
    var collection;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            collection = (0, _lib.getCollection)(dbName);
            return _context.abrupt("return", collection.where('posted', '==', false).where('postAt', '<=', (0, _moment["default"])().toISOString()).orderBy('postAt').get().then(_lib.snapshotToDocs)["catch"](function (error) {
              return {
                error: error
              };
            }));

          case 2:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function readyToPost() {
    return _ref.apply(this, arguments);
  };
}();

var posts = {
  getCollection: _lib.getCollection,
  set: (0, _lib.set)(dbName),
  get: (0, _lib.get)(dbName),
  remove: (0, _lib.remove)(dbName),
  allDocs: (0, _lib.allDocs)(dbName),
  find: {
    readyToPost: readyToPost
  }
};
exports.posts = posts;