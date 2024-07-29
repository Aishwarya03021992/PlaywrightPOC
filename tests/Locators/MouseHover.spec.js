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
(0, test_1.test)('Mouse Hover Action', () => __awaiter(void 0, void 0, void 0, function* () {
    test_1.test.setTimeout(60000); // Set timeout to 60 seconds
    const browser = yield playwright_1.chromium.launch({
        headless: false,
        channel: 'chrome' // To ensure Chrome is used
    });
    const page = yield browser.newPage();
    yield page.setViewportSize({
        width: 1920,
        height: 1080
    });
    yield page.goto('https://www.bigbasket.com/');
    test_1.test.setTimeout(60000); // Set timeout to 60 seconds
    const shopbycategory = page.locator('xpath=(//button[@id="headlessui-menu-button-:R5bab6:"])[1]');
    yield shopbycategory.click();
    const beveragesCategory = page.locator('(//a[@role="none"][normalize-space()="Beverages"])[1]');
    yield beveragesCategory.hover();
    const teaItem = page.locator('(//a[contains(@href,"/pc/beverages/tea") and contains(text(), "Tea")])[1]');
    yield teaItem.hover();
    const teaBags = page.locator('//a[contains(@href, "/pc/beverages/tea/tea-bags") and contains(text(), "Tea Bags")]');
    yield teaBags.click();
    // Add assertion to verify navigation to the correct page
    yield (0, test_1.expect)(page).toHaveURL("https://www.bigbasket.com/pc/beverages/tea/tea-bags/?nc=nb");
    console.log("Tea Bad menu is selected successfully");
    //Close the browser
    yield browser.close();
}));
function async() {
    throw new Error('Function not implemented.');
}
