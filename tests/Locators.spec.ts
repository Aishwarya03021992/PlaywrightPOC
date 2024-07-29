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
import {test, expect, Browser, type Page, Locator} from '@playwright/test';
import { assert, Console } from 'console';
import { text } from 'node:stream/consumers';
import { title } from 'process';

test('Locators', async () => {
    test.setTimeout(60000); // Set timeout to 60 seconds
    const browser: Browser = await chromium.launch({ 
        headless: false,
        channel: 'chrome' // To ensure Chrome is used
      });
    const page:Page = await browser.newPage();
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/register');

    test.setTimeout(60000); // Set timeout to 60 seconds
    const firstName:Locator = await page.locator('id=input-firstname');
    await firstName.fill('Aishwarya');

    const logo:Locator = await page.locator('.img-responsive');
    const logoExists = await logo.isEnabled();
    console.log("Print for the existance of Logo", logoExists);

    await expect(page.getByRole('heading',{name : 'Register Account'})).toBeVisible();
});

function async() {
    throw new Error('Function not implemented.');
}
