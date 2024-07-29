"use strict";
/**
    * @description      :
    * @author           :
    * @group            :
    * @created          : 19/07/2024 - 18:29:32
    *
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 19/07/2024
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
//const {chromium} = require('playwright');
const test_1 = require("@playwright/test");
const playwright_1 = require("playwright");
(0, test_1.test)('no incognito', () => __awaiter(void 0, void 0, void 0, function* () {
    test_1.test.setTimeout(60000); // Set timeout to 60 seconds
    const browser = yield playwright_1.chromium.launchPersistentContext('./session', { headless: false, channel: 'chrome' });
    const pages = browser.pages(); //Two pages 0 to 1
    const page = pages[0];
    // const page:Page = await browser.newPage();
    yield page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/register');
    test_1.test.setTimeout(60000); // Set timeout to 60 seconds
    const firstName = yield page.locator('id=input-firstname');
    yield firstName.fill('Aishwarya');
    const lastName = yield page.getByPlaceholder('Last Name');
    yield lastName.fill('Kamaraj');
    const logo = yield page.locator('.img-responsive');
    const logoExists = yield logo.isEnabled();
    console.log("Print for the existance of Logo", logoExists);
    yield (0, test_1.expect)(page.getByRole('heading', { name: 'Register Account' })).toBeVisible();
    const newsletterSelection = yield page.locator('xpath=(//input[@value="1"])[2]');
    yield newsletterSelection.click();
}));
function async() {
    throw new Error('Function not implemented.');
}
