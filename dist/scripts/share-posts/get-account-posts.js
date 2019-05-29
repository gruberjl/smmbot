"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAccountPosts = void 0;

var _lib = require("../../lib");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var getOnePostPerAccount = function getOnePostPerAccount(posts) {
  var results = posts.sort(function (post1, post2) {
    return post2.postAt > post1.postAt;
  }).reduce(function (acc, post) {
    acc[post.account] = post;
    return acc;
  }, {});
  return Object.values(results);
};

var accountsToObject = function accountsToObject(acc, account) {
  acc[account.id] = account;
  return acc;
};

var getAccountPosts =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee() {
    var accounts, posts, accountPosts;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _lib.db.accounts.allDocs();

          case 2:
            _context.t0 = _lib.db.accounts.isReadyToShare;
            _context.t1 = accountsToObject;
            _context.t2 = {};
            accounts = _context.sent.filter(_context.t0).reduce(_context.t1, _context.t2);
            _context.t3 = getOnePostPerAccount;
            _context.next = 9;
            return _lib.db.posts.find.readyToPost();

          case 9:
            _context.t4 = _context.sent;
            posts = (0, _context.t3)(_context.t4);
            accountPosts = posts.map(function (post) {
              return {
                post: post,
                account: accounts[post.account]
              };
            });
            return _context.abrupt("return", accountPosts);

          case 13:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function getAccountPosts() {
    return _ref.apply(this, arguments);
  };
}();

exports.getAccountPosts = getAccountPosts;