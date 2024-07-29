/**
    * @description      : 
    * @author           : 
    * @group            : 
    * @created          : 28/07/2024 - 17:15:39
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 28/07/2024
    * - Author          : 
    * - Modification    : 
**/
import { expect, Locator, Page } from '@playwright/test';
export class TestGridHomePage{
readonly url="https://testgrid.io/";
readonly page: Page;
readonly getStartedButton: Locator;


constructor(page: Page){
this.page = page;
this.getStartedButton = page.locator('text=Get started');
}


async goTo(){
await this.page.goto(this.url);
}


async getStarted(){
await this.getStartedButton.click();
}

}