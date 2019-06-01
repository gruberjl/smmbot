"use strict";

var _index = require("./index");

var accountId = 'linkedin'; // Id for the database doc that will be created

var provider = 'linked';
var username = 'gruberjl';
var delay = 10 * 1000 * 60; // number of milliseconds before closing browser

(0, _index.chromeLogin)(accountId, provider, username, delay);