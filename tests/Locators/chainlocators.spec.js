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
(0, test_1.test)('chain locators POC', () => __awaiter(void 0, void 0, void 0, function* () {
    test_1.test.setTimeout(60000); // Set timeout to 60 seconds
    const browser = yield chromium.launch({
        headless: false,
        channel: 'chrome' // To ensure Chrome is used
    });
    const page = yield browser.newPage();
    yield page.goto('https://orangehrm.com/30-day-free-trial/');
    yield page.locator('form#Form_getForm >> #Form_getForm_Name').fill('Aishwarya');
    yield page.locator('form#Form_getForm >> #Form_getForm_Email').fill('xyz@gmail.com');
    // await page.locator('form#Form_getForm >> text=Get Your Free Trial').click();
    // const form = page.locator('form#Form_getForm');
    // const getYourFreeTrailButton = page.getByRole('button', { name : 'Get Your Free Trial'});
    // await form.locator(getYourFreeTrailButton).click();
    yield page.locator('form#Form_getForm').getByRole('button', { name: 'Get Your Free Trial' });
    yield page.waitForTimeout(3000);
}));
function async() {
    throw new Error('Function not implemented.');
}
