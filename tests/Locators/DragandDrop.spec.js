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
(0, test_1.test)('Mouse Actions', () => __awaiter(void 0, void 0, void 0, function* () {
    test_1.test.setTimeout(60000); // Set timeout to 60 seconds
    const browser = yield chromium.launch({
        headless: false,
        channel: 'chrome' // To ensure Chrome is used
    });
    // Launch the URL
    const page = yield browser.newPage();
    yield page.goto('https://the-internet.herokuapp.com/drag_and_drop');
    // Locate the draggable elements
    const dragElementA = yield page.locator('//div[@id="column-a"]');
    const dragElementB = yield page.locator('//div[@id="column-b"]');
    yield dragElementA.hover();
    yield page.mouse.down();
    yield dragElementB.hover();
    yield page.mouse.up();
    // // Get the initial positions of the elements
    // const initialPositionA = await dragElementA.boundingBox();
    // const initialPositionB = await dragElementB.boundingBox();
    // // Perform Drag and Drop action
    // await dragElementA.dragTo(dragElementB);
    // Take a screenshot of the page after the drag-and-drop action
    yield page.screenshot({ path: 'DragandDrop.png', fullPage: true });
    // Wait for the elements to be in their new positions
    yield page.waitForTimeout(3000);
    // // Get the new positions of the elements
    // const newPositionA = await dragElementA.boundingBox();
    // const newPositionB = await dragElementB.boundingBox();
    // // Assertions to verify the elements have swapped positions
    // // expect(newPositionA).not.toEqual(initialPositionA);
    // // expect(newPositionB).not.toEqual(initialPositionB);
    // Close the browser
    yield browser.close();
}));
function async() {
    throw new Error('Function not implemented.');
}
