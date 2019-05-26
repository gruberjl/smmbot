"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const selenium_webdriver_1 = __importDefault(require("selenium-webdriver"));
const chrome_1 = __importDefault(require("selenium-webdriver/chrome"));
exports.build = (disableNotifications = true) => __awaiter(this, void 0, void 0, function* () {
    const options = new chrome_1.default.Options();
    if (disableNotifications)
        options.addArguments('--disable-notifications');
    const driver = new selenium_webdriver_1.default.Builder().forBrowser('chrome').withCapabilities(options).build();
    return driver;
});
//# sourceMappingURL=build.js.map