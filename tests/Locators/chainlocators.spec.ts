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

test('chain locators POC', async () => {
    test.setTimeout(60000); // Set timeout to 60 seconds
    const browser: Browser = await chromium.launch({ 
        headless: false,
        channel: 'chrome' // To ensure Chrome is used
      });
   
      const page:Page = await browser.newPage();
    await page.goto('https://orangehrm.com/30-day-free-trial/');
    await page.locator('form#Form_getForm >> #Form_getForm_Name').fill('Aishwarya');
    await page.locator('form#Form_getForm >> #Form_getForm_Email').fill('xyz@gmail.com');
   // await page.locator('form#Form_getForm >> text=Get Your Free Trial').click();
    

    // const form = page.locator('form#Form_getForm');
    // const getYourFreeTrailButton = page.getByRole('button', { name : 'Get Your Free Trial'});

    // await form.locator(getYourFreeTrailButton).click();

    await page.locator('form#Form_getForm').getByRole('button', { name : 'Get Your Free Trial'});
    
    await page.waitForTimeout(3000);
});

function async() {
    throw new Error('Function not implemented.');
}
