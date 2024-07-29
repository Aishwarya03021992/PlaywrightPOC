"use strict";
/**
    * @description      :
    * @author           :
    * @group            :
    * @created          : 17/07/2024 - 08:14:35
    *
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 17/07/2024
    * - Author          :
    * - Modification    :
**/
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const test_1 = require("@playwright/test");
exports.default = (0, test_1.defineConfig)({
    projects: [
        {
            name: 'chrome',
            use: {
                browserName: 'chromium',
                channel: 'chrome' // This specifies to use the Chrome browser
            },
        },
    ],
    testDir: './tests',
    timeout: 60000,
    retries: 2,
    reporter: 'list',
    use: {
        headless: false,
    },
});
const { chromium } = require('playwright');
const test_2 = require("@playwright/test");
(0, test_2.test)('popup authentication', () => __awaiter(void 0, void 0, void 0, function* () {
    test_2.test.setTimeout(60000); // Set timeout to 60 seconds
    const browser = yield chromium.launch({
        headless: false,
        channel: 'chrome' // To ensure Chrome is used
    });
    const page = yield browser.newPage();
    //    const userName = 'admin';
    //    const passWord = 'admin';
    //    const authHeader = 'Basic' + btoa(userName+':'+passWord);
    //    page.setExtraHTTPHeaders({Authorizaton : authHeader});
    //    await page.goto('http://the-internet.herokuapp.com/basic_auth');
    yield page.goto('https://admin:admin@the-internet.herokuapp.com/basic_auth');
    // Wait for the page to load completely
    yield page.waitForLoadState('networkidle');
    //Close the browser
    yield browser.close();
}));
function async() {
    throw new Error('Function not implemented.');
}
