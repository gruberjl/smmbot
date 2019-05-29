"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.chrome = void 0;

var _build = require("./build");

var _destroy = require("./destroy");

var _saveCookies = require("./save-cookies");

var _getCookies = require("./get-cookies");

var chrome = {
  build: _build.build,
  destroy: _destroy.destroy,
  saveCookies: _saveCookies.saveCookies,
  getCookies: _getCookies.getCookies
};
exports.chrome = chrome;