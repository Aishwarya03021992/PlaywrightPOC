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

import { BrowserContext, defineConfig } from '@playwright/test';

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

test('BrowserContextAdmin', async () => {
    test.setTimeout(60000); // Set timeout to 60 seconds
    const browser: Browser = await chromium.launch({ 
        headless: false,
        channel: 'chrome' // To ensure Chrome is used
      });

    // BrowserContextAdmin
    const browserContext_admin : BrowserContext = await browser.newContext();
    const pageAdmin:Page = await browserContext_admin.newPage();

    // BrowserContextLocalUser
    const browserContext_localUser : BrowserContext = await browser.newContext();
    const pageLocalUser:Page = await browserContext_localUser.newPage();

  //Browser Validations with Admin User
   await pageAdmin.goto('https://qa.swapa.org/');
  // Wait for the page to load completely
  await pageAdmin.waitForLoadState('networkidle');
  // Click the "Main Log in" button
  await pageAdmin.click('text=Log in');
  //Enter User Name
  const userNameAdmin = pageAdmin.locator('//input[@name="Username (Employee # WITHOUT the e)"]');
  await userNameAdmin.waitFor({ state: 'visible' });
  await userNameAdmin.fill('112298849'); 
  //Enter Password
  const passWordAdmin = pageAdmin.locator('//input[@name="Password"]');
  await passWordAdmin.fill('swapa8849');
  //Click Login Button
  test.setTimeout(60000); // Set timeout to 60 seconds
  const loginButtonAdmin = pageAdmin.locator('//button[@id="next"]');
  loginButtonAdmin.click();
  test.setTimeout(60000); // Set timeout to 60 seconds
  //Print Page Title
  const loginTilte = await pageAdmin.title();
  console.log("SWAPA Home Page Title: ", loginTilte);
  //Validate User lands on SWAPA Home Page
  await expect(pageAdmin).toHaveTitle(/SWAPA/);
  //To take screenshot of the home page
  await pageAdmin.screenshot({ path: 'SWAPAHomepageAdmin.png', fullPage: true });

 //Browser Validations with Local User
 await pageLocalUser.goto('https://qa.swapa.org/');
 // Wait for the page to load completely
 await pageLocalUser.waitForLoadState('networkidle');
 // Click the "Main Log in" button
 await pageLocalUser.click('text=Log in');
 //Enter User Name
 const userNameLocalUser = pageLocalUser.locator('//input[@name="Username (Employee # WITHOUT the e)"]');
 await userNameLocalUser.waitFor({ state: 'visible' });
 await userNameLocalUser.fill('22795'); 
 //Enter Password
 const passWordLocalUser = pageLocalUser.locator('//input[@name="Password"]');
 await passWordLocalUser.fill('Pilot@400');
 //Click Login Button
 test.setTimeout(60000); // Set timeout to 60 seconds
 const loginButtonLocalUser = pageLocalUser.locator('//button[@id="next"]');
 loginButtonLocalUser.click();
 test.setTimeout(60000); // Set timeout to 60 seconds
 //Print Page Title
 const loginTilteLocalUser = await pageLocalUser.title();
 console.log("SWAPA Home Page Title: ", loginTilte);
 //Validate User lands on SWAPA Home Page
 await expect(pageLocalUser).toHaveTitle(/SWAPA/);
 //To take screenshot of the home page
 await pageLocalUser.screenshot({ path: 'SWAPAHomepageLocalUser.png', fullPage: true });

  //Close the browser Context
  await browserContext_admin.close();
  await browserContext_localUser.close();

  //Main browser close
  await browser.close();
});

function async() {
    throw new Error('Function not implemented.');
}
