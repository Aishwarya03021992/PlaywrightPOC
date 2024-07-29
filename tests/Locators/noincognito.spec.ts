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

test('no incognito', async () => {
    test.setTimeout(60000); // Set timeout to 60 seconds
    const browser: BrowserContext = await chromium.launchPersistentContext('./session',{ headless:false,channel:'chrome'});
    
    const pages = browser.pages(); //Two pages 0 to 1
    const page:Page = pages[0];

   // const page:Page = await browser.newPage();
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/register');

    test.setTimeout(60000); // Set timeout to 60 seconds
    const firstName:Locator = await page.locator('id=input-firstname');
    await firstName.fill('Aishwarya');

    const lastName = await page.getByPlaceholder('Last Name');
    await lastName.fill('Kamaraj');

    const logo:Locator = await page.locator('.img-responsive');
    const logoExists = await logo.isEnabled();
    console.log("Print for the existance of Logo", logoExists);

    await expect(page.getByRole('heading',{name : 'Register Account'})).toBeVisible();

    const newsletterSelection: Locator = await page.locator('xpath=(//input[@value="1"])[2]');
    await newsletterSelection.click();

});

function async() {
    throw new Error('Function not implemented.');
}
