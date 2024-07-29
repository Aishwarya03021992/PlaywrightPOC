/**
    * @description      : 
    * @author           : 
    * @group            : 
    * @created          : 28/07/2024 - 17:21:01
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 28/07/2024
    * - Author          : 
    * - Modification    : 
**/
import { expect, Locator, Page } from '@playwright/test';
export class RegistrationPage{
readonly page: Page;
readonly fullName: Locator;
readonly email: Locator;
readonly mobile: Locator;
readonly password: Locator;
readonly signUpButton: Locator;


constructor(page: Page){
this.page = page;
this.fullName = page.locator('id=full_name');
this.email = page.locator('id=business_email');
this.mobile = page.locator('id=mobile_number');
this.password = page.locator('id=password');
this.signUpButton = page.locator('id=signin-button');
}


async fillForm(){
await this.fullName.fill("Your Name");
await this.email.fill("Your email id");
await this.mobile.fill("Your mobile number");
await this.password.fill("Your choice password");
await this.signUpButton.click();
}


}