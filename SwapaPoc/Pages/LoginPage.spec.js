"use strict";
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
class LoginPage {
    constructor(page) {
        this.page = page;
    }
    clickSignIn() {
        return __awaiter(this, void 0, void 0, function* () {
            const signIn = yield this.page.locator('//a[contains(text(),"Log in")]');
            yield signIn.click();
        });
    }
    enterUserName(UserName) {
        return __awaiter(this, void 0, void 0, function* () {
            const userName = yield this.page.locator('//input[@placeholder="Username (Employee # WITHOUT the e)"]');
            yield userName.fill(UserName);
        });
    }
    enterPassword(Password) {
        return __awaiter(this, void 0, void 0, function* () {
            const passWord = yield this.page.getByPlaceholder('Password');
            yield passWord.fill(Password);
        });
    }
    clickLoginButton() {
        return __awaiter(this, void 0, void 0, function* () {
            const loginButton = yield this.page.locator('//button[text()="Log In"]');
            yield loginButton.click();
        });
    }
}
exports.default = LoginPage;
