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
const { chromium } = require('playwright');
const test_1 = require("@playwright/test");
(0, test_1.test)('Mouse Actions', () => __awaiter(void 0, void 0, void 0, function* () {
    test_1.test.setTimeout(60000); // Set timeout to 60 seconds
    const browser = yield chromium.launch({
        headless: false,
        channel: 'chrome' // To ensure Chrome is used
    });
    const page = yield browser.newPage();
    yield page.goto('https://demo.guru99.com/test/simple_context_menu.html');
    //Perform Double click
    yield page.getByText('Double-Click Me To See Alert').dblclick();
    //Perform Right Click
    yield page.getByText('right click me').click({ button: 'right' });
    yield page.getByText('Copy').click();
    yield page.waitForTimeout(3000);
    //Shift+click
    yield page.goto('https://the-internet.herokuapp.com/');
    yield page.getByText('Shifting Content').click();
    yield page.waitForTimeout(3000);
    yield page.getByText('Example 2: An image').click({ modifiers: ["Shift"] });
    yield page.waitForTimeout(3000);
    //To take screenshot of the home page
    yield page.screenshot({ path: 'MouseHoverActions.png', fullPage: true });
    // Assert the navigation or state change after shift+click
    (0, test_1.expect)(page.url()).toBe('https://the-internet.herokuapp.com/shifting_content');
    //Close the browser
    yield browser.close();
}));
function async() {
    throw new Error('Function not implemented.');
}
