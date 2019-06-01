"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.chrome = void 0;

var _build = require("./build");

var _destroy = require("./destroy");

var _addCookiesToBrowser = require("./add-cookies-to-browser");

var _getCookiesFromBrowser = require("./get-cookies-from-browser");

var chrome = {
  build: _build.build,
  destroy: _destroy.destroy,
  addCookiesToBrowser: _addCookiesToBrowser.addCookiesToBrowser,
  getCookiesFromBrowser: _getCookiesFromBrowser.getCookiesFromBrowser
};
exports.chrome = chrome;