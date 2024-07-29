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


const {chromium} = require('playwright');
import { test, expect, Browser, type Page, Locator, BrowserContext } from '@playwright/test';
import { assert, Console } from 'console';
import { text } from 'node:stream/consumers';
import { title } from 'process';

test('Mouse Actions', async () => {
    test.setTimeout(60000); // Set timeout to 60 seconds
    const browser: Browser = await chromium.launch({ 
        headless: false,
        channel: 'chrome' // To ensure Chrome is used
      });

    const page:Page = await browser.newPage();

    await page.goto('https://demo.guru99.com/test/simple_context_menu.html');

    //Perform Double click
    await page.getByText('Double-Click Me To See Alert').dblclick();

    //Perform Right Click
    await page.getByText('right click me').click({button:'right'});
    await page.getByText('Copy').click();

    await page.waitForTimeout(3000);

    //Shift+click
    await page.goto('https://the-internet.herokuapp.com/');
    await page.getByText('Shifting Content').click();
    await page.waitForTimeout(3000);
    await page.getByText('Example 2: An image').click({modifiers:["Shift"]});
    await page.waitForTimeout(3000);

    //To take screenshot of the home page
    await page.screenshot({ path: 'MouseHoverActions.png', fullPage: true });

    // Assert the navigation or state change after shift+click
    expect(page.url()).toBe('https://the-internet.herokuapp.com/shifting_content');
    
    //Close the browser
    await browser.close();

});

function async() {
    throw new Error('Function not implemented.');
}