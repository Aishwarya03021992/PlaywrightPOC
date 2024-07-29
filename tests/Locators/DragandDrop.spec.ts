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

    // Launch the URL
    const page: Page = await browser.newPage();
    await page.goto('https://the-internet.herokuapp.com/drag_and_drop');

    // Locate the draggable elements
    const dragElementA = await page.locator('//div[@id="column-a"]');
    const dragElementB = await page.locator('//div[@id="column-b"]');

    await dragElementA.hover();
    await page.mouse.down();
    await dragElementB.hover();
    await page.mouse.up();

    // // Get the initial positions of the elements
    // const initialPositionA = await dragElementA.boundingBox();
    // const initialPositionB = await dragElementB.boundingBox();

    // // Perform Drag and Drop action
    // await dragElementA.dragTo(dragElementB);

    // Take a screenshot of the page after the drag-and-drop action
    await page.screenshot({ path: 'DragandDrop.png', fullPage: true });

    // Wait for the elements to be in their new positions
    await page.waitForTimeout(3000);

    // // Get the new positions of the elements
    // const newPositionA = await dragElementA.boundingBox();
    // const newPositionB = await dragElementB.boundingBox();

    // // Assertions to verify the elements have swapped positions
    // // expect(newPositionA).not.toEqual(initialPositionA);
    // // expect(newPositionB).not.toEqual(initialPositionB);

    // Close the browser
    await browser.close();
});
function async() {
    throw new Error('Function not implemented.');
}