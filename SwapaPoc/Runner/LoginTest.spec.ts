/**
    * @description      : 
    * @author           : 
    * @group            : 
    * @created          : 28/07/2024 - 17:23:04
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 28/07/2024
    * - Author          : 
    * - Modification    : 
**/
import{test,expect} from '@playwright/test';
import { TestGridHomePage } from '../Pages/LoginPage.spec';
import { RegistrationPage } from '../Pages/RegisterPage.spec';

test('TestGrid Get Started Flow',async ({page}) => {
const homePage = new TestGridHomePage(page);
const regPage = new RegistrationPage(page);
await homePage.goTo();
await homePage.getStarted();
const delay = ms => new Promise(resolve => setTimeout(resolve, ms));
await delay(10000);
await regPage.fillForm();
})