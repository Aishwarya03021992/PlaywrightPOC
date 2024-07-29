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

import { defineConfig } from '@playwright/test';

export default defineConfig({
    projects: [
    {
        name: 'chrome',
        use: { 
          browserName: 'chromium',
          channel: 'chrome' // This specifies to use the Chrome browser
        },
      },
    ],
  testDir: './tests',
  timeout: 60000,
  retries: 2,
  reporter: 'list',
  use: {
    headless: false,
  },
});

const {chromium} = require('playwright');
import {test, expect, Browser, type Page} from '@playwright/test';
import { assert, Console } from 'console';
import { text } from 'node:stream/consumers';
import { title } from 'process';

test('popup authentication', async () => {
    test.setTimeout(60000); // Set timeout to 60 seconds
    const browser: Browser = await chromium.launch({ 
        headless: false,
        channel: 'chrome' // To ensure Chrome is used
      });
    const page:Page = await browser.newPage();
   
//    const userName = 'admin';
//    const passWord = 'admin';
//    const authHeader = 'Basic' + btoa(userName+':'+passWord);
//    page.setExtraHTTPHeaders({Authorizaton : authHeader});
//    await page.goto('http://the-internet.herokuapp.com/basic_auth');
   
   await page.goto('https://admin:admin@the-internet.herokuapp.com/basic_auth');

   // Wait for the page to load completely
   await page.waitForLoadState('networkidle');

  //Close the browser
   await browser.close();
});

function async() {
    throw new Error('Function not implemented.');
}