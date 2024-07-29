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
(0, test_2.test)('BrowserContextAdmin', () => __awaiter(void 0, void 0, void 0, function* () {
    test_2.test.setTimeout(60000); // Set timeout to 60 seconds
    const browser = yield chromium.launch({
        headless: false,
        channel: 'chrome' // To ensure Chrome is used
    });
    // BrowserContextAdmin
    const browserContext_admin = yield browser.newContext();
    const pageAdmin = yield browserContext_admin.newPage();
    // BrowserContextLocalUser
    const browserContext_localUser = yield browser.newContext();
    const pageLocalUser = yield browserContext_localUser.newPage();
    //Browser Validations with Admin User
    yield pageAdmin.goto('https://qa.swapa.org/');
    // Wait for the page to load completely
    yield pageAdmin.waitForLoadState('networkidle');
    // Click the "Main Log in" button
    yield pageAdmin.click('text=Log in');
    //Enter User Name
    const userNameAdmin = pageAdmin.locator('//input[@name="Username (Employee # WITHOUT the e)"]');
    yield userNameAdmin.waitFor({ state: 'visible' });
    yield userNameAdmin.fill('112298849');
    //Enter Password
    const passWordAdmin = pageAdmin.locator('//input[@name="Password"]');
    yield passWordAdmin.fill('swapa8849');
    //Click Login Button
    test_2.test.setTimeout(60000); // Set timeout to 60 seconds
    const loginButtonAdmin = pageAdmin.locator('//button[@id="next"]');
    loginButtonAdmin.click();
    test_2.test.setTimeout(60000); // Set timeout to 60 seconds
    //Print Page Title
    const loginTilte = yield pageAdmin.title();
    console.log("SWAPA Home Page Title: ", loginTilte);
    //Validate User lands on SWAPA Home Page
    yield (0, test_2.expect)(pageAdmin).toHaveTitle(/SWAPA/);
    //To take screenshot of the home page
    yield pageAdmin.screenshot({ path: 'SWAPAHomepageAdmin.png', fullPage: true });
    //Browser Validations with Local User
    yield pageLocalUser.goto('https://qa.swapa.org/');
    // Wait for the page to load completely
    yield pageLocalUser.waitForLoadState('networkidle');
    // Click the "Main Log in" button
    yield pageLocalUser.click('text=Log in');
    //Enter User Name
    const userNameLocalUser = pageLocalUser.locator('//input[@name="Username (Employee # WITHOUT the e)"]');
    yield userNameLocalUser.waitFor({ state: 'visible' });
    yield userNameLocalUser.fill('22795');
    //Enter Password
    const passWordLocalUser = pageLocalUser.locator('//input[@name="Password"]');
    yield passWordLocalUser.fill('Pilot@400');
    //Click Login Button
    test_2.test.setTimeout(60000); // Set timeout to 60 seconds
    const loginButtonLocalUser = pageLocalUser.locator('//button[@id="next"]');
    loginButtonLocalUser.click();
    test_2.test.setTimeout(60000); // Set timeout to 60 seconds
    //Print Page Title
    const loginTilteLocalUser = yield pageLocalUser.title();
    console.log("SWAPA Home Page Title: ", loginTilte);
    //Validate User lands on SWAPA Home Page
    yield (0, test_2.expect)(pageLocalUser).toHaveTitle(/SWAPA/);
    //To take screenshot of the home page
    yield pageLocalUser.screenshot({ path: 'SWAPAHomepageLocalUser.png', fullPage: true });
    //Close the browser Context
    yield browserContext_admin.close();
    yield browserContext_localUser.close();
    //Main browser close
    yield browser.close();
}));
function async() {
    throw new Error('Function not implemented.');
}
