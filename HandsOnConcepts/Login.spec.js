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
    testDir: './SWAPAAutomation',
    timeout: 60000,
    retries: 2,
    reporter: 'list',
    use: {
        headless: false,
    },
});
const { chromium } = require('playwright');
const test_2 = require("@playwright/test");
(0, test_2.test)('login test', () => __awaiter(void 0, void 0, void 0, function* () {
    test_2.test.setTimeout(60000); // Set timeout to 60 seconds
    const browser = yield chromium.launch({
        headless: false,
        channel: 'chrome' // To ensure Chrome is used
    });
    const page = yield browser.newPage();
    yield page.goto('https://qa.swapa.org/');
    // Wait for the page to load completely
    yield page.waitForLoadState('networkidle');
    // Click the "Main Log in" button
    yield page.click('text=Log in');
    //Enter User Name
    const userName = page.locator('//input[@name="Username (Employee # WITHOUT the e)"]');
    yield userName.waitFor({ state: 'visible' });
    yield userName.fill('112298849');
    //Enter Password
    const passWord = page.locator('//input[@name="Password"]');
    yield passWord.fill('swapa8849');
    //Click Login Button
    test_2.test.setTimeout(60000); // Set timeout to 60 seconds
    const loginButton = page.locator('//button[@id="next"]');
    loginButton.click();
    test_2.test.setTimeout(60000); // Set timeout to 60 seconds
    //Print Page Title
    const loginTilte = yield page.title();
    console.log("SWAPA Home Page Title: ", loginTilte);
    //Validate User lands on SWAPA Home Page
    yield (0, test_2.expect)(page).toHaveTitle(/SWAPA/);
    //To take screenshot of the home page
    yield page.screenshot({ path: 'SWAPAHomepage.png', fullPage: true });
    //Close the browser
    yield browser.close();
}));
function async() {
    throw new Error('Function not implemented.');
}
