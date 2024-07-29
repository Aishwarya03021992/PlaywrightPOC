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


//const {chromium} = require('playwright');
import { test, expect, Browser, type Page, Locator, BrowserContext } from '@playwright/test';
import { assert, Console } from 'console';
import { text } from 'node:stream/consumers';
import { title } from 'process';
import { webkit, chromium, firefox} from 'playwright'

test('Mouse Hover Action', async () => {
    test.setTimeout(60000); // Set timeout to 60 seconds
    const browser: Browser = await chromium.launch({ 
        headless: false,
        channel: 'chrome' // To ensure Chrome is used
      });
    const page:Page = await browser.newPage();
    await page.setViewportSize({
        width: 1920,
        height: 1080
      });
    await page.goto('https://www.bigbasket.com/');
    

    test.setTimeout(60000); // Set timeout to 60 seconds
    const shopbycategory = page.locator('xpath=(//button[@id="headlessui-menu-button-:R5bab6:"])[1]');
    await shopbycategory.click();
 
    const beveragesCategory = page.locator('(//a[@role="none"][normalize-space()="Beverages"])[1]');
    await beveragesCategory.hover();

    const teaItem = page.locator('(//a[contains(@href,"/pc/beverages/tea") and contains(text(), "Tea")])[1]');
    await teaItem.hover();

    const teaBags = page.locator('//a[contains(@href, "/pc/beverages/tea/tea-bags") and contains(text(), "Tea Bags")]');
    await teaBags.click();

   // Add assertion to verify navigation to the correct page
    await expect(page).toHaveURL("https://www.bigbasket.com/pc/beverages/tea/tea-bags/?nc=nb");
    console.log("Tea Bad menu is selected successfully");

    //Close the browser
   await browser.close();
});

function async() {
    throw new Error('Function not implemented.');
}