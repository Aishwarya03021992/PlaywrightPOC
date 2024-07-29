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
  testDir: './SWAPAAutomation',
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

test('login test', async () => {
    test.setTimeout(60000); // Set timeout to 60 seconds
    const browser: Browser = await chromium.launch({ 
        headless: false,
        channel: 'chrome' // To ensure Chrome is used
      });
    const page:Page = await browser.newPage();
    await page.goto('https://qa.swapa.org/');

  // Wait for the page to load completely
  await page.waitForLoadState('networkidle');

  // Click the "Main Log in" button
  await page.click('text=Log in');
  
  //Enter User Name
  const userName = page.locator('//input[@name="Username (Employee # WITHOUT the e)"]');
  await userName.waitFor({ state: 'visible' });
  await userName.fill('112298849');
  
  //Enter Password
  const passWord = page.locator('//input[@name="Password"]');
  await passWord.fill('swapa8849');

  //Click Login Button
  test.setTimeout(60000); // Set timeout to 60 seconds
  const loginButton = page.locator('//button[@id="next"]');
  loginButton.click();

  test.setTimeout(60000); // Set timeout to 60 seconds

  //Print Page Title
  const loginTilte = await page.title();
  console.log("SWAPA Home Page Title: ", loginTilte);

  //Validate User lands on SWAPA Home Page
  await expect(page).toHaveTitle(/SWAPA/);

  //To take screenshot of the home page
  await page.screenshot({ path: 'SWAPAHomepage.png', fullPage: true });

  //Close the browser
  await browser.close();
});

function async() {
    throw new Error('Function not implemented.');
}
